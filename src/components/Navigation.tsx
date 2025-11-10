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
      <nav className="fixed top-0 right-0 z-50 p-6">
        <button
          onClick={toggleMenu}
          className="p-3 glass rounded-full transition-all duration-300 hover:scale-[1.03]"
          style={{ color: "#0B0F19" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#6AA7FF")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#0B0F19")}
          aria-label="Open menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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
