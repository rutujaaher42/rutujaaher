export const portfolioData = {
  personal: {
    name: "Rutuja Aher",
    title: "Full-Stack Developer",
    tagline: "I build scalable web apps using React, Python, Flask, and modern technologies.",
    email: "rutujaaher42@gmail.com",
    phone: "+917498111638",
    location: "Nashik, India",
    linkedin: "https://linkedin.com/in/rutuja-aher",
    github: "https://github.com/rutujaaher",
    portfolio: "https://digitalcraftingzone.com",
  },
  
  about: {
    bio: `Enthusiastic Computer Science graduate with hands-on experience in full-stack development. 
    I specialize in building responsive, user-friendly web applications using React.js, Python, and Flask. 
    With strong problem-solving skills and a passion for clean code, I transform complex requirements 
    into elegant, scalable solutions.`,
    highlights: [
      "Full-Stack Development",
      "REST API Design",
      "React.js & Flask",
      "Problem Solving",
    ],
  },

  skills: {
    languages: [
      { name: "JavaScript", icon: "javascript" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
    ],
    frameworks: [
      { name: "React.js", icon: "react" },
      { name: "Flask", icon: "flask" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
    databases: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
    tools: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
      { name: "IntelliJ", icon: "intellij" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Marketplace Web Application",
      description: "A scalable marketplace supporting 500+ product listings with optimized search and filtering. Features JWT authentication, media uploads, caching, and role-based access control.",
      image: "/projects/marketplace.jpg",
      tags: ["React.js", "Flask", "PostgreSQL", "Cloudinary"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Coffee Shop Management System",
      description: "Full-stack café management system enabling smooth menu browsing, order placement, and cart handling. Includes CRUD operations, order tracking, and daily sales reports.",
      image: "/projects/coffeeshop.jpg",
      tags: ["React.js", "Flask", "PostgreSQL", "REST API"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Real Estate Property Listing",
      description: "Property listing application with advanced search filters, interactive maps, and user authentication. Built with modern React patterns and responsive design.",
      image: "/projects/realestate.jpg",
      tags: ["React.js", "Node.js", "MongoDB", "Maps API"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Flask REST APIs Collection",
      description: "Collection of production-ready REST APIs built with Flask and FastAPI. Includes authentication, CRUD operations, and comprehensive API documentation.",
      image: "/projects/api.jpg",
      tags: ["Flask", "FastAPI", "PostgreSQL", "Postman"],
      github: "#",
      live: "#",
      featured: false,
    },
  ],

  experience: [
    {
      id: 1,
      company: "Nexonica Systems Pvt. Ltd.",
      role: "Full-Stack Developer Intern",
      location: "Nashik",
      duration: "June 2025 – December 2025",
      responsibilities: [
        "Developed responsive web pages using HTML, CSS, JavaScript with clean UI",
        "Built reusable React.js components improving frontend performance",
        "Developed backend REST APIs using Python Flask for authentication and CRUD operations",
        "Integrated React.js frontend with Flask backend for complete full-stack workflow",
        "Used Postman for API testing, debugging, and validating request/response flow",
        "Fixed UI bugs and API issues while optimizing application performance",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Computer Science (MCS)",
      institution: "K.K. Wagh Arts, Commerce and Science College",
      status: "Pursuing",
    },
    {
      degree: "Bachelor of Computer Science (B.Sc. CS)",
      institution: "K.K. Wagh Arts, Commerce and Science College",
      status: "CGPA: 7.73",
    },
  ],

  certifications: [
    "Python Programming Certification",
    "JavaScript & C Programming (Cursa)",
    "Web Development Essentials",
  ],
};
