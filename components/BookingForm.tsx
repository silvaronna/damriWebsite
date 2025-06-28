import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserIcon, 
  EnvelopeIcon,
  PhoneIcon,
  CalendarDaysIcon,
  UsersIcon,
  PencilIcon,
  CreditCardIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import type { ServiceItem, Destination, BookingData } from '@/lib/types';
import { DestinationPicker } from './DestinationPicker';

interface BookingFormViewProps {
  service: ServiceItem;
  onBack: () => void;
  onSubmit: (data: BookingData, destination: Destination) => void;
}

const formViewVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
    exit: { opacity: 0, x: -50 }
};

const InputField = ({ 
    id, 
    name, 
    type, 
    label, 
    icon, 
    required = true, 
    className = '',
    ...props 
  }: any) => (
    <motion.div 
      variants={formViewVariants}
      className={`space-y-1.5 ${className}`}
    >
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            {icon}
          </span>
        )}
        {type === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            required={required}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 min-h-[100px]"
            style={icon ? { paddingLeft: '2.5rem' } : {}}
            {...props}
          />
        ) : type === 'select' ? (
          <div className="relative">
            {icon && (
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                {icon}
              </span>
            )}
            <select
              id={id}
              name={name}
              required={required}
              className="appearance-none w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
              {...props}
            >
              {props.children}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            required={required}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            style={icon ? { paddingLeft: '2.5rem' } : {}}
            {...props}
          />
        )}
      </div>
    </motion.div>
  );

export const BookingFormView: React.FC<BookingFormViewProps> = ({ service, onBack, onSubmit }) => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [bookingData, setBookingData] = useState<BookingData>({
    name: '', email: '', phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Default to tomorrow
    passengers: 1, notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: name === 'passengers' ? parseInt(value) : value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDestination) {
      alert("Silakan pilih tujuan terlebih dahulu.");
      return;
    }
    onSubmit(bookingData, selectedDestination);
  };

  return (
    <motion.div
      key="booking-form"
      variants={formViewVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full flex flex-col"
    >
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <button
            type="button"
            onClick={onBack}
            className="mr-2 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Kembali"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Pesan Tiket</h3>
        </div>
        <p className="text-gray-600 ml-9">Lengkapi detail di bawah untuk memesan tiket {service.title}</p>
      </div>

      <DestinationPicker 
        destinations={service.destinations} 
        selected={selectedDestination} 
        onSelect={setSelectedDestination} 
      />

      <form onSubmit={handleFormSubmit} className="flex-1 flex flex-col">
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField 
              id="name" 
              name="name" 
              type="text" 
              label="Nama Lengkap" 
              value={bookingData.name} 
              onChange={handleInputChange} 
              icon={<UserIcon className="w-5 h-5" />}
            />
            <InputField 
              id="email" 
              name="email" 
              type="email" 
              label="Alamat Email" 
              value={bookingData.email} 
              onChange={handleInputChange} 
              icon={<EnvelopeIcon className="w-5 h-5" />}
            />
            <InputField 
              id="phone" 
              name="phone" 
              type="tel" 
              label="Nomor Telepon" 
              value={bookingData.phone} 
              onChange={handleInputChange} 
              icon={<PhoneIcon className="w-5 h-5" />}
            />
            <InputField 
              id="date" 
              name="date" 
              type="date" 
              label="Tanggal Keberangkatan" 
              min={new Date().toISOString().split('T')[0]} 
              value={bookingData.date} 
              onChange={handleInputChange} 
              icon={<CalendarDaysIcon className="w-5 h-5" />}
            />
            <div className="md:col-span-2">
              <InputField 
                id="passengers" 
                name="passengers" 
                type="select" 
                label="Jumlah Penumpang" 
                value={bookingData.passengers} 
                onChange={handleInputChange}
                icon={<UsersIcon className="w-5 h-5" />}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i+1} value={i+1}>
                    {i+1} {i === 0 ? 'Orang' : 'Orang'}
                  </option>
                ))}
              </InputField>
            </div>
          </div>
          
          <InputField 
            id="notes" 
            name="notes" 
            type="textarea" 
            label="Catatan Tambahan (Opsional)" 
            required={false} 
            value={bookingData.notes} 
            onChange={handleInputChange} 
            icon={<PencilIcon className="w-5 h-5 mt-2" />}
            className="pt-2"
          />
        </div>

        <div className="mt-auto pt-6 border-t border-gray-200">
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
            <button 
              type="button" 
              onClick={onBack}
              className="px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Kembali
            </button>
            <button 
              type="submit" 
              disabled={!selectedDestination}
              className={`inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white shadow-sm transition-colors ${
                selectedDestination 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              <CreditCardIcon className="w-5 h-5 mr-2" />
              Lanjutkan ke Pembayaran
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
