"use client";
import { useEffect } from "react";
import bgDrop from "@/assets/images/brBrown.png";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);

    const timeoutId = setTimeout(() => {
      window.location.reload();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [error]);

  return (
    <div
      className="flex items-center justify-center text-white min-h-screen"
      style={{
        backgroundImage: `url(${bgDrop.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: 0,
        padding: 0,
      }}
    >
      
      <p className=" font-medium text-xl">
        The page will reload automatically in a few seconds.
      </p>
      <button
        className="cursor-pointer px-4 py-2 font-medium tracking-wide mt-4 text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        onClick={() => reset()}
      >
        Reload Now
      </button>
    </div>
  );
}
