import React from 'react';

interface CtaBannerProps {
  onOpenStart: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenStart }) => {
  return (
    <section className="bg-[#FA7E61] text-[#141414] relative overflow-hidden pt-16 md:pt-24 pb-0">
      {/* Giant subtle watermark wordmark in the background */}
      <div className="absolute -bottom-10 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-15">
        <span className="text-[18vw] font-black tracking-tighter leading-none text-black block text-center">
          helio.
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* Left Text & CTA */}
          <div className="md:col-span-7 pb-16 md:pb-24 space-y-6">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#141414] leading-[0.95]">
              put your house
              <br />
              on helio
              <span className="text-[#141414]">.</span>
            </h2>

            <p className="text-base sm:text-xl text-[#2B1B17] font-semibold max-w-xl leading-relaxed">
              Your beds, bookings and guest guide in one place. You get fewer
              questions at reception, more tours sold and better reviews. Set up
              in ten minutes, from your phone.
            </p>

            <div className="pt-2 space-y-3">
              <button
                onClick={onOpenStart}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#141414] text-[#FAF8F5] text-base font-extrabold rounded-full hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                <span>start free</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5533]" />
              </button>

              <div className="text-xs text-[#3D2520] font-bold tracking-wide">
                14 days free · cancel anytime
              </div>
            </div>
          </div>

          {/* Right Image: Traveler pointing */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative max-w-xs sm:max-w-sm w-full">
              <img
                src="/src/assets/images/bunk_cta_pointing_1790140606370.jpg"
                alt="Traveler recommending Helio"
                className="w-full h-auto object-cover object-bottom drop-shadow-2xl rounded-t-3xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
