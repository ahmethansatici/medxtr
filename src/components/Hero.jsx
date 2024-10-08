import React from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Plane, Hospital, UserCheck } from "lucide-react";

const Hero = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="relative w-full h-screen overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-hero-img bg-cover bg-center bg-no-repeat bg-fixed" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-200 text-xl mb-2 font-light tracking-wider">
              WELCOME TO{" "}
              <img
                src="Logo-1.png"
                alt="MEDX Logo"
                className="inline-block h-32 w-48 -ml-6 "
              />
            </h2>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Partner for
              <br />
              Medical Journeys to Türkiye
            </h1>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl">
              At MedX, we are committed to helping international patients access
              world-class healthcare services in Türkiye. With our personalized
              guidance and comprehensive support, we ensure that every aspect of
              your medical journey is handled with care and professionalism.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoButton
              icon={<Plane className="w-6 h-6" />}
              title="International Support"
              description="Personalized assistance for your medical journey"
              isInView={isInView}
            />
            <InfoButton
              icon={<Hospital className="w-6 h-6" />}
              title="World-Class Healthcare"
              description="Access to top medical facilities in Türkiye"
              isInView={isInView}
            />
            <InfoButton
              icon={<UserCheck className="w-6 h-6" />}
              title="Comprehensive Care"
              description="Focus on your health while we handle the rest"
              isInView={isInView}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoButton = ({ icon, title, description, isInView }) => {
  return (
    <motion.div
      className="group bg-white/10 backdrop-filter backdrop-blur-md text-white p-6 rounded-lg flex flex-col items-start justify-between hover:bg-white/20 transition-all duration-300 ease-in-out"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        {icon}
        <span className="font-bold text-lg">{title}</span>
      </div>
      <p className="text-sm text-blue-100 mb-4">{description}</p>
      <ChevronRight className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default Hero;
