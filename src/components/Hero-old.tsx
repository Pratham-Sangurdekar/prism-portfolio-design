const Hero = () => {
  const companies = [
    "TensorFlow",
    "React",
    "Next.js",
    "PyTorch",
    "AWS",
    "Google Cloud",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "FastAPI",
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0e1a]">
      {/* Dramatic light glow effect - main spotlight */}
      <div className="absolute top-0 right-0 w-[1200px] h-[1200px] pointer-events-none">
        <div
          className="absolute top-[-200px] right-[-200px] w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(200, 220, 255, 0.25) 0%, rgba(150, 190, 255, 0.15) 20%, rgba(100, 150, 255, 0.08) 40%, transparent 70%)",
            filter: "blur(80px)",
            animation: "glow-pulse 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[-100px] right-[-100px] w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(220, 235, 255, 0.2) 0%, rgba(180, 210, 255, 0.1) 30%, transparent 60%)",
            filter: "blur(60px)",
            animation: "glow-pulse 5s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Diagonal light beam effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[1000px] h-[1000px]"
          style={{
            background: "linear-gradient(135deg, transparent 0%, rgba(200, 220, 255, 0.08) 40%, rgba(150, 190, 255, 0.05) 60%, transparent 100%)",
            transform: "rotate(-25deg) translateX(300px) translateY(-200px)",
          }}
        />
      </div>


      {/* Main content container */}
      <div className="relative z-10 flex-1 flex flex-col px-8 md:px-16 lg:px-24 pt-32 pb-12">
        {/* Hero content grid */}
        <div className="flex-1 grid md:grid-cols-2 gap-16 items-start max-w-[1600px] mx-auto w-full">
          {/* Left side - Name and description */}
          <div className="space-y-12 mt-12">
            <h1
              className="font-black leading-[0.85] tracking-tight animate-slide-up-fade"
              style={{
                fontSize: "clamp(56px, 9vw, 140px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              PRATHAM
              <br />
              SANGURDEKAR
            </h1>

            <p
              className="text-sm md:text-base leading-relaxed max-w-lg animate-slide-up-fade"
              style={{
                color: "#b0bac9",
                animationDelay: "0.2s",
                animationFillMode: "backwards",
                lineHeight: "1.8",
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
          <div className="flex flex-col items-start md:items-end space-y-1 mt-12 animate-slide-up-fade" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
            <div className="text-right space-y-1">
              <p className="text-base md:text-lg font-normal text-[#b0bac9] tracking-wide">
                Rising Innovator
              </p>
              <p className="text-base md:text-lg font-normal text-[#b0bac9] tracking-wide">
                AI Engineer | Developer
              </p>
            </div>
            <div className="text-right mt-6 space-y-1">
              <p className="text-base md:text-lg font-normal text-[#b0bac9] tracking-wide">
                Full-Stack Development
              </p>
              <p className="text-base md:text-lg font-normal text-[#b0bac9] tracking-wide">
                Machine Learning
              </p>
              <p className="text-base md:text-lg font-normal text-[#b0bac9] tracking-wide">
                System Architecture
              </p>
              <p className="text-base md:text-lg font-normal text-[#b0bac9] tracking-wide">
                Business Strategy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom company logos marquee */}
      <div className="relative z-10 pb-0 overflow-hidden">
        <div className="py-8 border-t border-white/5">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
              <span
                key={index}
                className="inline-flex items-center px-8 md:px-12 transition-colors duration-200 cursor-default"
                style={{
                  fontSize: "clamp(16px, 2.5vw, 24px)",
                  fontWeight: 600,
                  color: "#4a5568",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
