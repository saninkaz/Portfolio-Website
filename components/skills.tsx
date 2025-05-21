"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Python"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Docker", "Vercel"],
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              A collection of technologies and tools I've mastered throughout my journey.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill) => (
                      <motion.div key={skill} variants={item}>
                        <Badge variant="secondary" className="px-3 py-1 text-sm">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
