// src/components/Hobbies.jsx
import React, { useState } from "react";
import { BookOpen, Music, Dumbbell, Plane } from "lucide-react";

const Hobbies = () => {
  const hobbies = {
    Reading: {
      icon: <BookOpen className="w-6 h-6 inline-block mr-2 text-indigo-400" />,
      detail:
        "I enjoy diving into tech blogs, research papers, and self-growth books.",
    },
    Music: {
      icon: <Music className="w-6 h-6 inline-block mr-2 text-indigo-400" />,
      detail:
        "Listening to a mix of classical, lo-fi, and Bollywood for focus and relaxation.",
    },
    Athletics: {
      icon: <Dumbbell className="w-6 h-6 inline-block mr-2 text-indigo-400" />,
      detail:
        "Regular in athletics and gym workouts to keep both mind & body sharp.",
    },
    Travel: {
      icon: <Plane className="w-6 h-6 inline-block mr-2 text-indigo-400" />,
      detail:
        "Love exploring new cities and cultures — future goal: Europe tour ✈️",
    },
  };

  const [activeHobby, setActiveHobby] = useState(null);

  return (
    <section id="hobbies" className="py-20 bg-gray-900 text-gray-100 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-400">Hobbies</h2>

        {/* Horizontal Hobby Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(hobbies).map((hobby, idx) => (
            <button
              key={idx}
              onClick={() =>
                setActiveHobby(activeHobby === hobby ? null : hobby)
              }
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeHobby === hobby
                  ? "bg-indigo-500 text-white shadow-lg"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              {hobbies[hobby].icon}
              {hobby}
            </button>
          ))}
        </div>

        {/* Active Hobby Detail */}
        {activeHobby && (
          <div className="bg-gray-800 rounded-2xl shadow-md p-6 max-w-3xl mx-auto animate-fadeIn">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
              {hobbies[activeHobby].icon}
              {activeHobby}
            </h3>
            <p className="text-gray-300">{hobbies[activeHobby].detail}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hobbies;
