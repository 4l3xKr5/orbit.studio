import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Services", href: "#services" },
      { label: "Réalisations", href: "#realisations" },
      { label: "Système digital", href: "#systeme-digital" },
      { label: "Méthode", href: "#methode" },
    ],
  },
  {
    title: "Offres",
    links: [
      { label: "Site Web Premium", href: "#services" },
      { label: "Agent IA Sur Mesure", href: "#services" },
      { label: "Système Digital Complet", href: "#systeme-digital" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-0 py-12 text-white sm:py-16">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[100px]" />

      <Container>
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <a href="#" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white text-sm font-black text-black">
                O
              </span>

              <span>
                <span className="block text-sm font-black uppercase tracking-[0.22em] text-white">
                  ORBIT
                </span>
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                  Studio
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              ORBIT Studio conçoit des sites web premium, des agents IA sur
              mesure et des systèmes digitaux complets pour aider les
              entreprises ambitieuses à gagner en crédibilité, en temps et en
              opportunités.
            </p>

            <div className="mt-7">
              <Button href="#contact" variant="secondary">
                Demander un audit gratuit
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
                  {group.title}
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-zinc-400 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-600 sm:flex-row">
          <p>© 2026 ORBIT Studio. Tous droits réservés.</p>
          <p>Sites Web Premium · Agents IA · Systèmes Digitaux Complets</p>
        </div>
      </Container>
    </footer>
  );
}
