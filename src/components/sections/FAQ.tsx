"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { SectionLabel } from "@/components/ui/SectionLabel";

const faqs = [
  {
    question: "Combien coûte un site web premium ?",
    answer:
      "Le tarif dépend du niveau de design, du nombre de pages, des fonctionnalités, du contenu et des intégrations. Un site vitrine premium commence généralement autour d’un budget plus accessible qu’un système complet avec IA et automatisations.",
  },
  {
    question: "Pouvez-vous créer uniquement un agent IA ?",
    answer:
      "Oui. ORBIT Studio peut créer un agent IA seul : assistant de qualification, FAQ intelligente, support client, conseiller commercial ou agent interne adapté à vos besoins.",
  },
  {
    question: "Quelle est la différence entre un site classique et votre système digital complet ?",
    answer:
      "Un site classique présente votre activité. Un système digital complet connecte votre site, vos formulaires, votre agent IA et vos automatisations pour mieux attirer, qualifier et suivre vos prospects.",
  },
  {
    question: "Combien de temps prend un projet ?",
    answer:
      "Un site premium simple peut être réalisé en quelques semaines. Un système complet avec IA, automatisations et intégrations demande plus de temps selon la complexité. L’audit permet d’estimer un délai réaliste.",
  },
  {
    question: "Travaillez-vous avec tous les secteurs ?",
    answer:
      "Nous travaillons surtout avec des entreprises ambitieuses qui veulent une image plus premium, plus de clarté commerciale et une meilleure expérience digitale. Les secteurs locaux premium, bien-être, immobilier, restauration, services et e-commerce sont particulièrement adaptés.",
  },
  {
    question: "Proposez-vous un accompagnement après le lancement ?",
    answer:
      "Oui. Selon le projet, nous pouvons proposer un accompagnement pour la maintenance, les optimisations, les automatisations, l’évolution de l’agent IA ou l’amélioration continue du site.",
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

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-cyan-200 transition group-open:rotate-45"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden px-0 py-24 text-white sm:py-28 lg:py-32"
    >
      <Glow tone="cyan" size="md" className="-left-24 top-20" />
      <Glow tone="violet" size="lg" className="-right-40 bottom-0" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionLabel tone="violet">FAQ</SectionLabel>

            <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Les questions avant de lancer votre projet.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              Avant de créer un site, un agent IA ou un système digital complet,
              il est normal d’avoir des questions. Voici les réponses aux points
              les plus fréquents.
            </p>

            <div className="mt-9">
              <Button href="#contact" size="lg">
                Demander un audit gratuit
                <ArrowIcon />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card padding="none" className="overflow-hidden">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-bold leading-7 text-white sm:text-lg">
                        {faq.question}
                      </h3>

                      <PlusIcon />
                    </summary>

                    <div className="border-t border-white/10 px-6 pb-6 pt-5 sm:px-7">
                      <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-center backdrop-blur-xl sm:p-8">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            Vous ne savez pas encore si vous avez besoin d’un site, d’un agent
            IA ou d’un système complet ? L’audit gratuit sert justement à
            clarifier la meilleure approche.
          </p>
        </div>
      </Container>
    </section>
  );
}
