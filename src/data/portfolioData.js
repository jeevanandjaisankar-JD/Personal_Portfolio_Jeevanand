export const personalInfo = {
  name: "Jeevanand J",
  firstName: "Jeevanand",
  roles: [
    "Full-Stack Developer",
    "Embedded & IoT Builder",
    "Computer Science Student",
    "Problem Solver"
  ],
  bio: "Passionate Computer Science undergraduate focused on modern full-stack web development, system architecture, and embedded IoT engineering. Enthusiastic about creating sleek, accessible digital experiences and connecting smart software with real-world hardware.",
  email: "jeevanandjaisankar@gmail.com",
  github: "https://github.com/jeevanandjaisankar-JD",
  githubUsername: "jeevanandjaisankar-JD",
  linkedin: "https://www.linkedin.com/in/jeevanand-j-575676281/",
  resumeUrl: "/resume.pdf",
  status: "Open to Internships & Projects",
  location: "Tamil Nadu, India",
  education: {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Computer Science & Engineering",
    year: "Undergraduate",
    highlights: ["Data Structures & Algorithms", "Full-Stack Development", "Embedded Systems", "Database Management"]
  },
  stats: [
    { label: "GitHub Repositories", value: "10+" },
    { label: "Core Tech Stacks", value: "6+" },
    { label: "Hardware & IoT Builds", value: "5+" },
    { label: "Internship Status", value: "Ready" }
  ]
};

export const skillsData = {
  frontend: {
    title: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 90, highlight: "Component Architecture, Hooks, State" },
      { name: "JavaScript (ES6+)", level: 88, highlight: "Async/Await, DOM, Modern Syntax" },
      { name: "Tailwind CSS", level: 85, highlight: "Utility-first, Glassmorphism, Responsive" },
      { name: "HTML5 & CSS3", level: 92, highlight: "Semantic UI, Flexbox/Grid, Animations" },
      { name: "Vite", level: 85, highlight: "Build Tooling, HMR, Performance" }
    ]
  },
  backend: {
    title: "Backend & Databases",
    icon: "Server",
    skills: [
      { name: "Node.js & Express", level: 78, highlight: "RESTful APIs, Middleware, Routing" },
      { name: "Python", level: 82, highlight: "Scripting, Logic, Backend Utilities" },
      { name: "SQL & Databases", level: 75, highlight: "Relational Queries, Schema Design" },
      { name: "API Integration", level: 85, highlight: "Third-party APIs, JSON, Fetch/Axios" }
    ]
  },
  embedded: {
    title: "Embedded & Hardware",
    icon: "Cpu",
    skills: [
      { name: "Arduino Prototyping", level: 88, highlight: "Microcontroller Logic, Circuitry" },
      { name: "C / C++", level: 80, highlight: "Low-level Programming, Memory, Logic" },
      { name: "Sensors & Actuators", level: 85, highlight: "Ultrasonic, Temperature, Motor Drivers" },
      { name: "IoT & Hardware Integration", level: 82, highlight: "Hardware-to-Software data pipeline" }
    ]
  },
  tools: {
    title: "Tools & CS Core",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 88, highlight: "Version Control, Branching, CI/CD basics" },
      { name: "VS Code", level: 90, highlight: "Debugging, Extensions, Productivity" },
      { name: "Data Structures & Algorithms", level: 80, highlight: "Arrays, Trees, Graphs, Complexity" },
      { name: "Linux / Terminal", level: 75, highlight: "Shell commands, Automation, Dev environment" }
    ]
  }
};

