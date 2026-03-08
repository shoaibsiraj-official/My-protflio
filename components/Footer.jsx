'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Heart, ArrowUp } from 'lucide-react';

const footerLinks = {
  Navigation: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'SaaS Development', href: '#contact' },
    { label: 'API Development', href: '#contact' },
    { label: 'Web Applications', href: '#contact' },
    { label: 'AI Integration', href: '#contact' },
    { label: 'Consulting', href: '#contact' },
  ],
};

const socials = [
  { icon: Github, href: 'https://github.com/shoaibsiraj-official', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shoaib-siraj-', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:shoaibwebx@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-[var(--text-primary)]">
                Shoaib<span className="gradient-text">Siraj</span>
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Full Stack Developer specializing in scalable SaaS platforms and modern web applications. Available for freelance projects and full-time opportunities.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl glass border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-brand-500/40 transition-all"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-sm font-semibold text-[var(--text-primary)] font-mono tracking-wide">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-brand-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-secondary)] flex items-center gap-1.5">
            Built with <Heart size={13} className="text-red-400 fill-red-400" /> using Next.js, Tailwind & Framer Motion
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Alex Morgan. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-xl glass border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-brand-500/40 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
