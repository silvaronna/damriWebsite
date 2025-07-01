// Crafted by Dendi

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { XMarkIcon, ArrowRightIcon, ClockIcon, UsersIcon, WifiIcon, BoltIcon } from '@heroicons/react/24/solid';
import type { ServiceItem, Destination, BookingData, ModalView } from '@/lib/types';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { BookingFormView } from './BookingForm';
import { BookingConfirmationView } from './ConfirmationView';
import Image from 'next/image';

interface ServiceModalProps {
  service: ServiceItem;
  onClose: () => void;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};

const modalVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15, ease: 'linear' } },
  exit: { opacity: 0, transition: { duration: 0.1, ease: 'linear' } },
};

const FacilityIcon = ({ icon: Icon, label }: { icon: React.ElementType, label: string }) => (
  <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200/80 shadow-sm">
    <div className="bg-blue-100/70 p-2 rounded-lg">
      <Icon className="w-5 h-5 text-blue-700" />
    </div>
    <span className="text-sm font-semibold text-gray-800">{label}</span>
  </div>
);

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const [view, setView] = useState<ModalView>('details');
  const [bookingInfo, setBookingInfo] = useState<{ data: BookingData; destination: Destination } | null>(null);

  useBodyScrollLock(true);

  const handleBookingSubmit = (data: BookingData, destination: Destination) => {
    setBookingInfo({ data, destination });
    setView('confirmed');
  };

  const resetFlow = () => {
    setBookingInfo(null);
    setView('details');
  };

  const renderContent = () => {
    switch (view) {
      case 'booking':
        return (
          <motion.div
            key="booking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'linear' }}
          >
            <BookingFormView service={service} onBack={() => setView('details')} onSubmit={handleBookingSubmit} />
          </motion.div>
        );
      case 'confirmed':
        if (!bookingInfo) return null;
        return (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'linear' }}
          >
            <BookingConfirmationView service={service} bookingData={bookingInfo.data} destination={bookingInfo.destination} onBookAgain={resetFlow} />
          </motion.div>
        );
      case 'details':
      default:
        return (
          <motion.div
            key="details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'linear' }}
            className="flex h-full flex-col"
          >
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl mb-3">
                {service.title}
              </h2>
              <p className="text-base leading-relaxed text-gray-600 mb-8">
                {service.longDescription || service.description}
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-5">Fasilitas Perjalanan</h3>
                <div className="grid grid-cols-2 gap-4">
                  {service.destinations[0]?.duration && (
                    <FacilityIcon icon={ClockIcon} label={`${service.destinations[0].duration} perjalanan`} />
                  )}
                  <FacilityIcon icon={UsersIcon} label="Kursi Nyaman" />
                  <FacilityIcon icon={WifiIcon} label="AC & WiFi" />
                  <FacilityIcon icon={BoltIcon} label="Charger USB" />
                </div>
              </div>
            </div>
            <div className="mt-auto border-t border-gray-200/80 pt-8">
              <motion.button
                onClick={() => setView('booking')}
                className="w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-lg font-bold text-white shadow-md transition-all duration-150 hover:brightness-110 active:brightness-100"
                whileTap={{ scale: 0.99 }}
              >
                <span>Pesan Sekarang</span>
                <ArrowRightIcon className="h-6 w-6" />
              </motion.button>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        layoutId={`service-card-${service.title}`}
        className="relative flex h-full max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 rounded-full border border-gray-200/70 bg-white/50 p-2 text-gray-600 backdrop-blur-md transition-colors hover:border-gray-300 hover:text-gray-900"
          aria-label="Tutup"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="relative h-64 w-full md:h-auto md:w-2/5">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-8 md:p-10">
            <div className="overflow-y-auto">
                <AnimatePresence mode="wait">
                    {renderContent()}
                </AnimatePresence>
            </div>
        </div>

      </motion.div>
    </motion.div>
  );
};
