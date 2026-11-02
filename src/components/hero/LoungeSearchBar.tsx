"use client";

import React, { useState } from "react";
import { Search, MapPin, Calendar, Users, Sparkles, Filter, ChevronDown } from "lucide-react";

interface LoungeSearchBarProps {
  onSearchChange: (filters: {
    query: string;
    city: string;
    occasion: string;
    guests: string;
  }) => void;
}

export default function LoungeSearchBar({ onSearchChange }: LoungeSearchBarProps) {
  const [city, setCity] = useState("All Cities");
  const [occasion, setOccasion] = useState("All Occasions");
  const [guests, setGuests] = useState("Any Party Size");
  const [query, setQuery] = useState("");

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange({ query, city, occasion, guests });
    // Smooth scroll down to lounges
    const target = document.getElementById("featured-lounges");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form
        onSubmit={handleApply}
        className="bg-slate-900/90 backdrop-blur-xl border border-white/15 p-2 sm:p-3 rounded-2xl sm:rounded-3xl shadow-2xl shadow-blue-950/50 flex flex-col md:flex-row items-center gap-2"
      >
        {/* Location Dropdown */}
        <div className="flex-1 w-full flex items-center gap-3 px-4 py-2.5 rounded-xl sm:rounded-2xl bg-slate-800/60 border border-white/5 hover:border-blue-400/30 transition-colors">
          <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
          <div className="flex-1 text-left">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
              City / Location
            </span>
            <select
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                onSearchChange({ query, city: e.target.value, occasion, guests });
              }}
              className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
            >
              <option value="All Cities" className="bg-slate-900 text-white">All Metros (Austin, NYC, Miami...)</option>
              <option value="Austin, TX" className="bg-slate-900 text-white">Austin, TX (Downtown)</option>
              <option value="New York, NY" className="bg-slate-900 text-white">New York, NY (Meatpacking)</option>
              <option value="Miami, FL" className="bg-slate-900 text-white">Miami, FL (South Beach)</option>
              <option value="Dallas, TX" className="bg-slate-900 text-white">Dallas, TX (Uptown)</option>
              <option value="Los Angeles, CA" className="bg-slate-900 text-white">Los Angeles, CA (WeHo)</option>
              <option value="Chicago, IL" className="bg-slate-900 text-white">Chicago, IL (Fulton Market)</option>
            </select>
          </div>
        </div>

        {/* Occasion Dropdown */}
        <div className="flex-1 w-full flex items-center gap-3 px-4 py-2.5 rounded-xl sm:rounded-2xl bg-slate-800/60 border border-white/5 hover:border-blue-400/30 transition-colors">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <div className="flex-1 text-left">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
              Occasion
            </span>
            <select
              value={occasion}
              onChange={(e) => {
                setOccasion(e.target.value);
                onSearchChange({ query, city, occasion: e.target.value, guests });
              }}
              className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
            >
              <option value="All Occasions" className="bg-slate-900 text-white">Every Occasion</option>
              <option value="Birthday" className="bg-slate-900 text-white">Birthday VIP Takeover</option>
              <option value="Bottle Service" className="bg-slate-900 text-white">Prestige Bottle Service</option>
              <option value="Corporate" className="bg-slate-900 text-white">Corporate Mixer & Soirée</option>
              <option value="Rooftop" className="bg-slate-900 text-white">Rooftop Skyline Drinks</option>
              <option value="Speakeasy" className="bg-slate-900 text-white">Intimate Speakeasy Table</option>
            </select>
          </div>
        </div>

        {/* Guest Size Dropdown */}
        <div className="w-full md:w-44 flex items-center gap-3 px-4 py-2.5 rounded-xl sm:rounded-2xl bg-slate-800/60 border border-white/5 hover:border-blue-400/30 transition-colors">
          <Users className="w-4 h-4 text-blue-400 shrink-0" />
          <div className="flex-1 text-left">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
              Party Size
            </span>
            <select
              value={guests}
              onChange={(e) => {
                setGuests(e.target.value);
                onSearchChange({ query, city, occasion, guests: e.target.value });
              }}
              className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
            >
              <option value="Any Party Size" className="bg-slate-900 text-white">Any Size</option>
              <option value="2-4" className="bg-slate-900 text-white">2 - 4 Guests</option>
              <option value="5-8" className="bg-slate-900 text-white">5 - 8 VIP Booth</option>
              <option value="9-15" className="bg-slate-900 text-white">9 - 15 Section</option>
              <option value="15+" className="bg-slate-900 text-white">15+ Full Buyout</option>
            </select>
          </div>
        </div>

        {/* Submit Search Button */}
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/40 flex items-center justify-center gap-2 transition-all cursor-pointer border border-blue-400/40 shrink-0"
        >
          <Search className="w-4 h-4" />
          <span>Find Lounges</span>
        </button>
      </form>
    </div>
  );
}

