import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CardTitle } from "./Typography";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BentoGrid = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("grid grid-cols-1 md:grid-cols-12 auto-rows-auto w-full border-t border-l border-border-grid overflow-hidden", className)}>
    {children}
  </div>
);

export const BentoCell = ({ 
  children, 
  className, 
}: { 
  children?: React.ReactNode; 
  className?: string;
}) => {
  return (
    <div 
      className={cn("bento-cell p-6 md:p-8 bg-surface-card flex flex-col", className)}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ title }: { title: string }) => (
  <div className="flex justify-between items-start mb-4 w-full">
    <CardTitle>{title}</CardTitle>
    <ArrowUpRight className="w-4 h-4 text-ink-primary" strokeWidth={1.5} />
  </div>
);

export const SlideSection = ({ children, className, id, style }: { children: React.ReactNode; className?: string; id?: string; style?: React.CSSProperties }) => {
  return (
    <section id={id} style={style} className={cn("min-h-[calc(100vh-48px)] w-full px-4 py-12 md:px-8 md:py-16 flex flex-col justify-center", className)}>
      <div className="max-w-6xl mx-auto w-full">
         {children}
      </div>
    </section>
  );
};

