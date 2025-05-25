import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Enterprise Cloud Migration",
      description: "Led a comprehensive cloud migration strategy for a Fortune 500 company, migrating 200+ applications to AWS with zero downtime and 40% cost reduction.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Cloud Migration Project",
      technologies: ["AWS", "Migration", "Strategy"],
      techColors: ["bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800", "bg-green-100 text-green-800"],
    },
    {
      title: "Multi-Cloud Strategy",
      description: "Designed and implemented a multi-cloud architecture spanning AWS, Azure, and GCP for improved resilience and optimized costs across global operations.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Multi-Cloud Architecture",
      technologies: ["AWS", "Azure", "GCP"],
      techColors: ["bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800", "bg-green-100 text-green-800"],
    },
    {
      title: "Customer Success Program",
      description: "Built and scaled a customer success organization from 5 to 150+ team members, achieving 95% customer retention and $50M+ ARR growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Team Leadership",
      technologies: ["Leadership", "Growth", "Strategy"],
      techColors: ["bg-purple-100 text-purple-800", "bg-green-100 text-green-800", "bg-blue-100 text-blue-800"],
    },
    {
      title: "Digital Transformation",
      description: "Spearheaded digital transformation initiatives for healthcare organizations, modernizing legacy systems and improving patient outcomes through cloud technologies.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Digital Transformation",
      technologies: ["Healthcare", "Modernization", "Cloud"],
      techColors: ["bg-red-100 text-red-800", "bg-blue-100 text-blue-800", "bg-green-100 text-green-800"],
    },
    {
      title: "Partner Ecosystem",
      description: "Developed strategic partnerships with technology vendors and system integrators, creating a $25M+ partner channel and expanding market reach.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Partnership Development",
      technologies: ["Partnerships", "Business Dev", "Growth"],
      techColors: ["bg-indigo-100 text-indigo-800", "bg-purple-100 text-purple-800", "bg-green-100 text-green-800"],
    },
    {
      title: "Innovation Lab",
      description: "Established an innovation lab focused on emerging technologies like AI/ML and IoT, driving next-generation solution development and competitive advantage.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Innovation Lab",
      technologies: ["AI/ML", "IoT", "Innovation"],
      techColors: ["bg-yellow-100 text-yellow-800", "bg-pink-100 text-pink-800", "bg-purple-100 text-purple-800"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Key Achievements</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Highlights from my career in customer solutions and cloud transformation
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
                    <i className="fas fa-info-circle mr-1"></i>
                    Learn More
                  </Button>
                  <Button variant="link" className="text-slate-600 hover:text-slate-800 p-0">
                    <i className="fas fa-chart-bar mr-1"></i>
                    Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-3 font-semibold">
            <i className="fas fa-briefcase mr-2"></i>
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
