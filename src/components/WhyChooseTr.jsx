import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Heart,
  Scissors,
  Baby,
  Eye,
  Flower2,
  Smile,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureIcon = ({ icon: Icon, text }) => (
  <motion.div
    className="flex items-center space-x-2 text-primary-lighter"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="h-6 w-6" />
    <span className="text-sm font-medium">{text}</span>
  </motion.div>
);

const WhyChooseTr = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const servicesElement = document.getElementById("services");
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-secondary to-secondary-dark py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={key}
          className="flex flex-col lg:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-primary-light rounded-2xl"
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <motion.img
                className="relative w-full h-auto max-w-lg rounded-2xl object-cover shadow-2xl"
                src="/12345.jpeg"
                alt="Medical Care in Türkiye"
                initial={{ scale: 1.2, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
          <motion.div className="lg:w-1/2 space-y-8" variants={itemVariants}>
            <motion.h2
              className="text-4xl font-extrabold text-primary-darker tracking-tight sm:text-5xl"
              variants={itemVariants}
            >
              Why Choose Türkiye for Medical Care?
            </motion.h2>
            <motion.p
              className="text-xl text-primary font-semibold italic"
              variants={itemVariants}
            >
              World-Class Healthcare at Competitive Prices
            </motion.p>
            <motion.p
              className="text-lg text-primary-dark leading-relaxed"
              variants={itemVariants}
            >
              Türkiye has become a global hub for medical tourism, offering
              top-tier healthcare facilities, highly skilled doctors, and
              cutting-edge treatments at competitive costs. Patients from all
              over the world come to Türkiye for a wide range of procedures.
            </motion.p>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              <FeatureIcon icon={Heart} text="Advanced surgeries" />
              <FeatureIcon icon={Scissors} text="Cosmetic treatments" />
              <FeatureIcon icon={Baby} text="Fertility treatments" />
              <FeatureIcon icon={Smile} text="Dental care" />
              <FeatureIcon icon={Eye} text="Eye surgeries" />
              <FeatureIcon icon={Flower2} text="Wellness therapies" />
            </motion.div>
            <motion.p
              className="text-lg text-primary-dark leading-relaxed"
              variants={itemVariants}
            >
              Türkiye's healthcare providers adhere to international standards,
              ensuring safe, effective treatments with shorter waiting times and
              lower costs compared to many Western countries. Combine that with
              the beautiful landscapes, rich culture, and welcoming hospitality,
              and you'll find Türkiye an ideal destination for your medical
              needs.
            </motion.p>
            <motion.div className="pt-4" variants={itemVariants}>
              <a
                href="#services"
                onClick={handleScrollToServices}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-accent hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200"
              >
                Explore Our Services
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseTr;
