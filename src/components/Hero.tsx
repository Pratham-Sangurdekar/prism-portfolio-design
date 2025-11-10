const Hero = () => {
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
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#1a1f2e]">
      {/* Dramatic light glow effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none">
        <div
          className="absolute top-0 right-0 w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(96, 165, 250, 0.4) 0%, rgba(59, 130, 246, 0.2) 30%, transparent 70%)",
            filter: "blur(60px)",
            animation: "glow-pulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-32 right-32 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(167, 139, 250, 0.3) 0%, rgba(139, 92, 246, 0.15) 40%, transparent 70%)",
            filter: "blur(40px)",
            animation: "glow-pulse 5s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Diagonal light streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px]"
          style={{
            background: "linear-gradient(135deg, transparent 0%, rgba(96, 165, 250, 0.2) 50%, transparent 100%)",
            transform: "rotate(-45deg) translateX(200px)",
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex-1 flex flex-col px-6 md:px-12 lg:px-20 py-20">
        {/* Hero content grid */}
        <div className="flex-1 grid md:grid-cols-2 gap-12 items-center max-w-[1400px] mx-auto w-full">
          {/* Left side - Name and description */}
          <div className="space-y-8">
            <h1
              className="font-black leading-[0.85] tracking-tight animate-slide-up-fade"
              style={{
                fontSize: "clamp(48px, 8vw, 120px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              PRATHAM
              <br />
              SANGURDEKAR
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-xl animate-slide-up-fade"
              style={{
                color: "#8A95A5",
                animationDelay: "0.2s",
                animationFillMode: "backwards",
              }}
            >
              I am currently pursuing a degree in Artificial Intelligence and an MBA in Finance. 
              My work focuses on connecting technology with strategy, designing intelligent systems 
              that solve real problems and scale sustainably. I enjoy building thoughtful products, 
              understanding how things work at a systems level, and creating solutions that are both 
              impactful and elegant.
            </p>
          </div>

          {/* Right side - Services/Skills */}
          <div className="flex flex-col items-start md:items-end space-y-3 animate-slide-up-fade" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
            <div className="text-right">
              <p className="text-lg md:text-xl font-semibold text-white mb-1">
                AI Engineering
              </p>
              <p className="text-base md:text-lg text-[#C5D0DE]">
                Machine Learning Engineer
              </p>
            </div>
            <div className="text-right">
              <p className="text-base md:text-lg text-[#C5D0DE]">
                Full-Stack Development
              </p>
            </div>
            <div className="text-right">
              <p className="text-base md:text-lg text-[#C5D0DE]">
                System Architecture
              </p>
            </div>
            <div className="text-right">
              <p className="text-base md:text-lg text-[#C5D0DE]">
                Product Strategy
              </p>
            </div>
            <div className="text-right">
              <p className="text-base md:text-lg text-[#C5D0DE]">
                Business Intelligence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative z-10 pb-8 overflow-hidden border-t border-white/10">
        <div className="py-6">
          <div className="flex whitespace-nowrap animate-marquee-scroll group-hover:[animation-play-state:paused]">
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-6 transition-colors duration-200 hover:text-hero-accent-blue cursor-default"
                style={{
                  fontSize: "clamp(14px, 2vw, 18px)",
                  fontWeight: 500,
                  color: "#8A95A5",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {tech}
                <span className="ml-6" style={{ color: "#4A5568" }}>
                  •
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
