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

  return (
    <motion.div
      ref={ref}
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
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">

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

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-green-500 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
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