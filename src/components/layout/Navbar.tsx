"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, X, Compass, Zap, Globe } from "lucide-react";
import ExploreWorkflowModal from "@/components/layout/ExploreWorkflowModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreModalOpen, setExploreModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#071138]/70 backdrop-blur-2xl border-b border-white/15 shadow-xl shadow-black/30 py-3"
            : "bg-transparent border-b backdrop-blur-2xl border-white/10 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center" style={{ position: "relative" }}>
                <Image
                  src="/resvor-logo.png"
                  alt="Resvor - Plan Better. Party Smarter."
                  width={140}
                  height={38}
                  className="h-8 sm:h-9 w-auto object-contain object-left group-hover:opacity-90 transition-opacity"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
              <Link href="/#about" className="hover:text-blue-400 transition-colors py-1">
                Purpose & Why
              </Link>
              <Link href="/#how-it-works" className="hover:text-blue-400 transition-colors py-1 flex items-center gap-1.5">
                <span>How It Works</span>
                <span className="px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 text-[10px] font-semibold border border-blue-400/30">
                  4 Steps
                </span>
              </Link>
              <Link href="/#modules" className="hover:text-blue-400 transition-colors py-1">
                Core Modules
              </Link>
              <Link href="/#faq" className="hover:text-blue-400 transition-colors py-1">
                Architecture & FAQ
              </Link>
            </nav>

            {/* Right Action */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/#contact"
                className="px-4 py-2 text-xs font-semibold rounded-xl text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-blue-400/40 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Contact Inquiries</span>
              </Link>

              <button
                type="button"
                onClick={() => setExploreModalOpen(true)}
                className="px-4 py-2 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 border border-blue-400/30 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-blue-200" />
                <span>Launch Web Apps</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/[0.06] backdrop-blur-md border border-white/10"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Translucent Glassmorphism, Not Solid Black) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 px-4 pt-4 pb-6 bg-[#060e28]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl space-y-4">
            <div className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-blue-600/20 hover:text-blue-300"
              >
                Purpose & Why
              </Link>
              <Link
                href="/#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-blue-600/20 hover:text-blue-300 flex items-center justify-between"
              >
                <span>How It Works</span>
                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-400/30">
                  4 Steps
                </span>
              </Link>
              <Link
                href="/#modules"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-blue-600/20 hover:text-blue-300"
              >
                Core Modules
              </Link>
              <Link
                href="/#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-blue-600/20 hover:text-blue-300"
              >
                Architecture & FAQ
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 text-xs font-semibold rounded-xl text-slate-200 bg-white/[0.08] backdrop-blur-md border border-white/15 flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Contact Inquiries</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setExploreModalOpen(true);
                }}
                className="w-full py-2.5 px-4 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30"
              >
                <Zap className="w-3.5 h-3.5 text-blue-200" />
                <span>Explore Workflow</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Explore Workflow Dialog Modal */}
      <ExploreWorkflowModal
        isOpen={exploreModalOpen}
        onClose={() => setExploreModalOpen(false)}
      />
    </>
  );
}
