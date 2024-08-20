import useMyContext from "@/constants/context/useMyContext";
import {
  NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  NEXT_PUBLIC_SMTP_USER,
} from "@/constants/http/config";
import React, { useCallback, useState } from "react";
import { PaystackButton } from "react-paystack";
import { SuccessModal } from "./Modal";

interface PaymentButtonProps {
  disabled: boolean;
  amount: number;
  text: string;
  onPaymentSuccess: () => void;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  disabled,
  amount,
  text,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const {
    state,
    computedTotal,
    selectedPackage,
    recipient,
    clientName,
    pendingBalance,
  } = useMyContext();

  const paymentConfig = useCallback(
    () => ({
      reference: `txn_${Date.now()}_${Math.floor(Math.random() * 1000000)}`, // Unique reference
      email: NEXT_PUBLIC_SMTP_USER,
      amount: amount,
      publicKey: NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    }),
    [amount]
  );
  // const selectedItems = Array.from(state.values());
  // console.log("selectedItems", selectedItems);
  const handlePaystackSuccessAction = async (
    reference: Record<any, string>
  ) => {
    const selectedItems = Array.from(state.values());
    console.log("selectedItems", selectedItems);
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient,
          subject: "Brandmeals - Service Payment Successful",
          items: selectedItems,
          selectedPackage,
          total: computedTotal,
          status: "Paid",
          pendingBalance,
          clientName,
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully.");
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setIsModalOpen(true); // Open the modal when payment is successful
  };

  const handlePaystackCloseAction = () => {
    console.log("User closed Payment");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const paymentProps = {
    ...paymentConfig(),
    text,
    onSuccess: (reference: Record<any, string>) =>
      handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <>
      <PaystackButton
        {...paymentProps}
        className={`py-4 w-full flex-grow px-8 rounded-md items-center text-sm tracking-wide transition-colors duration-200 ${
          disabled ? "bg-gray-400 cursor-not-allowed" : "bg-slate-900"
        } text-white`}
        disabled={disabled}
      />
      <SuccessModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
export default PaymentButton;
