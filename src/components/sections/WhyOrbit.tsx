"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { SectionLabel } from "@/components/ui/SectionLabel";

const reasons = [
  {
    title: "Design premium",
    description:
      "Une direction visuelle moderne, élégante et crédible pour donner immédiatement confiance à vos visiteurs.",
  },
  {
    title: "Vision business",
    description:
      "Chaque section, chaque CTA et chaque parcours est pensé pour servir un objectif clair : générer plus d’opportunités.",
  },
  {
    title: "IA intégrée",
    description:
      "Nous ajoutons des agents IA utiles, pas gadgets, pour répondre, guider ou qualifier les demandes.",
  },
  {
    title: "Automatisation utile",
    description:
      "Les formulaires, emails, notifications et suivis peuvent être connectés pour réduire les tâches répétitives.",
  },
  {
    title: "Expérience responsive",
    description:
      "Votre site doit être impeccable sur ordinateur, tablette et mobile, car vos prospects ne consultent pas tous depuis le même écran.",
  },
  {
    title: "Approche sur mesure",
    description:
      "Nous construisons une solution adaptée à votre image, vos offres, vos objectifs et votre réalité business.",
  },
];

const comparison = [
  {
    label: "Site vitrine classique",
    value: "Présence en ligne",
  },
  {
    label: "ORBIT Studio",
    value: "Présence + IA + automatisation + conversion",
  },
];

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

function SparkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
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
  );
}

export function WhyOrbit() {
  return (
    <section
      id="pourquoi-orbit"
      className="relative isolate overflow-hidden px-0 py-24 text-white sm:py-28 lg:py-32"
    >
      <Glow tone="violet" size="lg" className="-left-36 bottom-0" />
      <Glow tone="cyan" size="md" className="-right-24 top-20" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionLabel tone="cyan">Pourquoi ORBIT Studio</SectionLabel>

            <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Design, IA et automatisation réunis dans une seule approche.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              ORBIT Studio ne construit pas seulement un site web. Nous
              concevons une expérience digitale cohérente, premium et connectée
              aux bons outils pour vous aider à gagner en crédibilité, en temps
              et en opportunités.
            </p>

            <div className="mt-9">
              <Button href="#contact" size="lg">
                Demander un audit gratuit
                <ArrowIcon />
              </Button>
            </div>
          </div>

          <Card variant="elevated" padding="lg" className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(103,232,249,0.12),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.15),transparent_32%)]" />

            <div className="relative z-10 space-y-4">
              {comparison.map((item, index) => (
                <div
                  key={item.label}
                  className={`rounded-[1.5rem] border p-5 ${
                    index === 1
                      ? "border-cyan-300/25 bg-cyan-300/10"
                      : "border-white/10 bg-black/25"
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">
                    {item.label}
                  </p>
                  <p
                    className={`mt-3 text-2xl font-black tracking-tight ${
                      index === 1 ? "text-cyan-100" : "text-white"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Card interactive padding="lg" className="h-full">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan-100">
                  <SparkIcon />
                </div>

                <h3 className="text-xl font-black tracking-tight text-white">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {reason.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
