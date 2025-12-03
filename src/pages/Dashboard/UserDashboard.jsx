import { useRef } from "react";
import UserHeader from "../../components/UserUI/userHeader";
import { UserHero } from "../../components/UserUI/userHero";
import UserFilter from "../../components/UserUI/userfilter";
import ArtisanCards from "../../components/UserUI/artisanCard";
import BottomNav from "../../components/UserUI/userBottomNav";
import UserFooter from "../../components/UserUI/userFooter";

export default function UserDashboard() {
  const cardsRef = useRef(null);
  return (
    <div className="min-h-screen w-full">
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
