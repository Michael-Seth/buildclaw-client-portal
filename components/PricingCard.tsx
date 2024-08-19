import useMyContext from "@/constants/context/useMyContext";
import { formatPrice } from "@/constants/utils/helpers";
import React from "react";

// Define the types for the feature and plan
export interface Feature {
  name: string;
  included: boolean;
}

export interface Plan {
  name: string;
  description: string;
  price: number;
  features: Feature[];
}

// PricingCard component that takes a single plan as a prop
const PricingCard: React.FC<{ plan: Plan }> = ({ plan }) => {

  const { setSelectedPackage } = useMyContext();

  const handleSelect = () => {
    setSelectedPackage(plan);
  }; 

  return (
    <div className="dark:bg-gray-900 max-w-72 mx-auto border rounded-lg dark:border-gray-700">
      <div className="p-6">
        <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">
          {plan.name}
        </h1>

        <p className="mt-4 text-gray-500 dark:text-gray-300 text-xs">
          {plan.description}
        </p>

        <h2 className="mt-4 text-xl font-semibold text-gray-700 sm:text-2xl dark:text-gray-200">
          {plan.price > 0 ? formatPrice(plan.price) : "Contact sales"}
        </h2>

        <button           onClick={handleSelect}
 className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Select
        </button>
      </div>
      <hr className="border-gray-200 dark:border-gray-700" />
      <div className="p-6">
        <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">
          What’s included:
        </h1>
        <div className="mt-8 space-y-4">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 ${
                  feature.included ? "text-blue-500" : "text-red-400"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {feature.included ? (
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
              <span className="mx-4 text-gray-700 dark:text-gray-200 text-sm">
                {feature.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
