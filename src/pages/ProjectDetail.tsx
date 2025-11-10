import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth mb-12"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Project
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize">
                {slug?.replace(/-/g, " ")}
              </h1>
            </div>

            <div className="glass p-8 md:p-12 rounded-3xl space-y-6">
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is a placeholder for project details. Add your project
                description, technologies used, challenges faced, and outcomes
                achieved here.
              </p>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      TensorFlow
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      React
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Role</h3>
                  <p className="text-muted-foreground">
                    Lead Developer & Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
