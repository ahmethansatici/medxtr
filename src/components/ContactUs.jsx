import React, { useState } from "react";
import { Send, Phone, MapPin, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Alert = ({ children, className }) => (
  <div className={`p-4 rounded-md ${className}`}>{children}</div>
);

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => (
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
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093855] focus:border-transparent transition-all duration-300"
      placeholder={placeholder}
    />
  </motion.div>
);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call and email sending
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Sending email to: jaferi@medxtr.com");
    console.log("Form data:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-gradient-to-br from-[#e6f0f5] to-[#c5d9e3] p-8 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full mx-auto my-10"
      >
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
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6" />
                <span>+90 532 707 5841</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6" />
                <span>Türkiye</span>
              </div>
            </div>

            <motion.div
              className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-xl font-semibold mb-2">
                Let us help you access the world-class healthcare Türkiye has to
                offer. We look forward to being your trusted partner in health
                and wellness!
              </p>
            </motion.div>
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
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093855] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="How can we assist you with your healthcare needs in Türkiye?"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#093855] text-white py-3 px-6 rounded-lg hover:bg-[#0a4d6d] transition-colors duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Alert className="mt-6 bg-[#e6f0f5] text-[#093855]">
                    Thank you for your message! We'll get back to you soon
                    regarding your healthcare journey in Türkiye.
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
