import React from 'react';

interface FooterProps {
  onOpenDemo: () => void;
  onOpenStart: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onOpenStart }) => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE6DF] py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-8">
        {/* Top Navigation Row */}
        <div className="flex flex-wrap items-center justify-start gap-x-8 gap-y-3 text-sm font-semibold text-[#141414]">
          <a
            href="#what-goes-in"
            className="hover:text-[#FF5533] transition-colors"
          >
            what guests see
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#FF5533] transition-colors"
          >
            how it works
          </a>
          <a
            href="#pricing"
            className="hover:text-[#FF5533] transition-colors"
          >
            pricing
          </a>
          <a
            href="#questions"
            className="hover:text-[#FF5533] transition-colors"
          >
            questions
          </a>
          <button
            onClick={onOpenDemo}
            className="hover:text-[#FF5533] transition-colors font-bold text-left"
          >
            open guide
          </button>
          <button
            onClick={onOpenStart}
            className="hover:text-[#FF5533] transition-colors font-bold text-left"
          >
            log in
          </button>
        </div>

        {/* Bottom Metadata & Legal Links Row */}
        <div className="flex flex-wrap items-center justify-between gap-y-4 pt-6 border-t border-[#EAE6DF] text-xs font-medium text-[#7A7A7A]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#imprint" className="hover:text-[#141414] transition-colors">
              imprint
            </a>
            <a href="#privacy" className="hover:text-[#141414] transition-colors">
              privacy
            </a>
            <a href="#terms" className="hover:text-[#141414] transition-colors">
              terms
            </a>
            <a href="#refunds" className="hover:text-[#141414] transition-colors">
              refunds
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#141414] transition-colors"
            >
              instagram
            </a>
            <a
              href="mailto:contact@helio.app"
              className="hover:text-[#141414] transition-colors"
            >
              contact@helio.app
            </a>
          </div>

          <div className="text-[#8A8A8A] font-medium">
            © 2026 Helio
          </div>
        </div>
      </div>
    </footer>
  );
};
