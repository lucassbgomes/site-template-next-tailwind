import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { PageHeroSection } from '@/app/components/pages/hero-section';
import { PageCTASection } from '@/app/components/pages/cta-section';
import { PageStatsSection } from '@/app/components/pages/stats-section';

export default function Home() {
  return (
    <>
      <Header />

      <main className="mt-24 flex h-full w-full flex-col justify-center lg:max-w-7xl">
        <PageHeroSection />

        <PageCTASection />

        <PageStatsSection />
      </main>

      <Footer />
    </>
  );
}
