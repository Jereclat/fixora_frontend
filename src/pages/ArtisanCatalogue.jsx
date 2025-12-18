import React, { useState } from "react";

export default function ArtisanCatalogue() {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && images.length > 0) {
      alert("Work added to catalogue!");
    } else {
      alert("Please fill all fields and upload at least one image.");
    }
  };

  return (
    <div className="p-8">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-semibold">Upload Your Work</h1>
        <p className="text-gray-500">Share your portfolio or any work you’d like to showcase.</p>
      </div>

      {/* Form Section */}
      <form
        className="space-y-6 bg-white rounded-lg p-6 shadow-lg border border-gray-200"
        onSubmit={handleSubmit}
      >
        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Work Title</label>
          <input
            type="text"
            placeholder="Enter title of your work"
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Description</label>
          <textarea
            placeholder="Write a description of your work"
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Upload Images</label>
          <div className="mt-2">
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              accept="image/*"
              className="block w-full text-gray-500 file:bg-gray-100 file:border file:py-2 file:px-4 file:rounded-md file:text-sm"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#393ffd] text-white py-3 rounded-md font-medium transition hover:bg-[#2c33fa]"
        >
          Save and Submit
        </button>
      </form>

      {/* Preview Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Your Uploaded Works</h2>

        {/* Preview of uploaded works */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.length > 0 &&
            images.map((img, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-lg shadow-sm p-4">
                <img
                  src={URL.createObjectURL(img)}
                  alt={`Work Preview ${index}`}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="font-medium text-lg text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
