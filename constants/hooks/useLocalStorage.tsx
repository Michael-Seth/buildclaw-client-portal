"use client";
import { useEffect, useState } from "react";


function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    // Only attempt to access localStorage in the browser
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      console.error(error);
    }
  }, [key, initialValue]);

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value: React.SetStateAction<T>) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
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
