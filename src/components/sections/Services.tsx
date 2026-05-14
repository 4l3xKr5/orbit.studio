"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { SectionLabel } from "@/components/ui/SectionLabel";

const services = [
  {
    title: "Site Web Premium",
    eyebrow: "Vitrine & e-commerce",
    description:
      "Des sites vitrines et e-commerce haut de gamme, conçus pour renforcer votre image, rassurer vos visiteurs et transformer votre présence en ligne en véritable actif business.",
    features: [
      "Design sur mesure",
      "Expérience responsive",
      "SEO technique de base",
      "Performance optimisée",
      "Pages clés orientées conversion",
    ],
    cta: "Créer mon site premium",
    tone: "cyan",
    featured: false,
  },
  {
    title: "Agent IA Sur Mesure",
    eyebrow: "Assistant intelligent",
    description:
      "Un agent IA personnalisé pour répondre aux questions, guider vos prospects, qualifier les demandes et faire gagner du temps à votre entreprise.",
    features: [
      "Réponses automatisées",
      "Qualification des prospects",
      "FAQ intelligente",
      "Scénarios personnalisés",
      "Intégration site ou outils métier",
    ],
    cta: "Créer mon agent IA",
    tone: "violet",
    featured: false,
  },
  {
    title: "Système Digital Complet",
    eyebrow: "Site + IA + automatisations",
    description:
      "Une solution complète qui connecte votre site web, votre agent IA, vos formulaires et vos automatisations pour attirer, qualifier et convertir plus d’opportunités.",
    features: [
      "Site web premium",
      "Agent IA intégré",
      "Formulaires intelligents",
      "Automatisations de suivi",
      "Centralisation des demandes",
    ],
    cta: "Construire mon système",
    tone: "gold",
    featured: true,
  },
];

function ServiceIcon({ tone }: { tone: string }) {
  const gradients: Record<string, string> = {
    cyan: "from-cyan-300/30 to-blue-500/30 text-cyan-100",
    violet: "from-violet-300/30 to-fuchsia-500/30 text-violet-100",
    gold: "from-amber-200/30 to-orange-500/30 text-amber-100",
  };

  return (
    <div
      className={`mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${
        gradients[tone] ?? gradients.cyan
      }`}
    >
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 16v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 18h4" />
      </svg>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-cyan-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden px-0 py-24 text-white sm:py-28 lg:py-32"
    >
      <Glow tone="cyan" size="md" className="-left-24 top-20" />
      <Glow tone="violet" size="lg" className="-right-32 bottom-10" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel tone="violet">Services</SectionLabel>

          <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trois offres pour construire une présence digitale premium,
            intelligente et performante.
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
            ORBIT Studio réunit design haut de gamme, intelligence artificielle
            et automatisations pour créer des expériences digitales qui ne sont
            pas seulement belles, mais utiles pour votre croissance.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <Card
                variant={service.featured ? "elevated" : "default"}
                padding="lg"
                interactive
                className={`h-full ${
                  service.featured
                    ? "border-cyan-300/25 bg-white/[0.075]"
                    : ""
                }`}
              >
                {service.featured && (
                  <div className="absolute right-6 top-6 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-cyan-100">
                    Offre phare
                  </div>
                )}

                <ServiceIcon tone={service.tone} />

                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
                  {service.eyebrow}
                </p>

                <h3 className="max-w-sm text-2xl font-black tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-4 min-h-28 text-sm leading-7 text-zinc-400">
                  {service.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-zinc-300"
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={service.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {service.cta}
                    <ArrowIcon />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-center backdrop-blur-xl sm:p-8">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            Chaque projet commence par un audit gratuit pour identifier vos
            priorités : image de marque, conversion, automatisation, IA ou
            refonte complète de votre système digital.
          </p>
        </div>
      </Container>
    </section>
  );
}
