import Navigation from "@/components/new/Navigation";
import HeroSection from "@/components/new/HeroSection";
import AboutSection from "@/components/new/AboutSection";
import ExpertiseSection from "@/components/new/ExpertiseSection";
import ExperienceTimeline from "@/components/new/ExperienceTimeline";
import ProjectsSection from "@/components/new/ProjectsSection";
import CertificationsSection from "@/components/new/CertificationsSection";
import ContactSection from "@/components/new/ContactSection";
import Footer from "@/components/new/Footer";
import ScrollProgress from "@/components/new/ScrollProgress";

export default function HomePage() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
