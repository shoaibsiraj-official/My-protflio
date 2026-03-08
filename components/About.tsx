'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Coffee, Rocket, Users } from 'lucide-react';

const highlights = [
  'Next.js 14 App Router & Server Components',
  'Django & Django REST Framework APIs',
  'Multi-tenant SaaS architecture',
  'PostgreSQL & database optimization',
  'Docker containerization & CI/CD',
  'AI integration & automation workflows',
];

const metrics = [
  { icon: Rocket, value: '20+', label: 'Projects Shipped', color: 'text-brand-500' },
  { icon: Users, value: '15+', label: 'Happy Clients', color: 'text-accent-500' },
  { icon: Coffee, value: '4+', label: 'Years Experience', color: 'text-amber-500' },
  { icon: CheckCircle2, value: '98%', label: 'Client Satisfaction', color: 'text-emerald-500' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-brand-500 dark:text-brand-400 tracking-widest uppercase">
            — About Me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mt-3">
            Crafting Digital{' '}
            <span className="gradient-text">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-lg">
              <p>
                I'm a passionate{' '}
                <span className="text-[var(--text-primary)] font-semibold">Full Stack Developer</span>{' '}
                with 4+ years of experience building production-grade web applications and SaaS platforms that scale.
              </p>
              <p>
                My expertise spans the full spectrum — from crafting pixel-perfect UIs with{' '}
                <span className="text-brand-500 font-medium">Next.js</span> to architecting robust backend systems with{' '}
                <span className="text-emerald-500 font-medium">Django & REST APIs</span>. I specialize in building{' '}
                multi-tenant SaaS products that handle real business complexity.
              </p>
              <p>
                I've helped startups go from idea to launch, built automation tools that save clients hundreds of hours monthly, and integrated cutting-edge AI capabilities into production systems.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  </div>
                  {item}
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-brand-500/30 text-brand-500 font-semibold hover:bg-brand-500/5 transition-all mt-4"
            >
              Let's work together →
            </motion.a>
          </motion.div>

          {/* Right — Metrics + Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 100 }}
                  className="glass rounded-2xl p-6 border border-[var(--border-color)] card-glow group hover:border-brand-500/20 transition-all duration-300"
                >
                  <metric.icon size={24} className={`${metric.color} mb-3`} />
                  <div className={`font-display text-3xl font-black ${metric.color}`}>{metric.value}</div>
                  <div className="text-sm text-[var(--text-secondary)] mt-1">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Code card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="glass rounded-2xl p-5 border border-[var(--border-color)] font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-[var(--text-secondary)] text-xs ml-2">developer.ts</span>
              </div>
              <div className="space-y-1 text-xs leading-relaxed">
                <div><span className="text-accent-400">const</span> <span className="text-brand-400">developer</span> <span className="text-[var(--text-secondary)]">=</span> {'{'}</div>
                <div className="pl-4"><span className="text-emerald-400">name</span><span className="text-[var(--text-secondary)]">:</span> <span className="text-amber-400">'Alex Morgan'</span><span className="text-[var(--text-secondary)]">,</span></div>
                <div className="pl-4"><span className="text-emerald-400">role</span><span className="text-[var(--text-secondary)]">:</span> <span className="text-amber-400">'Full Stack Developer'</span><span className="text-[var(--text-secondary)]">,</span></div>
                <div className="pl-4"><span className="text-emerald-400">stack</span><span className="text-[var(--text-secondary)]">: [</span><span className="text-amber-400">'Next.js'</span><span className="text-[var(--text-secondary)]">,</span> <span className="text-amber-400">'Django'</span><span className="text-[var(--text-secondary)]">,</span> <span className="text-amber-400">'PostgreSQL'</span><span className="text-[var(--text-secondary)]">],</span></div>
                <div className="pl-4"><span className="text-emerald-400">available</span><span className="text-[var(--text-secondary)]">:</span> <span className="text-brand-400">true</span></div>
                <div className="text-[var(--text-secondary)]">{'}'}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
