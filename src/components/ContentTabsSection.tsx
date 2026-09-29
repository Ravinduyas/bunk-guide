import React, { useState } from 'react';
import {
  Calendar,
  Home,
  ShoppingBag,
  Compass,
  Check,
  Wifi,
  Clock,
  Key,
  Shield,
  Bike,
  Sparkles,
  MapPin,
  Utensils,
} from 'lucide-react';

interface ContentTabsSectionProps {
  onOpenDemoTab?: (tab: string) => void;
}

export const ContentTabsSection: React.FC<ContentTabsSectionProps> = ({
  onOpenDemoTab,
}) => {
  const [activeTabPreview, setActiveTabPreview] = useState<'today' | 'stay' | 'service' | 'explore'>('today');

  return (
    <section id="what-goes-in" className="py-24 md:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading with sitting traveler */}
        <div className="relative flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-20">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#141414] leading-[0.95]">
              what goes in
              <span className="text-[#FF5533]">.</span>
            </h2>
            <p className="text-lg text-[#525252] font-medium mt-3 max-w-md">
              Everything your guests ask at reception, organized into four clean tabs.
            </p>
          </div>

          {/* Decorative traveler sitting cut-out indicator */}
          <div className="hidden lg:flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-neutral-200/80 px-4 py-2 rounded-2xl shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
            <span className="text-xs font-bold text-neutral-800">
              Interactive Preview: Click any screen to test
            </span>
          </div>
        </div>

        {/* 4 Phone Screens Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {/* SCREEN 1: TODAY */}
          <div
            onClick={() => onOpenDemoTab && onOpenDemoTab('today')}
            className="group bg-white border border-[#E5E1D8] hover:border-[#141414] rounded-[36px] p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            {/* Header info */}
            <div className="mb-4 space-y-1">
              <div className="flex items-center gap-1.5 text-base font-extrabold text-[#141414]">
                <Calendar className="w-4 h-4 text-[#FF5533]" />
                <span>today</span>
              </div>
              <p className="text-xs text-[#5C5C5C] font-medium leading-snug">
                tonight's plan, the weather, and what's on this week.
              </p>
            </div>

            {/* Mobile Mockup Frame */}
            <div className="bg-[#FAF8F5] border border-neutral-200 rounded-[28px] p-3 space-y-2.5 text-xs text-neutral-800 shadow-inner">
              {/* Top bar */}
              <div className="flex items-center justify-between text-[10px] font-bold text-neutral-500 pb-1 border-b border-neutral-200">
                <span className="text-neutral-900 font-extrabold">Papaya hostel</span>
                <span>☀️ 28°</span>
              </div>

              {/* Today tag */}
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#FF5533]">
                today • 7pm
              </div>

              {/* Event card */}
              <div className="bg-[#141414] text-white p-3 rounded-2xl space-y-1.5">
                <div className="text-xs font-black">family dinner</div>
                <p className="text-[10px] text-neutral-300 leading-snug">
                  big table on the rooftop, one pot of khao soi for everyone. 80 baht, sign up at reception.
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[9px] text-neutral-400">14 guests going</span>
                  <span className="text-[9px] bg-[#FF5533] text-white px-2 py-0.5 rounded-full font-bold">
                    rsvp
                  </span>
                </div>
              </div>

              {/* Secondary event */}
              <div className="bg-white border border-neutral-200 p-2.5 rounded-xl space-y-1">
                <div className="flex items-center justify-between text-[9px] font-bold text-neutral-500">
                  <span>tomorrow • 6pm</span>
                  <span className="text-emerald-600 font-bold">free</span>
                </div>
                <div className="text-[11px] font-bold text-neutral-900">sunset snorkel</div>
                <p className="text-[9px] text-neutral-500">at shark bay reef</p>
              </div>

              {/* Navigation pill row */}
              <div className="grid grid-cols-4 gap-1 text-[8px] font-bold text-center pt-1 border-t border-neutral-200">
                <span className="text-[#FF5533]">today</span>
                <span className="text-neutral-400">stay</span>
                <span className="text-neutral-400">service</span>
                <span className="text-neutral-400">explore</span>
              </div>
            </div>
          </div>

          {/* SCREEN 2: STAY */}
          <div
            onClick={() => onOpenDemoTab && onOpenDemoTab('stay')}
            className="group bg-white border border-[#E5E1D8] hover:border-[#141414] rounded-[36px] p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            {/* Header info */}
            <div className="mb-4 space-y-1">
              <div className="flex items-center gap-1.5 text-base font-extrabold text-[#141414]">
                <Home className="w-4 h-4 text-[#FF5533]" />
                <span>stay</span>
              </div>
              <p className="text-xs text-[#5C5C5C] font-medium leading-snug">
                wifi, check-in, house rules, laundry: everything about the house.
              </p>
            </div>

            {/* Mobile Mockup Frame */}
            <div className="bg-[#FAF8F5] border border-neutral-200 rounded-[28px] p-3 space-y-2 text-xs text-neutral-800 shadow-inner">
              <div className="flex items-center justify-between text-[10px] font-bold text-neutral-500 pb-1 border-b border-neutral-200">
                <span className="text-neutral-900 font-extrabold">Papaya hostel</span>
                <span className="text-[#10B981]">EN</span>
              </div>

              <div className="text-[11px] font-extrabold text-[#141414]">stay</div>

              {/* WiFi card */}
              <div className="bg-white border border-neutral-200 p-2.5 rounded-xl flex items-center justify-between">
                <div>
                  <span className="block text-[9px] uppercase font-bold text-neutral-400">
                    Hostel WiFi
                  </span>
                  <span className="font-mono text-xs font-bold text-neutral-900">
                    papaya2026
                  </span>
                </div>
                <span className="text-[9px] bg-neutral-100 hover:bg-neutral-200 px-2 py-1 rounded font-bold">
                  copy
                </span>
              </div>

              {/* House rules */}
              <div className="bg-white border border-neutral-200 p-2.5 rounded-xl space-y-1">
                <div className="text-[10px] font-bold text-neutral-900 flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#FF5533]" />
                  <span>house rules</span>
                </div>
                <p className="text-[9px] text-neutral-500 leading-tight">
                  quiet after 11pm, no outside drinks in the common room.
                </p>
              </div>

              {/* Check in & Check out */}
              <div className="bg-white border border-neutral-200 p-2 rounded-xl flex justify-between text-[9px] text-neutral-600">
                <div>
                  <span className="font-bold block text-neutral-900">check-out</span>
                  <span>11:00 am</span>
                </div>
                <div className="text-right">
                  <span className="font-bold block text-neutral-900">check-in</span>
                  <span>2:00 pm</span>
                </div>
              </div>

              {/* Navigation pill row */}
              <div className="grid grid-cols-4 gap-1 text-[8px] font-bold text-center pt-1 border-t border-neutral-200">
                <span className="text-neutral-400">today</span>
                <span className="text-[#FF5533]">stay</span>
                <span className="text-neutral-400">service</span>
                <span className="text-neutral-400">explore</span>
              </div>
            </div>
          </div>

          {/* SCREEN 3: SERVICE */}
          <div
            onClick={() => onOpenDemoTab && onOpenDemoTab('service')}
            className="group bg-white border border-[#E5E1D8] hover:border-[#141414] rounded-[36px] p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            {/* Header info */}
            <div className="mb-4 space-y-1">
              <div className="flex items-center gap-1.5 text-base font-extrabold text-[#141414]">
                <ShoppingBag className="w-4 h-4 text-[#FF5533]" />
                <span>service</span>
              </div>
              <p className="text-xs text-[#5C5C5C] font-medium leading-snug">
                tours, rentals, pickups, booked straight from the bed.
              </p>
            </div>

            {/* Mobile Mockup Frame */}
            <div className="bg-[#FAF8F5] border border-neutral-200 rounded-[28px] p-3 space-y-2 text-xs text-neutral-800 shadow-inner">
              <div className="flex items-center justify-between text-[10px] font-bold text-neutral-500 pb-1 border-b border-neutral-200">
                <span className="text-neutral-900 font-extrabold">Papaya hostel</span>
                <span className="text-[#FF5533]">Instant Book</span>
              </div>

              <div className="text-[11px] font-extrabold text-[#141414]">service</div>

              {/* Laundry item */}
              <div className="bg-white border border-neutral-200 p-2 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-neutral-900">laundry</div>
                  <div className="text-[9px] text-neutral-500">70 baht per kilo, next day</div>
                </div>
                <span className="text-[9px] font-bold bg-[#FF5533]/10 text-[#FF5533] px-2 py-0.5 rounded">
                  request
                </span>
              </div>

              {/* Towels and locks */}
              <div className="bg-white border border-neutral-200 p-2 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-neutral-900">towels and locks</div>
                  <div className="text-[9px] text-neutral-500">towel 50 baht, lock 50 baht</div>
                </div>
                <span className="text-[9px] font-bold bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded">
                  rent
                </span>
              </div>

              {/* Scooter rental */}
              <div className="bg-white border border-neutral-200 p-2 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-neutral-900">scooter rental</div>
                  <div className="text-[9px] text-neutral-500">200 baht a day, helmet incl.</div>
                </div>
                <span className="text-[9px] font-bold bg-[#141414] text-white px-2 py-0.5 rounded">
                  reserve
                </span>
              </div>

              {/* Navigation pill row */}
              <div className="grid grid-cols-4 gap-1 text-[8px] font-bold text-center pt-1 border-t border-neutral-200">
                <span className="text-neutral-400">today</span>
                <span className="text-neutral-400">stay</span>
                <span className="text-[#FF5533]">service</span>
                <span className="text-neutral-400">explore</span>
              </div>
            </div>
          </div>

          {/* SCREEN 4: EXPLORE */}
          <div
            onClick={() => onOpenDemoTab && onOpenDemoTab('explore')}
            className="group bg-white border border-[#E5E1D8] hover:border-[#141414] rounded-[36px] p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            {/* Header info */}
            <div className="mb-4 space-y-1">
              <div className="flex items-center gap-1.5 text-base font-extrabold text-[#141414]">
                <Compass className="w-4 h-4 text-[#FF5533]" />
                <span>explore</span>
              </div>
              <p className="text-xs text-[#5C5C5C] font-medium leading-snug">
                getting around, and the places you actually like.
              </p>
            </div>

            {/* Mobile Mockup Frame */}
            <div className="bg-[#FAF8F5] border border-neutral-200 rounded-[28px] p-3 space-y-2 text-xs text-neutral-800 shadow-inner">
              <div className="flex items-center justify-between text-[10px] font-bold text-neutral-500 pb-1 border-b border-neutral-200">
                <span className="text-neutral-900 font-extrabold">Papaya hostel</span>
                <span>Nearby</span>
              </div>

              <div className="text-[11px] font-extrabold text-[#141414]">explore</div>

              {/* Filter chips */}
              <div className="flex items-center gap-1 text-[8px] font-bold">
                <span className="px-2 py-0.5 bg-[#141414] text-white rounded-full">
                  all
                </span>
                <span className="px-2 py-0.5 bg-neutral-200 text-neutral-700 rounded-full">
                  food
                </span>
                <span className="px-2 py-0.5 bg-neutral-200 text-neutral-700 rounded-full">
                  sunset
                </span>
              </div>

              {/* Place 1 */}
              <div className="bg-white border border-neutral-200 p-2 rounded-xl space-y-0.5">
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span>Pai Canyon</span>
                  <span className="text-neutral-400 text-[8px]">15 min scooter</span>
                </div>
                <p className="text-[9px] text-neutral-500 leading-tight">
                  Best spot for sunset, hike the narrow ridge. Free entry.
                </p>
              </div>

              {/* Place 2 */}
              <div className="bg-white border border-neutral-200 p-2 rounded-xl space-y-0.5">
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span>Secret Night Market</span>
                  <span className="text-neutral-400 text-[8px]">5 min walk</span>
                </div>
                <p className="text-[9px] text-neutral-500 leading-tight">
                  Try mango sticky rice stall #4.
                </p>
              </div>

              {/* Navigation pill row */}
              <div className="grid grid-cols-4 gap-1 text-[8px] font-bold text-center pt-1 border-t border-neutral-200">
                <span className="text-neutral-400">today</span>
                <span className="text-neutral-400">stay</span>
                <span className="text-neutral-400">service</span>
                <span className="text-[#FF5533]">explore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature List */}
        <div className="mt-20 pt-10 border-t border-[#E5E1D8] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#141414]">
              you decide what goes in
              <span className="text-[#FF5533]">.</span>
            </h3>
          </div>
          <ul className="space-y-2.5 text-base sm:text-lg font-medium text-[#2E2E2E]">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5533]" />
              <span>switch off any tab you do not need</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5533]" />
              <span>add your own tours, tips and services</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5533]" />
              <span>change it whenever you want</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
