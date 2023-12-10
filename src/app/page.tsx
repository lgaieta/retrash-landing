import HeroSection from '@sections/HeroSection';
import BenefitsSection from '@sections/BenefitsSection'

export default function Home() {
  return (
    <main className='flex flex-col w-full text-foreground'>
      <HeroSection />
      <BenefitsSection/>
    </main>
  );
}
