import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, Label, DataLarge, DataHuge, Body } from "../Typography";

export const ProblemSlide = () => {
  return (
    <SlideSection 
      id="problem" 
      className="bg-surface-base text-ink-primary"
      style={{
        '--surface-base': '#000000',
        '--surface-card': '#121212', 
        '--ink-primary': '#ffffff',
        '--ink-secondary': '#a3a3a3',
        '--ink-tertiary': '#525252',
        '--border-grid': '#333333',
      } as React.CSSProperties}
    >
      <div className="mb-8">
        <Label className="mb-2 tracking-[0.2em]">THE PROBLEM</Label>
        <DisplayHeader>90% of crypto has been left behind.</DisplayHeader>
      </div>
      
      <BentoGrid>
        {/* Left: The "Haves" */}
        <BentoCell className="col-span-12 md:col-span-4">
           <CardHeader title="THE 10%" />
           <div className="flex flex-col gap-4 mt-6">
             <div className="border-2 border-ink-primary p-4 flex items-center justify-between">
                <span className="font-bold text-lg">ETH / BTC</span>
                <span className="bg-ink-primary text-surface-base px-3 py-1 text-xs font-bold tracking-wide">AAVE</span>
             </div>
             <div className="border border-border-grid p-4 flex items-center justify-between opacity-50">
                <span className="font-medium">LINK / UNI</span>
                <span className="bg-ink-secondary text-surface-base px-3 py-1 text-xs font-bold tracking-wide">COMPOUND</span>
             </div>
             <Body className="mt-2">
                Blue chips get all the infrastructure. The rest? Nothing.
             </Body>
           </div>
        </BentoCell>
        
        {/* Right: The "Have Nots" - the gap */}
        <BentoCell className="col-span-12 md:col-span-8 bg-surface-base relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '6px 6px' }}>
             </div>
             
             <CardHeader title="THE OTHER 90%" />
             
             <div className="mt-6 relative z-10">
               <DataHuge className="block mb-4">$2.9 Trillion</DataHuge>
               <Body className="mb-8 text-lg">
                 in crypto market cap has <span className="font-bold text-ink-primary border-b-2 border-ink-primary">zero access</span> to lending markets.
               </Body>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {['PYTH', 'JUP', 'WIF', 'BONK', 'ONDO', 'TIA', 'SEI', 'SUI'].map((token) => (
                    <div key={token} className="border border-ink-primary bg-white/10 p-4 text-center shadow-sm">
                       <span className="font-bold text-ink-primary">{token}</span>
                    </div>
                  ))}
               </div>
             </div>
             
             <div className="border-t border-border-grid pt-6 relative z-10">
               <Label className="text-ink-primary font-bold mb-3">WHAT THIS MEANS</Label>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-ink-secondary font-medium">
                    <span className="text-red-400 font-bold">✕</span> No Yield
                  </div>
                  <div className="flex items-center gap-2 text-ink-secondary font-medium">
                    <span className="text-red-400 font-bold">✕</span> No Hedging
                  </div>
                  <div className="flex items-center gap-2 text-ink-secondary font-medium">
                    <span className="text-red-400 font-bold">✕</span> No Shorting
                  </div>
               </div>
             </div>
        </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};

