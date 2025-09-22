import DescriptionBanner from "@/components/sections/DescriptionBanner";
import FeatureTags from "@/components/sections/FeatureTag";
import { GallerySection } from "@/components/sections/GallerySection";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DescriptionBanner />
      <FeatureTags />
      <GallerySection />
    </div>
  );
}
