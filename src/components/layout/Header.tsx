"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Système", href: "#systeme-digital" },
  { label: "Méthode", href: "#methode" },
  { label: "FAQ", href: "#faq" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      {open ? (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12" />
        </>
      ) : (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]/70 backdrop-blur-2xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white text-sm font-black text-black shadow-[0_0_40px_rgba(255,255,255,0.14)]">
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

          <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-400 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact" size="sm">
              Audit gratuit
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition hover:bg-white/[0.09] lg:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 py-5 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Demander un audit gratuit
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
