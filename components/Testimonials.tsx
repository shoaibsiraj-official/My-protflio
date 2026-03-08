'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, GrowthStack',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Alex built our entire SaaS platform from scratch in 3 months. The multi-tenant architecture is rock solid, performance is stellar, and the code quality is exceptional. 10/10 would work with again.',
    color: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/20',
  },
  {
    name: 'Marcus Williams',
    role: 'CTO, MedConnect',
    avatar: '👨‍💻',
    rating: 5,
    text: 'Our telemedicine platform handles thousands of daily consultations thanks to Alex\'s expertise. The WebRTC implementation and HIPAA compliance were handled flawlessly. Truly a world-class developer.',
    color: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-500/20',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, AutoGram',
    avatar: '👩‍🚀',
    rating: 5,
    text: 'The Instagram automation SaaS Alex built for us generates $40k MRR. His Django + Celery architecture handles millions of API calls daily without breaking a sweat. Absolute genius.',
    color: 'from-pink-500/10 to-rose-500/10',
    border: 'border-pink-500/20',
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-brand-500 dark:text-brand-400 tracking-widest uppercase">
            — Social Proof
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mt-3">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`glass rounded-2xl p-6 border ${t.border} bg-gradient-to-br ${t.color} card-glow hover:scale-[1.02] transition-all duration-300`}
            >
              <Quote size={32} className="text-brand-500/40 mb-4" />

              <p className="text-[var(--text-secondary)] leading-relaxed text-sm italic mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500/20 to-accent-500/20 glass flex items-center justify-center text-xl border border-[var(--border-color)]">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">{t.name}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star key={si} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
