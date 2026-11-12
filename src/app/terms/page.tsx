import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, ShieldCheck, FileText, Scale, Clock, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | ResVor",
  description: "Terms and Conditions governing the use of the ResVor specialized web application platform for lounge and nightlife venue operations.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#030614] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar />

      <main className="flex-1 pt-28 pb-16 sm:pt-36 sm:pb-24 relative overflow-hidden bg-lounge-gradient">
        {/* Ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          {/* Back button */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Legal Documentation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Terms & Conditions
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                Effective Date: November 2, 2026
              </span>
              <span>•</span>
              <span>Version: 1.0 (Draft Specification)</span>
            </div>

            {/* Dummy Content Notice Callout */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-3 mt-4">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold text-amber-300 block">
                  Placeholder Terms Notice
                </span>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  This page currently contains structured dummy legal provisions for demonstration and platform layout purposes. Formal counsel-approved terms and conditions will be updated prior to commercial deployment.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Body Content */}
          <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">01.</span>
                Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or utilizing the ResVor web application, administrative dashboards, service listing portals, or API endpoints (collectively, the &ldquo;Platform&rdquo;), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;). If you are entering into these Terms on behalf of a hospitality group, cocktail lounge, speakeasy, or nightlife entity, you represent and warrant that you possess full corporate authority to bind that entity.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">02.</span>
                Platform License & Scope of Service
              </h2>
              <p>
                ResVor grants enrolled lounge operators and verified venue personnel a non-exclusive, non-transferable, revocable license to access and use the Platform solely for internal hospitality management, guest profiling, dual-view calendar/list scheduling, service package listings, and marketing campaign automation.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-400">
                <li>You agree not to reverse engineer, decompile, or extract the underlying source code of the web application.</li>
                <li>You agree not to use the platform to transmit unlawful, fraudulent, or harassing communications.</li>
                <li>You agree not to bypass security controls, role-based permission tiers, or automated rate limits.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">03.</span>
                Account Security & Role Credentials
              </h2>
              <p>
                Venue operators are solely responsible for maintaining the confidentiality of administrative credentials, host stand accounts, and multi-factor authentication (MFA) mechanisms. You agree to immediately notify ResVor of any unauthorized access, compromised passwords, or suspicious security events.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">04.</span>
                Table Deposits & Zero-Liability Payment Processing
              </h2>
              <p>
                All guest deposits, bottle service checkouts, and ticketing transactions conducted through the Platform are processed using certified third-party payment gateways operating under PCI-DSS Level 1 compliance.
              </p>
              <p className="text-xs text-slate-400">
                Crucially, ResVor does not store raw credit card numbers, CVVs, or unencrypted payment tokens on its primary operational database. Venue operators acknowledge that cancellation policies, minimum spend enforcement, and guest refunds are determined independently by venue management in accordance with local regulations.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">05.</span>
                Patron Data Ownership & Portability
              </h2>
              <p>
                Venues retain 100% proprietary ownership over patron dossiers, customer contact records, transaction histories, and custom attributes uploaded to the Guest Book CRM. ResVor claims no ownership over venue guest data. Operators may export full or segmented guest rosters in standard CSV format at any time.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">06.</span>
                Limitation of Liability & SLA
              </h2>
              <p>
                While ResVor targets a 99.95% enterprise uptime service level, the Platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. In no event shall ResVor Technologies Inc. be liable for indirect, incidental, punitive, or consequential damages resulting from internet interruptions, local venue network outages, or unauthorized third-party access outside our direct control.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">07.</span>
                Modifications & Contact
              </h2>
              <p>
                ResVor reserves the right to amend these Terms from time to time. Operators will be provided notice of material modifications via the administrative web portal or registered executive email.
              </p>
              <div className="pt-2 text-xs text-blue-300">
                For questions regarding these terms, contact:{" "}
                <a href="mailto:inquiries@resvor.com" className="underline font-bold hover:text-blue-200">
                  inquiries@resvor.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Global Corporate Footer */}
      <Footer />
    </div>
  );
}

