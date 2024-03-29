import {
  Header,
  TopBar,
  Divider,
  HeroSection,
  TreatmentsSections,
  ServicesSections,
  FeaturesSection,
  CheckupPlansSection,
  ReviewsSection,
  AppointmentSection,
  FooterSection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <TopBar />
      <Divider paddingVertical="py-4" />
      <Header />
      <Divider paddingVertical="py-5 lg:py-8" />
      <HeroSection />
      <Divider paddingVertical="py-10" />
      <TreatmentsSections />
      <Divider paddingVertical="py-8 lg:py-16" />
      <ServicesSections />
      <Divider paddingVertical="py-10" />
      <FeaturesSection />
      <Divider paddingVertical="py-10" />
      <CheckupPlansSection />
      <ReviewsSection />
      <Divider paddingVertical="py-10" />
      <AppointmentSection />
      <Divider paddingVertical="py-10" />
      <FooterSection />
    </main>
  );
}
