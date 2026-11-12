"use client";

import React, { useState } from "react";
import { PLATFORM_FEATURES } from "@/data/featuresData";
import { FeatureDeepItem } from "@/data/featuresData";
import { ShieldCheck, CheckCircle2, Building2, Calendar, Users, Send, CreditCard, Layers } from "lucide-react";

export default function FeatureGrid() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDeepItem>(PLATFORM_FEATURES[0]);

  const icons = [
    <Users key="1" className="w-5 h-5 text-blue-600" />,
    <Calendar key="2" className="w-5 h-5 text-indigo-600" />,
    <CreditCard key="3" className="w-5 h-5 text-emerald-600" />,
    <Send key="4" className="w-5 h-5 text-purple-600" />,
    <Building2 key="5" className="w-5 h-5 text-amber-600" />,
  ];

  return (
    <section id="modules" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Platform Architecture & Specifications</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            The Core Architectural Modules
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A comprehensive architectural blueprint of the ResVor web application. Click any core module below to inspect its operational capabilities and technical specifications.
          </p>
        </div>

        {/* Feature Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 mb-10">
          {PLATFORM_FEATURES.map((feat, idx) => {
            const isSelected = selectedFeature.id === feat.id;
            return (
              <button
                key={feat.id}
                onClick={() => setSelectedFeature(feat)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#060e2e] text-white border-blue-500 shadow-xl shadow-blue-900/20 scale-[1.02]"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-800 shadow-sm"
                }`}
              >
                <div className="mb-3">
                  {isSelected ? (
                    React.cloneElement(icons[idx], { className: "w-5 h-5 text-blue-300" })
                  ) : (
                    icons[idx]
                  )}
                </div>
                <div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider block mb-0.5 ${
                    isSelected ? "text-blue-300" : "text-blue-600"
                  }`}>
                    {feat.badge}
                  </span>
                  <h4 className={`text-xs font-bold line-clamp-1 ${
                    isSelected ? "text-white" : "text-slate-900"
                  }`}>
                    {feat.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspection Showcase Card */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Narrative & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/80">
                  <span className="font-mono">{selectedFeature.figmaReference}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                  {selectedFeature.headline}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {selectedFeature.description}
                </p>
              </div>

              {/* Bulleted Highlights */}
              <div className="space-y-3 pt-2">
                {selectedFeature.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Specs & Metric Panel (Midnight Navy Luxury Contrast) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#071133] to-[#04081c] rounded-2xl border border-blue-900/40 p-6 space-y-5 text-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Architectural Specifications
                </span>
                <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                  Production Blueprint
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {selectedFeature.specs.map((spec, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900/90 border border-white/10 space-y-1">
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
