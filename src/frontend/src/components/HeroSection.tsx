import { ArrowDown, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TYPING_TEXTS = [
  "Ensuring Quality. Delivering Confidence.",
  "Validating Systems. Preventing Failures.",
  "Transforming Bugs Into Better Products.",
];

function useTypingEffect(texts: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setTextIdx((t) => (t + 1) % texts.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts, speed, pause]);

  return display;
}

export default function HeroSection() {
  const [bugCount, setBugCount] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const typedText = useTypingEffect(TYPING_TEXTS);

  useEffect(() => {
    const target = 247;
    let count = 0;
    const interval = setInterval(() => {
      count += 3;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      setBugCount(count);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((p) => (p >= 100 ? 0 : p + 0.5));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
      aria-label="Hero section"
      data-ocid="hero.section"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "oklch(var(--accent) / 0.6)" }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full opacity-8 blur-3xl"
          style={{ background: "oklch(var(--primary) / 0.6)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text content */}
          <div className="space-y-8 animate-slide-up">
            {/* System status bar */}
            <div className="glass neon-border inline-flex items-center gap-3 px-4 py-2 rounded">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground tracking-widest">
                SYSTEM OPERATIONAL <span className="neon-text">|</span> SCANNED:{" "}
                <span className="neon-text font-bold">
                  {scanProgress.toFixed(1)}%
                </span>{" "}
                <span className="neon-text">|</span> READY FOR ANALYSIS
              </span>
            </div>

            {/* Main heading with typing effect */}
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-muted-foreground/60 text-2xl sm:text-3xl font-normal block mb-2">
                  &apos;
                </span>
                <span className="neon-text">{typedText}</span>
                <span className="typing-cursor" aria-hidden="true" />
              </h1>
            </div>

            {/* Role tags */}
            <div className="flex flex-wrap gap-3">
              {["QA Engineer", "Software Tester", "2.5 YRS EXP"].map((tag) => (
                <span
                  key={tag}
                  className="glass neon-border font-mono text-xs px-3 py-1.5 text-muted-foreground tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Detail-oriented{" "}
              <strong className="text-foreground">QA Engineer</strong> with
              expertise in{" "}
              <strong className="text-foreground">Manual Testing</strong>,{" "}
              <strong className="text-foreground">API Testing</strong>, and{" "}
              <strong className="text-foreground">Agile</strong> environments.
              Passionate about software quality and delivering reliable,
              bug-free user experiences.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <p className="font-mono text-3xl font-bold neon-text">
                  {bugCount}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest mt-1">
                  BUGS CRUSHED
                </p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="font-mono text-3xl font-bold neon-text">2.5</p>
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest mt-1">
                  YEARS EXP
                </p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="font-mono text-3xl font-bold neon-text">100%</p>
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest mt-1">
                  PASS RATE
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="glass neon-border px-6 py-3 font-mono text-sm neon-text tracking-widest uppercase glow-accent-hover transition-smooth"
                data-ocid="hero.view_projects_button"
              >
                [ VIEW PROJECTS ]
              </button>
              <a
                href="/resume.pdf"
                download
                className="bg-accent/10 border border-accent/40 px-6 py-3 font-mono text-sm text-foreground tracking-widest uppercase hover:bg-accent/20 transition-smooth flex items-center gap-2"
                data-ocid="hero.download_resume_button"
              >
                <ExternalLink size={14} />
                DOWNLOAD RESUME
              </a>
            </div>
          </div>

          {/* Right — portrait + scan widget */}
          <div className="relative flex items-center justify-center animate-slide-right">
            {/* Outer hexagon frame */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
              {/* Scan line over portrait */}
              <div className="relative w-full h-full scan-line rounded-lg overflow-hidden">
                <img
                  src="/assets/generated/hero-portrait.dim_600x700.png"
                  alt="Aditi Maheshwari — QA Engineer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                {/* Corner bracket overlays */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 neon-border" />
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 neon-border" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 neon-border" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 neon-border" />
              </div>

              {/* Scan progress bar below */}
              <div className="absolute -bottom-4 left-0 right-0 px-4">
                <div className="test-coverage">
                  <div
                    className="test-coverage-fill"
                    style={{ width: `${scanProgress}%`, transition: "none" }}
                  />
                </div>
              </div>
            </div>

            {/* Floating badge — JIRA */}
            <div className="absolute -top-4 -right-4 glass neon-border px-3 py-2 animate-[float_3s_ease-in-out_infinite]">
              <p className="font-mono text-[10px] neon-text tracking-widest">
                JIRA CERTIFIED
              </p>
            </div>

            {/* Floating badge — Postman */}
            <div className="absolute -bottom-4 -left-4 glass neon-border px-3 py-2 animate-[float_3.5s_ease-in-out_infinite_0.5s]">
              <p className="font-mono text-[10px] neon-text tracking-widest">
                POSTMAN / API
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            type="button"
            onClick={scrollDown}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth group"
            aria-label="Scroll down"
            data-ocid="hero.scroll_down_button"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] group-hover:neon-text transition-smooth">
              SCROLL
            </span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
