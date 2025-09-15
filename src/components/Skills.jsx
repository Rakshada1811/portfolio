// src/components/Skills.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const skillGroups = {
    "Programming & Data Tools": [
      { name: "Python", level: 90 },
      { name: "SQL", level: 75 },
      { name: "MATLAB", level: 70 },
      { name: "Power BI", level: 65 },
    ],
    "AI / ML": [
      { name: "YOLOv8", level: 70 },
      { name: "Support Vector Machines (SVM)", level: 75 },
      { name: "Logistic Regression", level: 80 },
      { name: "Word2Vec", level: 60 },
      { name: "TF-IDF", level: 70 },
    ],
    "Web & Development": [
      { name: "React", level: 75 },
      { name: "HTML/CSS/JS", level: 85 },
      { name: "FastAPI (basic)", level: 60 },
    ],
    "Hardware & Systems": [
      { name: "Embedded Systems", level: 70 },
      { name: "FPGA (Verilog/VHDL)", level: 65 },
      { name: "Microcontrollers", level: 75 },
    ],
    "Other Tools": [
      { name: "Git/GitHub", level: 80 },
      { name: "Google Colab", level: 90 },
      { name: "Anaconda", level: 70 },
    ],
  };

  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="py-20 bg-gray-900 text-gray-100 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-400">Skills</h2>

        {/* Horizontal Category Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(skillGroups).map((category, idx) => (
            <button
              key={idx}
              onClick={() =>
                setActiveCategory(activeCategory === category ? null : category)
              }
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === category
                  ? "bg-indigo-500 text-white shadow-lg scale-105"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Active Category Details */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800 rounded-2xl shadow-md p-6 max-w-3xl mx-auto"
            >
              <h3 className="text-2xl font-semibold mb-6 text-indigo-300">
                {activeCategory}
              </h3>
              <ul className="space-y-4 text-gray-300">
                {skillGroups[activeCategory].map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-indigo-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
