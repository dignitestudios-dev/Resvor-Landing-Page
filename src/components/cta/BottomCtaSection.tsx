import React from "react";
import Image from "next/image";
import { Sparkles, Mail, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function BottomCtaSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#020514] via-[#071038] to-[#04081c] relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Logo in CTA */}
        <div className="flex justify-center">
          <div
            className="relative flex items-center justify-center drop-shadow-[0_10px_30px_rgba(37,99,235,0.4)]"
            style={{ position: "relative" }}
          >
            <Image
              src="/resvor-logo.png"
              alt="ResVor - Plan Better. Party Smarter."
              width={260}
              height={70}
              className="h-14 sm:h-20 w-auto object-contain"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Specialized Nightlife & Hospitality Architecture</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Plan Better. Party Smarter. <br />
          <span className="bg-gradient-to-r from-blue-300 via-indigo-100 to-blue-200 bg-clip-text text-transparent">
            Elevating Premier Lounge Operations.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Engineered to unify guest memory, eliminate no-shows with direct deposits, and empower lounge managers with dual-interface event controls.
        </p>

        {/* Informative Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="mailto:inquiries@resvor.com?subject=ResVor%20Platform%20Inquiry"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-2xl shadow-blue-600/50 hover:shadow-blue-500/70 flex items-center justify-center gap-2.5 transition-all border border-blue-400/40 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-blue-200" />
            <span>Connect & Inquire</span>
          </a>

          <a
            href="#modules"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-white/15 hover:border-blue-400/40 shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Layers className="w-4 h-4 text-blue-400" />
            <span>Review System Specifications</span>
          </a>
        </div>

        {/* Trust & Specification References */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>PCI-DSS Tokenized Payments</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Zero Raw Card Storage</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>99.95% Enterprise SLA</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Multi-Location Hospitality Web App</span>
          </div>
        </div>
      </div>
    </section>
  );
}
