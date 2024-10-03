import "./App.css";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Hero />
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
