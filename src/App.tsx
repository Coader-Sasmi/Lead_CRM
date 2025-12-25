import Challenges from "./components/Challenges";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Solutions from "./components/Solutions";
import Sponsors from "./components/Sponsors";
import Testimonials from "./components/Testimonials";


export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Challenges />
      <HowItWorks />
      <Testimonials />
      <Solutions />
      <Sponsors />
      <CTA />
      <Footer />
    </div>
  );
}