import React from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ title, description, imageSrc }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="h-full bg-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {imageSrc && (
        <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      )}
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">{title}</h2>
          <div className="mb-6 text-gray-600 space-y-2">
            {Array.isArray(description) ? (
              description.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-[#0A3B5A] mr-2 flex-shrink-0 mt-1" />
                  <p>{item}</p>
                </div>
              ))
            ) : (
              <p>{description}</p>
            )}
          </div>
        </div>
        <motion.button
          className="inline-flex items-center justify-center px-4 py-2 bg-[#0A3B5A] text-white rounded-lg font-medium transition-colors duration-300 ease-in-out hover:bg-[#082F4A] focus:outline-none focus:ring-2 focus:ring-[#0A3B5A] focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const AnimatedText = ({ text, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.h1
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Personalized Medical Consultation",
      description: [
        "Initial consultation and evaluation of your case",
        "Recommendations for accredited hospitals and specialists",
        "Coordination of virtual consultations with doctors before your trip",
      ],
      imageSrc: "/medicalconsult.png",
    },
    {
      title: "Travel and Visa Assistance",
      description: [
        "Assistance with visa applications and necessary documentation",
        "Flight booking and itinerary planning",
        "24/7 support for travel-related questions or changes",
      ],
      imageSrc: "/visaassistance.png",
    },
    {
      title: "Accommodation Arrangements",
      description: [
        "Hotel reservations based on your budget and preferences",
        "Special arrangements for long-term stays or family accommodation",
        "Proximity to medical facilities for easier access",
      ],
      imageSrc: "/accom.png",
    },
    {
      title: "On-the-Ground Support in Türkiye",
      description: [
        "Airport meet-and-greet services with private transportation",
        "Personal assistant for medical appointments and local logistics",
        "Language interpretation services at hospitals and clinics",
      ],
      imageSrc: "/g.jpg",
    },
    {
      title: "Medical Procedure Coordination",
      description: [
        "Scheduling of medical procedures and appointments",
        "Coordination of pre-operative tests and consultations",
        "Assistance with post-treatment care plans and follow-ups",
      ],
      imageSrc: "/medicalprocedure.png",
    },
    {
      title: "Post-Treatment Care and Wellness",
      description: [
        "Follow-up care coordination with your doctors",
        "Physical therapy and wellness programs as needed",
        "Assistance with medical reports for your local healthcare providers",
      ],
      imageSrc: "/f.jpg",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [controls, inView]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="mb-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText
            text="Our Services"
            className="mb-2 font-bold text-5xl sm:text-6xl text-[#0A3B5A] leading-tight"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <AnimatedText
              text="for your health"
              className="text-4xl sm:text-5xl font-semibold text-[#0A3B5A] mb-6"
            />
          </motion.div>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 1, duration: 0.8 }}
          >
            We offer a full range of services to guide you through your medical
            journey abroad, ensuring a smooth and stress-free experience
            tailored to your specific needs.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
