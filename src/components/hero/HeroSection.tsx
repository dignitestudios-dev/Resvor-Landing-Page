"use client";

import React from "react";
import Image from "next/image";
import { 
  Globe, 
  Users, 
  Ticket, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface WebAppItem {
  id: string;
  name: string;
  tagline: string;
  role: string;
  roleBadgeClass: string;
  url: string;
  displayUrl: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  iconBg: string;
  buttonClass: string;
  buttonText: string;
  borderHover: string;
  topAccent: string;
  glowAccent: string;
}

const WEB_APPS: WebAppItem[] = [
  {
    id: "main-platform",
    name: "ResVor Main Platform",
    tagline: "Lounge Discovery & VIP Reservations",
    role: "For Guests & Patrons",
    roleBadgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    url: "https://www.resvor.com/",
    displayUrl: "www.resvor.com",
    description: "The primary web application for discovering premier cocktail lounges, booking VIP tables, and exploring curated nightlife venues.",
    features: [
      "Curated Nightlife Directory",
      "VIP Table Reservations",
      "Direct Online Booking"
    ],
    icon: <Globe className="w-6 h-6 text-blue-600 transition-transform duration-300 group-hover:rotate-12" />,
    iconBg: "bg-blue-50 border-blue-200 group-hover:bg-blue-100/80",
    buttonClass: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/25 group-hover:shadow-blue-500/40",
    buttonText: "Launch ResVor Platform",
    borderHover: "hover:border-blue-400/80 hover:shadow-blue-500/15",
    topAccent: "bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600",
    glowAccent: "bg-blue-500/10",
  },
  {
    id: "workforce-portal",
    name: "ResVor Workforce Portal",
    tagline: "Operations & Floor Management",
    role: "For Venue Staff & GMs",
    roleBadgeClass: "bg-indigo-50 text-indigo-700 border-indigo-200",
    url: "https://workforce.resvor.com/",
    displayUrl: "workforce.resvor.com",
    description: "Operational terminal for general managers, hosts, and door staff to manage live capacity and streamline door check-ins.",
    features: [
      "Rapid Door Check-In",
      "Live Floor Capacity Control",
      "Centralized Venue Operations"
    ],
    icon: <Users className="w-6 h-6 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />,
    iconBg: "bg-indigo-50 border-indigo-200 group-hover:bg-indigo-100/80",
    buttonClass: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/25 group-hover:shadow-slate-900/40",
    buttonText: "Launch workforce portal",
    borderHover: "hover:border-indigo-400/80 hover:shadow-indigo-500/15",
    topAccent: "bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600",
    glowAccent: "bg-indigo-500/10",
  },
  {
    id: "promoter-portal",
    name: "ResVor Promoter Portal",
    tagline: "Event Allotments & Door Tracking",
    role: "For Promoters & DJs",
    roleBadgeClass: "bg-purple-50 text-purple-700 border-purple-200",
    url: "https://promoter.resvor.com/",
    displayUrl: "promoter.resvor.com",
    description: "Specialized hub for nightlife promoters and event curators to manage guest list allotments and track event attendance.",
    features: [
      "Guest List Allotment Tracker",
      "Live Event Attendance Tally",
      "Event Coordination Tools"
    ],
    icon: <Ticket className="w-6 h-6 text-purple-600 transition-transform duration-300 group-hover:-rotate-12" />,
    iconBg: "bg-purple-50 border-purple-200 group-hover:bg-purple-100/80",
    buttonClass: "bg-purple-600 hover:bg-purple-500 text-white shadow-purple-500/25 group-hover:shadow-purple-500/40",
    buttonText: "Launch promoter portal",
    borderHover: "hover:border-purple-400/80 hover:shadow-purple-500/15",
    topAccent: "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600",
    glowAccent: "bg-purple-500/10",
  },
];

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#030614] via-[#081236] via-45% to-slate-50 border-b border-slate-200/80">
      {/* Dynamic ambient floating lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[480px] bg-blue-600/25 rounded-full blur-[140px] pointer-events-none animate-glow-float" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none animate-float-gentle" />
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-blue-500/15 rounded-full blur-[120px] pointer-events-none animate-float-gentle" style={{ animationDelay: "2s" }} />

      {/* Subtle Grid overlay at top */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Brand Logo Presentation with smooth reveal */}
        <ScrollReveal delay={50} duration={700}>
          <div className="flex justify-center mb-6">
            <div className="relative flex items-center justify-center drop-shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:scale-105 transition-transform duration-300">
              <Image
                src="/resvor-logo.png"
                alt="ResVor - Plan Better. Party Smarter."
                width={260}
                height={70}
                className="h-14 sm:h-18 w-auto object-contain"
                priority
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Eyebrow Pill in Dark Mode Styling */}
        <ScrollReveal delay={150} duration={700}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-400/30 text-blue-200 text-xs font-semibold mb-6 shadow-xl shadow-blue-950/60 backdrop-blur-md hover:border-blue-300/50 transition-colors">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-bold tracking-wide uppercase text-[11px] text-blue-300">
              The Nightlife & Lounge Web Ecosystem
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline text-[11px] font-medium">
              3 Connected Web Applications
            </span>
          </div>
        </ScrollReveal>

        {/* Hero Title (Using current hero typography on dark shade) */}
        <ScrollReveal delay={250} duration={800}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-5">
            Where Every Occasion <br />
            <span className="bg-gradient-to-r from-blue-300 via-blue-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-sm">
              Finds Its Lounge.
            </span>
          </h1>
        </ScrollReveal>

        {/* Hero Subtitle */}
        <ScrollReveal delay={350} duration={800}>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-12 sm:mb-14 leading-relaxed font-normal">
            ResVor delivers a purpose-built web architecture connecting{" "}
            <span className="text-white font-semibold">patrons</span>,{" "}
            <span className="text-white font-semibold">venue workforce</span>, and{" "}
            <span className="text-white font-semibold">event promoters</span>.{" "}
            Select your portal below to enter the live platform:
          </p>
        </ScrollReveal>

        {/* FIRST VIEW: The 3 Web Apps Link Cards with Staggered Reveal */}
        <div id="web-apps" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          {WEB_APPS.map((app, index) => (
            <ScrollReveal
              key={app.id}
              delay={450 + index * 120}
              duration={800}
              className="h-full"
            >
              <div
                className={`group relative h-full rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden ${app.borderHover} hover:-translate-y-2`}
              >
                {/* Top Accent Gradient Line with Shimmer on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${app.topAccent}`} />

                {/* Ambient Card Background Glow on Hover */}
                <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${app.glowAccent}`} />

                <div className="relative z-10">
                  {/* Header: Icon + Role Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${app.iconBg} border flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                      {app.icon}
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border transition-all duration-300 group-hover:scale-105 ${app.roleBadgeClass}`}>
                      {app.role}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-1.5 group-hover:text-blue-900 transition-colors">
                      <span>{app.name}</span>
                    </h3>
                    <p className="text-xs font-semibold text-blue-700">
                      {app.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {app.description}
                  </p>

                  {/* Feature Bullet Points */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                    {app.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Launch Button & URL */}
                <div className="pt-2 relative z-10">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md active:scale-[0.98] ${app.buttonClass}`}
                  >
                    <span>{app.buttonText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mt-3 px-1">
                    <span className="text-blue-600 font-medium group-hover:underline">{app.displayUrl}</span>
                    <span className="flex items-center gap-1 text-emerald-600 font-sans font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Web App
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
