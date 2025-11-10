import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Model Deployment",
      category: "Machine Learning",
      image: project1,
      slug: "ai-model-deployment",
    },
    {
      id: 2,
      title: "React Dashboard",
      category: "Web App",
      image: project2,
      slug: "react-dashboard",
    },
    {
      id: 3,
      title: "Data Analytics Platform",
      category: "Research",
      image: project3,
      slug: "data-analytics",
    },
    {
      id: 4,
      title: "Mobile App",
      category: "Flutter",
      image: project4,
      slug: "mobile-app",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          SELECTED WORK
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.slug}`}
              className="group relative overflow-hidden rounded-3xl glass p-6 hover-lift"
            >
              <div className="aspect-video overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>

              <div className="space-y-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary transition-smooth">
                  View Project →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
