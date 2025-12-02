import { useRef } from "react";
import UserHeader from "../../components/ui/userHeader";
import UserHero from "../../components/ui/userHero";
import UserFilter from "../../components/ui/userfilter";
import ArtisanCards from "../../components/ui/artisanCard";
import BottomNav from "../../components/ui/userBottomNav";
import UserFooter from "../../components/ui/userFooter";

export default function UserDashboard() {
  const cardsRef = useRef(null);
  return (
    <div className="min-h-screen w-full bg-[#f8f5f2] px-4">
      <UserHeader />
      <div className="sm:px-8 md:px-16 lg:px-24 xl:px-24 pb-28 lg:pb-0">
        <UserHero scrollTargetRef={cardsRef} />
        <UserFilter />
        <div ref={cardsRef}>
          <ArtisanCards />
        </div>
        <div className="hidden lg:block">
          <UserFooter />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
