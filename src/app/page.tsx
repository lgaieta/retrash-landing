import HeroSection from '@sections/HeroSection';
import BenefitsSection from '@sections/BenefitsSection';
import HowWorksSection from '@sections/HowWorksSection';

export default function Home() {
  return (
    <main className='flex w-full flex-col text-foreground'>
      <HeroSection />
      <BenefitsSection />
      <HowWorksSection />
    </main>
  );
}
