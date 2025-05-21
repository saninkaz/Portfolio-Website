"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-muted-foreground md:text-xl">
                I'm a passionate creative developer with a love for building beautiful, functional digital experiences.
              </p>
            </div>
            {/* <Card className="border-none bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <p>

                </p>
              </CardContent>
            </Card> */}
          </motion.div>
          <motion.div
            className="mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="About Me" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
