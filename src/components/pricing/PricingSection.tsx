"use client";

import React, { useState } from "react";
import { PRICING_PLANS } from "@/data/pricingData";
import { Check, Sparkles, Building2, ShieldCheck, ArrowRight, Star, Mail } from "lucide-react";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Tiered Subscription Management</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Flexible Subscription Packaging
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Resvor offers scalable subscription tiers tailored to the operational needs of different lounge sizes and hospitality groups.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <span
              className={`text-xs font-semibold transition-colors ${
                billingCycle === "monthly" ? "text-white" : "text-slate-400"
              }`}
            >
              Monthly Billing
            </span>

            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="w-14 h-8 bg-slate-800 rounded-full p-1 transition-colors relative border border-white/10 cursor-pointer"
              aria-label="Toggle billing frequency"
            >
              <div
                className={`w-6 h-6 rounded-full bg-blue-500 transition-transform ${
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>

            <span
              className={`text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                billingCycle === "annual" ? "text-white" : "text-slate-400"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                  plan.popular
                    ? "bg-gradient-to-b from-[#091544] via-[#060E33] to-[#030718] border-2 border-blue-400 shadow-2xl shadow-blue-950/80 scale-100 lg:-translate-y-2"
                    : "bg-slate-900/60 border border-white/10 hover:border-white/25 hover:bg-slate-900/90"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1 border border-blue-300/40">
                    <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                    <span>Premier Club Tier</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed min-h-[36px]">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="py-2 border-y border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                        ${price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ month</span>
                    </div>
                    <div className="text-[11px] text-blue-300 mt-1">
                      {billingCycle === "annual" ? `Billed annually ($${price * 12}/year)` : "Billed monthly"}
                    </div>
                  </div>

                  {/* Limits summary */}
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 space-y-1 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Venues Allowed:</span>
                      <span className="text-white font-bold">{plan.limits.venues}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Guest CRM Records:</span>
                      <span className="text-white font-bold">{plan.limits.guestProfiles}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Staff Access Seats:</span>
                      <span className="text-white font-bold">{plan.limits.staffSeats}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block">
                      Architectural Capabilities
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="#contact"
                    className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-600/40 border border-blue-400/40"
                        : "bg-slate-800 hover:bg-slate-700 text-white border border-white/10"
                    }`}
                  >
                    <span>Inquire About {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Zero Commission Guarantee Note */}
        <div className="mt-14 max-w-2xl mx-auto text-center p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-xs text-slate-300 flex items-center justify-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>
            <strong className="text-white">The Resvor Direct Advantage:</strong> 0% per-booking commission cut. All guest spending and table deposits go directly to your merchant account.
          </span>
        </div>
      </div>
    </section>
  );
}
