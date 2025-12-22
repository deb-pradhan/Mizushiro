import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, Label, Body } from "../Typography";

export const TractionSlide = () => {
  return (
     <SlideSection id="traction">
       <div className="mb-8">
         <Label className="mb-2 tracking-[0.2em] text-accent-main">TRACTION</Label>
         <DisplayHeader>$10M+ committed before we've even launched.</DisplayHeader>
       </div>
       
       <BentoGrid>
          {/* Main Stats */}
          <BentoCell className="col-span-12 md:col-span-4 !bg-accent-main shadow-[0_0_60px_rgba(155,28,28,0.4)]">
             <div className="flex flex-col h-full justify-between text-ink-on-accent">
                <div>
                  <Label className="!text-white/60 mb-2">TVL COMMITTED</Label>
                  <div className="text-5xl md:text-7xl font-medium tracking-tighter leading-none mb-4" style={{ textShadow: '0 0 40px rgba(255, 255, 255, 0.3)' }}>$10M+</div>
                  <Body className="!text-white/70 text-sm mt-4">Secured from ecosystem partners pre-launch.</Body>
                </div>
                <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-white/60 text-xs mb-1">STATUS</div>
                    <div className="font-medium text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-white animate-pulse rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span> Pre-Launch
                    </div>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-1">BACKEND</div>
                    <div className="font-medium text-base">100% Built</div>
                  </div>
                </div>
             </div>
          </BentoCell>
          
          {/* Partners */}
          <BentoCell className="col-span-12 md:col-span-8 bg-surface-card">
             <CardHeader title="STRATEGIC PARTNERSHIPS" />
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
               <div className="border-2 border-accent-main p-6 flex flex-col justify-between h-32 bg-accent-subtle/30 hover:bg-accent-subtle transition-colors group">
                 <div className="font-medium text-xl text-ink-primary group-hover:text-accent-main transition-colors">Polygon</div>
                 <p className="text-xs text-ink-secondary uppercase tracking-wide">AggLayer integration</p>
               </div>
               <div className="border-2 border-accent-main p-6 flex flex-col justify-between h-32 bg-accent-subtle/30 hover:bg-accent-subtle transition-colors group">
                 <div className="font-medium text-xl text-ink-primary group-hover:text-accent-main transition-colors">Prom</div>
                 <p className="text-xs text-ink-secondary uppercase tracking-wide">Launch partner</p>
               </div>
               <div className="border-2 border-accent-main p-6 flex flex-col justify-between h-32 bg-accent-subtle/30 hover:bg-accent-subtle transition-colors group">
                 <div className="font-medium text-xl text-ink-primary group-hover:text-accent-main transition-colors">Gateway.fm</div>
                 <p className="text-xs text-ink-secondary uppercase tracking-wide">Infrastructure & Audit</p>
               </div>
               <div className="border border-border-grid p-6 flex flex-col justify-between h-32 hover:border-accent-main hover:bg-accent-subtle/20 transition-all group">
                 <div className="font-medium text-lg text-ink-primary group-hover:text-accent-main transition-colors">Deploy</div>
                 <p className="text-xs text-ink-secondary uppercase tracking-wide">Strategic partner</p>
               </div>
               <div className="border border-border-grid p-6 flex flex-col justify-between h-32 hover:border-accent-main hover:bg-accent-subtle/20 transition-all group">
                 <div className="font-medium text-lg text-ink-primary group-hover:text-accent-main transition-colors">Agglayer</div>
                 <p className="text-xs text-ink-secondary uppercase tracking-wide">Cross-chain infra</p>
               </div>
               <div className="border border-border-grid p-6 flex flex-col justify-between h-32 bg-surface-subtle hover:border-accent-main transition-all">
                 <div className="font-medium text-lg text-ink-secondary">+ More</div>
                 <p className="text-xs text-ink-tertiary uppercase tracking-wide">LP commitments</p>
               </div>
             </div>
          </BentoCell>
          
          {/* Why this matters */}
          <BentoCell className="col-span-12 bg-surface-subtle">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <Label className="text-accent-main font-medium mb-2">WHY THIS MATTERS</Label>
                <Body>Most protocols launch with $0 TVL and hope for the best. We launch with <span className="text-accent-main font-medium">$10M+ already committed</span>.</Body>
              </div>
              <div className="flex items-end gap-12 pr-8">
                <div className="text-center opacity-50">
                  <div className="w-16 bg-ink-tertiary h-8 mb-2 mx-auto"></div>
                  <div className="text-xs text-ink-secondary uppercase tracking-wide">Avg Launch</div>
                </div>
                <div className="text-center">
                  <div className="w-16 bg-accent-main h-24 mb-2 mx-auto shadow-[0_0_30px_rgba(155,28,28,0.5)]"></div>
                  <div className="text-xs font-medium text-accent-main uppercase tracking-wide">Mizushiro</div>
                </div>
              </div>
            </div>
          </BentoCell>
       </BentoGrid>
     </SlideSection>
  );
};
