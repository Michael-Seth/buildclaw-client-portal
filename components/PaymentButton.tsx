import { PAYSTACK_PUBLIC_KEY } from "@/constants/http/config";
import React from "react";
import { PaystackButton } from "react-paystack";

const config = {
  reference: new Date().getTime().toString(),
  email: "michaelseth@gmail.com",
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: "pk_test_d2664b1731f8e6b57260d6f6032e4a2b854662af",
};

const PaymentButton = () => {
  const handlePaystackSuccessAction = (reference: Record<any, string>) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("User closed Payment");
  };

  const componentProps = {
    ...config,
    text: "Pay",
    onSuccess: (reference: Record<any, string>) =>
      handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return <PaystackButton {...componentProps} className="block py-2 my-8 w-full px-8 bg-slate-900 rounded items-center justify-center ext-sm tracking-wide transition-colors duration-200 text-white" />;
};

export default PaymentButton;
