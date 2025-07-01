// Crafted by Dendi

import React from 'react';

export const ServiceCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-100/50">
      <div className="relative h-52 bg-gray-200 animate-pulse"></div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="h-6 w-3/4 bg-gray-300 rounded animate-pulse mb-3"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div className="h-6 w-6 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
