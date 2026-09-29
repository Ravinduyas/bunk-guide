import React, { useState } from 'react';
import {
  X,
  Calendar,
  Home,
  ShoppingBag,
  Compass,
  Copy,
  Check,
  MessageCircle,
  Wifi,
  Sparkles,
  MapPin,
  Clock,
  Send,
  AlertCircle,
} from 'lucide-react';

interface LiveGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
  hostelName?: string;
}

export const LiveGuideModal: React.FC<LiveGuideModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'today',
  hostelName = 'Papaya Hostel',
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [copiedWifi, setCopiedWifi] = useState(false);
  const [rsvpDone, setRsvpDone] = useState(false);
  const [serviceOrdered, setServiceOrdered] = useState<string | null>(null);
  const [messageOpen, setMessageOpen] = useState(false);
  const [guestMessage, setGuestMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [exploreFilter, setExploreFilter] = useState<'all' | 'food' | 'spots'>('all');

  if (!isOpen) return null;

  const handleCopyWifi = () => {
    navigator.clipboard?.writeText('papaya2026');
    setCopiedWifi(true);
    setTimeout(() => setCopiedWifi(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestMessage.trim()) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setGuestMessage('');
      setMessageOpen(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm sm:max-w-md bg-[#161616] text-white rounded-[44px] border-4 border-neutral-700 shadow-2xl p-3 sm:p-4 flex flex-col max-h-[92vh] overflow-hidden">
        {/* Top Control Bar with Close Button */}
        <div className="flex items-center justify-between px-3 py-1 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5533]" />
            <span className="text-xs font-bold text-neutral-300">
              Interactive Guide Simulator
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close interactive guide simulator"
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Simulated Phone Notch */}
        <div className="w-28 h-4 bg-neutral-800 rounded-full mx-auto mb-2 shrink-0" />

        {/* Inner Phone Screen */}
        <div className="bg-[#FAF8F5] text-neutral-900 rounded-[32px] overflow-y-auto flex-1 flex flex-col justify-between shadow-inner relative">
          {/* Header */}
          <div className="p-4 bg-white border-b border-neutral-200 sticky top-0 z-20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5533]" />
                <h3 className="font-black text-sm text-neutral-900 tracking-tight">
                  {hostelName}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 font-semibold bg-neutral-100 px-2 py-0.5 rounded-full">
                <span>Bed 14</span>
                <span>•</span>
                <span>Chiang Mai</span>
              </div>
            </div>
          </div>

          {/* Screen Content Body */}
          <div className="p-4 space-y-3.5 flex-1 text-xs">
            {/* TAB: TODAY */}
            {activeTab === 'today' && (
              <div className="space-y-3 animate-in fade-in duration-150">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#FF5533]">
                  <span>TONIGHT'S PLAN</span>
                  <span className="text-neutral-500 font-medium">☀️ 28° Clear</span>
                </div>

                {/* Main Event Card */}
                <div className="bg-[#141414] text-white p-4 rounded-2xl space-y-2.5 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] bg-[#FF5533] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      7:00 PM • Rooftop
                    </span>
                    <span className="text-[10px] text-amber-300 font-bold">
                      80 baht
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold leading-tight">
                    family rooftop dinner
                  </h4>
                  <p className="text-[11px] text-neutral-300 leading-snug">
                    Big communal table on the roof, one giant pot of northern khao soi for everyone. Unlimited refills and cold beers at reception.
                  </p>

                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-[10px] text-neutral-400">
                      {rsvpDone ? '19 signed up (including you!)' : '18 signed up'}
                    </span>
                    <button
                      onClick={() => setRsvpDone(!rsvpDone)}
                      className={`px-3 py-1.5 rounded-full font-bold text-[11px] transition-all ${
                        rsvpDone
                          ? 'bg-emerald-500 text-white'
                          : 'bg-[#FF5533] hover:bg-[#E04424] text-white'
                      }`}
                    >
                      {rsvpDone ? 'Going ✓' : 'Join Dinner'}
                    </button>
                  </div>
                </div>

                {/* Secondary Event: Pub crawl */}
                <div className="bg-white border border-neutral-200 p-3 rounded-2xl space-y-1.5 shadow-sm">
                  <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="text-neutral-500">10:00 PM • Lobby</span>
                    <span className="text-emerald-600 font-bold">Free Entry</span>
                  </div>
                  <div className="font-extrabold text-xs text-neutral-900">
                    famous old town pub crawl
                  </div>
                  <p className="text-[10px] text-neutral-600 leading-tight">
                    Follow staff to 4 bars with free welcome shots at each spot.
                  </p>
                </div>
              </div>
            )}

            {/* TAB: STAY */}
            {activeTab === 'stay' && (
              <div className="space-y-3 animate-in fade-in duration-150">
                <div className="text-[11px] font-bold text-[#FF5533]">
                  HOUSE ESSENTIALS
                </div>

                {/* WiFi Card with Copy Action */}
                <div className="bg-white border border-neutral-200 p-3 rounded-2xl flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-neutral-100 flex items-center justify-center">
                      <Wifi className="w-4 h-4 text-[#FF5533]" />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 font-medium">
                        WiFi Network
                      </div>
                      <div className="font-mono font-bold text-xs">papaya2026</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyWifi}
                    className="px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-lg text-[10px] font-bold flex items-center gap-1 text-neutral-800 transition-colors"
                  >
                    {copiedWifi ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Check in / Check out Times */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-white border border-neutral-200 p-2.5 rounded-xl">
                    <span className="text-[10px] text-neutral-400 block font-bold">
                      CHECK-OUT
                    </span>
                    <span className="font-bold text-xs text-neutral-900">
                      11:00 AM
                    </span>
                  </div>
                  <div className="bg-white border border-neutral-200 p-2.5 rounded-xl">
                    <span className="text-[10px] text-neutral-400 block font-bold">
                      QUIET HOURS
                    </span>
                    <span className="font-bold text-xs text-neutral-900">
                      11 PM – 7 AM
                    </span>
                  </div>
                </div>

                {/* House Rules */}
                <div className="bg-white border border-neutral-200 p-3 rounded-2xl space-y-1.5 shadow-sm">
                  <span className="text-[10px] font-bold text-neutral-900 block">
                    House Rules
                  </span>
                  <ul className="text-[10px] text-neutral-600 space-y-1">
                    <li>• Free lockers under each bed (bring lock or rent below)</li>
                    <li>• No outside alcoholic drinks in common pool area</li>
                    <li>• Free coffee and tea at reception all day</li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB: SERVICE */}
            {activeTab === 'service' && (
              <div className="space-y-3 animate-in fade-in duration-150">
                <div className="text-[11px] font-bold text-[#FF5533]">
                  BOOK FROM YOUR BED
                </div>

                {/* Laundry Service */}
                <div className="bg-white border border-neutral-200 p-3 rounded-2xl flex items-center justify-between shadow-sm">
                  <div>
                    <div className="font-bold text-xs">Hostel Laundry Service</div>
                    <div className="text-[10px] text-neutral-500">
                      70 baht / kilo • Clean & folded by 2pm tomorrow
                    </div>
                  </div>
                  <button
                    onClick={() => setServiceOrdered('Laundry requested!')}
                    className="px-2.5 py-1 bg-[#141414] text-white rounded-lg text-[10px] font-bold hover:bg-black transition-colors"
                  >
                    Request
                  </button>
                </div>

                {/* Scooter Rental */}
                <div className="bg-white border border-neutral-200 p-3 rounded-2xl flex items-center justify-between shadow-sm">
                  <div>
                    <div className="font-bold text-xs">Scooter 125cc</div>
                    <div className="text-[10px] text-neutral-500">
                      200 baht / day • 2 helmets & phone mount included
                    </div>
                  </div>
                  <button
                    onClick={() => setServiceOrdered('Scooter reserved!')}
                    className="px-2.5 py-1 bg-[#141414] text-white rounded-lg text-[10px] font-bold hover:bg-black transition-colors"
                  >
                    Reserve
                  </button>
                </div>

                {/* Fresh Towel & Lock */}
                <div className="bg-white border border-neutral-200 p-3 rounded-2xl flex items-center justify-between shadow-sm">
                  <div>
                    <div className="font-bold text-xs">Fresh Towel / Heavy Lock</div>
                    <div className="text-[10px] text-neutral-500">
                      50 baht each • Pick up at reception desk
                    </div>
                  </div>
                  <button
                    onClick={() => setServiceOrdered('Towel ready at desk!')}
                    className="px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded-lg text-[10px] font-bold hover:bg-neutral-200 transition-colors"
                  >
                    Rent
                  </button>
                </div>

                {serviceOrdered && (
                  <div className="p-2.5 bg-emerald-100 border border-emerald-300 rounded-xl text-[10px] text-emerald-800 font-bold flex items-center justify-between">
                    <span>✓ {serviceOrdered}</span>
                    <button
                      onClick={() => setServiceOrdered(null)}
                      className="text-emerald-900"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* TAB: EXPLORE */}
            {activeTab === 'explore' && (
              <div className="space-y-3 animate-in fade-in duration-150">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#FF5533]">
                    CURATED BY STAFF
                  </span>
                  <div className="flex gap-1 text-[9px] font-bold">
                    <button
                      onClick={() => setExploreFilter('all')}
                      className={`px-2 py-0.5 rounded-full ${
                        exploreFilter === 'all'
                          ? 'bg-[#141414] text-white'
                          : 'bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      all
                    </button>
                    <button
                      onClick={() => setExploreFilter('food')}
                      className={`px-2 py-0.5 rounded-full ${
                        exploreFilter === 'food'
                          ? 'bg-[#141414] text-white'
                          : 'bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      food
                    </button>
                    <button
                      onClick={() => setExploreFilter('spots')}
                      className={`px-2 py-0.5 rounded-full ${
                        exploreFilter === 'spots'
                          ? 'bg-[#141414] text-white'
                          : 'bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      spots
                    </button>
                  </div>
                </div>

                {/* Spot 1 */}
                {(exploreFilter === 'all' || exploreFilter === 'spots') && (
                  <div className="bg-white border border-neutral-200 p-2.5 rounded-xl space-y-1">
                    <div className="flex items-center justify-between font-bold text-xs">
                      <span>Pai Canyon Viewpoint</span>
                      <span className="text-[9px] text-neutral-400">15 min scooter</span>
                    </div>
                    <p className="text-[10px] text-neutral-600">
                      Unreal 360-degree sunset over the valley. Go 1 hour before sunset to find a perch on the ridge.
                    </p>
                  </div>
                )}

                {/* Spot 2 */}
                {(exploreFilter === 'all' || exploreFilter === 'food') && (
                  <div className="bg-white border border-neutral-200 p-2.5 rounded-xl space-y-1">
                    <div className="flex items-center justify-between font-bold text-xs">
                      <span>Grandma's Khao Soi stall</span>
                      <span className="text-[9px] text-neutral-400">4 min walk</span>
                    </div>
                    <p className="text-[10px] text-neutral-600">
                      The best curry noodle bowl in town for 45 baht. Order with lime and crispy chili.
                    </p>
                  </div>
                )}

                {/* Spot 3 */}
                {(exploreFilter === 'all' || exploreFilter === 'spots') && (
                  <div className="bg-white border border-neutral-200 p-2.5 rounded-xl space-y-1">
                    <div className="flex items-center justify-between font-bold text-xs">
                      <span>Secret Hot Springs</span>
                      <span className="text-[9px] text-neutral-400">25 min drive</span>
                    </div>
                    <p className="text-[10px] text-neutral-600">
                      Natural mineral pools shaded by bamboo forest. Go early morning before the tour vans arrive.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Message Reception Button */}
          <div className="p-3 bg-white border-t border-neutral-200 space-y-2">
            {!messageOpen ? (
              <button
                onClick={() => setMessageOpen(true)}
                className="w-full py-2 bg-[#FF5533]/10 hover:bg-[#FF5533]/20 border border-[#FF5533]/30 rounded-xl text-center text-xs font-bold text-[#FF5533] flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                message reception desk
              </button>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    placeholder="Ask reception (e.g. need extra blanket)..."
                    value={guestMessage}
                    onChange={(e) => setGuestMessage(e.target.value)}
                    className="flex-1 text-xs px-2.5 py-1.5 bg-neutral-100 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#FF5533]"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="p-1.5 bg-[#141414] text-white rounded-lg hover:bg-black"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setMessageOpen(false)}
                    className="p-1.5 text-neutral-500"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                {messageSent && (
                  <div className="text-[10px] text-emerald-600 font-bold">
                    ✓ Sent to reception WhatsApp!
                  </div>
                )}
              </form>
            )}

            {/* Bottom 4 Navigation Tabs */}
            <div className="grid grid-cols-4 gap-1 text-[9px] font-bold text-center pt-1.5 border-t border-neutral-100">
              <button
                onClick={() => setActiveTab('today')}
                className={`py-1 rounded-lg transition-colors flex flex-col items-center gap-0.5 ${
                  activeTab === 'today'
                    ? 'text-[#FF5533] font-black'
                    : 'text-neutral-400 hover:text-neutral-700'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>today</span>
              </button>
              <button
                onClick={() => setActiveTab('stay')}
                className={`py-1 rounded-lg transition-colors flex flex-col items-center gap-0.5 ${
                  activeTab === 'stay'
                    ? 'text-[#FF5533] font-black'
                    : 'text-neutral-400 hover:text-neutral-700'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>stay</span>
              </button>
              <button
                onClick={() => setActiveTab('service')}
                className={`py-1 rounded-lg transition-colors flex flex-col items-center gap-0.5 ${
                  activeTab === 'service'
                    ? 'text-[#FF5533] font-black'
                    : 'text-neutral-400 hover:text-neutral-700'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>service</span>
              </button>
              <button
                onClick={() => setActiveTab('explore')}
                className={`py-1 rounded-lg transition-colors flex flex-col items-center gap-0.5 ${
                  activeTab === 'explore'
                    ? 'text-[#FF5533] font-black'
                    : 'text-neutral-400 hover:text-neutral-700'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>explore</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
