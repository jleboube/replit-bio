import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      description: "React, Vue.js, TypeScript, Tailwind CSS, SASS",
      icon: "fab fa-react",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      progress: 90,
      progressColor: "bg-primary",
    },
    {
      title: "Backend Development",
      description: "Node.js, Express, Python, PostgreSQL, MongoDB",
      icon: "fab fa-node-js",
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      progress: 85,
      progressColor: "bg-green-600",
    },
    {
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Sketch, Prototyping",
      icon: "fab fa-figma",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      progress: 80,
      progressColor: "bg-purple-600",
    },
    {
      title: "Cloud & DevOps",
      description: "AWS, Docker, CI/CD, Git, Linux",
      icon: "fab fa-aws",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      progress: 75,
      progressColor: "bg-orange-600",
    },
    {
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
      icon: "fas fa-mobile-alt",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      progress: 70,
      progressColor: "bg-blue-600",
    },
    {
      title: "Data Analysis",
      description: "Python, R, Tableau, Power BI, SQL",
      icon: "fas fa-chart-line",
      iconColor: "text-red-600",
      bgColor: "bg-red-100",
      progress: 65,
      progressColor: "bg-red-600",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${skill.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <i className={`${skill.icon} text-2xl ${skill.iconColor}`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary">{skill.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{skill.description}</p>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`${skill.progressColor} h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
