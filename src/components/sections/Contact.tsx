"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { SectionLabel } from "@/components/ui/SectionLabel";

const projectTypes = [
  "Site vitrine premium",
  "Site e-commerce",
  "Agent IA sur mesure",
  "Système digital complet",
  "Refonte de site",
  "Je ne sais pas encore",
];

const budgetRanges = [
  "Moins de 1 500 €",
  "1 500 € - 3 000 €",
  "3 000 € - 5 000 €",
  "5 000 € - 10 000 €",
  "10 000 € et plus",
  "À définir",
];

const contactBenefits = [
  "Audit gratuit et sans engagement",
  "Réponse sous 24h ouvrées",
  "Recommandations claires et actionnables",
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

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-300/10";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden px-0 py-24 text-white sm:py-28 lg:py-32"
    >
      <Glow tone="cyan" size="lg" className="-left-40 top-20" />
      <Glow tone="violet" size="lg" className="-right-40 bottom-0" />

      <Container>
        <Card
          variant="elevated"
          padding="none"
          className="relative overflow-hidden rounded-[2.5rem]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(103,232,249,0.14),transparent_32%),radial-gradient(circle_at_85%_85%,rgba(139,92,246,0.18),transparent_34%)]" />

          <div className="relative z-10 grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="flex flex-col justify-between"
            >
              <div>
                <SectionLabel tone="cyan">Audit gratuit</SectionLabel>

                <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Prêt à construire une présence digitale plus premium et plus
                  intelligente ?
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                  Parlez-nous de votre projet. Nous analyserons vos besoins pour
                  identifier la meilleure approche : site web premium, agent IA,
                  automatisation ou système digital complet.
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {contactBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-zinc-300"
                  >
                    <CheckIcon />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-zinc-950/75 p-5 shadow-[0_24px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-zinc-500"
                  >
                    Prénom
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Alex"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-zinc-500"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="alex@entreprise.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-zinc-500"
                >
                  Entreprise
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Nom de votre entreprise"
                  className={inputClass}
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-zinc-500"
                  >
                    Type de projet
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Choisir une option
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-zinc-500"
                  >
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Choisir une fourchette
                    </option>
                    {budgetRanges.map((budget) => (
                      <option key={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-zinc-500"
                >
                  Votre projet
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Expliquez brièvement votre besoin, votre objectif ou le problème que vous voulez résoudre."
                  className={`${inputClass} min-h-36 resize-none`}
                />
              </div>

              <Button as="button" type="submit" size="lg" className="mt-5 w-full">
                Demander mon audit gratuit
                <ArrowIcon />
              </Button>

              <p className="mt-4 text-center text-xs leading-6 text-zinc-500">
                En envoyant ce formulaire, vous demandez à être recontacté pour
                échanger sur votre projet.
              </p>
            </motion.form>
          </div>
        </Card>
      </Container>
    </section>
  );
}
