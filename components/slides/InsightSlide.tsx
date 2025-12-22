import React from "react";
import { BentoGrid, BentoCell, SlideSection } from "../ui-primitives";
import { DisplayHeader, Label, DataHuge, Body } from "../Typography";

export const InsightSlide = () => {
  return (
    <SlideSection id="insight">
      <div className="mb-8">
        <Label className="mb-2 tracking-[0.2em] text-accent-main">WHY US, WHY NOW</Label>
        <DisplayHeader>Blue-chip lending is commoditized. The alpha is in the long tail.</DisplayHeader>
      </div>

      <BentoGrid>
        {/* Why Now */}
        <BentoCell className="col-span-12 md:col-span-6 bg-surface-subtle">
          <div className="h-full flex flex-col justify-center">
            <Label className="mb-4 text-accent-main">THE TIMING</Label>
            <DataHuge className="block mb-8">Why Now?</DataHuge>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <span className="w-10 h-10 bg-accent-main text-ink-on-accent flex items-center justify-center text-sm font-medium shrink-0 shadow-md">1</span>
                <p className="text-ink-secondary text-base leading-relaxed"><span className="text-accent-main font-medium">Omnichain infrastructure matured.</span> AggLayer makes true cross-chain possible.</p>
              </div>
              <div className="flex gap-4 items-start group">
                <span className="w-10 h-10 bg-accent-main text-ink-on-accent flex items-center justify-center text-sm font-medium shrink-0 shadow-md">2</span>
                <p className="text-ink-secondary text-base leading-relaxed"><span className="text-accent-main font-medium">RWA tokenization is exploding.</span> $16T market moving on-chain by 2030.</p>
              </div>
              <div className="flex gap-4 items-start group">
                <span className="w-10 h-10 bg-accent-main text-ink-on-accent flex items-center justify-center text-sm font-medium shrink-0 shadow-md">3</span>
                <p className="text-ink-secondary text-base leading-relaxed"><span className="text-accent-main font-medium">Users are frustrated.</span> Fragmented UX, manual bridging, limited assets.</p>
              </div>
            </div>
          </div>
        </BentoCell>
        
        {/* Competitive Moats */}
        <BentoCell className="col-span-12 md:col-span-6 bg-surface-card">
          <Label className="text-ink-secondary mb-4">OUR MOATS</Label>
          <DataHuge className="block mb-8">Why Can't Others Copy?</DataHuge>
          <div className="space-y-5">
            <div className="border-l-4 border-accent-main pl-6 py-2 hover:bg-accent-subtle transition-colors">
              <h4 className="font-medium text-lg mb-1 text-accent-main">First-Mover Liquidity</h4>
              <Body className="text-sm">300+ assets capture pricing data and liquidity network effects competitors can't replicate.</Body>
            </div>
            <div className="border-l-4 border-accent-main/60 pl-6 py-2 hover:bg-accent-subtle transition-colors">
              <h4 className="font-medium text-lg mb-1 text-ink-primary">Polygon Ecosystem</h4>
              <Body className="text-sm">AggLayer integration + Prom Network partnership = distribution advantage.</Body>
            </div>
            <div className="border-l-4 border-accent-main/40 pl-6 py-2 hover:bg-accent-subtle transition-colors">
              <h4 className="font-medium text-lg mb-1 text-ink-primary">Community Virality</h4>
              <Body className="text-sm">Small-cap communities are loud. Supporting their token makes them our marketing team.</Body>
            </div>
          </div>
        </BentoCell>
        
        {/* Bottom bar: The key insight */}
        <BentoCell className="col-span-12 bg-accent-subtle border-t-4 border-accent-main">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <Label className="text-accent-main font-medium mb-1">THE KEY INSIGHT</Label>
              <Body className="max-w-3xl">Adding 300+ assets retroactively to Aave's architecture is nearly impossible. We're building natively for the long tail.</Body>
            </div>
            <div className="flex items-center gap-6 text-sm bg-surface-card px-6 py-4 border-2 border-accent-main shadow-md">
              <div className="text-center">
                <div className="font-medium text-ink-tertiary">Aave</div>
                <div className="text-ink-secondary text-xs">~20 assets</div>
              </div>
              <div className="text-3xl text-accent-main font-light">→</div>
              <div className="text-center">
                <div className="font-medium text-accent-main">Mizushiro</div>
                <div className="text-accent-main text-xs font-medium">300+ assets</div>
              </div>
            </div>
          </div>
        </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};
