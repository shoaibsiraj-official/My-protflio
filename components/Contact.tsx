'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, MessageSquare, User, Send, CheckCircle2, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'alex@portfolio.dev', href: 'mailto:alex@portfolio.dev' },
  { icon: MapPin, label: 'Location', value: 'Available Worldwide', href: '#' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: '#' },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-brand-500 dark:text-brand-400 tracking-widest uppercase">
            — Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mt-3">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 border border-[var(--border-color)] space-y-5">
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                Contact Information
              </h3>

              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                    <info.icon size={18} className="text-brand-500" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-secondary)]">{info.label}</div>
                    <div className="text-sm font-medium text-[var(--text-primary)] group-hover:text-brand-500 transition-colors">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability card */}
            <div className="glass rounded-2xl p-6 border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-500">Available for Work</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Currently accepting new projects and collaborations. Let's build something great together!
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8 border border-[var(--border-color)]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 150, delay: 0.1 }}
                    >
                      <CheckCircle2 size={64} className="text-emerald-500" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">Message Sent!</h3>
                    <p className="text-[var(--text-secondary)]">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }); }}
                      className="mt-2 px-5 py-2.5 rounded-xl glass border border-brand-500/30 text-brand-500 font-medium hover:bg-brand-500/5 transition-all"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-[var(--text-secondary)] flex items-center gap-1.5">
                          <User size={13} /> Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={e => setFormState(p => ({ ...p, name: e.target.value }))}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-[var(--text-secondary)] flex items-center gap-1.5">
                          <Mail size={13} /> Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={e => setFormState(p => ({ ...p, email: e.target.value }))}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-[var(--text-secondary)]">Subject</label>
                      <input
                        type="text"
                        value={formState.subject}
                        onChange={e => setFormState(p => ({ ...p, subject: e.target.value }))}
                        placeholder="Project inquiry, collaboration, etc."
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-[var(--text-secondary)] flex items-center gap-1.5">
                        <MessageSquare size={13} /> Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={e => setFormState(p => ({ ...p, message: e.target.value }))}
                        placeholder="Tell me about your project..."
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
