import React, { useState } from 'react';
import { Lock, CheckCircle2, TrendingUp, AlertCircle, ArrowRight, Check } from 'lucide-react';
import { PricingTier } from '../types';

const INITIAL_TIERS: PricingTier[] = [
  { level: 1, price: 9.99, status: 'sold-out', slotsRemaining: 0, totalSlots: 50 },
  { level: 2, price: 19.00, status: 'active', slotsRemaining: 50, totalSlots: 50 },
  { level: 3, price: 29.00, status: 'locked' },
  { level: 4, price: 49.00, status: 'locked' },
  { level: 5, price: 79.00, status: 'locked' },
  { level: 6, price: 99.00, status: 'locked' },
];

const PricingLadder: React.FC = () => {
  const [tiers] = useState<PricingTier[]>(INITIAL_TIERS);
  const activeTier = tiers.find(t => t.status === 'active');
  const soldOutTier = tiers.find(t => t.status === 'sold-out');

  return (
    <div className="w-full max-w-lg mx-auto bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-xl relative">
      {/* Header */}
      <div className="p-8 text-center border-b border-slate-100">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Secure your audit before the price jumps.
        </h2>
        <p className="text-slate-600 text-sm">
          Price increases automatically as slots fill.
        </p>
      </div>

      {/* Sold Out Tier */}
      {soldOutTier && (
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold mb-2">
              SOLD OUT
            </div>
            <div className="relative inline-block">
              <div className="text-4xl font-extrabold text-slate-400 mb-1 relative">
                ${soldOutTier.price.toFixed(2)}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-red-500 transform -rotate-6"></div>
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium">Level {soldOutTier.level} • All slots claimed</p>
          </div>
        </div>
      )}

      {/* Current Price - Featured */}
      {activeTier && (
        <div className="p-8 bg-gradient-to-br from-brand-50 to-white">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold mb-3">
              <AlertCircle className="h-3 w-3" />
              {activeTier.slotsRemaining} spots left at this price
            </div>
            <div className="text-6xl font-extrabold text-slate-900 mb-2">
              ${activeTier.price.toFixed(2)}
            </div>
            <p className="text-slate-600 font-medium">Current Price • Level {activeTier.level}</p>
          </div>

          <a href="https://full-time-side-hustler.thrivecart.com/landing-page-analysis-report/" target="_blank" rel="noopener noreferrer" className="w-full py-4 px-6 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-brand-500/30 flex items-center justify-center gap-2 text-lg mb-6">
            Get My Audit Now
            <ArrowRight className="h-5 w-5" />
          </a>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <Check className="h-4 w-4 text-brand-600 flex-shrink-0" />
              <span>Annotated screenshots with visual markup</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Check className="h-4 w-4 text-brand-600 flex-shrink-0" />
              <span>9+ prioritized fixes with impact ratings</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Check className="h-4 w-4 text-brand-600 flex-shrink-0" />
              <span>Delivered in 48 hours or less</span>
            </div>
          </div>
        </div>
      )}

      {/* Future Price Levels */}
      <div className="p-6 bg-slate-50 border-t border-slate-200">
        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3 text-center">
          Future Pricing Levels
        </p>
        <div className="space-y-2">
          {tiers.filter(t => t.status === 'locked').map((tier) => (
            <div
              key={tier.level}
              className="flex items-center justify-between py-2 px-3 bg-white rounded-lg border border-slate-200 opacity-60"
            >
              <div className="flex items-center gap-3">
                <Lock className="h-4 w-4 text-slate-400" />
                <span className="text-sm font-medium text-slate-500">
                  Level {tier.level}
                </span>
              </div>
              <span className="text-sm font-bold text-slate-400">
                ${tier.price.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantee */}
      <div className="p-4 bg-white border-t border-slate-200">
        <p className="text-center text-xs text-slate-500 font-medium">
          Not satisfied? I'll donate 110% of your purchase to the non-profit of your choice.
        </p>
      </div>
    </div>
  );
};

export default PricingLadder;