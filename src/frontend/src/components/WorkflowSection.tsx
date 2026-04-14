import { useEffect, useRef, useState } from "react";

const WORKFLOW_STEPS = [
  {
    id: "w1",
    step: "01",
    label: "Requirement Analysis",
    icon: "📋",
    description:
      "Parse user stories, acceptance criteria, and edge cases. Build a complete mental model of expected behavior.",
    output: "Test Strategy Document",
  },
  {
    id: "w2",
    step: "02",
    label: "Test Case Design",
    icon: "🧪",
    description:
      "Design positive, negative, and boundary test cases. Define priority levels and test data requirements.",
    output: "Test Case Repository",
  },
  {
    id: "w3",
    step: "03",
    label: "Test Execution",
    icon: "▶️",
    description:
      "Execute test suites systematically. Document actual vs expected results with screenshots and logs.",
    output: "Execution Report",
  },
  {
    id: "w4",
    step: "04",
    label: "Bug Reporting",
    icon: "🐛",
    description:
      "Log defects in JIRA with severity, priority, reproducibility steps, and environment details.",
    output: "JIRA Defect Tickets",
  },
  {
    id: "w5",
    step: "05",
    label: "Retesting",
    icon: "🔄",
    description:
      "Verify fixed defects against original test cases. Ensure patches do not introduce new regressions.",
    output: "Closure Report",
  },
  {
    id: "w6",
    step: "06",
    label: "Regression Testing",
    icon: "🛡️",
    description:
      "Run regression suite to protect existing features from being broken by new changes. Final sign-off.",
    output: "Release Sign-off",
  },
];

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="workflow"
      ref={sectionRef}
      className="py-24 bg-card/20 border-y border-border/30"
      aria-label="QA Workflow"
      data-ocid="workflow.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-2">
            {"// QA_PIPELINE :: VALIDATION_SEQUENCE"}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            QA <span className="neon-text">Workflow</span>
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
          <p className="text-muted-foreground mt-4 max-w-xl">
            A systematic quality assurance pipeline — from requirement ingestion
            to production sign-off.
          </p>
        </div>

        {/* Pipeline */}
        <div className="relative">
          {/* Horizontal connector (desktop) */}
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent hidden lg:block pointer-events-none" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {WORKFLOW_STEPS.map((step, i) => (
              <button
                type="button"
                key={step.id}
                onClick={() =>
                  setActiveStep(activeStep === step.id ? null : step.id)
                }
                className={`flex flex-col items-center text-center gap-3 p-4 rounded-lg border transition-smooth glow-accent-hover group cursor-pointer
                  ${
                    activeStep === step.id
                      ? "glass glow-accent neon-border"
                      : "glass-dark border-border/30 hover:border-accent/30"
                  }
                  ${visible ? "animate-slide-up" : "opacity-0"}`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: "both",
                }}
                aria-pressed={activeStep === step.id}
                data-ocid={`workflow.step_${i + 1}_button`}
              >
                {/* Step badge */}
                <div
                  className={`relative z-10 w-10 h-10 rounded-full border flex items-center justify-center
                  ${activeStep === step.id ? "neon-border animate-[pulse-glow_2s_ease-in-out_infinite]" : "border-border/40 group-hover:neon-border transition-smooth"}`}
                  style={{ background: "oklch(var(--background))" }}
                >
                  <span className="font-mono text-[10px] neon-text font-bold">
                    {step.step}
                  </span>
                </div>

                <div className="text-2xl">{step.icon}</div>

                <p
                  className={`font-display text-xs font-bold leading-tight transition-smooth
                  ${activeStep === step.id ? "neon-text" : "text-foreground group-hover:text-foreground/80"}`}
                >
                  {step.label}
                </p>

                <span className="font-mono text-[9px] text-muted-foreground/50 bg-card/50 px-2 py-0.5 rounded">
                  {step.output}
                </span>
              </button>
            ))}
          </div>

          {/* Expanded detail panel */}
          {activeStep && (
            <div className="mt-6 glass neon-border rounded-lg p-6 animate-slide-up">
              {WORKFLOW_STEPS.filter((s) => s.id === activeStep).map((step) => (
                <div key={step.id} className="flex gap-4 items-start">
                  <div className="text-4xl">{step.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs neon-text tracking-widest">
                        STEP {step.step}
                      </span>
                      <div className="h-px flex-1 bg-accent/20" />
                    </div>
                    <h3 className="font-display text-lg font-bold neon-text mb-2">
                      {step.label}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                        OUTPUT:
                      </span>
                      <span className="font-mono text-[10px] neon-text bg-accent/10 px-2 py-1 rounded border border-accent/20">
                        {step.output}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
