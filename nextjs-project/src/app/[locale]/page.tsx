import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import DownloadCVSection from '@/components/DownloadCVSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/sections/Footer/Footer'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box overflowX="hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <DownloadCVSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
