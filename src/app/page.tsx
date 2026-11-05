"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import HowItWorksSection from "@/components/workflow/HowItWorksSection";
import FeatureGrid from "@/components/features/FeatureGrid";
import FaqSection from "@/components/faq/FaqSection";
import BottomCtaSection from "@/components/cta/BottomCtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030614] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Global Navigation with Frosted Glassmorphism */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section: Purpose Awareness & Value Pillars */}
        <HeroSection />

        {/* 2. Platform Purpose & Traditional vs ResVor Comparison */}
        <AboutSection />

        {/* 3. The 4-Step Operating Workflow: How It Works */}
        <HowItWorksSection />

        {/* 4. Core Architectural Modules */}
        <FeatureGrid />

        {/* 5. Architecture, Security & Operational FAQ */}
        <FaqSection />

        {/* 6. Closing Brand Callout & Inquiries */}
        <BottomCtaSection />
      </main>

      {/* Global Corporate Footer */}
      <Footer />
    </div>
  );
}
