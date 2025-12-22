"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { clsx } from "clsx";

interface SlideConfig {
  id: string;
  title: string;
  component: React.ReactNode;
}

interface DeckProps {
  slides: SlideConfig[];
}

export const Deck = ({ slides }: DeckProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Slide navigation logic
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  }, []);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
      setIsNavOpen(false);
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "Space") {
        if (e.key !== "ArrowDown") e.preventDefault(); 
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative w-full h-[calc(100vh-48px)] mt-12 overflow-hidden bg-surface-canvas">
      {/* Main Slide Display */}
      <div className="w-full h-full overflow-y-auto no-scrollbar pb-12">
        {slides[currentSlide].component}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full h-14 bg-surface-card border-t border-border-grid z-50 flex items-center justify-between px-4 md:px-6">
        
        {/* Left: Slide Info */}
        <div className="flex items-center gap-4 w-1/3">
           <span className="text-xs font-mono text-accent-main">
             {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
           </span>
           <span className="text-xs font-medium text-ink-primary uppercase tracking-wider truncate hidden md:inline-block border-l border-accent-main/50 pl-4">
             {slides[currentSlide].title}
           </span>
        </div>

        {/* Center: Navigation Controls */}
        <div className="flex items-center justify-center gap-2 md:gap-4 w-1/3">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 hover:bg-accent-subtle border border-transparent hover:border-accent-main transition-all disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:border-transparent"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 text-ink-primary" />
          </button>

          {/* Desktop Scrubber */}
          <div className="hidden md:flex items-center gap-1 mx-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className="group relative py-4 px-1"
                title={slide.title}
              >
                <div className={clsx(
                  "h-1 transition-all duration-300",
                  currentSlide === index 
                    ? "w-8 bg-accent-main shadow-[0_0_10px_rgba(155,28,28,0.6)]" 
                    : "w-2 bg-border-grid group-hover:bg-accent-main/50"
                )} />
              </button>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 hover:bg-accent-subtle border border-transparent hover:border-accent-main transition-all disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:border-transparent"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 text-ink-primary" />
          </button>
        </div>

        {/* Right: Menu Toggle */}
        <div className="flex justify-end items-center gap-4 w-1/3">
             <button 
                onClick={() => setIsNavOpen(!isNavOpen)}
                className={clsx(
                  "flex items-center gap-2 text-xs font-medium uppercase tracking-wider transition-all px-3 py-2 border",
                  isNavOpen 
                    ? "bg-accent-main text-ink-on-accent border-accent-main shadow-[0_0_15px_rgba(155,28,28,0.5)]" 
                    : "text-ink-primary border-transparent hover:border-accent-main hover:bg-accent-subtle"
                )}
             >
                <span className="hidden md:inline">INDEX</span>
                <Menu className="w-4 h-4" />
             </button>
        </div>

         {/* Slide List Overlay */}
         <div className={clsx(
            "fixed bottom-14 right-4 bg-surface-card border border-accent-main/50 shadow-[0_0_30px_rgba(155,28,28,0.3)] transition-all duration-300 ease-in-out z-50 flex flex-col w-72 max-h-[60vh] overflow-y-auto",
            isNavOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
         )}>
            <div className="p-2 bg-accent-subtle border-b border-accent-main/50 text-xs font-medium uppercase tracking-wider text-accent-main px-5 py-3">
              Jump to Slide
            </div>
            {slides.map((slide, index) => (
               <button
                 key={slide.id}
                 onClick={() => goToSlide(index)}
                 className={clsx(
                   "text-left px-5 py-3 text-xs uppercase tracking-wider border-b border-border-grid last:border-0 transition-colors flex items-center group",
                   currentSlide === index 
                     ? "bg-accent-main text-ink-on-accent" 
                     : "text-ink-secondary hover:bg-accent-subtle hover:text-accent-main"
                 )}
               >
                 <span className={clsx("w-8 font-mono transition-opacity", currentSlide === index ? "opacity-70" : "opacity-40")}>
                    {String(index + 1).padStart(2, '0')}
                 </span>
                 <span className="truncate font-medium flex-1">{slide.title}</span>
                 {currentSlide === index && <div className="w-2 h-2 bg-ink-on-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />}
               </button>
             ))}
         </div>
      </div>
    </div>
  );
};
