import { Building2, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ExperienceSection = () => {
  const { experience } = portfolioData;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and contributions
            </p>
          </div>

          {/* Experience cards */}
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className="glass-card p-6 md:p-8 relative"
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-purple-500 to-pink-500 rounded-l-2xl" />

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Building2 size={16} className="text-primary" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium whitespace-nowrap">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <div
                      key={respIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-sm leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
