import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, Label, DataHuge, Body } from "../Typography";

export const AskSlide = () => {
  return (
    <SlideSection id="ask">
       <div className="mb-8">
         <Label className="mb-2 tracking-[0.2em]">THE ASK</Label>
         <DisplayHeader>Raising $3M to execute an aggressive 18-month roadmap.</DisplayHeader>
       </div>

       <BentoGrid>
          {/* The Terms */}
          <BentoCell className="col-span-12 md:col-span-4 !bg-ink-primary">
             <div className="text-white h-full flex flex-col">
                <Label className="!text-white/60 mb-4">SEED ROUND</Label>
                <div className="text-5xl md:text-6xl font-bold tracking-tighter mb-2">$3M</div>
                <DataHuge className="text-white/80 block mb-6">@ $30M Valuation</DataHuge>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm pb-2 border-b border-white/10">
                    <span className="text-white/60">Runway</span>
                    <span className="font-medium">18 Months</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pb-2 border-b border-white/10">
                    <span className="text-white/60">Next Round</span>
                    <span className="font-medium">Series A (Q4 2025)</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Target TVL</span>
                    <span className="font-medium">$100M+</span>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/20">
                  <div className="text-xs text-white/60 mb-1">USE OF FUNDS</div>
                  <div className="flex gap-2 text-xs font-medium">
                    <span className="bg-white/10 px-2 py-1">40% Eng</span>
                    <span className="bg-white/10 px-2 py-1">30% Audit</span>
                    <span className="bg-white/10 px-2 py-1">30% Growth</span>
                  </div>
                </div>
             </div>
          </BentoCell>
          
          {/* Roadmap */}
          <BentoCell className="col-span-12 md:col-span-8 bg-white">
             <CardHeader title="EXECUTION ROADMAP" />
             
             <div className="flex flex-col md:flex-row justify-between gap-4 mt-12 relative">
                {/* Connecting Line (Desktop) */}
                <div className="absolute top-[15px] left-0 w-full h-0.5 bg-border-grid hidden md:block z-0"></div>
                
                {/* Q1 */}
                <div className="relative z-10 md:w-1/4 group">
                   <div className="flex items-center md:flex-col md:items-start gap-4 md:gap-4">
                      <div className="w-8 h-8 rounded-full bg-ink-primary border-4 border-white shadow-sm flex items-center justify-center shrink-0">
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                         <div className="text-xs font-bold text-ink-primary mb-1 uppercase tracking-wider bg-white inline-block pr-2">Q1 2025</div>
                         <h4 className="font-bold text-sm mb-2">Launch</h4>
                         <ul className="text-xs text-ink-secondary space-y-1 border-l border-border-grid pl-2 md:border-0 md:pl-0">
                           <li>• Mainnet on Prom</li>
                           <li>• $10M+ TVL active</li>
                           <li>• 50 assets</li>
                         </ul>
                      </div>
                   </div>
                </div>

                {/* Q2 */}
                <div className="relative z-10 md:w-1/4 group">
                   <div className="flex items-center md:flex-col md:items-start gap-4 md:gap-4">
                      <div className="w-8 h-8 rounded-full bg-ink-secondary border-4 border-white shadow-sm flex items-center justify-center shrink-0">
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                         <div className="text-xs font-bold text-ink-secondary mb-1 uppercase tracking-wider bg-white inline-block pr-2">Q2 2025</div>
                         <h4 className="font-bold text-sm mb-2">Omnichain</h4>
                         <ul className="text-xs text-ink-secondary space-y-1 border-l border-border-grid pl-2 md:border-0 md:pl-0">
                           <li>• AggLayer expansion</li>
                           <li>• Arbitrum + OP</li>
                           <li>• 150+ assets</li>
                         </ul>
                      </div>
                   </div>
                </div>

                {/* Q3 */}
                <div className="relative z-10 md:w-1/4 group">
                   <div className="flex items-center md:flex-col md:items-start gap-4 md:gap-4">
                      <div className="w-8 h-8 rounded-full bg-ink-tertiary border-4 border-white shadow-sm flex items-center justify-center shrink-0">
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                         <div className="text-xs font-bold text-ink-tertiary mb-1 uppercase tracking-wider bg-white inline-block pr-2">Q3 2025</div>
                         <h4 className="font-bold text-sm mb-2">RWA Vaults</h4>
                         <ul className="text-xs text-ink-secondary space-y-1 border-l border-border-grid pl-2 md:border-0 md:pl-0">
                           <li>• 1-click yield</li>
                           <li>• RWA collateral</li>
                           <li>• Inst. partnerships</li>
                         </ul>
                      </div>
                   </div>
                </div>

                {/* Q4 */}
                <div className="relative z-10 md:w-1/4 group">
                   <div className="flex items-center md:flex-col md:items-start gap-4 md:gap-4">
                      <div className="w-8 h-8 rounded-full bg-white border-4 border-ink-primary shadow-sm flex items-center justify-center shrink-0">
                         <div className="w-3 h-3 bg-ink-primary rounded-full"></div>
                      </div>
                      <div className="flex-1">
                         <div className="text-xs font-bold text-ink-primary mb-1 uppercase tracking-wider bg-white inline-block pr-2">Q4 2025</div>
                         <h4 className="font-bold text-sm mb-2">Scale & TGE</h4>
                         <ul className="text-xs text-ink-secondary space-y-1 border-l border-border-grid pl-2 md:border-0 md:pl-0">
                           <li>• Token Generation</li>
                           <li>• Governance</li>
                           <li>• $100M+ TVL</li>
                         </ul>
                      </div>
                   </div>
                </div>
             </div>
          </BentoCell>
       </BentoGrid>
    </SlideSection>
  );
};
