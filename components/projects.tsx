"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Real-Time Chat App",
    description: "A real-time chat application that supports one-on-one messaging and group conversations. Built using WebSockets with a custom Socket.IO server for instant communication between users. Includes features like online status, message delivery updates, and a clean, responsive chat UI.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "Socket.IO", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Secure File Sharing System",
    description: "A secure file sharing platform that allows users to upload, encrypt, and share files via unique links. Includes features like user authentication, file size limits, expiration controls, and end-to-end encryption to ensure privacy and data security.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Express.js", "Tailwind CSS", "Crypto", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "NITC-Hostels Website",
    description: "A dynamic for my college hostel tailored with all the details about hostel facilities,updates about events,gallery containing all the images",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Express.js", "StrapI" ,"Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "Tathva-2024 Website",
    description: "The official Tathva-2024(Annual Technical Fest of NIT Calicut) Website",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Express.js", "StrapI" ,"Tailwind CSS"],
    github: "https://github.com",
    demo: "https://tathva.org",
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              A selection of my recent work, showcasing my skills and expertise.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredId === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
