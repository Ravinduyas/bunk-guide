import React, { useState } from 'react';

export const RoiCalculator: React.FC = () => {
  const [bedCount, setBedCount] = useState<number>(30);

  // Dynamic calculations matching Helio's formula
  const hoursSaved = Math.round(bedCount * 0.57);
  const potentialRevenue = Math.round(bedCount * 2.8);
  
  // Cost calculation based on tier
  const calculateCost = (beds: number) => {
    if (beds <= 10) return 9;
    if (beds <= 20) return 14;
    if (beds <= 35) return 24;
    if (beds <= 50) return 34;
    return 49;
  };
  const helioCost = calculateCost(bedCount);

  // Derived metrics for copy
  const monthlyGuests = Math.round(bedCount * 7);
  const questionsAnswered = Math.round(monthlyGuests * 4 * 0.72);

  return (
    <section className="py-24 md:py-36 bg-[#121212] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#FAF8F5] leading-tight">
            what your house
            <br />
            gets back
            <span className="text-[#FF5533]">.</span>
          </h2>
        </div>

        {/* ROI Interactive Card */}
        <div className="bg-[#1C1C1C] border border-neutral-800 rounded-[36px] p-6 sm:p-12 shadow-2xl relative">
          {/* Bed Count Selector */}
          <div className="text-center space-y-4 max-w-xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-bold">
              how many beds?
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white font-sans">
              {bedCount} {bedCount >= 80 ? '80+ beds' : 'beds'}
            </div>

            {/* Slider Input */}
            <div className="pt-4 px-2 space-y-2">
              <input
                type="range"
                min="4"
                max="80"
                step="2"
                value={bedCount}
                onChange={(e) => setBedCount(Number(e.target.value))}
                className="w-full h-3 cursor-pointer"
                aria-label="How many beds does your house have?"
              />
              <div className="flex justify-between text-xs text-neutral-500 font-mono">
                <span>4</span>
                <span>80+</span>
              </div>
            </div>
          </div>

          {/* 4 Metric Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-6 border-y border-neutral-800 text-center">
            {/* Metric 1 */}
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums">
                {hoursSaved}h
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-medium">
                less work for your staff
              </p>
            </div>

            {/* Metric 2 */}
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-[#FF5533] tracking-tight tabular-nums">
                ${potentialRevenue}
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-medium">
                potential extra from tours and services
              </p>
            </div>

            {/* Metric 3 */}
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums">
                ${helioCost}
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-medium">
                what helio costs
              </p>
            </div>

            {/* Metric 4 */}
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                10<span className="text-2xl sm:text-3xl font-bold">min</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-medium">
                to set the whole thing up
              </p>
            </div>
          </div>

          {/* Formula Context Note */}
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed">
              <span className="text-neutral-300 font-semibold">{monthlyGuests} guests a month</span> at 70% occupancy, 4 questions each,{' '}
              <span className="text-neutral-300 font-semibold">{questionsAnswered} of them answered</span> in the guide instead of at the desk. 4% book a tour or a transfer, $10 if it stays with the house. Rough numbers, and yours will look different.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
