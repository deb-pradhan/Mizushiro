"use client";

import { Deck } from "@/components/Deck";
import { TitleSlide } from "@/components/slides/TitleSlide";
import { ProblemSlide } from "@/components/slides/ProblemSlide";
import { SolutionSlide } from "@/components/slides/SolutionSlide";
import { TractionSlide } from "@/components/slides/TractionSlide";
import { ValidationSlide } from "@/components/slides/ValidationSlide";
import { InsightSlide } from "@/components/slides/InsightSlide";
import { BusinessSlide } from "@/components/slides/BusinessSlide";
import { MarketSlide } from "@/components/slides/MarketSlide";
import { TeamSlide } from "@/components/slides/TeamSlide";
import { RoadmapSlide } from "@/components/slides/RoadmapSlide";
import { ClosingSlide } from "@/components/slides/ClosingSlide";

export default function Home() {
  const slides = [
    { id: "title", title: "Intro", component: <TitleSlide /> },
    { id: "problem", title: "The Problem", component: <ProblemSlide /> },
    { id: "validation", title: "Validation", component: <ValidationSlide /> },
    { id: "solution", title: "Solution", component: <SolutionSlide /> },
    { id: "market", title: "Market Size", component: <MarketSlide /> },
    { id: "business", title: "Business Model", component: <BusinessSlide /> },
    { id: "insight", title: "Why Us, Why Now", component: <InsightSlide /> },
    { id: "traction", title: "Traction", component: <TractionSlide /> },
    { id: "team", title: "Team", component: <TeamSlide /> },
    { id: "roadmap", title: "Roadmap", component: <RoadmapSlide /> },
    { id: "closing", title: "Connect", component: <ClosingSlide /> },
  ];

  return (
    <main className="min-h-screen w-full bg-surface-base">
      <Deck slides={slides} />
    </main>
  );
}
