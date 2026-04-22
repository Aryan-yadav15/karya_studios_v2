import HeroSection from '@/components/home/HeroSection';
import VideoSection from '@/components/home/VideoSection';
import LogoMarquee from '@/components/home/LogoMarquee';
import AboutSection from '@/components/home/AboutSection';
import ProjectSlider from '@/components/home/ProjectSlider';
import ServicesSection from '@/components/home/ServicesSection';
import ServicesBlackSection from '@/components/home/ServicesBlackSection';
import PricingSection from '@/components/home/PricingSection';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import BlogPreview from '@/components/home/BlogPreview';
import FeaturedProject from '@/components/shared/FeaturedProject';
import { PROJECTS } from '@/lib/data';

export default function HomePage() {
  const featured = PROJECTS.find((p) => p.featured);
  return (
    <main>
      <HeroSection />
      <VideoSection />
      <LogoMarquee />
      <AboutSection />
      {featured ? <FeaturedProject project={featured} /> : null}
      <ProjectSlider />
      <ServicesSection />
      <ServicesBlackSection />
      <PricingSection />
      <TestimonialsSlider />
      <BlogPreview />
    </main>
  );
}
