import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideosSection from "@/components/VideosSection";
import ShowsSection from "@/components/ShowsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <VideosSection />
        <ShowsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
