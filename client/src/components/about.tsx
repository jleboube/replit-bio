import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Cloud technology workspace"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a seasoned technology leader with over 20 years of experience helping organizations
              transform their operations through cloud solutions. My career has spanned from hands-on
              technical work in consoles and IDEs to strategic leadership roles managing large teams.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              I specialize in customer success, cloud migration strategies, and building high-performing
              teams. My passion lies in understanding complex business challenges and translating them
              into actionable cloud solutions that drive real business value.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-slate-600">Teams Managed</div>
              </div>
            </div>

            <div className="pt-6">
              <Button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 font-semibold">
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
