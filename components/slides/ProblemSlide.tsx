import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, Label, DataHuge, Body } from "../Typography";

export const ProblemSlide = () => {
  return (
    <SlideSection id="problem">
      <div className="mb-8">
        <Label className="mb-2 tracking-[0.2em] text-accent-main">THE PROBLEM</Label>
        <DisplayHeader>90% of crypto has been left behind.</DisplayHeader>
      </div>
      
      <BentoGrid>
        {/* Left: The "Haves" */}
        <BentoCell className="col-span-12 md:col-span-4">
           <CardHeader title="THE 10%" />
           <div className="flex flex-col gap-4 mt-6">
             <div className="border-2 border-accent-main p-4 flex items-center justify-between bg-accent-subtle">
                <span className="font-medium text-lg text-ink-primary">ETH / BTC</span>
                <span className="bg-accent-main text-ink-on-accent px-3 py-1 text-xs font-medium tracking-wide">AAVE</span>
             </div>
             <div className="border border-border-grid p-4 flex items-center justify-between opacity-50">
                <span className="font-medium text-ink-primary">LINK / UNI</span>
                <span className="bg-ink-tertiary text-ink-on-accent px-3 py-1 text-xs font-medium tracking-wide">COMPOUND</span>
             </div>
             <Body className="mt-2">
                Blue chips get all the infrastructure. The rest? Nothing.
             </Body>
           </div>
        </BentoCell>
        
        {/* Right: The "Have Nots" - the gap */}
        <BentoCell className="col-span-12 md:col-span-8 bg-surface-subtle relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(circle, var(--accent-main) 1px, transparent 1px)', backgroundSize: '8px 8px' }}>
             </div>
             
             <CardHeader title="THE OTHER 90%" />
             
             <div className="mt-6 relative z-10">
               <DataHuge className="block mb-4 text-accent-main">$2.9 Trillion</DataHuge>
               <Body className="mb-8 text-lg">
                 in crypto market cap has <span className="font-medium text-accent-main border-b-2 border-accent-main">zero access</span> to lending markets.
               </Body>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {['PYTH', 'ASTER', 'HYPE', 'HBAR', 'ENA', 'RENDER', 'STRK', 'ONDO'].map((token) => (
                    <div key={token} className="border border-border-element bg-surface-card p-4 text-center hover:border-accent-main hover:bg-accent-subtle transition-all cursor-default group">
                       <span className="font-medium text-ink-primary group-hover:text-accent-main transition-colors">{token}</span>
                    </div>
                  ))}
               </div>
             </div>
             
             <div className="border-t border-border-grid pt-6 relative z-10">
               <Label className="text-accent-main font-medium mb-3">WHAT THIS MEANS</Label>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 text-ink-secondary font-medium">
                    <span className="w-6 h-6 bg-accent-subtle border border-accent-main flex items-center justify-center text-accent-main text-sm">✕</span> No Yield
                  </div>
                  <div className="flex items-center gap-3 text-ink-secondary font-medium">
                    <span className="w-6 h-6 bg-accent-subtle border border-accent-main flex items-center justify-center text-accent-main text-sm">✕</span> No Hedging
                  </div>
                  <div className="flex items-center gap-3 text-ink-secondary font-medium">
                    <span className="w-6 h-6 bg-accent-subtle border border-accent-main flex items-center justify-center text-accent-main text-sm">✕</span> No Shorting
                  </div>
               </div>
             </div>
        </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};
