import CallToAction from "@/components/call-to-action/call-to-action";
import ContactUs from "@/components/contact-us/contact-us";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroSection from "@/components/hero-section/hero-section";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CallToAction />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
