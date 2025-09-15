// src/components/FlipCard.jsx
import React from "react";

const FlipCard = ({ title, description, link, tech }) => {
  return (
    <div className="w-72 h-48 perspective">
      <div className="relative w-full h-full duration-700 transform-style-preserve-3d hover:rotate-y-180">
        
        {/* Front Side */}
        <div className="absolute w-full h-full bg-gray-800 text-gray-100 rounded-2xl shadow-lg flex flex-col justify-center items-center backface-hidden">
          <h3 className="text-xl font-bold text-indigo-400 mb-2">{title}</h3>
          {tech && <p className="text-sm text-gray-400">{tech}</p>}
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-indigo-600 text-white rounded-2xl shadow-lg flex flex-col justify-center items-center rotate-y-180 backface-hidden px-4">
          <p className="text-sm mb-4">{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="mt-auto bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
