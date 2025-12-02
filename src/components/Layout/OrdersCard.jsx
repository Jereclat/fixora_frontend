import { ChevronUp, Package, ShoppingCart } from "lucide-react";
import boy from "../../assets/boyy.png";

export const OrdersCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-sm border 
    border-gray-200 flex justify-between h-[200px] relative">
      <div className="flex flex-col w-full">
        <div className="flex items-start justify-between">
          <div className="bg-[#E7E7FF] p-2 rounded-xl text-center items-center self-center">
            <ShoppingCart className="text-[#393ffd]" size={20} />
          </div>
          <div className="flex">
            <p className="text-green-400 text-sm font-medium">+22%</p>
            {/* <ChevronUp className="text-green-400" /> */}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl text-gray-700 font-bold">35</h2>
          <p className="text-gray-500 text-sm font-semibold">Total Bookings</p>
        </div>

        <button className="mt-4 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium w-fit">
          Last Month
        </button>
      </div>

      <div className="absolute bottom-0 right-10">
        <img src={boy} alt="" width={100}/>
      </div>
    </div>
  );
};
