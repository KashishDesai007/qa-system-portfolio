export default function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "portfolio",
  );

  return (
    <footer className="bg-card border-t neon-border py-8 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded border neon-border flex items-center justify-center">
              <span className="font-mono text-[10px] neon-text font-bold">
                QA
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground tracking-widest">
              {"ADITI.MAHESHWARI // QA ENGINEER"}
            </span>
          </div>

          {/* System status */}
          <div className="flex items-center gap-3 font-mono text-[10px] text-muted-foreground/60">
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              ALL SYSTEMS OPERATIONAL
            </span>
            <span className="text-muted-foreground/30">|</span>
            <span>STATUS: 100% COVERAGE</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/50 font-mono">
            {`© ${year}. `}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-smooth"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
