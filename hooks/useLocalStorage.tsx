"use client";
import { useState, useEffect } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== "undefined") {
      const storedItem = localStorage.getItem(key);
      return storedItem ? JSON.parse(storedItem) : initialValue;
    }
    return initialValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
