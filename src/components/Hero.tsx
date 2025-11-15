const resumeUrl = new URL('../assets/Pratham_Resume.pdf', import.meta.url).href;

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Pratham_Sangurdekar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 fluid-gradient"></div>
      </div>


      <style>{`
        @keyframes fluidMove1 {
          0%, 100% { 
            transform: translate(0%, 0%) rotate(0deg); 
          }
          33% { 
            transform: translate(30%, 20%) rotate(120deg); 
          }
          66% { 
            transform: translate(-20%, 30%) rotate(240deg); 
          }
        }

        @keyframes fluidMove2 {
          0%, 100% { 
            transform: translate(0%, 0%) rotate(0deg) scale(1); 
          }
          50% { 
            transform: translate(-30%, -20%) rotate(180deg) scale(1.2); 
          }
        }

        @keyframes fluidMove3 {
          0%, 100% { 
            transform: translate(0%, 0%) scale(1); 
          }
          25% { 
            transform: translate(20%, -30%) scale(1.3); 
          }
          50% { 
            transform: translate(-30%, 20%) scale(0.9); 
          }
          75% { 
            transform: translate(15%, 25%) scale(1.1); 
          }
        }

        .fluid-gradient {
          background: 
            radial-gradient(ellipse at 30% 40%, rgba(28, 82, 199, 1) 0%, transparent 25%),
            radial-gradient(ellipse at 70% 60%, rgba(255, 255, 255, 1) 0%, transparent 22%),
            radial-gradient(ellipse at 50% 30%, rgba(28, 82, 199, 1) 0%, transparent 28%),
            radial-gradient(ellipse at 20% 70%, rgba(255, 255, 255, 1) 0%, transparent 20%),
            radial-gradient(ellipse at 80% 40%, rgba(199, 28, 148, 1) 0%, transparent 25%),
            radial-gradient(ellipse at 40% 80%, rgba(255, 255, 255, 1) 0%, transparent 22%),
            radial-gradient(ellipse at 60% 20%, rgba(199, 28, 28, 1) 0%, transparent 20%),
            #000000;
          background-size: 200% 200%;
          background-position: 0% 50%;
          animation: fluidMove1 20s ease-in-out infinite;
          filter: blur(100px) contrast(1.8) brightness(1);
          will-change: transform;
          opacity: 1;
        }

        .fluid-gradient::before {
          content: '';
          position: absolute;
          inset: -50%;
          background: 
            radial-gradient(ellipse at 60% 50%, rgba(26, 136, 37, 0.92) 0%, transparent 30%),
            radial-gradient(ellipse at 40% 50%, rgba(255, 255, 255, 0.96) 0%, transparent 28%),
            radial-gradient(ellipse at 50% 70%, rgba(73, 204, 75, 1) 0%, transparent 25%),
            radial-gradient(ellipse at 30% 30%, rgba(76, 182, 70, 1) 0%, transparent 23%),
            radial-gradient(ellipse at 70% 70%, rgba(199, 28, 28, 1) 0%, transparent 25%);
          background-size: 150% 150%;
          animation: fluidMove2 15s ease-in-out infinite;
          filter: blur(120px);
          mix-blend-mode: screen;
          will-change: transform;
          opacity: 0.7;
        }

        .fluid-gradient::after {
          content: '';
          position: absolute;
          inset: -30%;
          background: 
            radial-gradient(circle at 45% 55%, rgba(255, 0, 0, 1) 0%, transparent 25%),
            radial-gradient(circle at 55% 45%, rgba(199, 28, 28, 1) 0%, transparent 28%),
            radial-gradient(circle at 35% 65%, rgba(224, 13, 13, 1) 0%, transparent 22%),
            radial-gradient(circle at 65% 35%, rgba(199, 28, 28, 1) 0%, transparent 25%);
          background-size: 180% 180%;
          animation: fluidMove3 25s ease-in-out infinite;
          filter: blur(110px);
          opacity: 0.6;
          mix-blend-mode: lighten;
          will-change: transform;
        }

        .fade-line {
          animation: fadeInLine 1.5s ease-out forwards;
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          50% {
            transform: scale(1.05) translateY(-5px);
          }
          70% {
            transform: scale(0.9) translateY(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes floatBubble {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .chat-bubble {
          animation: bounceIn 1s ease-out 0.5s backwards, floatBubble 3s ease-in-out 1.5s infinite;
        }
      `}</style>

      {/* Social Media Links - Top Left */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 lg:left-16 xl:left-24 z-30 flex items-center gap-4 md:gap-6">
        <a 
          href="https://github.com/Pratham-Sangurdekar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a 
          href="https://www.instagram.com/pratham__s_/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a 
          href="https://www.linkedin.com/in/pratham-sangurdekar-966348389/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>

      {/* Robot Container with Terminal Window - Desktop only (absolute positioned) */}
      <div 
        className="hidden md:block absolute z-20 robot-container"
        style={{
          bottom: '-100px',
          right: '-70px',
        }}
      >
        {/* Media query styles for responsive sizing */}
        <style>{`
          .robot-container {
            width: 500px;
            height: 500px;
          }
          
          @media (min-width: 1024px) {
            .robot-container {
              width: 550px;
              height: 550px;
              right: 40px;
            }
          }
          
          @media (min-width: 1280px) {
            .robot-container {
              width: 600px;
              height: 600px;
              right: 60px;
            }
          }
        `}</style>
        
        {/* Terminal Window - Desktop positioning */}
        <div 
          className="chat-bubble absolute cursor-pointer"
          style={{
            bottom: '400px',
            left: '-200px',
            zIndex: 25,
          }}
          onClick={handleResumeDownload}
        >
          <div 
            className="bg-[#1e1e1e] rounded-lg shadow-2xl border border-[#3e3e3e] overflow-hidden w-[320px]"
          >
            {/* Terminal Header */}
            <div className="bg-[#2d2d2d] px-3 py-2 flex items-center gap-2 border-b border-[#3e3e3e]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-[#8e8e8e] text-xs ml-2 font-mono">resume.sh</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-[#4ec9b0]">$</span>
                <span className="text-[#ce9178]">./get_resume.sh</span>
              </div>
              <div className="text-[#d4d4d4] leading-relaxed">
                <p className="mb-1">
                  <span className="text-[#569cd6]">keep scrolling</span>
                  <span className="text-[#d4d4d4]"> or </span>
                </p>
                <p>
                  <span className="text-[#4ec9b0]">click me</span>
                  <span className="text-[#d4d4d4]"> to get the </span>
                  <span className="text-[#ce9178]">resume</span>
                </p>
              </div>
              <div className="flex items-center gap-1 mt-3">
                <span className="text-[#4ec9b0]">$</span>
                <span className="animate-pulse text-[#d4d4d4]">▊</span>
              </div>
            </div>
          </div>
        </div>

        {/* Spline 3D Robot */}
        <div className="relative w-full h-full overflow-hidden pointer-events-auto">
          <iframe 
            src='https://my.spline.design/genkubgreetingrobot-1mb586YLhBwFfiawPSXkU9tL/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            loading="lazy"
            style={{ 
              border: 'none',
              pointerEvents: 'none',
              transform: 'translate(15%, -15%)',
            }}
          />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex-1 flex flex-col px-6 md:px-8 lg:px-16 xl:px-24 pt-24 md:pt-28 pb-8">
        {/* Hero content grid */}
        <div className="flex-1 grid md:grid-cols-2 gap-12 md:gap-20 items-start max-w-[1600px] mx-auto w-full">
          {/* Left side - Name and description */}
          <div className="space-y-6 md:space-y-10 mt-4 md:mt-8">
            <h1
              className="font-black leading-[0.88] tracking-tight animate-slide-up-fade"
              style={{
                fontSize: "clamp(20px, 7.5vw, 100px)",
                fontWeight: 900,
                letterSpacing: "-0.035em",
                color: "#d4d4d4ff",
                textTransform: "uppercase",
              }}
            >
              PRATHAM
              <br />
              SANGURDEKAR
            </h1>
            <p>⚲ Mumbai, India, 
            <br /> 
            20 y/o, Student.</p>

            {/* Professional details - visible on mobile, hidden on desktop (shown in right column on desktop) */}
            <div className="md:hidden flex flex-col items-start space-y-0.5 mt-6 mb-6 animate-slide-up-fade" style={{ animationDelay: "0.25s", animationFillMode: "backwards" }}>
              <div className="text-left space-y-0.5 mb-2">
                <p className="text-xs font-normal text-[#d4d4d4ff] tracking-wide leading-relaxed">
                  Rising Innovator
                </p>
                <p className="text-xs font-normal text-[#d4d4d4ff] tracking-wide leading-relaxed">
                  AI Engineer | Developer
                </p>
              </div>
              <div className="text-left space-y-0.5">
                <p className="text-xs font-normal text-[#d4d4d4ff] tracking-wide leading-relaxed">
                  Full-Stack Development
                </p>
                <p className="text-xs font-normal text-[#d4d4d4ff] tracking-wide leading-relaxed">
                  Machine Learning
                </p>
                <p className="text-xs font-normal text-[#d4d4d4ff] tracking-wide leading-relaxed">
                  System Architecture
                </p>
                <p className="text-xs font-normal text-[#d4d4d4ff] tracking-wide leading-relaxed">
                  Business Strategy
                </p>
              </div>
            </div>

            <div
              className="text-sm md:text-[15px] leading-relaxed max-w-[520px] animate-slide-up-fade pr-4 md:pr-0"
              style={{
                color: "#7e7e7eff",
                animationDelay: "0.2s",
                animationFillMode: "backwards",
                lineHeight: "1.85",
                fontWeight: 400,
              }}
            >
              {/* Terminal Window */}
                <div 
                  className="bg-[#1e1e1e] rounded-lg shadow-2xl border border-[#3e3e3e] overflow-hidden w-full md:w-[600px]"
                >
                  {/* Terminal Header */}
                  <div className="bg-[#2d2d2d] px-3 py-2 flex items-center gap-2 border-b border-[#3e3e3e]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <span className="text-[#8e8e8e] text-xs ml-2 font-mono">About.Me</span>
                  </div>
                  
                  {/* Terminal Content */}
                  <div className="p-3 md:p-4 font-mono text-xs md:text-sm">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-[#4ec9b0]">$</span>
                      <span className="text-[#ce9178]">./about_me.sh</span>
                    </div>
                    <div className="text-[#d4d4d4] leading-relaxed">
                      <p>
                        I am currently pursuing a degree in <span className="text-[#569cd6]">Artificial Intelligence</span> and an <span className="text-[#4ec9b0]">MBA in Finance.</span>
                      </p>
                      <p className="mt-2">
                        My work focuses on connecting <span className="text-[#ce9178]">technology</span> with <span className="text-[#ce9178]">strategy</span>, designing intelligent systems that solve real problems and scale sustainably.
                      </p>
                      <p className="mt-2">
                        I enjoy building thoughtful products, understanding how things work at a systems level, and creating solutions that are both <span className="text-[#569cd6]">impactful</span> yet <span className="text-[#4ec9b0]">elegant</span>.
                      </p>
                    </div>
                    <div className="flex items-center gap-1 mt-3">
                      <span className="text-[#4ec9b0]">$</span>
                      <span className="animate-pulse text-[#d4d4d4]">▊</span>
                    </div>
                  </div>
                </div>
              </div>
            
            {/* Robot Container with Terminal Window - Mobile only, shown after About.Me */}
            <div className="md:hidden relative z-10 mt-8 mb-8">
              {/* Robot and Resume Terminal Container */}
              <div className="relative w-full flex flex-col items-center">
                {/* Spline 3D Robot */}
                <div className="relative w-[180px] h-[180px] overflow-hidden">
                  <iframe 
                    src='https://my.spline.design/genkubgreetingrobot-1mb586YLhBwFfiawPSXkU9tL/' 
                    frameBorder='0' 
                    width='190%' 
                    height='150%'
                    loading="lazy"
                    style={{ 
                      border: 'none',
                      pointerEvents: 'none',
                      transform: 'translate(-15%, -10%)',
                    }}
                  />
                </div>

                {/* Resume Terminal - positioned above robot */}
                <div 
                  className="chat-bubble cursor-pointer -mt-4"
                  onClick={handleResumeDownload}
                >
                  <div 
                    className="bg-[#1e1e1e] rounded-lg shadow-2xl border border-[#3e3e3e] overflow-hidden w-[220px]"
                  >
                    {/* Terminal Header */}
                    <div className="bg-[#2d2d2d] px-2 py-1.5 flex items-center gap-2 border-b border-[#3e3e3e]">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                      </div>
                      <span className="text-[#8e8e8e] text-[10px] ml-2 font-mono">resume.sh</span>
                    </div>
                    
                    {/* Terminal Content */}
                    <div className="p-2 font-mono text-[10px]">
                      <div className="flex items-start gap-1 mb-1">
                        <span className="text-[#4ec9b0]">$</span>
                        <span className="text-[#ce9178]">./get_resume.sh</span>
                      </div>
                      <div className="text-[#d4d4d4] leading-relaxed">
                        <p className="mb-0.5">
                          <span className="text-[#569cd6]">keep scrolling</span>
                          <span className="text-[#d4d4d4]"> or </span>
                        </p>
                        <p>
                          <span className="text-[#4ec9b0]">click me</span>
                          <span className="text-[#d4d4d4]"> to get the </span>
                          <span className="text-[#ce9178]">resume</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-1 mt-2">
                        <span className="text-[#4ec9b0]">$</span>
                        <span className="animate-pulse text-[#d4d4d4]">▊</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Resume Button - Hidden since terminal window is now visible on mobile */}
            {/* 
            <button
              onClick={handleResumeDownload}
              className="md:hidden mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <span>Download Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
            */}
          </div>

          {/* Right side - Professional details */}
          <div className="hidden md:flex flex-col items-start md:items-end space-y-0.5 mt-4 md:mt-8 mb-8 md:mb-0 animate-slide-up-fade" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
            <div className="text-left md:text-right space-y-0.5 mb-3">
              <p className="text-xs md:text-[17px] font-normal text-[#d4d4d4ff] tracking-wide leading-relaxed">
                Rising Innovator | Developer
              </p>
            </div>
            <div className="text-left md:text-right space-y-0.5">
              <p className="text-xs md:text-[17px] font-normal text-[#d4d4d4ff] tracking-wide leading-relaxed">
                Full-Stack Development
              </p>
              <p className="text-xs md:text-[17px] font-normal text-[#d4d4d4ff] tracking-wide leading-relaxed">
                Machine Learning
              </p>
              <p className="text-xs md:text-[17px] font-normal text-[#d4d4d4ff] tracking-wide leading-relaxed">
                System Architecture
              </p>
              <p className="text-xs md:text-[17px] font-normal text-[#d4d4d4ff] tracking-wide leading-relaxed">
                Business Strategy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tech stack marquee */}
      <div className="relative z-10 p-8 overflow-hidden ">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 px-12 lg:px-16 transition-opacity hover:opacity-70 cursor-default"
              >
                {/* Tech Logo */}
                <div className="w-6 h-6 flex items-center justify-center">
                  {tech === "Python" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#3776AB]">
                      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                    </svg>
                  )}
                  {tech === "JavaScript" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#F7DF1E]">
                      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                    </svg>
                  )}
                  {tech === "TypeScript" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#3178C6]">
                      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                    </svg>
                  )}
                  {tech === "React" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#61DAFB]">
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                    </svg>
                  )}
                  {tech === "Next.js" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                      <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4570l-.1103-.0695c-.0676-.0395-.1223-.1055-.1506-.1774l-.0425-.1101.0009-4.703.0017-4.7054.0647-.0814c.0354-.0443.1063-.1045.1552-.1342.0862-.0528.1259-.0572.4844-.0572.4792 0 .5784.0187.7597.1401.0521.0351 1.1913 1.7824 2.5293 3.8817 1.3378 2.0994 2.9745 4.6587 3.6368 5.6872l1.2050 1.8701.0805-.0532c1.1559-.753 2.3651-1.9873 3.2154-3.2797.8703-1.3213 1.4904-2.8296 1.8098-4.3997.0962-.659.108-.8537.108-1.7474s-.012-1.0884-.108-1.7476c-.652-4.506-3.8591-8.2919-8.2087-9.6945-.7672-.2487-1.5928-.4223-2.4995-.5232-.169-.0176-1.0835-.0366-1.6123-.0366zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.0633.0234 1.3653.0186 4.3044l-.0067 4.2175-1.0635-1.6501-1.0635-1.6519-.0009-2.5773c0-1.4166.0067-2.5906.0116-2.6068.0186-.0766.0875-.1816.1548-.2384.1117-.0964.1237-.1011.5429-.1011z"/>
                    </svg>
                  )}
                  {tech === "Node.js" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#339933]">
                      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.990,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                    </svg>
                  )}
                  {tech === "Flask" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    </svg>
                  )}
                  {tech === "FastAPI" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#009688]">
                      <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z"/>
                    </svg>
                  )}
                  {tech === "Flutter" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#02569B]">
                      <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
                    </svg>
                  )}
                  {tech === "TensorFlow" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#FF6F00]">
                      <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603z"/>
                    </svg>
                  )}
                  {tech === "PyTorch" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#EE4C2C]">
                      <path d="M12.005 0L4.952 7.053c-2.756 2.755-2.756 7.237 0 9.992s7.236 2.755 9.992 0c2.685-2.685 2.75-6.991.193-9.742l.004-.004L20.935 1.5l.004.004c-.003 0-.003 0-.004-.004zM9.477 9.477c-.003.003-.003.003-.004.004-1.094 1.094-1.094 2.872 0 3.967 1.094 1.093 2.872 1.093 3.966 0 1.094-1.094 1.094-2.872 0-3.967-.003-.003-.003-.003-.004-.004L18.933 4 13.971 8.962 9.477 9.477z"/>
                    </svg>
                  )}
                  {tech === "Qiskit" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#6929C4]">
                      <path d="M12 0L8.43 5.7 12 11.42 15.57 5.7 12 0zm0 12.58L8.43 18.3 12 24l3.57-5.7L12 12.58zM0 6.65l3.54 6.35L7.08 6.65 3.54.3 0 6.65zm16.92 0l3.54 6.35L24 6.65 20.46.3l-3.54 6.35zM3.54 10.7L0 17.05 3.54 23.4l3.54-6.35-3.54-6.35zm16.92 0l-3.54 6.35 3.54 6.35 3.54-6.35-3.54-6.35z"/>
                    </svg>
                  )}
                  {tech === "OpenCV" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#5C3EE8]">
                      <path d="M12.002 0c-.73.002-1.465.107-2.158.303-2.433.688-4.362 2.617-5.05 5.05-.688 2.434-.275 5.041 1.083 6.824-1.358 1.783-1.771 4.39-1.083 6.824.688 2.433 2.617 4.362 5.05 5.05 2.434.688 5.041.275 6.824-1.083 1.783 1.358 4.39 1.771 6.824 1.083 2.433-.688 4.362-2.617 5.05-5.05.688-2.434.275-5.041-1.083-6.824 1.358-1.783 1.771-4.39 1.083-6.824-.688-2.433-2.617-4.362-5.05-5.05C20.058.615 17.451 1.028 15.668 2.386 14.927 1.028 13.515.288 12.002 0zm.037 3.457c.955.004 1.91.362 2.64 1.092 1.456 1.456 1.456 3.824 0 5.28-1.456 1.456-3.824 1.456-5.28 0-1.456-1.456-1.456-3.824 0-5.28.728-.728 1.681-1.096 2.64-1.092zm6.367 4.283c.729 0 1.457.279 2.013.835 1.112 1.112 1.112 2.914 0 4.026-1.112 1.112-2.914 1.112-4.026 0-1.112-1.112-1.112-2.914 0-4.026.556-.556 1.284-.835 2.013-.835zM5.594 7.74c.729 0 1.457.279 2.013.835 1.112 1.112 1.112 2.914 0 4.026-1.112 1.112-2.914 1.112-4.026 0-1.112-1.112-1.112-2.914 0-4.026.556-.556 1.284-.835 2.013-.835zm6.367 6.092c.729 0 1.457.279 2.013.835 1.112 1.112 1.112 2.914 0 4.026-1.112 1.112-2.914 1.112-4.026 0-1.112-1.112-1.112-2.914 0-4.026.556-.556 1.284-.835 2.013-.835z"/>
                    </svg>
                  )}
                  {(tech === "SQL" || tech === "PostgreSQL") && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#4169E1]">
                      <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-.7803-.1779-2.7038 1.4607-5.0644 1.6688-7.2444 1.6688-4.6042 0-7.4571-1.3539-7.5882-1.4177a.5786.5786 0 0 0-.2748-.0696.5538.5538 0 0 0-.2857.0696c-.1311.0638-3.9716 1.4177-7.5882 1.4177-2.18 0-4.5407-.2081-7.2443-1.6688-.303-.1639-.6416-.0853-.7804.1779a.5269.5269 0 0 0-.0563.1191C.9274 15.4214 0 17.2916 0 19.1618c0 .4732.0292.9463.0876 1.4083.8322 6.5624 8.2479 8.4326 11.9124 8.4326s11.0803-1.8702 11.9125-8.4326c.0584-.462.0876-.9351.0876-1.4083 0-1.8702-.9274-3.7404-1.3527-4.4392zM12 27.9944c-3.6645 0-10.9168-1.8702-11.8414-8.2396C.0584 19.1618 0 18.5894 0 18.017c0-1.6559.7636-3.3117 1.1598-4.0105 2.8415 1.5423 5.3226 1.8702 7.6108 1.8702 4.4622 0 7.314-1.3539 7.5882-1.4177a.5786.5786 0 0 1 .2748-.0696.5538.5538 0 0 1 .2857.0696c.2742.0638 3.126 1.4177 7.5882 1.4177 2.2883 0 4.7693-.3279 7.6108-1.8702.396.6988 1.1598 2.3546 1.1598 4.0105 0 .5724-.0584 1.1448-.1168 1.7172-.9246 6.3694-8.1769 8.2396-11.8414 8.2396zM12 4.9748c3.6645 0 10.9168 1.8702 11.8414 8.2396.0584.5724.1168 1.1448.1168 1.7172 0 1.6559-.7636 3.3117-1.1598 4.0105-2.8415-1.5423-5.3226-1.8702-7.6108-1.8702-4.4622 0-7.314 1.3539-7.5882 1.4177a.5786.5786 0 0 1-.2748.0696.5538.5538 0 0 1-.2857-.0696c-.2742-.0638-3.126-1.4177-7.5882-1.4177-2.2883 0-4.7693.3279-7.6108 1.8702C.7636 18.3228 0 16.6671 0 15.0112c0-.5724.0584-1.1448.1168-1.7172C1.0414 6.8449 8.2937 4.9748 12 4.9748z"/>
                    </svg>
                  )}
                  {tech === "Firebase" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#FFCA28]">
                      <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/>
                    </svg>
                  )}
                  {tech === "Supabase" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#3ECF8E]">
                      <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
                    </svg>
                  )}
                  {tech === "Docker" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#2496ED]">
                      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.072-1.275-4.834-5.038-5.41-5.555-5.41a.185.185 0 00-.178.135c-.142.473-.345 1.482.002 2.562.3.962.821 1.813 1.551 2.527-.654.414-1.556.989-2.036 1.436-.62.58-1.19 1.325-1.19 2.37v.003c-.001.104.084.19.188.19h12.119a.185.185 0 00.185-.186v-.204c-.003-1.855-.755-3.254-1.122-3.985"/>
                    </svg>
                  )}
                  {tech === "AWS" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#FF9900]">
                      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.072-.208.072-.08 0-.16-.04-.239-.112a2.417 2.417 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.226.726-1.644.487-.417 1.133-.627 1.955-.627.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.368-1.3-.368-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .24-.16c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.215 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.127-.144.224-.304.272-.479.047-.176.08-.391.08-.64v-.312a6.506 6.506 0 0 0-.742-.144 6.029 6.029 0 0 0-.75-.047c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.838.2.184.479.272.846.272zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.318.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.15 0 .254.025.318.08.065.048.12.16.152.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .319-.08h.742c.128 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.080h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.151-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.917-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.535 0 .95-.096 1.238-.287.287-.192.43-.465.43-.813 0-.239-.08-.44-.23-.598-.152-.16-.454-.304-.894-.44l-1.293-.408c-.654-.208-1.133-.516-1.43-.908-.287-.384-.438-.83-.438-1.325 0-.383.08-.718.247-1.005.168-.287.391-.53.67-.742.28-.216.607-.368.99-.472.376-.104.774-.152 1.197-.152.168 0 .343.008.51.032.176.024.336.056.487.088.144.04.28.08.415.127.127.048.224.096.279.144a.549.549 0 0 1 .168.184.473.473 0 0 1 .048.216v.368c0 .168-.064.256-.184.256-.063 0-.168-.024-.303-.08-.463-.216-1-.32-1.597-.32-.487 0-.863.08-1.133.247-.27.168-.41.423-.41.765 0 .239.088.447.255.606.168.16.488.32.95.463l1.268.408c.647.2 1.117.487 1.396.861.28.383.415.814.415 1.3 0 .392-.08.744-.24 1.045-.159.304-.375.56-.655.765-.271.2-.607.36-.99.463a4.265 4.265 0 0 1-1.277.191z"/>
                    </svg>
                  )}
                  {tech === "GCP" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#4285F4]">
                      <path d="M12.19 2.38a9.344 9.344 0 0 1 9.234 10.064l.003.034-.002.022a9.244 9.244 0 0 1 .083 1.077c0 5.269-3.28 9.4-7.973 9.4h-.18c-.137 0-.272-.019-.403-.057-.664-.173-1.41-.32-2.195-.32l-.077-.002c-.917 0-1.67.245-2.163.482a.54.54 0 0 1-.32.09h-.088c-4.693 0-7.973-4.131-7.973-9.4 0-.425.029-.834.084-1.189L.194 12.5c0-.002 0-.004.002-.005A9.344 9.344 0 0 1 12.19 2.38zm0 1.171a8.173 8.173 0 0 0-8.11 7.403v.012A10.42 10.42 0 0 0 4.002 12c0 4.53 2.747 8.229 6.802 8.229h.04c.75-.271 1.657-.567 2.866-.567 1.146 0 2.048.267 2.71.532l.108.043h.122c4.053 0 6.802-3.699 6.802-8.229 0-.348-.026-.72-.074-1.105v-.02l.003-.048A8.173 8.173 0 0 0 12.19 3.55zm2.059 3.415a.585.585 0 1 1 0 1.17h-4.463V12.6h3.585a.585.585 0 1 1 0 1.17h-3.585v4.463a.585.585 0 1 1-1.171 0v-4.463H5.03a.585.585 0 1 1 0-1.17h3.585V8.136a.585.585 0 1 1 1.17 0v4.463h4.464z"/>
                    </svg>
                  )}
                </div>
                
                <span
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 28px)",
                    fontWeight: 1000,
                    color: "#ffffffa3",
                    
                    letterSpacing: "0.05em",
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, Times New Roman, serif",
                  }}
                >
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Hero;
