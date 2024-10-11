import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);
  const navbarRef = useRef(null);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position > 0) {
      setIsVisible(true);
      resetTimer();
    } else {
      setIsVisible(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  };

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (scrollPosition > 0) {
      resetTimer();
    }
  };

  const handleMouseMove = (e) => {
    if (!isVisible && scrollPosition > 0) {
      const navbarRect = navbarRef.current.getBoundingClientRect();
      if (e.clientY <= navbarRect.bottom) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible]);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Why Choose TR", to: "why-choose-tr" },
    { name: "Why Choose Us", to: "why-choose-us" },
    { name: "Services", to: "services" },
    { name: "FAQs", to: "faq" },
  ];

  const marginTop = window.innerWidth >= 768 && scrollPosition === 0 ? '40px' : '0px';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrollPosition > 80
          ? "bg-white shadow-lg"
          : "md:bg-gradient-to-b md:from-black/50 md:to-transparent bg-white md:bg-transparent"
      }`}
      style={{
        transform:
          scrollPosition > 0
            ? isVisible
              ? "translateY(0)"
              : "translateY(-100%)"
            : "translateY(0)",
        transition: "transform 0.3s ease-in-out",
        marginTop: marginTop,
        borderRadius: window.innerWidth < 768 ? '15px' : '0px',  // Mobil görünümde navbar köşeleri yuvarlak
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transition: "margin-top 0.3s ease-out",
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-28">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-auto md:h-24 transition-all duration-300"
                src="/Logo-1.png"
                alt="Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.to)}
                    className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      scrollPosition > 80
                        ? "text-gray-700 hover:text-custom-light-blue"
                        : "text-white hover:text-gray-300"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden md:block rounded bg-custom-light-blue">
              <button
                onClick={() => scrollToSection("contact-us")}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-colors duration-300 ${
                  scrollPosition > 80
                    ? "text-white bg-custom-light-blue hover:bg-custom-light-blue/90 hover:text-white"
                    : "text-white bg-custom-light-blue hover:bg-gray-100 hover:text-custom-light-blue"
                }`}
              >
                Contact Us
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-custom-light-blue transition-colors duration-300"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out rounded-lg"> {/* Menü de tüm köşeler yuvarlak */}
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.to)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-custom-light-blue hover:bg-gray-50 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact-us")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-custom-light-blue hover:bg-custom-light-blue/90 transition-colors duration-200 mt-2"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
