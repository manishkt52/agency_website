"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Modern websites built using Next.js.",
  },
  {
    title: "SEO",
    desc: "Rank higher on Google search.",
  },
  {
    title: "Social Media",
    desc: "Grow your brand presence.",
  },
  {
    title: "Performance Marketing",
    desc: "Generate leads and sales.",
  },
  {
    title: "Branding",
    desc: "Build a memorable identity.",
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful user experiences.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-orange-100 via-rose-100 to-violet-100"
    >
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[120px] md:text-[180px] lg:text-[250px] font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent opacity-[0.08] select-none">
          SERVICES
        </h1>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[140px]" />

      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-violet-500/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange-600 font-semibold tracking-[0.25em] uppercase">
            Services
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-16 text-slate-900">
            What We Do
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group"
            >
              <div className="h-full bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-300/30 transition-all duration-500">

                <div className="flex justify-between items-start mb-6">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <ArrowUpRight
                    size={24}
                    className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

                <p className="text-slate-600 leading-relaxed">
                  {service.desc}
                </p>

                <div className="mt-8 h-[3px] w-0 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 transition-all duration-500 group-hover:w-full" />

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}