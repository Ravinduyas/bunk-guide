import React, { useState } from 'react';
import { Calendar, Bell, Edit3, Palette, CheckCircle2, MessageSquare, Send } from 'lucide-react';

export const AdminPreviewSection: React.FC = () => {
  const [eventTitle, setEventTitle] = useState('family rooftop dinner');
  const [eventTime, setEventTime] = useState('7:00 PM');
  const [requestsTab, setRequestsTab] = useState<'board' | 'requests' | 'settings'>('board');

  const adminFeatures = [
    {
      icon: Calendar,
      title: "Tonight's plan typed in 30 seconds, live on every bed",
      desc: 'Type once into the admin screen, and all guest screens update immediately.',
    },
    {
      icon: Bell,
      title: 'Guest requests land in your inbox or your WhatsApp, you choose',
      desc: 'Never miss a late-night check-in note, laundry pickup, or scooter reservation.',
    },
    {
      icon: Edit3,
      title: 'Tap anything in the guide itself to change it, right there',
      desc: 'Click on any recommendation, WiFi password, or house rule to edit in seconds.',
    },
    {
      icon: Palette,
      title: 'Pick your colours, upload the logo, no training needed',
      desc: 'Matches your brand without touching code or calling an agency.',
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#141414] leading-[1.05]">
                change it
                <br />
                from your phone
                <span className="text-[#FF5533]">.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#4A4A4A] font-medium leading-relaxed">
                The portal runs in the browser, on the reception phone or the
                laptop. No app, nothing to install. Anyone on shift can do it.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-6 pt-2">
              {adminFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full border-2 border-[#141414] flex items-center justify-center shrink-0 mt-0.5 text-[#141414]">
                      <Icon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#141414] leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-[#5C5C5C] mt-0.5 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Laptop & Mobile Device Sync Mockup */}
          <div className="lg:col-span-7 relative flex justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Laptop Screen Mockup */}
              <div className="bg-neutral-900 rounded-[28px] p-2.5 sm:p-4 shadow-2xl border-4 border-neutral-700">
                {/* Top Laptop Bezel Bar */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-neutral-800 rounded-t-xl text-[10px] text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="font-mono text-xs text-neutral-300">
                    helio.app/admin/papaya-hostel
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
                    Connected
                  </span>
                </div>

                {/* Laptop Body / Dashboard Content */}
                <div className="bg-[#FAF8F5] text-neutral-900 p-4 sm:p-6 rounded-b-xl min-h-[340px] space-y-4">
                  {/* Dashboard Top Header */}
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#FF5533]" />
                      <span className="text-base font-black">Papaya Hostel Admin</span>
                    </div>

                    {/* Nav tabs */}
                    <div className="flex items-center gap-1 bg-neutral-200/70 p-1 rounded-lg text-xs font-semibold">
                      <button
                        onClick={() => setRequestsTab('board')}
                        className={`px-3 py-1 rounded-md transition-all ${
                          requestsTab === 'board'
                            ? 'bg-white shadow text-[#141414]'
                            : 'text-neutral-600 hover:text-black'
                        }`}
                      >
                        today board
                      </button>
                      <button
                        onClick={() => setRequestsTab('requests')}
                        className={`px-3 py-1 rounded-md transition-all ${
                          requestsTab === 'requests'
                            ? 'bg-white shadow text-[#141414]'
                            : 'text-neutral-600 hover:text-black'
                        }`}
                      >
                        requests (3)
                      </button>
                    </div>
                  </div>

                  {/* Tab 1: Today Board Editor */}
                  {requestsTab === 'board' && (
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-neutral-600 uppercase tracking-wider">
                        Broadcast Tonight's Event to all beds
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-bold text-neutral-600 block mb-1">
                            Event Title
                          </label>
                          <input
                            type="text"
                            value={eventTitle}
                            onChange={(e) => setEventTitle(e.target.value)}
                            className="w-full text-xs font-semibold px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-[#FF5533]"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-neutral-600 block mb-1">
                            Time
                          </label>
                          <input
                            type="text"
                            value={eventTime}
                            onChange={(e) => setEventTime(e.target.value)}
                            className="w-full text-xs font-semibold px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-[#FF5533]"
                          />
                        </div>
                      </div>

                      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          Live synced: 42 guest phones updated
                        </span>
                        <span className="text-[10px] bg-emerald-200 text-emerald-900 font-bold px-2 py-0.5 rounded">
                          Instant
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Requests Inbox */}
                  {requestsTab === 'requests' && (
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 bg-white border border-neutral-200 rounded-xl flex items-center justify-between">
                        <div>
                          <div className="font-bold">Bed 12 • Sarah M.</div>
                          <div className="text-neutral-500 text-[11px]">
                            Laundry bag ready at reception desk
                          </div>
                        </div>
                        <span className="text-[10px] font-bold bg-[#FF5533]/10 text-[#FF5533] px-2 py-0.5 rounded">
                          2m ago
                        </span>
                      </div>
                      <div className="p-2.5 bg-white border border-neutral-200 rounded-xl flex items-center justify-between">
                        <div>
                          <div className="font-bold">Bed 04 • Lucas T.</div>
                          <div className="text-neutral-500 text-[11px]">
                            Scooter rental for tomorrow morning
                          </div>
                        </div>
                        <span className="text-[10px] font-bold bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded">
                          15m ago
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Synchronized Live Phone Mockup floating on lower right */}
              <div className="hidden sm:block absolute -bottom-8 -right-4 w-52 bg-neutral-900 border-4 border-neutral-800 rounded-[32px] p-2 shadow-2xl transform rotate-3">
                <div className="w-16 h-3 bg-neutral-800 rounded-full mx-auto mb-1.5" />
                <div className="bg-[#FAF8F5] text-neutral-900 rounded-[24px] p-3 text-left space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] font-bold text-neutral-500 pb-1 border-b border-neutral-200">
                    <span>Papaya hostel</span>
                    <span className="text-emerald-600">● live</span>
                  </div>
                  <div className="bg-[#141414] text-white p-2.5 rounded-xl space-y-1">
                    <span className="text-[8px] uppercase tracking-wider text-[#FF5533] font-bold">
                      Tonight • {eventTime}
                    </span>
                    <div className="text-[11px] font-bold leading-tight">
                      {eventTitle}
                    </div>
                    <div className="text-[8px] text-neutral-300">
                      Rooftop terrace. Free welcome drink!
                    </div>
                  </div>
                  <div className="text-[8px] text-center text-neutral-400 font-medium">
                    Changes appear instantly
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
