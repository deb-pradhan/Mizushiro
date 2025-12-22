import React from "react";
import { BentoGrid, BentoCell, SlideSection } from "../ui-primitives";
import { DisplayHeader, Label, Body } from "../Typography";

const roadmap = [
  { 
    phase: "NOW", 
    title: "Pre-Launch", 
    status: "active",
    items: ["Backend 100% built", "Smart contracts audited", "Gateway.fm partnership", "$10M+ TVL committed"] 
  },
  { 
    phase: "Q1 2025", 
    title: "Launch", 
    status: "next",
    items: ["Deploy on Prom Network", "300+ assets live", "Points & rewards system", "Community onboarding"] 
  },
  { 
    phase: "Q2-Q3", 
    title: "Expansion", 
    status: "upcoming",
    items: ["RWA vault integration", "AggLayer assets support", "2+ additional EVM chains", "Advanced yield strategies"] 
  },
  { 
    phase: "Q4+", 
    title: "Scale", 
    status: "future",
    items: ["Full crosschain lending", "$100M+ TVL target", "Complete omnichain UX", "Institutional features"] 
  },
];

export const RoadmapSlide = () => {
  return (
    <SlideSection id="roadmap">
      <div className="mb-8">
        <Label className="mb-2 tracking-[0.2em] text-accent-main">ROADMAP</Label>
        <DisplayHeader>Built on commitments, not hopes.</DisplayHeader>
      </div>

      <BentoGrid>
        {/* Timeline Visual */}
        <BentoCell className="col-span-12 bg-surface-card">
          {/* Progress Line */}
          <div className="relative mb-8">
            <div className="absolute top-4 left-0 right-0 h-1 bg-border-grid"></div>
            <div className="absolute top-4 left-0 w-1/4 h-1 bg-accent-main"></div>
            <div className="relative flex justify-between">
              {roadmap.map((phase, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center z-10 relative font-medium text-xs
                    ${phase.status === 'active' 
                      ? 'bg-accent-main text-ink-on-accent shadow-md' 
                      : phase.status === 'next'
                        ? 'bg-surface-card border-2 border-accent-main text-accent-main'
                        : 'bg-surface-subtle border border-border-grid text-ink-tertiary'
                    }
                  `}>
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {roadmap.map((phase, index) => (
              <div 
                key={index} 
                className={`p-6 border transition-all hover:border-accent-main group ${
                  phase.status === 'active' 
                    ? 'bg-accent-subtle border-accent-main' 
                    : phase.status === 'next'
                      ? 'bg-surface-subtle border-accent-main/50'
                      : 'bg-surface-subtle border-border-grid'
                }`}
              >
                <div className={`text-xs font-medium uppercase tracking-wider mb-1 ${
                  phase.status === 'active' ? 'text-accent-main' : 'text-ink-tertiary'
                }`}>
                  {phase.phase}
                </div>
                <div className={`font-medium text-xl mb-4 ${
                  phase.status === 'active' ? 'text-accent-main' : 'text-ink-primary'
                }`}>
                  {phase.title}
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-sm text-ink-secondary flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                        phase.status === 'active' ? 'bg-accent-main' : 'bg-ink-tertiary'
                      }`}></span>
                      <span className="group-hover:text-ink-primary transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </BentoCell>

        {/* Bottom Stats */}
        <BentoCell className="col-span-6 md:col-span-3 bg-accent-subtle border-l-4 border-accent-main">
          <Label className="mb-2 text-accent-main">CURRENT STATUS</Label>
          <div className="flex items-center gap-2 mt-3">
            <span className="w-3 h-3 bg-accent-main animate-pulse rounded-full"></span>
            <span className="font-medium text-lg text-ink-primary">Pre-Launch</span>
          </div>
        </BentoCell>
        
        <BentoCell className="col-span-6 md:col-span-3 bg-surface-subtle">
          <Label className="mb-2">BACKEND</Label>
          <div className="text-3xl font-medium text-accent-main mt-3">100%</div>
          <Body className="text-xs mt-1">Fully built & audited</Body>
        </BentoCell>
        
        <BentoCell className="col-span-6 md:col-span-3 bg-surface-subtle">
          <Label className="mb-2">LAUNCH TARGET</Label>
          <div className="text-3xl font-medium text-ink-primary mt-3">Q1 2025</div>
          <Body className="text-xs mt-1">Prom Network</Body>
        </BentoCell>
        
        <BentoCell className="col-span-6 md:col-span-3 bg-surface-subtle">
          <Label className="mb-2">TVL GOAL</Label>
          <div className="text-3xl font-medium text-accent-main mt-3">$100M+</div>
          <Body className="text-xs mt-1">By end of roadmap</Body>
        </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};
