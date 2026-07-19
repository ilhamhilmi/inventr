"use client"

import Link from "next/link";
import { useState } from "react";

export default function NeoNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-black text-2xl tracking-tight">INVENTR</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/features"
              className="font-bold text-sm uppercase tracking-wider hover:underline underline-offset-4 decoration-[3px]"
            >
              Features
            </Link>
            <Link
              href="/inventory"
              className="font-bold text-sm uppercase tracking-wider hover:underline underline-offset-4 decoration-[3px]"
            >
              Inventory
            </Link>
            <Link
              href="/login-operator"
              className="font-bold text-sm uppercase tracking-wider hover:underline underline-offset-4 decoration-[3px]"
            >
              Login
            </Link>
            <Link
              href="/register-operator"
              className="font-bold text-sm uppercase tracking-wider px-5 py-2.5 bg-neo-pink border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 border-[3px] border-black flex flex-col items-center justify-center gap-1"
          >
            <span
              className={`block w-5 h-[3px] bg-black transition-all ${mobileMenuOpen ? "rotate-45 translate-y-[3px]" : ""
                }`}
            />
            <span
              className={`block w-5 h-[3px] bg-black transition-all ${mobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-5 h-[3px] bg-black transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t-[3px] border-black bg-white transition-all ${mobileMenuOpen ? "max-h-80 py-4" : "max-h-0 overflow-hidden"
          }`}
      >
        <div className="px-4 space-y-3">
          <Link
            href="/features"
            className="block font-bold text-sm uppercase tracking-wider px-4 py-3 border-[3px] border-black"
          >
            Features
          </Link>
          <Link
            href="/inventory"
            className="block font-bold text-sm uppercase tracking-wider px-4 py-3 border-[3px] border-black"
          >
            Inventory
          </Link>
          <Link
            href="/login-operator"
            className="block font-bold text-sm uppercase tracking-wider px-4 py-3 border-[3px] border-black"
          >
            Login
          </Link>
          <Link
            href="/register-operator"
            className="block font-bold text-sm uppercase tracking-wider px-4 py-3 bg-neo-pink border-[3px] border-black text-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}