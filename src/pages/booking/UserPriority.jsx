import UserHeader from "../../components/UserUI/userHeader";
import UserFooter from "../../components/UserUI/userFooter";
import BottomNav from "../../components/UserUI/userBottomNav";

export default function UserPriority() {
  return (
    <div className="min-h-screen w-full">
      <UserHeader />

      {/* Main content wrapper */}
      <div className="px-4 pb-28 lg:pb-0">
        <div className="flex flex-1 justify-center py-10 sm:py-20">
          <div className="flex flex-col w-full max-w-xl flex-1">
            {/* Progress Bar */}
            <div className="flex flex-col gap-2 p-4">
              <p className="text-[#4A403A] text-base font-medium leading-normal">
                Step 3 of 5: Urgency
              </p>
              <div className="rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-brand"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            {/* Page Heading */}
            <div className="flex flex-col gap-3 p-4 mt-8 text-center">
              <h1 className="text-gray-700 text-4xl font-black leading-tight tracking-tight">
                What's the urgency?
              </h1>
              <p className="text-gray-400 font-normal leading-normal">
                This helps us match you with the right available artisan.
              </p>
            </div>

            {/* Urgency Selection */}
            <div className="flex flex-col gap-4 p-4 mt-8">
              {/* Low Urgency */}
              <div className="relative">
                <input
                  defaultChecked
                  className="sr-only"
                  id="urgency-low"
                  name="urgency-level"
                  type="radio"
                  value="low"
                />
                <label
                  className="flex flex-col sm:flex-row items-center gap-4 rounded-xl border-2 border-solid border-transparent bg-white p-6 shadow-sm cursor-pointer transition-all hover:shadow-md ring-2 ring-transparent"
                  htmlFor="urgency-low"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <span className="material-symbols-outlined text-3xl text-brand">
                      calendar_month
                    </span>
                  </div>
                  <div className="flex grow flex-col text-center sm:text-left">
                    <p className="text-gray-700 text-lg font-bold leading-normal">
                      Low
                    </p>
                    <p className="text-gray-400 text-base font-normal leading-normal">
                      Flexible timeline, within a few weeks
                    </p>
                  </div>
                </label>
              </div>

              {/* Medium Urgency */}
              <div className="relative">
                <input
                  className="sr-only"
                  id="urgency-medium"
                  name="urgency-level"
                  type="radio"
                  value="medium"
                />
                <label
                  className="flex flex-col sm:flex-row items-center gap-4 rounded-xl border-2 border-solid border-transparent bg-white p-6 shadow-sm cursor-pointer transition-all hover:shadow-md ring-2 ring-transparent"
                  htmlFor="urgency-medium"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <span className="material-symbols-outlined text-3xl text-brand">
                      schedule
                    </span>
                  </div>
                  <div className="flex grow flex-col text-center sm:text-left">
                    <p className="text-gray-700 text-lg font-bold leading-normal">
                      Medium
                    </p>
                    <p className="text-gray-400 text-base font-normal leading-normal">
                      Needs attention soon, within the week
                    </p>
                  </div>
                </label>
              </div>

              {/* High Urgency */}
              <div className="relative">
                <input
                  className="sr-only"
                  id="urgency-high"
                  name="urgency-level"
                  type="radio"
                  value="high"
                />
                <label
                  className="flex flex-col sm:flex-row items-center gap-4 rounded-xl border-2 border-solid border-transparent bg-white p-6 shadow-sm cursor-pointer transition-all hover:shadow-md ring-2 ring-transparent"
                  htmlFor="urgency-high"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <span className="material-symbols-outlined text-3xl text-brand">
                      siren
                    </span>
                  </div>
                  <div className="flex grow flex-col text-center sm:text-left">
                    <p className="text-gray-700 text-lg font-bold leading-normal">
                      High
                    </p>
                    <p className="text-gray-400 text-base font-normal leading-normal">
                      Emergency, needs immediate attention
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Button Group */}
            <div className="flex justify-stretch mt-10">
              <div className="flex flex-1 gap-4 flex-wrap px-4 py-3 justify-between">
                <button className="flex min-w-[84px] max-w-[480px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-blue-100 text-brand font-bold leading-normal tracking-[0.015em] hover:bg-blue-200 transition-colors">
                  <span className="truncate">Back</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-brand text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors">
                  <span className="truncate">Continue</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <UserFooter />
        </div>
      </div>
      <BottomNav />

      {/* Add Material Symbols styles */}
      <style jsx global>{`
        .material-symbols-outlined {
          font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
        }
        input[type="radio"]:checked + label {
          border-color: #2563eb;
          background-color: #dbeafe;
          --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
          --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
          --tw-ring-color: #2563eb;
        }
      `}</style>
    </div>
  );
}
