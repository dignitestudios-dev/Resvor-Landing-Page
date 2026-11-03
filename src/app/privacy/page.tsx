import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, ShieldCheck, Lock, Eye, Clock, AlertCircle, Database, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Resvor",
  description: "Privacy Policy detailing how Resvor collects, protects, and handles operator and guest information across our nightlife management platform.",
};

export default function PrivacyPage() {
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
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Data Protection & Privacy</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Privacy Policy
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
                  Placeholder Policy Notice
                </span>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  This privacy policy currently features structured placeholder content for demonstration purposes. Formal legal and compliance text tailored to regional regulatory requirements (GDPR, CCPA, TCPA) will be provided prior to commercial rollout.
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
                Information We Collect
              </h2>
              <p>
                Resvor collects necessary operational information to provide specialized nightlife hospitality management services, including:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-400">
                <li><strong className="text-white">Operator Account Data:</strong> Full name, corporate email address, encrypted authentication hashes, venue roles, and contact phone numbers.</li>
                <li><strong className="text-white">Guest Book Profile Data:</strong> Patron names, phone numbers, email addresses, birth dates, dietary or champagne preferences, and optional patron photos recorded by venue staff.</li>
                <li><strong className="text-white">Reservation & Ticketing Logs:</strong> Section booking dates, table numbers, minimum spend authorizations, guest headcount tallies, and check-in timestamps.</li>
                <li><strong className="text-white">Technical & Session Metrics:</strong> Browser type, operating system version, IP addresses for security audit logging, and page performance metrics.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">02.</span>
                Zero Raw Card Storage Policy
              </h2>
              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-200 flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-slate-200 text-[11px] leading-relaxed">
                  Resvor operates on a strict zero-card-liability architecture. When patrons submit table security deposits or purchase bottle service packages, card details are transmitted directly to PCI-DSS Level 1 compliant vaults via encrypted tokenization.
                </p>
              </div>
              <p className="text-xs text-slate-400 pt-1">
                Raw 16-digit credit card numbers, CVVs, and magnetic stripe information are never received, stored, or processed on Resvor primary application servers.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">03.</span>
                How We Use Information
              </h2>
              <p>
                Collected data is utilized strictly to deliver and enhance the Resvor operational experience:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3 rounded-xl bg-slate-800/40 border border-white/5 space-y-1">
                  <span className="font-bold text-white block">Event & Table Execution</span>
                  <span className="text-slate-400">Displaying real-time capacity and headcount caps across door host and floor manager terminals.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-white/5 space-y-1">
                  <span className="font-bold text-white block">Automated Birthday Triggers</span>
                  <span className="text-slate-400">Delivering pre-configured SMS and email invitations 14 days prior to registered patron birthdays.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-white/5 space-y-1">
                  <span className="font-bold text-white block">Security & Fraud Prevention</span>
                  <span className="text-slate-400">Verifying authorized management sign-ins and tracking administrative action audit trails.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-white/5 space-y-1">
                  <span className="font-bold text-white block">Reporting & Financial Insights</span>
                  <span className="text-slate-400">Aggregating door receipts, deposit volumes, and repeat patron metrics for venue owners.</span>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">04.</span>
                Data Sharing & Third-Party Vendors
              </h2>
              <p>
                Resvor does not sell, lease, or monetize patron information to advertisers or data brokers. Information is shared only with verified infrastructure providers strictly required to operate the service:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-400">
                <li><strong className="text-white">Cloud Hosting & Database:</strong> Encrypted multi-zone cloud infrastructure providers.</li>
                <li><strong className="text-white">Payment Processors:</strong> PCI-compliant merchant services for tokenized checkout settlement.</li>
                <li><strong className="text-white">Telecommunications Gateways:</strong> TCPA-compliant SMS and transactional email dispatchers for reservation receipts.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">05.</span>
                Data Portability & Deletion Rights
              </h2>
              <p>
                Venue operators retain full rights to request an export of their stored guest archives or initiate account deletion. Upon verified termination of service, patron databases are securely wiped from active clusters following standard retention and backup pruning cycles.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">06.</span>
                Privacy Inquiries & Contact
              </h2>
              <p>
                If you have questions regarding our privacy architecture, zero-card storage protocols, or data portability policies, please contact our data governance team:
              </p>
              <div className="pt-2 text-xs text-blue-300">
                Email:{" "}
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

