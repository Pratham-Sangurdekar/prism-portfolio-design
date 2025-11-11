import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ved-Aaahaar",
      category: "Web Development",
      tags: ["AI","Web Development", "Competitve Hackathon"],
      image: project1,
      slug: "ved-aaahaar",
    },
    {
      id: 2,
      title: "Rizzume - Mobile Application",
      category: "Web Design",
      tags: ["Development", "UI/UX", "Flutter"],
      image: project2,
      slug: "rizzume-mobile-app",
    },
    {
      id: 3,
      title: "Gesture-Games, GG",
      category: "Game Development",
      tags: ["Python", "API's", "Game Design"],
      image: project3,
      slug: "gesture-games",
    },
    {
      id: 4,
      title: "Mobile App",
      category: "Mobile Development",
      tags: ["Flutter", "Design"],
      image: project4,
      slug: "mobile-app",
    },
  ];

  return (
    <section id="projects" className="bg-[#e8e8e8] py-8 md:py-12 px-4 md:px-6">
      <div className="w-full">
        {/* Black Rounded Container */}
        <div className="bg-[#1a1a1a] rounded-[30px] md:rounded-[50px] p-8 md:p-12 lg:p-16">
          {/* Header */}
          <div className="mb-12 md:mb-16 flex items-start justify-between">
            <div>
              <h2 
                className="font-black leading-[0.85] text-white mb-4"
                style={{
                  fontSize: 'clamp(60px, 10vw, 120px)',
                  letterSpacing: '-0.02em',
                }}
              >
                SELECTED
                <br />
                WORK
              </h2>
              <p className="text-sm text-white/60 uppercase tracking-wider mt-4">
                LATEST WORK
              </p>
            </div>
            
            <div className="hidden md:block text-right max-w-xs">
              <p className="text-white text-sm leading-relaxed">
                IMPACTFUL SOLUTIONS THAT
                <br />
                STAND OUT,
                <br />
                CAPTURE ATTENTION,
                <br />
                AND DRIVE MEASURABLE SUCCESS
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/project/${project.slug}`}
                className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Dots Indicator */}
                  <div className="flex gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <div className={`w-2 h-2 rounded-full ${index === 1 ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <div className={`w-2 h-2 rounded-full ${index === 2 ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <div className={`w-2 h-2 rounded-full ${index === 3 ? 'bg-green-500' : 'bg-gray-300'}`} />
                  </div>

                  {/* Title and Category */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-black text-lg md:text-xl font-semibold mb-1 group-hover:text-black/70 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {project.tags.join(" • ")}
                      </p>
                    </div>
                    <button className="text-gray-600 hover:text-black transition-colors text-sm font-medium uppercase tracking-wider">
                      EXPLORE
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

export default Projects;
