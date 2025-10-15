import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 sticky top-0 bg-white z-40 border-b">
      <div className="text-xl font-extrabold">Akinwunmi</div>
      <ul className="hidden md:flex items-center gap-6 text-sm">
        <li><a href="#about" className="hover:text-brand-600">About</a></li>
        <li><a href="#skills" className="hover:text-brand-600">Skills</a></li>
        <li><a href="#projects" className="hover:text-brand-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-brand-600">Contact</a></li>
      </ul>
    </nav>
  );
}
