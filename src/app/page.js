import { Header, TopBar, Divider, HeroSection } from '@/components';

export default function Home() {
  return (
    <main>
      <TopBar />
      <Divider paddingVertical="py-4" />
      <Header />
      <Divider paddingVertical="py-5 lg:py-8" />
      <HeroSection />
    </main>
  );
}
