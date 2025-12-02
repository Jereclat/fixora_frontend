import { ChevronUp, LineChart } from "lucide-react";
import girl from "../../assets/girrl.png"

export const SessionsCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-sm border 
    border-gray-200 flex flex-col justify-between relative">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-700">₦3,800,000</h2>
          <p className="text-gray-500 text-sm">Sessions</p>
        </div>
        <div className="flex">
          <p className="text-green-400 text-sm font-medium">+62%</p>
          {/* <ChevronUp className="text-green-400"/> */}
        </div>
      </div>

      <div className="absolute bottom-0 right-10">
        <img src={girl} alt="" width={80} />
      </div>
    </div>
  );
};
