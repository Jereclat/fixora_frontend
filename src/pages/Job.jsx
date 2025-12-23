import React, { useState } from "react";

export default function Job() {
  const [jobRequests, setJobRequests] = useState([
    {
      id: 1,
      clientName: "John Stevenson",
      jobDescription: "Fix AC unit",
      status: "Pending",
      date: "2025-12-15",
    },
    {
      id: 2,
      clientName: "Benedetto Rossiter",
      jobDescription: "Repair Generator",
      status: "Pending",
      date: "2025-12-16",
    },
  ]);

  const [jobHistories, setJobHistories] = useState([
    {
      id: 1,
      clientName: "Jordan Stevenson",
      jobDescription: "Air Conditioner Repair",
      status: "Completed",
      earnings: "₦15,000",
      date: "2025-07-21",
    },
    {
      id: 2,
      clientName: "Davido Charlison",
      jobDescription: "Plumbing Work",
      status: "Completed",
      earnings: "₦10,000",
      date: "2025-08-14",
    },
  ]);

  const handleAccept = (id) => {
    alert(`Job request ${id} accepted`);
    // Update job status and make API calls to save changes
  };

  const handleReject = (id) => {
    alert(`Job request ${id} rejected`);
    // Similarly, handle rejection logic here
  };

  return (
    <div className="p-8">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-6">Job Requests & Job Histories</h1>

      {/* Job Requests Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Incoming Job Requests</h2>
        {jobRequests.length > 0 ? (
          <div className="space-y-4">
            {jobRequests.map((job) => (
              <div
                key={job.id}
                className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm flex justify-between items-center"
              >
                <div className="space-y-2">
                  <p className="text-lg font-semibold">{job.clientName}</p>
                  <p className="text-sm text-gray-600">{job.jobDescription}</p>
                  <p className="text-xs text-gray-500">Date: {job.date}</p>
                </div>

                <div className="space-x-4">
                  <button
                    onClick={() => handleAccept(job.id)}
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(job.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No incoming job requests at the moment.</p>
        )}
      </div>

      {/* Job Histories Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Job Histories</h2>
        {jobHistories.length > 0 ? (
          <div className="space-y-4">
            {jobHistories.map((job) => (
              <div
                key={job.id}
                className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm flex justify-between items-center"
              >
                <div className="space-y-2">
                  <p className="text-lg font-semibold">{job.clientName}</p>
                  <p className="text-sm text-gray-600">{job.jobDescription}</p>
                  <p className="text-xs text-gray-500">Date: {job.date}</p>
                </div>

                <div className="space-y-2 text-right">
                  <p className="text-lg font-semibold text-green-600">{job.earnings}</p>
                  <p className="text-sm text-gray-500">{job.status}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No job histories available.</p>
        )}
      </div>
    </div>
  );
}
