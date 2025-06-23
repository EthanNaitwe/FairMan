import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import MusicSection from "@/components/music-section";
import VideosSection from "@/components/videos-section";
import TourSection from "@/components/tour-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <VideosSection />
      <TourSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
