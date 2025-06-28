import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import type { ServiceItem, BookingData, Destination } from '@/lib/types';

interface BookingConfirmationViewProps {
  service: ServiceItem;
  bookingData: BookingData;
  destination: Destination;
  onBookAgain: () => void;
}

export const BookingConfirmationView: React.FC<BookingConfirmationViewProps> = ({ service, bookingData, destination, onBookAgain }) => {
  const totalPrice = destination.price * bookingData.passengers;
  const formattedDate = new Date(bookingData.date).toLocaleDateString('id-ID', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const bookingDetails = [
    { label: 'Kode Booking', value: `DMR-${Math.floor(100000 + Math.random() * 900000)}` },
    { label: 'Layanan', value: service.title },
    { label: 'Rute', value: destination.name },
    { label: 'Tanggal Keberangkatan', value: formattedDate },
    { label: 'Jumlah Penumpang', value: `${bookingData.passengers} Orang` },
    { label: 'Metode Pembayaran', value: 'Transfer Bank' },
    { label: 'Status Pembayaran', value: 'Menunggu Pembayaran' },
  ];

  return (
    <motion.div
      key="confirmation"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        } 
      }}
      exit={{ opacity: 0, y: -20 }}
      className="h-full flex flex-col"
    >
      <div className="text-center mb-8">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 bg-green-100 rounded-full opacity-20 animate-ping"></div>
          <div className="relative flex items-center justify-center w-full h-full bg-green-100 rounded-full">
            <CheckCircleIcon className="w-10 h-10 text-green-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Pemesanan Berhasil!</h3>
        <p className="text-gray-600">
          Terima kasih, <span className="font-semibold text-gray-900">{bookingData.name}</span>. Detail pemesanan telah dikirim ke
        </p>
        <p className="text-blue-600 font-medium">{bookingData.email}</p>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-100 bg-gray-50">
          <h4 className="font-semibold text-gray-900 flex items-center">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Detail Pemesanan
          </h4>
        </div>
        <div className="p-5">
          <ul className="space-y-3">
            {bookingDetails.map((item, index) => (
              <li key={index} className="flex justify-between text-sm">
                <span className="text-gray-600">{item.label}</span>
                <span className="font-medium text-gray-900 text-right">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5 border-t-2 border-dashed border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-base font-medium text-gray-700">Total Pembayaran</span>
            <span className="text-xl font-bold text-blue-700">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(totalPrice)}</span>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6 text-center">
        <button 
          onClick={onBookAgain}
          className="px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          Pesan Layanan Lain
        </button>
      </div>
    </motion.div>
  );
};
