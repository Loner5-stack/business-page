import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Akinwunmi<span className="text-blue-600">.</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-800">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block hover:text-blue-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