export const featuredProjects = [
  {
    id: "cybershop",
    title: "CyberShop",
    tagline: "Modern E-Commerce Web Application",
    description: "A feature-rich e-commerce store with an interactive product catalog, responsive shopping cart, category filtering, and clean checkout flow.",
    tags: ["React", "Tailwind CSS", "JavaScript", "REST API"],
    repoName: "CyberShop",
    githubUrl: "https://github.com/jeevanandjaisankar-JD/CyberShop",
    featured: true,
    category: "Full-Stack / Web",
    stats: { badge: "Featured Web App" }
  },
  {
    id: "lost-and-found",
    title: "Lost and Found Portal",
    tagline: "Community Recovery Platform",
    description: "A community and campus web platform allowing users to report, categorize, search, and claim misplaced belongings with image uploads and claim statuses.",
    tags: ["React", "JavaScript", "Full-Stack", "CSS3"],
    repoName: "Lost-and-found",
    githubUrl: "https://github.com/jeevanandjaisankar-JD/Lost-and-found",
    featured: true,
    category: "Full-Stack / Web",
    stats: { badge: "Utility Platform" }
  },
  {
    id: "weather-api",
    title: "Weather Forecasting Hub",
    tagline: "Live Weather & Predictive Dashboard",
    description: "An intuitive meteorological dashboard leveraging OpenWeather APIs to deliver real-time temperatures, wind speeds, forecasts, and responsive UI animations.",
    tags: ["JavaScript", "Weather API", "CSS3", "Vite"],
    repoName: "Weather-API",
    githubUrl: "https://github.com/jeevanandjaisankar-JD/Weather-API",
    featured: true,
    category: "Frontend / API",
    stats: { badge: "API Integration" }
  },
  {
    id: "notes-app",
    title: "Smart Notes App",
    tagline: "Minimalist Productivity & Markdown Tool",
    description: "A distraction-free productivity app featuring instant search, tag organization, local persistence, and intuitive note editing.",
    tags: ["React", "LocalStorage", "State Management", "Tailwind"],
    repoName: "Notes-App",
    githubUrl: "https://github.com/jeevanandjaisankar-JD/Notes-App",
    featured: true,
    category: "Frontend / Web",
    stats: { badge: "Productivity" }
  },
  {
    id: "arduino-smart-systems",
    title: "Embedded IoT & Smart Automation",
    tagline: "Hardware-Software Synergy",
    description: "A collection of embedded engineering projects featuring Arduino microcontrollers, ultrasonic obstacle detection, environmental sensor arrays, and automation modules.",
    tags: ["Arduino", "C/C++", "Sensors", "IoT"],
    repoName: "Hardware-IoT",
    githubUrl: "https://github.com/jeevanandjaisankar-JD",
    featured: true,
    category: "Embedded & Hardware",
    stats: { badge: "Hardware / IoT" }
  },
  {
    id: "python-utilities",
    title: "Python Utilities Suite",
    tagline: "Algorithmic & Utility Toolset",
    description: "Suite of lightweight Python utility applications including interactive calculators, BMI health estimators, and task scheduling scripts.",
    tags: ["Python", "Algorithms", "CLI & GUI"],
    repoName: "BMI-Calculator-Python",
    githubUrl: "https://github.com/jeevanandjaisankar-JD/BMI-Calculator-Python",
    featured: false,
    category: "Python / Tools",
    stats: { badge: "Python" }
  }
];

export const interests = [
  {
    title: "Hardware-Software Integration",
    description: "Passionate about creating symbiotic systems where software algorithms control and react to physical hardware sensors and actuators.",
    icon: "Cpu"
  },
  {
    title: "Full-Stack Web Architecture",
    description: "Crafting fluid, high-performance web interfaces backed by resilient REST APIs and scalable database schemas.",
    icon: "Globe"
  },
  {
    title: "Open Source Collaboration",
    description: "Actively exploring, learning from, and contributing to developer communities and open-source tooling.",
    icon: "GitBranch"
  },
  {
    title: "Robotics & Automation",
    description: "Experimenting with autonomous systems, sensor-driven navigation, and smart automated workflows.",
    icon: "Sparkles"
  }
];

export const careerGoals = [
  {
    phase: "Immediate Goal (2026)",
    title: "Software Engineering / Web Development Internship",
    description: "Secure a challenging internship role to contribute to production codebases, collaborate in agile teams, and solve high-impact user problems."
  },
  {
    phase: "Medium-Term Milestone",
    title: "Distributed & Scalable Full-Stack Systems",
    description: "Deepen mastery of cloud architecture, containerization (Docker), CI/CD pipelines, and microservices for production-grade reliability."
  },
  {
    phase: "Long-Term Vision",
    title: "Lead Engineer in Smart IoT & Web Products",
    description: "Lead innovative engineering initiatives that bridge modern intelligent web ecosystems with next-generation smart hardware devices."
  }
];
