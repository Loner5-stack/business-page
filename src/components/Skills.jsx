import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiGit } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", color: "text-[#61dafb]", icon: <FaReact size={28} /> },
    { name: "Tailwind", color: "text-[#06b6d4]", icon: <SiTailwindcss size={28} /> },
    { name: "JavaScript", color: "text-[#f7df1e]", icon: <SiJavascript size={28} /> },
    { name: "Git", color: "text-[#f05032]", icon: <SiGit size={28} /> },
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skills.map((s, i) => (
          <div key={i} className="p-4 border rounded-lg flex flex-col items-center gap-2 hover:shadow-md transition">
            <div className={`${s.color}`}>{s.icon}</div>
            <div className="font-semibold text-slate-800">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
