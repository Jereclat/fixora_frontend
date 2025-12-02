import { Clock } from "lucide-react";
import Transaction from "../../assets/Transactions.svg"

export const ReportCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex">
      
      {/* LEFT SIDE — Total Transactions */}
      <div className="w-[60%] pr-6 border-r">
        <h2 className="text-lg font-semibold mb-4">Total Transactions</h2>

        <div className="w-fullrounded-xl">
          <img src={Transaction} alt="" />
        </div>
      </div>

      {/* RIGHT SIDE — Report */}
      <div className="w-[40%] pl-6 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">Report</h2>

          <p className="text-gray-500 text-sm mt-1">
            Last month transactions $234.40k
          </p>

          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2 text-green-600">
              <Clock size={16} /> This Week +82.45 percent
            </p>

            <p className="text-red-500 text-sm">
              This Week -24.86 percent
            </p>

            <p className="text-indigo-600 text-sm">
              Performance +94.15 percent
            </p>
          </div>
        </div>

        <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm">
          View Report
        </button>
      </div>

    </div>
  );
}
