<<<<<<< HEAD
'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, ExternalLink, Star } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
  featured: boolean
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Multi-Tenant CRM",
    description:
      "Enterprise-grade CRM platform supporting multiple organizations.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    tags: ["Next.js", "Django", "PostgreSQL"],
    github: "https://github.com/shoaibsiraj-official/Crm",
    demo: "https://demo.example.com",
    featured: true,
    category: "SaaS",
  },
  {
    id: 2,
    title: " Automation with Django",
    description:
      " automation platform with Django.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60",
    tags: ["Next.js", "Python", "PostgreSQL"],
    github: "https://github.com/shoaibsiraj-official/automate_with_django",
    demo: "https://demo.example.com",
    featured: true,
    category: "Automation",
  },
  {
    id: 3,
    title: "AI SaaS Builder",
    description:
      "Platform for building AI powered SaaS apps with automation workflows.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=60",
    tags: ["Next.js", "OpenAI", "Django"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
    category: "AI",
  },
]

type CardProps = {
  project: Project
  index: number
}

function ProjectCard({ project, index }: CardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
=======
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Multi-Tenant CRM',
    description: 'Enterprise-grade CRM platform supporting isolated workspaces for multiple organizations. Features custom pipelines, automation triggers, advanced analytics, and role-based access control.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    tags: ['Next.js', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
    category: 'SaaS',
    color: 'from-blue-500/10 to-cyan-500/10',
    accent: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Instagram Automation SaaS',
    description: 'Powerful Instagram growth platform with automated DM sequences, comment responses, follower engagement, and detailed analytics dashboard for marketers and agencies.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60',
    tags: ['Next.js', 'Python', 'Instagram API', 'PostgreSQL', 'Celery'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
    category: 'Automation',
    color: 'from-pink-500/10 to-rose-500/10',
    accent: 'bg-pink-500',
  },
  {
    id: 3,
    title: 'AI SaaS Builder',
    description: 'No-code platform for building AI-powered SaaS products. Drag-and-drop workflow builder, GPT-4 integration, custom AI agents, and one-click deployment to the cloud.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=60',
    tags: ['Next.js', 'OpenAI', 'Django', 'Vector DB', 'AWS'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
    category: 'AI',
    color: 'from-purple-500/10 to-violet-500/10',
    accent: 'bg-purple-500',
  },
  {
    id: 4,
    title: 'Telemedicine Platform',
    description: 'HIPAA-compliant telemedicine solution featuring real-time video consultations, appointment scheduling, e-prescriptions, patient records management, and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60',
    tags: ['Next.js', 'Django', 'WebRTC', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: false,
    category: 'Healthcare',
    color: 'from-emerald-500/10 to-teal-500/10',
    accent: 'bg-emerald-500',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
>>>>>>> 1d73bbeb735ea1ffd0ea938015413cbf03c8b92a

  return (
    <motion.div
      ref={ref}
<<<<<<< HEAD
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl border border-gray-800 overflow-hidden bg-white"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          
          alt={project.title}
          className="w-full h-full object-cover"
        />
=======
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group glass rounded-2xl overflow-hidden border border-[var(--border-color)] bg-gradient-to-br ${project.color} card-glow hover:border-brand-500/25 transition-all duration-500`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 glass rounded-full text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-color)]">
            {project.category}
          </span>
        </div>

        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-semibold flex items-center gap-1">
              <Star size={10} fill="currentColor" /> Featured
            </span>
          </div>
        )}
>>>>>>> 1d73bbeb735ea1ffd0ea938015413cbf03c8b92a
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
<<<<<<< HEAD

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">
            {project.title}
          </h3>

          {project.featured && (
            <Star size={16} className="text-yellow-400" />
          )}
        </div>

        <p className="text-black text-sm">
          {project.description}
        </p>

=======
        <div>
          <h3 className="font-display text-xl font-bold text-[var(--text-primary)] group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

>>>>>>> 1d73bbeb735ea1ffd0ea938015413cbf03c8b92a
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
<<<<<<< HEAD
              className="text-xs px-2 py-1 bg-green-500 rounded"
=======
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
>>>>>>> 1d73bbeb735ea1ffd0ea938015413cbf03c8b92a
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
<<<<<<< HEAD
        <div className="flex gap-3 pt-2">

          <a
            href={project.github}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 border text-black border-gray-700 py-2 rounded"
          >
            <Github size={16} />
            Code
          </a>

          <a
            href={project.demo}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded"
          >
            <ExternalLink size={16} />
            Demo
          </a>

        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" ref={ref} className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-3">
            Real world applications built with modern technologies
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>
  )
}
=======
        <div className="flex items-center gap-3 pt-2">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass border border-[var(--border-color)] text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-brand-500/30 transition-all"
          >
            <Github size={15} /> Code
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all"
          >
            <ExternalLink size={15} /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-brand-500 dark:text-brand-400 tracking-widest uppercase">
            — Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto">
            Real-world applications built with modern tech stacks, shipped to production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-brand-500/40 font-medium transition-all"
          >
            <Github size={16} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
>>>>>>> 1d73bbeb735ea1ffd0ea938015413cbf03c8b92a
