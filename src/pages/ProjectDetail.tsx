import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Project data - should match your Projects component
  const projectsData: Record<string, {
    title: string;
    category: string;
    tags: string[];
    description: string;
    longDescription: string;
    challenge: string;
    solution: string;
    technologies: string[];
    role: string;
    duration: string;
    image: string;
    gallery: string[];
  }> = {
    "ved-aaahaar": {
      title: "Ved-Aaahaar",
      category: "Web Development",
      tags: ["AI", "Web Development", "Competitive Hackathon"],
      description: "A comprehensive web application that leverages AI to provide personalized meal recommendations and nutritional guidance based on Vedic principles.",
      longDescription: "Ved-Aaahaar is an innovative platform combining ancient Vedic wisdom with modern AI technology. The application analyzes user health data, dietary preferences, and nutritional requirements to suggest personalized meal plans rooted in Ayurvedic principles. Built during a competitive hackathon, this project demonstrates the seamless integration of traditional knowledge systems with cutting-edge machine learning algorithms.",
      challenge: "Creating an intelligent system that combines ancient Vedic knowledge with modern AI technology to provide personalized nutrition advice.",
      solution: "Developed a full-stack web application with AI-powered recommendation engine that analyzes user preferences and health data to suggest Vedic-based meal plans.",
      technologies: ["React", "Node.js", "TensorFlow", "MongoDB", "Python"],
      role: "Full Stack Developer & AI Engineer",
      duration: "3 months",
      image: project1,
      gallery: [project1, project2, project3, project4, project1, project2, project3, project4],
    },
    "rizzume-mobile-app": {
      title: "Rizzume - Mobile Application",
      category: "Mobile Development",
      tags: ["Development", "UI/UX", "Flutter"],
      description: "A mobile application designed to help users create professional resumes with AI-powered suggestions and modern templates.",
      longDescription: "Rizzume revolutionizes the resume creation process by bringing professional design tools to mobile devices. The app features an intuitive drag-and-drop interface, AI-powered content suggestions, and real-time preview capabilities. Users can choose from various modern templates and customize every aspect of their resume while receiving intelligent recommendations for improvement.",
      challenge: "Building an intuitive mobile experience that simplifies the complex process of resume creation while maintaining professional standards.",
      solution: "Created a Flutter-based mobile app with drag-and-drop interface, real-time preview, and AI-powered content suggestions for resume optimization.",
      technologies: ["Flutter", "Dart", "Firebase", "OpenAI API", "Figma"],
      role: "Mobile Developer & UI/UX Designer",
      duration: "4 months",
      image: project2,
      gallery: [project2, project3, project4, project1, project2, project3, project4, project1],
    },
    "gesture-games": {
      title: "Gesture-Games, GG",
      category: "Game Development",
      tags: ["Python", "API's", "Game Design"],
      description: "An innovative gaming platform that uses hand gesture recognition to control games, providing an immersive and interactive gaming experience.",
      longDescription: "Gesture-Games (GG) brings a new dimension to gaming by utilizing computer vision and machine learning for gesture-based controls. The platform features multiple games that can be controlled entirely through hand movements, eliminating the need for traditional controllers. The system works across various lighting conditions and adapts to different hand sizes, providing an inclusive and accessible gaming experience.",
      challenge: "Developing accurate real-time gesture recognition that works across different lighting conditions and hand sizes.",
      solution: "Implemented computer vision algorithms using MediaPipe and created a custom gesture mapping system for intuitive game controls.",
      technologies: ["Python", "MediaPipe", "OpenCV", "Pygame", "TensorFlow"],
      role: "Game Developer & Computer Vision Engineer",
      duration: "2 months",
      image: project3,
      gallery: [project3, project4, project1, project2, project3, project4, project1, project2],
    },
    "sales-forecasting-webapp": {
      title: "Sales-Forecasting WebApp",
      category: "Data Science",
      tags: ["Web-Design", "Python", "Data Science"],
      description: "A predictive analytics web application that uses machine learning to forecast sales trends and provide actionable business insights.",
      longDescription: "The Sales-Forecasting WebApp empowers businesses with data-driven decision making capabilities. Utilizing advanced machine learning algorithms for time series analysis, the application predicts future sales trends with high accuracy. The platform features interactive data visualizations, automated report generation, and customizable forecasting parameters, making complex analytics accessible to business users without technical backgrounds.",
      challenge: "Creating accurate sales predictions while presenting complex data insights in an accessible, user-friendly interface.",
      solution: "Built a web application with advanced ML models for time series forecasting, interactive visualizations, and automated report generation.",
      technologies: ["Python", "Scikit-learn", "Pandas", "React", "D3.js", "FastAPI"],
      role: "Data Scientist & Full Stack Developer",
      duration: "5 months",
      image: project4,
      gallery: [project4, project1, project2, project3, project4, project1, project2, project3],
    },
  };

  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e8e8e8]">
        <Navigation />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:text-black transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#e8e8e8]">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative pt-24 md:pt-32 pb-32 md:pb-48 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/50 to-[#000000]"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-12 md:mb-16 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs md:text-sm uppercase tracking-widest font-medium">Back to Home</span>
          </button>

          {/* Title */}
          <h1
            className="font-black text-white leading-[0.85] tracking-tight mb-6 md:mb-8"
            style={{
              fontSize: "clamp(48px, 10vw, 120px)",
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-white-600 text-lg md:text-2xl max-w-4xl leading-relaxed mb-8 md:mb-12">
            {project.longDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gray-800 text-white text-sm uppercase tracking-wider rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Gallery */}
      <section className="relative py-12 md:py-20 bg-[#e8e8e8]">
        <div className="mb-8 md:mb-12">
          {/* Scroll Left */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-left">
              {/* Double the images for seamless loop */}
              {[...project.gallery, ...project.gallery].map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[400px] h-[280px] rounded-2xl overflow-hidden bg-white shadow-lg"
                >
                  <img
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          {/* Scroll Right */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-right">
              {/* Double the images for seamless loop */}
              {[...project.gallery.reverse(), ...project.gallery].map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[400px] h-[280px] rounded-2xl overflow-hidden bg-white shadow-lg"
                >
                  <img
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="relative py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#e8e8e8]">
        <div className="max-w-[1400px] mx-auto">
          {/* Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-20">
            <div>
              <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-medium">Role</h3>
              <p className="text-black text-base md:text-lg font-semibold">{project.role}</p>
            </div>
            <div>
              <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-medium">Duration</h3>
              <p className="text-black text-base md:text-lg font-semibold">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-medium">Category</h3>
              <p className="text-black text-base md:text-lg font-semibold">{project.category}</p>
            </div>
            <div>
              <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-medium">Year</h3>
              <p className="text-black text-base md:text-lg font-semibold">2024</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-black text-2xl md:text-4xl font-bold mb-6 md:mb-8">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white text-black text-sm md:text-base rounded-xl border-2 border-black font-medium hover:bg-black hover:text-white transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* View More Projects */}
          <div className="text-center pt-12 border-t-2 border-black/10">
            <button
              onClick={() => navigate("/#projects")}
              className="inline-flex items-center gap-3 text-black hover:text-gray-600 transition-colors group"
            >
              <span className="text-sm uppercase tracking-widest font-bold">View More Projects</span>
              <ArrowLeft
                size={18}
                className="rotate-180 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
