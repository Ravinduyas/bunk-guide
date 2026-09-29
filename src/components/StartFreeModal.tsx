import React, { useState } from 'react';
import { X, Check, QrCode, ArrowRight, Printer, Sparkles, Building, Wifi, Palette } from 'lucide-react';

interface StartFreeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemoWithName?: (name: string) => void;
}

export const StartFreeModal: React.FC<StartFreeModalProps> = ({
  isOpen,
  onClose,
  onOpenDemoWithName,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [houseName, setHouseName] = useState('Sunset Surf House');
  const [bedCount, setBedCount] = useState(24);
  const [city, setCity] = useState('Ericeira, Portugal');
  const [brandColor, setBrandColor] = useState('#FF5533');
  const [wifiSsid, setWifiSsid] = useState('SunsetSurf_Guest');
  const [wifiPass, setWifiPass] = useState('aloha2026');

  if (!isOpen) return null;

  const colorPresets = [
    { label: 'Helio Coral', value: '#FF5533' },
    { label: 'Ocean Teal', value: '#0D9488' },
    { label: 'Cobalt Surf', value: '#0284C7' },
    { label: 'Earth Ochre', value: '#B45309' },
    { label: 'Jungle Olive', value: '#4D7C0F' },
    { label: 'Midnight', value: '#141414' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] text-neutral-900 rounded-[36px] border border-neutral-300 shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close setup modal"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-300 text-neutral-700 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black">helio</span>
            <span className="w-2 h-2 rounded-full bg-[#FF5533]" />
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider ml-1">
              Step {step} of 3
            </span>
          </div>
          <h3 className="text-2xl font-black text-[#141414]">
            {step === 1 && 'Set up your house in 10 minutes.'}
            {step === 2 && 'Pick your colours & WiFi.'}
            {step === 3 && 'Your guide is ready!'}
          </h3>
        </div>

        {/* Step Indicator Progress Bar */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className={`h-1.5 rounded-full ${step >= 1 ? 'bg-[#FF5533]' : 'bg-neutral-200'}`} />
          <div className={`h-1.5 rounded-full ${step >= 2 ? 'bg-[#FF5533]' : 'bg-neutral-200'}`} />
          <div className={`h-1.5 rounded-full ${step >= 3 ? 'bg-[#FF5533]' : 'bg-neutral-200'}`} />
        </div>

        {/* STEP 1: Basic Information */}
        {step === 1 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(2);
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                Hostel, Camp, or Retreat Name
              </label>
              <input
                type="text"
                required
                value={houseName}
                onChange={(e) => setHouseName(e.target.value)}
                placeholder="e.g. Mad Monkey, Driftwood Surf Camp..."
                className="w-full text-sm font-semibold px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:border-[#FF5533]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                  Number of Beds
                </label>
                <input
                  type="number"
                  min="4"
                  max="500"
                  value={bedCount}
                  onChange={(e) => setBedCount(Number(e.target.value))}
                  className="w-full text-sm font-semibold px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:border-[#FF5533]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                  Location / City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Lisbon, Portugal"
                  className="w-full text-sm font-semibold px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:border-[#FF5533]"
                />
              </div>
            </div>

            <div className="p-3 bg-white border border-neutral-200 rounded-xl text-xs text-neutral-600 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF5533] shrink-0" />
              <span>Fourteen days completely free. No credit card required.</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#141414] text-white font-bold text-sm rounded-full flex items-center justify-center gap-2 hover:bg-black transition-all shadow-md"
              >
                <span>continue to colours & wifi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Branding & WiFi */}
        {step === 2 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(3);
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs font-bold text-neutral-700 block mb-2">
                Brand Accent Colour
              </label>
              <div className="flex flex-wrap gap-2">
                {colorPresets.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setBrandColor(c.value)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all ${
                      brandColor === c.value
                        ? 'border-[#141414] scale-110 shadow-md'
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.value }}
                    title={c.label}
                  >
                    {brandColor === c.value && <Check className="w-4 h-4 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                  Guest WiFi Name
                </label>
                <input
                  type="text"
                  value={wifiSsid}
                  onChange={(e) => setWifiSsid(e.target.value)}
                  className="w-full text-sm font-semibold px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:border-[#FF5533]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                  WiFi Password
                </label>
                <input
                  type="text"
                  value={wifiPass}
                  onChange={(e) => setWifiPass(e.target.value)}
                  className="w-full text-sm font-semibold px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:border-[#FF5533]"
                />
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3 px-5 border border-neutral-300 font-bold text-xs rounded-full hover:bg-neutral-200 transition-colors"
              >
                back
              </button>
              <button
                type="submit"
                className="flex-1 py-3.5 bg-[#141414] text-white font-bold text-sm rounded-full flex items-center justify-center gap-2 hover:bg-black transition-all shadow-md"
              >
                <span>generate my guide & QR code</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Complete / QR Code Ready */}
        {step === 3 && (
          <div className="space-y-5 text-center">
            {/* Printable Bed Sticker Mockup */}
            <div className="bg-white border-2 border-dashed border-neutral-300 p-6 rounded-3xl shadow-sm max-w-xs mx-auto space-y-3">
              <div className="flex items-center justify-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: brandColor }} />
                <span className="font-extrabold text-sm text-[#141414]">
                  {houseName}
                </span>
              </div>

              {/* QR Code graphic */}
              <div className="w-36 h-36 mx-auto bg-neutral-900 p-3 rounded-2xl flex items-center justify-center text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full text-white"
                >
                  <rect width="6" height="6" x="3" y="3" rx="1" fill="white" />
                  <rect width="6" height="6" x="15" y="3" rx="1" fill="white" />
                  <rect width="6" height="6" x="3" y="15" rx="1" fill="white" />
                  <path d="M15 15h2v2h-2z" fill="white" />
                  <path d="M19 15h2v2h-2z" fill="white" />
                  <path d="M15 19h2v2h-2z" fill="white" />
                  <path d="M19 19h2v2h-2z" fill="white" />
                  <path d="M9 3v4" stroke="currentColor" />
                  <path d="M9 17v4" stroke="currentColor" />
                  <path d="M3 9h4" stroke="currentColor" />
                  <path d="M17 9h4" stroke="currentColor" />
                </svg>
              </div>

              <div className="text-[11px] font-bold text-neutral-700">
                Scan with your phone camera
              </div>
              <div className="text-[10px] text-neutral-400 font-mono">
                wifi: {wifiSsid}
              </div>
            </div>

            <p className="text-xs text-neutral-500 font-medium">
              Stickers ready for printing. Place one on every bed frame or dorm room door.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  window.print();
                }}
                className="flex-1 py-3 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 font-bold text-xs rounded-full flex items-center justify-center gap-1.5 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>print bed sheets</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  if (onOpenDemoWithName) {
                    onOpenDemoWithName(houseName);
                  }
                }}
                className="flex-1 py-3 bg-[#141414] hover:bg-black text-white font-bold text-xs rounded-full flex items-center justify-center gap-1.5 transition-colors shadow-md"
              >
                <span>launch live demo guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
