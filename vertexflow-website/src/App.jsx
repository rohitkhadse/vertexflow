import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudies from "./components/CaseStudies";
import Resources from "./components/Resources";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <CaseStudies />
      <Resources />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;