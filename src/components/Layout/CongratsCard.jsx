import { ArrowRight } from "lucide-react";
import congrats from "../../assets/congrats.png";

export const CongratsCard = () => {
  return (
    <div
      className="w-full bg-white rounded-2xl p-6 
    shadow-sm border border-gray-200 flex justify-between items-center h-[200px] relative"
    >
      <div className="space-y-3 w-full">
        <h1 className="text-2xl font-semibold text-gray-700">
          Congratulations{" "}
          <span className="text-[#393ffd] font-bold">John!</span> 🎉
        </h1>

        <p className="text-gray-500 text-sm leading">
          You taken 68% more jobs today. <br />
          Check your new badge in your profile.
        </p>

        <button
          className="mt-4 bg-[#393ffd] hover:bg-[#262dfb] text-white px-5 py-2 
        rounded-lg flex items-center gap-2 text-sm font-semibold cursor-pointer"
        >
          View Profile
        </button>
      </div>

      <div className="absolute bottom-0 right-5">
        <img src={congrats} alt="" width={300}/>
      </div>
    </div>
  );
};
