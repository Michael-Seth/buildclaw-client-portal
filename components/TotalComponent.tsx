"use client"
import { formatPrice } from '@/constants/utils/helpers';
import React from 'react';

interface TotalAndProceedProps {
  computedTotal: number;
  onProceed: () => void;
}

const TotalAndProceed: React.FC<TotalAndProceedProps> = ({ computedTotal, onProceed }) => {
  return (
    <div className="mt-6 sm:flex sm:items-center sm:justify-between">
      {computedTotal > 0 && (
        <div className="text-lg text-gray-600">
          Total:
          <span className="font-medium text-xl ml-5 text-gray-700">
            {formatPrice(computedTotal)}
          </span>
        </div>
      )}

      <div className="flex items-center cursor-pointer mt-4 gap-x-4 sm:mt-0">
        <span
          onClick={onProceed}
          className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <span>Proceed</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default TotalAndProceed;
