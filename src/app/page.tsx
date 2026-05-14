import { Contact } from "@/components/sections/Contact";
import { DigitalSystem } from "@/components/sections/DigitalSystem";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { WhyOrbit } from "@/components/sections/WhyOrbit";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Work />
      <DigitalSystem />
      <Process />
      <WhyOrbit />
      <FAQ />
      <Contact />
    </main>
  );
}
