"use client";

import React, { useState } from "react";
import { FEATURED_LOUNGES } from "@/data/loungesData";
import { LoungeVenue } from "@/types";
import LoungeCard from "./LoungeCard";
import { Compass, Sparkles, SlidersHorizontal, MapPin, Building2 } from "lucide-react";

export default function FeaturedLounges() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [selectedCity, setSelectedCity] = useState<string>("All Cities");

  const categories = [
    "All Categories",
    "Rooftop Lounge",
    "Speakeasy",
    "VIP Club",
    "Cocktail Lounge",
  ];

  const cities = [
    "All Cities",
    "Austin, TX",
    "New York, NY",
    "Miami, FL",
    "Dallas, TX",
    "Los Angeles, CA",
    "Chicago, IL",
  ];

  const filteredLounges = FEATURED_LOUNGES.filter((venue) => {
    const matchesCity =
      selectedCity === "All Cities" || venue.city.toLowerCase().includes(selectedCity.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" || venue.category === selectedCategory;
    return matchesCity && matchesCategory;
  });

  return (
    <section id="venues" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>Curated Lounge Network</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Where Every Occasion <br />
              <span className="text-blue-400">Finds Its Lounge.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              An architectural showcase of premier venues powered by ResVor. Explore how upscale rooftop terraces, subterranean speakeasies, and high-energy VIP clubs structure their digital profiles.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 shrink-0 text-xs text-slate-300 space-y-1">
            <span className="font-bold text-white block flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-blue-400" />
              Lounge Profile Showcase
            </span>
            <span className="text-[11px] text-slate-400 block">
              Multi-Location Lounge Network Architecture
            </span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="space-y-4 mb-10">
          {/* City Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 shrink-0 mr-1 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-blue-400" /> Metro:
            </span>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCity === city
                    ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                    : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 shrink-0 mr-1 uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" /> Atmosphere:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-slate-950 font-bold shadow-md"
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lounges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredLounges.map((venue) => (
            <LoungeCard key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </section>
  );
}
