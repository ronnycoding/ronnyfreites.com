import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import DownloadCVSection from '@/components/DownloadCVSection'
import ContactSection from '@/components/ContactSection'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box overflowX="hidden">
      <Navigation />
      <HeroSection />
      <Box id="about">
        {/* About section will be added here */}
      </Box>
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <DownloadCVSection />
      <ContactSection />
    </Box>
  );
}
