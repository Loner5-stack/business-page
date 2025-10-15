import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiGit } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-5xl text-cyan-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-sky-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-5xl text-yellow-400" /> },
    { name: "Git", icon: <SiGit className="text-5xl text-red-500" /> },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white text-center px-6">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-900">
        My <span className="text-blue-600">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative bg-white/80 backdrop-blur-lg shadow-md border border-gray-200 rounded-2xl p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-lg opacity-40 bg-gradient-to-tr from-blue-400 to-purple-400 group-hover:opacity-70 transition-all"></div>
                <div className="relative z-10">{skill.icon}</div>
              </div>
              <p className="font-semibold text-gray-800">{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
