import React, { useState } from 'react';

interface PricingSectionProps {
  onOpenStart: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenStart }) => {
  const [bedCount, setBedCount] = useState<number>(20);

  // Pricing formula matching Helio tiers
  const getPricing = (beds: number) => {
    if (beds <= 10) return { price: 9, note: 'Same price for up to 10 beds.' };
    if (beds <= 20) return { price: 14, note: 'Same price for up to 20 beds.' };
    if (beds <= 35) return { price: 24, note: 'Same price for up to 35 beds.' };
    if (beds <= 50) return { price: 34, note: 'Same price for up to 50 beds.' };
    return { price: 49, note: 'Flat pricing for 51+ beds.' };
  };

  const { price, note } = getPricing(bedCount);

  const includedFeatures = [
    'Everything, there is only one plan',
    'The PMS: beds, bookings and check-ins',
    'Your guest guide, in your colours and your font',
    'The board: what is on today and this week',
    'Guest requests to your inbox or your WhatsApp',
    'One QR code that never changes',
    'The portal, on as many phones as you like',
    'New features as we build them',
  ];

  return (
    <section id="pricing" className="py-24 md:py-36 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#141414]">
            pricing
            <span className="text-[#FF5533]">.</span>
          </h2>
        </div>

        {/* Pricing Dark Container Card */}
        <div className="bg-[#141414] text-white rounded-[36px] p-6 sm:p-12 md:p-14 shadow-2xl border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Bed Slider & Price */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 lg:border-r lg:border-neutral-800 lg:pr-10">
              <div className="space-y-2">
                <span className="text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-bold">
                  how many beds?
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white font-sans">
                  {bedCount} {bedCount >= 80 ? '80+ beds' : 'beds'}
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="4"
                  max="80"
                  step="2"
                  value={bedCount}
                  onChange={(e) => setBedCount(Number(e.target.value))}
                  className="w-full h-2.5 cursor-pointer"
                  aria-label="Select bed count"
                />
                <div className="flex justify-between text-xs text-neutral-500 font-mono">
                  <span>4</span>
                  <span>80+</span>
                </div>
              </div>

              {/* Price Calculation Display */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-black tracking-tight text-white tabular-nums">
                    ${price}
                  </span>
                  <span className="text-lg text-neutral-400 font-medium">
                    / month
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-medium">{note}</p>
              </div>

              {/* Start Free Button */}
              <div className="pt-2 space-y-3">
                <button
                  onClick={onOpenStart}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-[#141414] text-sm sm:text-base font-extrabold rounded-full hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto shadow-md"
                >
                  <span>start free</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5533]" />
                </button>
                <p className="text-[11px] sm:text-xs text-neutral-400 font-medium leading-relaxed">
                  Fourteen days free, then monthly. Cancel anytime. By
                  subscribing you agree to our{' '}
                  <a href="#terms" className="underline hover:text-white">
                    terms
                  </a>{' '}
                  and{' '}
                  <a href="#refund" className="underline hover:text-white">
                    refund policy
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Right Column: What's Included */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-bold block">
                included
              </span>

              <ul className="space-y-4">
                {includedFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5533] mt-2 shrink-0" />
                    <span className="text-sm sm:text-base text-neutral-200 font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
