"use client";
import React from "react";
import { CardProps } from "@/types/interfaces"; // Import the card data type
import Link from "next/link";
import PadlockIcon from "@/assets/svgs/Padlock";
import Contract from "@/app/[customer-name]/contract/page";

interface CardPropsWithActive extends CardProps {
  active: boolean;
}

export function CardOne({
  width,
  height,
  clientName,
  title,
  category,
  description,
  link1,
  active,
}: CardPropsWithActive) {
  return (
    <div
      className={`relative w-${width} h-${height} px-4 pt-6 pb-8 bg-white rounded-md shadow-md dark:bg-gray-800`}
    >
      {!active && (
        <div className="absolute inset-0 w-[40%] mx-auto mt-2 flex flex-col items-center justify-center  bg-opacity-50 rounded-md">
          <PadlockIcon className="text-gray-100 w-6 h-6" />
          <span className="text-white p-2 text-center text-sm font-semibold">
            Sign Contract To Access
          </span>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-light text-gray-800 dark:text-gray-400">
          BM Property
        </span>
        <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
          {active ? category : "Pending"}
        </span>
      </div>

      {active && (
        <>
          <div>
            <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
              {clientName} {title}
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>

          <div>
            <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
              <span>Sign contract:</span>
              <Link
                className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline"
                href={link1}
              >
                Contract
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function CardTwo() {
  return (
    <div>
      <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-800 dark:text-gray-400">
            Courses and MOOCs
          </span>
          <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
            psychology
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
            AP® Psychology - Course 5: Health and Behavior
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            eligendi similique exercitationem optio libero vitae accusamus
            cupiditate laborum eos.
          </p>
        </div>

        <div>
          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <span>Visit on:</span>
            <a
              className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline"
              role="link"
            >
              edx.org
            </a>
            <span>or</span>
            <a
              className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline"
              role="link"
            >
              classNamecentral.com
            </a>
          </div>

          <div className="flex items-center justify-center mt-4">
            <a
              className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              role="link"
              aria-label="twitter link"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
              </svg>
            </a>

            <a
              className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              role="link"
              aria-label="share link"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
