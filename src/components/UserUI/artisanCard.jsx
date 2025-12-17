import React from "react";
import { useNavigate } from "react-router-dom";

const ArtisanCards = () => {
  const artisans = [
    {
      id: 1,
      name: "Elena Vance",
      profession: "Ceramic Artist",
      rating: 4.9,
      reviews: 120,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=150&h=150&fit=crop&crop=face",
      product:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      description:
        "I craft beautiful ceramic pieces with passion and precision, creating timeless art for your home",
    },
    {
      id: 2,
      name: "Marcus Finch",
      profession: "Custom Furniture Maker",
      rating: 4.8,
      reviews: 88,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      product:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      description:
        "I build custom furniture tailored to your style, making spaces beautiful and functional with skill",
    },
    {
      id: 3,
      name: "Clara Redwood",
      profession: "Handwoven Textiles",
      rating: 5.0,
      reviews: 154,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      product:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      description:
        "I weave stunning textiles with intricate patterns, bringing warmth and color to every creation",
    },
    {
      id: 4,
      name: "Samuel Croft",
      profession: "Leather Goods Crafter",
      rating: 4.7,
      reviews: 95,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      product:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      description:
        "I craft premium leather goods with expert hands, creating durable pieces that last and stand",
    },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/user/artisan-profile");
  };

  return (
    <div className="py-2">
      <div className="w-full     mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              className="relative group bg-white rounded-2xl shadow-sm border 
              border-gray-100 overflow-hidden transition-all duration-500 
              ease-out hover:shadow-xl hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-amber-50 flex overflow-hidden">
                <img
                  src={artisan.product}
                  alt={artisan.profession}
                  className="w-full h-full object-cover shadow-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 pb-8">
                {/* Profile Image */}
                <div className="flex -mt-9 relative z-10 space-x-3">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-lg ring-4 ring-amber-50/50 transition-all duration-500 group-hover:ring-amber-100/75"
                  />

                  {/* Name & Profession */}
                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[var(--brand)] transition-colors duration-300">
                      {artisan.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 font-medium">
                      {artisan.profession}
                    </p>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="line-clamp-3">{artisan.description}</p>
                </div>

                <div className="flex justify-between w-full items-center">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex gap-1">
                      <svg
                        className="w-5 h-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {artisan.rating} ({artisan.reviews})
                    </span>
                  </div>

                  {/* View Profile Button */}
                  <button
                    onClick={handleClick}
                    className="w-fit mt-6 px-4 py-3 bg-brand text-white rounded-xl font-medium text-sm shadow-sm hover:from-amber-600 
                  hover:to-orange-600 hover:shadow-md hover:scale-105 transition-all duration-300 active:scale-95 hover:cursor-pointer"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-brand text-white item-center rounded-xl px-4 py-2 flex mx-auto mt-6 hover:cursor-pointer shadow-md">View More</button>
      </div>
    </div>
  );
};

export default ArtisanCards;
