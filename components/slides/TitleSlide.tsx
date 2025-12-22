import React from "react";
import { BentoGrid, BentoCell, SlideSection } from "../ui-primitives";
import { DisplayHeader, DataHuge, Label } from "../Typography";

export const TitleSlide = () => {
  return (
    <SlideSection id="title">
      <BentoGrid>
        {/* Main Title Area with Background */}
        <BentoCell className="col-span-12 relative overflow-hidden py-20 md:py-32 min-h-[60vh] justify-center">
           {/* Background Image */}
           <div 
             className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
             style={{ backgroundImage: 'url(/image.png)' }}
           />
           {/* Red gradient overlay */}
           <div className="absolute inset-0 bg-gradient-to-br from-accent-subtle/50 via-surface-canvas/90 to-surface-canvas" />
           
           {/* Content */}
           <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
             <h1 className="font-serif-jp text-5xl md:text-7xl font-medium text-ink-primary mb-8 tracking-widest bg-surface-card px-8 py-4 border-2 border-accent-main shadow-[0_0_30px_rgba(155,28,28,0.3)]">
               MIZUSHIRO
             </h1>
             <Label className="mb-6 tracking-[0.4em] text-accent-main border border-accent-main bg-surface-card px-4 py-2">INTRODUCING</Label>
             <DisplayHeader className="mb-6">
               Lending infrastructure for the tokens that DeFi forgot.
             </DisplayHeader>
             <DataHuge className="text-accent-main">
               "Aave for the other 90%."
             </DataHuge>
           </div>
        </BentoCell>
        
        {/* Stats Bar */}
        <BentoCell className="col-span-6 md:col-span-3 hover:bg-accent-subtle transition-colors group">
           <Label>ASSETS SUPPORTED</Label>
           <div className="font-mono mt-2 text-3xl font-medium text-accent-main group-hover:text-ink-primary transition-colors">300+</div>
        </BentoCell>
        <BentoCell className="col-span-6 md:col-span-3 hover:bg-accent-subtle transition-colors group">
           <Label>CHAINS CONNECTED</Label>
           <div className="font-mono mt-2 text-3xl font-medium text-accent-main group-hover:text-ink-primary transition-colors">10+</div>
        </BentoCell>
        <BentoCell className="col-span-6 md:col-span-3 hover:bg-accent-subtle transition-colors group">
           <Label>TVL COMMITTED</Label>
           <div className="font-mono mt-2 text-3xl font-medium text-accent-main group-hover:text-ink-primary transition-colors">$10M+</div>
        </BentoCell>
        <BentoCell className="col-span-6 md:col-span-3 flex flex-col justify-end items-end hover:bg-accent-subtle transition-colors">
           <Label className="text-right">STATUS</Label>
           <div className="font-mono mt-2 flex items-center gap-2 text-sm font-medium text-ink-primary">
             <span className="w-2 h-2 bg-accent-main animate-pulse shadow-[0_0_10px_rgba(155,28,28,0.8)]"></span> PRE-LAUNCH
           </div>
        </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};
