"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDownIcon } from "lucide-react"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToSkills = () => {
    document.querySelector("#skills")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section id="hero" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center min-h-[90vh]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Creative Developer & Problem Solver
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I craft beautiful, functional digital experiences with a focus on user-centered design and clean code.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button onClick={scrollToSkills} className="group">
                Explore My Work
                <ArrowDownIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto lg:mx-0 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/pfp.jpeg?height=450&width=450" alt="Profile" fill className="object-cover scale-125" priority />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-60" />
          </motion.div>
        </div>
      </div>
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ArrowDownIcon className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  )
}
