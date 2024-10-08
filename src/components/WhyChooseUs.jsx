import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Users, TrendingUp } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="bg-[#0A3B5A] bg-opacity-10 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col">
    <CardContent className="p-6 flex flex-col h-full">
      <Icon className="w-12 h-12 text-[#0A3B5A] mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-[#0A3B5A]">{title}</h3>
      <p className="text-[#2C5C7A] flex-grow">{description}</p>
    </CardContent>
  </Card>
);

const WhyChooseUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.7,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2,
        duration: 0.6,
      },
    },
  };

  const features = [
    {
      icon: CheckCircle2,
      title: "Expertise in Türkiye's Healthcare",
      description:
        "We have extensive knowledge of the best hospitals, clinics, and doctors in Türkiye. Our team works closely with healthcare professionals to ensure you receive the highest quality care.",
    },
    {
      icon: Users,
      title: "Tailored, Personalized Service",
      description:
        "Every patient is unique, and so is our approach. We design a custom plan for each patient, addressing their specific medical needs and preferences.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "From your initial inquiry until you safely return home, our team is available around the clock to answer your questions and provide assistance.",
    },
    {
      icon: TrendingUp,
      title: "Transparency",
      description:
        "We provide clear, upfront information about treatment options, costs, and the process, so there are no surprises along the way.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#E6EEF4] to-white py-24 overflow-hidden">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4"
      >
        <motion.div className="text-center mb-16">
          <motion.h2
            variants={titleVariants}
            className="text-4xl md:text-5xl font-bold text-[#0A3B5A] mb-6"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            variants={subtitleVariants}
            className="text-xl text-[#2C5C7A] max-w-3xl mx-auto"
          >
            At MEDX, we take pride in providing world-class healthcare services
            in Türkiye. Our commitment to excellence sets us apart in the
            medical tourism industry.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-[#0A3B5A] text-white rounded-lg p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Experience World-Class Healthcare in Türkiye
          </h3>
          <p className="mb-6">
            Discover why Türkiye has become a global hub for medical tourism.
            Benefit from top-tier facilities, skilled doctors, and cutting-edge
            treatments at competitive costs.
          </p>
          <Button
            size="lg"
            className="bg-[#FF6B35] text-white hover:bg-[#FF8C5F]"
          >
            Start Your Journey
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
