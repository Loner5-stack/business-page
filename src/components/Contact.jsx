import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-slate-600 text-lg mb-12">
          Whether you have a project in mind, want to collaborate, or just say
          hello — feel free to reach out. I’m always open to new opportunities
          and creative discussions.
        </p>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <FaEnvelope className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <a
              href="mailto:biggeststeve2006@gmail.com"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              biggeststeve2006@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <FaPhoneAlt className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-1">Phone</h3>
            <p className="text-slate-600">08145366651</p>
          </div>

          {/* Location */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <FaMapMarkerAlt className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-1">Location</h3>
            <p className="text-slate-600">Lagos, Nigeria</p>
          </div>
        </div>

        <div className="mt-16">
          <a
            href="mailto:biggeststeve2006@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Send an Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}
