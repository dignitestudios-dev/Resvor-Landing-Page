"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowUpRight, Globe, Users, Ticket, Layers, Info, ChevronRight, HelpCircle, Sparkles } from "lucide-react";
import ExploreWorkflowModal from "@/components/layout/ExploreWorkflowModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[#04081c]/90 backdrop-blur-2xl border-b border-white/10 text-white shadow-xl py-3.5"
            : "bg-transparent backdrop-blur-sm border-b border-white/10 text-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 group relative z-50"
            >
              <div className="relative flex items-center drop-shadow-[0_2px_12px_rgba(37,99,235,0.3)]">
                <Image
                  src="/resvor-logo.png"
                  alt="ResVor - Plan Better. Party Smarter."
                  width={140}
                  height={38}
                  className="h-8 sm:h-9 w-auto object-contain object-left group-hover:opacity-90 transition-opacity"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
              <a
                href="#web-apps"
                className="text-slate-200 hover:text-white transition-colors py-1 flex items-center gap-1.5 group"
              >
                <Layers className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Web Apps</span>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-950/80 text-blue-300 border border-blue-400/30">
                  3 Portals
                </span>
              </a>
              <a
                href="#how-it-works"
                className="text-slate-200 hover:text-white transition-colors py-1"
              >
                How It Works
              </a>
              <a
                href="#features"
                className="text-slate-200 hover:text-white transition-colors py-1"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-slate-200 hover:text-white transition-colors py-1"
              >
                About
              </a>
              <a
                href="#faq"
                className="text-slate-200 hover:text-white transition-colors py-1"
              >
                FAQ
              </a>
            </nav>

            {/* Desktop Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="mailto:support@lladner.com"
                className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-white/15 bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white transition-all flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>support@lladner.com</span>
              </a>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md shadow-blue-500/25 flex items-center gap-1.5 border border-blue-400/30 group active:scale-95 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-blue-200 group-hover:rotate-12 transition-transform" />
                <span>Launch Web Apps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Smooth Modern Mobile Menu Toggle */}
            <div className="flex md:hidden items-center relative z-50">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative w-10 h-10 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] active:scale-95 border border-white/15 flex items-center justify-center transition-all focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <div className="w-5 h-4 flex flex-col justify-between items-center pointer-events-none">
                  <span
                    className={`h-0.5 w-5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-5 bg-white rounded-full transition-all duration-200 ease-in-out ${
                      mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`h-0.5 w-5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel with Smooth Slide & Fade */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-[85vh] opacity-100 mt-3 border-t border-white/10"
              : "max-h-0 opacity-0 pointer-events-none border-t border-transparent"
          }`}
        >
          <div className="px-4 pt-4 pb-6 bg-[#04081c]/95 backdrop-blur-2xl space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Primary Navigation Links */}
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <a
                href="#web-apps"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] active:bg-blue-600/20 border border-white/10 flex items-center gap-2.5 transition-colors text-slate-200"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span>Web Apps</span>
              </a>

              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] active:bg-blue-600/20 border border-white/10 flex items-center gap-2.5 transition-colors text-slate-200"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <span>How It Works</span>
              </a>

              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] active:bg-blue-600/20 border border-white/10 flex items-center gap-2.5 transition-colors text-slate-200"
              >
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center shrink-0">
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <span>Features</span>
              </a>

              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] active:bg-blue-600/20 border border-white/10 flex items-center gap-2.5 transition-colors text-slate-200"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <Info className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>About ResVor</span>
              </a>
            </div>

            {/* The 3 Web Apps Interactive Touch Tiles */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Direct Web App Access
                </span>
                <span className="text-[10px] font-bold text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded-full border border-blue-400/30">
                  3 Portals
                </span>
              </div>

              {/* 1. Main Platform */}
              <a
                href="https://www.resvor.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="group p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/60 to-slate-900/80 hover:from-blue-900/60 hover:to-slate-850/90 border border-blue-500/30 active:scale-[0.99] transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-400 shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                        Main Platform
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                        Guests
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">resvor.com</span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* 2. Workforce Portal */}
              <a
                href="https://workforce.resvor.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="group p-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-850/90 border border-white/10 hover:border-indigo-500/30 active:scale-[0.99] transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                        Workforce Portal
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                        Staff
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">workforce.resvor.com</span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-indigo-600 flex items-center justify-center text-white transition-colors shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* 3. Promoter Portal */}
              <a
                href="https://promoter.resvor.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="group p-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-850/90 border border-white/10 hover:border-purple-500/30 active:scale-[0.99] transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Ticket className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                        Promoter Portal
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 border border-purple-400/30">
                        Promoters
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">promoter.resvor.com</span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-purple-600 flex items-center justify-center text-white transition-colors shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>

            {/* Direct Support Contact Bar */}
            <div className="pt-2">
              <a
                href="mailto:support@lladner.com"
                className="w-full py-3 px-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>support@lladner.com</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop Dimmer when Mobile Menu is Open */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* Explore Workflow / Web Apps Modal Dialog */}
      <ExploreWorkflowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
