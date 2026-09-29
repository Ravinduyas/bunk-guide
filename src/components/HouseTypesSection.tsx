import React, { useState } from 'react';
import { Waves, Anchor, Heart, Sparkles, Building2 } from 'lucide-react';

interface HouseTypesSectionProps {
  onOpenDemoWithTheme?: (themeName: string) => void;
}

export const HouseTypesSection: React.FC<HouseTypesSectionProps> = ({
  onOpenDemoWithTheme,
}) => {
  const [activeType, setActiveType] = useState(0);

  const houses = [
    {
      id: 'city',
      title: 'city hostels',
      badge: 'city hostels •',
      accentColor: '#FF5533',
      bgGradient: 'from-amber-700/80 to-stone-900/90',
      icon: Building2,
      subtitle: 'Pub crawls, rooftop dinners, luggage storage & walking tours',
      mockupData: {
        name: 'Papaya Hostel',
        badgeText: 'Chiang Mai',
        heroTitle: 'pub crawl',
        heroTime: 'Tonight • 9:00 PM',
        sub: '4 legendary bars, 1 secret club. Sign up at the desk.',
        action: 'join crawl',
      },
    },
    {
      id: 'surf',
      title: 'surf camps',
      badge: 'surf camps •',
      accentColor: '#0284C7',
      bgGradient: 'from-cyan-900/80 to-blue-950/90',
      icon: Waves,
      subtitle: 'Tide charts, board rentals, sunset sessions & beach shuttles',
      mockupData: {
        name: 'Driftwood Surf House',
        badgeText: 'Baleal, Portugal',
        heroTitle: 'sunset session',
        heroTime: 'Today • 5:30 PM',
        sub: 'Low tide reef break. Shuttles leave reception in 20 min.',
        action: 'book board',
      },
    },
    {
      id: 'dive',
      title: 'dive resorts',
      badge: 'dive resorts •',
      accentColor: '#0D9488',
      bgGradient: 'from-teal-950/90 to-emerald-950/90',
      icon: Anchor,
      subtitle: 'Boat departures, gear lockers, night dives & coral maps',
      mockupData: {
        name: 'Blue Coral Dive Lodge',
        badgeText: 'Koh Tao, Thailand',
        heroTitle: 'shark island dive',
        heroTime: 'Tomorrow • 7:00 AM',
        sub: '2 tank morning trip. Nitrox available. Bring your logbook.',
        action: 'join boat',
      },
    },
    {
      id: 'yoga',
      title: 'yoga retreats',
      badge: 'yoga retreats •',
      accentColor: '#854D0E',
      bgGradient: 'from-stone-900/90 to-amber-950/90',
      icon: Heart,
      subtitle: 'Sound baths, organic meals, silent hours & massage bookings',
      mockupData: {
        name: 'Prana Sanctuary',
        badgeText: 'Ubud, Bali',
        heroTitle: 'cacao ceremony',
        heroTime: 'Tonight • 6:30 PM',
        sub: 'Sound bath in the bamboo shala. Wear loose comfortable clothing.',
        action: 'reserve mat',
      },
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#141414] leading-[1.05]">
            one guide for
            <br />
            every kind of house
            <span className="text-[#FF5533]">.</span>
          </h2>
        </div>

        {/* 4 Cards Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {houses.map((house, idx) => {
            const isSelected = activeType === idx;
            return (
              <div
                key={house.id}
                onClick={() => {
                  setActiveType(idx);
                  if (onOpenDemoWithTheme) {
                    onOpenDemoWithTheme(house.mockupData.name);
                  }
                }}
                className={`group relative rounded-[32px] overflow-hidden p-3.5 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'ring-2 ring-[#141414] shadow-xl scale-[1.02]'
                    : 'border border-[#E5E1D8] hover:border-neutral-400 bg-white/60'
                }`}
              >
                {/* Category Pill Tag */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141414] text-white text-[11px] font-bold rounded-full">
                    <span>{house.title}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5533]" />
                  </span>
                  <Sparkles
                    className={`w-4 h-4 transition-colors ${
                      isSelected ? 'text-[#FF5533]' : 'text-neutral-300'
                    }`}
                  />
                </div>

                {/* Scenic Background with Phone Mockup */}
                <div className="relative rounded-[26px] overflow-hidden bg-neutral-900 aspect-[9/14] flex flex-col justify-end p-2.5">
                  {/* Photo or stylized gradient layer */}
                  {house.id === 'surf' ? (
                    <img
                      src="/src/assets/images/bunk_surf_camp_1790140617612.jpg"
                      alt="Surf camp"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${house.bgGradient} opacity-90`}
                    />
                  )}

                  {/* Glass Phone Mockup resting in card */}
                  <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-[20px] p-3 text-neutral-900 shadow-xl border border-white/40 space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-neutral-500 font-semibold border-b border-neutral-100 pb-1.5">
                      <span className="truncate max-w-[110px] text-neutral-900 font-bold">
                        {house.mockupData.name}
                      </span>
                      <span>{house.mockupData.badgeText}</span>
                    </div>

                    <div className="bg-neutral-900 text-white rounded-xl p-2.5 space-y-1">
                      <div className="flex items-center justify-between text-[9px] text-[#FF5533] font-bold">
                        <span>{house.mockupData.heroTime}</span>
                      </div>
                      <div className="text-xs font-bold capitalize leading-tight">
                        {house.mockupData.heroTitle}
                      </div>
                      <p className="text-[10px] text-neutral-300 line-clamp-2 leading-tight">
                        {house.mockupData.sub}
                      </p>
                      <div className="pt-1 flex justify-end">
                        <span className="text-[9px] bg-[#FF5533] text-white px-2 py-0.5 rounded-full font-bold">
                          {house.mockupData.action}
                        </span>
                      </div>
                    </div>

                    <div className="text-[9px] text-neutral-400 font-medium text-center truncate">
                      wifi • rules • tours • laundry
                    </div>
                  </div>
                </div>

                {/* Subtitle description */}
                <div className="mt-3 px-1">
                  <p className="text-xs text-[#525252] font-medium leading-tight">
                    {house.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Footer Statement */}
        <div className="text-center mt-14 max-w-xl mx-auto">
          <p className="text-lg sm:text-xl font-bold text-[#141414] leading-snug">
            Your colours, your logo, your words. Design the guide the way your
            house looks.
          </p>
        </div>
      </div>
    </section>
  );
};
