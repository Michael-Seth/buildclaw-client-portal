"use client";
import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      const parsedItem = item ? JSON.parse(item, reviver) : initialValue;
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
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore, replacer));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}


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
