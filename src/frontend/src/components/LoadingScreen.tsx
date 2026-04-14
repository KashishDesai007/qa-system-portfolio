import { useEffect, useState } from "react";

const STEPS = [
  { id: "s1", label: "INITIALIZING SYSTEM...", progress: 10 },
  { id: "s2", label: "LOADING QA MODULES...", progress: 30 },
  { id: "s3", label: "RUNNING ENVIRONMENT CHECKS...", progress: 55 },
  { id: "s4", label: "VALIDATING TEST SUITES...", progress: 75 },
  { id: "s5", label: "SYSTEM READY — ALL TESTS PASSED ✓", progress: 100 },
];

export default function LoadingScreen() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < STEPS.length) {
        setStep(i);
        setProgress(STEPS[i].progress);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] bg-background grid-bg flex flex-col items-center justify-center scan-line"
      aria-label="Loading portfolio"
      data-ocid="loading_screen"
    >
      {/* Animated corner brackets */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 neon-border opacity-60" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 neon-border opacity-60" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 neon-border opacity-60" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 neon-border opacity-60" />

      {/* Center content */}
      <div className="flex flex-col items-center gap-8 w-full max-w-md px-8">
        {/* Logo mark */}
        <div className="relative">
          <div className="w-20 h-20 hexagon-clip bg-card glass flex items-center justify-center animate-[pulse-glow_2s_ease-in-out_infinite]">
            <span className="font-mono text-2xl font-bold neon-text">QA</span>
          </div>
          <div
            className="absolute inset-0 hexagon-clip border-2 animate-[pulse-glow_2s_ease-in-out_infinite] opacity-50"
            style={{ borderColor: "oklch(var(--accent) / 0.6)" }}
          />
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <p className="font-mono text-xs section-label tracking-[0.4em]">
            QUALITY ASSURANCE SYSTEM
          </p>
          <h1 className="font-display text-2xl font-bold text-foreground">
            ADITI<span className="neon-text">.</span>MAHESHWARI
          </h1>
        </div>

        {/* Progress bar */}
        <div className="w-full space-y-3">
          <div className="test-coverage w-full">
            <div
              className="test-coverage-fill"
              style={{
                width: `${progress}%`,
                transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <p
              className="font-mono text-xs text-muted-foreground animate-fade-in"
              key={step}
            >
              {STEPS[step]?.label}
            </p>
            <span className="font-mono text-xs neon-text">{progress}%</span>
          </div>
        </div>

        {/* Log lines */}
        <div className="w-full space-y-1 max-h-28 overflow-hidden">
          {STEPS.slice(0, step + 1).map((s) => (
            <p
              key={s.id}
              className="font-mono text-[10px] text-muted-foreground/60 animate-slide-up"
            >
              <span className="neon-text mr-2">&gt;</span>
              {s.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
