import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DisplayHeader = ({ className, children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className={cn("text-[36px] md:text-[48px] font-normal leading-[1.1] text-ink-primary tracking-tight", className)}>
    {children}
  </h1>
);

export const CardTitle = ({ className, children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={cn("text-[14px] md:text-[16px] font-bold uppercase tracking-wide text-ink-primary", className)}>
    {children}
  </h2>
);

export const DataHuge = ({ className, children }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("text-[32px] md:text-[40px] font-medium tracking-tighter text-ink-primary leading-none", className)}>
    {children}
  </span>
);

export const DataLarge = ({ className, children }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("text-[24px] font-semibold text-ink-primary tracking-tight", className)}>
    {children}
  </span>
);

export const Label = ({ className, children }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-[12px] font-medium text-ink-secondary uppercase tracking-wider", className)}>
    {children}
  </p>
);

export const Body = ({ className, children }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-[14px] md:text-[16px] leading-relaxed text-ink-secondary font-normal", className)}>
    {children}
  </p>
);

export const MicroLabel = ({ className, children }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("text-[10px] font-normal uppercase tracking-wider text-ink-secondary", className)}>
    {children}
  </span>
);

