import { Code2, Sparkles, Zap, Coffee } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: Code2, label: "Clean Code", description: "Writing maintainable, scalable solutions" },
  { icon: Zap, label: "Fast Learner", description: "Adapting to new technologies quickly" },
  { icon: Sparkles, label: "Creative", description: "Building unique user experiences" },
  { icon: Coffee, label: "Dedicated", description: "Passionate about quality work" },
];

export const AboutSection = () => {
  const { about, education, certifications } = portfolioData;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--gradient-hero)] opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Passionate About <span className="gradient-text">Building</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Turning ideas into reality through code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Bio */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {about.bio}
              </p>
              
              {/* Highlight cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <div
                    key={item.label}
                    className="glass-card glass-card-hover p-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <item.icon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-heading font-semibold mb-1">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Education & Certifications */}
            <div className="space-y-8">
              {/* Education */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <span className="text-xs text-primary font-medium">{edu.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
