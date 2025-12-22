import React from "react";
import { BentoGrid, BentoCell, SlideSection, CardHeader } from "../ui-primitives";
import { DisplayHeader, DataHuge, Label, Body } from "../Typography";

export const ValidationSlide = () => {
  return (
    <SlideSection id="validation">
      <div className="mb-8">
        <Label className="mb-2 tracking-[0.2em] text-accent-main">THE PROOF</Label>
        <DisplayHeader>This isn't hypothetical. The demand is desperate.</DisplayHeader>
      </div>
      
      <BentoGrid>
        {/* The Shocking Number */}
        <BentoCell className="col-span-12 md:col-span-5 bg-accent-subtle/50 relative overflow-hidden border-l-4 border-l-accent-main">
          <div className="flex flex-col h-full justify-between">
            <div>
              <Label className="mb-4 text-accent-main">PYTH BORROW RATE</Label>
              <div className="text-6xl md:text-8xl font-medium tracking-tighter leading-none mb-2 text-accent-main" style={{ textShadow: '0 0 60px rgba(155, 28, 28, 0.5)' }}>
                45k%
              </div>
              <div className="text-2xl font-normal text-ink-secondary">APY SPIKE</div>
            </div>
            <div className="mt-8 pt-6 border-t border-accent-main">
              <p className="text-ink-secondary text-lg leading-relaxed">
                A $1 billion token. One lending protocol. Borrowers paid <span className="text-accent-main font-medium">45,000% APY</span> because no alternatives existed.
              </p>
            </div>
          </div>
        </BentoCell>
        
        {/* Chart Area */}
        <BentoCell className="col-span-12 md:col-span-7 bg-surface-card relative overflow-hidden">
          <CardHeader title="PYTH BORROW RATE — 72 HOURS" />
          
          {/* Chart with spike */}
          <div className="w-full h-48 mt-8 relative border-l-2 border-b-2 border-accent-main/50">
             {/* Grid lines */}
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(to right, #9B1C1C 1px, transparent 1px), linear-gradient(to bottom, #9B1C1C 1px, transparent 1px)', backgroundSize: '20% 25%' }}></div>
             
             <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Glow effect */}
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path d="M0,95 L15,95 L25,94 L35,92 L45,85 L50,20 L52,8 L55,15 L60,35 L70,50 L85,55 L100,58" vectorEffect="non-scaling-stroke" stroke="#9B1C1C" strokeWidth="3" fill="none" filter="url(#glow)" />
                {/* Data points */}
                <circle cx="52" cy="8" r="4" fill="#9B1C1C" />
             </svg>
             
             <div className="absolute top-[8%] left-[52%] -translate-x-1/2 -translate-y-full pb-2">
                <div className="bg-accent-main text-ink-on-accent px-4 py-2 text-xs font-medium whitespace-nowrap shadow-[0_0_20px_rgba(155,28,28,0.6)]">
                   SPIKE: 45,000% APY
                </div>
                <div className="w-px h-4 bg-accent-main mx-auto"></div>
             </div>
          </div>
          <div className="mt-2 flex justify-between text-xs text-ink-secondary font-medium uppercase tracking-wider">
             <span>Day 1</span>
             <span className="text-accent-main">Liquidity Crisis</span>
             <span>Day 3</span>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-accent-main/50">
            <div>
              <Label className="font-medium text-accent-main mb-2">PRICE VOLATILITY</Label>
              <Body className="text-sm">PYTH doubled from <span className="text-accent-main">$0.115 → $0.23</span>, then crashed. Same day.</Body>
            </div>
            <div>
              <Label className="font-medium text-accent-main mb-2">ROOT CAUSE</Label>
              <Body className="text-sm">No way to short. No way to hedge. No liquidity.</Body>
            </div>
          </div>
        </BentoCell>
        
        {/* Bottom insight bar */}
        <BentoCell className="col-span-12 bg-surface-subtle">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <DataHuge className="text-accent-main">This happens constantly.</DataHuge>
              <Body className="mt-2">save.finance rates spiked from 5.4% → <span className="text-accent-main font-medium">38,000% APY</span> in 3 days.</Body>
            </div>
            <div className="text-right border-l-4 border-accent-main pl-6">
              <Label className="text-accent-main font-medium mb-1">THE OPPORTUNITY</Label>
              <p className="text-ink-secondary font-medium">Capture this demand before anyone else.</p>
            </div>
          </div>
        </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};
