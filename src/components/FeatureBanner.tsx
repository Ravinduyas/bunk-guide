import React from 'react';
import { Star, MessageSquare, Compass, ShieldAlert, Sparkles } from 'lucide-react';

interface FeatureBannerProps {
  onOpenDemo: () => void;
}

export const FeatureBanner: React.FC<FeatureBannerProps> = ({ onOpenDemo }) => {
  return (
    <section className="bg-[#121212] text-white pt-20 pb-28 md:pt-28 md:pb-36 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#FF5533]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10 space-y-12">
        {/* Core Value Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.8rem] font-extrabold tracking-tight leading-[1.25] text-[#FAF8F5] max-w-4xl mx-auto">
          more tours and services sold{' '}
          <span className="inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-[#FF5533]/25 border-2 border-[#FF5533] text-white text-[0.88em] font-black align-middle my-1">
            from the bed
          </span>
          , fewer questions at reception, and the{' '}
          <span className="inline-inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#FF5533] text-white text-[0.75em] font-black align-middle shadow-lg my-1">
            <span className="text-amber-200 tracking-wider">★★★★★</span>
          </span>{' '}
          reviews your house deserves
          <span className="text-[#FF5533]">.</span>
        </h2>

        {/* Dynamic 3D Perspective Centerpiece */}
        <div className="pt-8 sm:pt-14 relative flex justify-center items-center">
          {/* Traveler jumping out */}
          <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
            {/* Jumping backpacker cutout */}
            <div className="relative z-20 -mb-16 sm:-mb-24 flex justify-center transform hover:scale-105 transition-transform duration-300">
              <img
                src="/src/assets/images/bunk_jumping_traveler_1790140573652.jpg"
                alt="Backpacker jumping with joy"
                className="w-48 sm:w-64 md:w-72 h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 3D Angled Phone Mockup */}
            <div
              onClick={onOpenDemo}
              role="button"
              tabIndex={0}
              className="relative z-10 mx-auto w-72 sm:w-80 bg-neutral-900 border-[6px] border-neutral-700/80 rounded-[44px] p-3 shadow-2xl shadow-black transform rotate-[-8deg] hover:rotate-0 hover:scale-[1.03] transition-all duration-500 cursor-pointer group"
            >
              {/* Phone screen notch */}
              <div className="w-24 h-4 bg-neutral-800 rounded-full mx-auto mb-2" />

              {/* Inner screen content */}
              <div className="bg-[#FAF8F5] text-neutral-900 rounded-[32px] p-4 text-left space-y-3 overflow-hidden shadow-inner">
                {/* Hostel Header */}
                <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5533]" />
                    <span className="text-xs font-bold text-neutral-900">
                      Papaya hostel
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
                    Bed 24
                  </span>
                </div>

                {/* Featured Highlight card: Pub Crawl */}
                <div className="bg-[#141414] text-white p-3.5 rounded-2xl space-y-2 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF5533]">
                      Tonight • 9:00 PM
                    </span>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">
                      Free shot
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold">famous pub crawl</h4>
                  <p className="text-[11px] text-neutral-300 leading-snug">
                    4 legendary bars, 1 secret rooftop club. Meet at lobby bar.
                  </p>
                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400">
                      18 signed up
                    </span>
                    <span className="text-[11px] bg-[#FF5533] px-2.5 py-1 rounded-full font-bold">
                      join now
                    </span>
                  </div>
                </div>

                {/* Quick actions row */}
                <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                  <div className="p-2.5 bg-neutral-100 rounded-xl hover:bg-neutral-200 transition-colors font-medium">
                    <span className="block text-[13px] font-bold">WiFi</span>
                    <span className="text-[10px] text-neutral-500 font-mono">
                      papaya2026
                    </span>
                  </div>
                  <div className="p-2.5 bg-neutral-100 rounded-xl hover:bg-neutral-200 transition-colors font-medium">
                    <span className="block text-[13px] font-bold">Breakfast</span>
                    <span className="text-[10px] text-neutral-500">
                      7am – 10am
                    </span>
                  </div>
                </div>

                {/* Message reception button */}
                <div className="p-2.5 bg-[#FF5533]/10 border border-[#FF5533]/30 rounded-xl text-center">
                  <span className="text-xs font-bold text-[#FF5533] flex items-center justify-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    message reception
                  </span>
                </div>
              </div>
            </div>

            {/* Hint overlay */}
            <div className="mt-8 text-center">
              <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400 group-hover:text-white transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5533]" />
                Click preview to test the live interactive guide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
