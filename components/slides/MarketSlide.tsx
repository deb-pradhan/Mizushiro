import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, DataHuge, Label, Body } from "../Typography";

export const MarketSlide = () => {
  return (
    <SlideSection id="market">
      <div className="mb-8">
        <Label className="mb-2 tracking-[0.2em] text-accent-main">THE OPPORTUNITY</Label>
        <DisplayHeader>Two markets. One platform. $19 Trillion.</DisplayHeader>
      </div>

      <BentoGrid>
         {/* Market 1: Crypto Long Tail */}
         <BentoCell className="col-span-12 md:col-span-4 bg-accent-subtle/50 border-l-4 border-l-accent-main">
            <div className="h-full flex flex-col">
               <Label className="mb-2 text-accent-main">MARKET 1: TODAY</Label>
               <div className="text-5xl md:text-7xl font-medium tracking-tighter mb-4 text-accent-main" style={{ textShadow: '0 0 40px rgba(155, 28, 28, 0.4)' }}>$3T</div>
               <DataHuge className="block mb-4">Crypto Long-Tail</DataHuge>
               <Body className="mb-8 text-sm">
                 Small and mid-cap tokens with zero lending access. PYTH, JUP, WIF, and thousands more.
               </Body>
               <div className="mt-auto pt-4 border-t border-accent-main">
                 <div className="text-xs text-ink-secondary mb-1">CURRENT PENETRATION</div>
                 <div className="font-medium text-lg text-accent-main">~0% (Greenfield)</div>
               </div>
            </div>
         </BentoCell>
         
         {/* Market 2: RWA */}
         <BentoCell className="col-span-12 md:col-span-4 bg-surface-card">
            <Label className="text-ink-secondary mb-2">MARKET 2: 2030</Label>
            <div className="text-5xl md:text-7xl font-medium tracking-tighter mb-4 text-ink-tertiary">$16T</div>
            <DataHuge className="block mb-4">Real World Assets</DataHuge>
            <Body className="mb-8 text-sm">
              Tokenized stocks, bonds, real estate. As they move on-chain, they need lending infrastructure too.
            </Body>
            <div className="mt-auto pt-4 border-t border-border-grid">
              <div className="text-xs text-ink-secondary mb-1">PROJECTED BY 2030</div>
              <div className="font-medium text-lg text-ink-primary">$10T+ on-chain (BCG)</div>
            </div>
         </BentoCell>
         
         {/* Visual */}
         <BentoCell className="col-span-12 md:col-span-4 bg-surface-subtle flex flex-col justify-center items-center">
            <CardHeader title="MIZUSHIRO'S COMBINED TAM" />
            <div className="flex-1 flex items-center justify-center py-8">
               <div className="relative w-64 h-48 flex items-center justify-center">
                  <div className="absolute left-4 top-4 w-32 h-32 rounded-full border-4 border-accent-main bg-accent-main flex items-center justify-center z-10 shadow-[0_0_40px_rgba(155,28,28,0.6)]">
                     <span className="text-ink-on-accent font-medium text-xl">$3T</span>
                  </div>
                  <div className="absolute right-0 bottom-0 w-40 h-40 rounded-full border-2 border-dashed border-ink-tertiary bg-surface-card flex items-center justify-center z-0 opacity-60">
                     <span className="font-medium text-2xl text-ink-secondary">$16T</span>
                  </div>
               </div>
            </div>
            <div className="text-center mt-4">
               <div className="text-5xl font-medium text-accent-main tracking-tighter" style={{ textShadow: '0 0 30px rgba(155, 28, 28, 0.4)' }}>$19T</div>
               <Label className="mt-2">Combined Addressable Market</Label>
            </div>
         </BentoCell>
         
         {/* Growth drivers */}
         <BentoCell className="col-span-12 bg-surface-card">
            <CardHeader title="WHY THIS GROWS" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
               <div className="group hover:bg-accent-subtle/30 p-4 -m-4 transition-colors">
                  <div className="w-2 h-2 bg-accent-main mb-3"></div>
                  <div className="font-medium text-ink-primary mb-1 text-lg group-hover:text-accent-main transition-colors">DeFi Adoption</div>
                  <p className="text-xs text-ink-secondary uppercase tracking-wide">TVL grows with crypto adoption</p>
               </div>
               <div className="group hover:bg-accent-subtle/30 p-4 -m-4 transition-colors">
                  <div className="w-2 h-2 bg-accent-main mb-3"></div>
                  <div className="font-medium text-ink-primary mb-1 text-lg group-hover:text-accent-main transition-colors">RWA Tokenization</div>
                  <p className="text-xs text-ink-secondary uppercase tracking-wide">$10T+ projected by 2030</p>
               </div>
               <div className="group hover:bg-accent-subtle/30 p-4 -m-4 transition-colors">
                  <div className="w-2 h-2 bg-accent-main mb-3"></div>
                  <div className="font-medium text-ink-primary mb-1 text-lg group-hover:text-accent-main transition-colors">Long-Tail Growth</div>
                  <p className="text-xs text-ink-secondary uppercase tracking-wide">Small caps &gt; blue chips</p>
               </div>
               <div className="group hover:bg-accent-subtle/30 p-4 -m-4 transition-colors">
                  <div className="w-2 h-2 bg-accent-main mb-3"></div>
                  <div className="font-medium text-ink-primary mb-1 text-lg group-hover:text-accent-main transition-colors">Institutional Demand</div>
                  <p className="text-xs text-ink-secondary uppercase tracking-wide">Yield product interest</p>
               </div>
            </div>
         </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};
