// Crafted by Dendi

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import type { ServiceItem } from '@/lib/types';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const minPrice = Math.min(...service.destinations.map(d => d.price));

  return (
    <motion.article
      layoutId={`service-card-${service.title}`}
      onClick={onSelect}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out overflow-hidden flex flex-col h-full group cursor-pointer"
      aria-label={`Lihat detail untuk ${service.title}`}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-200 ease-in-out group-hover:scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-4 right-4 bg-white/90 text-blue-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-md border border-gray-200/60 backdrop-blur-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span>{service.destinations.length} Rute</span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 leading-tight tracking-tight mb-2">
            {service.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500">Mulai dari</p>
              <p className="text-lg font-bold text-blue-600">
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(minPrice)}
              </p>
            </div>
            <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
              <span className="text-sm font-semibold">Lihat Detail</span>
              <ArrowRightIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
