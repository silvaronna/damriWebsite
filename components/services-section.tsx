// Crafted by Dendi

"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { services } from "@/lib/data"
import type { ServiceItem } from "@/lib/types"
import { ServiceCard } from "./ServiceCard";
import { ServiceCardSkeleton } from "./ServiceCardSkeleton";
import { ServiceFilterControls, type SortOption } from './ServiceFilterControls';
import { ServiceModal } from "./ServiceModal"
import { useLanguage } from "@/context/language-context"

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sortOption, setSortOption] = useState<SortOption>('title');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate a 1.5-second loading time

    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => [...new Set(services.map(s => s.title))], []);

  const filteredAndSortedServices = useMemo(() => {
    const getMinPrice = (service: ServiceItem) => Math.min(...service.destinations.map(d => d.price)) || 0;

    const filtered = selectedCategory === 'Semua'
      ? services
      : services.filter(service => service.title === selectedCategory);

    return [...filtered].sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return getMinPrice(a) - getMinPrice(b);
        case 'price-desc':
          return getMinPrice(b) - getMinPrice(a);
        case 'title':
        default:
          return a.title.localeCompare(b.title);
      }
    });
  }, [selectedCategory, sortOption]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t.services.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl leading-relaxed">{t.services.description}</p>
        </motion.div>

        <ServiceFilterControls 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          sortOption={sortOption}
          onSortChange={setSortOption}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ServiceCardSkeleton key={index} />
              ))
            : filteredAndSortedServices.length > 0
              ? filteredAndSortedServices.map((service) => (
                  <ServiceCard key={service.id} service={service} onSelect={() => setSelectedService(service)} />
                ))
              : (
                <div className="col-span-full text-center py-16">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Layanan tidak ditemukan</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Coba sesuaikan filter atau pilihan urutan Anda.</p>
                </div>
              )}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default ServicesSection
