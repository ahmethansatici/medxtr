import React from "react";
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa"; // Imported Facebook and Instagram icons

// FooterLink component for smooth scroll to section
const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-300"
    // Add smooth scroll behavior
    onClick={(e) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        });
      }
    }}
  >
    {children}
  </a>
);

const FooterSection = ({ title, children }) => (
  <div>
    <h2 className="mb-6 text-sm font-semibold text-white uppercase">{title}</h2>
    <ul className="text-gray-300">{children}</ul>
  </div>
);

const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    target="_blank" // Opens in new tab
    rel="noopener noreferrer" // Security improvement
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#082F4A" }}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img className="h-32" src="/Logo-1.png" alt="MedX logo" />
            <p className="text-gray-400 text-base">
              Your trusted partner for medical journeys to Türkiye. Let us help
              you access world-class healthcare with comprehensive support and
              personalized service.
            </p>
            <div className="flex space-x-6">
              <SocialIcon
                Icon={FaFacebook} // Changed to Facebook icon
                href="https://www.facebook.com/profile.php?id=61561789166899&mibextid=LQQJ4d"
              />
              <SocialIcon
                Icon={FaInstagram} // Changed to Instagram icon
                href="https://www.instagram.com/medxtr_?igsh=dGdzOGwwaHZndjU1"
              />
              <SocialIcon
                Icon={FaTiktok} // Kept TikTok icon
                href="https://www.tiktok.com/@medxtr?_t=8o95aVtOQDq&_r=1"
              />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Services Section */}
              <FooterSection title="Services">
                <li className="mb-4">
                  <FooterLink href="#services">Medical Consultation</FooterLink>
                </li>
                <li className="mb-4">
                  <FooterLink href="#services">
                    Travel & Visa Assistance
                  </FooterLink>
                </li>
                <li className="mb-4">
                  <FooterLink href="#services">Accommodation</FooterLink>
                </li>
                <li className="mb-4">
                  <FooterLink href="#services">
                    On-the-Ground Support
                  </FooterLink>
                </li>
                <li className="mb-4">
                  <FooterLink href="#services">Post-Treatment Care</FooterLink>
                </li>
              </FooterSection>

              {/* Remove About Us */}
              <FooterSection title="Company">
                {/* Why Choose Türkiye? */}
                <li className="mb-4">
                  <FooterLink href="#why-choose-tr">Why Türkiye?</FooterLink>
                </li>
                <li className="mb-4">
                  <FooterLink href="#contact-us">Contact Us</FooterLink>
                </li>
              </FooterSection>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Support Section */}
              <FooterSection title="Support">
                <li className="mb-4">
                  <FooterLink href="#faq">FAQs</FooterLink>
                </li>
              </FooterSection>

              {/* Contact Section */}
              <FooterSection title="Contact">
                <li className="mb-4">
                  <FooterLink
                    href="https://wa.me/905327075841"
                    target="_blank" // Opens in new tab
                    rel="noopener noreferrer" // Security improvement
                  >
                    WhatsApp: +90 532 707 5841
                  </FooterLink>
                </li>
                <li className="mb-4">
                  <FooterLink
                    href="mailto:info@medxtr.com"
                    target="_blank" // Opens in new tab
                    rel="noopener noreferrer" // Security improvement
                  >
                    Email: info@medxtr.com
                  </FooterLink>
                </li>
              </FooterSection>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 MedX, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
