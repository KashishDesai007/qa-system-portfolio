const TRAITS = [
  {
    icon: "🔍",
    label: "Detail-Oriented",
    desc: "Every pixel, every edge case — nothing escapes review.",
  },
  {
    icon: "⚡",
    label: "Agile Mindset",
    desc: "Rapid iteration cycles, daily stand-ups, sprint-ready.",
  },
  {
    icon: "🛡️",
    label: "Quality Guardian",
    desc: "Preventing defects before they reach production.",
  },
  {
    icon: "📊",
    label: "Data-Driven",
    desc: "Metrics-backed decisions on test coverage and risk.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-card/30 border-y border-border/30"
      aria-label="About me"
      data-ocid="about.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="section-label mb-2">{"// SYSTEM PROFILE"}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            About <span className="neon-text">Me</span>
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio text */}
          <div className="space-y-6">
            <div className="glass neon-border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-accent rounded-full" />
                <p className="font-mono text-xs neon-text tracking-widest">
                  CANDIDATE_PROFILE.json
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a{" "}
                <strong className="text-foreground">QA Engineer</strong> with{" "}
                <strong className="neon-text">2.5 years</strong> of hands-on
                experience in software testing, defect management, and Agile
                collaboration. My passion is ensuring that every feature shipped
                meets the highest standard of quality.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With a background in{" "}
                <strong className="text-foreground">Manual Testing</strong>,{" "}
                <strong className="text-foreground">
                  API Testing with Postman
                </strong>
                , and{" "}
                <strong className="text-foreground">Regression Testing</strong>,
                I bridge the gap between development speed and product
                reliability. I thrive in fast-paced Agile teams where quality is
                everyone&apos;s responsibility.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My{" "}
                <strong className="text-foreground">
                  JIRA-based defect tracking
                </strong>{" "}
                and structured test case design approach have consistently
                reduced defect leakage and ensured smooth production releases
                across multiple projects.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Test Cases Written", value: "500+" },
                { label: "Bugs Reported", value: "247" },
                { label: "Sprint Reviews", value: "30+" },
                { label: "Projects Delivered", value: "8+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass neon-border rounded-lg p-4 text-center"
                >
                  <p className="font-mono text-2xl font-bold neon-text">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRAITS.map((trait) => (
              <div
                key={trait.label}
                className="glass neon-border rounded-lg p-5 glow-accent-hover transition-smooth group"
                data-ocid={`about.trait_${trait.label.toLowerCase().replace(/[^a-z]/g, "_")}_card`}
              >
                <div className="text-2xl mb-3">{trait.icon}</div>
                <h3 className="font-display font-bold text-foreground mb-1 group-hover:neon-text transition-smooth">
                  {trait.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {trait.desc}
                </p>
              </div>
            ))}

            {/* System log block */}
            <div className="sm:col-span-2 glass-dark neon-border rounded-lg p-4 font-mono text-xs space-y-1">
              <p className="neon-text mb-2 tracking-widest">
                {"// SYSTEM_LOG.txt"}
              </p>
              {[
                {
                  id: "log1",
                  text: "[INFO] Agile ceremonies: attended 30+ sprints",
                },
                {
                  id: "log2",
                  text: "[INFO] JIRA boards: managed 5+ active projects",
                },
                {
                  id: "log3",
                  text: "[SUCCESS] Zero critical bugs in last 3 releases",
                },
                {
                  id: "log4",
                  text: "[INFO] API test coverage: 85% endpoint coverage",
                },
              ].map(({ id, text }, i) => (
                <p key={id} className="text-muted-foreground/70">
                  <span className={i % 2 === 0 ? "success-text" : "neon-text"}>
                    {text.split("]")[0]}]
                  </span>
                  {text.split("]")[1]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
