"use client";
import DefaultLayout from "@/components/DashboardLayout";
import TextContent from "@/components/TextContent";
import React, { useRef, useState } from "react";
import ContractTable, { ContractData } from "../../../components/ContractTable";
import { DownloadButton } from "@/assets/svgs/DownloadIcon";
import PaymentButton from "@/components/PaymentButton";
import ContractContent from "@/components/ContractContent";
import ContractSign, {
  ContractSignHandles,
} from "@/components/ContractSignature";
import { contractData } from "@/constants/utils/data";
import useMyContext from "@/constants/context/useMyContext";

const Contract: React.FC = () => {
  const formRef = useRef<ContractSignHandles>(null);
  const { state, computedTotal, setState } = useMyContext();
  const selectedItems = Array.from(state.values());

  const total = computedTotal;
  const payStackTotal = computedTotal * 100;
  const [isPaymentButtonEnabled, setIsPaymentButtonEnabled] = useState(false);
  const [downloadButton, setDownloadButton] = useState(false);
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    signature: string | null;
  } | null>(null);
  const [showAdditionalComponents, setShowAdditionalComponents] =
    useState(false);

  const handleProceed = () => {
    console.log("state", state);

    if (!state || state.size === 0) {
      const firstItem = contractData[0];

      if (firstItem) {
        setState((prev) => {
          const updated = new Map(prev);
          updated.set(firstItem.id, firstItem);
          return updated;
        });
      }
    }

    setShowAdditionalComponents(true);
  };
  const handleUpdateFormData = (isFormValid: boolean) => {
    const data = formRef.current?.getFormData();
    if (isFormValid && data) {
      setFormData(data);
      setIsPaymentButtonEnabled(true);
    } else {
      setIsPaymentButtonEnabled(false);
    }
  };

  return (
    <>
      <TextContent title="Contract Agreement" active />
      <ContractTable data={contractData} onProceed={handleProceed} />
      <DownloadButton
        data={selectedItems}
        total={total}
        email={formData?.email || null}
        name={formData?.fullName || null}
        signature={formData?.signature || null}
        onPaymentSuccessful={true}
      />

      {showAdditionalComponents && (
        <>
          <ContractSign ref={formRef} onFormDataChange={handleUpdateFormData} />
          <div className="w-full flex flex-col md:flex-row my-8 items-center gap-4">
            <PaymentButton
              disabled={!isPaymentButtonEnabled}
              amount={payStackTotal / 2}
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
        </>
      )}
    </>
  );
};

export default Contract;

{
  /*
   */
}
