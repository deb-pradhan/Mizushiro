import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-border-grid bg-surface-canvas/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-stretch h-12 md:border-x md:border-border-grid">
         <div className="flex items-center px-4 border-r border-accent-main font-medium tracking-tight text-accent-main">
            MIZUSHIRO
         </div>
         <div className="hidden md:flex flex-1">
            <div className="flex items-center px-6 border-r border-border-grid bg-accent-subtle text-accent-main font-medium text-xs uppercase tracking-wider">
               Pitch Deck
            </div>
            <div className="flex items-center px-6 border-r border-border-grid text-ink-secondary text-xs uppercase tracking-wider hover:bg-accent-subtle hover:text-accent-main cursor-pointer transition-colors">
               Documentation
            </div>
            <div className="flex items-center px-6 border-r border-border-grid text-ink-secondary text-xs uppercase tracking-wider hover:bg-accent-subtle hover:text-accent-main cursor-pointer transition-colors">
               Protocol
            </div>
         </div>
         <div className="ml-auto flex items-center px-4 md:border-l md:border-border-grid">
            <div className="w-6 h-6 rounded-full bg-accent-main shadow-[0_0_10px_rgba(155,28,28,0.6)]"></div>
         </div>
      </div>
    </nav>
  );
};
