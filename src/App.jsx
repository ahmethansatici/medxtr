import React from "react";
import "./App.css";

import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import ServicesSection from "./components/ServicesSection";
import FAQ from "./components/Faq";
import WhyChooseTr from "./components/WhyChooseTr";
import WhyChooseUs from "./components/WhyChooseUs";
import Home from "./pages/Home";

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
