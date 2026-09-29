import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'do my guests need an app?',
      a: 'No, absolutely not. Guests simply scan the QR code on their bed frame, keycard, or room door using their normal phone camera. It loads instantly in mobile Safari or Chrome in under 1 second. No downloads, no passwords, no app store friction.',
    },
    {
      q: 'is helio a PMS or a guest guide?',
      a: "Both. Helio is a PMS built for hostels and camps: beds, dorms, bookings and check-ins live in one place. The guest guide sits right on top of it, so the in-stay side (reception questions, tonight's dinner or pub crawl, tours and laundry booked straight from the bed) runs on the same data your front desk already uses.",
    },
    {
      q: 'our reception changes every few weeks. who keeps this up to date?',
      a: 'Anyone on shift. The host admin portal works right in any web browser on your reception desktop or phone. Updating tonight’s event or tomorrow’s snorkel trip takes 30 seconds and requires zero training.',
    },
    {
      q: 'what if we do not run events?',
      a: "You can toggle off the 'today' tab in one click. Many hostels, surf houses, and boutique lodges use the Helio guide primarily for house rules, WiFi details, laundry drop-offs, luggage storage, and curated local food tips.",
    },
    {
      q: 'how do guests reach us?',
      a: 'You decide. Guest requests and inquiries can route directly to your reception WhatsApp number, an email address, or an on-screen live request board on your reception computer.',
    },
    {
      q: 'can i change how it looks?',
      a: 'Yes. You can upload your house logo, choose your primary brand colors, set custom photo covers, and write every word in your own house tone and style.',
    },
    {
      q: 'can i cancel anytime?',
      a: 'Yes. There are no contracts, no setup fees, and no lock-in periods. You can cancel with a single click anytime in your account settings.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="questions" className="py-24 md:py-36 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Travelers Trio Photo */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#141414] leading-[0.95]">
                questions
                <span className="text-[#FF5533]">.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#525252] font-medium mt-3">
                What owners ask us before they start.
              </p>
            </div>

            {/* Travelers Trio Photo */}
            <div className="pt-4 max-w-sm">
              <div className="overflow-hidden rounded-3xl bg-white border border-[#E5E1D8] shadow-md p-2">
                <img
                  src="/src/assets/images/bunk_travelers_trio_1790140595702.jpg"
                  alt="Cheerful backpackers laughing together"
                  className="w-full h-auto object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Clean Accordion List */}
          <div className="lg:col-span-7 divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 sm:py-6 transition-colors">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg md:text-xl font-extrabold text-[#141414] group-hover:text-[#FF5533] transition-colors">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#141414] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3.5 pr-8 text-sm sm:text-base text-[#4F4F4F] font-medium leading-relaxed animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
