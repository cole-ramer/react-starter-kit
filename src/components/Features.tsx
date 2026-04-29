const features = [
  {
    icon: '⚡',
    title: 'Vite',
    description:
      'Blazing fast HMR and build times. No more waiting for the bundler to wake up.',
    tag: 'v5',
  },
  {
    icon: '⚛',
    title: 'React 18',
    description:
      'Concurrent features, Suspense, and the full modern React API out of the box.',
    tag: 'v18',
  },
  {
    icon: '🔷',
    title: 'TypeScript',
    description:
      'Strict mode enabled. Path aliases configured. Autocomplete everywhere.',
    tag: 'strict',
  },
  {
    icon: '🎨',
    title: 'TailwindCSS',
    description:
      'A custom design system with a dark palette, accent colors, and utility classes.',
    tag: 'v3',
  },
  {
    icon: '🗂',
    title: 'Folder structure',
    description:
      'Components, hooks, lib, and types — pre-organized so your project scales.',
    tag: 'opinionated',
  },
  {
    icon: '🧹',
    title: 'ESLint',
    description:
      'TypeScript-aware linting with React Hooks rules. Pre-configured and ready.',
    tag: 'configured',
  },
]

export default function Features() {
  return (
    <section className="px-6 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-surface-border pt-16 mb-16">
          <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            What&apos;s included
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-surface-border">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="bg-surface p-8 hover:bg-surface-muted transition-colors duration-300 group"
              style={{
                animation: `fadeUp 0.6s ease forwards`,
                animationDelay: `${0.05 * i}s`,
                opacity: 0,
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-2xl">{feature.icon}</span>
                <span className="font-mono text-[10px] text-ink-muted bg-surface-border px-2 py-0.5 rounded tracking-wider uppercase">
                  {feature.tag}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-ink group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
