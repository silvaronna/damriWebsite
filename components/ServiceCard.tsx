// Crafted by Dendi

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import type { ServiceItem } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

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
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col h-full group cursor-pointer border border-gray-100/50"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-4 right-4 bg-white/90 text-blue-800 text-xs font-bold px-4 py-2 rounded-full shadow-md border border-gray-200/60 backdrop-blur-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            {service.destinations.length} Rute
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 leading-tight tracking-tight mb-2">
            {service.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>
        
        <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
          {minPrice > 0 ? (
            <div>
              <span className="text-xs text-gray-500">Mulai dari</span>
              <p className="text-lg font-bold text-blue-700">{formatPrice(minPrice)}</p>
            </div>
          ) : (
            <p className="text-lg font-bold text-blue-700">Gratis</p>
          )}
          
          <div
            className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 transform group-hover:-translate-y-0.5"
          >
            <span>Detail</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};
