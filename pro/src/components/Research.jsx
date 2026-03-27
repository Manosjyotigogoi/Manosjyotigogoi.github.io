import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="research" className="section" ref={ref}>
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-sky)] opacity-5 blur-[150px] rounded-full pointer-events-none" />

      <div className="section-inner max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Research <span className="text-gradient-neon">& Publications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-neon)] to-[var(--color-sky)] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Gradient border effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[var(--color-sky)] via-[var(--color-neon)] to-[var(--color-pink)] rounded-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 blur-[1px]" />

          <div className="relative glass rounded-3xl p-8 md:p-10">
            {/* Status badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-[var(--color-sky)]/10 text-[var(--color-sky)] border border-[var(--color-sky)]/30">
                <span className="w-2 h-2 rounded-full bg-[var(--color-sky)] animate-pulse" />
                Accepted by IEEE
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
              Online Assamese Handwritten Numerals Recognition
            </h3>

            <p className="text-[var(--color-gray-light)] leading-relaxed mb-6 text-lg">
              Developed recognition models using{' '}
              <span className="text-[var(--color-neon)] font-medium">Support Vector Machine (SVM)</span>{' '}
              and{' '}
              <span className="text-[var(--color-pink)] font-medium">Multi-Layer Perceptron (MLP)</span>{' '}
              neural networks for classifying handwritten Assamese numerals - contributing to
              regional language technology and accessibility.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['SVM', 'MLP Neural Network', 'Python', 'scikit-learn', 'Pattern Recognition'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-[var(--color-neon)]/30 text-[var(--color-neon)] bg-[var(--color-neon)]/5"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* Mentors */}
            <div className="border-t border-white/5 pt-6">
              <p className="text-sm text-[var(--color-gray-light)]">
                <span className="text-[var(--color-sky)] font-medium">Mentors:</span>{' '}
                Dr. Gurpreet Singh &amp; Sir Anuj
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


