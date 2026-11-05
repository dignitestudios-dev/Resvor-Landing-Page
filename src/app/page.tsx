"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/hero/HeroSection";
import HowItWorksSection from "@/components/workflow/HowItWorksSection";
import AboutSection from "@/components/about/AboutSection";
import FeatureHighlights from "@/components/features/FeatureHighlights";
import FaqSection from "@/components/faq/FaqSection";
import BottomCtaSection from "@/components/cta/BottomCtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. First View: Hero Section with All 3 Web Apps Links */}
        <HeroSection />

        {/* 2. Unified 3-Step Flow: How the Ecosystem Connects */}
        <HowItWorksSection />

        {/* 3. About Section: Built for Premier Nightlife & Lounges */}
        <AboutSection />

        {/* 4. Core Feature Highlights: Bento Cards */}
        <FeatureHighlights />

        {/* 5. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 6. Closing Call to Action Banner */}
        <BottomCtaSection />
      </main>

      {/* Global Dark Footer */}
      <Footer />
    </div>
  );
}
