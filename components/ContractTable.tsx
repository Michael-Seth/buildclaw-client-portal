"use client";
import { Item } from "@/constants/context/MyContext";
// import { DownloadButton } from "@/assets/svgs/DownloadIcon";
import useMyContext from "@/constants/context/useMyContext";
import { formatPrice } from "@/constants/utils/helpers";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface ContractData {
  id: string;
  serviceName: string;
  price: number;
  status: string;
}

interface ContractTableProps {
  data: ContractData[];
  total?: number;
  onProceed: () => void; // Add onProceed prop
}

const ContractTable = forwardRef<HTMLDivElement, ContractTableProps>(
  ({ data, onProceed }, ref) => {
    const { state, setState, computedTotal, setComputedTotal } = useMyContext();

    const handleToggle = (item: Item) => {
      setState((prev) => {
        const updated = new Map(prev);

        if (updated.has(item.id)) {
          updated.delete(item.id);
        } else {
          updated.set(item.id, item);
        }

        const newComputedTotal = data.reduce((sum, dataItem) => {
          const itemPrice =
            dataItem.price > 0 && updated.has(dataItem.id) ? dataItem.price : 0;
          return sum + itemPrice;
        }, 400000); // defaultTotal

        setComputedTotal(newComputedTotal);

        return updated;
      });
    };

    return (
      <section className="container px-4 mx-auto my-8" ref={ref}>
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-lg font-medium text-gray-800">
            Additional Services
          </h2>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-fixed">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Service Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Price
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-white whitespace-normal break-words">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <div className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                                𖧹
                              </div>
                              <div>
                                <h2 className="font-normal text-gray-800 text-base dark:text-white">
                                  {item.serviceName}
                                </h2>
                                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                  {item.status}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-normal text-gray-700 dark:text-gray-200 whitespace-normal break-words">
                          {item.price > 0
                            ? formatPrice(item.price)
                            : "Coming soon"}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-normal break-words">
                          <button
                            onClick={() => item.price > 0 && handleToggle(item)}
                            disabled={item.price === 0 || item.price === 400000}
                            className={`flex items-center justify-center w-full px-5 py-2 text-sm tracking-wide transition-colors duration-200 ${
                              item.price === 0 || item.price === 400000
                                ? "bg-blue-200 text-gray-600 cursor-not-allowed"
                                : state.has(item.id)
                                ? "bg-red-500 hover:bg-red-600 text-white"
                                : "bg-blue-500 hover:bg-blue-600 text-white"
                            } rounded-lg shrink-0 sm:w-auto gap-x-2`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              {item.price === 0 || item.price === 400000 ? (
                                <path
                                  fillRule="evenodd"
                                  d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                                  clipRule="evenodd"
                                />
                              ) : (
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              )}
                            </svg>
                            <span>
                              {item.price === 0
                                ? ""
                                : state.has(item.id)
                                ? "Remove"
                                : item.price === 400000
                                ? "Added"
                                : "Add"}
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 sm:flex sm:items-center sm:justify-between">
                <div className="text-lg text-gray-600">
                  Total:
                  <span className="font-medium text-xl ml-5 text-gray-700">
                    {formatPrice(computedTotal)}
                  </span>
                </div>

                <div className="flex items-center cursor-pointer mt-4 gap-x-4 sm:mt-0">
                  <span  onClick={onProceed} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
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
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default ContractTable;
