"use client";

import React, { useState } from "react";
import { DEMO_EVENTS } from "@/data/loungesData";
import { LoungeEvent } from "@/types";
import { Calendar as CalendarIcon, List, Plus, DollarSign, CheckCircle2, Clock, Users, ShieldAlert, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";

export default function EventCalendarPreview() {
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
  const [events, setEvents] = useState<LoungeEvent[]>(DEMO_EVENTS);
  const [selectedEvent, setSelectedEvent] = useState<LoungeEvent | null>(DEMO_EVENTS[0]);
  const [showAddEventModal, setShowAddEventModal] = useState(false);

  // Toggle deposit confirmed status
  const handleToggleDeposit = (eventId: string) => {
    setEvents(
      events.map((evt) => {
        if (evt.id === eventId) {
          const nextStatus =
            evt.depositStatus === "Paid & Confirmed" ? "Pending Payment" : "Paid & Confirmed";
          const updated = { ...evt, depositStatus: nextStatus as LoungeEvent["depositStatus"] };
          if (selectedEvent?.id === eventId) setSelectedEvent(updated);
          return updated;
        }
        return evt;
      })
    );
  };

  return (
    <div className="space-y-4">
      {/* View Switcher & Action Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 bg-slate-900/80 rounded-2xl border border-white/10">
        <div className="flex items-center gap-2">
          <div className="bg-slate-950 p-1 rounded-xl border border-white/10 flex items-center">
            <button
              onClick={() => setViewMode("calendar")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === "calendar"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Calendar Grid View</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === "list"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>Rapid List View</span>
            </button>
          </div>

          <span className="text-[11px] text-blue-300 hidden md:inline">
            Resvor Dual-Interface Scheduling Engine
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAddEventModal(true)}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/30 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Event / Hold Date</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Calendar View */}
      {viewMode === "calendar" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Calendar Grid Representation */}
          <div className="lg:col-span-8 bg-slate-900/60 rounded-2xl border border-white/10 p-4">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white">November 2026 - Main Lounge & Terrace</h4>
                <span className="text-[10px] text-slate-400 font-mono">4 Booked Headliners</span>
              </div>
              <div className="flex items-center gap-1">
                <button aria-label="Previous month" className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-white/5">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button aria-label="Next month" className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-white/5">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Weekdays row */}
            <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] uppercase font-bold text-slate-400 mb-2">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>

            {/* Days grid mock */}
            <div className="grid grid-cols-7 gap-1.5">
              {[
                { day: "1", empty: false },
                { day: "2", empty: false },
                { day: "3", empty: false },
                { day: "4", empty: false },
                { day: "5", empty: false },
                { day: "6", empty: false },
                {
                  day: "7",
                  events: [events[0]],
                  highlight: true,
                },
                { day: "8", empty: false },
                { day: "9", empty: false },
                { day: "10", empty: false },
                { day: "11", empty: false },
                {
                  day: "12",
                  events: [events[1]],
                  highlight: true,
                },
                {
                  day: "13",
                  events: [events[2]],
                  highlight: true,
                },
                { day: "14", empty: false },
                { day: "15", empty: false },
                { day: "16", empty: false },
                {
                  day: "17",
                  events: [events[3]],
                  highlight: true,
                },
                { day: "18", empty: false },
                { day: "19", empty: false },
                { day: "20", empty: false },
                { day: "21", empty: false },
              ].map((cell, idx) => (
                <div
                  key={idx}
                  className={`min-h-[64px] p-1.5 rounded-xl border text-left transition-all ${
                    cell.highlight
                      ? "bg-blue-950/40 border-blue-500/40 hover:border-blue-400"
                      : "bg-slate-950/40 border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="text-[10px] font-bold text-slate-400 mb-1">{cell.day}</div>
                  {cell.events &&
                    cell.events.map((evt) => (
                      <div
                        key={evt.id}
                        onClick={() => setSelectedEvent(evt)}
                        className="p-1 rounded bg-blue-600/30 border border-blue-400/40 text-[9px] font-medium text-blue-200 truncate cursor-pointer hover:bg-blue-600/50"
                      >
                        <div className="font-bold text-white truncate">{evt.title.split(" ")[0]}</div>
                        <div className="text-blue-300 text-[8px]">{evt.time.split("-")[0]}</div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Event Quick Inspector Panel */}
          <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-blue-500/30 p-5 space-y-4">
            {selectedEvent ? (
              <>
                <div className="space-y-1 border-b border-white/10 pb-3">
                  <div className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    {selectedEvent.eventType}
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {selectedEvent.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      {selectedEvent.date}
                    </span>
                  </div>
                </div>

                {/* Capacity & RSVP Meter */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Headcount Capacity</span>
                    <span className="text-white font-bold">
                      {selectedEvent.currentRsvp} / {selectedEvent.attendeeLimit} Guests
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      style={{
                        width: `${(selectedEvent.currentRsvp / selectedEvent.attendeeLimit) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="text-[10px] text-right text-slate-400">
                    {selectedEvent.attendeeLimit - selectedEvent.currentRsvp} Spots Remaining
                  </div>
                </div>

                {/* Deposit & Financial Info */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Security Deposit</span>
                    <span className="text-white font-bold font-mono">
                      ${selectedEvent.securityDeposit.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5 items-center">
                    <span className="text-slate-400">Deposit Status</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                        selectedEvent.depositStatus === "Paid & Confirmed"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                      }`}
                    >
                      {selectedEvent.depositStatus}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Payment Channel</span>
                    <span className="text-slate-200 flex items-center gap-1 font-medium">
                      <CreditCard className="w-3 h-3 text-blue-400" />
                      {selectedEvent.paymentMethod}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Assigned Venue Section</span>
                    <span className="text-slate-200 font-medium">{selectedEvent.tableArea}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Minimum Spend Budget</span>
                    <span className="text-emerald-400 font-bold font-mono">
                      ${selectedEvent.budget.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Quick Toggle Deposit Button */}
                <button
                  onClick={() => handleToggleDeposit(selectedEvent.id)}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    selectedEvent.depositStatus === "Paid & Confirmed"
                      ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                      : "bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400/40 shadow-lg shadow-emerald-600/30"
                  }`}
                >
                  {selectedEvent.depositStatus === "Paid & Confirmed"
                    ? "Revert Deposit to Pending"
                    : "Mark Security Deposit as Paid & Confirmed"}
                </button>
              </>
            ) : (
              <div className="text-center py-10 text-slate-400 text-xs">
                Select an event from the calendar.
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Mode 2: Rapid List View */
        <div className="bg-slate-900/60 rounded-2xl border border-white/10 overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider">
            <span>Fast-Action Operational Event Roster</span>
            <span className="text-[11px] text-blue-300 font-normal">Directly update deposits & RSVPs</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950/70 text-slate-400 text-[11px] uppercase tracking-wider border-b border-white/5">
                <tr>
                  <th className="p-3.5">Event Title & Host</th>
                  <th className="p-3.5">Date & Time</th>
                  <th className="p-3.5">Type & Section</th>
                  <th className="p-3.5">RSVP / Cap</th>
                  <th className="p-3.5">Deposit Amount</th>
                  <th className="p-3.5">Status Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {events.map((evt) => (
                  <tr key={evt.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-3.5">
                      <div className="font-bold text-white">{evt.title}</div>
                      <div className="text-[11px] text-slate-400">Host: {evt.hostName}</div>
                    </td>
                    <td className="p-3.5">
                      <div className="font-medium text-slate-200">{evt.date}</div>
                      <div className="text-[10px] text-slate-400">{evt.time}</div>
                    </td>
                    <td className="p-3.5">
                      <div className="font-medium text-blue-300">{evt.eventType}</div>
                      <div className="text-[10px] text-slate-400">{evt.tableArea}</div>
                    </td>
                    <td className="p-3.5">
                      <div className="font-mono font-bold text-white">
                        {evt.currentRsvp} / {evt.attendeeLimit}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {Math.round((evt.currentRsvp / evt.attendeeLimit) * 100)}% Booked
                      </div>
                    </td>
                    <td className="p-3.5 font-mono font-bold text-emerald-400">
                      ${evt.securityDeposit.toLocaleString()}
                    </td>
                    <td className="p-3.5">
                      <button
                        onClick={() => handleToggleDeposit(evt.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                          evt.depositStatus === "Paid & Confirmed"
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30"
                            : "bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30"
                        }`}
                      >
                        {evt.depositStatus}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* New Event Modal */}
      {showAddEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-slate-900 border border-blue-500/30 rounded-2xl p-6 max-w-md w-full space-y-4">
            <h4 className="text-base font-bold text-white">Hold Event Date & Set Deposit</h4>
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 block mb-1">Event Title</label>
                <input
                  type="text"
                  placeholder="e.g. Sterling Capital VIP Dinner"
                  className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-300 block mb-1">Date</label>
                  <input
                    type="date"
                    defaultValue="2026-11-20"
                    className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">Security Deposit ($)</label>
                  <input
                    type="number"
                    defaultValue={1500}
                    className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-white"
                  />
                </div>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddEventModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddEventModal(false)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                >
                  Confirm & Lock Date
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

