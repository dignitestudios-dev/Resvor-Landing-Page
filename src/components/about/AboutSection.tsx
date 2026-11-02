import React from "react";
import Image from "next/image";
import { 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Building, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Layers,
  ArrowRight
} from "lucide-react";

export default function AboutSection() {
  const comparisons = [
    {
      feature: "VIP Table Reservations",
      traditional: "Informal holds via WhatsApp / DMs leading to 15-25% weekend no-shows and lost bottle minimums.",
      resvor: "Direct card tokenization requires an upfront deposit to lock tables, completely eliminating empty booth loss.",
    },
    {
      feature: "Guest Profiling & Memory",
      traditional: "Host notes scribbled on paper or lost when staff resigns. No automated tracking of birthdays or VIP status.",
      resvor: "Centralized Guest Book CRM with instant search (< 15ms), favored champagne preferences, and 14-day birthday alerts.",
    },
    {
      feature: "Floor & Event Operations",
      traditional: "Clunky daytime restaurant reservation grids ill-suited for promoter events, bottle service, or dim-light speed.",
      resvor: "Dual-Interface Engine: Visual Calendar for monthly DJ planning + Rapid List view for fast door entry and headcounts.",
    },
    {
      feature: "Commissions & Data Ownership",
      traditional: "Third-party booking platforms take $1.50–$3.00 per seated guest and hijack your patron data.",
      resvor: "0% per-cover commission. The lounge retains 100% of guest revenue, contact data, and marketing relationships.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Top Story & Objectives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Objectives */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>The Purpose of Resvor</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Built Specifically for the High-Stakes Reality of Nightlife.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Standard restaurant reservation software was engineered for quiet family diners, not high-volume cocktail lounges, subterranean speakeasies, or packed rooftop clubs. Resvor was built to eliminate the 4 critical failure points that drain lounge profits:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>The Real Lounge Problem</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lost patron history, high-ticket table no-shows, third-party per-cover extortion, and chaotic text message table coordination.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>The Resvor Solution</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  An autonomous web application unifying a searchable Guest Book, dual calendar-list scheduling, direct tokenized deposits, and automated SMS campaigns.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#071338] via-[#091a4d] to-[#0d2673] text-white border border-blue-800/40 shadow-xl flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-bold text-white block text-sm">
                  Dedicated Hospitality Web Architecture
                </span>
                <span className="text-blue-100/90 leading-relaxed block text-xs">
                  Engineered specifically for high-volume nightlife groups to streamline guest verification, eliminate deposit risk, and secure 100% direct venue revenue retention.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Brand Card (High Contrast Luxury Royal Navy) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#091444] via-[#060D2E] to-[#020514] border border-blue-400/40 p-8 shadow-2xl space-y-6 text-white">
              {/* Logo in card */}
              <div
                className="relative flex items-center justify-center drop-shadow-[0_8px_20px_rgba(37,99,235,0.4)]"
                style={{ position: "relative" }}
              >
                <Image
                  src="/resvor-logo.png"
                  alt="Resvor Brand"
                  width={200}
                  height={56}
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold text-white">Plan Better. Party Smarter.</h3>
                <p className="text-xs text-blue-200/80">
                  Where Every Occasion Finds Its Lounge.
                </p>
              </div>

              {/* Core Tenets */}
              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-400">Target Venue Types</span>
                  <span className="text-white font-semibold">Cocktail Lounges, Rooftops, Speakeasies</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-400">Guest Card Storage</span>
                  <span className="text-emerald-400 font-bold">0% (Zero Raw Storage / PCI-DSS)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-400">Account Architecture</span>
                  <span className="text-blue-300 font-semibold">Multi-Location Centralized</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-400">Commission Cut</span>
                  <span className="text-amber-300 font-bold">0% Per-Cover (Direct Retention)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Awareness Section: The Paradigm Shift (Comparison Matrix) */}
        <div className="pt-10 border-t border-slate-200 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>The Operational Paradigm Shift</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950">
              Why Lounges Are Moving Away from Generic Reservation Tools
            </h3>
            <p className="text-sm text-slate-600">
              See the exact difference between patchwork spreadsheets & generic restaurant apps versus Resvor&apos;s purpose-built web platform.
            </p>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {comparisons.map((c, i) => (
              <div 
                key={i} 
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-400/60 transition-all space-y-5"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-blue-600 font-mono text-sm">0{i + 1}.</span>
                    {c.feature}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200/80">
                    Direct Comparison
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  {/* Traditional Problem */}
                  <div className="p-4 rounded-xl bg-red-50/70 border border-red-200/80 space-y-2">
                    <div className="flex items-center gap-1.5 text-red-700 font-bold text-[11px] uppercase tracking-wider">
                      <XCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Traditional Methods</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-xs">
                      {c.traditional}
                    </p>
                  </div>

                  {/* Resvor Advantage */}
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-[11px] uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>With Resvor Web App</span>
                    </div>
                    <p className="text-slate-800 leading-relaxed text-xs">
                      {c.resvor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
