export const personalInfo = {
  name: "Shaziya Malik",
  title: "Full Stack Developer",
  tagline:
    "I craft high-performance, pixel-perfect web applications with the MERN stack — turning complex ideas into elegant digital experiences.",
  bio: "Passionate Full Stack Developer with hands-on internship experience and strong expertise in React.js, Node.js, MongoDB, and modern UI/UX design. I specialize in crafting clean, responsive interfaces and building robust backend services. From wireframes to deployed products — I own the full cycle.",
  email: "shaziyamalik8918@gmail.com",
  phone: "+91 6005387038",
  location: "India",
  availability: "Open to Opportunities",
  social: {
    github: "https://github.com/shaziya516",
    linkedin: "https://www.linkedin.com/in/shaziya-malik-b92029360/",
  },
  resumeUrl: "/src/assests/shaziya_fullstack_17_06_2026.pdf",
};

export const projects = [
  {
    id: 1,
    title: "SyntaxSpace",
    description:
      "A full-stack developer collaboration platform enabling programmers to connect, collaborate, and build projects together. Features real-time communication, live code collaboration, developer networking, and project management powered by Socket.IO and WebRTC.",
    image: "/src/assests/syntaxspace.png",
    tags: ["React.js", "Node.js", "MongoDB", "Socket.IO", "WebRTC"],
    liveUrl: "https://synta-xspace.vercel.app/login",
    githubUrl: "https://github.com/shaziyamalik",
    color: "from-violet-500 to-purple-600",
    accent: "#8b5cf6",
  },
  {
    id: 2,
    title: "Linear Clone",
    description:
      "A modern project management and issue-tracking application inspired by the Linear platform. Offers a clean, intuitive interface for managing tasks, tracking progress, and organizing workflows with a premium user experience.",
    image: "/src/assests/linear_clone.png",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://linear-clone-psi.vercel.app/",
    githubUrl: "https://github.com/shaziyamalik",
    color: "from-blue-500 to-cyan-500",
    accent: "#3b82f6",
  },
  {
    id: 3,
    title: "Furniro Furniture Store",
    description:
      "A responsive furniture e-commerce website providing a seamless online shopping experience. Features product categorization, search functionality, and modern UI components built with React.js and contemporary frontend technologies.",
    image: "/src/assests/furniro.png",
    tags: ["React.js", "CSS3", "Responsive Design", "E-Commerce"],
    liveUrl: "https://furniro-tau-livid.vercel.app/",
    githubUrl: "https://github.com/shaziyamalik",
    color: "from-amber-500 to-orange-500",
    accent: "#f59e0b",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: "frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    title: "Backend & Database",
    icon: "backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "Socket.IO",
      "WebRTC",
      "JWT Auth",
      "SQL",
    ],
  },
  {
    title: "Tools & Design",
    icon: "tools",
    skills: [
      "Git & GitHub",
      "Figma",
      "Postman",
      "VS Code",
      "Vercel",
      "Canva",
      "npm / pnpm",
    ],
  },
];

export const experience = [
  {
    period: "Apr 2024 – Sep 2024",
    role: "Frontend Developer Intern",
    company: "Techhub Technology",
    type: "Remote",
    project: "KrishiNavachar.in",
    description:
      "Spearheaded the frontend development for the KrishiNavachar platform, taking ownership of both UI/UX design and code implementation. Designed intuitive user interfaces and translated them into highly responsive web pages using HTML, CSS, and JavaScript. Collaborated closely with the core team to ensure pixel-perfect rendering, optimizing the website structure for cross-browser compatibility and mobile responsiveness.",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX", "Responsive Design"],
    color: "from-emerald-500 to-teal-500",
    accent: "#10b981",
  },
  {
    period: "Jul 2025 – Aug 2025",
    role: "UI Designer Intern",
    company: "Techiguru (Partner of Techhub Technology)",
    type: "Hybrid",
    project: "Techiguru.in",
    description:
      "Contributed to the full-cycle development of the Techiguru educational platform. Created high-fidelity wireframes and modern UI layouts using Figma to establish a consistent design language. Transitioned into development by implementing designs using React.js and TypeScript, building reusable and modular components that significantly improved the application's maintainability and scalability.",
    skills: ["Figma", "React.js", "TypeScript", "UI Design", "Component Architecture"],
    color: "from-blue-500 to-indigo-600",
    accent: "#6366f1",
  },
  {
    period: "Aug 2025",
    role: "IoT Virtual Intern",
    company: "IBM Developer Skills Network",
    type: "Virtual",
    project: "Smart Home Automation",
    description:
      "Successfully completed the Project-Based Experiential Learning (PBEL) program focused on the Internet of Things (IoT). Designed and simulated a comprehensive Smart Home Automation system, applying practical logic for device interconnectivity. Leveraged the IBM Skills Network ecosystem to gain hands-on experience with IoT concepts and architecture.",
    skills: ["IoT", "IBM Skills Network", "System Design", "Smart Automation"],
    color: "from-purple-500 to-pink-600",
    accent: "#a855f7",
  },
];

export const timeline = [
  {
    year: "2026",
    role: "Full Stack Developer",
    company: "Personal Projects & Open Source",
    description:
      "Building production-grade full-stack applications with real-time features using MERN stack, Socket.IO, and WebRTC.",
  },
  {
    year: "2025",
    role: "UI Designer Intern",
    company: "Techiguru (Partner of Techhub Technology)",
    description:
      "Built high-fidelity Figma designs and implemented them with React.js + TypeScript for an educational platform.",
  },
  {
    year: "2024",
    role: "Frontend Developer Intern",
    company: "Techhub Technology",
    description:
      "Led frontend development for KrishiNavachar.in with pixel-perfect, cross-browser responsive UI.",
  },
];

export const stats = [
  { value: "3+", label: "Projects Shipped" },
  { value: "3", label: "Internships" },
  { value: "MERN", label: "Core Stack" },
  { value: "2+", label: "Years Learning" },
];