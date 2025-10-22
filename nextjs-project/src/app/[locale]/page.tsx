import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { TechStackSection } from '@/components/sections/TechStackSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
// import { BlogSection } from '@/components/sections/BlogSection'
// import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { OpenSourceSection } from '@/components/sections/OpenSourceSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ContactSection } from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ExpertiseSection />
      <TechStackSection />
      <ProjectsSection />
      <CertificationsSection />
      {/* Blog Section - Temporarily disabled until blog content is available */}
      {/* <BlogSection /> */}
      {/* Testimonials Section - Temporarily disabled until testimonials are collected */}
      {/* <TestimonialsSection /> */}
      <OpenSourceSection />
      <ServicesSection />
      <ContactSection />
      {/* Existing Chakra UI sections temporarily hidden - will be migrated in Phase 3 */}
      {/* <DownloadCVSection /> */}
      <Footer />
    </main>
  );
}
