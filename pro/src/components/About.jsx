import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '2+', label: 'Major Projects', color: 'var(--color-pink)', icon: '◈' },
  { number: '1', label: 'IEEE Paper', color: 'var(--color-sky)', icon: '◉' },
  { number: '10+', label: 'Technologies', color: 'var(--color-neon)', icon: '◆' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            About <span className="text-gradient-pink-sky">Me</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-pink to-sky mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-light leading-relaxed mb-6">
              A passionate developer who believes growth happens outside the comfort zone.
              Currently pursuing my degree at{' '}
              <span className="text-sky font-medium">Lovely Professional University</span>,
              I'm focused on building impactful full-stack applications and conducting cutting-edge
              AI/ML research.
            </p>
            <p className="text-lg text-gray-light leading-relaxed mb-6">
              From crafting intelligent study platforms to developing hostel management systems,
              I bring ideas to life with <span className="text-pink font-medium">React</span>,{' '}
              <span className="text-neon font-medium">Node.js</span>, and{' '}
              <span className="text-sky font-medium">Python</span>. My IEEE-accepted
              research on Assamese handwritten numeral recognition reflects my deep interest in
              using technology to solve real-world problems.
            </p>
            <p className="text-lg text-gray-light leading-relaxed">
              Based in{' '}
              <span className="text-neon font-medium">Phagwara, Punjab, India</span> —
              always looking for the next challenge to push my limits.
            </p>

            {/* CTA inside about */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-pink hover:text-sky transition-colors duration-300"
                style={{ borderBottom: '1px solid var(--color-pink)', paddingBottom: '2px' }}
              >
                See my projects
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Stats — cut-corner card design */}
          <motion.div
            className="grid grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                whileHover={{ x: 8 }}
              >
                {/* Cut-corner shape via clip-path */}
                <div
                  className="glass flex items-center gap-5 p-6 transition-all duration-300"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)',
                    borderLeft: `3px solid ${stat.color}`,
                  }}
                >
                  {/* Icon badge */}
                  <div
                    className="flex items-center justify-center w-12 h-12 shrink-0 text-xl font-black"
                    style={{
                      background: stat.color + '15',
                      color: stat.color,
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    }}
                  >
                    {stat.icon}
                  </div>

                  <div>
                    <div
                      className="text-4xl font-black font-heading leading-none"
                      style={{ color: stat.color }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-gray-light text-xs mt-1 font-medium tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>

                  {/* Corner accent triangle */}
                  <div
                    className="absolute top-0 right-0 w-6 h-6"
                    style={{
                      background: stat.color + '30',
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
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
