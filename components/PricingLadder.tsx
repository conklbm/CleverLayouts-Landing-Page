import React, { useState } from 'react';
import { Lock, CheckCircle2, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
import { PricingTier } from '../types';

const INITIAL_TIERS: PricingTier[] = [
  { level: 1, price: 9.99, status: 'active', slotsRemaining: 3, totalSlots: 50 },
  { level: 2, price: 19.00, status: 'locked' },
  { level: 3, price: 29.00, status: 'locked' },
  { level: 4, price: 49.00, status: 'locked' },
  { level: 5, price: 79.00, status: 'locked' },
  { level: 6, price: 99.00, status: 'locked' },
];

const PricingLadder: React.FC = () => {
  const [tiers] = useState<PricingTier[]>(INITIAL_TIERS);

  return (
    <div className="w-full max-w-md mx-auto bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 relative">
      {/* Header */}
      <div className="p-6 bg-slate-50 border-b border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-brand-600" />
          Early Bird Pricing
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          Price increases automatically as slots fill.
        </p>
      </div>

      {/* Tiers */}
      <div className="divide-y divide-slate-100">
        {tiers.map((tier) => (
          <div 
            key={tier.level}
            className={`p-4 flex items-center justify-between transition-all duration-300 ${
              tier.status === 'active' 
                ? 'bg-brand-50/50 relative overflow-hidden' 
                : tier.status === 'sold_out' 
                  ? 'bg-slate-50 opacity-60 grayscale'
                  : 'bg-white'
            }`}
          >
            {tier.status === 'active' && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-500"></div>
            )}

            <div className="flex items-center gap-4 z-10">
              {/* Level Indicator */}
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                ${tier.status === 'active' 
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' 
                  : 'bg-slate-100 text-slate-400'}
              `}>
                {tier.status === 'sold_out' ? <CheckCircle2 className="h-5 w-5" /> : tier.level}
              </div>

              {/* Price Details */}
              <div className="flex flex-col">
                <span className={`text-lg font-bold ${tier.status === 'active' ? 'text-slate-900' : 'text-slate-400'}`}>
                  ${tier.price.toFixed(2)}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  Level {tier.level}
                </span>
              </div>
            </div>

            {/* Status Status */}
            <div className="text-right z-10">
              {tier.status === 'active' && (
                <div className="flex flex-col items-end">
                   <div className="flex items-center gap-1 text-brand-600 text-xs font-bold mb-1 animate-pulse">
                    <AlertCircle className="h-3 w-3" />
                    Selling Fast
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    <span className="text-slate-900 font-bold">{tier.slotsRemaining}</span> left
                  </div>
                </div>
              )}
              {tier.status === 'locked' && (
                <div className="flex items-center gap-1 text-slate-300">
                  <Lock className="h-4 w-4" />
                </div>
              )}
              {tier.status === 'sold_out' && (
                <span className="text-xs font-bold text-slate-400">SOLD</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Sticky CTA */}
      <div className="p-6 bg-white border-t border-slate-100">
        <button className="group w-full py-4 px-6 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-brand-500/20 flex items-center justify-center gap-2">
          Claim Spot for $9.99
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-center text-xs text-slate-400 mt-3 font-medium">
          30-day money-back guarantee. No risk.
        </p>
      </div>
    </div>
  );
};

export default PricingLadder;