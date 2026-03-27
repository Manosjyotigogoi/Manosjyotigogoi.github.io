import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  {
    title: 'Frontend',
    color: 'var(--color-pink)',
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
    color: 'var(--color-white)',
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

function SkillCategory({ category, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Top border accent that extends on hover */}
      <div
        className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: category.color }}
      />

      <div
        className="glass p-6 h-full transition-all duration-300"
        style={{
          borderRadius: '4px 16px 16px 16px',
          border: `1px solid ${category.color}15`,
        }}
      >
        {/* Category header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-8 h-8 flex items-center justify-center text-sm font-bold"
            style={{
              background: category.color + '15',
              color: category.color,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          >
            {category.icon}
          </div>
          <h3
            className="text-base font-bold font-heading tracking-wide"
            style={{ color: category.color }}
          >
            {category.title}
          </h3>
        </div>

        <div className="space-y-3.5">
          {category.skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-gray-light font-medium">{skill.name}</span>
                <span className="text-xs font-mono font-bold" style={{ color: category.color }}>
                  {skill.level}%
                </span>
              </div>
              {/* Segmented progress bar */}
              <div className="w-full h-1.5 bg-gray-dark rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full"
                  style={{ background: `linear-gradient(90deg, ${category.color}99, ${category.color})` }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Tech <span className="text-gradient-pink-sky">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-pink to-sky mx-auto rounded-full" />
          <p className="text-gray-light mt-6 max-w-xl mx-auto">
            Technologies I work with to build modern, scalable applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {categories.map((cat, i) => (
            <SkillCategory key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
