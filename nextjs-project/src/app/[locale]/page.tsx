import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import Footer from '@/components/sections/Footer/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      {/* Existing Chakra UI sections temporarily hidden - will be migrated in Phase 3 */}
      {/* <ExperienceSection /> */}
      {/* <SkillsSection /> */}
      {/* <ProjectsSection /> */}
      {/* <DownloadCVSection /> */}
      {/* <ContactSection /> */}
      <Footer />
    </main>
  );
}
