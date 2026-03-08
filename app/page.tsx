import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="orb w-[600px] h-[600px] bg-brand-500/10 dark:bg-brand-500/15 top-[-200px] right-[-100px]" />
        <div className="orb w-[500px] h-[500px] bg-accent-500/10 dark:bg-accent-500/10 bottom-[10%] left-[-150px]" />
        <div className="orb w-[400px] h-[400px] bg-brand-400/8 dark:bg-brand-400/8 top-[50%] right-[20%]" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
