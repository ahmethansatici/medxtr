import React from "react";
import { Mail, Facebook, Instagram } from "lucide-react"; // Importing the required icons

const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Banner = () => {
  const phoneNumber = "+90 532 707 5841"; // Replace with your actual phone number

  return (
    <div className="bg-gradient-to-r from-sky-900 to-sky-950 text-white z-50 py-3 hidden sm:block"> {/* Hide on mobile */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-3 sm:mb-0">
            <div className="flex items-center space-x-2">
              <a
                href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-green-300 transition-colors duration-300 ease-in-out transform hover:scale-105"
              >
                <WhatsAppIcon size={18} className="text-green-400" />
                <span className="text-sm">{phoneNumber}</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="mailto:info@medxtr.com"
                className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300 ease-in-out transform hover:scale-105"
              >
                <Mail size={18} className="text-blue-400" />
                <span className="text-sm">info@medxtr.com</span>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61561789166899&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/medxtr_?igsh=dGdzOGwwaHZndjU1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-600 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@medxtr?_t=8o95aVtOQDq&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <TikTokIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
