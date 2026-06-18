"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[120px] md:text-[200px] lg:text-[280px] font-extrabold text-black/[0.03] select-none whitespace-nowrap">
          DIGITAL
        </h1>
      </div>

      {/* Gradient Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-3xl" />

      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 md:pt-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <p className="text-orange-500 font-semibold tracking-[0.2em] uppercase">
              {/* Digital Marketing Agency */}
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-6 leading-[1.1]">
              We Build
              <span className="text-orange-500"> Digital </span>
              Experiences
              <br />
              That Drive Growth
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We help ambitious businesses grow through web development,
              branding, SEO, and digital marketing strategies that deliver
              measurable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition duration-300">
                Get Started
              </button>

              <button className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition duration-300">
                View Work
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-12">
              <div>
                {/* <h3 className="text-3xl font-bold">150+</h3> */}
                {/* <p className="text-gray-500">Projects</p> */}
              </div>

              <div>
                {/* <h3 className="text-3xl font-bold">50+</h3> */}
                {/* <p className="text-gray-500">Clients</p> */}
              </div>

              <div>
                {/* <h3 className="text-3xl font-bold">5+</h3> */}
                {/* <p className="text-gray-500">Years</p> */}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[450px] md:h-[550px] lg:h-[650px]">
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full"
            >
              <Image
                src="/Hero-1.jpg"
                alt="Digital Agency"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="object-contain"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}