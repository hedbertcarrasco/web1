import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Differentiators } from "@/components/sections/Differentiators";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";

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
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
