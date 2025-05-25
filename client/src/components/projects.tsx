import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and Stripe integration. Features include user authentication, product management, and secure payments.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "E-commerce Platform Project",
      technologies: ["React", "Node.js", "MongoDB"],
      techColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"],
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Task Management App",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      techColors: ["bg-blue-100 text-blue-800", "bg-orange-100 text-orange-800", "bg-pink-100 text-pink-800"],
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics with a clean, intuitive interface.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Weather App",
      technologies: ["React Native", "Weather API", "Maps"],
      techColors: ["bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-indigo-100 text-indigo-800"],
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive business intelligence dashboard with real-time data visualization, custom reports, and interactive charts for data-driven decisions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Analytics Dashboard",
      technologies: ["React", "D3.js", "Python"],
      techColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"],
    },
    {
      title: "Real-time Chat App",
      description: "A modern messaging application with real-time communication, file sharing, group chats, and end-to-end encryption for secure conversations.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Chat Application",
      technologies: ["Socket.io", "Node.js", "Redis"],
      techColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-red-100 text-red-800"],
    },
    {
      title: "Blog Platform",
      description: "A content management system for bloggers with markdown support, SEO optimization, comment system, and social media integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Blog Platform",
      technologies: ["Next.js", "Markdown", "Prisma"],
      techColors: ["bg-blue-100 text-blue-800", "bg-gray-100 text-gray-800", "bg-green-100 text-green-800"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className={`${project.techColors[techIndex]} text-xs px-2 py-1 rounded`} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Button variant="link" className="text-primary hover:text-blue-700 font-semibold p-0">
                    <i className="fas fa-external-link-alt mr-1"></i>
                    Live Demo
                  </Button>
                  <Button variant="link" className="text-slate-600 hover:text-slate-800 p-0">
                    <i className="fab fa-github mr-1"></i>
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-3 font-semibold">
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
