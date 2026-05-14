"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { SectionLabel } from "@/components/ui/SectionLabel";

const processSteps = [
  {
    number: "01",
    title: "Audit",
    description:
      "Nous analysons votre présence digitale, votre image, vos objectifs, votre parcours client et les opportunités d’amélioration.",
    detail: "Objectif : comprendre où vous êtes et ce qui bloque votre croissance.",
  },
  {
    number: "02",
    title: "Stratégie",
    description:
      "Nous définissons la structure du site, les messages clés, les offres à mettre en avant et le parcours de conversion.",
    detail: "Objectif : créer une base claire avant de passer au design.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Nous concevons une interface premium, moderne et responsive, alignée avec votre positionnement et votre cible.",
    detail: "Objectif : inspirer confiance dès les premières secondes.",
  },
  {
    number: "04",
    title: "Développement",
    description:
      "Nous développons un site rapide, propre, responsive et maintenable, avec une attention forte portée aux détails.",
    detail: "Objectif : obtenir une expérience fluide sur tous les appareils.",
  },
  {
    number: "05",
    title: "IA & automatisation",
    description:
      "Nous ajoutons les agents IA, formulaires intelligents, notifications, emails ou automatisations nécessaires à votre activité.",
    detail: "Objectif : faire gagner du temps et mieux qualifier vos demandes.",
  },
  {
    number: "06",
    title: "Lancement",
    description:
      "Nous vérifions le responsive, la performance, le SEO de base, les formulaires, puis nous mettons le site en ligne.",
    detail: "Objectif : publier une version professionnelle et prête à convertir.",
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

export function Process() {
  return (
    <section
      id="methode"
      className="relative isolate overflow-hidden px-0 py-24 text-white sm:py-28 lg:py-32"
    >
      <Glow tone="cyan" size="md" className="-left-24 top-24" />
      <Glow tone="violet" size="lg" className="-right-40 bottom-0" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionLabel tone="neutral">Méthode</SectionLabel>

            <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Une méthode claire pour passer d’une idée à un système digital
              performant.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Chaque projet ORBIT Studio suit un processus structuré pour
              éviter l’improvisation, garder une direction premium et construire
              une solution réellement utile pour votre croissance.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href="#contact" size="lg">
                Demander un audit gratuit
                <ArrowIcon />
              </Button>

              <Button href="#systeme-digital" variant="secondary" size="lg">
                Voir le système complet
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-300/50 via-white/15 to-violet-300/40 md:block" />

            <div className="space-y-5">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="relative"
                >
                  <Card
                    variant={index === 0 ? "elevated" : "default"}
                    padding="lg"
                    interactive
                    className="md:ml-16"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:absolute md:-left-16 md:top-6">
                        {step.number}
                      </div>

                      <div>
                        <h3 className="text-2xl font-black tracking-tight text-white">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
                          {step.description}
                        </p>

                        <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-zinc-300">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-center backdrop-blur-xl sm:p-8">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            Cette méthode permet de construire un site beau, mais surtout utile :
            une expérience claire, crédible, responsive et connectée aux bons
            outils pour générer plus d’opportunités.
          </p>
        </div>
      </Container>
    </section>
  );
}
