'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Sparkles, Download } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const floatingCards = [
  { icon: '⚡', label: 'Next.js 14', color: 'from-blue-500/20 to-cyan-500/20', delay: 0.2 },
  { icon: '🐍', label: 'Django REST', color: 'from-green-500/20 to-emerald-500/20', delay: 0.9 },
  { icon: '🚀', label: 'SaaS Builder', color: 'from-purple-500/20 to-pink-500/20', delay: 3 },
  { icon: '🤖', label: 'AI Powered', color: 'from-amber-500/20 to-orange-500/20', delay: 5 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[var(--bg-primary)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-500/20 text-brand-500 dark:text-brand-400 text-sm font-medium">
                <Sparkles size={14} className="animate-pulse" />
                Available for freelance & full-time
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={item} className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] text-[var(--text-primary)]">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Shoaib Siraj</span>
            </motion.h1>

            {/* Title */}
            <motion.div variants={item} className="flex items-center gap-3">
              <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-brand-500 to-transparent" />
              <p className="font-mono text-brand-500 dark:text-brand-400 text-lg font-medium tracking-wide">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={item} className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-lg font-light">
              Building{' '}
              <span className="text-[var(--text-primary)] font-medium">scalable SaaS platforms</span>{' '}
              and{' '}
              <span className="text-[var(--text-primary)] font-medium">modern web applications</span>{' '}
              that deliver exceptional user experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 transition-all duration-300"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass border border-[var(--border-color)] text-[var(--text-primary)] font-semibold hover:border-brand-500/40 transition-all duration-300"
              >
                <Download size={16} />
                Hire Me
              </motion.a>
            </motion.div>

            {/* Social */}
            <motion.div variants={item} className="flex items-center gap-4 pt-2">
              <span className="text-sm text-[var(--text-secondary)]">Find me on:</span>
              <motion.a
                href="https://github.com/shoaibsiraj-official"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl glass border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-brand-500/40 transition-all"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shoaib-siraj-"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl glass border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-brand-500/40 transition-all"
              >
                <Linkedin size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Main avatar/visual */}
            <div className="relative w-80 h-80">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-brand-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-dashed border-accent-500/15"
              />

              {/* Center */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-500/20 to-accent-500/20 glass animated-border flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>

              {/* Stats chips */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 border border-[var(--border-color)] shadow-xl"
              >
                <div className="text-2xl font-display font-black text-brand-500">1+</div>
                <div className="text-xs text-[var(--text-secondary)]">Years Exp.</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 border border-[var(--border-color)] shadow-xl"
              >
                <div className="text-2xl font-display font-black gradient-text">20+</div>
                <div className="text-xs text-[var(--text-secondary)]">Projects Done</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-16 glass rounded-2xl px-4 py-3 border border-[var(--border-color)] shadow-xl"
              >
                <div className="text-2xl font-display font-black text-accent-500">98%</div>
                <div className="text-xs text-[var(--text-secondary)]">Client Sat.</div>
              </motion.div>
            </div>

            {/* Floating tech cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 0.8 + i * 0.15, duration: 0.5 },
                  scale: { delay: 0.8 + i * 0.15, duration: 0.5 },
                  y: { duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: card.delay },
                }}
                className={`absolute glass rounded-xl px-3 py-2 border border-[var(--border-color)] bg-gradient-to-br ${card.color} shadow-lg`}
                style={{
                  top: `${15 + i * 20}%`,
                  right: i % 2 === 0 ? '-80px' : 'auto',
                  left: i % 2 !== 0 ? '-80px' : 'auto',
                }}
              >
                <span className="text-sm">{card.icon}</span>
                <span className="text-xs font-medium text-[var(--text-secondary)] ml-1">{card.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-secondary)]"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-9 rounded-full border-2 border-[var(--border-color)] flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-brand-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
