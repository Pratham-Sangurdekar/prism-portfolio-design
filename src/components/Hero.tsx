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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Soft radial gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, #F7F9FF 0%, #EEF3FF 50%, #F5ECFF 100%)`,
        }}
      />

      {/* Floating bokeh dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-bokeh"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              background: i % 2 === 0 ? "#6AA7FF" : "#9B7CFF",
              opacity: 0.12,
              filter: `blur(${Math.random() * 20 + 20}px)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * -2}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main hero content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1
          className="font-black tracking-tight leading-none mb-6 animate-slide-up-fade"
          style={{
            fontSize: "clamp(42px, 10vw, 120px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            color: "#0B0F19",
          }}
        >
          PRATHAM
          <br />
          SANGURDEKAR
        </h1>

        <p
          className="font-semibold mb-3 animate-slide-up-fade"
          style={{
            fontSize: "clamp(16px, 3vw, 22px)",
            fontWeight: 600,
            color: "#1D2430",
            animationDelay: "0.15s",
            animationFillMode: "backwards",
          }}
        >
          AI Engineering + Business Strategy
        </p>

        <p
          className="font-normal animate-slide-up-fade"
          style={{
            fontSize: "clamp(14px, 2.5vw, 18px)",
            fontWeight: 400,
            color: "#5B6470",
            animationDelay: "0.3s",
            animationFillMode: "backwards",
          }}
        >
          I build intelligent systems and scalable digital product solutions.
        </p>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="absolute bottom-12 left-0 w-full overflow-hidden">
        <div className="group relative">
          <div className="flex whitespace-nowrap animate-marquee-scroll group-hover:[animation-play-state:paused]">
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-4 transition-colors duration-200 hover:text-hero-accent-blue cursor-default group/item relative"
                style={{
                  fontSize: "clamp(14px, 2vw, 16px)",
                  fontWeight: 400,
                  color: "#5B6470",
                }}
              >
                {tech}
                <span
                  className="ml-4"
                  style={{ color: "#B7C0CC" }}
                >
                  •
                </span>
                {/* Tiny accent dot on hover */}
                <span
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: "#6AA7FF" }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
