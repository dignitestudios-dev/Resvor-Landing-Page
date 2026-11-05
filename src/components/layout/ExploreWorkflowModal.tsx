"use client";

import React, { useEffect } from "react";
import { 
  Globe, 
  Users, 
  Ticket, 
  ExternalLink, 
  X, 
  Sparkles, 
  ArrowUpRight, 
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";

interface ExploreWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PlatformLink {
  title: string;
  badge: string;
  url: string;
  displayUrl: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  buttonLabel: string;
}

const PLATFORM_LINKS: PlatformLink[] = [
  {
    title: "ResVor Main Platform",
    badge: "Patron & Venue Experience",
    url: "https://www.resvor.com/",
    displayUrl: "www.resvor.com",
    description: "The primary web application for premier lounge discovery, VIP bottle package reservations, and digital guest check-in.",
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    accentColor: "from-blue-600/20 to-blue-500/10 border-blue-400/40 text-blue-300",
    buttonLabel: "Visit Main Platform",
  },
  {
    title: "ResVor Workforce Portal",
    badge: "Staff & Floor Operations",
    url: "https://workforce.resvor.com/",
    displayUrl: "workforce.resvor.com",
    description: "Dedicated operational terminal for door hosts, general managers, and floor staff to manage live capacity and upfront card deposits.",
    icon: <Users className="w-5 h-5 text-indigo-400" />,
    accentColor: "from-indigo-600/20 to-indigo-500/10 border-indigo-400/40 text-indigo-300",
    buttonLabel: "Visit Workforce Portal",
  },
  {
    title: "ResVor Promoter Portal",
    badge: "Event & Promoter Hub",
    url: "https://promoter.resvor.com/",
    displayUrl: "promoter.resvor.com",
    description: "Specialized hub for nightlife promoters, headline DJs, and event coordinators to manage guest allotments and track door proceeds.",
    icon: <Ticket className="w-5 h-5 text-purple-400" />,
    accentColor: "from-purple-600/20 to-purple-500/10 border-purple-400/40 text-purple-300",
    buttonLabel: "Visit Promoter Portal",
  },
];

export default function ExploreWorkflowModal({ isOpen, onClose }: ExploreWorkflowModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Semi-transparent backdrop blur */}
      <div 
        className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-[#0a153f] via-[#050c28] to-[#020514] border border-blue-400/30 p-6 sm:p-8 shadow-2xl z-10 space-y-6 text-slate-100 max-h-[92vh] overflow-y-auto">
        {/* Subtle decorative radial glow */}
        <div className="absolute top-0 right-1/4 w-80 h-40 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-1.5">
            {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>ResVor Web Ecosystem</span>
            </div> */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Explore the ResVor Network
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              Visit our live web platforms engineered specifically for patrons, venue workforce, and nightlife event promoters.
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* The 3 Web Links Cards */}
        <div className="space-y-3.5">
          {PLATFORM_LINKS.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 sm:p-5 rounded-2xl bg-slate-900/70 hover:bg-slate-850/90 border border-white/10 hover:border-blue-400/50 transition-all shadow-lg hover:shadow-blue-900/30 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Left info */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-gradient-to-r ${item.accentColor}`}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pr-2">
                      {item.description}
                    </p>
                    <span className="text-[11px] text-blue-400 font-mono inline-block pt-0.5">
                      {item.displayUrl}
                    </span>
                  </div>
                </div>

                {/* Right button */}
                <div className="sm:shrink-0 flex sm:justify-end">
                  <span className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600/80 group-hover:bg-blue-600 border border-blue-400/40 transition-all shadow-md">
                    <span>Visit</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Modal Footer: Secondary link to scroll to on-page workflow */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official ResVor Verified Domains</span>
          </div>

          <a
            href="/#how-it-works"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            <span>View on-page 4-step workflow</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

