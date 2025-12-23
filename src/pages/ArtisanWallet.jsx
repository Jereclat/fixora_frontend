import { ArrowDownLeft, ArrowUpRight, Wallet, Banknote } from "lucide-react";

const stats = [
  {
    title: "Wallet Balance",
    value: "₦245,300",
    icon: <Wallet className="w-6 h-6 text-[#393ffd]" />,
  },
  {
    title: "Pending Earnings",
    value: "₦58,000",
    icon: <ArrowUpRight className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Total Earnings",
    value: "₦1,280,500",
    icon: <Banknote className="w-6 h-6 text-green-500" />,
    growth: "+18%",
  },
  {
    title: "Withdrawn",
    value: "₦1,035,200",
    icon: <ArrowDownLeft className="w-6 h-6 text-red-500" />,
  },
];

export const ArtisanWallet = () => {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-semibold">Wallet</h1>
        <p className="text-gray-500">
          Manage your earnings and payouts
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="text-xl font-semibold mt-1">
                  {item.value}
                </p>
                {item.growth && (
                  <span className="text-green-500 text-sm">
                    {item.growth}
                  </span>
                )}
              </div>
              <div className="bg-gray-50 p-3 rounded-full">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Earnings Chart Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-semibold mb-4">Earnings Overview</h3>
          <div className="h-56 flex items-center justify-center text-gray-400">
            Chart goes here
          </div>
        </div>

        {/* Withdraw Card */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-semibold mb-2">Withdraw Funds</h3>
          <p className="text-sm text-gray-500 mb-6">
            Available Balance
          </p>

          <p className="text-3xl font-bold mb-6 text-[#393ffd]">
            ₦245,300
          </p>

          <button className="w-full bg-[#393ffd] hover:bg-[#2c33fa] text-white py-3 rounded-md font-medium transition">
            Withdraw
          </button>

          <div className="mt-4 text-sm text-gray-500">
            Bank: <span className="font-medium">GTBank •••• 4821</span>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="p-6 border-b">
          <h3 className="font-semibold">Recent Transactions</h3>
        </div>

        <div className="divide-y">
          {[
            {
              name: "John Stevenson",
              job: "AC Repair",
              amount: "+₦25,000",
              status: "Completed",
              type: "credit",
            },
            {
              name: "Withdrawal",
              job: "Bank Transfer",
              amount: "-₦50,000",
              status: "Successful",
              type: "debit",
            },
            {
              name: "Benedetto Rossiter",
              job: "Generator Fix",
              amount: "+₦18,000",
              status: "Pending",
              type: "credit",
            },
          ].map((tx, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-6 py-4"
            >
              <div>
                <p className="font-medium">{tx.name}</p>
                <p className="text-sm text-gray-500">{tx.job}</p>
              </div>

              <div className="text-right">
                <p
                  className={`font-semibold ${
                    tx.type === "credit"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {tx.amount}
                </p>
                <span className="text-xs text-gray-500">
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
