import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationLinks = [
    { number: "01", label: "Home", href: "/", type: "route" },
    { number: "02", label: "About", href: "/about", type: "route" },
    { number: "03", label: "Skills", href: "#skills", type: "scroll" },
    { number: "04", label: "Projects", href: "#projects", type: "scroll" },
    { number: "05", label: "Contact", href: "/contact", type: "route" },
  ];

  const handleNavClick = (link: typeof navigationLinks[0]) => {
    if (link.type === "scroll") {
      // First navigate to home if not already there
      if (window.location.pathname !== "/") {
        navigate("/");
        // Wait for navigation, then scroll
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="px-4 md:px-12 lg:px-16 py-12 md:py-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Left Side - Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-xs md:text-sm text-white/60 mb-3 md:mb-4 tracking-wider">
                  Stay connected®
                </h2>
                <a 
                  href="mailto:pratham.savi0412@gmail.com"
                  className="text-xl md:text-4xl lg:text-5xl font-normal hover:text-white/80 transition-colors break-all"
                >
                  pratham.savi0412@gmail.com
                </a>
              </div>

              <p className="text-white/60 text-xs md:text-sm max-w-md leading-relaxed">
                Crafted with creativity and passion. Let's stay connected — reach out anytime!
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 md:gap-3 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-white/90 transition-all duration-300 group"
              >
                <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-white md:w-4 md:h-4"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
                Contact Now
              </Link>
            </div>

            {/* Right Side - Navigation Links */}
            <div className="space-y-2 md:space-y-4">
              {navigationLinks.map((link, index) => (
                link.type === "route" ? (
                  <Link
                    key={link.number}
                    to={link.href}
                    className="group flex items-center justify-between py-3 md:py-4 border-b border-white/10 hover:border-white/30 transition-all duration-300"
                    style={{
                      animation: `fadeInRight 0.5s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-white/40 text-xs md:text-sm font-light">
                        {link.number}
                      </span>
                      <span className="text-base md:text-xl font-normal group-hover:text-white/80 transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 md:w-5 md:h-5"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                ) : (
                  <button
                    key={link.number}
                    onClick={() => handleNavClick(link)}
                    className="group flex items-center justify-between py-3 md:py-4 border-b border-white/10 hover:border-white/30 transition-all duration-300 w-full"
                    style={{
                      animation: `fadeInRight 0.5s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-white/40 text-xs md:text-sm font-light">
                        {link.number}
                      </span>
                      <span className="text-base md:text-xl font-normal group-hover:text-white/80 transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 md:w-5 md:h-5"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-4 md:px-12 lg:px-16 py-4 md:py-6">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-white/60 text-xs md:text-sm text-center md:text-left">
            Copyright © Pratham Sangurdekar 2025
          </p>
          <button
            onClick={scrollToTop}
            className="text-white/60 hover:text-white text-xs md:text-sm flex items-center gap-2 transition-colors group"
          >
            <span className="hidden md:inline">©</span>
            Back to top
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="group-hover:-translate-y-1 transition-transform md:w-4 md:h-4"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
