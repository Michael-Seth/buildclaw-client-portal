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
  const { state, computedTotal } = useMyContext();

  const total = computedTotal;
  const payStackTotal = computedTotal * 100;
  const [isPaymentButtonEnabled, setIsPaymentButtonEnabled] = useState(false);
  const [downloadButton, setDownloadButton] = useState(false);
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    signature: string | null;
  } | null>(null);
  const [showAdditionalComponents, setShowAdditionalComponents] = useState(false); // New state for controlling visibility


  const handleProceed = () => {
    setShowAdditionalComponents(true); // Show additional components when proceed button is clicked
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
    <DefaultLayout>
      <ContractTable data={contractData} onProceed={handleProceed}  />
      {showAdditionalComponents && (
        <>
          <ContractSign ref={formRef} onFormDataChange={handleUpdateFormData} />
          <PaymentButton
            disabled={!isPaymentButtonEnabled}
            amount={payStackTotal}
            onPaymentSuccess={() => setDownloadButton(true)}
          />
          <DownloadButton
            data={contractData}
            total={total}
            email={formData?.email || null}
            name={formData?.fullName || null}
            signature={formData?.signature || null}
            onPaymentSuccessful={downloadButton}
          />
        </>
      )}
    </DefaultLayout>
  );
};

export default Contract;

{
  /* <TextContent title="Contract Agreement" active />
   */
}
