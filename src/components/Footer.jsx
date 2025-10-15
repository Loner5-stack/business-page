import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-10 bg-white text-gray-700 text-center border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-6"
      >
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-5 flex-wrap">
          <a
            href="mailto:biggeststeve2006@gmail.com"
            className="text-gray-600 hover:text-blue-600 transition text-xl"
            title="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="tel:+2348145366651"
            className="text-gray-600 hover:text-blue-600 transition text-xl"
            title="Phone"
          >
            <FaPhone />
          </a>

          <a
            href="https://github.com/Biggeststeve2006"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition text-xl"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/akinwunmi-opemipo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition text-xl"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-900">
            Akinwunmi Opemipo
          </span>
          . All rights reserved.
        </p>

        <p className="text-xs text-gray-500 mt-2">
          Built with <span className="text-blue-600 font-medium">React</span>{" "}
          and <span className="text-blue-600 font-medium">Tailwind CSS</span>.
        </p>
      </motion.div>
    </footer>
  );
}
