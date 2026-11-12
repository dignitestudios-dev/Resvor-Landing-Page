"use client";

import React from "react";
import { 
  Building2, 
  CreditCard, 
  Users, 
  Ticket, 
  Mail,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutSection() {
  const pillars = [
    {
      icon: <CreditCard className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:scale-110" />,
      iconBg: "bg-blue-50 border-blue-200 group-hover:bg-blue-100",
      title: "Patron Discovery & VIP Reservations",
      description:
        "A streamlined web platform for guests to discover premier cocktail lounges, book VIP tables, and secure reservations online.",
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />,
      iconBg: "bg-indigo-50 border-indigo-200 group-hover:bg-indigo-100",
      title: "Workforce & Floor Management",
      description:
        "Fast operational terminal engineered for door staff and general managers to manage door check-ins and oversee live venue capacity in real time.",
    },
    {
      icon: <Ticket className="w-5 h-5 text-purple-600 transition-transform duration-300 group-hover:scale-110" />,
      iconBg: "bg-purple-50 border-purple-200 group-hover:bg-purple-100",
      title: "Promoter & Event Coordination",
      description:
        "Dedicated event management tools for nightlife promoters and DJs to manage guest list allocations and coordinate event attendance.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[520px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10 animate-float-gentle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal delay={100} duration={750}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider shadow-xs hover:border-blue-300 transition-colors">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              <span>About Resvor</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Designed for Premier Restaurants, Nightlife Venues, and Lounges
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Resvor is the purpose-built web ecosystem connecting patrons, venue floor staff, and event promoters into one seamless platform.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pillars Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => (
            <ScrollReveal
              key={idx}
              delay={150 + idx * 120}
              duration={750}
              className="h-full"
            >
              <div
                className="group h-full p-6 sm:p-7 rounded-3xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 space-y-3.5"
              >
                <div className={`w-11 h-11 rounded-2xl ${pillar.iconBg} border flex items-center justify-center shadow-xs transition-colors duration-300`}>
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-900 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Simple Contact Card with Smooth Reveal */}
        <ScrollReveal delay={250} duration={800}>
          <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-900/40 hover:border-blue-800/60 transition-colors">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-1.5 text-center sm:text-left relative z-10">
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Get in Touch
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                For inquiries, feedback, or support, reach out to our team directly.
              </p>
              <p className="text-xs text-blue-300 font-mono pt-1">
                support@lladner.com
              </p>
            </div>

            <div className="shrink-0 relative z-10">
              <a
                href="mailto:support@lladner.com"
                className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 active:scale-95 transition-all duration-200 border border-blue-400/30 group"
              >
                <Mail className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform" />
                <span>Contact Support</span>
                <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
