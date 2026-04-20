import UserHeader from "../../components/UserUI/userHeader";
import UserFooter from "../../components/UserUI/userFooter";
import BottomNav from "../../components/UserUI/userBottomNav";
import profileImg from "../../assets/profile.png";

export default function BookingProgress() {
  return (
    <div className="min-h-screen w-full">
      <UserHeader />

      {/* Main content wrapper */}
      <div className="px-4 pb-28 lg:pb-0">
        <div className="flex py-10 sm:py-20">
          <div className="w-full">
            <div className=" mt-6 shadow-md bg-white text-gray-400 flex py-4 px-6 lg:w-[70%] w-full rounded-xl">
              <div className="flex">
                <img src={profileImg} loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <UserFooter />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
