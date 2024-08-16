"use client";
import React, { createContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface MyContextType {
  state: Set<string>;
  setState: (value: Set<string> | ((val: Set<string>) => Set<string>)) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useLocalStorage<Set<string>>('addedServices', new Set());


  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
