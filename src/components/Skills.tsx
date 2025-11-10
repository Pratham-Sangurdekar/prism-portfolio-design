const Skills = () => {
  const technicalSkills = [
    "Python",
    "JavaScript",
    "Node.js",
    "React",
    "Flutter",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Qiskit",
    "OpenCV",
    "SQL",
    "Firebase",
    "API Integration",
    "Git",
    "ML Modeling",
    "Data Engineering",
    "Model Deployment",
  ];

  const professionalStrengths = [
    "Analytical Thinking",
    "Clear Communication",
    "Product Mindset",
    "Leadership",
    "Collaboration",
    "Problem Solving",
    "Research",
    "Adaptability",
    "Strategic Decision Making",
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          EXPERTISE
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 glass rounded-full text-sm font-medium hover-lift"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Strengths */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-accent">
              Professional Strengths
            </h3>
            <div className="flex flex-wrap gap-3">
              {professionalStrengths.map((strength) => (
                <span
                  key={strength}
                  className="px-4 py-2 glass rounded-full text-sm font-medium hover-lift"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
