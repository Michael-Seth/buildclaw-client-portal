// useLocalStorage.tsx
"use client";
import { useState, useEffect } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== "undefined") {
      const storedItem = localStorage.getItem(key);
      if (storedItem) {
        try {
          const parsedItem = JSON.parse(storedItem);
          // Handle conversion if T is a Set
          if (Array.isArray(parsedItem)) {
            return new Set(parsedItem) as T;
          }
          return parsedItem as T;
        } catch {
          return initialValue;
        }
      }
    }
    return initialValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (value instanceof Set) {
        localStorage.setItem(key, JSON.stringify(Array.from(value)));
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
