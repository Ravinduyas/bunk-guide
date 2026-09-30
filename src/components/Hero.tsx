import React from 'react';
import { Smartphone, Sparkles, QrCode } from 'lucide-react';
import heroTravelerImg from '../assets/images/bunk_hero_traveler_1790140559585.jpg';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenStart }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 max-w-2xl">
            {/* Title Lockup */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tight text-[#141414] leading-[0.9] select-none">
                <span className="inline-flex items-baseline">
                  helio
                  <span className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#FF5533] ml-1 sm:ml-2 inline-block translate-y-[-2px]" />
                </span>
                <br />
                <span className="text-[#141414]">pms</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#2B2B2B] font-medium leading-snug max-w-xl text-balance">
              The PMS for hostels & camps. Beds, bookings and check-ins in one
              place, plus a guest guide for what's on tonight and everything
              else your guests keep asking.
            </p>

            {/* Action Group: QR + Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* QR Code Graphic Box */}
              <button
                onClick={onOpenDemo}
                title="Scan to try a live demo guide"
                className="group relative p-2.5 bg-white border border-[#E5E1D8] rounded-2xl shadow-sm hover:shadow-md hover:border-[#FF5533]/50 transition-all flex items-center gap-3 text-left"
              >
                <div className="w-16 h-16 bg-[#141414] rounded-xl flex items-center justify-center p-2 text-white">
                  {/* Clean SVG QR pattern */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full text-white"
                  >
                    <rect width="6" height="6" x="3" y="3" rx="1" fill="white" />
                    <rect width="6" height="6" x="15" y="3" rx="1" fill="white" />
                    <rect width="6" height="6" x="3" y="15" rx="1" fill="white" />
                    <path d="M15 15h2v2h-2z" fill="white" />
                    <path d="M19 15h2v2h-2z" fill="white" />
                    <path d="M15 19h2v2h-2z" fill="white" />
                    <path d="M19 19h2v2h-2z" fill="white" />
                    <path d="M9 3v4" stroke="currentColor" />
                    <path d="M9 17v4" stroke="currentColor" />
                    <path d="M3 9h4" stroke="currentColor" />
                    <path d="M17 9h4" stroke="currentColor" />
                  </svg>
                </div>
                <div className="pr-2">
                  <div className="text-xs font-bold text-[#141414] flex items-center gap-1.5">
                    <span>Live Hostel Guide</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  </div>
                  <div className="text-[11px] text-[#6E6E6E] font-medium">
                    Tap to open preview
                  </div>
                </div>
              </button>

              {/* Start Free Button & Subtext */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={onOpenStart}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#141414] text-[#FAF8F5] text-base font-bold rounded-full hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md group"
                >
                  <span>start free</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5533] group-hover:scale-125 transition-transform" />
                </button>
                <button
                  onClick={onOpenDemo}
                  className="text-xs text-[#525252] hover:text-[#FF5533] font-medium transition-colors text-left sm:text-center underline decoration-dotted underline-offset-4"
                >
                  or scan to try a live guide
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* Cute doodle sparks */}
              <div className="absolute -top-3 right-6 sm:right-12 z-20 flex gap-1 rotate-12 text-[#141414]">
                <span className="inline-block w-1.5 h-4 bg-[#141414] rounded-full rotate-[-25deg]" />
                <span className="inline-block w-1.5 h-5 bg-[#141414] rounded-full -translate-y-1" />
                <span className="inline-block w-1.5 h-4 bg-[#141414] rounded-full rotate-[25deg]" />
              </div>

              {/* Image Frame */}
              <div className="relative z-10 w-full overflow-hidden rounded-3xl bg-transparent">
                <img
                  src={heroTravelerImg}
                  alt="Cheerful backpacker using the Helio guest guide on a smartphone"
                  className="w-full h-auto object-cover object-center rounded-3xl drop-shadow-lg"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Interactive Floating Pill Badge on phone */}
              <button
                onClick={onOpenDemo}
                className="absolute bottom-6 left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md border border-neutral-200/80 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all text-left group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FF5533]/15 text-[#FF5533] flex items-center justify-center font-bold">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#141414] group-hover:text-[#FF5533] transition-colors flex items-center gap-1">
                    <span>Try Papaya Hostel Guide</span>
                    <Sparkles className="w-3 h-3 text-[#FF5533]" />
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    No app download needed
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
