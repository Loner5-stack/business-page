import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-slate-600 mb-6">Want to collaborate? Send me a message.</p>

      <div className="max-w-xl">
        <form onSubmit={(e) => { e.preventDefault(); alert('Form not wired — paste your EmailJS or backend endpoint here.'); }}>
          <div className="grid grid-cols-1 gap-4">
            <input className="p-3 border rounded" placeholder="Your name" />
            <input className="p-3 border rounded" placeholder="Your email" />
            <textarea className="p-3 border rounded h-32" placeholder="Message" />
            <button type="submit" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded font-semibold">Send message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
