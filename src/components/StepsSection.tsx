import React from 'react';

interface StepsSectionProps {
  onOpenStart: () => void;
}

export const StepsSection: React.FC<StepsSectionProps> = ({ onOpenStart }) => {
  return (
    <section id="how-it-works" className="py-24 md:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#141414]">
            live in
            <br />
            ten minutes
            <span className="text-[#FF5533]">.</span>
          </h2>
        </div>

        {/* 3 Alternating Steps Container */}
        <div className="relative space-y-16 md:space-y-24">
          {/* Subtle connecting dotted curved line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 bottom-12 pointer-events-none z-0">
            <svg
              className="w-full h-full text-neutral-300"
              viewBox="0 0 500 500"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 120 40 C 350 70, 380 200, 320 250 C 260 300, 100 370, 120 450"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 8"
              />
            </svg>
          </div>

          {/* STEP 1 (Left aligned) */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-start md:w-3/4">
            <div className="bg-white/70 backdrop-blur-sm border border-[#E8E4DB] rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow max-w-md">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141414] text-white text-xs font-bold rounded-full mb-4">
                <span>step 1</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5533]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] mb-2">
                start free
              </h3>
              <p className="text-base text-[#4F4F4F] font-medium leading-relaxed">
                pick your bed count and start. Fourteen days on us, no card
                needed.
              </p>
            </div>
          </div>

          {/* STEP 2 (Right offset) */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-end md:ml-auto md:w-3/4">
            <div className="bg-white/70 backdrop-blur-sm border border-[#E8E4DB] rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow max-w-md">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141414] text-white text-xs font-bold rounded-full mb-4">
                <span>step 2</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5533]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] mb-2">
                fill it in
              </h3>
              <p className="text-base text-[#4F4F4F] font-medium leading-relaxed">
                wifi, check-in, rules, tours. From your phone, in ten minutes.
              </p>
            </div>
          </div>

          {/* STEP 3 (Left offset) */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-start md:w-3/4">
            <div className="bg-white/70 backdrop-blur-sm border border-[#E8E4DB] rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow max-w-md">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141414] text-white text-xs font-bold rounded-full mb-4">
                <span>step 3</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5533]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] mb-2">
                print the code
              </h3>
              <p className="text-base text-[#4F4F4F] font-medium leading-relaxed">
                a sticker on every bed, or one sheet on the room door. Guests
                scan it, no app.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenStart}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#141414] text-white text-sm font-bold rounded-full hover:bg-black hover:scale-105 transition-all shadow-md"
          >
            <span>set up your house now</span>
            <span className="w-2 h-2 rounded-full bg-[#FF5533]" />
          </button>
        </div>
      </div>
    </section>
  );
};
