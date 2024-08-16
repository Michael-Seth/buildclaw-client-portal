"use client";
import { useContext } from 'react';
import MyContext from './MyContext';

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export default useMyContext;
