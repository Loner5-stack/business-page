import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center py-16">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Hi, I'm <span className="text-brand-600">AKINWUNMI OPEMIPO</span>
      </h1>
      <p className="max-w-2xl text-lg text-slate-600 mb-8">
        Frontend Developer · React Enthusiast · Building clean & accessible web products.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <a href="#projects" className="group inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-white font-semibold transition transform hover:scale-[1.02] animate-glow">
          <span>View My Work</span>
          <span className="material-symbols-outlined ml-2 text-sm transform group-hover:rotate-45 transition">arrow_forward</span>
        </a>

        <a href="#contact" className="inline-flex items-center rounded-md border border-slate-200 px-6 py-3 text-slate-700 font-semibold hover:bg-slate-50 transition">
          Contact Me
        </a>
      </div>

      {/* Down arrow */}
      <div className="absolute bottom-8 text-slate-400 animate-bounce">
        <span className="material-symbols-outlined text-4xl">expand_more</span>
      </div>
    </section>
  );
}
