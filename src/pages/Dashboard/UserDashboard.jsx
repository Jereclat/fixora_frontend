import UserHeader from "../../components/ui/userHeader";
import UserHero from "../../components/ui/userHero";
import UserFilter from "../../components/ui/userfilter";
import ArtisanCards from "../../components/ui/artisanCard";

export default function UserDashboard() {
  return (
    <div className="min-h-screen w-full bg-[#f8f5f2] px-4">
      <UserHeader />
      <div className="sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <UserHero />
        <UserFilter />
        <ArtisanCards />
      </div>
    </div>
  );
}
