"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { SectionLabel } from "@/components/ui/SectionLabel";

const systemSteps = [
  {
    number: "01",
    title: "Site web premium",
    description:
      "Une interface haut de gamme qui inspire confiance, présente vos offres et guide vos visiteurs vers l’action.",
    accent: "text-cyan-200",
  },
  {
    number: "02",
    title: "Agent IA",
    description:
      "Un assistant intelligent capable de répondre, orienter et qualifier les demandes directement depuis votre site.",
    accent: "text-violet-200",
  },
  {
    number: "03",
    title: "Qualification",
    description:
      "Les prospects sont filtrés selon leur besoin, leur budget, leur urgence et leur niveau d’intérêt.",
    accent: "text-amber-100",
  },
  {
    number: "04",
    title: "Automatisation",
    description:
      "Les demandes sont envoyées au bon endroit : email, CRM, base de données, notification ou séquence de suivi.",
    accent: "text-cyan-200",
  },
];

const benefits = [
  "Moins de tâches manuelles",
  "Réponses plus rapides",
  "Prospects mieux qualifiés",
  "Expérience client plus fluide",
  "Suivi commercial structuré",
  "Image plus premium",
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

export function DigitalSystem() {
  return (
    <section
      id="systeme-digital"
      className="relative isolate overflow-hidden px-0 py-24 text-white sm:py-28 lg:py-32"
    >
      <Glow tone="cyan" size="lg" className="-left-40 top-10" />
      <Glow tone="violet" size="lg" className="-right-40 bottom-10" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel tone="gold">Système Digital Complet</SectionLabel>

            <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Un site web ne suffit plus. Construisez un système digital complet.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              ORBIT Studio connecte votre site web, votre agent IA, vos
              formulaires et vos automatisations pour transformer votre présence
              en ligne en levier de croissance structuré.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-zinc-300"
                >
                  <CheckIcon />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg">
                Demander un audit gratuit
                <ArrowIcon />
              </Button>

              <Button href="#services" variant="secondary" size="lg">
                Voir les services
              </Button>
            </div>
          </div>

          <Card
            variant="elevated"
            padding="lg"
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(103,232,249,0.12),transparent_30%),radial-gradient(circle_at_85%_90%,rgba(139,92,246,0.16),transparent_34%)]" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
                    Architecture
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-white">
                    De la visite à l’opportunité
                  </h3>
                </div>

                <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
                  Automatisé
                </div>
              </div>

              <div className="relative space-y-4">
                <div className="absolute left-6 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-300/50 via-white/15 to-violet-300/40" />

                {systemSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative flex gap-5 rounded-[1.5rem] border border-white/10 bg-black/30 p-5 backdrop-blur-xl"
                  >
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-xs font-black text-white">
                      {step.number}
                    </div>

                    <div>
                      <h4 className={`text-lg font-black ${step.accent}`}>
                        {step.title}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="font-semibold text-white">
                    Opportunité commerciale
                  </span>
                  <span className="text-cyan-200">Lead qualifié</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-200 via-white to-violet-200" />
                </div>

                <p className="mt-4 text-xs leading-6 text-zinc-500">
                  Exemple : un visiteur remplit un formulaire, l’agent IA
                  qualifie la demande, puis une notification et un email
                  automatique sont déclenchés.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
