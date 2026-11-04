"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Mail } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What are the three Resvor web applications?",
    answer:
      "Resvor unifies three dedicated platforms: the Main Platform (resvor.com) for patrons to discover lounges and book VIP tables, the Workforce Portal (workforce.resvor.com) for floor managers and door hosts to manage live operations, and the Promoter Portal (promoter.resvor.com) for event coordinators and DJs to manage guest list allotments.",
  },
  {
    question: "Do guests or staff need to install an app from an app store?",
    answer:
      "No. All three Resvor portals are 100% web applications. They run seamlessly in any modern browser across iOS, Android, tablets, and desktop computers with zero downloads or hardware requirements.",
  },
  {
    question: "How can our venue or lounge get started with Resvor?",
    answer:
      "You can contact our team directly at support@lladner.com. We will guide you through setting up your venue profile, workforce accounts, and promoter access.",
  },
  {
    question: "Can promoters coordinate multiple nightlife events?",
    answer:
      "Yes. The Promoter Portal enables nightlife promoters and event curators to manage guest list allotments, track real-time attendee arrivals, and coordinate across multiple scheduled events.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        {/* Section Header */}
        <ScrollReveal delay={100} duration={750}>
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Questions & Answers</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Frequently Asked Questions.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Quick answers about the Resvor web ecosystem and how it works for patrons, workforce, and promoters.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} delay={150 + idx * 80} duration={700}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-slate-50 border-blue-300 shadow-md"
                      : "bg-white border-slate-200/90 hover:border-slate-300 shadow-xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-base sm:text-lg text-slate-950">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${
                      isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <ScrollReveal delay={250} duration={750}>
          <div className="text-center pt-4">
            <p className="text-xs sm:text-sm text-slate-500">
              Have additional questions?{" "}
              <a
                href="mailto:support@lladner.com"
                className="font-semibold text-blue-600 hover:text-blue-700 underline inline-flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact our support team</span>
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
