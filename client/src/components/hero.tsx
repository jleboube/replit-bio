import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-accent">Joe LeBoube</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white/90">
              Sr Customer Solutions Manager
            </p>
            <p className="text-lg mb-8 text-white/80 leading-relaxed">
              I help customers accelerate their Cloud journey through strategic solutions and expert guidance.
              With over 20 years of technology experience, I've successfully managed teams ranging from 
              individual contributors to hundreds of direct and indirect reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-accent hover:bg-amber-600 text-white px-8 py-3 text-base font-semibold"
              >
                View My Experience
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-white text-white px-8 py-3 text-base font-semibold hover:bg-white hover:text-slate-900 bg-transparent"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="https://github.com/jleboube/replit-bio/blob/main/shared/IMG_2321.JPG"
              alt="Joe LeBoube - Professional headshot"
              className="rounded-full w-80 h-80 object-cover border-8 border-white/20 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
