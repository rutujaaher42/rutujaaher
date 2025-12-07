import { portfolioData } from "@/data/portfolioData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillIcons: Record<string, string> = {
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  intellij: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
};

interface SkillCardProps {
  name: string;
  icon: string;
  delay: number;
}

const SkillCard = ({ name, icon, delay }: SkillCardProps) => (
  <div
    className="glass-card glass-card-hover p-4 flex flex-col items-center justify-center gap-3 group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
      <img
        src={skillIcons[icon] || skillIcons.javascript}
        alt={name}
        className="w-10 h-10 object-contain"
      />
    </div>
    <span className="text-sm font-medium text-foreground/80 text-center">{name}</span>
  </div>
);

export const SkillsSection = () => {
  const { skills } = portfolioData;
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    { title: "Languages", items: skills.languages },
    { title: "Frameworks", items: skills.frameworks },
    { title: "Databases", items: skills.databases },
    { title: "Tools", items: skills.tools },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Skills & Tools
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </div>

          {/* Skills grid */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title}>
                <h3 className="text-lg font-heading font-semibold mb-6 text-center text-muted-foreground">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                  {category.items.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      delay={(categoryIndex * 100) + (index * 50)}
                    />
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
