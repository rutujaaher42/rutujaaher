import { Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-heading font-bold gradient-text"
          >
            {portfolioData.personal.name.split(" ")[0]}
            <span className="text-foreground">.</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} {portfolioData.personal.name}. Made with{" "}
            <Heart size={14} className="text-primary fill-primary" /> in India
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
