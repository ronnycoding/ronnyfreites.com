import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import DownloadCVSection from '../components/DownloadCVSection'
import ContactSection from '../components/ContactSection'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box overflowX="hidden">
      <Navigation />
      <Box id="about" pt={16}>
        <HeroSection />
      </Box>
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <DownloadCVSection />
      <ContactSection />
    </Box>
  );
}
