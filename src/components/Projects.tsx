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
      title: "Sales-Forecasting WebApp",
      category: "Mobile Development",
      tags: ["Web-Design", "Python", "Data Science"],
      image: project4,
      slug: "sales-forecasting-webapp",
    },
  ];

  return (
    <section id="projects" className="bg-[#e8e8e8] py-8 md:py-12 px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Black Rounded Container */}
        <div className="bg-[#1a1a1a] rounded-[20px] md:rounded-[50px] p-6 md:p-12 lg:p-16">
          {/* Header */}
          <div className="mb-8 md:mb-16 flex items-start justify-between">
            <div>
              <h2 
                className="font-black leading-[0.85] text-white mb-2 md:mb-4"
                style={{
                  fontSize: 'clamp(40px, 10vw, 120px)',
                  letterSpacing: '-0.02em',
                }}
              >
                SELECTED
                <br />
                WORK
              </h2>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-2 md:mt-4">
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
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/project/${project.slug}`}
                className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
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
                <div className="p-4 md:p-8">
                  {/* Dots Indicator */}
                  <div className="flex gap-1.5 md:gap-2 mb-3 md:mb-4">
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${index === 1 ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${index === 2 ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${index === 3 ? 'bg-green-500' : 'bg-gray-300'}`} />
                  </div>

                  {/* Title and Category */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex-1">
                      <h3 className="text-black text-base md:text-xl font-semibold mb-1 group-hover:text-black/70 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-xs md:text-sm">
                        {project.tags.join(" • ")}
                      </p>
                    </div>
                    <button className="text-gray-600 hover:text-black transition-colors text-xs md:text-sm font-medium uppercase tracking-wider flex-shrink-0">
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
