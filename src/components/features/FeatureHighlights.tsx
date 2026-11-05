"use client";

import React from "react";
import { MonitorSmartphone, Zap, Sparkles, Building2, Layers } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FeatureHighlights() {
  const highlights = [
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-50 border-blue-200",
      title: "100% Web Application",
      description:
        "No app store downloads, updates, or hardware terminals. Access all portals instantly from smartphones, tablets, or computers.",
      badge: "Zero Installation",
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      iconBg: "bg-indigo-50 border-indigo-200",
      title: "Real-Time Synchronization",
      description:
        "Live arrivals, table statuses, and capacity counts sync seamlessly between door staff, host stands, and general managers.",
      badge: "Instant Sync",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      iconBg: "bg-purple-50 border-purple-200",
      title: "Promoter & Event Portal",
      description:
        "Give nightlife promoters, DJs, and event curators dedicated tools to manage guest list allocations and monitor check-ins.",
      badge: "Collaborative",
    },
    {
      icon: <Building2 className="w-6 h-6 text-emerald-600" />,
      iconBg: "bg-emerald-50 border-emerald-200",
      title: "Direct Venue Control",
      description:
        "Maintain direct communication with your patrons, oversee floor operations, and manage your lounge your way.",
      badge: "Autonomous",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <ScrollReveal delay={100} duration={750}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Platform Advantages</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Built for Modern Lounge Operations.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Engineered with the speed and reliability demanded by premier nightlife venues and fast-paced cocktail lounges.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Bento Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, idx) => (
            <ScrollReveal
              key={idx}
              delay={150 + idx * 100}
              duration={750}
              className="h-full"
            >
              <div className="group h-full p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
