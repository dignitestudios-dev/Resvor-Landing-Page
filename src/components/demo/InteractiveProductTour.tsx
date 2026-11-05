"use client";

import React, { useState } from "react";
import { Users, Calendar, CreditCard, Send, Sparkles, Laptop, Eye, HelpCircle } from "lucide-react";
import GuestBookPreview from "./GuestBookPreview";
import EventCalendarPreview from "./EventCalendarPreview";
import ServiceBookingPreview from "./ServiceBookingPreview";
import CampaignStudioPreview from "./CampaignStudioPreview";

export default function InteractiveProductTour() {
  const [activeTab, setActiveTab] = useState<"guestbook" | "events" | "services" | "campaigns">("guestbook");

  return (
    <section id="preview" className="relative py-24 bg-[#04081c] border-y border-white/10 overflow-hidden">
      {/* Background glow and subtle luxury patterns */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive Web App Walkthrough</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Explore the ResVor Web Application
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            See how the ResVor web application looks and operates in everyday nightlife hospitality. Select any of the 4 web app modules below to explore the Guest CRM, dual-view calendar, and automated campaign engines.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex justify-center mb-8">
          <div className="p-1.5 rounded-2xl bg-slate-900/90 border border-white/15 backdrop-blur-xl flex flex-wrap justify-center gap-1.5 max-w-4xl shadow-2xl">
            <button
              onClick={() => setActiveTab("guestbook")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "guestbook"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/40 border border-blue-400/40"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Users className="w-4 h-4 text-blue-300" />
              <span>1. Guest Book CRM</span>
            </button>

            <button
              onClick={() => setActiveTab("events")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "events"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/40 border border-blue-400/40"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Calendar className="w-4 h-4 text-indigo-300" />
              <span>2. Dual Event Scheduling</span>
            </button>

            <button
              onClick={() => setActiveTab("services")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "services"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/40 border border-blue-400/40"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <CreditCard className="w-4 h-4 text-emerald-300" />
              <span>3. Service Listings & Payments</span>
            </button>

            <button
              onClick={() => setActiveTab("campaigns")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "campaigns"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/40 border border-blue-400/40"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Send className="w-4 h-4 text-purple-300" />
              <span>4. SMS/Email Campaigns</span>
            </button>
          </div>
        </div>

        {/* Tab Panel Viewport */}
        <div className="rounded-3xl bg-slate-950/90 border border-blue-500/20 p-4 sm:p-7 shadow-2xl shadow-blue-950/80 backdrop-blur-2xl">
          {activeTab === "guestbook" && <GuestBookPreview />}
          {activeTab === "events" && <EventCalendarPreview />}
          {activeTab === "services" && <ServiceBookingPreview />}
          {activeTab === "campaigns" && <CampaignStudioPreview />}
        </div>
      </div>
    </section>
  );
}
