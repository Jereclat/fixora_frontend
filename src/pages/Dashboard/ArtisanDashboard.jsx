import { Bookings } from "../../components/Layout/Booking";
import { Carousel } from "../../components/Layout/Carousel";
import { Catalog } from "../../components/Layout/Catalog";
import { CongratsCard } from "../../components/Layout/CongratsCard";
import { OrdersCard } from "../../components/Layout/OrdersCard";
import { SessionsCard } from "../../components/Layout/SessionsCard";

export const ArtisanDashboard = () => {
  return (
    <div className="w-full py-4 space-y-6 max-w-[1400px] mx-auto">
      {/* TOP 3 CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2">
          <CongratsCard />
        </div>

        <div className="flex gap-6 md:col-span-2">
          <OrdersCard />
          <SessionsCard />
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2">
          <Carousel />
        </div>
        <div className="md:col-span-2">
          <Bookings />
        </div>
      </div>

      {/* BOTTOM ROW */}
      <Catalog />
    </div>
  );
};
