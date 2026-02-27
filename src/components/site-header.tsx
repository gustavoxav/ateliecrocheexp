import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 md:h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-lg font-bold tracking-wide text-foreground md:text-xl">
            Ateliê Crochê
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <a
            href="https://instagram.com/luiza_boscolo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
            aria-label="Instagram"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  )
}
