"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ContractData } from "@/components/ContractTable";
import { Plan } from "@/components/PricingCard";

// interface MyContextType {
//   state: Set<string>;
//   setState: (value: Set<string> | ((val: Set<string>) => Set<string>)) => void;
// }

export interface Item {
  id: string;
  serviceName: string;
  price: number;
  status: string;
}

interface MyContextProps {
  state: Map<string, Item>;
  setState: React.Dispatch<React.SetStateAction<Map<string, Item>>>;
  computedTotal: number;
  setComputedTotal: React.Dispatch<React.SetStateAction<number>>;
  recipient: string;
  setRecipient: React.Dispatch<React.SetStateAction<string>>;
  clientName: string;
  setClientName: React.Dispatch<React.SetStateAction<string>>;
  selectedPackage: Plan | null;
  setSelectedPackage: React.Dispatch<React.SetStateAction<Plan | null>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  pendingBalance: number;
  setPendingBalance: React.Dispatch<React.SetStateAction<number>>;
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
  const [computedTotal, setComputedTotal] = useLocalStorage<number>(
    "total",
    400000
  ); // Default total
  const [recipient, setRecipient] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [selectedPackage, setSelectedPackage] = useState<Plan | null>(null);
  const [status, setStatus] = useState<string>("");
  const [pendingBalance, setPendingBalance] = useState<number>(0);

  useEffect(() => {
    const total = data.reduce((sum, item) => {
      const price = item.price > 0 && state.has(item.id) ? item.price : 0;
      return sum + price;
    }, 400000);
    setComputedTotal(total);
  }, [state, data]);

  return (
    <MyContext.Provider
      value={{
        state,
        setState,
        computedTotal,
        setComputedTotal,
        recipient,
        setRecipient,
        clientName,
        setClientName,
        selectedPackage,
        setSelectedPackage,
        status,
        setStatus,
        pendingBalance,
        setPendingBalance,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
