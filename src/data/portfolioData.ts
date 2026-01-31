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
      title: "Marketplace Web Application OLX Clone",
      description: "A scalable marketplace supporting 500+ product listings with optimized search and filtering. Features JWT authentication, media uploads, caching, and role-based access control.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZwLhSq_o9KQFzkhXg325RoDTldIQOszxjg&s",
      tags: ["React.js", "Flask", "PostgreSQL", "Cloudinary"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Coffee Shop Management System",
      description: "Full-stack café management system enabling smooth menu browsing, order placement, and cart handling. Includes CRUD operations, order tracking, and daily sales reports.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZwLhSq_o9KQFzkhXg325RoDTldIQOszxjg&s",
      tags: ["React.js", "Flask", "PostgreSQL", "REST API"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
  id: 3,
  title: "Railway Reservation System",
  description:
    "Web-based railway reservation system that allows users to search trains, check seat availability, book tickets, and manage reservations with admin control.",
  image: "data:image/jpeg;base64,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",
  tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  github: "#",
  live: "#",
  featured: true,
},

    {
      id: 4,
      title: "Real Estate Property Listing",
      description: "Property listing application with advanced search filters, interactive maps, and user authentication. Built with modern React patterns and responsive design.",
      image: "/projects/realestate.jpg",
      tags: ["React.js", "Node.js", "MongoDB", "Maps API"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 5,
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
