import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Logo top-left */}
      <div className="fixed top-8 left-8 md:top-12 md:left-12 z-50">
        <div className="text-white font-bold tracking-tight">
          <div className="flex items-center gap-2">
            <div className="bg-white text-black px-3 py-1.5 font-black text-lg tracking-tighter">
              PS
            </div>
            <div className="text-xs tracking-widest font-light opacity-80">
              portfolio
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger menu top-right */}
      <nav className="fixed top-8 right-8 md:top-12 md:right-12 z-50">
        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1.5 p-2 transition-all duration-300 hover:scale-105"
          style={{ color: "#FFFFFF" }}
          aria-label="Open menu"
        >
          <span className="w-8 h-0.5 bg-current transition-all" />
          <span className="w-8 h-0.5 bg-current transition-all" />
          <span className="w-8 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-16 w-full items-center">
            {/* Left side - Profile image */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative w-full max-w-md h-[600px] overflow-hidden rounded-3xl">
                <img
                  src={profilePlaceholder}
                  alt="Pratham Sangurdekar"
                  className="w-full h-full object-cover opacity-30 blur-sm scale-110"
                />
              </div>
            </div>

            {/* Right side - Menu links */}
            <div className="flex flex-col justify-center space-y-8 px-8">
              {menuItems.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={toggleMenu}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold hover:text-primary transition-smooth"
                  style={{
                    animation: isOpen
                      ? `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
