import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "HOME", href: "/", type: "route" },
    { label: "ABOUT", href: "/about", type: "route" },
    { label: "SKILLS", href: "#skills", type: "scroll" },
    { label: "PROJECTS", href: "#projects", type: "scroll" },
    { label: "CONTACT", href: "/contact", type: "route" },
  ];

  useEffect(() => {
    const checkBackground = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // On home page, check which section we're in
      if (location.pathname === "/") {
        const skillsSection = document.querySelector('#skills') as HTMLElement;
        const projectsSection = document.querySelector('#projects') as HTMLElement;
        
        // Check if we're in the projects section (dark background)
        if (projectsSection) {
          const projectsTop = projectsSection.offsetTop;
          const projectsBottom = projectsTop + projectsSection.offsetHeight;
          
          if (scrollY >= projectsTop - 100 && scrollY < projectsBottom) {
            setIsDarkBg(true);
            return;
          }
        }
        
        // Check if we're in the skills section (light background)
        if (skillsSection) {
          const skillsTop = skillsSection.offsetTop;
          const skillsBottom = skillsTop + skillsSection.offsetHeight;
          
          if (scrollY >= skillsTop - 100 && scrollY < skillsBottom) {
            setIsDarkBg(false);
            return;
          }
        }
        
        // If we're at the top (hero section), it's dark
        if (scrollY < viewportHeight * 0.8) {
          setIsDarkBg(true);
          return;
        }
        
        // Default
        setIsDarkBg(false);
      } else if (location.pathname === "/about") {
        setIsDarkBg(true); // About page has dark background, so use white icon
      } else if (location.pathname === "/contact") {
        setIsDarkBg(true); // Contact page has dark background, so use white icon
      } else if (location.pathname.startsWith("/project/")) {
        setIsDarkBg(false); // Project detail pages have light background, so use dark icon
      } else {
        setIsDarkBg(false); // Default to dark icon on light background
      }
    };

    // Check on mount and scroll
    checkBackground();
    window.addEventListener('scroll', checkBackground);
    
    return () => window.removeEventListener('scroll', checkBackground);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (item: typeof menuItems[0]) => {
    toggleMenu();
    
    if (item.type === "scroll") {
      // First navigate to home if not already there
      if (window.location.pathname !== "/") {
        navigate("/");
        // Wait for navigation, then scroll
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <>
      {/* Hamburger menu top-right */}
      <nav className="fixed top-8 right-8 md:top-12 md:right-12 z-50">
        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1.5 p-2 transition-all duration-300 hover:scale-105"
          style={{ color: isDarkBg ? "#FFFFFF" : "#000000" }}
          aria-label="Toggle menu"
        >
          {!isOpen ? (
            <>
              <span className="w-8 h-0.5 bg-current transition-all" />
              <span className="w-8 h-0.5 bg-current transition-all" />
              <span className="w-8 h-0.5 bg-current transition-all" />
            </>
          ) : (
            <X className="w-8 h-8 text-white" strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ backgroundColor: '#1a1a1a' }}
      >
        <div className="h-full flex">
          {/* Left side - Profile image */}
          <div className="hidden lg:flex w-1/2 items-center justify-start pl-20">
            <div className="relative w-full max-w-lg h-[70vh] overflow-hidden">
              <img
                src={profilePlaceholder}
                alt="Profile"
                className="w-full h-full object-cover"
                style={{
                  animation: isOpen ? 'fadeIn 0.8s ease-out' : 'none',
                }}
              />
            </div>
          </div>

          {/* Right side - Menu links and contact info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between py-12 md:py-20 px-6 md:pr-20 md:pl-12 lg:pl-0">
            {/* Menu items */}
            <nav className="flex flex-col justify-center flex-1 space-y-1 md:space-y-2">
              {menuItems.map((item, index) => (
                item.type === "route" ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={toggleMenu}
                    className="text-white font-black leading-tight hover:text-gray-400 transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(2rem, 8vw, 4.5rem)',
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                      letterSpacing: '-0.02em',
                      animation: isOpen
                        ? `slideInRight 0.5s ease-out ${index * 0.08}s both`
                        : "none",
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="text-white font-black leading-tight hover:text-gray-400 transition-colors duration-300 text-left"
                    style={{
                      fontSize: 'clamp(2rem, 8vw, 4.5rem)',
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                      letterSpacing: '-0.02em',
                      animation: isOpen
                        ? `slideInRight 0.5s ease-out ${index * 0.08}s both`
                        : "none",
                    }}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>

            {/* Contact info and social links - side by side */}
            <div 
              className="flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-end"
              style={{
                animation: isOpen ? 'fadeIn 0.8s ease-out 0.6s both' : 'none',
              }}
            >
              {/* Left - Social Links */}
              <div className="space-y-1">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white text-xs md:text-sm font-normal hover:text-gray-400 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white text-xs md:text-sm font-normal hover:text-gray-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>

              {/* Right - Contact Details */}
              <div className="space-y-1">
                <p className="text-white text-xs md:text-sm font-normal">
                  +91-8657305445
                </p>
                <p className="text-white text-xs md:text-sm font-normal break-all">
                  pratham.savi0412@gmail.com
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
