export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#e8ff47 1px, transparent 1px), linear-gradient(90deg, #e8ff47 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-surface-border bg-surface-muted rounded-full px-4 py-1.5 mb-10 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs text-ink-muted font-mono tracking-wider uppercase">
            React + Vite + TypeScript
          </span>
        </div>

        <h1
          className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8 animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          Build something
          <br />
          <span className="text-gradient">worth shipping.</span>
        </h1>

        <p
          className="text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl mb-12 animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          A minimal, opinionated React starter with Vite, TypeScript, and
          TailwindCSS. Skip the boilerplate, start from something solid.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          <a
            href="https://github.com/cole-ramer/react-starter-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-surface font-display font-bold px-7 py-3.5 rounded hover:bg-accent-dim transition-colors tracking-wide text-sm"
          >
            Clone &amp; run
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <div className="flex items-center gap-2 bg-surface-muted border border-surface-border rounded px-5 py-3.5">
            <span className="font-mono text-sm text-ink-muted select-none">$</span>
            <code className="font-mono text-sm text-accent">
              git clone cole-ramer/react-starter-kit
            </code>
          </div>
        </div>
      </div>
    </section>
  )
}
