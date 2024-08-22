"use client";
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
  onPaymentSuccess,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const {
    state,
    computedTotal,
    selectedPackage,
    recipient,
    clientName,
    pendingBalance,
    showToast,
    setPendingBalance,
  } = useMyContext();


  const paymentConfig = {
    reference: `txn_${Date.now()}_${Math.floor(Math.random() * 1000000)}`, // Unique reference
    email: recipient,
    firstname: clientName,
    amount: amount,
    channels: ["card"],
    publicKey: NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  };

  const selectedItems = Array.from(state.values());

  const handlePaystackSuccessAction = async (
    reference: Record<any, string>
  ) => {
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
        showToast("Payment successful. An email has been sent to you.");
      } else {
        console.error("Failed to send email.");
      }
      setPendingBalance(0);
      setIsModalOpen(true); // Open the modal when payment is successful
      onPaymentSuccess();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handlePaystackCloseAction = () => {
    console.log("User closed Payment");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const paymentProps = {
    ...paymentConfig,
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
