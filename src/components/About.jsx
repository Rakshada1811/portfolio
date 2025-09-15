// src/components/About.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("Academics");

  const tabClasses = (tab) =>
    `px-4 py-2 rounded-lg cursor-pointer transition-all ${
      activeTab === tab
        ? "bg-indigo-500 text-white"
        : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <section id="about" className="py-16 bg-gray-900 text-gray-200 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-400 mb-8">About Me</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button className={tabClasses("Academics")} onClick={() => setActiveTab("Academics")}>
            Academics
          </button>
          <button className={tabClasses("Athletics")} onClick={() => setActiveTab("Athletics")}>
            Athletics
          </button>
          <button className={tabClasses("Interests")} onClick={() => setActiveTab("Interests")}>
            Interests
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-left">
          {activeTab === "Academics" && (
            <p className="text-lg leading-relaxed">
              I recently graduated in <span className="text-indigo-400 font-semibold">Electronics and Telecommunication (ENTC)</span> 
              from <span className="text-indigo-400 font-semibold">PICT, Pune (Class of 2025)</span>.  
              My academic journey has been focused on software development, AI/ML, and building innovative solutions through projects
              that blend engineering principles with modern technologies.
            </p>
          )}

          {activeTab === "Athletics" && (
            <p className="text-lg leading-relaxed">
              Sports have always been a big part of my life. I represented my state in cricket championships 🏏 
              and also participated in inter-district competitions for handball 🤾‍♀️, football ⚽, throwball, and table tennis 🏓.  
              Back in middle school, I even practiced archery 🎯, which taught me focus and precision — qualities I now apply in coding too.
            </p>
          )}

          {activeTab === "Interests" && (
            <p className="text-lg leading-relaxed">
              Outside academics and sports, I enjoy reading 📚 and exploring new technologies.  
              I love combining creativity with problem-solving — whether that’s through coding, designing user experiences, 
              or simply learning something new that sparks curiosity. My portfolio reflects not only my skills, but also my passions.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
