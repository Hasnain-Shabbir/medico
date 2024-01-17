import { Header, TopBar, Divider } from '@/components';

export default function Home() {
  return (
    <main className="bg-background h-screen">
      <TopBar />
      <Divider paddingVertical="py-4" />
      <Header />
    </main>
  );
}
