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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link href="/">
          <h1 className="text-3xl font-bold text-black">
            Agency
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">

          {/* <a href="#hero" className="font-medium hover:text-orange-500 transition">
            Home
          </a> */}

          <a href="#about" className="font-medium hover:text-orange-500 transition">
            About
          </a>

          <a href="#services" className="font-medium hover:text-orange-500 transition">
            Services
          </a>

          <a href="#contact" className="font-medium hover:text-orange-500 transition">
            Contact
          </a>

        </nav>

        <button className="px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition">
          Let's Talk
        </button>

      </div>
    </header>
  );
}