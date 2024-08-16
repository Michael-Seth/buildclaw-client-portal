"use client";
import React from "react";
import { useReactToPrint } from "react-to-print";
import {
  ContractData,
  ContractSign,
  ContractSignHandles,
} from "@/components/ContractTable";
import PDFTable from "@/components/GeneratePdf";

interface PrintButtonProps {
  data: ContractData[];
  total: number;
  email: string | null;
  name: string | null;
  signature: string | null;
}

export const DownloadButton: React.FC<PrintButtonProps> = ({
  data,
  total,
  email,
  name,
  signature,
}) => {
  const printRef = React.useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Brandmeals Contract Agreement",
  });

  return (
    <>
      <div style={{ display: "none" }}>
        <PDFTable
          ref={printRef}
          data={data}
          total={total}
          email={email}
          name={name}
          signature={signature}
        />
      </div>
      <span className="inline-flex mt-6 overflow-hidden rounded-md border bg-white shadow-sm">
        <button
          onClick={handlePrint}
          className="flex items-center gap-4 border-e px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
        >
          <span>Download</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 9.002C19.175 9.014 20.353 9.111 21.121 9.879C22 10.758 22 12.172 22 15V16C22 18.829 22 20.243 21.121 21.122C20.243 22 18.828 22 16 22H8C5.172 22 3.757 22 2.879 21.122C2 20.242 2 18.829 2 16V15C2 12.172 2 10.758 2.879 9.879C3.647 9.111 4.825 9.014 7 9.002"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 2V15M12 15L9 11.5M12 15L15 11.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </span>
    </>
  );
};
