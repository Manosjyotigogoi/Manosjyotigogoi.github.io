import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '2+', label: 'Major Projects', color: 'var(--color-pink)', bg: 'var(--color-pink-light)', icon: '◈' },
  { number: '1', label: 'IEEE Paper', color: 'var(--color-sky)', bg: 'var(--color-sky-light)', icon: '◉' },
  { number: '10+', label: 'Technologies', color: 'var(--color-neon)', bg: 'var(--color-neon-light)', icon: '◆' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section" ref={ref} style={{ background: 'var(--color-surface)' }}>
      <div className="section-inner">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            About <span className="text-gradient-pink-sky">Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text — breathing font */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* "Breathing" display text — inspired by the Charming Breathing image */}
            <p
              className="animate-breathing mb-4 font-light italic"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                color: 'var(--color-text)',
                lineHeight: 1.3,
              }}
            >
              Curious. Committed. Creative.
            </p>

            <p className="leading-loose mb-5 text-justify" style={{ color: 'var(--color-text-muted)', fontSize: '1.0rem', lineHeight: '1.85' }}>
              A passionate developer who believes growth happens outside the comfort zone.
              Currently pursuing my degree at{' '}
              <span style={{ color: 'var(--color-sky)', fontWeight: 500 }}>Lovely Professional University</span>,
              I'm focused on building impactful full-stack applications and conducting cutting-edge
              AI/ML research.
            </p>
            <p className="leading-loose mb-5 text-justify" style={{ color: 'var(--color-text-muted)', fontSize: '1.0rem', lineHeight: '1.85' }}>
              From crafting intelligent study platforms to developing hostel management systems,
              I bring ideas to life with{' '}
              <span style={{ color: 'var(--color-pink)', fontWeight: 500 }}>React</span>,{' '}
              <span style={{ color: 'var(--color-neon)', fontWeight: 500 }}>Node.js</span>, and{' '}
              <span style={{ color: 'var(--color-sky)', fontWeight: 500 }}>Python</span>.
              My IEEE-accepted research on Assamese handwritten numeral recognition reflects my
              deep interest in using technology to solve real-world problems.
            </p>
            <p className="leading-loose text-justify" style={{ color: 'var(--color-text-muted)', fontSize: '1.0rem', lineHeight: '1.85' }}>
              Based in{' '}
              <span style={{ color: 'var(--color-neon)', fontWeight: 500 }}>Phagwara, Punjab, India</span> —
              always looking for the next challenge to push my limits.
            </p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
                style={{ color: 'var(--color-pink)', borderBottom: '1px solid var(--color-pink)', paddingBottom: '2px' }}
              >
                See my projects
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            className="grid grid-cols-1 gap-5"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="relative group card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.14 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                style={{ borderRadius: '12px', borderLeft: `4px solid ${stat.color}` }}
              >
                <div className="flex items-center gap-6 p-6">
                  <div
                    className="flex items-center justify-center w-14 h-14 shrink-0 text-lg font-bold"
                    style={{
                      background: stat.bg,
                      color: stat.color,
                      borderRadius: '10px',
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-black leading-none mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: '2.6rem', color: stat.color }}>
                      {stat.number}
                    </div>
                    <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-text-subtle)' }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
                {/* Shimmer on hover */}
                <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                  <div className="absolute inset-y-0 w-20 -skew-x-12"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${stat.color}10, transparent)`,
                      animation: 'shimmer 1.5s ease-in-out',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
