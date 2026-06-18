"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-extrabold tracking-tight text-black hover:scale-105 transition-transform duration-300">
            Agency
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">

          <a
            href="#about"
            className="relative font-medium group text-slate-600"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#services"
            className="relative font-medium group text-slate-600"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="relative font-medium group text-slate-600"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

        </nav>

        {/* CTA Button */}
        <button className="text-slate-600 relative px-6 py-3 rounded-full bg-black text-white overflow-hidden group transition-all duration-300 hover:scale-105">

          <span className="relative z-10">
            Let's Talk
          </span>

          <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

        </button>

      </div>
    </header>
  );
}