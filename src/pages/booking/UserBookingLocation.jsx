import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = { width: "100%", height: "400px", borderRadius: "1rem" };
const defaultArtisan = { lat: 37.7749, lng: -122.4194 }; // fallback

export default function BookingLocation() {
  const [userPosition, setUserPosition] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(defaultArtisan);
  const [distance, setDistance] = useState(null);
  const [streetAddress, setStreetAddress] = useState("");
  const [apt, setApt] = useState("");

  const debounceRef = useRef(null);
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserPosition({ lat: latitude, lng: longitude });
        calculateDistance({ lat: latitude, lng: longitude }, markerPosition);
      });
    }
  }, []);

  // Calculate distance
  const calculateDistance = (origin, destination) => {
    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          const result = response.rows[0].elements[0];
          setDistance(`${result.distance.text} (${result.duration.text})`);
        }
      }
    );
  };

  // Handle map clicks or marker drag
  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkerPosition(newMarker);
    if (userPosition) calculateDistance(userPosition, newMarker);
  };

  // Handle address input with debouncing
  useEffect(() => {
    if (!streetAddress) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: streetAddress }, (results, status) => {
        if (status === "OK" && results[0]) {
          const location = results[0].geometry.location;
          const coords = { lat: location.lat(), lng: location.lng() };
          setMarkerPosition(coords);
          if (userPosition) calculateDistance(userPosition, coords);
        }
      });
    }, 500); // wait 500ms after user stops typing

    return () => clearTimeout(debounceRef.current);
  }, [streetAddress, userPosition]);

  return (
    <div className="min-h-screen w-full">
      <UserHeader />

      <div className="px-8 md:px-16 lg:px-24 xl:px-24 pb-28 lg:pb-0">
        <div className="bg-white dark:bg-background-dark dark:border dark:border-border-dark shadow-sm rounded-xl p-6 sm:p-8 lg:p-10">
          <h1 className="text-text-light dark:text-text-dark text-3xl lg:text-4xl font-black mb-4">
            Enter Service Location
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div className="flex flex-col gap-6">
              <label className="flex flex-col flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium pb-2">
                  Street Address
                </p>
                <input
                  type="text"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light/50 dark:border-border-dark bg-white dark:bg-subtle-dark h-14 placeholder:text-text-light/50 p-[15px]"
                  placeholder="e.g., 123 Artisan Way"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
              </label>

              <label className="flex flex-col flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium pb-2">
                  Apt, Suite, etc. (Optional)
                </p>
                <input
                  type="text"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light/50 dark:border-border-dark bg-white dark:bg-subtle-dark h-14 placeholder:text-text-light/50 p-[15px]"
                  placeholder="e.g., Unit 5B"
                  value={apt}
                  onChange={(e) => setApt(e.target.value)}
                />
              </label>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-4">
              <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={userPosition || markerPosition}
                  zoom={14}
                  onClick={handleMapClick}
                >
                  {userPosition && (
                    <Marker
                      position={userPosition}
                      label="You"
                      icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                      }}
                    />
                  )}

                  <Marker
                    position={markerPosition}
                    draggable={true}
                    onDragEnd={(e) => handleMapClick({ latLng: e.latLng })}
                    label="Artisan"
                    icon={{
                      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    }}
                  />
                </GoogleMap>
              </LoadScript>

              {/* Distance Info */}
              <div className="bg-subtle-light dark:bg-subtle-dark p-4 rounded-lg flex items-center gap-4">
                <div className="flex-shrink-0 bg-primary/20 text-primary p-3 rounded-full">
                  <span className="material-symbols-outlined">distance</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal">
                    Estimated Distance to Artisan
                  </p>
                  <p className="text-text-light dark:text-text-dark text-base font-bold">
                    {distance || "~calculating..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <UserFooter />
      </div>
      <BottomNav />
    </div>
  );
}
