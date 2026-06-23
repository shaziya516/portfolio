import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Code2,
  Menu,
  X,
  MapPin,
  Phone,
  Send,
  Server,
  Wrench,
  Sparkles,
  Download,
  Briefcase,
  User,
  ChevronDown,
  Star,
  Globe,
} from "lucide-react";


import shaziya from "../assests/profile.jpeg"

import syntaxspace from "../assests/syntaxspace.png"
import linear_clone from "../assests/linear_clone.png"
import furniro from "../assests/furniro.png"

import resume from "../assests/shaziya_fullstack_17_06_2026.pdf"


export const personalInfo = {
  name: "Shaziya Malik",
  title: "Full Stack Developer",
  tagline:
    "I craft high-performance, pixel-perfect web applications with the MERN stack — turning complex ideas into elegant digital experiences.",
  bio: "Passionate Full Stack Developer with hands-on internship experience and strong expertise in React.js, Node.js, MongoDB, and modern UI/UX design. I specialize in crafting clean, responsive interfaces and building robust backend services. From wireframes to deployed products — I own the full cycle.",
  email: "shaziya01122004@gmail.com",
  phone: "+91 9456635076",
  location: "India",
  availability: "Open to Opportunities",
  social: {
    github: "https://github.com/shaziya516",
    linkedin: "https://www.linkedin.com/in/shaziya-malik-b92029360/",
  },
  resumeUrl: resume,
};

