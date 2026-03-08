'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X, Code2 } from "lucide-react"
import { useTheme } from "./ThemeProvider"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
]

export default function Navbar() {

  const { theme, toggleTheme } = useTheme()

  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])


  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          isScrolled
            ? "bg-black/40 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <Code2 size={20} />
            Shoaib Dev
          </a>


          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white transition"
              >
                {link.label}
              </a>
            ))}

          </nav>


          {/* Right side buttons */}
          <div className="flex items-center gap-3">

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>


            {/* Hire me */}
            <a
              href="#contact"
              className="hidden md:flex bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Hire Me
            </a>


            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>

        </div>

      </motion.header>


      {/* Mobile Menu */}
      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 bg-black border-t border-white/10 z-40"
          >

            <nav className="flex flex-col p-6 gap-4">

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-blue-600 text-white text-center py-2 rounded"
              >
                Hire Me
              </a>

            </nav>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  )
}