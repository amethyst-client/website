import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StickySection from "@/components/StickyScroll";
import TextRevealSection from "@/components/TextRevealSection";
import FeatureGridSection from "@/components/FeatureGrid";
import HorizontalScrollSection from "@/components/HorizontalScroll";
import DownloadSection from "@/components/DownloadSection";
import IntroReveal from "@/components/IntroReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0613] text-[#e9e7ff]">
      <IntroReveal />
      <Header />
      <main className="relative">
        <Hero />
        <StickySection />
        <TextRevealSection />
        <FeatureGridSection />
        <HorizontalScrollSection />
        <DownloadSection />
      </main>
    </div>
  );
}
