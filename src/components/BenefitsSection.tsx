import React from 'react';
import { MessageCircleQuestion, TrendingUp, RefreshCw, Palette } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: MessageCircleQuestion,
      text: 'Guests get instant answers, day and night',
      description:
        'Wifi passwords, checkout times, breakfast hours, and padlock rules ready in 1 tap.',
    },
    {
      icon: TrendingUp,
      text: 'More bookings for tours, laundry and pickups',
      description:
        'High margin add-ons placed right in front of travelers while relaxing in their bunks.',
    },
    {
      icon: RefreshCw,
      text: 'Zero paperwork. Change it once, live everywhere',
      description:
        'Update tonight’s dinner or tomorrow’s snorkel trip from your phone in 30 seconds.',
    },
    {
      icon: Palette,
      text: 'Your logo, your colours, your words',
      description:
        'A bespoke look that feels uniquely like your house, not a generic directory.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Hand holding phone inside circular coral frame */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative w-72 sm:w-96 md:w-[420px] aspect-square rounded-full bg-[#F99F87] flex items-center justify-center p-6 sm:p-8 shadow-xl">
              {/* Image asset */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/src/assets/images/bunk_hand_phone_1790140585207.jpg"
                  alt="Hand holding smartphone with the Helio guest guide"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative accent ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#FAF8F5]/30 pointer-events-none animate-[spin_60s_linear_infinite]" />
            </div>
          </div>

          {/* Right: Content & Benefits List */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#141414] leading-[1.05]">
                more happy guests,
                <br />
                less work
                <span className="text-[#FF5533]">.</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#4A4A4A] font-medium leading-relaxed max-w-lg">
                Fewer repeated questions at reception, better informed guests,
                and a smoother stay for everyone.
              </p>
            </div>

            {/* List with clean circular icons */}
            <div className="space-y-6 pt-2">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full border-2 border-[#141414] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#141414] group-hover:text-white transition-all text-[#141414]">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#141414] leading-snug">
                        {item.text}
                      </h3>
                      <p className="text-sm text-[#5C5C5C] mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
