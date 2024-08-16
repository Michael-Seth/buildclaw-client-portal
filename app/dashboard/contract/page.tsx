"use client";
import DefaultLayout from "@/components/DashboardLayout";
import TextContent from "@/components/TextContent";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import {
  ContractData,
  ContractSign,
  ContractSignHandles,
} from "../../../components/ContractTable";
import { DownloadButton } from "@/assets/svgs/DownloadIcon";
import PaymentButton from "@/components/PaymentButton";
import ContractContent from "@/components/ContractContent";
const ContractTable = dynamic(
  () => import("../../../components/ContractTable"),
  { ssr: false }
);

export const contractData = [
  {
    id: "1",
    serviceName: "Event ticket sales",
    price: 150000,
    status: "Available",
  },
  {
    id: "2",
    serviceName: "AI Chatbot",
    price: 0,
    status: "Unavailable",
  },
];

const calculateTotal = (data: ContractData[]): number => {
  const defaultTotal = 600000;
  return data.reduce((sum, item) => {
    return sum + (item.price > 0 ? item.price : 0);
  }, defaultTotal);
};

const total = calculateTotal(contractData);

function Contract() {
  const formRef = useRef<ContractSignHandles>(null);
  const [formData, setFormData] = useState<{ fullName: string; email: string; signature: string | null } | null>(null);

  const handleUpdateFormData = () => {
    const data = formRef.current?.getFormData();
    if (data) setFormData(data);
  };

  return (
    <DefaultLayout>
      <TextContent title="Contract Agreement" active />
      {/* <ContractContent /> */}
      <ContractTable data={contractData} total={total} />
      <ContractSign ref={formRef} onFormDataChange={handleUpdateFormData} />
      <PaymentButton />
      <DownloadButton
        data={contractData}
        total={total}
        email={formData?.email || null}
        name={formData?.fullName || null}
        signature={formData?.signature || null}
      />
    </DefaultLayout>
  );
}

export default Contract;
