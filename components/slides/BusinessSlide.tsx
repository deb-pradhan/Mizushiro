import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, Label, DataHuge, Body } from "../Typography";

export const BusinessSlide = () => {
  return (
    <SlideSection id="business">
      <div className="mb-8">
        <Label className="mb-2 tracking-[0.2em]">BUSINESS MODEL</Label>
        <DisplayHeader>Capturing spreads on high-demand, underserved assets.</DisplayHeader>
      </div>
      
      <BentoGrid>
        {/* Revenue Streams */}
        <BentoCell className="col-span-12 md:col-span-6 bg-white">
           <CardHeader title="REVENUE STREAMS" />
           <div className="mt-8 space-y-8">
             <div className="flex gap-4 items-start">
               <div className="w-12 h-12 bg-ink-primary text-white flex items-center justify-center font-bold text-lg shrink-0">1</div>
               <div>
                 <h3 className="font-bold text-xl mb-2">Interest Rate Spread</h3>
                 <Body className="text-sm">Protocol fee on all interest paid. Standard DeFi model, but on high-demand long-tail assets.</Body>
               </div>
             </div>
             <div className="flex gap-4 items-start">
               <div className="w-12 h-12 bg-ink-secondary text-white flex items-center justify-center font-bold text-lg shrink-0">2</div>
               <div>
                 <h3 className="font-bold text-xl mb-2">Liquidation Fees</h3>
                 <Body className="text-sm">Revenue from maintaining protocol health. Higher volatility = more liquidations.</Body>
               </div>
             </div>
             <div className="flex gap-4 items-start">
               <div className="w-12 h-12 bg-ink-tertiary text-white flex items-center justify-center font-bold text-lg shrink-0">3</div>
               <div>
                 <h3 className="font-bold text-xl mb-2">Premium Yield Vaults</h3>
                 <Body className="text-sm">One-click strategy products with performance fees.</Body>
               </div>
             </div>
           </div>
        </BentoCell>
        
        {/* Flywheel */}
        <BentoCell className="col-span-12 md:col-span-6 bg-surface-base relative overflow-hidden">
           <div className="h-full flex flex-col justify-center">
              <Label className="mb-4">THE FLYWHEEL</Label>
              <DataHuge className="block mb-8">Why Long-Tail = Higher Margins</DataHuge>
              
              <div className="space-y-6 mb-8 pl-2">
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-ink-tertiary">→</span>
                  <span className="text-ink-primary text-lg">Support trending token early</span>
                </div>
                <div className="flex items-center gap-4 pl-4">
                  <span className="text-2xl text-ink-tertiary">→</span>
                  <span className="text-ink-primary text-lg">Capture extreme borrow demand (45k% APY)</span>
                </div>
                <div className="flex items-center gap-4 pl-8">
                  <span className="text-2xl text-ink-tertiary">→</span>
                  <span className="text-ink-primary text-lg">Attract organic TVL from traders</span>
                </div>
                <div className="flex items-center gap-4 pl-12">
                  <span className="text-2xl text-ink-tertiary">→</span>
                  <span className="text-ink-primary text-lg">Community markets us for free</span>
                </div>
              </div>
              
              <div className="pt-6 border-t border-border-grid">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-ink-secondary mb-1">CAC</div>
                    <div className="font-bold text-ink-primary text-xl">Near Zero</div>
                    <div className="text-ink-secondary text-xs mt-1">Viral community growth</div>
                  </div>
                  <div>
                    <div className="text-ink-secondary mb-1">LTV</div>
                    <div className="font-bold text-ink-primary text-xl">High</div>
                    <div className="text-ink-secondary text-xs mt-1">Depositors compound for years</div>
                  </div>
                </div>
              </div>
           </div>
        </BentoCell>
        
        {/* Bottom: Why we win */}
        <BentoCell className="col-span-12 bg-surface-base">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <Label className="text-ink-primary font-bold mb-2">THE ADVANTAGE</Label>
              <Body>Long-tail assets have higher volatility = higher borrow rates = higher protocol revenue. Plus, we're first.</Body>
            </div>
            <div className="flex gap-12 text-center border-l border-border-grid pl-8">
              <div>
                <div className="text-3xl font-bold text-ink-primary mb-1">~5%</div>
                <div className="text-xs text-ink-secondary uppercase tracking-wider">Typical Aave rates</div>
              </div>
              <div className="text-ink-tertiary self-center text-xl">vs</div>
              <div>
                <div className="text-3xl font-bold text-ink-primary mb-1">100%+</div>
                <div className="text-xs text-ink-secondary uppercase tracking-wider">Long-tail rates</div>
              </div>
            </div>
          </div>
        </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};

