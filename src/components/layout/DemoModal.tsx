"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Building2, User, Mail, Phone, CheckCircle2, Sparkles } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "Alex Vance",
    email: "alex.vance@venuegroup.com",
    phone: "+1 (877) 211-9270",
    venueName: "The Skyline & Velvet Lounge",
    venueType: "Rooftop & Speakeasy",
    tableCount: "15 - 30 VIP Tables",
    preferredDate: "2026-11-06",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#0B1542] via-[#070E2F] to-[#030617] border border-blue-500/30 p-8 shadow-2xl text-slate-100 overflow-hidden">
        {/* Decorative Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6 space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-semibold border border-blue-400/30 uppercase tracking-wider">
                <Sparkles className="w-3 h-3" /> VIP Consultation
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Schedule a 1-on-1 Platform Tour
              </h3>
              <p className="text-xs text-blue-200/80">
                See how Resvor simplifies guest CRM, eliminates table no-shows, and automates birthday marketing for your lounge.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Your Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-blue-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-900/90 border border-white/15 focus:border-blue-400 rounded-xl text-xs text-white focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Work Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-blue-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-900/90 border border-white/15 focus:border-blue-400 rounded-xl text-xs text-white focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Lounge / Venue Name</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-blue-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.venueName}
                      onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-900/90 border border-white/15 focus:border-blue-400 rounded-xl text-xs text-white focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Venue Type</label>
                  <select
                    value={formData.venueType}
                    onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-white/15 focus:border-blue-400 rounded-xl text-xs text-white focus:outline-none"
                  >
                    <option>Rooftop Lounge</option>
                    <option>Speakeasy & Cocktail Den</option>
                    <option>Nightclub & VIP Lounge</option>
                    <option>Multi-Venue Hospitality Group</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Table Capacity</label>
                  <select
                    value={formData.tableCount}
                    onChange={(e) => setFormData({ ...formData, tableCount: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-white/15 focus:border-blue-400 rounded-xl text-xs text-white focus:outline-none"
                  >
                    <option>Under 10 VIP Tables</option>
                    <option>10 - 25 VIP Tables</option>
                    <option>25 - 50 VIP Tables</option>
                    <option>50+ Tables (Multi-floor)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-blue-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-white/15 focus:border-blue-400 rounded-xl text-xs text-white focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all border border-blue-400/30"
                >
                  <Clock className="w-4 h-4 text-blue-200" />
                  <span>Confirm Walkthrough Session</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-slate-400 pt-1">
                Zero commitment. We will configure a live sandbox pre-loaded with your venue’s floor plan.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Walkthrough Scheduled!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. A calendar invitation and temporary sandbox credentials for <span className="text-white font-semibold">{formData.venueName}</span> have been sent to <span className="text-blue-300">{formData.email}</span>.
            </p>
            <div className="p-3 bg-slate-900/60 rounded-xl border border-white/10 text-xs text-slate-300 max-w-xs mx-auto">
              Hospitality Cloud Architecture: <span className="text-amber-400 font-mono">PCI-DSS Tokenized</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

