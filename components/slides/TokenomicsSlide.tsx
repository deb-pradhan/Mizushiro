import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, Label, DataHuge, Body } from "../Typography";

export const TokenomicsSlide = () => {
  return (
    <SlideSection id="tokenomics">
       <div className="mb-8">
         <Label className="mb-2 tracking-[0.2em]">TOKENOMICS</Label>
         <DisplayHeader>Designed for long-term alignment and sustainable growth.</DisplayHeader>
       </div>

       <BentoGrid>
          {/* Token Distribution */}
          <BentoCell className="col-span-12 md:col-span-6 bg-white">
             <CardHeader title="DISTRIBUTION" />
             <div className="mt-6 relative">
               <div className="flex items-center mb-4">
                 <div className="w-32 font-bold text-sm">Ecosystem</div>
                 <div className="flex-1 h-8 bg-ink-primary relative group">
                    <span className="absolute inset-0 flex items-center justify-end px-2 text-white text-xs font-bold">40%</span>
                 </div>
               </div>
               <div className="flex items-center mb-4">
                 <div className="w-32 font-bold text-sm">Team</div>
                 <div className="flex-1 h-8 flex">
                    <div className="w-[25%] h-full bg-ink-secondary relative group">
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">15%</span>
                    </div>
                    <div className="flex-1 bg-surface-base"></div>
                 </div>
               </div>
               <div className="flex items-center mb-4">
                 <div className="w-32 font-bold text-sm">Liquidity</div>
                 <div className="flex-1 h-8 flex">
                    <div className="w-[25%] h-full bg-ink-secondary relative group">
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">15%</span>
                    </div>
                    <div className="flex-1 bg-surface-base"></div>
                 </div>
               </div>
               <div className="flex items-center mb-4">
                 <div className="w-32 font-bold text-sm">Treasury</div>
                 <div className="flex-1 h-8 flex">
                    <div className="w-[25%] h-full bg-ink-tertiary relative group">
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">15%</span>
                    </div>
                    <div className="flex-1 bg-surface-base"></div>
                 </div>
               </div>
               <div className="flex items-center mb-4">
                 <div className="w-32 font-bold text-sm text-ink-primary">Seed Round</div>
                 <div className="flex-1 h-8 flex">
                    <div className="w-[17%] h-full border-2 border-ink-primary relative group bg-white">
                        <span className="absolute inset-0 flex items-center justify-center text-ink-primary text-xs font-bold">10%</span>
                    </div>
                    <div className="flex-1 bg-surface-base"></div>
                 </div>
               </div>
               <div className="flex items-center">
                 <div className="w-32 font-bold text-sm">Advisors</div>
                 <div className="flex-1 h-8 flex">
                    <div className="w-[8%] h-full bg-ink-tertiary relative group">
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">5%</span>
                    </div>
                    <div className="flex-1 bg-surface-base"></div>
                 </div>
               </div>
             </div>
          </BentoCell>
          
          {/* Vesting Detail */}
          <BentoCell className="col-span-12 md:col-span-6 bg-surface-base">
             <CardHeader title="SEED VESTING SCHEDULE" />
             <div className="mt-8 flex flex-col gap-8">
                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 border-2 border-ink-primary bg-white flex items-center justify-center font-bold text-lg shrink-0">6</div>
                   <div>
                      <h4 className="font-bold text-ink-primary">Month Cliff</h4>
                      <p className="text-sm text-ink-secondary">No tokens unlock for 6 months after TGE. Complete alignment with protocol launch phase.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 border-2 border-ink-primary bg-white flex items-center justify-center font-bold text-lg shrink-0">18</div>
                   <div>
                      <h4 className="font-bold text-ink-primary">Month Linear Vesting</h4>
                      <p className="text-sm text-ink-secondary">Tokens unlock gradually over 1.5 years, ensuring long-term commitment.</p>
                   </div>
                </div>
             </div>
          </BentoCell>

          {/* The Opportunity / CTA */}
          <BentoCell className="col-span-12 !bg-ink-primary text-white">
             <div className="flex flex-col md:flex-row justify-between items-center gap-8">
               <div>
                 <Label className="!text-white/60 mb-2">THE OPPORTUNITY</Label>
                 <DataHuge className="text-white block mb-2">Be first to the long tail.</DataHuge>
                 <Body className="text-white/80 max-w-2xl">
                   $10M TVL committed. Backend built. Partnerships secured. We're not pitching an idea—we're pitching execution.
                 </Body>
               </div>
               <div className="text-right shrink-0">
                 <div className="text-2xl font-bold mb-1">Let's talk.</div>
                 <div className="text-white/60 font-mono">vasyl@mizushiro.xyz</div>
               </div>
             </div>
          </BentoCell>
       </BentoGrid>
    </SlideSection>
  );
};

