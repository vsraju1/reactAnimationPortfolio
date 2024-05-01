
import "./App.css";

//components
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar/>
        <Hero />
      </section>
      {/* <section id="Services"><Parallax type="services"/></section> */}
      {/* <section><Services/></section> */}
      {/* <section id="Portfolio"><Parallax type="portfolio"/></section> */}
      {/* <Portfolio /> */}
      {/* <section id="Contact"><Contact/></section> */}
      {/* <section id="footer"><Footer /></section> */}

    </>
  );
}

export default App;
