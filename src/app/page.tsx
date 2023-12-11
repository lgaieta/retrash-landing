import HeroSection from '@sections/HeroSection';
import BenefitsSection from '@sections/BenefitsSection';

export default function Home() {
  return (
    <main className='flex w-full flex-col text-foreground'>
      <HeroSection />
      <BenefitsSection />
    </main>
  );
}
