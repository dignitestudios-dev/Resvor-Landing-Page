"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LoungeVenue } from "@/types";
import { Star, MapPin, Sparkles, Clock, Music, CheckCircle2, ChevronRight, X, Info, Flame, Wine, ShieldCheck } from "lucide-react";

interface LoungeCardProps {
  venue: LoungeVenue;
}

export default function LoungeCard({ venue }: LoungeCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Lounge Venue Showcase Card */}
      <div className="group rounded-3xl bg-slate-900/80 border border-white/10 hover:border-blue-500/40 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-950/40 flex flex-col justify-between">
        {/* Image Gallery Header */}
        <div className="relative h-60 sm:h-64 overflow-hidden" style={{ position: "relative" }}>
          <Image
            src={venue.heroImage}
            alt={venue.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/10 shadow flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {venue.category}
            </span>

            <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-[11px] font-bold shadow flex items-center gap-1.5 border border-blue-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
              ResVor Verified
            </span>
          </div>

          {/* Bottom Overlay on Image */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-1.5 bg-black/70 px-2.5 py-1 rounded-xl backdrop-blur-md">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold">{venue.rating}</span>
              <span className="text-slate-400 text-[10px]">({venue.reviewCount} patron reviews)</span>
            </div>

            <div className="font-mono font-bold text-blue-300 bg-black/70 px-2.5 py-1 rounded-xl backdrop-blur-md">
              {venue.priceTier}
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
              {venue.name}
            </h3>

            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{venue.neighborhood}, {venue.city}</span>
            </div>

            <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
              {venue.tagline}
            </p>
          </div>

          {/* Vibe Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {venue.vibeTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-medium text-blue-200 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Special & Hours Footer */}
          <div className="pt-3 border-t border-white/10 space-y-2.5">
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <Clock className="w-3 h-3 text-slate-500 shrink-0" />
              <span>{venue.operatingHours}</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-amber-300/90 bg-amber-400/5 px-2.5 py-1.5 rounded-lg border border-amber-400/20">
              <Wine className="w-3 h-3 shrink-0 text-amber-400" />
              <span className="truncate">{venue.featuredSpecial}</span>
            </div>
          </div>

          {/* Action CTA: Informative Profile Modal */}
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-xs border border-white/10 hover:border-blue-400/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-blue-400" />
            <span>Inspect Venue Profile & Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Informative Lounge Profile Inspection Drawer / Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-blue-500/30 p-6 sm:p-7 shadow-2xl text-slate-100 overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                  ResVor Venue Showcase Profile
                </div>
                <h3 className="text-2xl font-bold text-white">{venue.name}</h3>
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {venue.address}
                </p>
              </div>

              {/* Photo Banner */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10" style={{ position: "relative" }}>
                <Image src={venue.heroImage} alt={venue.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs text-white font-medium flex items-center gap-2">
                  <Music className="w-4 h-4 text-blue-400" />
                  <span>Curated Soundscape: {venue.musicGenres.join(" • ")}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {venue.tagline} Powered by ResVor’s direct guest profiling and table management web application.
              </p>

              {/* Operational Specifications */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-white/5 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">
                    Operating Schedule
                  </span>
                  <span className="text-white font-semibold">{venue.operatingHours}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-white/5 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">
                    Pricing Category
                  </span>
                  <span className="text-emerald-400 font-bold font-mono">
                    {venue.priceTier} · Premier Nightlife
                  </span>
                </div>
              </div>

              {/* Signature Experience */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 space-y-1">
                <div className="font-bold text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured Lounge Experience
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {venue.featuredSpecial}
                </p>
              </div>

              {/* Vibe Tags */}
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                  Venue Amenities & Characteristics
                </span>
                <div className="flex flex-wrap gap-2">
                  {venue.vibeTags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-blue-200 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
                >
                  Close Profile Overview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
