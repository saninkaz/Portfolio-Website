import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
