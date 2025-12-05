import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, Label, DataLarge, Body } from "../Typography";

export const SolutionSlide = () => {
  return (
    <SlideSection id="solution">
      <div className="mb-8">
        <Label className="mb-2 tracking-[0.2em]">THE SOLUTION</Label>
        <DisplayHeader>Mizushiro: Lending infrastructure for the other 90%.</DisplayHeader>
      </div>

      <BentoGrid>
        {/* Visual: Product UI Mockup */}
        <BentoCell className="col-span-12 md:col-span-7 bg-white relative">
          <CardHeader title="ONE-CLICK INTERFACE" />
          <div className="border border-border-grid p-6 mt-6 bg-surface-base shadow-sm">
             <div className="flex justify-between items-center mb-6 border-b border-border-grid pb-4">
                <span className="font-bold text-ink-primary">DEPOSIT</span>
                <span className="text-sm text-ink-secondary font-mono">Available: 4,023 PYTH</span>
             </div>
             <div className="flex gap-3 mb-6">
               <div className="flex-1 border-2 border-ink-primary p-4 bg-white flex justify-between items-center shadow-sm">
                 <span className="text-2xl font-bold text-ink-primary">1,000</span>
                 <span className="font-bold bg-surface-base px-3 py-1 rounded-none text-xs tracking-wide border border-border-grid">PYTH</span>
               </div>
               <button className="w-16 flex items-center justify-center border-2 border-ink-primary bg-white text-sm font-bold cursor-pointer hover:bg-surface-base transition-colors">
                 MAX
               </button>
             </div>
             <div className="flex justify-between text-sm mb-2">
               <span className="text-ink-secondary">Estimated APY</span>
               <span className="text-green-600 font-bold">24.8%</span>
             </div>
             <div className="flex justify-between text-sm mb-6 pb-6 border-b border-border-grid">
               <span className="text-ink-secondary">Destination Chain</span>
               <div className="flex items-center gap-2">
                 <span className="text-ink-primary font-medium">Polygon</span>
                 <span className="text-ink-tertiary">→</span>
                 <span className="text-ink-primary font-medium">Arbitrum</span>
               </div>
             </div>
             <button className="w-full bg-ink-primary text-white py-4 font-bold hover:bg-ink-secondary transition-colors cursor-pointer text-sm tracking-widest uppercase">
               DEPOSIT & EARN
             </button>
          </div>
          <div className="mt-6 text-center">
             <Label className="text-ink-tertiary">Deposit on one chain. Borrow on another. Zero bridging.</Label>
          </div>
        </BentoCell>

        {/* Key Differentiators */}
        <BentoCell className="col-span-12 md:col-span-5 flex flex-col justify-center">
           <div className="flex-1 flex flex-col gap-8 justify-center">
             <div className="border-l-4 border-ink-primary pl-6 py-1">
               <DataLarge className="block mb-2">300+ Assets</DataLarge>
               <Body className="text-sm">Every trending token, from day one. Not just blue chips.</Body>
             </div>
             
             <div className="border-l-4 border-ink-primary pl-6 py-1">
               <DataLarge className="block mb-2">10+ Chains</DataLarge>
               <Body className="text-sm">True omnichain via AggLayer. No manual bridging.</Body>
             </div>
             
             <div className="border-l-4 border-ink-primary pl-6 py-1">
               <DataLarge className="block mb-2">50% Liquidations</DataLarge>
               <Body className="text-sm">Partial liquidations, not instant 100% wipeouts.</Body>
             </div>
             
             <div className="border-l-4 border-ink-secondary pl-6 py-1">
               <DataLarge className="block mb-2">RWA Ready</DataLarge>
               <Body className="text-sm">Infrastructure for real-world asset integration.</Body>
             </div>
           </div>
           
           <div className="mt-8 pt-6 border-t border-border-grid">
             <Label className="text-ink-primary font-bold mb-2">VS. COMPETITORS</Label>
             <Body className="text-sm">Aave supports 20 assets. We support 300+. They serve the 10%. We serve the rest.</Body>
           </div>
        </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};

