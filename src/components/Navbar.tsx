import React, { useState } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenStart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenStart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-baseline group select-none">
          <span className="text-3xl font-extrabold tracking-tight text-[#141414] font-sans">
            helio
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5533] ml-0.5 inline-block group-hover:scale-125 transition-transform" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#4A4A4A]">
          <a
            href="#what-goes-in"
            className="hover:text-[#141414] transition-colors"
          >
            what guests see
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#141414] transition-colors"
          >
            how it works
          </a>
          <a
            href="#pricing"
            className="hover:text-[#141414] transition-colors"
          >
            pricing
          </a>
          <a
            href="#questions"
            className="hover:text-[#141414] transition-colors"
          >
            questions
          </a>
          <button
            onClick={onOpenDemo}
            className="text-[#FF5533] hover:text-[#E04424] font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Smartphone className="w-4 h-4" />
            live demo
          </button>
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenStart}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#141414] text-[#FAF8F5] text-sm font-semibold rounded-full hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
          >
            <span>get started</span>
            <span className="w-2 h-2 rounded-full bg-[#FF5533]" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenStart}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#141414] text-[#FAF8F5] text-xs font-semibold rounded-full hover:bg-black transition-all"
          >
            <span>start free</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5533]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-[#141414] hover:bg-black/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-neutral-200 px-6 py-6 space-y-4 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-4 text-base font-semibold text-[#141414]">
            <a
              href="#what-goes-in"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF5533] transition-colors"
            >
              what guests see
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF5533] transition-colors"
            >
              how it works
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF5533] transition-colors"
            >
              pricing
            </a>
            <a
              href="#questions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF5533] transition-colors"
            >
              questions
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="py-1 text-left text-[#FF5533] font-semibold flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              open live guide preview
            </button>
          </div>
          <div className="pt-4 border-t border-neutral-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStart();
              }}
              className="w-full py-3.5 bg-[#141414] text-[#FAF8F5] font-semibold text-sm rounded-full flex items-center justify-center gap-2"
            >
              <span>get started</span>
              <span className="w-2 h-2 rounded-full bg-[#FF5533]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
