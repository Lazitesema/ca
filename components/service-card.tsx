"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6">
        <div className="text-4xl">{icon}</div>
        <h3 className="mt-4 text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </Card>
    </motion.div>
  )
}

