import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "joeleboube@gmail.com",
    },
    {
      icon: "fas fa-briefcase",
      label: "Role",
      value: "Sr Customer Solutions Manager",
    },
    {
      icon: "fas fa-cloud",
      label: "Specialization",
      value: "Cloud Solutions & Leadership",
    },
  ];

  const socialLinks = [
    { icon: "fab fa-github", href: "#", color: "bg-primary hover:bg-blue-700" },
    { icon: "fab fa-linkedin-in", href: "#", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: "fab fa-twitter", href: "#", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: "fab fa-dribbble", href: "#", color: "bg-pink-600 hover:bg-pink-700" },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-6">Let's Connect</h3>
              <p className="text-lg text-slate-600 mb-8">
                I'm always interested in discussing cloud transformation opportunities and helping
                organizations accelerate their digital journey. Whether you need strategic guidance
                or want to explore partnership possibilities, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${info.icon} text-primary`}></i>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">{info.label}</div>
                    <div className="text-slate-600">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-secondary mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 ${social.color} text-white rounded-lg flex items-center justify-center transition-colors`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-secondary">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-secondary">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-secondary">
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-secondary">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-blue-700 text-white py-3 font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
