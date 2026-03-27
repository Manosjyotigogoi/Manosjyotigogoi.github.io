import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'STAI - Study Assistant AI',
    subtitle: 'Code-A-Hunt Hackathon Project',
    description:
      'An AI-powered study platform with a minimalist, high-contrast UI featuring Subject Notebooks with AI summaries, an AI Quiz Engine for automated MCQ generation, Growth Analysis for performance tracking, Smart Timetable with ML-based scheduling, and Session Tracking.',
    tech: [
      'React 18', 'Vite 5', 'Tailwind CSS', 'Framer Motion', 'Node.js',
      'Express.js', 'JWT', 'Llama-3.1-8B', 'Flask', 'scikit-learn',
    ],
    color: 'var(--color-pink)',
    glowColor: 'var(--color-pink-glow)',
    number: '01',
    label: 'AI / HACKATHON',
  },
  {
    title: 'DormIX - Hostel Management',
    subtitle: 'Full-Stack Application',
    description:
      'A comprehensive system for managing hostel bookings and inventory. Features a student interface for real-time search by city, budget, and duration, plus a robust Owner Dashboard for tracking occupancy and revenue with Glassmorphism UI components.',
    tech: [
      'React', 'Node.js', 'Express.js', 'REST API', 'Glassmorphism UI',
    ],
    color: 'var(--color-sky)',
    glowColor: 'var(--color-sky-glow)',
    number: '02',
    label: 'FULL-STACK',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -6 }}
    >
      {/* Gradient border glow on hover */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
      />

      <div
        className="relative glass rounded-2xl overflow-hidden"
        style={{ border: `1px solid ${project.color}20` }}
      >
        {/* Top accent bar */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />

        <div className="p-7">
          {/* Header row */}
          <div className="flex items-start justify-between mb-5">
            <div>
              {/* Project number badge */}
              <div
                className="inline-block text-xs font-black tracking-widest mb-2 px-2 py-0.5"
                style={{
                  color: project.color,
                  background: project.color + '15',
                  border: `1px solid ${project.color}30`,
                  borderRadius: '3px',
                }}
              >
                {project.number} — {project.label}
              </div>
              <h3
                className="text-xl font-bold font-heading leading-tight"
                style={{ color: project.color }}
              >
                {project.title}
              </h3>
              <p className="text-gray-light text-sm mt-0.5">{project.subtitle}</p>
            </div>

            {/* Circle number accent */}
            <div
              className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full text-xl font-black"
              style={{
                background: project.color + '10',
                border: `1px solid ${project.color}30`,
                color: project.color,
              }}
            >
              {index + 1}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-light leading-relaxed mb-6 text-sm">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 text-xs font-medium transition-all duration-300 hover:scale-105"
                style={{
                  borderRadius: '3px',
                  border: `1px solid ${project.color}40`,
                  color: project.color,
                  background: project.color + '08',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Bottom link row */}
          <div className="flex items-center gap-2 pt-4"
            style={{ borderTop: `1px solid ${project.color}15` }}>
            <span
              className="text-xs font-semibold tracking-wide"
              style={{ color: project.color }}
            >
              View Project
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: project.color }}>
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-pink opacity-5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-sky opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-inner">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Featured <span className="text-gradient-neon">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-neon to-sky mx-auto rounded-full" />
          <p className="text-gray-light mt-6 max-w-xl mx-auto">
            Full-stack applications built with modern technologies, designed to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
