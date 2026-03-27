import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Full-Stack Developer',
  'AI & ML Enthusiast',
  'IEEE Researcher',
  'React Specialist',
];

function FloatingOrb({ color, size, x, y, delay }) {
  return (
    <motion.div
      className="absolute rounded-full opacity-30 blur-3xl pointer-events-none"
      style={{ background: color, width: size, height: size, left: x, top: y }}
      animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.2, 0.9, 1] }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      }
    } else if (displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 40);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 180);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 pt-28 pb-16"
    >
      <FloatingOrb color="var(--color-pink)" size="400px" x="10%" y="20%" delay={0} />
      <FloatingOrb color="var(--color-sky)" size="350px" x="70%" y="60%" delay={2} />
      <FloatingOrb color="var(--color-neon)" size="250px" x="50%" y="10%" delay={4} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-neon text-sm font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-black leading-tight mb-6 font-heading"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="block text-white">Hi, I'm</span>
            <span className="text-gradient-pink-sky animate-gradient block mt-2">
              Manos Jyoti Gogoi
            </span>
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl md:text-3xl text-gray-light mb-10 min-h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span>{displayText}</span>
            <span className="inline-block w-0.5 h-7 bg-pink ml-1 animate-pulse" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {/* Diamond-clipped primary CTA */}
          <a
            href="#projects"
            className="group relative overflow-hidden font-bold text-dark transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--color-pink), var(--color-sky))',
              clipPath: 'polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)',
              padding: '14px 40px',
              letterSpacing: '0.05em',
              fontSize: '0.95rem',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {/* Shimmer on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, var(--color-sky), var(--color-pink))' }} />
          </a>

          {/* Rounded-corner rectangle with neon border */}
          <a
            href="#contact"
            className="group font-semibold text-neon transition-all duration-300 hover:text-dark"
            style={{
              border: '2px solid var(--color-neon)',
              borderRadius: '6px',
              padding: '12px 32px',
              fontSize: '0.95rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span className="relative z-10">Contact Me</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'var(--color-neon)' }}
            />
          </a>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {[
            { val: '2+', label: 'Projects' },
            { val: '1', label: 'IEEE Paper' },
            { val: '10+', label: 'Technologies' },
          ].map((s) => (
            <div
              key={s.label}
              className="glass flex items-center gap-2 px-4 py-2"
              style={{ borderRadius: '4px', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="text-white font-bold text-sm">{s.val}</span>
              <span className="text-gray-light text-xs">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-light rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-pink rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
