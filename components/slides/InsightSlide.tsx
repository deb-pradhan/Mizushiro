import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, Label, DataHuge, Body } from "../Typography";

export const InsightSlide = () => {
  return (
    <SlideSection id="insight">
      <div className="mb-8">
        <Label className="mb-2 tracking-[0.2em]">WHY US, WHY NOW</Label>
        <DisplayHeader>Blue-chip lending is commoditized. The alpha is in the long tail.</DisplayHeader>
      </div>

      <BentoGrid>
        {/* Why Now */}
        <BentoCell className="col-span-12 md:col-span-6 bg-surface-base">
          <div className="h-full flex flex-col justify-center">
            <Label className="mb-4">THE TIMING</Label>
            <DataHuge className="block mb-8">Why Now?</DataHuge>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 bg-ink-primary text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                <p className="text-ink-secondary text-base leading-relaxed"><span className="text-ink-primary font-bold">Omnichain infrastructure matured.</span> AggLayer makes true cross-chain possible.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 bg-ink-primary text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                <p className="text-ink-secondary text-base leading-relaxed"><span className="text-ink-primary font-bold">RWA tokenization is exploding.</span> $16T market moving on-chain by 2030.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 bg-ink-primary text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                <p className="text-ink-secondary text-base leading-relaxed"><span className="text-ink-primary font-bold">Users are frustrated.</span> Fragmented UX, manual bridging, limited assets.</p>
              </div>
            </div>
          </div>
        </BentoCell>
        
        {/* Competitive Moats */}
        <BentoCell className="col-span-12 md:col-span-6 bg-white">
          <Label className="text-ink-secondary mb-4">OUR MOATS</Label>
          <DataHuge className="block mb-8">Why Can't Others Copy?</DataHuge>
          <div className="space-y-6">
            <div className="border-l-4 border-ink-primary pl-6 py-2">
              <h4 className="font-bold text-lg mb-1">First-Mover Liquidity</h4>
              <Body className="text-sm">300+ assets capture pricing data and liquidity network effects competitors can't replicate.</Body>
            </div>
            <div className="border-l-4 border-ink-secondary pl-6 py-2">
              <h4 className="font-bold text-lg mb-1">Polygon Ecosystem</h4>
              <Body className="text-sm">AggLayer integration + Prom Network partnership = distribution advantage.</Body>
            </div>
            <div className="border-l-4 border-ink-tertiary pl-6 py-2">
              <h4 className="font-bold text-lg mb-1">Community Virality</h4>
              <Body className="text-sm">Small-cap communities are loud. Supporting their token makes them our marketing team.</Body>
            </div>
          </div>
        </BentoCell>
        
        {/* Bottom bar: The key insight */}
        <BentoCell className="col-span-12 bg-surface-base">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <Label className="text-ink-primary font-bold mb-1">THE KEY INSIGHT</Label>
              <Body className="max-w-3xl">Adding 300+ assets retroactively to Aave's architecture is nearly impossible. We're building natively for the long tail.</Body>
            </div>
            <div className="flex items-center gap-6 text-sm bg-white px-6 py-3 border border-border-grid">
              <div className="text-center">
                <div className="font-bold text-ink-primary">Aave</div>
                <div className="text-ink-secondary text-xs">~20 assets</div>
              </div>
              <div className="text-2xl text-ink-tertiary">→</div>
              <div className="text-center">
                <div className="font-bold text-ink-primary">Mizushiro</div>
                <div className="text-ink-secondary text-xs">300+ assets</div>
              </div>
            </div>
          </div>
        </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};

