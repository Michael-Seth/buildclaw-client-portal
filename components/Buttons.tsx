"use client";
import React, { useState } from "react";
import Link from "next/link";

export function GoogleSigninButton({ text }: { text: string }) {
  return (
    <button className="flex w-full items-center justify-center text-sm gap-3.5 rounded-lg border border-stroke p-[15px] font-medium hover:bg-opacity-50 bg-[#f7f7f7]">
      <span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1715_17244)">
            <path
              d="M19.999 10.2216C20.0111 9.53416 19.9387 8.84776 19.7834 8.17725H10.2031V11.8883H15.8266C15.7201 12.539 15.4804 13.1618 15.1219 13.7194C14.7634 14.2769 14.2935 14.7577 13.7405 15.1327L13.7209 15.257L16.7502 17.5567L16.96 17.5772C18.8873 15.8328 19.9986 13.266 19.9986 10.2216"
              fill="#4285F4"
            />
            <path
              d="M10.2016 19.9998C12.9566 19.9998 15.2695 19.1109 16.959 17.5775L13.739 15.133C12.8774 15.722 11.7209 16.1332 10.2016 16.1332C8.91122 16.1258 7.656 15.7203 6.61401 14.9744C5.57201 14.2285 4.79616 13.1799 4.39653 11.9775L4.27694 11.9875L1.12711 14.3764L1.08594 14.4886C1.93427 16.1455 3.23617 17.5384 4.84606 18.5117C6.45596 19.485 8.31039 20.0002 10.202 19.9998"
              fill="#34A853"
            />
            <path
              d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
              fill="#FBBC05"
            />
            <path
              d="M10.202 3.86687C11.6641 3.84462 13.0783 4.37827 14.1476 5.35583L17.0274 2.60021C15.1804 0.902092 12.7344 -0.0296414 10.202 0.000207357C8.31041 -0.000233694 6.456 0.514977 4.8461 1.48823C3.23621 2.46148 1.93429 3.85441 1.08594 5.51125L4.38555 8.02249C4.78912 6.8203 5.56754 5.77255 6.61107 5.02699C7.6546 4.28143 8.9106 3.87565 10.202 3.86687Z"
              fill="#EB4335"
            />
          </g>
          <defs>
            <clipPath id="clip0_1715_17244">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      {text} with Google
    </button>
  );
}

export function SigninWithPassword() {
  const [data, setData] = useState({
    remember: false,
  });

  return (
    <form>
      <div className="">
        <div className="pb-5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-500"
            >
              Username
            </label>
          </div>
          <div className="relative flex items-center mt-2">
            <div className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.11756 2.979H12.8877C14.5723 2.97899 15.9066 2.97898 16.9509 3.11938C18.0256 3.26387 18.8955 3.56831 19.5815 4.25431C20.2675 4.94031 20.5719 5.81018 20.7164 6.8849C20.8568 7.92918 20.8568 9.26351 20.8568 10.9481V11.0515C20.8568 12.7362 20.8568 14.0705 20.7164 15.1148C20.5719 16.1895 20.2675 17.0594 19.5815 17.7454C18.8955 18.4314 18.0256 18.7358 16.9509 18.8803C15.9066 19.0207 14.5723 19.0207 12.8876 19.0207H9.11756C7.43295 19.0207 6.09861 19.0207 5.05433 18.8803C3.97961 18.7358 3.10974 18.4314 2.42374 17.7454C1.73774 17.0594 1.4333 16.1895 1.28881 15.1148C1.14841 14.0705 1.14842 12.7362 1.14844 11.0516V10.9481C1.14842 9.26351 1.14841 7.92918 1.28881 6.8849C1.4333 5.81018 1.73774 4.94031 2.42374 4.25431C3.10974 3.56831 3.97961 3.26387 5.05433 3.11938C6.09861 2.97898 7.43294 2.97899 9.11756 2.979ZM5.23755 4.48212C4.3153 4.60611 3.78396 4.83864 3.39602 5.22658C3.00807 5.61452 2.77554 6.14587 2.65155 7.06812C2.5249 8.01014 2.52344 9.25192 2.52344 10.9998C2.52344 12.7478 2.5249 13.9895 2.65155 14.9316C2.77554 15.8538 3.00807 16.3852 3.39602 16.7731C3.78396 17.161 4.3153 17.3936 5.23755 17.5176C6.17957 17.6442 7.42135 17.6457 9.16927 17.6457H12.8359C14.5839 17.6457 15.8256 17.6442 16.7677 17.5176C17.6899 17.3936 18.2213 17.161 18.6092 16.7731C18.9971 16.3852 19.2297 15.8538 19.3537 14.9316C19.4803 13.9895 19.4818 12.7478 19.4818 10.9998C19.4818 9.25192 19.4803 8.01014 19.3537 7.06812C19.2297 6.14587 18.9971 5.61452 18.6092 5.22658C18.2213 4.83864 17.6899 4.60611 16.7677 4.48212C15.8256 4.35546 14.5839 4.354 12.8359 4.354H9.16927C7.42135 4.354 6.17958 4.35546 5.23755 4.48212ZM4.97445 6.89304C5.21753 6.60135 5.65104 6.56194 5.94273 6.80502L7.92172 8.45418C8.77693 9.16685 9.37069 9.66005 9.87197 9.98246C10.3572 10.2945 10.6863 10.3993 11.0026 10.3993C11.3189 10.3993 11.648 10.2945 12.1332 9.98246C12.6345 9.66005 13.2283 9.16685 14.0835 8.45417L16.0625 6.80502C16.3542 6.56194 16.7877 6.60135 17.0308 6.89304C17.2738 7.18473 17.2344 7.61825 16.9427 7.86132L14.9293 9.5392C14.1168 10.2163 13.4582 10.7651 12.877 11.1389C12.2716 11.5283 11.6819 11.7743 11.0026 11.7743C10.3233 11.7743 9.73364 11.5283 9.12818 11.1389C8.54696 10.7651 7.88843 10.2163 7.07594 9.5392L5.06248 7.86132C4.77079 7.61825 4.73138 7.18473 4.97445 6.89304Z"
                  fill=""
                />
              </svg>
            </div>

            <input
              type="text"
              placeholder="Enter your username"
              className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>

        <div className="pb-5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-500"
            >
              Password
            </label>
          </div>
          <div className="relative flex items-center mt-2">
            <button className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fill-rule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <input
              type="password"
              placeholder="********"
              className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>

        <div className="mb-4.5">
          <button
            type="submit"
            className="flex w-full cursor-pointer text-sm items-center justify-center gap-2 rounded-lg bg-blue-500 p-4 font-medium text-white transition hover:bg-opacity-90"
          >
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}
