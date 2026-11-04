"use client";

import React from "react";
import Image from "next/image";
import { Mail, Globe, ArrowUpRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BottomCtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#030614] via-[#081236] to-[#04081c] relative overflow-hidden border-t border-white/10 text-white">
      {/* Dynamic ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none animate-glow-float" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Brand Logo Presentation */}
        <ScrollReveal delay={100} duration={750}>
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center drop-shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:scale-105 transition-transform duration-300">
              <Image
                src="/resvor-logo.png"
                alt="Resvor - Plan Better. Party Smarter."
                width={220}
                height={60}
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Eyebrow Pill */}
        <ScrollReveal delay={180} duration={750}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider shadow-xl shadow-blue-950/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <span>Dedicated Nightlife & Lounge Ecosystem</span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={260} duration={800}>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
            Where Every Occasion <br />
            <span className="bg-gradient-to-r from-blue-300 via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Finds Its Lounge.
            </span>
          </h2>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={340} duration={800}>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Experience the unified web platform for guests, venue workforce, and event promoters. Get started today:
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal delay={420} duration={800}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://www.resvor.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/40 hover:shadow-blue-500/60 flex items-center justify-center gap-2.5 transition-all border border-blue-400/40 cursor-pointer active:scale-95 group"
            >
              <Globe className="w-4 h-4 text-blue-200 group-hover:rotate-12 transition-transform" />
              <span>Launch Main Platform</span>
              <ArrowUpRight className="w-4 h-4 text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="mailto:support@lladner.com"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] text-slate-200 hover:text-white font-semibold text-sm border border-white/15 hover:border-white/30 shadow-lg flex items-center justify-center gap-2.5 transition-all cursor-pointer active:scale-95"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Contact Support</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
