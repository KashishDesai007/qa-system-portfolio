const EXPERIENCE = [
  {
    id: "exp1",
    company: "TechVision Solutions Pvt. Ltd.",
    role: "QA Engineer",
    period: "Feb 2022 – Present",
    current: true,
    responsibilities: [
      "Analyzed requirements and created detailed test cases covering 95%+ functional scenarios",
      "Performed functional, regression, smoke, and sanity testing across web and mobile platforms",
      "Identified and reported 200+ defects using JIRA with precise reproducibility documentation",
      "Collaborated with cross-functional teams to resolve critical issues pre-release",
      "Participated in Agile ceremonies: daily stand-ups, sprint planning, retrospectives",
    ],
    achievements: [
      "Identified 12 critical payment module bugs preventing major production incident",
      "Reduced defect leakage by 40% through improved test coverage strategies",
      "Ensured zero critical-severity issues in 6 consecutive production releases",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 bg-card/20 border-y border-border/30"
      aria-label="Experience"
      data-ocid="experience.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-2">
            {"// SYSTEM_LOG :: CAREER_HISTORY"}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Professional <span className="neon-text">Experience</span>
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/80 via-accent/30 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, idx) => (
              <div
                key={exp.id}
                className="relative sm:pl-16 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
                data-ocid={`experience.item.${idx + 1}`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 top-6 hidden sm:block">
                  <div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center -translate-x-1/2 animate-[pulse-glow_2s_ease-in-out_infinite]"
                    style={{
                      borderColor: "oklch(var(--accent))",
                      background: "oklch(var(--background))",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full bg-accent"
                      style={{ background: "oklch(var(--accent))" }}
                    />
                  </div>
                </div>

                <div className="glass neon-border rounded-lg p-6 sm:p-8 space-y-6 glow-accent-hover transition-smooth">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] neon-text tracking-widest bg-accent/10 px-2 py-0.5 rounded">
                          {exp.current ? "ACTIVE" : "COMPLETED"}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-sm text-muted-foreground mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="glass rounded px-3 py-2 text-right shrink-0">
                      <p className="font-mono text-xs neon-text tracking-widest">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Responsibilities */}
                    <div>
                      <p className="section-label mb-3">
                        KEY_RESPONSIBILITIES:
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="neon-text font-mono mt-0.5 shrink-0">
                              &gt;
                            </span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <p className="section-label mb-3">ACHIEVEMENTS:</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((a) => (
                          <li
                            key={a}
                            className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="success-text font-mono mt-0.5 shrink-0">
                              ✓
                            </span>
                            {a}
                          </li>
                        ))}
                      </ul>

                      {/* Tools used */}
                      <div className="mt-6">
                        <p className="section-label mb-2">TOOLS_STACK:</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {[
                            "JIRA",
                            "Postman",
                            "SQL",
                            "Agile/Scrum",
                            "Excel",
                          ].map((tool) => (
                            <span
                              key={tool}
                              className="font-mono text-[10px] neon-text bg-accent/10 border border-accent/20 px-2 py-1 rounded"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
