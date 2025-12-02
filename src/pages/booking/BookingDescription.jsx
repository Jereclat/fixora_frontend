import UserHeader from "../../components/ui/userHeader";
import UserFooter from "../../components/ui/userFooter";
import BottomNav from "../../components/ui/userBottomNav";
import { X, Lightbulb } from "lucide-react";

export default function BookingDescription() {
  return (
    <div className="min-h-screen w-full bg-[#f8f5f2] px-4">
      <UserHeader />

      {/* Main content wrapper */}
      <div className="sm:px-8 md:px-16 lg:px-10 xl:px-10 pb-28 lg:pb-0">
        {/* Progress Bar */}
        <div className="w-full ">
          <div className="flex flex-col gap-2 p-4">
            <div className="flex gap-6 justify-between">
              <p className="text-[#161413] text-sm font-medium leading-normal">Step 1 of 4</p>
            </div>
            <div className="rounded-full bg-[#e2e0df] h-2">
              <div className="h-2 rounded-full bg-[#6d4c41]" style={{ width: '25%' }}></div>
            </div>
            <p className="text-[#7c756e] text-sm font-normal leading-normal">Describe Issue</p>
          </div>
        </div>

        {/* Page Heading */}
        <div className="w-full max-w-3xl mt-10">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex flex-col gap-2">
              <p className="text-[#161413] text-4xl font-black leading-tight tracking-[-0.033em]">Describe your issue</p>
              <p className="text-[#7c756e] text-base font-normal leading-normal">
                Provide a detailed description and upload photos to help artisans understand the problem and give you an accurate quote.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-7xl mx-auto">
          {/* Left Column: Form Inputs */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Text Field */}
            <div className="flex flex-col gap-4 p-4">
              <label className="flex flex-col w-full">
                <p className="text-[#161413] text-base font-medium leading-normal pb-2">Detailed Description</p>
                <textarea 
                  className="flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-xl text-[#161413] focus:outline-0 focus:ring-2 focus:ring-[#6d4c41]/50 border border-[#e2e0df] bg-white min-h-48 placeholder:text-[#7c756e] p-[15px] text-base font-normal leading-normal" 
                  placeholder="Please describe the problem in as much detail as possible. What is the item? What is broken or needs work?"
                ></textarea>
              </label>
            </div>

            {/* File Upload */}
            <div className="flex flex-col p-4">
              <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#e2e0df] px-6 py-10">
                <div className="flex max-w-[480px] flex-col items-center gap-2">
                  <p className="text-[#161413] text-lg font-bold leading-tight tracking-[-0.015em] text-center">Upload Photos or Videos (Optional)</p>
                  <p className="text-[#7c756e] text-sm font-normal leading-normal text-center">Drag and drop files here or click the button below. This helps artisans provide a more accurate quote.</p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f3f2f1] text-[#161413] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 transition-colors">
                  <span className="truncate">Browse Files</span>
                </button>
              </div>
            </div>

            {/* Uploaded Files Preview */}
            <div className="px-4 flex flex-col gap-4">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-white border border-[#e2e0df]">
                <img 
                  className="h-16 w-16 rounded-md object-cover" 
                  alt="A close-up of a broken wooden chair leg." 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCSweq73P7Umn0Gy1eSpmom9kRKvBSLkM87BsVcY6OPl0N8Q-LEZMbGrVm0fj_Clg0N0ZGDb6vVLsEvD6_oXRqe5_T5X8u6-NyDgilbaqa5O_7N5Gc0vZjREXLkBdDnAjWURer_k7G7dVlxgWCUTMIoCyvKrVwFjp6Vn4rTr1cAM96HKKbi2iuaSF3NeQL9wTDWPIevS7WK31h968yIOlsPfq31jy_WwvMsqr9mUw7myLLgqzodNTN8ohIsLa8y6hO_NiWq7nBZt9J"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#161413]">broken_chair_leg.jpg</p>
                  <p className="text-xs text-[#7c756e]">1.2 MB</p>
                </div>
                <button className="p-2 rounded-full text-[#7c756e] hover:bg-gray-100 transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-lg bg-white border border-[#e2e0df]">
                <img 
                  className="h-16 w-16 rounded-md object-cover" 
                  alt="A wider shot of the entire wooden chair showing the damage." 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyBBPgvmoZABg_lrL-nKKW_qilBJTrxUYWNjf0S6gL9bCTpIwCy1Pa00tIA_qQCupv2w850GmDMAPHyhUbOzNVHXTEMgaI-5fG4y2lkzFTiz9y5pUKRrM_B4bkGlQdMpJ3NmHYwvPqJIOBKAzPCb5F0sGr8hEFsLS1518B0VbyKVdcdezIw1IKWXMX8lgwfPkarpKaCMB67jQpf_4Qkt7j5Yh9TK2La2n1gp6pJU2eamfwIjHo5naTx7bpGO7d0vF26AbteHx3LlUB"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#161413]">chair_angle_view.jpg</p>
                  <p className="text-xs text-[#7c756e]">2.5 MB</p>
                </div>
                <button className="p-2 rounded-full text-[#7c756e] hover:bg-gray-100 transition-colors">
                 <X size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Tips Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-xl bg-[#6d4c41]/10 p-6 lg:p-8">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                 <Lightbulb size={40} className="text-[#6d4c41]"/>
                  <h3 className="text-xl font-bold text-[#6d4c41]">Helpful Tips</h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="font-semibold text-[#161413] mb-1">What to include:</h4>
                    <ul className="list-disc list-inside text-[#7c756e] text-sm space-y-1">
                      <li>Mention the type of item and material.</li>
                      <li>Describe when the issue started.</li>
                      <li>Include approximate dimensions.</li>
                      <li>Note any specific repair requests.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#161413] mb-1">Photo Tips:</h4>
                    <ul className="list-disc list-inside text-[#7c756e] text-sm space-y-1">
                      <li>Take photos in good lighting.</li>
                      <li>Show the issue from multiple angles.</li>
                      <li>Include one photo of the entire item for context.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button Group */}
        <div className="w-full max-w-7xl mx-auto pt-8">
          <div className="flex justify-between gap-4 flex-wrap px-4 py-3 border-t border-[#e2e0df]">
            <button className="flex min-w-[84px] max-w-[480px] bg-[#e2dcd7] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5  text-[#161413] text-base font-bold leading-normal tracking-[0.015em] border-2 border-transparent hover:bg-gray-100 transition-colors">
              <span className="truncate">Back</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#6d4c41] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#856051] transition-colors">
              <span className="truncate">Continue</span>
            </button>
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