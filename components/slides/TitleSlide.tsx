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
             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: 'url(/image.png)' }}
           />
           {/* Overlay - increased opacity for readability */}
           <div className="absolute inset-0 bg-surface-base/90" />
           
           {/* Content */}
           <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
             <h1 className="font-serif-jp text-5xl md:text-7xl font-bold text-ink-primary mb-8 tracking-widest shadow-sm bg-surface-base/80 px-8 py-4 border border-ink-primary">
               MIZUSHIRO
             </h1>
             <Label className="mb-6 tracking-[0.4em] text-ink-primary bg-surface-base/80 px-4 py-1">INTRODUCING</Label>
             <DisplayHeader className="mb-6">
               Lending infrastructure for the tokens that DeFi forgot.
             </DisplayHeader>
             <DataHuge className="text-ink-secondary italic opacity-80">
               "Aave for the other 90%."
             </DataHuge>
           </div>
        </BentoCell>
        
        {/* Stats Bar */}
        <BentoCell className="col-span-6 md:col-span-3">
           <Label>ASSETS SUPPORTED</Label>
           <div className="font-mono mt-2 text-2xl font-bold">300+</div>
        </BentoCell>
        <BentoCell className="col-span-6 md:col-span-3">
           <Label>CHAINS CONNECTED</Label>
           <div className="font-mono mt-2 text-2xl font-bold">10+</div>
        </BentoCell>
        <BentoCell className="col-span-6 md:col-span-3">
           <Label>TVL COMMITTED</Label>
           <div className="font-mono mt-2 text-2xl font-bold">$10M+</div>
        </BentoCell>
        <BentoCell className="col-span-6 md:col-span-3 flex flex-col justify-end items-end">
           <Label className="text-right">STATUS</Label>
           <div className="font-mono mt-2 flex items-center gap-2 text-sm font-bold">
             <span className="w-2 h-2 bg-ink-primary animate-pulse"></span> PRE-LAUNCH
           </div>
        </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};

