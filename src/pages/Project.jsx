import React, { useState } from "react";

const works = [
  {
    id: 1,
    type: "image",
    file: "/images/plumber.jpg",
    title: "Pipe Installation",
    description: "Completed PVC pipe installation for a residential building.",
  },
  {
    id: 2,
    type: "image",
    file: "/images/plumber.jpg",
    title: "Water Pump Repair",
    description: "Fixed and serviced a faulty pressure pump for a client.",
  },
  {
    id: 3,
    type: "video",
    file: "/images/plumbervid.mov",
    title: "Bathroom Renovation (Video)",
    description: "Video showing the full plumbing process.",
  },
  {
    id: 4,
    type: "image",
    file: "/images/plumber.jpg",
    title: "Pipe Installation",
    description: "Completed PVC pipe installation for a residential building.",
  },
  {
    id: 5,
    type: "video",
    file: "/images/plumbervid.mov",
    title: "Bathroom Renovation (Video)",
    description: "Video showing the full plumbing process.",
  },
  {
    id: 6,
    type: "image",
    file: "/images/plumber.jpg",
    title: "Water Pump Repair",
    description: "Fixed and serviced a faulty pressure pump for a client.",
  },
  {
    id: 7,
    type: "video",
    file: "/images/plumbervid.mov",
    title: "Bathroom Renovation (Video)",
    description: "Video showing the full plumbing process.",
  },
];

const Project = () => {
  const [openMedia, setOpenMedia] = useState(null);

  return (
    <div className="min-h-screen bg-white p-6">

      {/* TITLE */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-black">Completed Jobs</h1>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Add Media
        </button>
      </div>

      {/* GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <div
            key={work.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {work.type === "image" ? (
              <img
                src={work.file}
                alt={work.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setOpenMedia(work)}
              />
            ) : (
              <video
                src={work.file}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setOpenMedia(work)}
              />
            )}

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {work.title}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{work.description}</p>
            </div>
          </div>
        ))}
      </div>

      {openMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setOpenMedia(null)}
        >
          {openMedia.type === "image" && (
            <img
              src={openMedia.file}
              alt="preview"
              className="max-w-4xl w-[90%] max-h-[90vh] rounded-lg shadow-xl"
            />
          )}

          {openMedia.type === "video" && (
            <video
              src={openMedia.file}
              controls
              autoPlay
              className="max-w-4xl w-[90%] max-h-[90vh] rounded-lg shadow-xl"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Project;
