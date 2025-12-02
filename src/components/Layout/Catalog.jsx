import { useState, useRef } from "react";
import { Upload, Users } from "lucide-react";
import catalog from "../../assets/catalog.png";
import catalogMan from "../../assets/catalogman.png";

export const Catalog = () => {
  const [formData, setFormData] = useState({
    serviceName: "",
    price: "",
    description: "",
    imageFile: null,
    imagePreview: "",
  });

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        imageFile: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service submitted:", formData);
    setFormData({
      serviceName: "",
      price: "",
      description: "",
      imageFile: null,
      imagePreview: "",
    });
  };

  return (
    <div className="rounded-2xl">
      {/* LEFT SECTION */}
      <div className="flex flex-col justify-between rounded-2xl">
        <div className="p-12 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl  relative overflow-hidden">
          <div className="flex">
            <div>
              <p className="text-blue-100 text-sm font-semibold mb-4">
                Let's see your works
              </p>
              <h2 className="text-3xl font-bold text-white leading-tight mb-6">
                Share your works, memories and proof with clients.
              </h2>

              <div className="mt-12 flex flex-col gap-6">
                <div className="flex items-center space-x-4">
                  <img src={catalog} alt="" className="w-[20%]" />
                </div>

                <p className="text-blue-100 text-sm leading-relaxed">
                  Looking for more customisation, more features, and more <br />
                  anything? Don't worry, We've provide you with an entire team <br />
                  of experienced professionals.
                </p>
              </div>
            </div>

            <div>
              <img src={catalogMan} alt="" width={350} className="absolute right-10 bottom-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
