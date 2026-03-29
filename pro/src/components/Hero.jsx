import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Full-Stack Developer',
  'AI & ML Enthusiast',
  'IEEE Researcher',
  'React Specialist',
];

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
        timeout = setTimeout(() => setIsDeleting(true), 1400);
      }
    } else if (displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 42);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 200);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 pt-28 pb-16"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #888 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      {/* Soft color blobs */}
      <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'var(--color-pink)', opacity: 0.06, filter: 'blur(80px)' }} />
      <div className="absolute bottom-1/4 right-1/5 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'var(--color-sky)', opacity: 0.06, filter: 'blur(80px)' }} />

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
        <motion.p
          className="text-xs font-semibold tracking-[0.35em] uppercase mb-8"
          style={{ color: 'var(--color-text-subtle)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Portfolio · 2026
        </motion.p>

        <motion.h1
          className="font-black leading-tight mb-6"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.8rem, 8vw, 6rem)', color: 'var(--color-text)' }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span className="block">Hi, I'm</span>
          <span className="text-gradient-pink-sky animate-gradient block mt-1">
            Manos Jyoti Gogoi
          </span>
        </motion.h1>

        <motion.div
          className="text-xl sm:text-2xl mb-12 min-h-10"
          style={{ color: 'var(--color-text-muted)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span>{displayText}</span>
          <span className="inline-block w-0.5 h-6 ml-1 animate-pulse" style={{ background: 'var(--color-pink)' }} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#projects"
            className="group relative overflow-hidden font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--color-pink), var(--color-sky))',
              clipPath: 'polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%)',
              padding: '14px 44px',
              letterSpacing: '0.05em',
              fontSize: '0.9rem',
              color: 'white',
            }}
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="group font-semibold transition-all duration-300 hover:scale-105"
            style={{
              border: '2px solid var(--color-text)',
              borderRadius: '4px',
              padding: '12px 36px',
              fontSize: '0.9rem',
              color: 'var(--color-text)',
              background: 'transparent',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-text)'; e.currentTarget.style.color = 'var(--color-bg)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text)'; }}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Stats — bigger, with breathing space */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 sm:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          {[
            { val: '2+', label: 'Projects', color: 'var(--color-pink)' },
            { val: '1', label: 'IEEE Paper', color: 'var(--color-sky)' },
            { val: '10+', label: 'Technologies', color: 'var(--color-neon)' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.12 }}
            >
              <span
                className="font-black leading-none"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', color: s.color }}
              >
                {s.val}
              </span>
              <span className="text-sm font-medium tracking-wide uppercase" style={{ color: 'var(--color-text-subtle)' }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full flex justify-center pt-2" style={{ border: '2px solid var(--color-border-strong)' }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--color-pink)' }}
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
