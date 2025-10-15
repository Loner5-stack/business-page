import React from "react";

const projects = [
  {
    title: "Admin dahboard",
    description: "A modern React app with modern UX and Tailwind styling.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFNuARBKrKvIBSS9Ui6WM5SBzZ3XSoL0ktQ&s",
    github: "https://github.com/Loner5-stack/final-project",
    demo: "https://final-project-csq37muhk-akinwunmi-opemipos-projects.vercel.app/",
  },
  {
    title: "Rechart",
    description: "An API-powered dashboard built with React and Chart.js.",
    image: "data:image/png;base64,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",
    github: "https://github.com/Loner5-stack/rechart",
    demo: "https://rechart-9nc2r6ocu-akinwunmi-opemipos-projects.vercel.app/",
  },
  {
    title: "Business website",
    description: "A portfolio template built with Vite and Tailwind.",
    image: "data:image/png;base64,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",
    github: "https://github.com/Loner5-stack/business-page",
    demo: "https://business-page-qzfo1jpzh-akinwunmi-opemipos-projects.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
