export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="text-sm font-black uppercase tracking-[0.24em]">
          ORBIT Studio
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#realisations" className="transition hover:text-white">
            Réalisations
          </a>
          <a href="#methode" className="transition hover:text-white">
            Méthode
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          Audit gratuit
        </a>
      </div>
    </header>
  );
}
