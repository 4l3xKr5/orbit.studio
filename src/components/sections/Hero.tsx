"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { SectionLabel } from "@/components/ui/SectionLabel";

const metrics = [
  {
    value: "24/7",
    label: "Réponses IA",
  },
  {
    value: "+32%",
    label: "Conversion estimée",
  },
  {
    value: "3",
    label: "Offres premium",
  },
];

const services = [
  "Site vitrine premium",
  "E-commerce haut de gamme",
  "Agent IA sur mesure",
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
      className="h-4 w-4"
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

function DeviceShowcase() {
  return (
    <div className="relative min-h-[28rem] w-full lg:min-h-[36rem]">
      <Glow tone="cyan" size="lg" className="-left-16 top-10" />
      <Glow tone="violet" size="lg" className="-right-20 bottom-0" />

      <motion.div
        initial={{ opacity: 0, y: 28, rotate: -1.5 }}
        animate={{ opacity: 1, y: 0, rotate: -1.5 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute right-0 top-5 w-[92%] rounded-[2rem] border border-white/15 bg-zinc-950/80 p-3 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
      >
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#070707]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-cyan-100">
              Live preview
            </span>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(139,92,246,0.22),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(103,232,249,0.18),transparent_36%)]" />

            <div className="relative z-10 grid h-full grid-cols-[1.05fr_0.95fr] gap-6">
              <div className="flex flex-col justify-center">
                <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-cyan-200">
                  ORBIT Experience
                </p>

                <h3 className="max-w-sm text-3xl font-black leading-[0.92] tracking-tight text-white sm:text-5xl">
                  Votre présence digitale en orbite.
                </h3>

                <p className="mt-4 max-w-xs text-xs leading-6 text-zinc-400 sm:text-sm">
                  Design premium, IA intégrée et automatisations utiles pour
                  transformer vos visiteurs en opportunités.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.65rem] text-zinc-200"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 via-transparent to-violet-500/25" />

                <div className="relative z-10 flex h-full flex-col justify-between rounded-[1.1rem] border border-white/10 bg-black/35 p-4 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">
                      Système digital
                    </span>
                    <SparkIcon />
                  </div>

                  <div className="space-y-3">
                    {[
                      ["Site web", "100%"],
                      ["Agent IA", "86%"],
                      ["Automatisation", "74%"],
                    ].map(([label, width]) => (
                      <div key={label}>
                        <div className="mb-2 flex justify-between text-[0.68rem] text-zinc-300">
                          <span>{label}</span>
                          <span>{width}</span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-white"
                            style={{ width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto h-8 w-[30%] rounded-b-2xl bg-gradient-to-b from-zinc-800 to-black" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -24, y: 28, rotate: 2.5 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 2.5 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-4 left-0 w-[52%] rounded-[1.75rem] border border-white/15 bg-zinc-950/90 p-2.5 shadow-2xl backdrop-blur-2xl"
      >
        <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-white/10 bg-black p-4">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-violet-200">
            Services
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-xl border border-white/10 bg-white/[0.05] p-3"
              >
                <div className="mb-5 h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-300/40 to-violet-400/40" />
                <p className="text-[0.62rem] font-semibold leading-tight text-white">
                  {service}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 h-2 w-2/3 rounded-full bg-white/20" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: 30, rotate: -2 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -2 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="absolute bottom-0 right-8 w-[24%] min-w-32 rounded-[1.8rem] border border-white/15 bg-zinc-950/95 p-2 shadow-2xl backdrop-blur-2xl"
      >
        <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-white/20" />

        <div className="aspect-[9/16] overflow-hidden rounded-[1.25rem] border border-white/10 bg-black p-3">
          <div className="mb-5 flex items-center justify-between">
            <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-300 to-violet-400" />
            <span className="h-7 w-7 rounded-full border border-white/10 bg-white/[0.04]" />
          </div>

          <p className="text-lg font-black leading-none tracking-tight text-white">
            Audit gratuit
          </p>

          <p className="mt-3 text-[0.62rem] leading-4 text-zinc-400">
            Qualifiez votre projet et identifiez vos meilleures opportunités
            digitales.
          </p>

          <div className="mt-5 rounded-full bg-white px-3 py-2 text-center text-[0.62rem] font-bold text-black">
            Démarrer
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-0 pb-20 pt-32 text-white sm:pt-36 lg:min-h-screen lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 -z-20 bg-[#050505]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(103,232,249,0.13),transparent_32%),radial-gradient(circle_at_85%_35%,rgba(139,92,246,0.16),transparent_32%),linear-gradient(to_bottom,rgba(255,255,255,0.035),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <SectionLabel tone="cyan">
              Agence digitale nouvelle génération
            </SectionLabel>

            <h1 className="text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Des sites web premium et des agents IA conçus pour faire grandir
              votre entreprise.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              ORBIT Studio accompagne les entreprises ambitieuses avec des sites
              vitrines, e-commerce, agents IA et systèmes digitaux complets
              pensés pour inspirer confiance, automatiser les échanges et
              générer plus d’opportunités.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg">
                Demander un audit gratuit
                <ArrowIcon />
              </Button>

              <Button href="#realisations" variant="secondary" size="lg">
                Voir les réalisations
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-7">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <DeviceShowcase />
        </div>

        <Card
          variant="outline"
          padding="sm"
          className="mt-12 flex flex-col gap-4 rounded-full border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between lg:mt-16"
        >
          <span className="font-medium text-zinc-300">
            Ils nous font confiance pour construire des expériences digitales
            premium.
          </span>

          <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 sm:justify-end">
            <span>Design</span>
            <span>IA</span>
            <span>Automatisation</span>
            <span>Conversion</span>
          </div>
        </Card>
      </Container>
    </section>
  );
}
