"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ContractData } from "@/components/ContractTable";
import { Plan } from "@/components/PricingCard";
import SuccessToast from "@/components/Toast";

export interface Item {
  id: string;
  serviceName: string;
  price: number;
  status: string;
}

// useEffect(() => {
//   const total = data.reduce((sum, item) => {
//     const price = item.price > 0 && state.has(item.id) ? item.price : 0;
//     return sum + price;
//   }, 0);
//   setComputedTotal(total);
// }, [state, data]);

interface MyContextProps {
  state: Map<string, Item>;
  setState: React.Dispatch<React.SetStateAction<Map<string, Item>>>;
  computedTotal: number;
  setComputedTotal: React.Dispatch<React.SetStateAction<number>>;
  recipient: string;
  setRecipient: React.Dispatch<React.SetStateAction<string>>;
  signature: string;
  setSignature: React.Dispatch<React.SetStateAction<string>>;
  clientName: string;
  setClientName: React.Dispatch<React.SetStateAction<string>>;
  toastMessage: string | null;
  setToastMessage: React.Dispatch<React.SetStateAction<string | null>>;
  selectedPackage: Plan | null;
  setSelectedPackage: React.Dispatch<React.SetStateAction<Plan | null>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  pendingBalance: number;
  setPendingBalance: React.Dispatch<React.SetStateAction<number>>;
  showToast: (message: string) => void;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyContextProvider: React.FC<{
  children: ReactNode;
  data: ContractData[];
}> = ({ children, data }) => {
  const [state, setState] = useLocalStorage<Map<string, Item>>(
    "addedServices",
    new Map()
  );
  const [computedTotal, setComputedTotal] = useLocalStorage<number>("total", 0);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [recipient, setRecipient] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [signature, setSignature] = useState<string>("");
  const [selectedPackage, setSelectedPackage] = useLocalStorage<Plan | null>(
    "selectedPackage",
    null
  );

  const [status, setStatus] = useState<string>("");
  const [pendingBalance, setPendingBalance] = useState<number>(0);

  useEffect(() => {
    // Calculate total based on the state and data
    const baseTotal = data.reduce((sum, item) => {
      const price = item.price > 0 && state.has(item.id) ? item.price : 0;
      return sum + price;
    }, 0);

    // Add price of selectedPackage if it exists
    const selectedPackageTotal = selectedPackage ? selectedPackage.price : 0;

    // Set the computed total
    setComputedTotal(baseTotal + selectedPackageTotal);
  }, [state, data, selectedPackage]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null); // Hide toast after a delay
    }, 6000);
  };

  return (
    <MyContext.Provider
      value={{
        state,
        setState,
        computedTotal,
        setComputedTotal,
        recipient,
        setRecipient,
        signature,
        setSignature,
        clientName,
        setClientName,
        selectedPackage,
        setSelectedPackage,
        status,
        setStatus,
        toastMessage,
        setToastMessage,
        showToast,
        pendingBalance,
        setPendingBalance,
      }}
    >
      {toastMessage && <SuccessToast message={toastMessage} />}
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
