import Logo from '@/components/ui/Logo'

export default function Footer() {
  return (
    <footer className="border-t border-surface-border px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo />
        <p className="text-xs text-ink-muted font-mono">
          MIT License — fork it, break it, ship it.
        </p>
        <div className="flex items-center gap-6">
          {['GitHub', 'Docs', 'Issues'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-ink-muted hover:text-ink transition-colors tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
