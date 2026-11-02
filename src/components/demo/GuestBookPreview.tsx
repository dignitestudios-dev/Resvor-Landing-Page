"use client";

import React, { useState } from "react";
import { DEMO_GUESTS } from "@/data/loungesData";
import { GuestProfile } from "@/types";
import { Search, Download, Plus, Filter, Cake, Phone, Mail, Award, CheckCircle2, ChevronRight, X, Sparkles } from "lucide-react";

export default function GuestBookPreview() {
  const [guests, setGuests] = useState<GuestProfile[]>(DEMO_GUESTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedGuest, setSelectedGuest] = useState<GuestProfile | null>(DEMO_GUESTS[0]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newGuest, setNewGuest] = useState({
    name: "",
    email: "",
    phone: "",
    birthMonthDay: "Nov 25",
    category: "VIP Patron" as GuestProfile["category"],
    notes: "",
  });

  const categories = ["All", "VIP Patron", "Birthday", "Corporate", "Regular", "Influencer"];

  const filteredGuests = guests.filter((g) => {
    const matchesSearch =
      g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.phone.includes(searchTerm) ||
      g.birthMonthDay.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || g.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Real CSV download functionality
  const handleExportCSV = () => {
    const headers = "Name,Email,Phone,Birth Date,Category,Total Visits,Lifetime Spend,Deposit Confirmed\n";
    const rows = filteredGuests
      .map(
        (g) =>
          `"${g.name}","${g.email}","${g.phone}","${g.birthMonthDay}","${g.category}",${g.totalVisits},${g.lifetimeSpend},${g.depositConfirmed}`
      )
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `resvor_guest_book_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGuest.name) return;
    const added: GuestProfile = {
      id: `gst-${Date.now()}`,
      name: newGuest.name,
      email: newGuest.email || "guest@vip.com",
      phone: newGuest.phone || "+1 (555) 000-0000",
      birthMonthDay: newGuest.birthMonthDay,
      category: newGuest.category,
      totalVisits: 1,
      lifetimeSpend: 850,
      lastVisit: "Tonight",
      notes: newGuest.notes || "New guest added via floor host.",
      preferredDrinks: ["Champagne", "Signature Cocktail"],
      depositConfirmed: true,
    };
    setGuests([added, ...guests]);
    setSelectedGuest(added);
    setShowAddModal(false);
    setNewGuest({
      name: "",
      email: "",
      phone: "",
      birthMonthDay: "Nov 25",
      category: "VIP Patron",
      notes: "",
    });
  };

  return (
    <div className="space-y-4">
      {/* Top Controls: Search, Category Filters, Actions */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-4 bg-slate-900/80 rounded-2xl border border-white/10">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-blue-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, phone, birthday (e.g. Nov 14)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-white/10 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                  : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Export and Add Guest Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCSV}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Download CSV database export"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Export CSV</span>
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/30 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Guest</span>
          </button>
        </div>
      </div>

      {/* Main Guest Book Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Guest Roster Table */}
        <div className="lg:col-span-8 bg-slate-900/60 rounded-2xl border border-white/10 overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider">
            <span>Guest Profile Ledger ({filteredGuests.length})</span>
            <span className="text-[11px] text-blue-300 font-normal">Click any row to view complete dossier</span>
          </div>

          <div className="divide-y divide-white/5 max-h-[380px] overflow-y-auto">
            {filteredGuests.map((guest) => {
              const isSelected = selectedGuest?.id === guest.id;
              return (
                <div
                  key={guest.id}
                  onClick={() => setSelectedGuest(guest)}
                  className={`p-3.5 flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-blue-600/20 border-l-4 border-blue-500"
                      : "hover:bg-slate-800/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center font-bold text-white text-xs border border-blue-400/30">
                      {guest.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{guest.name}</span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                            guest.category === "VIP Patron"
                              ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
                              : guest.category === "Birthday"
                              ? "bg-purple-500/10 text-purple-300 border-purple-500/30"
                              : guest.category === "Corporate"
                              ? "bg-blue-500/10 text-blue-300 border-blue-500/30"
                              : "bg-slate-800 text-slate-300 border-white/10"
                          }`}
                        >
                          {guest.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-0.5">
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3 text-slate-500" />
                          {guest.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Cake className="w-3 h-3 text-pink-400" />
                          {guest.birthMonthDay}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-right">
                    <div>
                      <div className="text-xs font-bold text-emerald-400">
                        ${guest.lifetimeSpend.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-slate-400">{guest.totalVisits} Hosted Visits</div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-blue-400 translate-x-1" : "text-slate-600"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Guest Detailed Dossier Panel */}
        <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 rounded-2xl border border-blue-500/30 p-5 space-y-4">
          {selectedGuest ? (
            <>
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-lg shadow-blue-600/30 border border-blue-400/40">
                    {selectedGuest.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {selectedGuest.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    </h4>
                    <span className="text-[11px] text-blue-300 font-medium">
                      {selectedGuest.category} Account
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                    Security Deposit
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Active On File
                  </span>
                </div>
              </div>

              {/* Core Attributes */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Direct Contact</span>
                  <span className="text-white font-mono text-[11px]">{selectedGuest.phone}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Email Address</span>
                  <span className="text-white text-[11px]">{selectedGuest.email}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Birth Month & Day</span>
                  <span className="text-pink-300 font-semibold flex items-center gap-1">
                    <Cake className="w-3.5 h-3.5" />
                    {selectedGuest.birthMonthDay}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Lifetime Spend</span>
                  <span className="text-emerald-400 font-bold">${selectedGuest.lifetimeSpend.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Last Hosted Visit</span>
                  <span className="text-slate-300">{selectedGuest.lastVisit}</span>
                </div>
              </div>

              {/* Preferred Spirits & Setup */}
              <div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                  Preferred Spirits & Table Setup
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedGuest.preferredDrinks.map((drink, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded bg-slate-800 border border-white/10 text-[11px] text-blue-200"
                    >
                      {drink}
                    </span>
                  ))}
                </div>
              </div>

              {/* Staff Concierge Notes */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Host Stand Notes
                </span>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  &ldquo;{selectedGuest.notes}&rdquo;
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-slate-400 text-xs">
              Select a guest to inspect dossier.
            </div>
          )}
        </div>
      </div>

      {/* Add Guest Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-slate-900 border border-blue-500/30 rounded-2xl p-6 max-w-md w-full space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-base font-bold text-white">Add Guest to Master Roster</h4>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddGuest} className="space-y-3">
              <div>
                <label className="text-xs text-slate-300 block mb-1">Guest Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Julian Sterling"
                  value={newGuest.name}
                  onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">Phone Number</label>
                  <input
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    value={newGuest.phone}
                    onChange={(e) => setNewGuest({ ...newGuest, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">Birth Month & Day</label>
                  <input
                    type="text"
                    placeholder="Nov 25"
                    value={newGuest.birthMonthDay}
                    onChange={(e) => setNewGuest({ ...newGuest, birthMonthDay: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">VIP Category</label>
                <select
                  value={newGuest.category}
                  onChange={(e) =>
                    setNewGuest({
                      ...newGuest,
                      category: e.target.value as GuestProfile["category"],
                    })
                  }
                  className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none"
                >
                  <option value="VIP Patron">VIP Patron</option>
                  <option value="Birthday">Birthday Milestone</option>
                  <option value="Corporate">Corporate Booker</option>
                  <option value="Regular">Regular Patron</option>
                  <option value="Influencer">Influencer / Creator</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">Host Stand Notes</label>
                <textarea
                  rows={2}
                  placeholder="Seating preference, favorite bottle, party style..."
                  value={newGuest.notes}
                  onChange={(e) => setNewGuest({ ...newGuest, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                >
                  Save Guest Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

