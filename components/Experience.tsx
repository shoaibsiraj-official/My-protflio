<<<<<<< HEAD
/* eslint-disable react/no-unescaped-entities */
'use client'
=======
'use client';
>>>>>>> 1d73bbeb735ea1ffd0ea938015413cbf03c8b92a

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award, Rocket } from 'lucide-react';

const timeline = [
  {
<<<<<<< HEAD
    year: '2025 — Present',
    title: ' Full Stack Developer',
=======
    year: '2024 — Present',
    title: 'Senior Full Stack Developer',
>>>>>>> 1d73bbeb735ea1ffd0ea938015413cbf03c8b92a
    company: 'Freelance & Consulting',
    icon: Briefcase,
    color: 'text-brand-500',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/30',
    description: 'Building scalable SaaS products for international clients. Led development of multi-tenant CRM, AI automation tools, and telemedicine platforms serving thousands of users.',
    highlights: ['Next.js 14 App Router', 'Django REST APIs', 'Multi-tenant architecture', 'AI/ML integration'],
  },
<<<<<<< HEAD
=======
  {
    year: '2022 — 2024',
    title: 'Full Stack Developer',
    company: 'TechStartup Inc.',
    icon: Rocket,
    color: 'text-accent-500',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/30',
    description: 'Built and shipped 8 production applications. Architected RESTful APIs serving 50k+ daily requests, improved database query performance by 60%, and introduced CI/CD pipelines.',
    highlights: ['React & Next.js', 'Python/Django', 'PostgreSQL optimization', 'Docker & CI/CD'],
  },
  {
    year: '2021 — 2022',
    title: 'Junior Web Developer',
    company: 'Digital Agency',
    icon: GraduationCap,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    description: 'Developed client websites and web apps. Gained hands-on experience with React, responsive design, and backend integration. Delivered 15+ client projects on time.',
    highlights: ['React fundamentals', 'REST API integration', 'Responsive design', 'Git workflow'],
  },
  {
    year: '2020 — 2021',
    title: 'CS Degree & Self-Learning',
    company: 'University + Bootcamp',
    icon: Award,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    description: 'Completed Computer Science fundamentals, built 10+ portfolio projects, earned certifications in Full Stack Development. This is where the journey began.',
    highlights: ['Data structures', 'Algorithms', 'Full stack fundamentals', 'Portfolio projects'],
  },
>>>>>>> 1d73bbeb735ea1ffd0ea938015413cbf03c8b92a
];

function TimelineItem({ item, index, isLast }: { item: typeof timeline[0]; index: number; isLast: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-12">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`${isLeft ? 'md:text-right md:order-1' : 'md:order-3'}`}
      >
        <div
          className={`glass rounded-2xl p-6 border ${item.border} card-glow bg-gradient-to-br ${
            isLeft ? 'from-transparent to-transparent' : 'from-transparent to-transparent'
          } transition-all duration-300 hover:scale-[1.01]`}
        >
          <div className={`flex items-center gap-2 mb-1 ${isLeft ? 'md:justify-end' : ''}`}>
            <span className="font-mono text-xs text-[var(--text-secondary)] tracking-wider">{item.year}</span>
          </div>
          <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">{item.title}</h3>
          <p className={`text-sm font-medium ${item.color} mb-3`}>{item.company}</p>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>

          <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'md:justify-end' : ''}`}>
            {item.highlights.map((h) => (
              <span key={h} className={`px-2.5 py-1 rounded-lg text-xs font-medium ${item.bg} ${item.color} border ${item.border}`}>
                {h}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2, type: 'spring' }}
        className="hidden md:flex items-center justify-center md:order-2 relative z-10"
      >
        <div className={`w-14 h-14 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center shadow-lg`}>
          <item.icon size={22} className={item.color} />
        </div>
      </motion.div>

      {/* Spacer for alternating layout */}
      <div className={`hidden md:block ${isLeft ? 'md:order-3' : 'md:order-1'}`} />
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-brand-500 dark:text-brand-400 tracking-widest uppercase">
            — Journey
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mt-3">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto">
            From curious student to senior developer — here's how the journey unfolded.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative timeline-line">
          {timeline.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} isLast={i === timeline.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
