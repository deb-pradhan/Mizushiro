import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, DataHuge, Label, Body } from "../Typography";

export const MarketSlide = () => {
  return (
    <SlideSection id="market">
      <div className="mb-8">
        <Label className="mb-2 tracking-[0.2em]">THE OPPORTUNITY</Label>
        <DisplayHeader>Two markets. One platform. $19 Trillion.</DisplayHeader>
      </div>

      <BentoGrid>
         {/* Market 1: Crypto Long Tail */}
         <BentoCell className="col-span-12 md:col-span-4 bg-surface-base">
            <div className="h-full flex flex-col">
               <Label className="mb-2">MARKET 1: TODAY</Label>
               <div className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-ink-primary">$3T</div>
               <DataHuge className="block mb-4">Crypto Long-Tail</DataHuge>
               <Body className="mb-8 text-sm">
                 Small and mid-cap tokens with zero lending access. PYTH, JUP, WIF, and thousands more.
               </Body>
               <div className="mt-auto pt-4 border-t border-border-grid">
                 <div className="text-xs text-ink-secondary mb-1">CURRENT PENETRATION</div>
                 <div className="font-bold text-lg text-ink-primary">~0% (Greenfield)</div>
               </div>
            </div>
         </BentoCell>
         
         {/* Market 2: RWA */}
         <BentoCell className="col-span-12 md:col-span-4 bg-white">
            <Label className="text-ink-secondary mb-2">MARKET 2: 2030</Label>
            <div className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-ink-primary opacity-30">$16T</div>
            <DataHuge className="block mb-4">Real World Assets</DataHuge>
            <Body className="mb-8 text-sm">
              Tokenized stocks, bonds, real estate. As they move on-chain, they need lending infrastructure too.
            </Body>
            <div className="mt-auto pt-4 border-t border-border-grid">
              <div className="text-xs text-ink-secondary mb-1">PROJECTED BY 2030</div>
              <div className="font-bold text-lg text-ink-primary">$10T+ on-chain (BCG)</div>
            </div>
         </BentoCell>
         
         {/* Visual */}
         <BentoCell className="col-span-12 md:col-span-4 bg-surface-base flex flex-col justify-center items-center">
            <CardHeader title="COMBINED TAM" />
            <div className="flex-1 flex items-center justify-center py-8">
               <div className="relative w-64 h-48 flex items-center justify-center">
                  <div className="absolute left-4 top-4 w-32 h-32 rounded-full border-2 border-ink-primary bg-ink-primary flex items-center justify-center z-10 shadow-xl">
                     <span className="text-white font-bold text-xl">$3T</span>
                  </div>
                  <div className="absolute right-0 bottom-0 w-40 h-40 rounded-full border-2 border-dashed border-ink-secondary bg-white flex items-center justify-center z-0 opacity-60">
                     <span className="font-bold text-2xl text-ink-secondary">$16T</span>
                  </div>
               </div>
            </div>
            <div className="text-center mt-4">
               <div className="text-5xl font-bold text-ink-primary tracking-tighter">$19T</div>
               <Label className="mt-2">Combined Addressable Market</Label>
            </div>
         </BentoCell>
         
         {/* Growth drivers */}
         <BentoCell className="col-span-12 bg-white">
            <CardHeader title="WHY THIS GROWS" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
               <div>
                  <div className="font-bold text-ink-primary mb-1 text-lg">DeFi Adoption</div>
                  <p className="text-xs text-ink-secondary uppercase tracking-wide">TVL grows with crypto adoption</p>
               </div>
               <div>
                  <div className="font-bold text-ink-primary mb-1 text-lg">RWA Tokenization</div>
                  <p className="text-xs text-ink-secondary uppercase tracking-wide">$10T+ projected by 2030</p>
               </div>
               <div>
                  <div className="font-bold text-ink-primary mb-1 text-lg">Long-Tail Growth</div>
                  <p className="text-xs text-ink-secondary uppercase tracking-wide">Small caps &gt; blue chips</p>
               </div>
               <div>
                  <div className="font-bold text-ink-primary mb-1 text-lg">Institutional Demand</div>
                  <p className="text-xs text-ink-secondary uppercase tracking-wide">Yield product interest</p>
               </div>
            </div>
         </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};

