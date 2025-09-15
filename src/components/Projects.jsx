// src/components/Projects.jsx
import React, { useState } from "react";

const Projects = () => {
  const projectGroups = {
    "Apps & Learning": [
      {
        title: "Kudos Learning – Pronunciation App",
        year: "1st Year",
        description:
          "An educational app designed to help children improve English pronunciation using interactive modules.",
      },
    ],
    "IoT & Sensors": [
      {
        title: "Accident Detector Using Capacitive Sensor",
        year: "2nd Year",
        description:
          "Developed a vehicle accident detection system using capacitive sensors to provide real-time alerts and enhance safety.",
      },
    ],
    "Nanotech & Energy": [
      {
        title: "Graphene-Based Supercapacitor Driven Boat",
        year: "3rd Year",
        description:
          "Implemented a renewable energy-powered boat using graphene-based supercapacitors for high efficiency and sustainability.",
      },
      {
        title: "Capacitor-Based Smart Energy Module",
        year: "3rd Year (Solo)",
        description:
          "Designed an innovative module using nanotech-based capacitors for energy storage and optimized power delivery.",
      },
    ],
    "AI / ML": [
      {
        title: "Smart Classroom Surveillance (YOLOv8)",
        year: "Final Year",
        description:
          "A real-time AI-driven system for classroom monitoring, including attendance tracking, emotion recognition, and attentiveness estimation.",
      },
      {
        title: "Sentiment Analysis for Transliterated Marathi",
        year: "Final Year (Solo)",
        description:
          "Developed an NLP system to analyze sentiments in transliterated Marathi text using ML models like SVM, Logistic Regression, and Word2Vec.",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-gray-100 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-400">Projects</h2>

        {/* Horizontal Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(projectGroups).map((category, idx) => (
            <button
              key={idx}
              onClick={() =>
                setActiveCategory(activeCategory === category ? null : category)
              }
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === category
                  ? "bg-indigo-500 text-white shadow-lg"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Active Category Projects */}
        {activeCategory && (
          <div className="bg-gray-800 rounded-2xl shadow-md p-6 max-w-3xl mx-auto animate-fadeIn">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-300">
              {activeCategory}
            </h3>
            <ul className="space-y-4 text-gray-300 relative">
              {projectGroups[activeCategory].map((project, i) => (
                <li
                  key={i}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="flex justify-between items-center bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-xl transition">
                    <span>{project.title}</span>
                    <span className="text-sm text-gray-400">{project.year}</span>
                  </div>

                  {/* Tooltip Window */}
                  {hoveredProject === i && (
                    <div className="absolute left-0 right-0 mt-2 bg-gray-900 border border-indigo-500 text-left p-4 rounded-xl shadow-lg z-10 animate-fadeIn">
                      <p className="text-sm text-gray-300">
                        {project.description}
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
