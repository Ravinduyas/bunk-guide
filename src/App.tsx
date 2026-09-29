/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureBanner } from './components/FeatureBanner';
import { BenefitsSection } from './components/BenefitsSection';
import { StepsSection } from './components/StepsSection';
import { HouseTypesSection } from './components/HouseTypesSection';
import { ContentTabsSection } from './components/ContentTabsSection';
import { RoiCalculator } from './components/RoiCalculator';
import { AdminPreviewSection } from './components/AdminPreviewSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { LiveGuideModal } from './components/LiveGuideModal';
import { StartFreeModal } from './components/StartFreeModal';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [demoTab, setDemoTab] = useState<string>('today');
  const [demoHostelName, setDemoHostelName] = useState<string>('Papaya Hostel');

  const handleOpenDemo = (tab: string = 'today', name?: string) => {
    setDemoTab(tab);
    if (name) {
      setDemoHostelName(name);
    }
    setIsDemoOpen(true);
  };

  const handleOpenStart = () => {
    setIsStartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141414] font-sans flex flex-col selection:bg-[#FF5533]/25 selection:text-[#141414]">
      {/* Top Navigation */}
      <Navbar
        onOpenDemo={() => handleOpenDemo('today')}
        onOpenStart={handleOpenStart}
      />

      {/* Main Page Flow for Helio */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenDemo={() => handleOpenDemo('today')}
          onOpenStart={handleOpenStart}
        />

        {/* 2. Dark Value Proposition Banner with 3D Mockup & Jumping Backpacker */}
        <FeatureBanner onOpenDemo={() => handleOpenDemo('today')} />

        {/* 3. More happy guests, less work */}
        <BenefitsSection />

        {/* 4. Live in ten minutes (3 Steps) */}
        <StepsSection onOpenStart={handleOpenStart} />

        {/* 5. One guide for every kind of house (Surf, Dive, Yoga, City) */}
        <HouseTypesSection
          onOpenDemoWithTheme={(themeName) => handleOpenDemo('today', themeName)}
        />

        {/* 6. What goes in (4 Phone Screens: Today, Stay, Service, Explore) */}
        <ContentTabsSection
          onOpenDemoTab={(tab) => handleOpenDemo(tab)}
        />

        {/* 7. What your house gets back (Interactive ROI Calculator) */}
        <RoiCalculator />

        {/* 8. Change it from your phone (Admin Portal & Phone Sync) */}
        <AdminPreviewSection />

        {/* 9. Pricing */}
        <PricingSection onOpenStart={handleOpenStart} />

        {/* 10. Questions (FAQ Accordion with Trio Photo) */}
        <FaqSection />

        {/* 11. Put your house on Helio CTA Banner */}
        <CtaBanner onOpenStart={handleOpenStart} />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenDemo={() => handleOpenDemo('today')}
        onOpenStart={handleOpenStart}
      />

      {/* Interactive Live Guide Simulator Modal */}
      <LiveGuideModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        initialTab={demoTab}
        hostelName={demoHostelName}
      />

      {/* Start Free Onboarding Modal */}
      <StartFreeModal
        isOpen={isStartOpen}
        onClose={() => setIsStartOpen(false)}
        onOpenDemoWithName={(name) => handleOpenDemo('today', name)}
      />
    </div>
  );
}
