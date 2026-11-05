import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lock, Award, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#02040c] border-t border-white/10 text-slate-400 text-sm relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-blue-900/20 to-transparent blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="relative inline-flex items-center" style={{ position: "relative" }}>
              <Image
                src="/resvor-logo.png"
                alt="ResVor"
                width={150}
                height={40}
                className="h-9 sm:h-10 w-auto object-contain object-left hover:opacity-90 transition-opacity"
              />
            </Link>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              The specialized web application transforming how premier lounges, rooftop clubs, and speakeasies manage guest relationships, dual-view event logistics, and direct card transactions.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:inquiries@resvor.com" className="hover:text-blue-300 transition-colors">
                  inquiries@resvor.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Dedicated Enterprise Hospitality Cloud Infrastructure</span>
              </div>
            </div>

            {/* Compliance Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>PCI-DSS Level 1 Ready</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-[11px] text-slate-300">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span>Zero Card Storage Security</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-[11px] text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>99.95% Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* Web App Modules Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platform Modules</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#modules" className="hover:text-blue-300 transition-colors">
                  Comprehensive Guest Book CRM
                </Link>
              </li>
              <li>
                <Link href="/#modules" className="hover:text-blue-300 transition-colors">
                  Dual-Interface Event Scheduling
                </Link>
              </li>
              <li>
                <Link href="/#modules" className="hover:text-blue-300 transition-colors">
                  VIP Bottle & Service Listings
                </Link>
              </li>
              <li>
                <Link href="/#modules" className="hover:text-blue-300 transition-colors">
                  Web-Based Campaign Dispatcher
                </Link>
              </li>
              <li>
                <Link href="/#modules" className="hover:text-blue-300 transition-colors">
                  Multi-Venue Group Management
                </Link>
              </li>
              <li>
                <Link href="/#modules" className="hover:text-blue-300 transition-colors">
                  Security Deposit Locking
                </Link>
              </li>
            </ul>
          </div>

          {/* Workflow & Overview Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Workflow & Overview</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#about" className="hover:text-blue-300 transition-colors">
                  Platform Purpose & Mission
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-blue-300 transition-colors">
                  4-Step Operational Workflow
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-blue-300 transition-colors">
                  Why Lounges Switch Matrix
                </Link>
              </li>
              <li>
                <Link href="/#modules" className="hover:text-blue-300 transition-colors">
                  Dual Calendar & List Scheduling
                </Link>
              </li>
              <li>
                <Link href="/#modules" className="hover:text-blue-300 transition-colors">
                  Direct Card & Deposit Engine
                </Link>
              </li>
              <li>
                <Link href="/#modules" className="hover:text-blue-300 transition-colors">
                  Automated SMS & Email Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Enterprise & Security */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Enterprise & Security</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#faq" className="hover:text-blue-300 transition-colors">
                  PCI-DSS Level 1 Compliance
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-blue-300 transition-colors">
                  Zero Raw Card Storage Policy
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-blue-300 transition-colors">
                  Role-Based Access Control (RBAC)
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-blue-300 transition-colors">
                  Multi-Factor Authentication (MFA)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-300 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Platform Inquiries <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 ResVor Technologies Inc. All rights reserved. Specialized Web Application for Lounge & Nightlife Operations.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/#faq" className="hover:text-slate-300 transition-colors">
              Security & PCI Notice
            </Link>
            <Link href="/#modules" className="hover:text-slate-300 transition-colors">
              System Architecture
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
