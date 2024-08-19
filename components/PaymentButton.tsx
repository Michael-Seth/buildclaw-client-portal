import useMyContext from "@/constants/context/useMyContext";
import { NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY } from "@/constants/http/config";
import { formatPrice } from "@/constants/utils/helpers";
import React from "react";
import { PaystackButton } from "react-paystack";

interface PaymentButtonProps {
  disabled: boolean;
  amount: number;
  onPaymentSuccess: () => void;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  disabled,
  amount,
  onPaymentSuccess,
}) => {
  const {
    state,
    computedTotal,
    selectedPackage,
    recipient,
    clientName,
    pendingBalance,
  } = useMyContext();
  const partPaymentConfig = {
    reference: new Date().getTime().toString(),
    email: "michaelseth@gmail.com",
    amount: (computedTotal / 2) * 100,
    publicKey: NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  };
  const fullPaymentConfig = {
    reference: new Date().getTime().toString(),
    email: "michaelseth@gmail.com",
    amount: computedTotal * 100,
    publicKey: NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  };

  const handlePaystackSuccessAction = async (
    reference: Record<any, string>
  ) => {
    const selectedItems = Array.from(state.values());

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

    onPaymentSuccess();
  };

  const handlePaystackCloseAction = () => {
    console.log("User closed Payment");
  };

  const partPaymentProps = {
    ...partPaymentConfig,
    text: "Pay 50%",
    onSuccess: (reference: Record<any, string>) =>
      handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  const fullPaymentProps = {
    ...fullPaymentConfig,
    text: "Pay in full",
    onSuccess: (reference: Record<any, string>) =>
      handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="w-full flex flex-row flex-wrap items-center gap-6">
      <PaystackButton
        {...partPaymentProps}
        className={`block py-2 my-8 l px-8 rounded  text-sm tracking-wide transition-colors duration-200 ${
          disabled ? "bg-gray-400 cursor-not-allowed" : "bg-slate-900"
        } text-white`}
        disabled={disabled}
      />
      <PaystackButton
        {...fullPaymentProps}
        className={`block py-2 my-8 l px-8 rounded  text-sm tracking-wide transition-colors duration-200 ${
          disabled ? "bg-gray-400 cursor-not-allowed" : "bg-slate-900"
        } text-white`}
        disabled={disabled}
      />
    </div>
  );
};

export default PaymentButton;
