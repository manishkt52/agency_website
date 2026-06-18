"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-bg-orange-300/20 via-bg-pink-300/20 to-bg-purple-300/20"
    >
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[120px] md:text-[180px] lg:text-[250px] font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent opacity-[0.08] select-none">
          CONTACT
        </h1>
      </div>

      {/* Gradient Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[140px]" />

      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-purple-300/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-orange-600 font-semibold tracking-[0.25em] uppercase">
            Contact Us
          </p>

          <h2 className="text-white text-5xl md:text-6xl font-bold mt-4 text-slate-900">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can
            help your business grow online.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-lg">
              <Mail className="text-orange-500 mb-4" size={28} />
              <h3 className="font-bold text-xl mb-2">
                Email
              </h3>
              <p className="text-slate-600">
                hello@agency.com
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-lg">
              <Phone className="text-pink-500 mb-4" size={28} />
              <h3 className="font-bold text-xl mb-2">
                Phone
              </h3>
              <p className="text-slate-600">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-lg">
              <MapPin className="text-violet-500 mb-4" size={28} />
              <h3 className="font-bold text-xl mb-2">
                Location
              </h3>
              <p className="text-slate-600">
                New Delhi, India
              </p>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-xl"
          >
            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-white/70 border border-white/40 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-white/70 border border-white/40 outline-none focus:ring-2 focus:ring-pink-400"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project"
                className="w-full p-4 rounded-xl bg-white/70 border border-white/40 outline-none focus:ring-2 focus:ring-violet-400 resize-none"
              />

              <button
                type="submit"
                className="group flex items-center gap-3 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-8 py-4 rounded-full hover:scale-105 transition duration-300"
              >
                Send Message

                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </button>

            </div>
          </motion.form>

        </div>

      </div>
    </section>
  );
}