import { useEffect, useRef, useState } from "react";

const SKILLS = [
  { name: "Manual Testing", coverage: 95, category: "Testing" },
  { name: "API Testing (Postman)", coverage: 88, category: "Tools" },
  { name: "JIRA / Defect Tracking", coverage: 92, category: "Tools" },
  { name: "Test Case Design", coverage: 94, category: "Testing" },
  { name: "Regression Testing", coverage: 90, category: "Testing" },
  { name: "Agile & Scrum", coverage: 87, category: "Methodology" },
  { name: "Smoke & Sanity Testing", coverage: 93, category: "Testing" },
  { name: "Basic SQL", coverage: 72, category: "Technical" },
];

const CATEGORIES = ["All", "Testing", "Tools", "Methodology", "Technical"];

function SkillBar({
  name,
  coverage,
  visible,
}: { name: string; coverage: number; visible: boolean }) {
  return (
    <div className="glass neon-border rounded-lg p-4 space-y-3 glow-accent-hover transition-smooth">
      <div className="flex justify-between items-center">
        <span className="font-display text-sm font-medium text-foreground">
          {name}
        </span>
        <span className="font-mono text-xs neon-text font-bold">
          {coverage}%
        </span>
      </div>
      <div className="test-coverage">
        <div
          className="test-coverage-fill"
          style={{
            width: visible ? `${coverage}%` : "0%",
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
      <div className="flex justify-between font-mono text-[9px] text-muted-foreground/50">
        <span>0%</span>
        <span>COVERAGE</span>
        <span>100%</span>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
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

  const filtered =
    activeFilter === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeFilter);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-background"
      aria-label="Skills"
      data-ocid="skills.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="section-label mb-2">{"// TEST_COVERAGE_REPORT"}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Core <span className="neon-text">Skills</span>
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
        </div>

        {/* Filters */}
        <div
          className="flex flex-wrap gap-2 mb-8"
          role="tablist"
          aria-label="Skill categories"
        >
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-xs px-4 py-2 rounded transition-smooth tracking-widest uppercase
                ${
                  activeFilter === cat
                    ? "glass neon-border neon-text glow-accent"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              data-ocid={`skills.filter_${cat.toLowerCase()}_tab`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          data-ocid="skills.list"
        >
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className="animate-slide-up"
              style={{
                animationDelay: `${i * 0.07}s`,
                animationFillMode: "both",
              }}
              data-ocid={`skills.item.${i + 1}`}
            >
              <SkillBar
                name={skill.name}
                coverage={skill.coverage}
                visible={visible}
              />
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="mt-12 glass neon-border rounded-lg p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: "TOOLS MASTERED", value: "8+" },
            {
              label: "AVG COVERAGE",
              value: `${Math.round(SKILLS.reduce((a, s) => a + s.coverage, 0) / SKILLS.length)}%`,
            },
            { label: "METHODOLOGIES", value: "AGILE" },
            { label: "EXPERIENCE", value: "2.5 YRS" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-xl font-bold neon-text">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
