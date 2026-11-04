"use client";

import React from "react";
import { 
  Building2, 
  CreditCard, 
  Users, 
  Ticket, 
  Mail
} from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: <CreditCard className="w-5 h-5 text-blue-600" />,
      iconBg: "bg-blue-50 border-blue-200",
      title: "Patron Discovery & VIP Reservations",
      description:
        "A streamlined web platform for guests to discover premier cocktail lounges, book VIP tables, and secure reservations online.",
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      iconBg: "bg-indigo-50 border-indigo-200",
      title: "Workforce & Floor Management",
      description:
        "Fast operational terminal engineered for door staff and general managers to manage door check-ins and oversee live venue capacity in real time.",
    },
    {
      icon: <Ticket className="w-5 h-5 text-purple-600" />,
      iconBg: "bg-purple-50 border-purple-200",
      title: "Promoter & Event Coordination",
      description:
        "Dedicated event management tools for nightlife promoters and DJs to manage guest list allocations and coordinate event attendance.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-slate-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>About Resvor</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Built for Premier Nightlife & Lounges.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Resvor is the purpose-built web ecosystem connecting patrons, venue floor staff, and event promoters into one seamless platform.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/90 hover:border-blue-300 transition-all shadow-sm hover:shadow-md space-y-3.5"
            >
              <div className={`w-11 h-11 rounded-2xl ${pillar.iconBg} border flex items-center justify-center shadow-sm`}>
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple Contact Card */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Get in Touch
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              For inquiries, feedback, or support, reach out to our team directly.
            </p>
            <p className="text-xs text-blue-300 font-medium pt-1">
              support@lladner.com
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="mailto:support@lladner.com"
              className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all border border-blue-400/30"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Support</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
