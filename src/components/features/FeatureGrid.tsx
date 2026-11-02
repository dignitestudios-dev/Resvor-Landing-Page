"use client";

import React, { useState } from "react";
import { PLATFORM_FEATURES } from "@/data/featuresData";
import { FeatureDeepItem } from "@/data/featuresData";
import { ShieldCheck, CheckCircle2, Building2, Calendar, Users, Send, CreditCard, Layers } from "lucide-react";

export default function FeatureGrid() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDeepItem>(PLATFORM_FEATURES[0]);

  const icons = [
    <Users key="1" className="w-5 h-5 text-blue-400" />,
    <Calendar key="2" className="w-5 h-5 text-indigo-400" />,
    <CreditCard key="3" className="w-5 h-5 text-emerald-400" />,
    <Send key="4" className="w-5 h-5 text-purple-400" />,
    <Building2 key="5" className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="modules" className="py-24 bg-lounge-gradient relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Platform Architecture & Specifications</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            The Core Architectural Modules
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A comprehensive architectural blueprint of the Resvor web application. Click any core module below to inspect its operational capabilities and technical specifications.
          </p>
        </div>

        {/* Feature Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {PLATFORM_FEATURES.map((feat, idx) => {
            const isSelected = selectedFeature.id === feat.id;
            return (
              <button
                key={feat.id}
                onClick={() => setSelectedFeature(feat)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-blue-950/70 border-blue-400 shadow-xl shadow-blue-950/80 scale-[1.02]"
                    : "bg-slate-900/60 border-white/10 hover:border-white/25 hover:bg-slate-900/90"
                }`}
              >
                <div className="mb-3">{icons[idx]}</div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-blue-300 block mb-0.5">
                    {feat.badge}
                  </span>
                  <h4 className="text-xs font-bold text-white line-clamp-1">
                    {feat.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspection Showcase Card */}
        <div className="rounded-3xl bg-slate-950/90 border border-blue-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Narrative & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold border border-blue-500/20">
                  <span className="font-mono">{selectedFeature.figmaReference}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedFeature.headline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedFeature.description}
                </p>
              </div>

              {/* Bulleted Highlights */}
              <div className="space-y-2.5 pt-2">
                {selectedFeature.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Specs & Metric Panel */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-white/10 p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Architectural Specifications
                </span>
                <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Production Blueprint
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {selectedFeature.specs.map((spec, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900/90 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      {spec.label}
                    </span>
                    <span className="text-sm font-extrabold text-blue-300 font-mono">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-blue-200 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Enterprise Reliability Standards
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  End-to-end audit logging, automated encrypted backups, and multi-location tenancy built for seamless scaling across multi-venue groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
