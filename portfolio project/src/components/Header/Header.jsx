import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  // State for hover animation
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrollPosition, setScrollPosition] = useState(0);

  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  // Check screen size and handle responsiveness
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setShowMenu(false);
        document.body.style.overflow = "auto";
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Handle scroll effects and active link highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "skills", ref: skillsRef },
        { id: "services", ref: servicesRef },
        { id: "blogs", ref: blogsRef },
        { id: "contact", ref: contactRef },
      ];

      const scrollY = window.pageYOffset;

      sections.forEach(({ id, ref }) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop - 50;
          const sectionHeight = ref.current.offsetHeight;

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActiveLink(`#${id}`);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (ref, href, e) => {
    e.preventDefault();
    setActiveLink(href);
    ref.current?.scrollIntoView({ behavior: "smooth" });
    if (showMenu) closeMenu();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.style.overflow = showMenu ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setShowMenu(false);
    document.body.style.overflow = "auto";
  };

  const navItems = [
    { href: "#home", icon: "uil-estate", text: "Home", ref: homeRef },
    { href: "#about", icon: "uil-user", text: "About", ref: aboutRef },
    { href: "#skills", icon: "uil-file-alt", text: "Skills", ref: skillsRef },
    {
      href: "#services",
      icon: "uil-briefcase-alt",
      text: "Services",
      ref: servicesRef,
    },
    { href: "#blogs", icon: "uil-scenery", text: "Blogs", ref: blogsRef },
    { href: "#contact", icon: "uil-message", text: "Contact", ref: contactRef },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-[100vw] z-50 h-16 py-0 transition-all duration-300 ${
        scrollPosition > 50
          ? "py-2 bg-gray-900/90 backdrop-blur-md shadow-lg mb-4"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold relative group"
            onClick={(e) => scrollToSection(homeRef, "#home", e)}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Kaibalya
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="flex space-x-4 lg:space-x-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={item.href}
                    className={`relative px-3 py-2 rounded-lg overflow-hidden flex items-center text-sm font-medium transition-all duration-300 ${
                      activeLink === item.href
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={(e) => scrollToSection(item.ref, item.href, e)}
                  >
                    {hoveredItem === index && (
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-lg animate-pulseLight"></span>
                    )}
                    {activeLink === item.href && (
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg"></span>
                    )}
                    <i
                      className={`uil ${item.icon} mr-2 ${
                        hoveredItem === index ? "animate-bounce-mini" : ""
                      }`}
                    ></i>
                    <span>{item.text}</span>
                    {activeLink === item.href ? (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
                    ) : hoveredItem === index ? (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 animate-expandWidth"></span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {showMenu ? (
              <i className="uil uil-times"></i>
            ) : (
              <i className="uil uil-apps"></i>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ease-in-out z-40 ${
          showMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 pt-24 pb-6">
          <ul className="grid gap-y-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`transition-all duration-300 ${
                  showMenu
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <a
                  href={item.href}
                  className={`group flex items-center text-lg md:text-xl font-medium ${
                    activeLink === item.href ? "text-blue-400" : "text-gray-300"
                  }`}
                  onClick={(e) => scrollToSection(item.ref, item.href, e)}
                >
                  <span
                    className={`inline-block mr-3 rounded-full p-2 ${
                      activeLink === item.href
                        ? "bg-blue-600/20 text-blue-400"
                        : "bg-gray-800 group-hover:bg-blue-600/20 group-hover:text-blue-400 text-gray-300 transition-colors duration-300"
                    }`}
                  >
                    <i className={`uil ${item.icon}`}></i>
                  </span>
                  <span className="group-hover:text-blue-400 transition-colors duration-300">
                    {item.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Social Links */}
          <div className="mt-10 px-1">
            <p className="text-gray-400 mb-3 text-sm">Connect with me</p>
            <div className="flex space-x-3">
              {["github", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600/20 hover:text-blue-400 transition-colors duration-300"
                >
                  <i className={`uil uil-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes expandWidth {
          to {
            width: 100%;
          }
        }
        @keyframes pulseLight {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes bounceMini {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        .animate-expandWidth {
          animation: expandWidth 0.3s ease-out forwards;
        }
        .animate-pulseLight {
          animation: pulseLight 1.5s infinite;
        }
        .animate-bounce-mini {
          animation: bounceMini 0.5s ease-in-out;
        }
      `}</style>
    </nav>
  );
};

export default Header;
