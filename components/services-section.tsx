// Crafted by Dendi

"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { services } from "@/lib/data"
import type { ServiceItem } from "@/lib/types"
import { ServiceCard } from "./ServiceCard"
import { ServiceModal } from "./ServiceModal"

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Layanan Kami</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            DAMRI menyediakan berbagai layanan transportasi untuk memenuhi kebutuhan perjalanan Anda, mulai dari
            angkutan kota hingga pariwisata.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onSelect={() => setSelectedService(service)} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default ServicesSection
