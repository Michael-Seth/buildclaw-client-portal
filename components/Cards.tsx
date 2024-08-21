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
      className={`relative w-${width} h-${height} px-4 pt-6 pb-8 bg-gray-900 rounded-md shadow-md`}
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
        <span className="px-3 py-1 text-xs text-gray-900 uppercase bg-yellow rounded-full">
          {active ? category : "Pending"}
        </span>
      </div>

      {active && (
        <>
          <div>
            <h1 className="mt-2 text-lg font-semibold text-white">
              {clientName} {title}
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              {description}
            </p>
          </div>

          <div>
            <div className="flex items-center mt-2 text-gray-200">
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