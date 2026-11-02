"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Calendar, 
  CreditCard, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Zap, 
  Clock, 
  Users 
} from "lucide-react";

interface WorkflowStep {
  number: string;
  title: string;
  badge: string;
  tagline: string;
  summary: string;
  details: string[];
  operatorRole: string;
  systemAction: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: "01",
    title: "Configure Venue & Service Catalog",
    badge: "Step 1: Setup & Onboarding",
    tagline: "Build your digital venue floor, VIP bottle menus, and custom attributes in minutes.",
    summary:
      "Lounge general managers input their venue layout, available booking slots, minimum spend thresholds, and premium bottle packages. You define exactly how you want your floor organized.",
    details: [
      "Custom Bottle Packages: High-res images, bottle tiers (Dom Pérignon, Clase Azul), and minimum spend rules.",
      "Custom Tag Builder: Define tags for high-roller VIPs, birthday groups, corporate accounts, and celebrity guests.",
      "Flexible Hours & Capacity: Configure section-by-section seat caps to prevent overbooking on peak Saturday nights.",
    ],
    operatorRole: "General Manager / Operations Lead",
    systemAction: "Creates encrypted tenant profile with custom brand themes & menu configurations.",
  },
  {
    number: "02",
    title: "Dual-Interface Event & Floor Coordination",
    badge: "Step 2: Floor Operations",
    tagline: "Switch between visual long-term calendar planning and lightning-fast rapid door lists.",
    summary:
      "Nightlife doesn't work like daytime restaurants. Floor managers need big-picture calendar visibility for promoter nights, while host stands need rapid data entry tables during rush hour.",
    details: [
      "Visual Calendar View: Click any upcoming date to inspect DJ bookings, conflicting section requests, and promoter allocations.",
      "Rapid List View: Ultra-compact table for door hosts to adjust capacity caps, log walk-in door tickets, and confirm tables in 1 click.",
      "Real-Time Floor Sync: When a host marks a table checked-in or cancelled, all staff screens update instantaneously.",
    ],
    operatorRole: "Floor Manager & Door Hosts",
    systemAction: "Maintains an immutable synchronized ledger across all connected devices with sub-second latency.",
  },
  {
    number: "03",
    title: "Direct Deposit Locking & Zero-Liability Payments",
    badge: "Step 3: Financial Security",
    tagline: "Secure upfront card deposits that eliminate empty table no-shows without storing raw card data.",
    summary:
      "Guests complete transactions seamlessly using their own credit/debit card or Apple Pay. Because payments are tokenized directly with PCI-DSS compliant vaults, the venue never touches or stores raw card numbers.",
    details: [
      "Deposit Confirmation Engine: Tables are reserved only when the card deposit is authorized, stopping no-shows permanently.",
      "Zero Card Storage Risk: 100% tokenized transactions eliminate PCI compliance headaches and cardholder data liability.",
      "Omni-Channel Reconciliation: Track credit cards, Apple Pay, door cash, and bank transfers within a single financial view.",
    ],
    operatorRole: "Guests & Finance Staff",
    systemAction: "Vaults credentials via PCI-DSS Level 1 tokenization and delivers instant digital entry confirmations.",
  },
  {
    number: "04",
    title: "Unified Guest CRM & Automated Retargeting",
    badge: "Step 4: Long-Term Retention",
    tagline: "Turn first-time visitors into high-spending regulars with automated birthday & VIP campaigns.",
    summary:
      "Every guest name, phone number, visit history, preferred champagne, and birthday is safely logged in your centralized Guest Book. The platform automatically monitors dates and triggers personalized invitations.",
    details: [
      "Rich Guest Dossiers: Instant multi-parameter search (< 15ms) by birth month, lifetime spend, or visit count.",
      "14-Day Birthday Automations: Automatically dispatches personalized SMS and email invitations before a patron's birthday.",
      "Full Data Portability: 1-click CSV export lets your marketing team export custom guest segments at any time.",
    ],
    operatorRole: "Marketing Lead & VIP Host",
    systemAction: "Autonomous cron scheduler triggers hyper-personalized TCPA-compliant SMS & email campaigns.",
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="how-it-works" className="py-24 bg-[#020512] relative overflow-hidden border-t border-white/10">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>How Resvor Works</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The 4-Step Operating Workflow
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Designed specifically for the fast-paced, dim-light reality of upscale lounges and nightlife. Here is how Resvor powers your floor from first configuration to recurring patron loyalty.
          </p>
        </div>

        {/* Step Progress Navigation Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? "bg-gradient-to-b from-blue-950/80 to-[#060e2e] border-blue-400 shadow-xl shadow-blue-950/70 scale-[1.02]"
                    : "bg-slate-900/50 border-white/10 hover:border-white/20 hover:bg-slate-900/80"
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xl font-black font-mono ${isActive ? "text-blue-300" : "text-slate-500"}`}>
                    {step.number}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isActive ? "bg-blue-500/20 text-blue-200 border border-blue-400/30" : "bg-slate-800 text-slate-400"
                  }`}>
                    Phase {idx + 1}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white line-clamp-2">
                  {step.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Operational Card */}
        <div className="rounded-3xl bg-slate-950/90 border border-blue-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Deep Step Overview & Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold">
                  <span>{WORKFLOW_STEPS[activeStep].badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {WORKFLOW_STEPS[activeStep].tagline}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {WORKFLOW_STEPS[activeStep].summary}
                </p>
              </div>

              {/* Bulleted operational details */}
              <div className="space-y-3 pt-2">
                {WORKFLOW_STEPS[activeStep].details.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Quick Navigation Between Steps */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10 text-xs text-slate-400">
                <span>Navigate workflow:</span>
                {WORKFLOW_STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeStep === i
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/40"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    0{i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Operational Role & System Mechanics Panel */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#071133] to-[#04081c] rounded-2xl border border-white/15 p-6 sm:p-7 space-y-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  Operational Roles & Actions
                </span>
                <span className="text-[10px] text-blue-300 font-mono bg-blue-500/20 px-2 py-0.5 rounded border border-blue-400/30">
                  Step {WORKFLOW_STEPS[activeStep].number} of 04
                </span>
              </div>

              {/* Primary Operator Role */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-indigo-400" />
                  Primary Operator
                </div>
                <p className="text-sm font-bold text-white">
                  {WORKFLOW_STEPS[activeStep].operatorRole}
                </p>
              </div>

              {/* Underlying System Action */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Cloud Automation Under The Hood
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {WORKFLOW_STEPS[activeStep].systemAction}
                </p>
              </div>

              {/* Security & Reliability Stamp */}
              <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-blue-200 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Every step is backed by tokenized encryption, audit logging, and automated backups, ensuring your guest records and payments remain private and protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

