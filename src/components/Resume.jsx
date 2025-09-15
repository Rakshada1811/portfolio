// ResumeButton.jsx
import React from "react";

const ResumeButton = () => {
  return (
    <div className="my-6 text-center">
      {/* Download Button */}
      <a
        href="/Rakshada_Renapurkar_Resume.pdf" // Place resume.pdf in the public folder
        download
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mr-4"
      >
        Download Resume
      </a>

      {/* View in New Tab Button */}
      <a
        href="/Rakshada_Renapurkar_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
      >
        View Resume
      </a>
    </div>
  );
};

export default ResumeButton;
