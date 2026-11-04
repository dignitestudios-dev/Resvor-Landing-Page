"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. First View: Hero Section with All 3 Web Apps Links */}
        <HeroSection />

        {/* 2. Simple Section About Resvor */}
        <AboutSection />
      </main>

      {/* Global Footer in Light Mode */}
      <Footer />
    </div>
  );
}
