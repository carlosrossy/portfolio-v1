import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact';
import { ExperienceSection } from '@/components/sections/experience';
import { HeroSection } from '@/components/sections/hero';
import { ProjectsSection } from '@/components/sections/projects';

export default function Home() {
  return (
    <div className="flex flex-col gap-32 px-0">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
