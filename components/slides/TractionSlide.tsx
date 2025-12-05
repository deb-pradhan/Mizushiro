import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, Label, Body } from "../Typography";

export const TractionSlide = () => {
  return (
     <SlideSection id="traction">
       <div className="mb-8">
         <Label className="mb-2 tracking-[0.2em]">TRACTION</Label>
         <DisplayHeader>$10M+ committed before we've even launched.</DisplayHeader>
       </div>
       
       <BentoGrid>
          {/* Main Stats */}
          <BentoCell className="col-span-12 md:col-span-4 !bg-ink-primary">
             <div className="flex flex-col h-full justify-between text-white">
                <div>
                  <Label className="text-white/60 mb-2">TVL COMMITTED</Label>
                  <div className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-4">$10M+</div>
                  <Body className="text-white/70 text-sm mt-4">Secured from ecosystem partners pre-launch.</Body>
                </div>
                <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-white/60 text-xs mb-1">STATUS</div>
                    <div className="font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-white animate-pulse rounded-full"></span> Pre-Launch
                    </div>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-1">BACKEND</div>
                    <div className="font-bold text-base">100% Built</div>
                  </div>
                </div>
             </div>
          </BentoCell>
          
          {/* Partners */}
          <BentoCell className="col-span-12 md:col-span-8 bg-white">
             <CardHeader title="STRATEGIC PARTNERSHIPS" />
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
               <div className="border-2 border-ink-primary p-6 flex flex-col justify-between h-32">
                 <div className="font-bold text-xl">Polygon</div>
                 <p className="text-xs text-ink-secondary uppercase tracking-wide">AggLayer integration</p>
               </div>
               <div className="border-2 border-ink-primary p-6 flex flex-col justify-between h-32">
                 <div className="font-bold text-xl">Prom</div>
                 <p className="text-xs text-ink-secondary uppercase tracking-wide">Launch partner</p>
               </div>
               <div className="border-2 border-ink-primary p-6 flex flex-col justify-between h-32">
                 <div className="font-bold text-xl">Gateway.fm</div>
                 <p className="text-xs text-ink-secondary uppercase tracking-wide">Infrastructure & Audit</p>
               </div>
               <div className="border border-border-grid p-6 flex flex-col justify-between h-32 opacity-70">
                 <div className="font-bold text-lg">Deploy</div>
                 <p className="text-xs text-ink-secondary uppercase tracking-wide">Strategic partner</p>
               </div>
               <div className="border border-border-grid p-6 flex flex-col justify-between h-32 opacity-70">
                 <div className="font-bold text-lg">Agglayer</div>
                 <p className="text-xs text-ink-secondary uppercase tracking-wide">Cross-chain infra</p>
               </div>
               <div className="border border-border-grid p-6 flex flex-col justify-between h-32 bg-surface-base">
                 <div className="font-bold text-lg text-ink-secondary">+ More</div>
                 <p className="text-xs text-ink-tertiary uppercase tracking-wide">LP commitments</p>
               </div>
             </div>
             
             <div className="mt-8 pt-6 border-t border-border-grid">
                <CardHeader title="BUILD STATUS" />
                <div className="flex flex-wrap gap-4 mt-4">
                   <div className="flex items-center gap-3 bg-surface-base px-4 py-2 border border-border-grid">
                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                     <span className="text-sm font-medium">Backend Fully Built</span>
                   </div>
                   <div className="flex items-center gap-3 bg-surface-base px-4 py-2 border border-border-grid">
                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                     <span className="text-sm font-medium">Smart Contracts Audited</span>
                   </div>
                   <div className="flex items-center gap-3 bg-surface-base px-4 py-2 border border-border-grid">
                     <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                     <span className="text-sm font-medium">Frontend In Progress</span>
                   </div>
                </div>
             </div>
          </BentoCell>
          
          {/* Why this matters */}
          <BentoCell className="col-span-12 bg-surface-base">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <Label className="text-ink-primary font-bold mb-2">WHY THIS MATTERS</Label>
                <Body>Most protocols launch with $0 TVL and hope for the best. We launch with $10M+ already committed.</Body>
              </div>
              <div className="flex items-end gap-12 pr-8 border-l border-border-grid pl-8 md:border-l-0 md:pl-0">
                <div className="text-center opacity-50">
                  <div className="w-16 bg-ink-secondary h-8 mb-2 mx-auto"></div>
                  <div className="text-xs text-ink-secondary uppercase tracking-wide">Avg Launch</div>
                </div>
                <div className="text-center">
                  <div className="w-16 bg-ink-primary h-24 mb-2 mx-auto shadow-lg"></div>
                  <div className="text-xs font-bold text-ink-primary uppercase tracking-wide">Mizushiro</div>
                </div>
              </div>
            </div>
          </BentoCell>
       </BentoGrid>
     </SlideSection>
  );
};

