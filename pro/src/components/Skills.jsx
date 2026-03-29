import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const categories = [
  {
    title: 'Frontend',
    color: 'var(--color-pink)',
    accentBg: 'var(--color-pink-light)',
    solidBg: '#fdf2f5',
    icon: '▣',
    skills: [
      { name: 'React 18', level: 90 },
      { name: 'Vite 5', level: 85 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Lucide React', level: 75 },
    ],
  },
  {
    title: 'Backend',
    color: 'var(--color-sky)',
    accentBg: 'var(--color-sky-light)',
    solidBg: '#f0f7fb',
    icon: '◈',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Auth', level: 82 },
      { name: 'bcryptjs', level: 78 },
    ],
  },
  {
    title: 'AI / ML',
    color: 'var(--color-neon)',
    accentBg: 'var(--color-neon-light)',
    solidBg: '#f3f7ed',
    icon: '◆',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Flask', level: 78 },
      { name: 'scikit-learn', level: 80 },
      { name: 'SVM / MLP', level: 75 },
      { name: 'LLM Integration', level: 72 },
    ],
  },
  {
    title: 'Tools',
    color: 'var(--color-amber)',
    accentBg: 'var(--color-amber-light)',
    solidBg: '#fdf8f0',
    icon: '◉',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'JSON Databases', level: 80 },
      { name: 'Glassmorphism UI', level: 85 },
      { name: 'Page Visibility API', level: 70 },
      { name: 'Heartbeat Systems', level: 72 },
    ],
  },
];

function SkillCard({ category, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <motion.div
      ref={ref}
      className="relative group cursor-default"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setActiveSkill(null); }}
    >
      <motion.div
        className="card h-full"
        animate={hovered ? { y: -6, boxShadow: `0 16px 40px ${category.color}20, 0 4px 12px rgba(0,0,0,0.08)` } : { y: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          borderRadius: '16px',
          borderTop: `3px solid ${category.color}`,
          background: hovered ? category.solidBg : 'var(--color-bg-card)',
          overflow: 'hidden',
        }}
      >
        {/* Animated top bar */}
        <motion.div
          className="absolute top-0 left-0 h-0.5"
          animate={hovered ? { width: '100%' } : { width: '0%' }}
          transition={{ duration: 0.4 }}
          style={{ background: category.color }}
        />

        <div className="p-7">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              className="w-10 h-10 flex items-center justify-center text-base font-bold"
              animate={hovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                background: category.accentBg,
                color: category.color,
                borderRadius: '8px',
              }}
            >
              {category.icon}
            </motion.div>
            <div>
              <h3 className="text-base font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                {category.title}
              </h3>
              <p className="text-xs" style={{ color: 'var(--color-text-subtle)' }}>
                {category.skills.length} skills
              </p>
            </div>
          </div>

          {/* Skill bars */}
          <div className="space-y-4">
            {category.skills.map((skill, i) => (
              <div
                key={skill.name}
                className="group/skill cursor-pointer"
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex justify-between mb-1.5">
                  <span
                    className="text-sm font-medium transition-colors duration-200"
                    style={{ color: activeSkill === skill.name ? category.color : 'var(--color-text-muted)' }}
                  >
                    {skill.name}
                  </span>
                  <motion.span
                    className="text-xs font-bold font-mono"
                    style={{ color: category.color }}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.08 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                {/* Track */}
                <div
                  className="w-full h-2 rounded-full overflow-hidden"
                  style={{ background: 'var(--color-bg-alt)' }}
                >
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    style={{ background: `linear-gradient(90deg, ${category.color}80, ${category.color})` }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                  >
                    {/* Shimmer */}
                    {hovered && (
                      <div
                        className="absolute inset-y-0 w-8"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                          animation: 'shimmer 1.5s ease-in-out infinite',
                        }}
                      />
                    )}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="section-inner">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Tech <span className="text-gradient-pink-sky">Stack</span>
          </h2>
          <div className="section-divider" />
          <p className="mt-6 max-w-xl mx-auto text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Technologies I work with to build modern, scalable applications. Hover to explore each category.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
