'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    accent: 'text-blue-400',
    skills: [
      { name: 'Next.js', level: 95, icon: '⚡' },
      { name: 'JavaScript', level: 92, icon: '🟨' },
      { name: 'TypeScript', level: 88, icon: '💙' },
      { name: 'HTML & CSS', level: 96, icon: '🎭' },
      { name: 'Tailwind CSS', level: 94, icon: '🌊' },
      { name: 'Framer Motion', level: 85, icon: '✨' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-emerald-500/20 to-green-500/20',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    accent: 'text-emerald-400',
    skills: [
      { name: 'Python', level: 93, icon: '🐍' },
      { name: 'Django', level: 91, icon: '🎸' },
      { name: 'Django REST', level: 90, icon: '🔗' },
      { name: 'Node.js', level: 82, icon: '💚' },
      { name: 'GraphQL', level: 78, icon: '🔷' },
      { name: 'REST APIs', level: 95, icon: '📡' },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-purple-500/20 to-violet-500/20',
    border: 'border-purple-500/20 hover:border-purple-500/40',
    accent: 'text-purple-400',
    skills: [
      { name: 'Git & GitHub', level: 94, icon: '🐙' },
      { name: 'PostgreSQL', level: 88, icon: '🐘' },
      { name: 'Docker', level: 82, icon: '🐳' },
      { name: 'Redis', level: 79, icon: '🔴' },
      { name: 'AWS', level: 75, icon: '☁️' },
      { name: 'Vercel', level: 92, icon: '▲' },
    ],
  },
];

function SkillBar({ name, level, icon, accent, delay }: {
  name: string; level: number; icon: string; accent: string; delay: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
          <span>{icon}</span> {name}
        </span>
        <span className={`text-xs font-mono font-bold ${accent}`}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--bg-secondary)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-brand-500 dark:text-brand-400 tracking-widest uppercase">
            — Technical Expertise
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mt-3">
            My <span className="gradient-text">Skills</span> & Stack
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto">
            A comprehensive toolkit honed through real-world projects and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className={`glass rounded-2xl p-6 border ${group.border} bg-gradient-to-br ${group.color} card-glow transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-xl border border-[var(--border-color)]">
                  {group.icon}
                </div>
                <h3 className={`font-display font-bold text-lg ${group.accent}`}>
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    accent={group.accent}
                    delay={gi * 0.1 + si * 0.07}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech logos marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 overflow-hidden"
        >
          <p className="text-center text-sm text-[var(--text-secondary)] mb-6 font-mono tracking-widest uppercase">
            Technologies I work with
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            {['Next.js', 'React', 'TypeScript', 'Python', 'Django', 'PostgreSQL', 'Docker', 'Redis', 'AWS', 'Vercel', 'GraphQL', 'Tailwind'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-brand-500/40 hover:text-[var(--text-primary)] transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
