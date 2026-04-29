import { useState } from 'react'
import Logo from '@/components/ui/Logo'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-surface-border bg-surface/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {['Docs', 'Examples', 'Blog'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-ink-muted hover:text-ink transition-colors duration-200 font-medium tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/cole-ramer/react-starter-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-muted hover:text-ink transition-colors px-4 py-2"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-sm font-semibold bg-accent text-surface px-4 py-2 rounded hover:bg-accent-dim transition-colors font-display tracking-wide"
          >
            Get started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-ink-muted hover:text-ink transition-colors"
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-surface-border bg-surface-muted px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {['Docs', 'Examples', 'Blog', 'GitHub'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-ink-muted hover:text-ink transition-colors font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="text-sm font-semibold bg-accent text-surface px-4 py-2 rounded text-center font-display tracking-wide"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  )
}
