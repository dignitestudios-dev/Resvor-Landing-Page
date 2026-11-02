"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/testimonialsData";
import { ChevronDown, HelpCircle, Shield, FileText, Mail } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Security & Payments", "Events & Booking", "Guest CRM", "Setup & Onboarding"];

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Architecture & Operations FAQ
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Detailed technical and operational answers for lounge general managers, hospitality groups, and IT directors.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-1.5 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                    <span className="text-xs text-blue-400 font-mono">0{idx + 1}.</span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-blue-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    <p className="mb-2">{faq.answer}</p>
                    <span className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help footer */}
        <div className="mt-12 p-6 rounded-3xl bg-blue-950/30 border border-blue-500/20 text-center space-y-2">
          <h4 className="text-sm font-bold text-white">Have a specific architectural inquiry?</h4>
          <p className="text-xs text-slate-300">
            Our platform engineering and hospitality teams are available to discuss enterprise rollouts, multi-location deployments, and security specifications.
          </p>
          <div className="pt-2">
            <a
              href="mailto:inquiries@resvor.com?subject=Resvor%20Platform%20Architecture%20Inquiry"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 underline"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Resvor Engineering & Inquiries</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
