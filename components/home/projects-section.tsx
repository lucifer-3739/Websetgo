"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

export type LightState = "off" | "medium" | "high";

export interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  columns?: number;
  rows?: number;
  gridPattern?: number[] | number[][];
  randomLights?: boolean;
  transitionDuration?: number;
  className?: string;
  variant?: "default" | "next";
  showButton?: boolean;
  href?: string;
  onButtonClick?: () => void;
}

function generateRandomPattern(totalLights: number, activeRatio = 0.15): number[] {
  const activeCount = Math.floor(totalLights * activeRatio);
  const pattern: number[] = [];
  const used = new Set<number>();

  while (pattern.length < activeCount) {
    const index = Math.floor(Math.random() * totalLights);
    if (!used.has(index)) {
      used.add(index);
      pattern.push(index);
    }
  }

  return pattern.sort((a, b) => a - b);
}

function parse2DGridPattern(grid2D: number[][], rows: number, columns: number, totalLights: number): number[] {
  const pattern: number[] = [];
  for (let row = 0; row < Math.min(grid2D.length, rows); row++) {
    const rowData = grid2D[row];
    if (Array.isArray(rowData)) {
      for (let col = 0; col < Math.min(rowData.length, columns); col++) {
        if (rowData[col] === 1) {
          const index = col + row * columns;
          if (index >= 0 && index < totalLights) {
            pattern.push(index);
          }
        }
      }
    }
  }
  return pattern;
}

function parseFlatGridPattern(flatPattern: number[], totalLights: number): number[] {
  const pattern: number[] = [];
  for (let i = 0; i < Math.min(flatPattern.length, totalLights); i++) {
    if (flatPattern[i] === 1) {
      pattern.push(i);
    }
  }
  return pattern;
}

export default function ProjectsSection({
  title = "Our Projects",
  subtitle = "Discover our latest work",
  description = "We craft responsive, aesthetic, and functional digital experiences. Our featured projects showcase our dedication to high-quality code, flawless design, and innovative solutions tailored to modern web standards.",
  columns = 18,
  rows = 5,
  gridPattern,
  randomLights = true,
  transitionDuration = 200,
  className,
  variant = "default",
  showButton = true,
  href = "/projects",
  onButtonClick,
}: ProjectsSectionProps) {
  const totalLights = columns * rows;
  const isRandomLightsMode = randomLights && !gridPattern;

  const basePattern = useMemo<number[]>(() => {
    if (gridPattern) {
      const is2DArray = Array.isArray(gridPattern[0]) && typeof gridPattern[0] !== "number";
      if (is2DArray) {
        return parse2DGridPattern(gridPattern as number[][], rows, columns, totalLights);
      }
      return parseFlatGridPattern(gridPattern as number[], totalLights);
    }
    if (randomLights) {
      return generateRandomPattern(totalLights);
    }
    return [];
  }, [gridPattern, randomLights, columns, rows, totalLights]);

  const [lightStates, setLightStates] = useState<LightState[]>(() => {
    const states: LightState[] = new Array(totalLights).fill("off");
    if (!isRandomLightsMode) {
      for (const index of basePattern) {
        if (index >= 0 && index < totalLights) {
          states[index] = "high";
        }
      }
    }
    return states;
  });

  useEffect(() => {
    if (!isRandomLightsMode) {
      return;
    }

    const interval = setInterval(() => {
      setLightStates((prev) => {
        const next = [...prev];
        const lightsToAnimate = Math.floor(totalLights * 0.2);
        const allIndices = Array.from({ length: totalLights }, (_, i) => i);
        const shuffled = allIndices.sort(() => Math.random() - 0.5);

        for (let i = 0; i < Math.min(lightsToAnimate, shuffled.length); i++) {
          const index = shuffled[i];
          if (index >= 0 && index < totalLights) {
            const current = prev[index];
            if (current === "off") {
              next[index] = "medium";
            } else if (current === "medium") {
              next[index] = "high";
            } else if (current === "high") {
              next[index] = "off";
            }
          }
        }
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isRandomLightsMode, totalLights]);

  const isNextVariant = variant === "next";

  return (
    <section 
      className={cn(
        "relative w-full py-24 lg:py-32 overflow-hidden",
        isNextVariant ? "bg-neutral-50 dark:bg-black" : "bg-white dark:bg-neutral-950",
        className
      )}
      id="projects"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        <div className="flex-1 flex flex-col items-start gap-6 text-left max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-600 dark:text-orange-400">
            {subtitle}
          </div>
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white",
            isNextVariant && "bg-clip-text text-transparent bg-linear-to-r from-neutral-800 to-neutral-400 dark:from-white dark:to-neutral-400"
          )}>
            {title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>
          
          {showButton && (
            <div className="pt-4">
              <a 
                href={href} 
                onClick={onButtonClick}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View All Projects
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          )}
        </div>
        
        <div className="w-full lg:w-[500px] h-[400px] flex items-center justify-center relative perspective-1000">
          <div className="absolute inset-0 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden transform transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-12">
            <div className="absolute inset-0 bg-linear-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
            
            <div className="w-full h-full flex flex-col items-center justify-center p-8 gap-8">
              <div 
                className="grid w-full"
                style={{
                  gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                  gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
                  gap: `min(1px, calc(100% / ${columns} / 10))`,
                  maxHeight: "81px",
                  transitionDuration: `${transitionDuration}ms`,
                }}
              >
                {lightStates.map((state, index) => (
                  <LightBulb
                    key={`light-${index}`}
                    state={state}
                    transitionDuration={transitionDuration}
                  />
                ))}
              </div>
              
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  System Active
                </span>
                <span className="px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  ENG-04
                </span>
              </div>
            </div>
          </div>
          
          <div className="absolute -inset-4 rounded-3xl border border-white/5 opacity-50 blur-sm pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-500/10 blur-[100px] pointer-events-none rounded-full" />
        </div>
      </div>
    </section>
  );
}

function LightBulb({
  state,
  transitionDuration,
}: {
  state: LightState;
  transitionDuration: number;
}) {
  const transitionStyle = {
    transition: `opacity ${transitionDuration}ms ease-out, transform ${transitionDuration}ms ease-out`,
  };

  return (
    <div
      className={cn(
        "relative rounded-full",
        state === "off" && "bg-neutral-300 dark:bg-neutral-600/50",
        state === "high" ? "h-[2px] w-[2px]" : "h-px w-px"
      )}
      data-state={state}
      style={{
        ...transitionStyle,
        transform: state !== "off" ? "scale(1)" : "unset",
      }}
    >
      {state === "medium" && (
        <div
          className="absolute inset-0 rounded-full"
          style={{
            ...transitionStyle,
            opacity: 1,
            backgroundColor: "var(--color-brand, #f97316)",
            boxShadow:
              "0 0 2px 1px rgba(249,115,22,0.4), 0 0 4px 1.5px rgba(249,115,22,0.25)",
          }}
        />
      )}

      {state === "high" && (
        <div
          className="absolute inset-0 rounded-full"
          style={{
            ...transitionStyle,
            opacity: 1,
            backgroundColor: "var(--color-brand, #f97316)",
            boxShadow:
              "0 0 2px 1px rgba(249,115,22,0.6), 0 0 4px 1.5px rgba(249,115,22,0.35), 0 0 6px 2px rgba(249,115,22,0.2)",
          }}
        />
      )}
    </div>
  );
}

