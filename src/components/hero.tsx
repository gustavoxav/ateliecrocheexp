export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pb-10 pt-12 text-center md:pb-16 md:pt-20">
      {/* Subtle decorative element */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-accent/10 blur-3xl md:h-96 md:w-96" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <span className="inline-block rounded-full bg-accent/15 px-3 py-1 font-sans text-xs font-medium uppercase tracking-widest text-accent-foreground/80 md:text-xs">
          Venha para a Copa do Mundo 2026
        </span>

        <h1 className="max-w-lg font-serif text-3xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-5xl md:leading-tight">
          Ateliê Crochê
        </h1>

        <p className="max-w-sm font-sans text-sm leading-relaxed text-muted-foreground md:max-w-md md:text-base">
          Peças em crochê feitas à mão, sob encomenda
        </p>

        <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground/70 md:text-sm">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/60" />
            Feito à mão
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent/60" />
            Sob encomenda
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/60" />
            Peça única
          </span>
        </div>
      </div>
    </section>
  )
}
