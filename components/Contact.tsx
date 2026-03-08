/* eslint-disable react/no-unescaped-entities */

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import React from "react"
import { Mail, MessageSquare, User, Send, CheckCircle2, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'shoaibwebx@gmail.com', href: 'mailto:shoaibwebx@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Available Worldwide', href: '#' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: '#' },
]

export default function Contact() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" ref={ref} className="section-padding relative z-10">

      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <span className="font-mono text-sm text-brand-500 tracking-widest uppercase">
            — Get In Touch
          </span>

          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Let's <span className="gradient-text">Work Together</span>
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-gray-400">
            Have a project in mind? I'd love to hear about it.
          </p>

        </motion.div>


        <div className="grid lg:grid-cols-5 gap-8">

          {/* Contact Info */}

          <div className="lg:col-span-2 space-y-6">

            {contactInfo.map((info) => {

              const Icon = info.icon

              return (

                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >

                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
                    <Icon size={18} className="text-brand-500" />
                  </div>

                  <div>
                    <div className="text-xs text-gray-400">{info.label}</div>
                    <div className="text-sm font-medium">{info.value}</div>
                  </div>

                </a>

              )
            })}

          </div>


          {/* Contact Form */}

          <div className="lg:col-span-3">

            <AnimatePresence mode="wait">

              {submitted ? (

                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center space-y-4"
                >

                  <CheckCircle2 size={60} className="text-green-500 mx-auto" />

                  <h3 className="text-2xl font-bold">
                    Message Sent!
                  </h3>

                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormState({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                      })
                    }}
                    className="px-5 py-2 rounded-lg border"
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

                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full p-3 border rounded-lg"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full p-3 border rounded-lg"
                  />

                  <textarea
                    rows={5}
                    required
                    placeholder="Message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full p-3 border rounded-lg"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-black text-white rounded-lg"
                  >

                    {loading ? "Sending..." : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}

                  </button>

                </motion.form>

              )}

            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  )
}