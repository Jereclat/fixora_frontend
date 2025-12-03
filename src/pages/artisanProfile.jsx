import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import UserHeader from "../components/UserUI/userHeader";
import UserFooter from "../components/UserUI/userFooter";
import BottomNav from "../components/UserUI/userBottomNav";

export default function ArtisanProfile() {
  const [selectedImage, setSelectedImage] = useState(null);

const navigate = useNavigate();

const handleClick = () => {
    navigate('/user/booking-description');
}

  const images = [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDTSyW0ZZI4BujG4CFgdgzpUgFrjbip8NWND2vDLpMypAytzcrq0mXfI5BdNU4d4bKOcrGfR5xzJWKt6t9q0ZiYp7m2507v9iro-MVQ4ECf6HfaS_W_QF-lRDUUuNeHvuLID4dp_6QX01QgpiaBKG9lJH5IkkWqp7nMUohE4lSTj4LUktCpR-D0E6qDqSojXAH6GODsNXl8PV5mku8aULEJsAX_QmRZNl_Kf9A5DtMuvVMy0Ws2abBhEv3mOyM2ZvvfeF0gEDZbOxl2", "https://lh3.googleusercontent.com/aida-public/AB6AXuDj0b4oTx-eBfjdEv17RSETo7wuX3VRDdvnUHIDIg1_G1Z4CincjD9-6vyp09arTti8EMs52JMP-vJC4ygKn4uEODsrgWTuZDNydhwZH0DqEF2ZvzuYGisbNoNGd9jp18ztt-WEJlmLbPeFv2KGPPSoJCmSW7mwOrNsBQLi5qVwleYwDcHRssstAjbctI3w7xA6k8Lgz-vb61kHrk1oddDoomAyPZfYX8SsRKIMZTTbJOxSN10teHSVReKDLVq0HqPPFE4k1MTJjG7o", "https://lh3.googleusercontent.com/aida-public/AB6AXuAlPXYmhWUIN3PZvGnPMVi41uOsSjTp0mbDJDMEfFtjvEpf7RtFKrPWGv8hueSG86Cfaw58NMwcvsiNgoqHzTXR7PgeRflbKlnPnJqQuyWEJmYv3vD_MUhwbcYfkdmP8sm1KZ4mYefuWL4YhuKC21_DAFlhEEsLzNb_2qqrmK1mD5jG3IicRKmIn_vftXpLRYaFIm4uKnBmqlCX0P1bmhWGk0iVxlSEbrgCGHMkFGS4XaeKJK0MVrmakDMj8VwFdNDDPhMvdV858BPz", "https://lh3.googleusercontent.com/aida-public/AB6AXuCItF-XcH86SYPjmGftjESFeZRpjHmdBc2HYFb99Jk21XsC8Xo-dmJ-Ho0ZfDQL6h5LkMFt0Dr6cNEjTITEoXrBaY3HU-b1P4rZVbDH5DSeSC0N8dTRtygfijb2Dg9ZGduXu23ZAJMdsxSf9BAD3EtIG_ZLT36Vg4cENhXJEsFG7fPYgAMdqt85vYX9eK0m6epUZiQo9AsWEY2EWOomVtP3B7tZCPGfl8uOI1Zejm9dIhj9IL2Z_MXgvpkhmhVAh1eEWyf6ZQFKApVO", "https://lh3.googleusercontent.com/aida-public/AB6AXuBhfPxcqUkzgdv47DLVa15VPd7OMY0I2Fj0tsIdIZrAoSmGbnUHrszazX1wKtzKBXa7ZpOkza4SIG1TCxqWtmTVDrzi0XbFHqks97GvaAWIB1IvTYVKO0U7r7m5p_W_dBWVDvqcDDCjow-i3NczcGldkdnblP9uBBmvQfyNTDYKTioson0zq7P4K68YekcI9lr_DFrTyHOftGgqEO3GXOzrz6nVO9FhiaoAObUIfTL6SueR3mZ57Rny7MMgu6gsAB7TzFq6O8w71VM7", "https://lh3.googleusercontent.com/aida-public/AB6AXuD_n9O279_NZHvT6QJKrw_AOyq2a_b4_HBxxgs_F09QLROS_9sQvtyJJIqaDXK0nd12n-cAZB-LR4bLo6ZAFMo7l1t9tcziCy9zjW5xdGfysQmXgFO_xVoHSc-W0egzMnwRw79xLNE5Hk3WpuKPZeM7lawvl3iaWuVOn407_NESt50RYyJTvnIGtic2MFjAGlLtqupy0O-9nkmUYG48CAGMAO37q8YrcwWAlPzQTcZqPL0xDbFYyjCbTtXkaITBYtKGV8oIjtjykdKd",
  ];

  return (
    <div className="min-h-screen w-full px-4">
      <UserHeader />

      {/* Main content wrapper */}
      <div className="sm:px-8 md:px-16 lg:px-10 xl:px-10 pb-28 lg:pb-0">
        {/* Entire imported HTML <main> content */}
        <main className="flex-1">
          <div className="px-4 sm:px-10 lg:px-20 py-5">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 mx-auto">
              {/* Top hero/cover + profile image */}
              <div className="relative mb-24">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[250px] md:min-h-[350px]"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC69nbQTB1xQXnM_EVwfD3DNUASfSDfoY15TeCOENJv4e8wnftQZljWbur6v-y8goqgKr3PTdAX7fBMp2Vqqvv1gfaljMD8ucz64plgmpN1qokZUOL2by3kKNQHP44QvJ36sqCO4PNjkBEOEkzXB1inFSaYpawHyoQDSbPnj1IOWZ6ZZm1u9JnNO1SxCYE9Hydw_e3FvE1_KvHC4T0RkfMoH_Bgx_FAsHRuYpWsB65X_7RQL014825XYRd_IXB2aakqJeHPA0RhbKSf')",
                  }}
                ></div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex p-4 w-full">
                  <div className="flex w-full flex-col gap-4 items-center">
                    <div className="flex gap-4 flex-col items-center">
                      <div
                        className="bg-center bg-no-repeat bg-cover rounded-full h-32 w-32 md:h-40 md:w-40 border-4 border-white shadow-lg"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD40cAmLd1WTW9uklwE1qvGf2zT4-5XWNPS5TYvMGm4PUkaFl5LmUMuMjt6FwaM914YBTYEdt0s1WR9UN2VsLnfX-4Pv9BNXbsfk8NwnK__uumBCjXzuhpZ1SamHiQNR-Q0HDBslfMb6IVAZTNtSnB05z4kKtog8mER8vq8OulhKP3n47W7AwNyWwETYUfrecMzv1wrZNGpPWrNGVoqoj6B5atUY8yH3avBgDAxrnHz6oJmsT0q5FEX7DrBrJWJ7CZ0rPABePEioGJg')",
                        }}
                      ></div>

                      <div className="flex flex-col items-center text-center">
                        <p className="text-black text-3xl md:text-4xl font-bold">
                          Alexandra Chen
                        </p>

                        <div className="flex items-center gap-2 mt-1">
                          <svg
                            className="w-5 h-5 text-amber-400 my-auto"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <p className="text-base font-medium text-gray-600">
                            4.8 Stars (124 reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* GRID SECTION */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
                {/* LEFT SIDE 2/3 */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                  {/* About */}
                  <div>
                    <h2 className="text-[22px] font-bold pb-3 text-black">
                      About Alexandra
                    </h2>
                    <p className="text-base leading-relaxed text-gray-600">
                      With over 15 years of experience in traditional
                      woodworking, Alexandra Chen brings a unique blend of
                      classic techniques and modern design to every piece.
                      Specializing in custom furniture, she is passionate about
                      creating timeless works of art that are both beautiful and
                      functional. Each project is a collaboration, a story told
                      through the grain of the wood and the precision of the
                      joinery.
                    </p>
                  </div>

                  {/* Gallery */}
                  <div>
                    <h2 className="text-[22px] font-bold pb-3 pt-5">Gallery</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {images.map((src, i) => (
                        <div
                          key={i}
                          className="aspect-square w-full bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer hover:opacity-90 transition"
                          style={{ backgroundImage: `url('${src}')` }}
                          onClick={() => setSelectedImage(src)}
                        ></div>
                      ))}
                    </div>
                    {selectedImage && (
                      <div
                        className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
                        onClick={() => setSelectedImage(null)}
                      >
                        <div
                          className="relative max-w-[90%] max-h-[90%]"
                          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                        >
                          <img
                            src={selectedImage}
                            alt="Selected"
                            className="rounded-lg object-contain max-w-full max-h-full"
                          />
                          <button
                            className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1 hover:bg-black/70 transition"
                            onClick={() => setSelectedImage(null)}
                          >
                            <X size={24} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* RIGHT COLUMN STICKY */}
                <div className="lg:col-span-1">
                  <div className="sticky top-28 flex flex-col gap-6 bg-white border-none p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-bold text-black">
                      Skills & Categories
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "Woodworking",
                        "Custom Furniture",
                        "Restoration",
                        "Hand-Carving",
                        "Joinery",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-[#e2dcd7] text-[#6d4c41] px-3 py-1 text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <button 
                    onClick={handleClick}
                    className="w-full h-12 rounded-lg bg-[#6d4c41] text-white font-bold hover:cursor-pointer hover:bg-[#856051] transition-all duration-300 ease-in-out">
                      Book Now
                    </button>
                  </div>
                </div>

                {/* REVIEW SUMMARY */}
                <div className="lg:col-span-3">
                  <h2 className="text-[22px] font-bold pb-3 pt-5 text-black">
                    Reviews Summary
                  </h2>

                  <div className="bg-white shadow-sm p-6 rounded-xl flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center">
                      <p className="text-5xl font-bold text-[#6d4c41]">4.8</p>
                      <div className="flex">
                        {["star", "star", "star", "star", "star_half"].map(
                          (icon, i) => (
                            <span
                              key={i}
                              className="material-symbols-outlined text-accent text-amber-400"
                              style={{ fontSize: 18 }}
                            >
                              {icon}
                            </span>
                          )
                        )}
                      </div>
                      <p className="text-sm opacity-70 text-gray-700">
                        Based on 124 reviews
                      </p>
                    </div>

                    {/* Progress bars */}
                    <div className="w-full flex-1">
                      {[5, 4, 3, 2, 1].map((star, i) => {
                        const percentages = [90, 8, 2, 1, 1];
                        const counts = [110, 10, 2, 1, 1];
                        return (
                          <div key={i} className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-600">
                              {star}
                            </span>
                            <svg
                              className="w-5 h-5 text-amber-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <div className="h-2 w-full rounded-full bg-[#EAE8E4] dark:bg-[#333]">
                              <div
                                className="h-2 rounded-full bg-accent bg-amber-400"
                                style={{ width: `${percentages[i]}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium w-8 text-gray-600 text-right">
                              {counts[i]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Desktop footer only */}
        <div className="hidden lg:block">
          <UserFooter />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
