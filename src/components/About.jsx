import React from "react";
import profile from "/src/assets/placeholder.png"; // ✅ Absolute path for reliability

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* === Left Side (Text) === */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-slate-600 leading-relaxed">
            I'm a frontend developer focused on React and modern CSS. I build
            usable, performant interfaces that solve real problems. I enjoy
            learning new tools and shipping features end-to-end.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li>• React · Tailwind CSS · JavaScript</li>
            <li>• Accessible UI and responsive layouts</li>
            <li>• UI/UX collaboration and product-minded development</li>
          </ul>
        </div>

        {/* === Right Side (Image) === */}
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg w-60 h-60">
            <img
              src={profile}
              alt="Profile"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
