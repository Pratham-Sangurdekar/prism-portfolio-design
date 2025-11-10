import heroGradient from "@/assets/hero-gradient.jpg";

const Hero = () => {
  const skills = [
    "Python",
    "JavaScript",
    "Node.js",
    "React",
    "Flutter",
    "TensorFlow",
    "PyTorch",
    "Qiskit",
    "Firebase",
    "SQL",
    "Git",
    "Machine Learning",
    "Deep Learning",
    "UI/UX",
    "System Architecture",
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroGradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight leading-none">
          PRATHAM
          <br />
          SANGURDEKAR
        </h1>

        <p className="text-2xl md:text-3xl font-medium mb-4 text-foreground/80">
          AI Engineering + Business Strategy
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          I build intelligent systems and scalable digital product solutions.
        </p>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-20 left-0 w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className="inline-block px-8 text-lg md:text-xl text-muted-foreground font-medium"
            >
              {skill} •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
