import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowUpRight, Globe, Users, Ticket } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#081236] to-[#030614] border-t border-white/10 text-slate-400 text-sm relative overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 relative z-10">
        <ScrollReveal delay={100} duration={800}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand Column */}
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center drop-shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:opacity-95 transition-opacity">
                <Image
                  src="/resvor-logo.png"
                  alt="ResVor - Plan Better. Party Smarter."
                  width={160}
                  height={44}
                  className="h-10 sm:h-11 w-auto object-contain object-left"
                />
              </Link>

              <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
                The web operating platform connecting premier cocktail lounges, patrons, floor operations, and event promoter networks.
              </p>

              <div className="pt-1 flex items-center gap-2 text-xs text-slate-300">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:support@lladner.com" className="hover:text-blue-300 font-medium transition-colors font-mono">
                  support@lladner.com
                </a>
              </div>
            </div>

            {/* Web Apps Direct Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Live Web Apps</h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <a
                    href="https://www.resvor.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white font-medium transition-colors flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
                      <span>Main Platform (ResVor.com)</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://workforce.resvor.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white font-medium transition-colors flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                      <span>Workforce Portal (workforce.resvor.com)</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://promoter.resvor.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white font-medium transition-colors flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-2">
                      <Ticket className="w-4 h-4 text-purple-400 group-hover:-rotate-12 transition-transform" />
                      <span>Promoter Portal (promoter.resvor.com)</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Navigation & Contact */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platform Navigation</h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#web-apps" className="text-slate-300 hover:text-white transition-colors">
                    Web Applications
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-slate-300 hover:text-white transition-colors">
                    Platform Features
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                    About ResVor
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-slate-300 hover:text-white transition-colors">
                    Frequently Asked Questions
                  </a>
                </li>
                <li className="pt-1">
                  <a href="mailto:support@lladner.com" className="text-blue-400 hover:text-blue-300 font-medium transition-colors font-mono">
                    support@lladner.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Legal Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 ResVor Technologies Inc. All rights reserved. Plan Better. Party Smarter.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <a href="https://www.resvor.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono">
              resvor.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
