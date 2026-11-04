"use client";

import React from "react";
import { Globe, Users, Ticket, ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Patron Discovery & Booking",
      portal: "Resvor Main Platform",
      portalUrl: "resvor.com",
      description:
        "Guests explore premier lounges, view available tables, and secure VIP reservations online with instant digital confirmation.",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      accentBg: "bg-blue-50 border-blue-200 text-blue-700",
      topBorder: "from-blue-500 to-indigo-600",
    },
    {
      number: "02",
      title: "Live Door & Floor Operations",
      portal: "Resvor Workforce Portal",
      portalUrl: "workforce.resvor.com",
      description:
        "Door staff and general managers verify arrivals in real time, assign tables, and monitor live venue capacity smoothly.",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      accentBg: "bg-indigo-50 border-indigo-200 text-indigo-700",
      topBorder: "from-indigo-500 to-purple-600",
    },
    {
      number: "03",
      title: "Promoter & Event Allotments",
      portal: "Resvor Promoter Portal",
      portalUrl: "promoter.resvor.com",
      description:
        "Event coordinators and DJs manage guest list allocations and track live event check-ins from their dedicated portal.",
      icon: <Ticket className="w-6 h-6 text-purple-600" />,
      accentBg: "bg-purple-50 border-purple-200 text-purple-700",
      topBorder: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <ScrollReveal delay={100} duration={750}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Unified Ecosystem</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
              How the Resvor Ecosystem Connects.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Three dedicated web applications working in harmony from initial table booking to live door check-in.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={idx}
              delay={150 + idx * 120}
              duration={750}
              className="h-full"
            >
              <div className="group relative h-full rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-7 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5">
                {/* Top Accent Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${step.topBorder}`} />

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-mono text-3xl font-extrabold text-slate-300 group-hover:text-blue-600 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      {step.icon}
                    </div>
                  </div>

                  {/* Portal badge */}
                  <div className="mb-2">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${step.accentBg}`}>
                      {step.portal}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-blue-900 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Bottom URL indication */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-blue-600 font-semibold">{step.portalUrl}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
