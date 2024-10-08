import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqData = [
    {
      question: "What types of medical treatments can you help arrange?",
      answer:
        "We cover a broad range of treatments, including surgeries (cardiac, orthopedic, cosmetic), fertility treatments, dental care, eye surgeries, and more. Contact us for specific inquiries.",
    },
    {
      question: "How much does the service cost?",
      answer:
        "Our service fees vary depending on the type of assistance you require. We provide clear and transparent pricing based on your needs, so there are no hidden fees.",
    },
    {
      question: "Do you offer payment plans or financial assistance?",
      answer:
        "We can connect you with healthcare providers who offer payment plans, and we can guide you through available financing options if needed.",
    },
    {
      question:
        "Will I need a visa to travel to Türkiye for medical treatment?",
      answer:
        "In most cases, yes. We assist with the visa process, ensuring you have all the necessary documentation for a smooth application.",
    },
    {
      question: "Can I bring a family member or companion with me?",
      answer:
        "Yes! We can arrange accommodations for your companions and ensure they are well taken care of throughout your medical journey.",
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

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
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section ref={ref} className="py-28 bg-white overflow-hidden">
      <motion.div
        className="container px-4 mx-auto"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="flex flex-wrap -m-8">
          <motion.div
            className="w-full md:w-1/2 p-8"
            variants={fadeInUpVariants}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="md:max-w-md block">
                <motion.h2
                  className="mb-4 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight"
                  variants={itemVariants}
                >
                  Frequently Asked Questions
                </motion.h2>
                <motion.p
                  className="mb-12 text-gray-600 font-medium leading-relaxed"
                  variants={itemVariants}
                >
                  Still have any questions?
                  <motion.button
                    className="ml-2 px-4 py-2 bg-blue-500 text-white font-bold rounded transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContact}
                  >
                    Contact us
                  </motion.button>
                </motion.p>
              </div>
              <motion.div className="accordion" variants={containerVariants}>
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="mb-4 border-b border-gray-200"
                    variants={itemVariants}
                  >
                    <motion.h3
                      onClick={() => toggleAccordion(index)}
                      className="cursor-pointer text-xl font-medium text-gray-800 transition-all duration-300 hover:text-blue-500"
                      whileHover={{ scale: 1.02 }}
                    >
                      {faq.question}
                    </motion.h3>
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <p className="mt-2 text-gray-600">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-8 relative group"
            variants={fadeInUpVariants}
          >
            <motion.img
              className="mx-auto rounded-lg"
              src="./faq.jpeg"
              alt="FAQ illustration"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
