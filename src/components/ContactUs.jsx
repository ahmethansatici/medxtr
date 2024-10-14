import React, { useState } from "react";
import { Send, Phone, MapPin, Mail, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const InputField = ({ label, name, type = "text", placeholder }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      required
      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093855] focus:border-transparent transition-all duration-300"
      placeholder={placeholder}
    />
  </motion.div>
);

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/xpwzzpoy", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#e6f0f5] to-[#c5d9e3] p-8 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full mx-auto my-10"
      >
        <AnimatePresence>
          {!isSubmitted ? (
            <div className="flex flex-col lg:flex-row">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="lg:w-1/2 bg-gradient-to-br from-[#093855] to-[#0a4d6d] p-12 text-white"
              >
                <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
                <p className="mb-8 text-lg">
                  If you're ready to begin your healthcare journey in Türkiye or
                  have questions about the process, reach out to us today. Our
                  friendly team is here to provide all the information you need and
                  assist with your specific requests.
                </p>
                <div className="space-y-6">
                  <a href="tel:+905327075841" className="flex items-center space-x-4 hover:text-gray-300 transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                    <span>+90 532 707 5841</span>
                  </a>
                  
                  <a href="mailto:info@medxtr.com" className="flex items-center space-x-4 hover:text-gray-300 transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                    <span>info@medxtr.com</span>
                  </a>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6" />
                    <span>İstanbul, Türkiye</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="lg:w-1/2 p-12"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <InputField
                    label="Name"
                    name="name"
                    placeholder="Your Name"
                  />
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                  <InputField
                    label="Subject"
                    name="subject"
                    placeholder="Subject"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093855] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="How can we assist you with your healthcare needs in Türkiye?"
                    ></textarea>
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="w-full bg-[#093855] text-white py-3 px-6 rounded-lg hover:bg-[#0a4d6d] transition-colors duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center p-12 text-center"
            >
              <CheckCircle className="w-16 h-16 text-[#093855] mb-4" />
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-lg">
                Thank you for your message! We'll get back to you soon regarding
                your healthcare journey in Türkiye.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
              >
                <button
                  className="bg-[#093855] text-white py-3 px-6 rounded-lg hover:bg-[#0a4d6d] transition-colors duration-300"
                  onClick={() => setIsSubmitted(false)}
                >
                  Back to Contact Form
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactUs;