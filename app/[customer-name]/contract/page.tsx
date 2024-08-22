"use client";
import React, { useRef, useState } from "react";
import { DownloadButton } from "@/assets/svgs/DownloadIcon";
// import PaymentButton from "@/components/PaymentButton";
import ContractSign, {
  ContractSignHandles,
} from "@/components/ContractSignature";
import { contractData } from "@/constants/utils/data";
import useMyContext from "@/constants/context/useMyContext";
import dynamic from "next/dynamic";
const PaymentButton = dynamic(
  () => import("../../../components/PaymentButton"),
  { ssr: false }
);
const TextContent = dynamic(
  () => import("../../../components/TextContent"),
  { ssr: false }
);

const ContractTable = dynamic(
  () => import("../../../components/ContractTable"),
  { ssr: false }
);

const TotalAndProceed = dynamic(
  () => import("../../../components/TotalComponent"),
  { ssr: false }
);

const Contract: React.FC = () => {
  const formRef = useRef<ContractSignHandles>(null);
  const { state, selectedPackage, computedTotal, setState, showToast, setPendingBalance } = useMyContext();
  const selectedItems = Array.from(state.values());

  const total = computedTotal;
  const payStackTotal = computedTotal * 100;
  const payStackHalfTotal = (computedTotal / 2) * 100;

  const [isPaymentButtonEnabled, setIsPaymentButtonEnabled] = useState(false);
  const [downloadButton, setDownloadButton] = useState(false);
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    signature: string | null;
  } | null>(null);
  const [showAdditionalComponents, setShowAdditionalComponents] =
    useState(false);

  const handleUpdateFormData = (isFormValid: boolean) => {
    const data = formRef.current?.getFormData();
    if (isFormValid && data) {
      setFormData(data);
      setIsPaymentButtonEnabled(true);
    } else {
      setIsPaymentButtonEnabled(false);
    }
  };

  const handleProceed = () => {
    if (!state || state.size === 0 && !selectedPackage) {
      const firstItem = contractData[0];
      const aPackage = contractData[0];

      if (firstItem) {
        setState((prev) => {
          const updated = new Map(prev);
          updated.set(firstItem.id, firstItem);
          return updated;
        });
      }
    }

    if (!selectedPackage) {
      const firstItem = contractData[0];

      if (firstItem) {
        setState((prev) => {
          const updated = new Map(prev);
          updated.set(firstItem.id, firstItem);
          return updated;
        });
      }
      showToast("Items processed. Please scroll up")
    }

    setPendingBalance(payStackHalfTotal);

    setShowAdditionalComponents(true);
  };

  return (
    <>
      <TextContent title="Contract Agreement" active />
      <ContractTable data={contractData} />
      <TotalAndProceed computedTotal={computedTotal} onProceed={handleProceed} />

      {showAdditionalComponents && (
        <>
          <ContractSign ref={formRef} onFormDataChange={handleUpdateFormData} />
          <div className="w-full flex flex-col md:flex-row my-8 items-center gap-4">
            <PaymentButton
              disabled={!isPaymentButtonEnabled}
              amount={payStackHalfTotal}
              text={"Pay 50%"}
              onPaymentSuccess={() => setDownloadButton(true)}
            />
            <PaymentButton
              disabled={!isPaymentButtonEnabled}
              amount={payStackTotal}
              text={"Pay Full"}
              onPaymentSuccess={() => setDownloadButton(true)}
            />
          </div>
          <DownloadButton
            data={selectedItems}
            total={total}
            email={formData?.email || null}
            name={formData?.fullName || null}
            signature={formData?.signature || null}
            onPaymentSuccessful={downloadButton}
          />
        </>
      )}
    </>
  );
};

export default Contract;
