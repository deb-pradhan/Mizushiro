import React from "react";
import { BentoGrid, BentoCell, SlideSection } from "../ui-primitives";
import { DisplayHeader, Label, DataHuge, Body } from "../Typography";

export const ClosingSlide = () => {
  return (
    <SlideSection id="closing">
      <BentoGrid>
        {/* Hero CTA */}
        <BentoCell className="col-span-12 !bg-accent-main text-ink-on-accent min-h-[50vh] flex flex-col justify-center items-center text-center shadow-[0_0_80px_rgba(155,28,28,0.4)]">
          <Label className="!text-white/60 mb-4 tracking-[0.3em]">THE FUTURE OF DEFI LENDING</Label>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6" style={{ textShadow: '0 0 40px rgba(255, 255, 255, 0.3)' }}>
            Ready to unlock the long tail?
          </h1>
          <Body className="!text-white/80 max-w-2xl text-lg mb-10">
            300+ assets. 10+ chains. One seamless interface. Join the protocol that's building DeFi for the other 90%.
          </Body>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:vasyl@mizushiro.xyz" className="bg-white text-accent-main px-10 py-4 font-medium hover:bg-white/90 transition-colors text-sm tracking-wider uppercase shadow-lg hover:shadow-xl">
              Get in Touch
            </a>
            <a href="#" className="border-2 border-white text-white px-10 py-4 font-medium hover:bg-white/10 transition-colors text-sm tracking-wider uppercase">
              Read Documentation
            </a>
          </div>
        </BentoCell>

        {/* Contact Section */}
        <BentoCell className="col-span-12 md:col-span-6 bg-surface-card">
          <Label className="text-accent-main mb-4">GET IN TOUCH</Label>
          <DataHuge className="block mb-6 text-ink-primary">Let's build together.</DataHuge>
          
          <div className="space-y-4">
            <a href="mailto:vasyl@mizushiro.xyz" className="flex items-center gap-4 p-4 bg-surface-subtle border border-border-grid hover:border-accent-main hover:bg-accent-subtle/30 transition-all group">
              <span className="w-12 h-12 bg-accent-main flex items-center justify-center text-ink-on-accent text-xl shadow-[0_0_15px_rgba(155,28,28,0.4)]">@</span>
              <div>
                <div className="font-medium text-ink-primary group-hover:text-accent-main transition-colors">Email</div>
                <div className="font-mono text-sm text-ink-secondary">vasyl@mizushiro.xyz</div>
              </div>
            </a>
            
            <a href="#" className="flex items-center gap-4 p-4 bg-surface-subtle border border-border-grid hover:border-accent-main hover:bg-accent-subtle/30 transition-all group">
              <span className="w-12 h-12 bg-surface-card border-2 border-accent-main flex items-center justify-center text-accent-main text-xl">𝕏</span>
              <div>
                <div className="font-medium text-ink-primary group-hover:text-accent-main transition-colors">Twitter / X</div>
                <div className="font-mono text-sm text-ink-secondary">@mizushiro_xyz</div>
              </div>
            </a>
            
            <a href="#" className="flex items-center gap-4 p-4 bg-surface-subtle border border-border-grid hover:border-accent-main hover:bg-accent-subtle/30 transition-all group">
              <span className="w-12 h-12 bg-surface-card border-2 border-accent-main flex items-center justify-center text-accent-main text-xl">◈</span>
              <div>
                <div className="font-medium text-ink-primary group-hover:text-accent-main transition-colors">Discord</div>
                <div className="font-mono text-sm text-ink-secondary">Join our community</div>
              </div>
            </a>
          </div>
        </BentoCell>

        {/* Quick Links & Info */}
        <BentoCell className="col-span-12 md:col-span-6 bg-surface-subtle flex flex-col">
          <Label className="text-ink-secondary mb-4">RESOURCES</Label>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <a href="#" className="p-4 bg-surface-card border border-border-grid hover:border-accent-main transition-all text-center group">
              <div className="text-2xl mb-2">📄</div>
              <div className="font-medium text-sm text-ink-primary group-hover:text-accent-main transition-colors">Whitepaper</div>
            </a>
            <a href="#" className="p-4 bg-surface-card border border-border-grid hover:border-accent-main transition-all text-center group">
              <div className="text-2xl mb-2">📚</div>
              <div className="font-medium text-sm text-ink-primary group-hover:text-accent-main transition-colors">Documentation</div>
            </a>
            <a href="#" className="p-4 bg-surface-card border border-border-grid hover:border-accent-main transition-all text-center group">
              <div className="text-2xl mb-2">💻</div>
              <div className="font-medium text-sm text-ink-primary group-hover:text-accent-main transition-colors">GitHub</div>
            </a>
            <a href="#" className="p-4 bg-surface-card border border-border-grid hover:border-accent-main transition-all text-center group">
              <div className="text-2xl mb-2">📊</div>
              <div className="font-medium text-sm text-ink-primary group-hover:text-accent-main transition-colors">Analytics</div>
            </a>
          </div>
          
          <div className="mt-auto pt-6 border-t border-border-grid">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-serif-jp text-2xl font-medium text-ink-primary tracking-wider">MIZUSHIRO</div>
                <div className="text-xs text-ink-tertiary mt-1">Lending for the other 90%</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-ink-tertiary">Powered by</div>
                <div className="font-medium text-ink-secondary">Gateway.fm</div>
              </div>
            </div>
          </div>
        </BentoCell>
      </BentoGrid>
    </SlideSection>
  );
};
