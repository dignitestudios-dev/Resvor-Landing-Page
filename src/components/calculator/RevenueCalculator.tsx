"use client";

import React, { useState } from "react";
import { Calculator, DollarSign, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface RevenueCalculatorProps {
  onOpenDemo: () => void;
}

export default function RevenueCalculator({ onOpenDemo }: RevenueCalculatorProps) {
  const [tables, setTables] = useState<number>(12);
  const [avgSpend, setAvgSpend] = useState<number>(1200);
  const [nightsPerWeek, setNightsPerWeek] = useState<number>(4);

  // Financial modeling formulas
  const weeklyTurns = tables * nightsPerWeek;
  const monthlyTurns = weeklyTurns * 4.33;
  const baselineMonthlyGross = monthlyTurns * avgSpend;

  // Resvor deposit locking eliminates ~15% table no-show losses
  const noShowRecovered = baselineMonthlyGross * 0.15;

  // Automated Birthday & occasion retargeting drives ~12% additional high-margin table bookings
  const retargetingLift = baselineMonthlyGross * 0.12;

  // Total monthly revenue lift
  const totalMonthlyLift = Math.round(noShowRecovered + retargetingLift);
  const annualLift = Math.round(totalMonthlyLift * 12);
  const premierCost = 319 * 12; // Premier plan annual
  const roiMultiplier = Math.round(annualLift / premierCost);

  return (
    <section id="roi-calculator" className="py-20 bg-[#030718] border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Venue ROI Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Calculate Your Venue’s Projected Revenue Lift
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Adjust your venue’s table capacity and average check size to see the quantifiable financial impact of automated deposit collection and birthday retargeting.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-950/80 border border-blue-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Input Sliders */}
            <div className="lg:col-span-6 space-y-6">
              {/* Slider 1: Tables */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-slate-200">
                    VIP Tables & Cabanas Capacity
                  </label>
                  <span className="font-mono text-base font-bold text-blue-400">
                    {tables} Tables
                  </span>
                </div>
                <input
                  type="range"
                  min={4}
                  max={35}
                  value={tables}
                  onChange={(e) => setTables(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>4 Boutique Booths</span>
                  <span>35 Multi-Tier Sections</span>
                </div>
              </div>

              {/* Slider 2: Average Table Spend */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-slate-200">
                    Average Minimum Spend per VIP Table
                  </label>
                  <span className="font-mono text-base font-bold text-emerald-400">
                    ${avgSpend.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={400}
                  max={3500}
                  step={50}
                  value={avgSpend}
                  onChange={(e) => setAvgSpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>$400 Craft Cocktails</span>
                  <span>$3,500 Prestige Magnums</span>
                </div>
              </div>

              {/* Slider 3: Nights per week */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-slate-200">
                    Operating Event Nights per Week
                  </label>
                  <span className="font-mono text-base font-bold text-indigo-400">
                    {nightsPerWeek} Nights / Week
                  </span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={7}
                  value={nightsPerWeek}
                  onChange={(e) => setNightsPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>2 Weekend Nights</span>
                  <span>7 Full Week Program</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-blue-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Based on empirical venue retention metrics across 240+ premier nightlife rooms.
                </span>
              </div>
            </div>

            {/* Right: Projected Lift Card */}
            <div className="lg:col-span-6 bg-gradient-to-b from-slate-900 to-[#0b1338] rounded-2xl border border-blue-400/40 p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-blue-300 block mb-1">
                  Projected Net Monthly Revenue Lift
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight flex items-center gap-2">
                  <span className="text-emerald-400">+${totalMonthlyLift.toLocaleString()}</span>
                  <span className="text-xs text-slate-400 font-sans font-normal">/ month</span>
                </div>
                <div className="text-xs text-emerald-300 font-semibold mt-1">
                  +${annualLift.toLocaleString()} Estimated Additional Annual Gross
                </div>
              </div>

              {/* Lift Breakdown */}
              <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Deposit Locking (No-Show Prevention)</span>
                  <span className="font-mono font-bold text-white">
                    +${Math.round(noShowRecovered).toLocaleString()} /mo
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Automated Birthday Retargeting</span>
                  <span className="font-mono font-bold text-white">
                    +${Math.round(retargetingLift).toLocaleString()} /mo
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <span className="text-slate-300">Software Investment ROI</span>
                  <span className="font-mono font-extrabold text-amber-400 text-sm">
                    {roiMultiplier}x Annual Return
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-xl shadow-blue-600/40 flex items-center justify-center gap-2 transition-all cursor-pointer border border-blue-400/30"
              >
                <span>Schedule Deployment Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

