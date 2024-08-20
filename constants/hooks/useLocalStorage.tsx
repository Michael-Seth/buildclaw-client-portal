// useLocalStorage.tsx
"use client";
import { useState, useEffect } from "react";

// function useLocalStorage<T>(
//   key: string,
//   initialValue: T
// ): [T, (value: T | ((val: T) => T)) => void] {
//   const [value, setValue] = useState<T>(() => {
//     if (typeof window !== "undefined") {
//       const storedItem = localStorage.getItem(key);
//       if (storedItem) {
//         try {
//           const parsedItem = JSON.parse(storedItem);
//           // Handle conversion if T is a Set
//           if (Array.isArray(parsedItem)) {
//             return new Set(parsedItem) as T;
//           }
//           return parsedItem as T;
//         } catch {
//           return initialValue;
//         }
//       }
//     }
//     return initialValue;
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if (value instanceof Set) {
//         localStorage.setItem(key, JSON.stringify(Array.from(value)));
//       } else {
//         localStorage.setItem(key, JSON.stringify(value));
//       }
//     }
//   }, [key, value]);

//   return [value, setValue];
// }

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      const parsedItem = item ? JSON.parse(item, reviver) : initialValue;
      console.log('Parsed Item:', parsedItem);
      return parsedItem;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value: React.SetStateAction<T>) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      console.log('Value to Store:', valueToStore);
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore, replacer));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}


// Custom replacer and reviver to handle Map
function replacer(key: string, value: any) {
  if (value instanceof Map) {
    return {
      _type: 'Map',
      value: Array.from(value.entries()), // convert Map to array of [key, value]
    };
  }
  return value;
}

function reviver(key: string, value: any) {
  if (value && value._type === 'Map') {
    return new Map(value.value); // convert array back to Map
  }
  return value;
}


export default useLocalStorage;
