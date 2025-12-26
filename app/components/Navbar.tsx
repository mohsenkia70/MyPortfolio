'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Mohsen.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-gray-300 font-medium text-lg hover:text-white transition-colors duration-300
                         after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                         after:bg-gradient-to-r after:from-purple-400 after:to-cyan-400 
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-semibold text-gray-300 hover:text-white 
                           bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 
                           bg-clip-text text-transparent transition-all duration-500 
                           hover:scale-110"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}


      <div className="absolute inset-0 -z-10 bg-gray-900/60 backdrop-blur-xl" />
    </header>
  );
}