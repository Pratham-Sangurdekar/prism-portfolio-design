import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About</h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              I am currently pursuing a degree in Artificial Intelligence and an
              MBA in Finance. My work focuses on connecting technology with
              strategy, designing intelligent systems that solve real problems
              and scale sustainably.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              I enjoy building thoughtful products, understanding how things
              work at a systems level, and creating solutions that are both
              impactful and elegant.
            </p>
          </div>

          {/* Right - Portrait */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={profilePlaceholder}
                  alt="Pratham Sangurdekar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
