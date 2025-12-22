import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, Label, DataLarge, Body } from "../Typography";

export const SolutionSlide = () => {
  return (
    <SlideSection id="solution">
      <div className="mb-8">
        <Label className="mb-2 tracking-[0.2em] text-accent-main">THE SOLUTION</Label>
        <DisplayHeader>Mizushiro: Lending infrastructure for the other 90%.</DisplayHeader>
      </div>

      <BentoGrid>
        {/* Visual: Product UI Mockup */}
        <BentoCell className="col-span-12 md:col-span-7 bg-surface-card relative">
          <CardHeader title="ONE-CLICK INTERFACE" />
          <div className="border border-accent-main p-6 mt-6 bg-surface-subtle">
             <div className="flex justify-between items-center mb-6 border-b border-border-grid pb-4">
                <span className="font-medium text-accent-main uppercase tracking-wider text-sm">DEPOSIT</span>
                <span className="text-sm text-ink-secondary font-mono">Available: 4,023 PYTH</span>
             </div>
             <div className="flex gap-3 mb-6">
               <div className="flex-1 border-2 border-accent-main p-4 bg-surface-card flex justify-between items-center shadow-[0_0_15px_rgba(155,28,28,0.2)]">
                 <span className="text-2xl font-medium text-accent-main">1,000</span>
                 <span className="font-medium bg-accent-subtle px-3 py-1 text-xs tracking-wide border border-accent-main text-accent-main">PYTH</span>
               </div>
               <button className="w-16 flex items-center justify-center border-2 border-accent-main bg-surface-card text-sm font-medium cursor-pointer hover:bg-accent-main hover:text-ink-on-accent transition-all text-accent-main hover:shadow-[0_0_20px_rgba(155,28,28,0.4)]">
                 MAX
               </button>
             </div>
             <div className="flex justify-between text-sm mb-2">
               <span className="text-ink-secondary">Estimated APY</span>
               <span className="text-accent-main font-medium text-lg">24.8%</span>
             </div>
             <div className="flex justify-between text-sm mb-6 pb-6 border-b border-border-grid">
               <span className="text-ink-secondary">Destination Chain</span>
               <div className="flex items-center gap-2">
                 <span className="text-ink-primary font-medium">Polygon</span>
                 <span className="text-accent-main">→</span>
                 <span className="text-ink-primary font-medium">Arbitrum</span>
               </div>
             </div>
             <button className="w-full bg-accent-main text-ink-on-accent py-4 font-medium hover:bg-accent-hover transition-all cursor-pointer text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(155,28,28,0.5)]">
               DEPOSIT & EARN
             </button>
          </div>
          <div className="mt-6 text-center">
             <Label className="text-ink-tertiary">Deposit on one chain. Borrow on another. Zero bridging.</Label>
          </div>
        </BentoCell>

        {/* Key Differentiators */}
        <BentoCell className="col-span-12 md:col-span-5 flex flex-col justify-center">
           <div className="flex-1 flex flex-col gap-6 justify-center">
             <div className="border-l-4 border-accent-main pl-6 py-2 hover:bg-accent-subtle/30 transition-colors">
               <DataLarge className="block mb-2 text-accent-main">300+ Assets</DataLarge>
               <Body className="text-sm">Every trending token, from day one. Not just blue chips.</Body>
             </div>
             
             <div className="border-l-4 border-accent-main pl-6 py-2 hover:bg-accent-subtle/30 transition-colors">
               <DataLarge className="block mb-2 text-accent-main">10+ Chains</DataLarge>
               <Body className="text-sm">True omnichain via AggLayer. No manual bridging.</Body>
             </div>
             
             <div className="border-l-4 border-accent-main pl-6 py-2 hover:bg-accent-subtle/30 transition-colors">
               <DataLarge className="block mb-2 text-accent-main">50% Liquidations</DataLarge>
               <Body className="text-sm">Partial liquidations, not instant 100% wipeouts.</Body>
             </div>
             
             <div className="border-l-4 border-ink-tertiary pl-6 py-2 opacity-60">
               <DataLarge className="block mb-2">RWA Ready</DataLarge>
               <Body className="text-sm">Infrastructure for real-world asset integration.</Body>
             </div>
           </div>
           
           <div className="mt-8 pt-6 border-t border-accent-main">
             <Label className="text-accent-main font-medium mb-2">VS. COMPETITORS</Label>
             <Body className="text-sm">Aave supports 20 assets. We support <span className="text-accent-main font-medium">300+</span>. They serve the 10%. We serve the rest.</Body>
           </div>
        </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};
