import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import Footer from '@/components/sections/Footer/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ExpertiseSection />
      <ProjectsSection />
      {/* Existing Chakra UI sections temporarily hidden - will be migrated in Phase 3 */}
      {/* <DownloadCVSection /> */}
      {/* <ContactSection /> */}
      <Footer />
    </main>
  );
}
