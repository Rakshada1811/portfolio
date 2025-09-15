// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-950 text-gray-100 px-6">
      {/* Intro */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold font-poppins mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I’m <span className="text-indigo-400">Rakshada</span>
      </motion.h1>

      <motion.h2
        className="text-lg md:text-2xl font-inter text-gray-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Engineering Student • Aspiring Software Developer • AI/ML Enthusiast
      </motion.h2>

      {/* Buttons */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href="#projects"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg"
        >
          View Projects <ArrowRight size={18} />
        </a>
        <a
          href="#contact"
          className="border border-gray-600 hover:border-indigo-400 hover:text-indigo-400 text-gray-300 px-6 py-3 rounded-2xl flex items-center gap-2"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a href="https://github.com/Rakshada1811" target="_blank" rel="noreferrer">
          <Github className="w-6 h-6 hover:text-indigo-400 transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/rakshada-renapurkar-87b646229/" target="_blank" rel="noreferrer">
          <Linkedin className="w-6 h-6 hover:text-indigo-400 transition-colors" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
