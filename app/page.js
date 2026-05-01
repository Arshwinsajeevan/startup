import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Showcase />
        <WhyChooseUs />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
