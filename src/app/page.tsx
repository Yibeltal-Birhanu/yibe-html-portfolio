import PageWrapper from "@/components/ui/PageWrapper";
import SectionDivider from "@/components/ui/SectionDivider";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import EngineeringDNA from "@/components/sections/EngineeringDNA";
import Projects from "@/components/sections/Projects";
import AISection from "@/components/sections/AISection";
import TechStack from "@/components/sections/TechStack";
import CurrentlyExploring from "@/components/sections/CurrentlyExploring";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <Introduction />
        <SectionDivider variant="accent" />
        <EngineeringDNA />
        <SectionDivider />
        <Projects />
        <SectionDivider variant="accent" />
        <AISection />
        <SectionDivider />
        <TechStack />
        <SectionDivider variant="accent" />
        <CurrentlyExploring />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </PageWrapper>
  );
}
