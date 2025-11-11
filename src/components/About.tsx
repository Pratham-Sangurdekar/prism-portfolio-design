import aboutImage from "@/assets/about.jpg";
import Navigation from "./Navigation";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      {/* Navigation */}
      <Navigation />
      
      {/* Favicon in top left */}
      <div className="fixed top-8 left-6 md:top-12 md:left-12 z-40">
        <img 
          src="/favicon-32x32.png" 
          alt="PS Logo" 
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </div>
      
      <div className="max-w-[1600px] mx-auto">
        {/* Large Title */}
        <div className="mb-20">
          <h2 
            className="font-black leading-[0.85] tracking-tight"
            style={{
              fontSize: "clamp(40px, 9vw, 100px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            ABOUT
            <br />
            PRATHAM
          </h2>
        </div>

        {/* Two Column Layout - Left content, Right image spanning entire height */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Column - All text content */}
          <div className="space-y-12 order-2 md:order-1">
            {/* Tagline - mobile only, at top */}
            <div className="md:hidden mb-8">
              <p className="text-sm leading-relaxed text-gray-300">
                I'M NOT ALWAYS BUILDING AI SOLUTIONS, BUT WHEN I DO, THEY DELIVER IMPACT.
              </p>
            </div>

            {/* Welcome To Section */}
            <div className="space-y-6">
              <h3 className="text-base md:text-xl font-semibold mb-4 md:mb-6">Welcome</h3>
              <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-300">
                <p>
                  Hey I'm Pratham Sangurdekar, an aspiring AI engineer and strategist with a passion for building intelligent systems. 
                  I'm currently pursuing a degree in <span className="text-white">Artificial Intelligence</span> and an <span className="text-white">MBA in Finance</span>, 
                  combining technical expertise with business acumen.
                </p>
                <p>
                  For the past few years, I've been deeply involved in AI/ML development, full-stack engineering, and quantum computing research. 
                  I've led projects in crafting high-quality digital experiences, from concept to delivery, across various domains including 
                  enterprise AI solutions, computer vision applications, and scalable web platforms.
                </p>
                <p>
                  My work extends beyond just AI and software development. I have experience working with cutting-edge technologies like 
                  cloud infrastructure, and modern web technologies to bring innovative solutions to life through 
                  impactful technical execution.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 pt-8 md:pt-12">
              {/* My Life Section */}
              <div className="space-y-6">
                <h3 className="text-base md:text-xl font-semibold mb-4 md:mb-6">My Life</h3>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-300">
                  <p>
                    I currently live in <span className="text-white">Mumbai, India</span>, where I balance my studies with building 
                    meaningful projects and contributing to the tech community. At 20, I've had the opportunity to work on diverse 
                    challenges from quantum algorithms to production-grade ML systems.
                  </p>
                  <p>
                    Outside of work, I enjoy exploring new technologies, contributing to open-source projects, writing technical articles, 
                    and experimenting with AI models. I'm passionate about the intersection of artificial intelligence, business strategy, 
                    and creating solutions that make a real impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Tagline */}
          <div className="space-y-8 order-1 md:order-2">
            {/* Tagline - desktop only */}
            <div className="hidden md:flex justify-end mb-8">
              <div className="text-right">
                <p className="text-base md:text-lg leading-relaxed max-w-md">
                  I'M NOT ALWAYS BUILDING AI SOLUTIONS, BUT WHEN I DO, THEY DELIVER IMPACT.
                </p>
              </div>
            </div>

            {/* Image spanning full height */}
            <div className="relative w-full h-[400px] md:h-[700px] group">
              {/* Animated border gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              {/* Spotlight effect */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Main image container */}
              <div className="relative h-full rounded-lg overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                <img
                  src={aboutImage}
                  alt="Pratham Sangurdekar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes tilt {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }
        
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default About;
