"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { SectionLabel } from "@/components/ui/SectionLabel";

const projects = [
  {
    title: "Maison Élégance",
    sector: "Marque premium",
    type: "Site vitrine premium",
    description:
      "Une présence digitale haut de gamme pensée pour renforcer la crédibilité de la marque et valoriser son univers visuel.",
    tags: ["Direction artistique", "Site vitrine", "Responsive"],
    result: "Image de marque renforcée",
    gradient: "from-cyan-300/25 via-blue-500/10 to-violet-500/25",
  },
  {
    title: "Lumière Clinic",
    sector: "Esthétique & bien-être",
    type: "Site web + parcours client",
    description:
      "Une expérience web claire, rassurante et premium pour présenter les prestations et faciliter la prise de contact.",
    tags: ["UX premium", "Conversion", "Design system"],
    result: "Parcours utilisateur clarifié",
    gradient: "from-violet-300/25 via-fuchsia-500/10 to-cyan-300/20",
  },
  {
    title: "Nexora AI",
    sector: "Service digital",
    type: "Agent IA sur mesure",
    description:
      "Un assistant intelligent conçu pour répondre aux questions fréquentes, qualifier les demandes et automatiser une partie du suivi.",
    tags: ["Agent IA", "Automatisation", "Qualification"],
    result: "Temps de réponse optimisé",
    gradient: "from-amber-200/20 via-orange-500/10 to-violet-400/25",
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

export function Work() {
  return (
    <section
      id="realisations"
      className="relative isolate overflow-hidden px-0 py-24 text-white sm:py-28 lg:py-32"
    >
      <Glow tone="violet" size="lg" className="-left-32 top-20" />
      <Glow tone="cyan" size="md" className="-right-20 bottom-20" />

      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel tone="cyan">Réalisations</SectionLabel>

            <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Des expériences digitales conçues pour inspirer confiance et
              générer plus d’opportunités.
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-zinc-400">
            Chaque projet est pensé comme un actif digital : esthétique,
            crédible, rapide, responsive et orienté résultat.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <Card padding="none" interactive className="h-full">
                <div
                  className={`relative h-72 overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_30%)]" />

                  <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/15 bg-black/35 p-4 backdrop-blur-xl">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex gap-1.5" aria-hidden="true">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>

                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-zinc-300">
                        Preview
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="h-3 w-2/3 rounded-full bg-white/35" />
                      <div className="h-3 w-1/2 rounded-full bg-white/20" />
                      <div className="mt-5 grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-xl bg-white/12" />
                        <div className="h-16 rounded-xl bg-white/8" />
                        <div className="h-16 rounded-xl bg-white/12" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-zinc-950/75 p-4 backdrop-blur-xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                      {project.result}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-zinc-300">
                      {project.sector}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-zinc-300">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:flex-row sm:p-8">
          <div>
            <p className="text-lg font-bold text-white">
              Tu veux remplacer ces exemples par tes vrais projets ?
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
              Garde la structure, puis remplace les noms, secteurs,
              descriptions et visuels par tes cas clients réels.
            </p>
          </div>

          <Button href="#contact" variant="secondary">
            Discuter d’un projet
            <ArrowIcon />
          </Button>
        </div>
      </Container>
    </section>
  );
}
