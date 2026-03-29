import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tags = ['SVM', 'MLP Neural Network', 'Python', 'scikit-learn', 'Pattern Recognition'];

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="research" className="section" ref={ref} style={{ background: 'var(--color-bg)' }}>
      <div className="section-inner" style={{ maxWidth: '860px' }}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Research <span className="text-gradient-neon">& Publications</span>
          </h2>
          <div className="section-divider" style={{ background: 'linear-gradient(90deg, var(--color-neon), var(--color-sky))' }} />
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          {/* Animated border on hover */}
          <div
            className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(135deg, var(--color-sky), var(--color-neon), var(--color-pink))',
              borderRadius: '20px',
            }}
          />

          <div
            className="relative card"
            style={{ borderRadius: '18px', padding: 'clamp(2rem, 5vw, 3rem)', border: '1.5px solid var(--color-sky)30' }}
          >
            {/* Decorative element */}
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: 'var(--color-sky-light)', filter: 'blur(40px)', transform: 'translate(30%, -30%)' }}
            />

            {/* IEEE Badge */}
            <motion.div
              className="flex items-center gap-3 mb-7"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <span
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  background: 'var(--color-sky-light)',
                  color: 'var(--color-sky)',
                  border: '1px solid var(--color-sky)30',
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-sky)' }} />
                Accepted by IEEE
              </span>
              <span
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{ background: 'var(--color-neon-light)', color: 'var(--color-neon)', border: '1px solid var(--color-neon)25' }}
              >
                Published Research
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="font-black mb-5 leading-snug"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3vw, 2rem)', color: 'var(--color-text)' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Online Assamese Handwritten Numerals Recognition
            </motion.h3>

            {/* Description */}
            <motion.p
              className="leading-relaxed mb-7 text-justify"
              style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1rem' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              Developed recognition models using{' '}
              <span style={{ color: 'var(--color-neon)', fontWeight: 500 }}>Support Vector Machine (SVM)</span>{' '}
              and{' '}
              <span style={{ color: 'var(--color-pink)', fontWeight: 500 }}>Multi-Layer Perceptron (MLP)</span>{' '}
              neural networks for classifying handwritten Assamese numerals — contributing to
              regional language technology and digital accessibility for underrepresented script communities.
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    borderRadius: '6px',
                    border: '1px solid var(--color-neon)30',
                    color: 'var(--color-neon)',
                    background: 'var(--color-neon-light)',
                  }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.75 + i * 0.07 }}
                  whileHover={{ scale: 1.08 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-7">
              {[
                { label: 'Methodology', value: 'SVM + MLP', color: 'var(--color-pink)' },
                { label: 'Domain', value: 'NLP / CV', color: 'var(--color-sky)' },
                { label: 'Status', value: 'IEEE Accepted', color: 'var(--color-neon)' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center py-3 px-2 rounded-lg"
                  style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                >
                  <div className="text-xs font-bold mb-1" style={{ color: item.color }}>{item.value}</div>
                  <div className="text-xs" style={{ color: 'var(--color-text-subtle)' }}>{item.label}</div>
                </div>
              ))}
            </div>

            {/* Mentors */}
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem' }}>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <span style={{ color: 'var(--color-sky)', fontWeight: 600 }}>Mentors: </span>
                Dr. Gurpreet Singh &amp; Sir Anuj
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