export const projects = [
  {
    id: 1,
    title: "SyntaxSpace",
    description:
      "A full-stack developer collaboration platform enabling programmers to connect, collaborate, and build projects together. Features real-time communication, live code collaboration, developer networking, and project management powered by Socket.IO and WebRTC.",
    image: syntaxspace,
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
    image: linear_clone,
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
    image: furniro,
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
// ─────────────────────────────────────────────
//  PARTICLE SYSTEM  (canvas with mouse repulsion)
// ─────────────────────────────────────────────
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mx = -9999, my = -9999;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const COLORS = ["#8b5cf6", "#6366f1", "#3b82f6", "#06b6d4", "#a78bfa", "#c4b5fd"];
    const particles = Array.from({ length: 130 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      ox: 0, oy: 0,
      vx: (Math.random() - .5) * .35,
      vy: (Math.random() - .5) * .35,
      r: Math.random() * 1.6 + .5,
      a: Math.random() * .55 + .15,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    const onMouse = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMouse);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // mouse repulsion
        const dx = p.x - mx, dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          p.x += (dx / dist) * force * 2.5;
          p.y += (dy / dist) * force * 2.5;
        }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.save();
            ctx.globalAlpha = (1 - d / 90) * .12;
            ctx.strokeStyle = "#8b5cf6";
            ctx.lineWidth = .6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      animId = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none -z-10 opacity-80" />;
}

// ─────────────────────────────────────────────
//  SHOOTING STARS
// ─────────────────────────────────────────────
function ShootingStars() {
  const stars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: `${5 + i * 11}%`,
    delay: i * 2.1,
    duration: 2.4 + Math.random() * 1.5,
    width: 80 + Math.floor(Math.random() * 100),
  }));

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={{ x: "110vw", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: 8 + s.id * 2.5,
            ease: "easeIn",
          }}
          style={{ top: s.top }}
          className="absolute"
        >
          <div
            className="h-px rounded-full"
            style={{
              width: s.width,
              background: "linear-gradient(90deg, transparent, #a78bfa, #e0d7ff)",
              boxShadow: "0 0 6px 1px rgba(167,139,250,0.6)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
//  FLOATING GEOMETRIC SHAPES
// ─────────────────────────────────────────────
function FloatingGeometry() {
  const shapes = [
    { size: 220, x: "5%", y: "15%", delay: 0, dur: 14, color: "rgba(139,92,246,0.06)", rotate: 20 },
    { size: 160, x: "85%", y: "8%", delay: 2, dur: 18, color: "rgba(59,130,246,0.07)", rotate: -15 },
    { size: 100, x: "70%", y: "50%", delay: 1, dur: 12, color: "rgba(167,139,250,0.05)", rotate: 45 },
    { size: 280, x: "15%", y: "65%", delay: 3, dur: 22, color: "rgba(99,102,241,0.05)", rotate: -30 },
    { size: 130, x: "90%", y: "75%", delay: 0.5, dur: 16, color: "rgba(6,182,212,0.06)", rotate: 60 },
    { size: 90, x: "40%", y: "85%", delay: 4, dur: 10, color: "rgba(139,92,246,0.08)", rotate: -45 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ rotate: s.rotate }}
          animate={{
            y: [0, -30, 15, 0],
            rotate: [s.rotate, s.rotate + 15, s.rotate - 10, s.rotate],
            scale: [1, 1.05, 0.97, 1],
          }}
          transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
          style={{ left: s.x, top: s.y, width: s.size, height: s.size }}
          className="absolute"
        >
          {/* Hexagon-ish ring */}
          <div
            style={{
              width: "100%",
              height: "100%",
              border: `1px solid ${s.color.replace("0.0", "0.2")}`,
              borderRadius: i % 2 === 0 ? "30% 70% 70% 30% / 30% 30% 70% 70%" : "50%",
              background: s.color,
              backdropFilter: "blur(1px)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
//  AURORA BACKGROUND
// ─────────────────────────────────────────────
function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20">
      {/* Deep base */}
      <div className="absolute inset-0 bg-[#030711]" />

      {/* Aurora blob 1 */}
      <motion.div
        animate={{
          x: [0, 80, -50, 20, 0],
          y: [0, -60, 40, -20, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/3 -left-1/4 w-[90vw] h-[90vw] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(ellipse, rgba(88,28,135,0.4) 0%, rgba(67,20,120,0.2) 40%, transparent 70%)" }}
      />

      {/* Aurora blob 2 */}
      <motion.div
        animate={{
          x: [0, -70, 60, -30, 0],
          y: [0, 80, -50, 30, 0],
          scale: [1, 0.85, 1.15, 0.95, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-1/3 -right-1/4 w-[80vw] h-[80vw] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(ellipse, rgba(30,58,138,0.35) 0%, rgba(17,24,89,0.18) 40%, transparent 70%)" }}
      />

      {/* Aurora blob 3 — center teal flash */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.12, 0.22, 0.10, 0.12],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[35vw] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(ellipse, rgba(6,182,212,1) 0%, transparent 70%)" }}
      />

      {/* Aurora blob 4 — purple sweep */}
      <motion.div
        animate={{
          rotate: [0, 8, -5, 3, 0],
          scale: [1, 1.06, 0.97, 1.03, 1],
          opacity: [0.15, 0.25, 0.12, 0.20, 0.15],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-0 left-1/4 w-[60vw] h-[50vh] blur-[80px] origin-center"
        style={{ background: "conic-gradient(from 200deg at 50% 0%, rgba(124,58,237,0.3), rgba(37,99,235,0.2), transparent, rgba(124,58,237,0.15))" }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(139,92,246,1) 1px, transparent 1px)`,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Fine grid lines */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(3,7,17,0.7) 100%)" }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
//  PARALLAX SECTION WRAPPER
// ─────────────────────────────────────────────
function ParallaxSection({ children, className = "", speed = 0.15, id = "" }: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -60}px`, `${speed * 60}px`]);

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="h-full">
        {children}
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────
//  MAGNETIC BUTTON
// ─────────────────────────────────────────────
function MagneticBtn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const onMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  }, [x, y]);

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={() => { x.set(0); y.set(0); }} className={className}>
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
//  SECTION HEADER
// ─────────────────────────────────────────────
function SectionHeader({ badge, heading, highlight }: { badge: string; heading: string; highlight: string }) {
  return (
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles size={11} className="animate-pulse" />
          {badge}
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
          {heading}{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        </h2>
        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500/50" />
          <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500/50" />
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  FADE IN WRAPPER
// ─────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "", dir = "up" }: {
  children: React.ReactNode; delay?: number; className?: string; dir?: "up" | "left" | "right" | "none";
}) {
  const init = { up: { opacity: 0, y: 40 }, left: { opacity: 0, x: -40 }, right: { opacity: 0, x: 40 }, none: { opacity: 0 } }[dir];
  return (
    <motion.div initial={init} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
//  GLOWING CARD
// ─────────────────────────────────────────────
function GlowCard({ children, className = "", accent = "#8b5cf6", hoverGlow = true }: {
  children: React.ReactNode; className?: string; accent?: string; hoverGlow?: boolean;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(180px circle at ${mouseX}px ${mouseY}px, ${accent}18, transparent 80%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      className={`relative group overflow-hidden rounded-3xl border border-white/6 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/12 ${className}`}
      whileHover={hoverGlow ? { scale: 1.015, translateY: -5 } : {}}
      transition={{ duration: 0.25 }}
    >
      {hoverGlow && (
        <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background }} />
      )}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
//  NAV
// ─────────────────────────────────────────────
const NAV = [
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#projects", icon: Globe },
  { label: "Contact", href: "#contact", icon: Mail },
];

// ═════════════════════════════════════════════
//  MAIN APP
// ═════════════════════════════════════════════
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -160]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.07]);
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const bgY3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  useEffect(() => { document.documentElement.classList.add("dark"); }, []);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 30);
      const pos = window.scrollY + 220;
      for (const l of NAV) {
        const el = document.getElementById(l.href.substring(1));
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) { setActiveSection(el.id); break; }
      }
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden selection:bg-violet-600 selection:text-white">

      {/* ─── Cursor glow ─── */}
      <motion.div
        className="fixed pointer-events-none z-50 hidden lg:block"
        animate={{ x: cursorPos.x - 250, y: cursorPos.y - 250 }}
        transition={{ type: "spring", stiffness: 60, damping: 22 }}
        style={{
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)"
        }}
      />

      {/* ─── Layered Aurora (parallax) ─── */}
      <AuroraBackground />

      {/* ─── Parallax aurora layers ─── */}
      <motion.div style={{ y: bgY1 }} className="fixed inset-0 pointer-events-none -z-10">
        <motion.div
          animate={{ scale: [1, 1.08, 0.96, 1], opacity: [0.18, 0.30, 0.14, 0.18] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[65vw] h-[65vw] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.6) 0%, transparent 65%)" }}
        />
      </motion.div>
      <motion.div style={{ y: bgY2 }} className="fixed inset-0 pointer-events-none -z-10">
        <motion.div
          animate={{ scale: [1, 0.93, 1.06, 1], opacity: [0.14, 0.24, 0.10, 0.14] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[30%] right-[-10%] w-[55vw] h-[55vw] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.5) 0%, transparent 65%)" }}
        />
      </motion.div>
      <motion.div style={{ y: bgY3 }} className="fixed inset-0 pointer-events-none -z-10">
        <motion.div
          animate={{ scale: [1, 1.05, 0.98, 1], opacity: [0.08, 0.16, 0.06, 0.08] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 9 }}
          className="absolute bottom-[10%] left-[20%] w-[50vw] h-[40vw] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 65%)" }}
        />
      </motion.div>

      {/* ─── Particle field ─── */}
      <ParticleField />

      {/* ─── Shooting stars ─── */}
      <ShootingStars />

      {/* ─── Floating geometry ─── */}
      <FloatingGeometry />

      {/* ══════════════ NAVBAR ══════════════ */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#030711]/85 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/30" : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5 font-black text-xl tracking-tight group">
            <motion.div
              animate={{ boxShadow: ["0 0 12px rgba(139,92,246,0.4)", "0 0 24px rgba(139,92,246,0.7)", "0 0 12px rgba(139,92,246,0.4)"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white font-black text-sm"
            >S</motion.div>
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Shaziya</span>
            <span className="text-white/60">Malik</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${activeSection === l.href.substring(1) ? "text-white" : "text-white/45 hover:text-white/85"}`}>
                {activeSection === l.href.substring(1) && (
                  <motion.span layoutId="pill"
                    className="absolute inset-0 bg-white/8 border border-white/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={personalInfo.resumeUrl}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/50 transition-all hover:scale-[1.04]">
              <Download size={14} /> Resume
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 rounded-xl border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#030711]/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden">
              <div className="p-4 flex flex-col gap-1">
                {NAV.map((l) => (
                  <a key={l.href} href={l.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeSection === l.href.substring(1)
                      ? "bg-violet-500/15 text-violet-300 border border-violet-500/20"
                      : "text-white/45 hover:bg-white/5 hover:text-white/85"}`}
                    onClick={() => setMenuOpen(false)}>
                    <l.icon size={15} /> {l.label}
                  </a>
                ))}
                <a href={personalInfo.resumeUrl} download="shaziya_fullstack_17_06_2026.pdf"
                  className="flex items-center justify-center gap-2 mt-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-4 py-3 rounded-xl text-sm font-bold">
                  <Download size={14} /> Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ══════════════ HERO ══════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">

        {/* Hero inner parallax orbs (faster) */}
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 0.4], [0, -80]) }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full pointer-events-none"
          style2={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)" }}>
          <motion.div animate={{ scale: [1, 1.15, 0.9, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full"
            style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)" }} />
        </motion.div>
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 0.4], [0, -50]) }}
          className="absolute bottom-1/3 right-1/4 w-[35vw] h-[35vw] rounded-full pointer-events-none">
          <motion.div animate={{ scale: [1, 0.9, 1.1, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="w-full h-full rounded-full"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)" }} />
        </motion.div>

        {/* Content */}
        <motion.div style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="max-w-5xl mx-auto text-center z-10 w-full">

          {/* Badge */}
          <motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/8 backdrop-blur-sm text-violet-300 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {personalInfo.availability}
          </motion.div>

          {/* Name */}
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="block text-white/85 mb-2">Hi, I'm</span>
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="block bg-gradient-to-r from-violet-400 via-fuchsia-300 via-blue-400 to-violet-400 bg-clip-text text-transparent"
              style={{ backgroundSize: "300% 100%", filter: "drop-shadow(0 0 50px rgba(139,92,246,0.45))" }}>
              Shaziya Malik
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}>
            <h2 className="text-xl sm:text-2xl font-semibold text-white/55 mb-4">{personalInfo.title}</h2>
            <p className="text-base sm:text-lg text-white/35 max-w-2xl mx-auto leading-relaxed mb-10">{personalInfo.tagline}</p>
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <MagneticBtn>
              <a href="#projects"
                className="group relative flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold text-sm shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/60 transition-all hover:scale-[1.04] overflow-hidden">
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">View Projects</span>
                <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticBtn>
            <MagneticBtn>
              <a href="#contact"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm text-white/75 hover:text-white font-bold text-sm hover:bg-white/8 hover:border-white/20 transition-all hover:scale-[1.03]">
                Let's Talk
              </a>
            </MagneticBtn>
          </motion.div>

          {/* Socials */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.65 }}
            className="flex gap-4 justify-center items-center">
            {[
              { href: personalInfo.social.github, icon: Github, label: "GitHub" },
              { href: personalInfo.social.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" title={label}
                whileHover={{ scale: 1.15, y: -3 }}
                className="p-3.5 rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm text-white/40 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-colors shadow-sm">
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating tech badges */}
        {[
          { label: "</> React", color: "#61dafb", x: "10%", y: "28%", d: 0.7 },
          { label: "⚡ Node.js", color: "#8cc84b", x: "80%", y: "22%", d: 0.9 },
          { label: "🍃 MongoDB", color: "#4db33d", x: "7%", y: "62%", d: 1.1 },
          { label: "⚙️ Express", color: "#fff", x: "76%", y: "66%", d: 0.85 },
          { label: "🎨 Figma", color: "#f24e1e", x: "83%", y: "44%", d: 1.0 },
          { label: "💻 Next.js", color: "#fff", x: "3%", y: "44%", d: 1.3 },
        ].map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: b.d }}
            style={{ left: b.x, top: b.y }}
            className="absolute hidden xl:block">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className="px-3.5 py-2 rounded-xl border border-white/8 bg-white/4 backdrop-blur-md text-xs font-bold shadow-xl">
              <span style={{ color: b.color }}>{b.label}</span>
            </motion.div>
          </motion.div>
        ))}

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-xs">
          <span className="uppercase tracking-widest text-[10px]">scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════ ABOUT ══════════════ */}
      <section id="about" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader badge="About Me" heading="Who" highlight="I Am" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile photo */}
            <FadeIn dir="left">
              <div className="flex justify-center">
                <div className="relative">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-5 rounded-full opacity-70"
                    style={{ background: "conic-gradient(from 0deg, #7c3aed, #2563eb, #06b6d4, transparent, #7c3aed)" }} />
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-8 rounded-full opacity-25"
                    style={{ background: "conic-gradient(from 180deg, #a855f7, transparent, #3b82f6, transparent, #a855f7)" }} />
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-violet-500/30 shadow-2xl shadow-violet-500/25">
                    <img src={shaziya} alt="Shaziya Malik" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.15), transparent 60%)" }} />
                  </div>
                  <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-bold shadow-xl shadow-violet-500/35 border border-violet-400/20">
                    <div className="flex items-center gap-2"><Star size={12} className="fill-yellow-300 text-yellow-300" /> Full Stack Dev</div>
                  </motion.div>
                  <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -left-4 px-3 py-2 rounded-2xl bg-[#0a0a18]/80 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Open to Work
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn dir="right">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-white/65">{personalInfo.bio}</p>
                <p className="text-base leading-relaxed text-white/45">
                  I enjoy developing web pages that look professional and feel premium. My goal is to build clean, well-tested systems that provide outstanding user experiences and scale smoothly.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {[
                    { icon: MapPin, text: personalInfo.location, color: "text-violet-400" },
                    { icon: Mail, text: personalInfo.email, color: "text-blue-400" },
                    { icon: Phone, text: personalInfo.phone, color: "text-emerald-400" },
                  ].map(({ icon: Icon, text, color }) => (
                    <div key={text} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/8 bg-white/3 text-sm text-white/55">
                      <Icon size={14} className={color} /> {text}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {stats.map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                      className="p-4 rounded-2xl border border-white/6 bg-white/3 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all group cursor-default">
                      <div className="text-2xl font-black bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">{s.value}</div>
                      <div className="text-xs text-white/35 mt-1 font-medium">{s.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════ EXPERIENCE ══════════════ */}
      <section id="experience" className="py-32 relative">
        {/* Section-level parallax orb */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] pointer-events-none rounded-full blur-[130px] -z-10"
          style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
        />

        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader badge="Experience" heading="Work" highlight="History" />

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <GlowCard accent={exp.accent} className="p-8">
                  {/* Gradient top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg text-white`}>
                        <Briefcase size={20} />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all"
                            style={{ backgroundImage: `linear-gradient(to right, ${exp.accent}, #60a5fa)` }}>
                            {exp.role}
                          </h3>
                          <p className="text-sm font-bold text-white/50 mt-1">{exp.company}</p>
                          <p className="text-xs text-violet-400 font-semibold mt-1">Project: {exp.project}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xs font-bold text-white/35 uppercase tracking-widest whitespace-nowrap">{exp.period}</p>
                          <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/8 text-xs text-white/45">{exp.type}</span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-white/45 mb-5">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((sk) => (
                          <motion.span key={sk} whileHover={{ scale: 1.08 }}
                            className="px-3 py-1.5 rounded-lg text-xs font-bold border border-white/6 bg-white/3 text-white/45 hover:text-white/80 hover:border-violet-500/30 hover:bg-violet-500/8 transition-all cursor-default">
                            {sk}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SKILLS ══════════════ */}
      <section id="skills" className="py-32 relative">
        <motion.div
          animate={{ rotate: [0, 360] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full opacity-[0.025] pointer-events-none -z-10"
          style={{ border: "1px solid rgba(139,92,246,1)" }}
        />
        <motion.div
          animate={{ rotate: [360, 0] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full opacity-[0.02] pointer-events-none -z-10"
          style={{ border: "1px solid rgba(59,130,246,1)" }}
        />

        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader badge="Tech Stack" heading="Skills &" highlight="Technologies" />

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <FadeIn key={cat.title} delay={idx * 0.12}>
                <GlowCard className="p-7 h-full">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 shadow-lg shadow-violet-500/20 text-white">
                      {cat.icon === "frontend" ? <Code2 size={20} /> : cat.icon === "backend" ? <Server size={20} /> : <Wrench size={20} />}
                    </div>
                    <h3 className="font-black text-lg text-white">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, si) => (
                      <motion.span key={skill}
                        initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }} whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ delay: idx * 0.04 + si * 0.04, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                        className="px-3 py-1.5 rounded-xl border border-white/6 bg-white/4 text-xs font-bold text-white/55 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 hover:shadow-[0_0_12px_rgba(139,92,246,0.25)] transition-all cursor-default">
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlowCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PROJECTS ══════════════ */}
      <section id="projects" className="py-32 relative">
        <motion.div
          animate={{ scale: [1, 1.1, 0.95, 1], opacity: [0.04, 0.09, 0.03, 0.04] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,1), transparent)" }}
        />

        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader badge="Projects" heading="Featured" highlight="Work" />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">
            {projects.map((p, idx) => (
              <FadeIn key={p.id} delay={idx * 0.12}>
                <motion.div whileHover={{ scale: 1.025, translateY: -10 }} transition={{ duration: 0.3 }}
                  className="group relative flex flex-col h-full rounded-3xl border border-white/6 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-white/14 transition-all duration-300">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-[0.04] transition-opacity pointer-events-none`} />

                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video bg-[#08080f]">
                    <img src={p.image} alt={p.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.07] transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030711]/80 via-transparent to-transparent" />
                    {/* Hover overlay with just Live Demo link (no GitHub) */}
                    <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r ${p.color} text-white text-sm font-bold shadow-lg hover:scale-105 transition-transform`}
                        onClick={(e) => e.stopPropagation()}>
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg border border-white/6 bg-white/4 text-[10px] font-black text-white/45 uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all"
                      style={{ backgroundImage: `linear-gradient(to right, ${p.accent}, #60a5fa)` }}>
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/40 flex-1 mb-5">{p.description}</p>
                    <div className="flex items-center pt-4 border-t border-white/5">
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-bold text-white/45 hover:text-white transition-colors">
                        <Globe size={13} /> View Project
                        <ExternalLink size={11} className="opacity-60" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CONTACT ══════════════ */}
      <section id="contact" className="py-32 relative">
        <motion.div
          animate={{ scale: [1, 1.08, 0.96, 1], opacity: [0.06, 0.14, 0.05, 0.06] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none -z-10 rounded-full mx-auto blur-[150px] w-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(124,58,237,1) 0%, transparent 70%)" }}
        />

        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader badge="Contact" heading="Get In" highlight="Touch" />

          <FadeIn>
            <GlowCard className="p-8 sm:p-12" hoverGlow={false}>
              <div className="absolute top-0 left-0 w-40 h-40 bg-violet-600/8 rounded-br-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-600/8 rounded-tl-full blur-3xl" />

              <div className="text-center mb-10 relative">
                <p className="text-white/45 max-w-md mx-auto text-sm leading-relaxed">
                  Have a project in mind or want to collaborate? Drop a message — I respond quickly!
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-sm text-white/45 hover:text-violet-400 transition-colors">
                    <Mail size={14} className="text-violet-400" />{personalInfo.email}
                  </a>
                  <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-sm text-white/45 hover:text-blue-400 transition-colors">
                    <Phone size={14} className="text-blue-400" />{personalInfo.phone}
                  </a>
                </div>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5 relative">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                    { id: "email", label: "Email", type: "email", placeholder: "john@example.com" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-xs font-bold uppercase tracking-widest text-white/25 mb-2.5">{f.label}</label>
                      <input type={f.type} id={f.id} required placeholder={f.placeholder}
                        className="w-full px-4 py-3.5 bg-white/4 border border-white/6 rounded-2xl text-white placeholder:text-white/18 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/40 transition-all text-sm" />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-white/25 mb-2.5">Message</label>
                  <textarea id="message" required rows={5} placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3.5 bg-white/4 border border-white/6 rounded-2xl text-white placeholder:text-white/18 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/40 transition-all text-sm resize-none" />
                </div>
                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="group flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-violet-500/20 hover:shadow-violet-500/45 transition-all">
                    <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Send Message
                  </motion.button>
                  <div className="flex gap-3">
                    <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-white/6 bg-white/4 text-white/35 hover:text-white hover:border-violet-500/30 hover:bg-violet-500/10 transition-all">
                      <Github size={17} />
                    </a>
                    <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-white/6 bg-white/4 text-white/35 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all">
                      <Linkedin size={17} />
                    </a>
                  </div>
                </div>
              </form>
            </GlowCard>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="border-t border-white/5 py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#030711] to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative">
          <div className="flex items-center gap-2.5">
            <motion.div animate={{ boxShadow: ["0 0 8px rgba(139,92,246,0.4)", "0 0 18px rgba(139,92,246,0.7)", "0 0 8px rgba(139,92,246,0.4)"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white font-black text-xs">S</motion.div>
            <span className="text-sm text-white/35">
              © {new Date().getFullYear()} <span className="text-white/55 font-semibold">Shaziya Malik</span>. All rights reserved.
            </span>
          </div>
          <div className="flex gap-5">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/25 hover:text-white/65 transition-colors">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}