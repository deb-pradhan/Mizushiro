import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, Label } from "../Typography";

export const TeamSlide = () => {
  return (
    <SlideSection id="team">
      <div className="mb-8">
         <Label className="mb-2 tracking-[0.2em]">THE TEAM</Label>
         <DisplayHeader>Infrastructure veterans. Finance PhDs. Ecosystem insiders.</DisplayHeader>
      </div>

      <BentoGrid className="h-auto">
         {/* Core Team */}
         <BentoCell className="col-span-12 md:col-span-4 bg-white">
            <div className="w-20 h-20 bg-ink-primary mb-4 flex items-center justify-center text-white text-2xl font-bold">
               VK
            </div>
            <h3 className="font-bold text-xl">Vasyl Kyryliuk</h3>
            <div className="text-xs font-bold uppercase mb-3 text-ink-primary tracking-wider">CEO & FOUNDER</div>
            <p className="text-sm text-ink-secondary mb-4">VP of Business Development at Gateway.fm. Deep expertise in Web3 partnerships and ecosystem strategy.</p>
            <div className="pt-3 border-t border-border-grid">
              <span className="text-xs text-ink-tertiary">Gateway.fm • Web3 BD</span>
            </div>
         </BentoCell>
         <BentoCell className="col-span-12 md:col-span-4 bg-white">
            <div className="w-20 h-20 bg-ink-secondary mb-4 flex items-center justify-center text-white text-2xl font-bold">
               OK
            </div>
            <h3 className="font-bold text-xl">Oleh Korop</h3>
            <div className="text-xs font-bold uppercase mb-3 text-ink-primary tracking-wider">RISK & STRATEGY</div>
            <p className="text-sm text-ink-secondary mb-4">PhD in Finance. 7+ years in Web3 trading and quantitative risk analysis.</p>
            <div className="pt-3 border-t border-border-grid">
              <span className="text-xs text-ink-tertiary">PhD Finance • 7yr Web3</span>
            </div>
         </BentoCell>
         <BentoCell className="col-span-12 md:col-span-4 bg-white">
            <div className="w-20 h-20 bg-ink-tertiary mb-4 flex items-center justify-center text-white text-2xl font-bold">
               AS
            </div>
            <h3 className="font-bold text-xl">Andrew Skurlatov</h3>
            <div className="text-xs font-bold uppercase mb-3 text-ink-primary tracking-wider">CTO</div>
            <p className="text-sm text-ink-secondary mb-4">15+ years of engineering, 10+ years in blockchain. Gateway.fm provides full backend & infra support.</p>
            <div className="pt-3 border-t border-border-grid">
              <span className="text-xs text-ink-tertiary">15yr Eng • 10yr Blockchain</span>
            </div>
         </BentoCell>
         
         {/* Advisors */}
         <BentoCell className="col-span-12 md:col-span-8 bg-surface-base">
            <CardHeader title="ADVISORS & SUPPORTERS" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 border border-border-grid">
                <div className="font-bold text-sm">Thomas</div>
                <div className="text-xs text-ink-secondary mt-1">Marketing & Community</div>
              </div>
              <div className="bg-white p-4 border border-border-grid">
                <div className="font-bold text-sm">James</div>
                <div className="text-xs text-ink-secondary mt-1">LP Support</div>
              </div>
              <div className="bg-white p-4 border border-border-grid">
                <div className="font-bold text-sm">Dmitri</div>
                <div className="text-xs text-ink-secondary mt-1">Prom Network • Liquidity</div>
              </div>
              <div className="bg-white p-4 border border-border-grid">
                <div className="font-bold text-sm">Deb</div>
                <div className="text-xs text-ink-secondary mt-1">Marketing & Ecosystem</div>
              </div>
              <div className="bg-white p-4 border border-border-grid">
                <div className="font-bold text-sm">Chirdeep</div>
                <div className="text-xs text-ink-secondary mt-1">Partnerships & Strategy</div>
              </div>
            </div>
         </BentoCell>
         
         {/* Why this team */}
         <BentoCell className="col-span-12 md:col-span-4 bg-surface-base">
            <div className="h-full flex flex-col justify-between">
              <div>
                <Label className="mb-2">WHY US</Label>
                <p className="text-ink-primary text-sm leading-relaxed">
                  Gateway.fm's proven infrastructure + PhD-level risk management + deep ecosystem connections = execution capability.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border-grid text-xs text-ink-secondary">
                "We've built enterprise Web3 infra. Now we're building DeFi."
              </div>
            </div>
         </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};

