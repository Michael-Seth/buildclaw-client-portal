"use client";
import React from "react";
import { useReactToPrint } from "react-to-print";
import { ContractData } from "@/components/ContractTable";
import PDFTable from "@/components/GeneratePdf";
import useMyContext from "@/constants/context/useMyContext";

interface PrintButtonProps {
  data: ContractData[];
  total: number;
  email: string | null;
  name: string | null;
  signature: string | null;
  onPaymentSuccessful: boolean;
}

export const DownloadButton: React.FC<PrintButtonProps> = ({
  data,
  total,
  email,
  name,
  signature,
  onPaymentSuccessful,
}) => {
  const printRef = React.useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Brandmeals Contract Agreement",
  });

  const {
    state
  } = useMyContext();

  
  return (
    <>
      <span className="inline-flex mt-6 overflow-hidden rounded-md border bg-white shadow-sm">
        <button
          onClick={handlePrint}
          className={`flex items-center gap-4 border-e px-4 py-2 text-sm font-medium bg-red-950 focus:relative ${
            !onPaymentSuccessful ? "cursor-not-allowed bg-gray-300 text-gray-300" : " "
          }`}
        >
          <span>Download Contract</span>
          
        </button>
      </span>
      {onPaymentSuccessful && (
        <div style={{ display: "none" }}>
          <PDFTable
            ref={printRef}
            total={total}
            email={email}
            name={name}
            signature={signature}
          />
        </div>
      )}
    </>
  );
};
