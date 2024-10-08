import React from "react";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col">
      <Hero />

      {/* New Welcome Section */}
      {/* <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-300 rounded-full transform -translate-x-4 -translate-y-4"></div>
                <img
                  className="relative w-full h-auto max-w-lg rounded-full object-cover shadow-2xl"
                  src="/12345.jpeg"
                  alt="MedX Facility"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Welcome to MedX
              </h2>
              <p className="text-xl text-emerald-600 font-semibold italic">
                Your Trusted Partner for Medical Journeys to Türkiye
              </p>
              <p className="text-xl text-gray-500 leading-relaxed">
                At MedX, we are committed to helping international patients
                access world-class healthcare services in Türkiye. With our
                personalized guidance and comprehensive support, we ensure that
                every aspect of your medical journey is handled with care and
                professionalism, so you can focus on your health and recovery.
              </p>
              <div className="pt-4">
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Medical Excellence Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="text-gray-600 body-font bg-gradient-to-b from-white to-gray-100"
      >
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <motion.div variants={fadeIn} className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Discover Our Medical Excellence
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-xl">
              At MedX, we combine cutting-edge technology with compassionate
              care. Our state-of-the-art facilities and expert medical team
              ensure that you receive the highest quality treatment for your
              health needs.
            </p>
          </motion.div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <motion.div variants={fadeIn} className="md:p-2 p-1 w-1/2">
                <img
                  alt="Modern medical equipment"
                  className="w-full object-cover h-full object-center block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  src="/a.jpg"
                />
              </motion.div>
              <motion.div variants={fadeIn} className="md:p-2 p-1 w-1/2">
                <img
                  alt="Caring medical staff"
                  className="w-full object-cover h-full object-center block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  src="/b.jpg"
                />
              </motion.div>
              <motion.div variants={fadeIn} className="md:p-2 p-1 w-full">
                <img
                  alt="State-of-the-art operating room"
                  className="w-full h-full object-cover object-center block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  src="/h.jpg"
                />
              </motion.div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <motion.div variants={fadeIn} className="md:p-2 p-1 w-full">
                <img
                  alt="Patient consultation"
                  className="w-full h-full object-cover object-center block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  src="/d.jpg"
                />
              </motion.div>
              <motion.div variants={fadeIn} className="md:p-2 p-1 w-1/2">
                <img
                  alt="Advanced diagnostic equipment"
                  className="w-full object-cover h-full object-center block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  src="/e.jpg"
                />
              </motion.div>
              <motion.div variants={fadeIn} className="md:p-2 p-1 w-1/2">
                <img
                  alt="Comfortable recovery room"
                  className="w-full object-cover h-full object-center block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  src="/c.jpg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
