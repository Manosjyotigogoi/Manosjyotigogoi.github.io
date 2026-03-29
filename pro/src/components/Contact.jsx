import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manosjyotigogoi/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'var(--color-sky)',
    bg: 'var(--color-sky-light)',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/manosjyotigogoi',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    color: 'var(--color-text)',
    bg: 'var(--color-surface-2)',
  },
  {
    name: 'Email',
    href: 'mailto:manosjyotigogoi@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'var(--color-pink)',
    bg: 'var(--color-pink-light)',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formStatus, setFormStatus] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sent');
    setTimeout(() => setFormStatus(''), 3000);
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '14px 18px',
    background: 'var(--color-surface)',
    border: `1.5px solid ${focusedField === field ? 'var(--color-pink)' : 'var(--color-border)'}`,
    borderRadius: '10px',
    color: 'var(--color-text)',
    fontSize: '0.95rem',
    transition: 'border-color 0.25s, box-shadow 0.25s',
    boxShadow: focusedField === field ? '0 0 0 3px var(--color-pink-light)' : 'none',
    outline: 'none',
  });

  return (
    <section id="contact" className="section" ref={ref} style={{ background: 'var(--color-surface)' }}>
      {/* Top line */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--color-pink)50, var(--color-sky)50, transparent)' }} />

      <div className="section-inner" style={{ maxWidth: '1000px' }}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Get In <span className="text-gradient-pink-sky">Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="mt-6 max-w-xl mx-auto text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Have a project in mind or just want to connect? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5 card"
            style={{ borderRadius: '20px', padding: 'clamp(1.5rem, 4vw, 2.2rem)' }}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2" style={{ color: 'var(--color-text-muted)' }}>
                YOUR NAME
              </label>
              <input
                type="text"
                placeholder="Manos Jyoti"
                required
                style={inputStyle('name')}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField('')}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2" style={{ color: 'var(--color-text-muted)' }}>
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                required
                style={inputStyle('email')}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2" style={{ color: 'var(--color-text-muted)' }}>
                MESSAGE
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project or idea..."
                required
                style={{ ...inputStyle('message'), resize: 'none' }}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField('')}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-4 font-bold text-white relative overflow-hidden"
              style={{
                background: formStatus === 'sent'
                  ? 'var(--color-neon)'
                  : 'linear-gradient(135deg, var(--color-pink), var(--color-sky))',
                borderRadius: '10px',
                letterSpacing: '0.05em',
                fontSize: '0.9rem',
                color: formStatus === 'sent' ? 'var(--color-text)' : 'white',
                border: 'none',
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {formStatus === 'sent' ? (
                  <>
                    Message Sent!
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8h12M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </span>
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card" style={{ borderRadius: '20px', padding: 'clamp(1.5rem, 4vw, 2.2rem)', marginBottom: '1.25rem' }}>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                Let's Connect
              </h3>
              <p className="text-sm leading-relaxed mb-7" style={{ color: 'var(--color-text-muted)', lineHeight: '1.75' }}>
                Whether it's a collaboration, freelance opportunity, or just a tech conversation —
                I'm always open. Reach out through any of the platforms below.
              </p>

              <div className="space-y-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 group transition-all duration-300"
                    style={{
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderLeft: `3px solid ${s.color}`,
                      borderRadius: '0 10px 10px 0',
                    }}
                    whileHover={{ x: 6, background: 'var(--color-bg-alt)' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.55 + i * 0.1 }}
                  >
                    <span
                      className="p-2.5 rounded-lg shrink-0"
                      style={{ color: s.color, background: s.bg }}
                    >
                      {s.icon}
                    </span>
                    <span className="font-medium" style={{ color: 'var(--color-text)' }}>{s.name}</span>
                    <svg className="w-4 h-4 ml-auto transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-text-subtle)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location card */}
            <div
              className="card flex items-center gap-3 px-5 py-4"
              style={{ borderRadius: '12px' }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--color-pink-light)' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: 'var(--color-pink)' }}>
                  <path d="M7 1C4.8 1 3 2.8 3 5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.2-1.8-4-4-4z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  <circle cx="7" cy="5" r="1.2" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: 'var(--color-text)' }}>Current Location</p>
                <p className="text-xs" style={{ color: 'var(--color-text-subtle)' }}>Phagwara, Punjab, India</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-8 text-center"
          style={{ borderTop: '1px solid var(--color-border)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        >
          <p className="text-sm" style={{ color: 'var(--color-text-subtle)' }}>
            © 2026 <span className="text-gradient-pink-sky font-semibold">Manos Jyoti Gogoi</span>. Built with React, Tailwind CSS & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
