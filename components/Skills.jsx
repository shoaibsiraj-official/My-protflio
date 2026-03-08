'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20 hover:border-blue-500/40",
    accent: "text-blue-400",
    skills: [
      { name: "Next.js", level: 95, icon: "⚡" },
      { name: "JavaScript", level: 92, icon: "🟨" },
      { name: "TypeScript", level: 88, icon: "💙" },
      { name: "HTML & CSS", level: 96, icon: "🎭" },
      { name: "Tailwind CSS", level: 94, icon: "🌊" },
      { name: "Framer Motion", level: 85, icon: "✨" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-emerald-500/20 to-green-500/20",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    accent: "text-emerald-400",
    skills: [
      { name: "Python", level: 93, icon: "🐍" },
      { name: "Django", level: 91, icon: "🎸" },
      { name: "Django REST", level: 90, icon: "🔗" },
      { name: "Node.js", level: 82, icon: "💚" },
      { name: "GraphQL", level: 78, icon: "🔷" },
      { name: "REST APIs", level: 95, icon: "📡" },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    color: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-500/20 hover:border-purple-500/40",
    accent: "text-purple-400",
    skills: [
      { name: "Git & GitHub", level: 94, icon: "🐙" },
      { name: "PostgreSQL", level: 88, icon: "🐘" },
      { name: "Docker", level: 82, icon: "🐳" },
      { name: "Redis", level: 79, icon: "🔴" },
      { name: "AWS", level: 75, icon: "☁️" },
      { name: "Vercel", level: 92, icon: "▲" },
    ],
  },
]

function SkillBar({ name, level, icon, accent, delay = 0 }) {

  const { ref, inView } = useInView({ triggerOnce: true })

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

        <span className={`text-xs font-mono font-bold ${accent}`}>
          {level}%
        </span>

      </div>

      <div className="h-1.5 rounded-full bg-[var(--bg-secondary)] overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
        />

      </div>

    </motion.div>
  )
}

export default function Skills() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl font-bold">
            My Skills & Stack
          </h2>

          <p className="text-gray-400 mt-3">
            Technologies and tools I use to build modern applications.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">

          {skillGroups.map((group, gi) => (

            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.15 }}
              className={`rounded-xl border p-6 ${group.border}`}
            >

              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl">{group.icon}</span>
                <h3 className={`font-bold ${group.accent}`}>
                  {group.category}
                </h3>
              </div>

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

      </div>

    </section>
  )
}