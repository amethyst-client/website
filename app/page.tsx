import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import StickySection from "@/components/StickyScroll";
import TextRevealSection from "@/components/TextRevealSection";
import FeatureGridSection from "@/components/FeatureGrid";
import HorizontalScrollSection from "@/components/HorizontalScroll";
import DownloadSection from "@/components/DownloadSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0613] text-[#e9e7ff]">
      <Header />
      <main className="relative">
        <HeroSection />
        <StickySection />
        <TextRevealSection />
        <FeatureGridSection />
        <HorizontalScrollSection />
        <DownloadSection />
      </main>
    </div>
  );
}
