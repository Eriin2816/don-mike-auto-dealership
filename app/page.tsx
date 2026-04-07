import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import Services from "@/components/Services";
import WhoItsFor from "@/components/WhoItsFor";
import Financing from "@/components/Financing";
import HowItWorks from "@/components/HowItWorks";
import WhyAdaptive from "@/components/WhyAdaptive";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";

export default function Home() {
  return (
    <>
      <PopupForm />
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <FeaturedVehicles />
        <Services />
        <WhoItsFor />
        <Financing />
        <HowItWorks />
        <WhyAdaptive />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
