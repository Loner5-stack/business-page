import React from "react";
import { motion } from "framer-motion";
import profile from "/src/assets/placeholder.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* === Text Side === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            I’m a results-driven <span className="font-semibold">Frontend Developer</span> with a
            strong passion for creating clean, responsive, and high-performance
            web interfaces. I specialize in React and Tailwind CSS, focusing on
            translating design concepts into functional digital experiences that
            feel intuitive and fast.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            I enjoy collaborating with teams that value design precision,
            efficient workflows, and continuous learning. My goal is to craft
            interfaces that merge usability with elegance — ensuring every user
            interaction feels seamless.
          </p>

          <ul className="space-y-2 text-sm text-slate-700">
            <li>✔ React · Tailwind CSS · JavaScript (ES6+)</li>
            <li>✔ Responsive Design & Accessibility</li>
            <li>✔ UI/UX Collaboration & Performance Optimization</li>
          </ul>
        </motion.div>

        {/* === Image Side === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative group w-64 h-64 md:w-72 md:h-72">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <img
              src={profile}
              alt="Profile"
              loading="lazy"
              className="relative z-10 object-cover w-full h-full rounded-2xl shadow-xl border border-gray-200"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
