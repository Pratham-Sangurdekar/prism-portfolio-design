const Skills = () => {
  const skills = [
    { number: "01", name: "Python" },
    { number: "02", name: "JavaScript" },
    { number: "03", name: "React" },
    { number: "04", name: "Flutter" },
    { number: "05", name: "Node.js" },
    { number: "06", name: "SQL" },
    { number: "07", name: "Google Firebase" },
    { number: "08", name: "API Integration" },
    { number: "09", name: "ML Modeling" },
    { number: "10", name: "Data Engineering" },
    { number: "11", name: "Model Deployment" },
    { number: "12", name: "Analytical Thinking" },
    { number: "13", name: "Clear Communication" },
    { number: "14", name: "Product Mindset" },
  ];

  return (
    <section id="skills" className="bg-[#e8e8e8] py-12 md:py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 
            className="font-black leading-[0.9] mb-4"
            style={{
              fontSize: 'clamp(48px, 10vw, 100px)',
              letterSpacing: '-0.02em',
              color: '#1a1a1a',
            }}
          >
          <p>
            MY TECHNOLOGIES 
          </p>
            & SKILLS
          </h2>
          <div className="flex justify-end">
            <p 
              className="text-right max-w-sm text-xs md:text-sm"
              style={{
                color: '#1a1a1a',
                letterSpacing: '0.01em',
                lineHeight: '1.5',
              }}
            >
              TAILORED SOLUTIONS DESIGNED TO
              <br />
              ELEVATE YOUR BRAND AND DRIVE RESULTS
            </p>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-0">
          {/* Header Row */}
          <div className="grid grid-cols-[60px_1fr_60px] md:grid-cols-[80px_1fr_80px] gap-4 md:gap-6 pb-2 mb-2 border-b border-black/15">

            <div className="text-[10px] md:text-xs font-semibold tracking-wider" style={{ color: '#1a1a1a' }}>
              EXPERTISE
            </div>
            <div className="text-[10px] md:text-xs font-semibold tracking-wider text-right" style={{ color: '#1a1a1a' }}>
              
            </div>
          </div>

          {/* Skills Rows */}
          {skills.map((skill, index) => (
            <div
              key={skill.number}
              className="grid grid-cols-[60px_1fr_60px] md:grid-cols-[80px_1fr_80px] gap-4 md:gap-6 py-3 md:py-4 border-b border-black/5 group hover:bg-black/[0.03] transition-all duration-200 cursor-pointer"
              style={{
                animation: `fadeInUp 0.4s ease-out ${index * 0.03}s both`,
              }}
            >
              {/* Number */}
              <div 
                className="text-sm md:text-base font-light"
                style={{ color: '#666' }}
              >
                {skill.number}
              </div>

              {/* Skill Name */}
              <div 
                className="text-sm md:text-base font-normal group-hover:translate-x-1 transition-transform duration-200"
                style={{ color: '#1a1a1a' }}
              >
                {skill.name}
              </div>

              {/* Icon */}
              <div className="flex justify-end items-center">
                <div 
                  className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-black/30 flex items-center justify-center group-hover:border-black group-hover:bg-black transition-all duration-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-black/30 group-hover:bg-white transition-colors duration-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
