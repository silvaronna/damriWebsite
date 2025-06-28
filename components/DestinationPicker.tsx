import React from 'react';
import { motion } from 'framer-motion';
import type { Destination } from '@/lib/types';

interface DestinationPickerProps {
  destinations: Destination[];
  selected: Destination | null;
  onSelect: (dest: Destination) => void;
}

const formatPrice = (price: number) => {
  if (price <= 0) return 'Gratis';
  const formatted = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
  return formatted.replace('IDR', 'Rp');
};

export const DestinationPicker: React.FC<DestinationPickerProps> = ({ destinations, selected, onSelect }) => {
  return (
    <div className="mb-6">
        <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">Pilih Tujuan Anda</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {destinations.map((dest) => (
                <motion.div
                    key={dest.id}
                    onClick={() => onSelect(dest)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        selected?.id === dest.id 
                            ? 'border-red-600 bg-red-50 dark:bg-red-600/10 shadow-lg' 
                            : 'border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="flex justify-between items-start">
                        <h5 className="font-bold text-gray-900 dark:text-white">{dest.name}</h5>
                        {dest.price > 0 && (
                            <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                                {formatPrice(dest.price)}
                            </span>
                        )}
                    </div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <p><span className="font-medium">Durasi:</span> {dest.duration}</p>
                        <p><span className="font-medium">Jadwal:</span> {dest.departureTimes.join(', ')}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  );
};
