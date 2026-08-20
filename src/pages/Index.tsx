import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookingOptionsSection from "@/components/BookingOptionsSection";
import VideosSection from "@/components/VideosSection";
import ShowsCalendarSection from "@/components/ShowsCalendarSection";
import PressKitSection from "@/components/PressKitSection";
import MerchSection from "@/components/MerchSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <BookingOptionsSection />
        <VideosSection />
        <ShowsCalendarSection />
        <PressKitSection />
        <MerchSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
