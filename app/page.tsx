export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-paper text-ink">
      {/* Top Bar */}
      <header className="w-full border-b border-rule/80 bg-paper/95 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-md bg-ink text-paper font-serif text-xs font-semibold flex items-center justify-center">
              B
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-ink">
              BrandToPost
            </span>
            <span className="hidden sm:inline-block text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-surface text-ink-soft border border-rule">
              Interactive Demo
            </span>
          </div>

          <nav className="flex items-center gap-4 text-xs font-medium">
            <a
              href="/onboarding"
              className="text-ink-soft hover:text-ink transition-colors"
            >
              Onboarding
            </a>
            <a
              href="/workspace"
              className="px-3.5 py-1.5 rounded-lg bg-ink hover:bg-cobalt text-paper transition-colors"
            >
              Open Workspace →
            </a>
          </nav>
        </div>
      </header>

      {/* Main Demo Selector */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-5xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-cobalt">
              Product Walkthrough · Two Interactive Flows
            </div>
            <h1 className="serif-display text-4xl sm:text-5xl font-medium text-ink leading-[1.1]">
              From voice &amp; brand signals to LinkedIn posts that sound like
              you.
            </h1>
            <p className="text-sm text-ink-soft leading-relaxed">
              Launch either interactive prototype below. Both flows are wired
              together so you can move seamlessly between onboarding and the
              full workspace during your demo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Card 1: Adaptive Onboarding */}
            <div className="bg-white border border-rule rounded-2xl p-6 flex flex-col justify-between gap-6 hover:border-ink/40 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-cobalt font-medium">
                    01 · Onboarding Flow
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    9 Adaptive Screens
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h2 className="serif-display text-3xl font-medium text-ink leading-tight">
                    Visual-First Adaptive Onboarding
                  </h2>
                  <p className="text-[13px] text-ink-soft leading-relaxed">
                    Zero-friction ICP routing, 1-click LinkedIn voice sync,
                    background website brand scan, visual taste picker, 30-sec
                    AI ghostwriter voice interview, Brand Brain synthesis, and 3
                    ready posts with swipeable visuals.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1 text-[11px]">
                  <a
                    href="/onboarding#step=1"
                    className="px-2.5 py-1 rounded-full bg-surface hover:bg-rule/70 text-ink-soft hover:text-ink transition-colors"
                  >
                    Step 1 · ICP
                  </a>
                  <a
                    href="/onboarding#step=7"
                    className="px-2.5 py-1 rounded-full bg-surface hover:bg-rule/70 text-ink-soft hover:text-ink transition-colors"
                  >
                    Step 7 · 30s Voice
                  </a>
                  <a
                    href="/onboarding#step=8"
                    className="px-2.5 py-1 rounded-full bg-surface hover:bg-rule/70 text-ink-soft hover:text-ink transition-colors"
                  >
                    Step 8 · Brand Brain
                  </a>
                  <a
                    href="/onboarding#step=9"
                    className="px-2.5 py-1 rounded-full bg-surface hover:bg-rule/70 text-ink-soft hover:text-ink transition-colors"
                  >
                    Step 9 · Posts + Visuals
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-rule flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] text-muted">
                  /onboarding
                </span>
                <a
                  href="/onboarding"
                  className="px-5 py-2.5 rounded-xl bg-ink hover:bg-cobalt text-paper text-xs font-semibold transition-colors"
                >
                  Launch Onboarding Demo →
                </a>
              </div>
            </div>

            {/* Card 2: Full Workspace App */}
            <div className="bg-white border border-rule rounded-2xl p-6 flex flex-col justify-between gap-6 hover:border-ink/40 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-cobalt font-medium">
                    02 · Full Application
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-surface text-ink-soft border border-rule">
                    9 Workspace Views
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h2 className="serif-display text-3xl font-medium text-ink leading-tight">
                    BrandToPost Workspace
                  </h2>
                  <p className="text-[13px] text-ink-soft leading-relaxed">
                    Full daily LinkedIn operating system: Guided AI &amp; Manual
                    post composer, LinkedIn mobile previews, Visual Studio
                    carousel editor, Voice Capture (record, phone links &amp;
                    Daily AI Phone Call), Inspiration swipe file, Writing
                    Styles, Calendar, Team Posts, My Brain, Company Brand &amp;
                    Analytics/MCP.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] text-ink-soft">
                  <span className="px-2.5 py-1 rounded-full bg-surface">
                    Posts &amp; Visual Studio
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-surface">
                    Voice Capture
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-surface">
                    Calendar &amp; Team
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-surface">
                    Brain &amp; MCP
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-rule flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] text-muted">
                  /workspace
                </span>
                <a
                  href="/workspace"
                  className="px-5 py-2.5 rounded-xl bg-ink hover:bg-cobalt text-paper text-xs font-semibold transition-colors"
                >
                  Launch Workspace Demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-3.5 px-6 border-t border-rule/70">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted">
          <span>BrandToPost v2 · Interactive Product Demo</span>
          <div className="flex items-center gap-4 font-mono text-[10px]">
            <a
              href="/brandtopost_onboarding_skeleton.html"
              className="hover:text-ink transition-colors"
            >
              onboarding.html
            </a>
            <a
              href="/brandtopost_app_skeleton.html"
              className="hover:text-ink transition-colors"
            >
              app.html
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
