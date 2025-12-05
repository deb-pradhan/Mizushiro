import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-border-grid bg-surface-base/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-stretch h-12 md:border-x md:border-border-grid">
         <div className="flex items-center px-4 border-r border-border-grid font-bold tracking-tight">
            MIZUSHIRO
         </div>
         <div className="hidden md:flex flex-1">
            <div className="flex items-center px-6 border-r border-border-grid bg-white text-ink-primary font-medium text-xs uppercase tracking-wider">
               Pitch Deck
            </div>
            <div className="flex items-center px-6 border-r border-border-grid text-ink-secondary text-xs uppercase tracking-wider hover:bg-white/50 cursor-pointer transition-colors">
               Documentation
            </div>
            <div className="flex items-center px-6 border-r border-border-grid text-ink-secondary text-xs uppercase tracking-wider hover:bg-white/50 cursor-pointer transition-colors">
               Protocol
            </div>
         </div>
         <div className="ml-auto flex items-center px-4 md:border-l md:border-border-grid">
            <div className="w-6 h-6 rounded-full bg-ink-tertiary"></div>
         </div>
      </div>
    </nav>
  );
};

