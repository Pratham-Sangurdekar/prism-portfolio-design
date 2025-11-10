import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Check if mouse is within hero section bounds
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isInSection = e.clientY >= rect.top && e.clientY <= rect.bottom;
        setIsInHeroSection(isInSection);
        
        if (isInSection) {
          setMousePosition({ x: e.clientX, y: e.clientY });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const techStack = [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Flask",
    "FastAPI",
    "Flutter",
    "TensorFlow",
    "PyTorch",
    "Qiskit",
    "OpenCV",
    "SQL",
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "Docker",
    "AWS",
    "GCP",
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0e1a]">
      {/* Cursor Glow Effect - Only in Hero Section */}
      {isInHeroSection && (
        <>
          <div
            className="fixed pointer-events-none z-30"
            style={{
              left: mousePosition.x - 300,
              top: mousePosition.y - 300,
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(100, 180, 255, 0.15) 0%, rgba(100, 180, 255, 0.08) 30%, transparent 60%)',
              filter: 'blur(40px)',
              transition: 'left 0.1s ease-out, top 0.1s ease-out',
            }}
          />
          <div
            className="fixed pointer-events-none z-30"
            style={{
              left: mousePosition.x - 200,
              top: mousePosition.y - 200,
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(150, 100, 255, 0.12) 0%, rgba(150, 100, 255, 0.06) 30%, transparent 60%)',
              filter: 'blur(30px)',
              transition: 'left 0.1s ease-out, top 0.1s ease-out',
            }}
          />
          <div
            className="fixed pointer-events-none z-30"
            style={{
              left: mousePosition.x - 150,
              top: mousePosition.y - 150,
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(80, 200, 255, 0.1) 0%, rgba(80, 200, 255, 0.04) 30%, transparent 60%)',
              filter: 'blur(20px)',
              transition: 'left 0.05s ease-out, top 0.05s ease-out',
            }}
          />
        </>
      )}

      {/* Spline 3D Robot - Bottom Right */}
      <div 
        className="absolute z-20"
        style={{
          bottom: '-50px',
          right: '-50px',
          width: '700px',
          height: '700px',
          overflow: 'hidden',
          pointerEvents: 'auto',
          userSelect: 'none',
        }}
      >
        <iframe 
          src='https://my.spline.design/genkubgreetingrobot-1mb586YLhBwFfiawPSXkU9tL/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          style={{ 
            border: 'none',
            pointerEvents: 'auto',
            userSelect: 'none',
          }}
        />
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(0.9);
          }
        }
      `}</style>

      {/* Animated Spline Background - subtle now with robot */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {/* Animated gradient orbs - spline effect */}
        <div
          className="absolute rounded-full mix-blend-screen"
          style={{
            top: '20%',
            left: '10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(100, 180, 255, 0.2) 0%, rgba(100, 180, 255, 0.08) 40%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'spline-float-1 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full mix-blend-screen"
          style={{
            top: '60%',
            right: '15%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(150, 100, 255, 0.18) 0%, rgba(150, 100, 255, 0.06) 40%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'spline-float-2 18s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute rounded-full mix-blend-screen"
          style={{
            top: '10%',
            right: '25%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(80, 200, 255, 0.15) 0%, rgba(80, 200, 255, 0.04) 40%, transparent 70%)',
            filter: 'blur(70px)',
            animation: 'spline-float-3 25s ease-in-out infinite',
            animationDelay: '4s',
          }}
        />
        <div
          className="absolute rounded-full mix-blend-screen"
          style={{
            bottom: '10%',
            left: '20%',
            width: '550px',
            height: '550px',
            background: 'radial-gradient(circle, rgba(100, 220, 255, 0.12) 0%, rgba(100, 220, 255, 0.04) 40%, transparent 70%)',
            filter: 'blur(55px)',
            animation: 'spline-float-4 22s ease-in-out infinite',
            animationDelay: '6s',
          }}
        />
        
        {/* Mesh gradient overlay for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(at 20% 30%, rgba(100, 180, 255, 0.08) 0%, transparent 50%),
              radial-gradient(at 80% 70%, rgba(150, 100, 255, 0.06) 0%, transparent 50%),
              radial-gradient(at 50% 50%, rgba(80, 200, 255, 0.05) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Spline animation keyframes */}
      <style>{`
        @keyframes spline-float-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(100px, -80px) scale(1.1);
          }
          50% {
            transform: translate(-50px, 100px) scale(0.9);
          }
          75% {
            transform: translate(80px, 50px) scale(1.05);
          }
        }

        @keyframes spline-float-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-120px, 70px) scale(1.15);
          }
          66% {
            transform: translate(90px, -100px) scale(0.85);
          }
        }

        @keyframes spline-float-3 {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          30% {
            transform: translate(-80px, 120px) scale(1.08) rotate(10deg);
          }
          60% {
            transform: translate(100px, -90px) scale(0.92) rotate(-10deg);
          }
        }

        @keyframes spline-float-4 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          40% {
            transform: translate(110px, 60px) scale(1.12);
          }
          80% {
            transform: translate(-90px, -80px) scale(0.88);
          }
        }
      `}</style>
      
      {/* Interactive cursor glow effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 180, 255, 0.15), transparent 80%)`,
        }}
      />
      
      {/* Secondary smaller glow following cursor */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(150, 200, 255, 0.08), transparent 70%)`,
        }}
      />
      
      {/* Tertiary trailing glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(200, 230, 255, 0.05), transparent 60%)`,
        }}
      />
      
      {/* Work side tab - teal/turquoise */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-20">
        <div
          className="bg-[#14a89c] text-white px-5 py-5 cursor-pointer hover:bg-[#12948a] transition-colors shadow-lg"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            letterSpacing: "0.25em",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          WORK
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex-1 flex flex-col px-8 md:px-16 lg:px-24 pt-28 pb-8">
        {/* Hero content grid */}
        <div className="flex-1 grid md:grid-cols-2 gap-20 items-start max-w-[1600px] mx-auto w-full">
          {/* Left side - Name and description */}
          <div className="space-y-10 mt-8">
            <h1
              className="font-black leading-[0.88] tracking-tight animate-slide-up-fade"
              style={{
                fontSize: "clamp(60px, 9.5vw, 145px)",
                fontWeight: 900,
                letterSpacing: "-0.035em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              PRATHAM
              <br />
              SANGURDEKAR
            </h1>

            <p
              className="text-sm md:text-[15px] leading-relaxed max-w-[520px] animate-slide-up-fade"
              style={{
                color: "#9ca3af",
                animationDelay: "0.2s",
                animationFillMode: "backwards",
                lineHeight: "1.85",
                fontWeight: 400,
              }}
            >
              I am currently pursuing a degree in Artificial Intelligence and an MBA in Finance. 
              My work focuses on connecting technology with strategy, designing intelligent systems 
              that solve real problems and scale sustainably. I enjoy building thoughtful products, 
              understanding how things work at a systems level, and creating solutions that are both 
              impactful and elegant.
            </p>
          </div>

          {/* Right side - Professional details */}
          <div className="flex flex-col items-start md:items-end space-y-0.5 mt-8 animate-slide-up-fade" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
            <div className="text-right space-y-0.5 mb-3">
              <p className="text-base md:text-[17px] font-normal text-[#d1d5db] tracking-wide leading-relaxed">
                Rising Innovator
              </p>
              <p className="text-base md:text-[17px] font-normal text-[#d1d5db] tracking-wide leading-relaxed">
                AI Engineer | Developer
              </p>
            </div>
            <div className="text-right space-y-0.5">
              <p className="text-base md:text-[17px] font-normal text-[#d1d5db] tracking-wide leading-relaxed">
                Full-Stack Development
              </p>
              <p className="text-base md:text-[17px] font-normal text-[#d1d5db] tracking-wide leading-relaxed">
                Machine Learning
              </p>
              <p className="text-base md:text-[17px] font-normal text-[#d1d5db] tracking-wide leading-relaxed">
                System Architecture
              </p>
              <p className="text-base md:text-[17px] font-normal text-[#d1d5db] tracking-wide leading-relaxed">
                Business Strategy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tech stack marquee */}
      <div className="relative z-10 pb-0 overflow-hidden bg-black/10">
        <div className="py-8 border-t border-white/[0.06]">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="inline-flex items-center px-12 lg:px-16 transition-opacity duration-300 hover:opacity-70 cursor-default"
              >
                <span
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 28px)",
                    fontWeight: 700,
                    color: "#3f4653",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
