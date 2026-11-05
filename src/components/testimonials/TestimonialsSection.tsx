import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonialsData";
import { Star, Quote, Award } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-lounge-gradient relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Proven In Nightlife Operations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Trusted by Premier Venue Directors
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From underground Manhattan speakeasies to multi-level South Beach megaclubs, see how ResVor transforms venue profitability.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl bg-slate-950/70 border border-white/10 p-7 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 space-y-6"
            >
              <div className="space-y-4">
                {/* Metric pill */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <div className="text-right">
                    <span className="text-xl font-black text-emerald-400 font-mono block">
                      {t.metric}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      {t.metricLabel}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-blue-400/40 shrink-0" style={{ position: "relative" }}>
                  <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{t.author}</h4>
                  <p className="text-[11px] text-blue-300">{t.role}</p>
                  <p className="text-[10px] text-slate-400">{t.venue} · {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

