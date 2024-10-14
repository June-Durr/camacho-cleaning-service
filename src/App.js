import "./App.css";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import LeadCaptureForm from "./components/LeadCaptureForm";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Hero />
      <Service />
      <LeadCaptureForm />
      <Services />
      <FAQ />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
