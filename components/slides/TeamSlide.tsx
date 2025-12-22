import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, Label } from "../Typography";

export const TeamSlide = () => {
  return (
    <SlideSection id="team">
      <div className="mb-8">
         <Label className="mb-2 tracking-[0.2em] text-accent-main">THE TEAM</Label>
         <DisplayHeader>Infrastructure veterans. Finance PhDs. Ecosystem insiders.</DisplayHeader>
      </div>

      <BentoGrid className="h-auto">
         {/* Core Team */}
         <BentoCell className="col-span-12 md:col-span-4 bg-surface-card group hover:bg-accent-subtle transition-colors">
            <div className="w-20 h-20 bg-accent-main mb-4 flex items-center justify-center text-ink-on-accent text-2xl font-medium shadow-md">
               VK
            </div>
            <h3 className="font-medium text-xl text-ink-primary group-hover:text-accent-main transition-colors">Vasyl Kyryliuk</h3>
            <div className="text-xs font-medium uppercase mb-3 text-accent-main tracking-wider">CEO & FOUNDER</div>
            <p className="text-sm text-ink-secondary mb-4">VP of Business Development at Gateway.fm. Deep expertise in Web3 partnerships and ecosystem strategy.</p>
            <div className="pt-3 border-t border-accent-main/50">
              <span className="text-xs text-ink-tertiary">Gateway.fm • Web3 BD</span>
            </div>
         </BentoCell>
         <BentoCell className="col-span-12 md:col-span-4 bg-surface-card group hover:bg-accent-subtle transition-colors">
            <div className="w-20 h-20 bg-accent-main/70 mb-4 flex items-center justify-center text-ink-on-accent text-2xl font-medium">
               OK
            </div>
            <h3 className="font-medium text-xl text-ink-primary group-hover:text-accent-main transition-colors">Oleh Korop</h3>
            <div className="text-xs font-medium uppercase mb-3 text-accent-main tracking-wider">RISK & STRATEGY</div>
            <p className="text-sm text-ink-secondary mb-4">PhD in Finance. 7+ years in Web3 trading and quantitative risk analysis.</p>
            <div className="pt-3 border-t border-accent-main/50">
              <span className="text-xs text-ink-tertiary">PhD Finance • 7yr Web3</span>
            </div>
         </BentoCell>
         <BentoCell className="col-span-12 md:col-span-4 bg-surface-card group hover:bg-accent-subtle transition-colors">
            <div className="w-20 h-20 bg-accent-main/50 mb-4 flex items-center justify-center text-ink-on-accent text-2xl font-medium">
               AS
            </div>
            <h3 className="font-medium text-xl text-ink-primary group-hover:text-accent-main transition-colors">Andrew Skurlatov</h3>
            <div className="text-xs font-medium uppercase mb-3 text-accent-main tracking-wider">CTO</div>
            <p className="text-sm text-ink-secondary mb-4">15+ years of engineering, 10+ years in blockchain. Gateway.fm provides full backend & infra support.</p>
            <div className="pt-3 border-t border-accent-main/50">
              <span className="text-xs text-ink-tertiary">15yr Eng • 10yr Blockchain</span>
            </div>
         </BentoCell>
         
         {/* Advisors */}
         <BentoCell className="col-span-12 md:col-span-8 bg-surface-subtle">
            <CardHeader title="ADVISORS & SUPPORTERS" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-surface-card p-4 border border-border-grid hover:border-accent-main hover:bg-accent-subtle transition-all group">
                <div className="font-medium text-sm text-ink-primary group-hover:text-accent-main transition-colors">Thomas</div>
                <div className="text-xs text-ink-secondary mt-1">Marketing & Community</div>
              </div>
              <div className="bg-surface-card p-4 border border-border-grid hover:border-accent-main hover:bg-accent-subtle transition-all group">
                <div className="font-medium text-sm text-ink-primary group-hover:text-accent-main transition-colors">James</div>
                <div className="text-xs text-ink-secondary mt-1">LP Support</div>
              </div>
              <div className="bg-surface-card p-4 border border-border-grid hover:border-accent-main hover:bg-accent-subtle transition-all group">
                <div className="font-medium text-sm text-ink-primary group-hover:text-accent-main transition-colors">Dmitri</div>
                <div className="text-xs text-ink-secondary mt-1">Prom Network • Liquidity</div>
              </div>
              <div className="bg-surface-card p-4 border border-border-grid hover:border-accent-main hover:bg-accent-subtle transition-all group">
                <div className="font-medium text-sm text-ink-primary group-hover:text-accent-main transition-colors">Deb</div>
                <div className="text-xs text-ink-secondary mt-1">Marketing & Ecosystem</div>
              </div>
              <div className="bg-surface-card p-4 border border-border-grid hover:border-accent-main hover:bg-accent-subtle transition-all group">
                <div className="font-medium text-sm text-ink-primary group-hover:text-accent-main transition-colors">Chirdeep</div>
                <div className="text-xs text-ink-secondary mt-1">Partnerships & Strategy</div>
              </div>
            </div>
         </BentoCell>
         
         {/* Why this team */}
         <BentoCell className="col-span-12 md:col-span-4 bg-accent-subtle border-l-4 border-accent-main">
            <div className="h-full flex flex-col justify-between">
              <div>
                <Label className="mb-2 text-accent-main">WHY US</Label>
                <p className="text-ink-primary text-sm leading-relaxed">
                  Gateway.fm's proven infrastructure + PhD-level risk management + deep ecosystem connections = <span className="text-accent-main font-medium">execution capability</span>.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-accent-main/50 text-xs text-ink-secondary italic">
                "We've built enterprise Web3 infra. Now we're building DeFi."
              </div>
            </div>
         </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};
