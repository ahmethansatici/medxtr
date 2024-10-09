import React from "react";
import "./App.css";

import Banner from "./components/Banner.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import FAQ from "./components/Faq.jsx";
import WhyChooseTr from "./components/WhyChooseTr.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      <NavBar />
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>

        <section id="why-choose-tr">
          <WhyChooseTr />
        </section>

        <section id="why-choose-us">
          <WhyChooseUs />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="contact-us">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
