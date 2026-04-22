import AboutHero from '@/components/about/AboutHero';
import CoreValuesSlider from '@/components/about/CoreValuesSlider';
import TeamSection from '@/components/about/TeamSection';
import AwardsSection from '@/components/about/AwardsSection';
import FaqSection from '@/components/about/FaqSection';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';

export const metadata = {
  title: 'About ,Karya',
  description: 'Meet the small Bhubaneswar-based team behind Karya ,a digital agency building web, apps and marketing for Indian brands.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CoreValuesSlider />
      <TeamSection />
      <AwardsSection />
      <TestimonialsSlider />
      <FaqSection />
    </main>
  );
}
