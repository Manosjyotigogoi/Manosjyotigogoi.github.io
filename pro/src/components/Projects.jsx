import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'STAI - Study Assistant AI',
    subtitle: 'Code-A-Hunt Hackathon Project',
    description:
      'An AI-powered study platform with Subject Notebooks & AI summaries, automated MCQ generation, Growth Analysis, Smart Timetable with ML scheduling, and Session Tracking.',
    tech: ['React 18', 'Vite 5', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'JWT', 'Llama-3.1-8B', 'Flask', 'scikit-learn'],
    accent: 'var(--color-pink)',
    accentBg: 'var(--color-pink-light)',
    solidBg: '#fdf2f5',
    number: '01',
    label: 'AI · HACKATHON',
  },
  {
    title: 'DormIX - Hostel Management',
    subtitle: 'Full-Stack Application',
    description:
      'Comprehensive hostel booking & inventory system. Students search by city/budget/duration; owners track occupancy and revenue via a polished dashboard with Glassmorphism UI.',
    tech: ['React', 'Node.js', 'Express.js', 'REST API', 'Glassmorphism UI'],
    accent: 'var(--color-sky)',
    accentBg: 'var(--color-sky-light)',
    solidBg: '#f0f7fb',
    number: '02',
    label: 'FULL-STACK',
  },
];

function RhombusCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.2 }}
    >
      {/* Outer rhombus frame — decorative */}
      <div className="relative" style={{ padding: '3px' }}>
        {/* Card with angled cut corners to evoke rhombus aesthetic */}
        <div
          className="relative overflow-hidden transition-all duration-400 group-hover:shadow-xl"
          style={{
            background: project.solidBg,
            border: `1.5px solid ${project.accent}30`,
            clipPath: 'polygon(28px 0%, 100% 0%, calc(100% - 28px) 100%, 0% 100%)',
            padding: '40px 52px',
            minHeight: '340px',
          }}
        >
          {/* Top accent stripe */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, ${project.accent}, transparent 70%)` }}
          />

          {/* Rhombus badge — upper right */}
          <div
            className="absolute top-6 right-8 flex items-center justify-center font-black text-sm"
            style={{
              width: '48px', height: '48px',
              background: project.accentBg,
              color: project.accent,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            {index + 1}
          </div>

          {/* Label */}
          <div
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-sm"
            style={{ color: project.accent, background: project.accentBg, border: `1px solid ${project.accent}25` }}
          >
            <span>{project.number}</span>
            <span style={{ opacity: 0.4 }}>—</span>
            <span>{project.label}</span>
          </div>

          {/* Title */}
          <h3
            className="font-black mb-1 leading-tight"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-text)' }}
          >
            {project.title}
          </h3>
          <p className="text-sm mb-5" style={{ color: 'var(--color-text-subtle)' }}>{project.subtitle}</p>

          {/* Description */}
          <p className="leading-relaxed mb-7 text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.75' }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  borderRadius: '3px',
                  border: `1px solid ${project.accent}35`,
                  color: project.accent,
                  background: project.accentBg,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-2 pt-4" style={{ borderTop: `1px solid ${project.accent}20` }}>
            <span className="text-xs font-bold tracking-wide" style={{ color: project.accent }}>
              View Project
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: project.accent }}>
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Hover glow overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `linear-gradient(135deg, ${project.accent}06, transparent 60%)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="section-inner">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Featured <span className="text-gradient-neon">Projects</span>
          </h2>
          <div className="section-divider" style={{ background: 'linear-gradient(90deg, var(--color-neon), var(--color-sky))' }} />
          <p className="mt-6 max-w-xl mx-auto text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Full-stack applications built with modern technologies, designed to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <RhombusCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
