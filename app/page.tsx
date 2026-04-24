import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Differentiators } from "@/components/sections/Differentiators";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Metrics } from "@/components/sections/Metrics";
import { Partners } from "@/components/sections/Partners";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Metrics />
        <Services />
        <Portfolio />
        <Differentiators />
        <Industries />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
