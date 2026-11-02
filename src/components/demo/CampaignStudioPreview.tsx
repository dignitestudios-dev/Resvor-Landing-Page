"use client";

import React, { useState } from "react";
import { DEMO_CAMPAIGNS } from "@/data/loungesData";
import { MarketingTemplate } from "@/types";
import { MessageSquare, Mail, Sparkles, Send, Users, CheckCircle2, Globe, TrendingUp, Monitor } from "lucide-react";

export default function CampaignStudioPreview() {
  const [campaigns] = useState<MarketingTemplate[]>(DEMO_CAMPAIGNS);
  const [selectedCampaign, setSelectedCampaign] = useState<MarketingTemplate>(DEMO_CAMPAIGNS[0]);
  const [guestName, setGuestName] = useState("Alexandra");
  const [loungeName, setLoungeName] = useState("Aura Sky Lounge");
  const [campaignSent, setCampaignSent] = useState(false);

  const renderedContent = selectedCampaign.messageContent
    .replace(/{First_Name}/g, guestName)
    .replace(/{Lounge_Name}/g, loungeName)
    .replace(/{Guest_ID}/g, "VIP99");

  const handleSendCampaign = () => {
    setCampaignSent(true);
    setTimeout(() => {
      setCampaignSent(false);
    }, 2500);
  };

  return (
    <div className="space-y-4">
      {/* Top Banner */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/60 to-purple-950/60 border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-blue-200">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
          <span>
            <strong className="text-white">Web App Campaign Studio:</strong> Web-based marketing engine that syncs directly with the Guest Book CRM to target birthdays, VIP spenders, and event RSVP lists without manual exports.
          </span>
        </div>
        <div className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-[11px] font-mono text-purple-300 font-bold shrink-0">
          Web-Based Campaign Engine
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Template Selector & Parameters */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">
            <span>Pre-Built Web App Templates</span>
            <span className="text-blue-300 font-normal">Automated Dispatcher</span>
          </div>

          <div className="space-y-2.5">
            {campaigns.map((camp) => {
              const isSelected = selectedCampaign.id === camp.id;
              return (
                <div
                  key={camp.id}
                  onClick={() => setSelectedCampaign(camp)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-blue-950/50 border-blue-400 shadow-xl shadow-blue-950/60"
                      : "bg-slate-900/60 border-white/10 hover:border-white/20 hover:bg-slate-900/90"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`p-1.5 rounded-lg text-xs font-bold ${
                          camp.type === "SMS"
                            ? "bg-blue-600/20 text-blue-300 border border-blue-400/30"
                            : "bg-purple-600/20 text-purple-300 border border-purple-400/30"
                        }`}
                      >
                        {camp.type === "SMS" ? <MessageSquare className="w-3.5 h-3.5" /> : <Mail className="w-3.5 h-3.5" />}
                      </span>
                      <h5 className="text-xs font-bold text-white">{camp.name}</h5>
                    </div>

                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {camp.conversionRate}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 mb-2">
                    <strong className="text-slate-300">Target Segment:</strong> {camp.targetSegment}
                  </p>

                  <div className="flex items-center gap-4 text-[10px] text-slate-400 pt-1 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-blue-400" />
                      Audience: {camp.audienceCount} Patrons
                    </span>
                    <span>Channel: Web Gateway Broadcast</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Token Simulator Controls */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
            <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block">
              Personalization Tokens
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Preview First Name</label>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-white/10 rounded-xl text-white"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Lounge Name</label>
                <input
                  type="text"
                  value={loungeName}
                  onChange={(e) => setLoungeName(e.target.value)}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-white/10 rounded-xl text-white"
                />
              </div>
            </div>

            <button
              onClick={handleSendCampaign}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all border border-blue-400/30"
            >
              {campaignSent ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Broadcast Dispatched via Web Gateway!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Simulate Web App Broadcast ({selectedCampaign.audienceCount} Patrons)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: Modern Web App Browser Preview Window */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="text-[10px] uppercase font-bold tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
            <Monitor className="w-3.5 h-3.5 text-blue-400" />
            <span>Web App Message Dispatch Console</span>
          </div>

          {/* Browser Window Frame */}
          <div className="w-full rounded-2xl bg-slate-950 border border-slate-700/80 shadow-2xl overflow-hidden">
            {/* Browser Window Top Bar */}
            <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/10 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-sm mx-auto px-3 py-1 rounded-lg bg-slate-950/80 border border-white/10 text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-blue-400 shrink-0" />
                <span className="text-slate-300">https://resvor.app/campaigns/dispatch</span>
              </div>
            </div>

            {/* Browser Content Viewport */}
            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>{selectedCampaign.name}</span>
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono border border-blue-400/30">
                      {selectedCampaign.type} Channel
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Sender: {loungeName} Web Portal Concierge
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase">Audience</span>
                  <span className="text-xs font-bold text-white font-mono">
                    {selectedCampaign.audienceCount} Patrons
                  </span>
                </div>
              </div>

              {/* Rendered Message Body */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-blue-500/30 space-y-3">
                {selectedCampaign.subjectLine && (
                  <div className="text-xs font-bold text-white pb-2 border-b border-white/10">
                    <span className="text-slate-400 font-normal">Subject: </span>
                    {selectedCampaign.subjectLine}
                  </div>
                )}

                <div className="text-xs text-slate-200 leading-relaxed whitespace-pre-line font-sans">
                  {renderedContent}
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Direct Web App Link Embedded
                  </span>
                  <span className="font-mono text-slate-500">HTTP/2 TLS 1.3</span>
                </div>
              </div>

              {/* Web App Delivery Metrics Panel */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900/70 border border-white/5">
                  <span className="text-[10px] text-slate-400 block uppercase">Gateway SLA</span>
                  <span className="font-bold text-blue-300 font-mono">99.98%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/70 border border-white/5">
                  <span className="text-[10px] text-slate-400 block uppercase">Avg Response</span>
                  <span className="font-bold text-emerald-400 font-mono">
                    {selectedCampaign.conversionRate.split(" ")[0]}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/70 border border-white/5">
                  <span className="text-[10px] text-slate-400 block uppercase">TCPA Status</span>
                  <span className="font-bold text-white font-mono">Opt-in OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
