"use client";

import React from "react";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Users, 
  Calendar, 
  CreditCard, 
  ChevronRight,
  Compass,
  CheckCircle2,
  Zap,
  Target
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-lounge-gradient">
      {/* Background ambient lighting and luxury mesh glow */}
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Official Brand Logo Presentation */}
        <div className="flex justify-center mb-6">
          <div
            className="relative flex items-center justify-center drop-shadow-[0_10px_25px_rgba(37,99,235,0.35)]"
            style={{ position: "relative" }}
          >
            <Image
              src="/resvor-logo.png"
              alt="Resvor - Plan Better. Party Smarter."
              width={260}
              height={70}
              className="h-14 sm:h-20 w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Eyebrow Pill */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-400/30 text-blue-200 text-xs font-semibold mb-6 shadow-xl shadow-blue-950/60 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="uppercase tracking-widest text-[11px] text-blue-300 font-bold">
            The Purpose-Built Operating System for Nightlife & Lounges
          </span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span className="text-slate-300 hidden sm:inline text-[11px]">
            100% Web Application Platform
          </span>
        </div> */}

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          Where Every Occasion <br />
          <span className="bg-gradient-to-r from-blue-300 via-blue-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-sm">
            Finds Its Lounge.
          </span>
        </h1>

        {/* Hero Subtitle Explaining Purpose Clearly */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          Resvor replaces fragmented spreadsheets and daytime restaurant reservation tools with an all-in-one web platform engineered for premier cocktail lounges, speakeasies, and rooftops.{" "}
          <span className="text-white font-semibold">Unify your guest memory</span>,{" "}
          <span className="text-white font-semibold">eliminate table no-shows with direct card deposits</span>, and{" "}
          <span className="text-white font-semibold">control high-tempo floor logistics</span> with zero card storage liability.
        </p>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/40 hover:shadow-blue-500/60 flex items-center justify-center gap-2.5 transition-all border border-blue-400/40 cursor-pointer group"
          >
            <Zap className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform" />
            <span>See How It Works</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-white/15 hover:border-blue-400/40 shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Target className="w-4 h-4 text-blue-400" />
            <span>Why Lounges Need Resvor</span>
          </a>
        </div>

        {/* Quick Purpose & Awareness Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto mb-16 text-left">
          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 block mb-1">
              Who It Is Built For
            </span>
            <p className="text-xs font-semibold text-white">
              Cocktail Lounges, Speakeasies & Rooftops
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block mb-1">
              Primary Purpose
            </span>
            <p className="text-xs font-semibold text-white">
              Stop No-Shows & Retain 100% Guest Spend
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
            <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 block mb-1">
              How Operators Run It
            </span>
            <p className="text-xs font-semibold text-white">
              Dual Visual Calendar + Rapid Door List
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block mb-1">
              Financial Security
            </span>
            <p className="text-xs font-semibold text-white">
              PCI-DSS Tokenized · 0% Raw Card Storage
            </p>
          </div>
        </div>

        {/* 4 Architectural Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto text-left">
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Comprehensive Guest Book</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Profiles with names, contact details, birth dates, photos, custom tags for anniversaries, and 1-click CSV data export.
            </p>
            <div className="text-[10px] text-blue-300 font-medium pt-1 border-t border-white/5 flex items-center justify-between">
              <span>Patron CRM Ledger</span>
              <span className="text-emerald-400 font-semibold">&lt; 15ms Search</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
              <Calendar className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Dual-Interface Event Tools</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Visual Calendar view for date planning paired with a fast List view to quickly adjust deposits, door tickets, and headcounts.
            </p>
            <div className="text-[10px] text-indigo-300 font-medium pt-1 border-t border-white/5 flex items-center justify-between">
              <span>Visual & Rapid Modes</span>
              <span className="text-emerald-400 font-semibold">Real-Time Sync</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <CreditCard className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Direct Card Payments</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Custom bottle service listings and table bookings with PCI-compliant tokenization. Zero raw card details stored on servers.
            </p>
            <div className="text-[10px] text-emerald-300 font-medium pt-1 border-t border-white/5 flex items-center justify-between">
              <span>PCI-DSS Tokenized</span>
              <span className="text-emerald-400 font-semibold">Zero Liability</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Targeted Campaigns</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pre-built SMS and email templates to automatically target birthday celebrants, VIP spenders, and headliner music fans.
            </p>
            <div className="text-[10px] text-amber-300 font-medium pt-1 border-t border-white/5 flex items-center justify-between">
              <span>SMS & Email Studio</span>
              <span className="text-emerald-400 font-semibold">98% Open Rates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
