// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! 🚀 (You can connect this to EmailJS or backend later.)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-100 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-400">Contact Me</h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 text-left">
            <p className="text-gray-300">
              I’d love to hear from you! Whether it’s a project idea, internship opportunity, 
              or just to connect, feel free to drop me a message ✨
            </p>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-indigo-400" />
              <a href="mailto:renapurkarritika@gmail.com" className="hover:text-indigo-400">
                renapurkarritika@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-6 h-6 text-indigo-400" />
              <a
                href="https://www.linkedin.com/in/rakshada-renapurkar-87b646229/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6 text-indigo-400" />
              <a
                href="https://github.com/Rakshada1811"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 rounded-2xl shadow-md space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 h-32"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 py-3 rounded-xl flex items-center justify-center gap-2 text-white font-semibold transition-all"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
