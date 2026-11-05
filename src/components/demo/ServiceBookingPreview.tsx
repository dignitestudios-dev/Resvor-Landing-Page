"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DEMO_SERVICES } from "@/data/loungesData";
import { ServiceItem } from "@/types";
import { CreditCard, ShieldCheck, CheckCircle2, Clock, Users, Sparkles, Lock, ArrowRight } from "lucide-react";

export default function ServiceBookingPreview() {
  const [services] = useState<ServiceItem[]>(DEMO_SERVICES);
  const [selectedService, setSelectedService] = useState<ServiceItem>(DEMO_SERVICES[0]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedTip, setSelectedTip] = useState(20);

  const subtotal = selectedService.price;
  const tipAmount = Math.round((subtotal * selectedTip) / 100);
  const tax = Math.round(subtotal * 0.0825);
  const totalDue = subtotal + tipAmount + tax;

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 1200);
  };

  return (
    <div className="space-y-4">
      {/* Top Banner explaining Zero Card Storage */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-blue-200">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>
            <strong className="text-white">Direct Guest Payment Architecture:</strong> Guests tokenize cards directly via PCI-DSS vaults. The venue and ResVor never store raw numbers.
          </span>
        </div>
        <div className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-[11px] font-mono text-emerald-400 font-bold shrink-0">
          Zero-Card Liability
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Service Packages Cards */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">
            <span>VIP Service Listings ({services.length})</span>
            <span className="text-blue-300 font-normal">Configured by Lounge GM</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((item) => {
              const isSelected = selectedService.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedService(item);
                    setPaymentSuccess(false);
                  }}
                  className={`group relative rounded-2xl border p-3.5 transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-blue-950/50 border-blue-400 shadow-xl shadow-blue-950/60"
                      : "bg-slate-900/60 border-white/10 hover:border-white/25 hover:bg-slate-900/90"
                  }`}
                >
                  {item.popular && (
                    <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-amber-400 text-black text-[9px] font-extrabold uppercase tracking-wider shadow">
                      Most Booked
                    </div>
                  )}

                  <div className="relative h-28 rounded-xl overflow-hidden mb-3" style={{ position: "relative" }}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 text-[10px] font-semibold text-blue-200 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      {item.category}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-white mb-1 leading-snug">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-extrabold text-emerald-400 font-mono">
                        ${item.price.toLocaleString()}
                      </div>
                      <div className="text-[9px] text-slate-400">
                        ${item.depositRequired} Upfront Deposit
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Users className="w-3 h-3 text-blue-400" />
                      {item.capacity}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Interactive Direct Guest Payment Simulator */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 rounded-2xl border border-blue-500/30 p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400">
                Direct Guest Card Checkout
              </span>
              <h4 className="text-sm font-bold text-white">{selectedService.name}</h4>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-400/30 flex items-center justify-center">
              <Lock className="w-4 h-4 text-blue-400" />
            </div>
          </div>

          {!paymentSuccess ? (
            <form onSubmit={handleSimulatePayment} className="space-y-3.5 text-xs">
              {/* Timing & Capacity info */}
              <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-white/5 text-[11px]">
                <div>
                  <span className="text-slate-400 block text-[10px]">Time Slot</span>
                  <span className="text-white font-medium">{selectedService.timingSlots}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Seating Limit</span>
                  <span className="text-white font-medium">{selectedService.capacity}</span>
                </div>
              </div>

              {/* Gratuity Selector */}
              <div>
                <label className="text-slate-400 block mb-1 text-[11px]">
                  Hospitality Server Gratuity
                </label>
                <div className="grid grid-cols-4 gap-1.5 text-center font-bold">
                  {[18, 20, 22, 25].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setSelectedTip(pct)}
                      className={`py-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                        selectedTip === pct
                          ? "bg-blue-600 border-blue-400 text-white"
                          : "bg-slate-950 border-white/10 text-slate-400 hover:text-white"
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Financial Breakdown */}
              <div className="space-y-1.5 pt-1 border-t border-white/10 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Package Base Price</span>
                  <span className="font-mono text-white">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Suggested Staff Tip ({selectedTip}%)</span>
                  <span className="font-mono text-white">${tipAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Local Hospitality Tax (8.25%)</span>
                  <span className="font-mono text-white">${tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span className="text-amber-300">Lock-in Deposit Paid Now</span>
                  <span className="font-mono text-amber-300 font-bold">
                    ${selectedService.depositRequired.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-bold">
                  <span className="text-white">Estimated Full Total</span>
                  <span className="font-mono text-emerald-400 font-extrabold">
                    ${totalDue.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Simulated Card Input (PCI tokenized preview) */}
              <div className="p-3 rounded-xl bg-slate-950 border border-blue-500/20 space-y-2">
                <div className="flex justify-between items-center text-[10px] text-slate-400 uppercase">
                  <span>Secure Card Tokenization</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Encrypted
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-xs font-mono text-slate-200">•••• •••• •••• 4242</span>
                  <span className="text-[10px] font-mono text-slate-400 ml-auto">08/29</span>
                </div>
              </div>

              {/* Submit Payment Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer border border-emerald-400/30"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Tokenizing Transaction...
                  </span>
                ) : (
                  <>
                    <span>Confirm & Pay Deposit (${selectedService.depositRequired})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-[10px] text-center text-slate-400">
                Funds deposited directly into lounge merchant bank account within 24 hours.
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-base font-bold text-white">VIP Table Confirmed!</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deposit of <strong className="text-emerald-400">${selectedService.depositRequired}</strong> collected via encrypted token.
              </p>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-white/10 text-xs text-slate-300 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-400">Security Ref:</span>
                  <span className="font-mono text-blue-300">TX-RES-9801</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">VIP Host Stand:</span>
                  <span className="text-emerald-400 font-semibold">Table Reserved</span>
                </div>
              </div>
              <button
                onClick={() => setPaymentSuccess(false)}
                className="text-xs text-blue-400 hover:text-blue-300 underline cursor-pointer"
              >
                Test another service transaction
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

