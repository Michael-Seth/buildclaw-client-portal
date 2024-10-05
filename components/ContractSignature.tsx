"use client";
import useMyContext from "@/constants/context/useMyContext";
import { Check } from "lucide-react";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import SignatureCanvas from "react-signature-canvas";

export interface ContractSignHandles {
  resetForm: () => void;
  getFormData: () => {
    fullName: string;
    email: string;
    signature: string | null;
  };
}

interface ContractSignProps {
  onFormDataChange?: (isValid: boolean) => void;
}

const ContractSign = forwardRef<ContractSignHandles, ContractSignProps>(
  ({ onFormDataChange }, ref) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [agreementChecked, setAgreementChecked] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const { setRecipient, setClientName, setSignature } = useMyContext();

    const sigCanvas = useRef<SignatureCanvas | null>(null);

    useEffect(() => {
      setIsFormValid(
        fullName.trim() !== "" &&
          email.trim() !== "" &&
          agreementChecked &&
          sigCanvas.current?.isEmpty() === false
      );
    }, [fullName, email, agreementChecked]);

    useEffect(() => {
      setRecipient(email);
      setClientName(fullName);
    }, [email, fullName, setRecipient, setClientName]);

    useImperativeHandle(ref, () => ({
      resetForm: () => {
        setFullName("");
        setEmail("");
        setAgreementChecked(false);
        sigCanvas.current?.clear();
        if (onFormDataChange) onFormDataChange(false);
      },
      getFormData: () => {
        const signature =
          sigCanvas.current?.getTrimmedCanvas().toDataURL("image/png") || null;
        return { fullName, email, signature };
      },
    }));

    // const clearSignature = () => sigCanvas.current?.clear();
    const clearForm = () => {
      setFullName("");
      setEmail("");
      setAgreementChecked(false);
      sigCanvas.current?.clear();
    };
    const saveSignature = () => {
      const signature = sigCanvas.current
        ?.getTrimmedCanvas()
        .toDataURL("image/png");
      if (signature) {
        setSignature(signature);
      }
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (isFormValid) {
        saveSignature();
        if (onFormDataChange) onFormDataChange(true);
      } else {
        if (onFormDataChange) onFormDataChange(false);
      }
    };
    

    return (
      <form onSubmit={handleSubmit} className="space-y-8">
        <label className="flex my-8 items-center gap-4">
          <div className="font-normal text-bases md:flex md:flex-row text-gray-900">
            <div className="flex flex-row justify-start">
              <span>Name: </span>
              <span className="mx-4 w-56 border-b border-gray-500">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full opacity-100 active:opacity-100 focus:opacity-100 focus:outline-none"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </span>
            </div>
          </div>
        </label>
        <label className="flex my-8 items-center gap-4">
          <div className="font-normal text-bases flex items-end text-gray-900">
            <span>Email: </span>
            <span className="mx-4 w-56 border-b border-gray-500">
              <input
                type="email"
                placeholder="yourEmail@example.com"
                className="w-full opacity-100 active:opacity-100 focus:opacity-100 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </span>
          </div>
        </label>

        <div className="my-8 block gap-4">
          <p className="font-normal text-bases text-gray-900 mb-2">
            Signature:
          </p>
          <SignatureCanvas
            penColor="black"
            canvasProps={{ className: "border border-gray-500 w-full h-36" }}
            ref={sigCanvas}
          />
        </div>
        <label className="flex my-8 items-center gap-4">
          <div className="flex flex-row items-center">
            <span className="cursor-pointer flex justify-center items-center mr-8 size-4 rounded border border-gray-500 hover:border-blue-300 hover:ring-1 hover:ring-blue-400 hover:shadow-lg focus:ring-1 focus:ring-blue-400 focus:shadow-lg active:ring-1 active:ring-blue-400 active:shadow-lg">
              <input
                type="checkbox"
                className="opacity-0 size-4 checked:opacity-100"
                required
                checked={agreementChecked}
                onChange={() => setAgreementChecked(!agreementChecked)}
              />
            </span>
            <p className=" cursor-pointer pl-1">
              I agree to the terms of this contract
            </p>
          </div>
        </label>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={clearForm}
            className="py-3 px-6 rounded-md items-center text-xs tracking-wide transition-colors duration-200  bg-red-500 hover:bg-red-600
             text-white"
          >
            Clear
          </button>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`py-3 flex justify-center gap-3 flex-grow flex-wrap flex-row px-8 rounded-md items-center text-xs tracking-wide transition-colors duration-200 ${
              !isFormValid ? "bg-[#FFEEEA] cursor-not-allowed text-gray-800" : "bg-[#9b4431] text-white"
            } `}
          >
            <span>Sign Contract</span>
            <Check/>
          </button>
        </div>
      </form>
    );
  }
);

ContractSign.displayName = 'ContractSign';

export default ContractSign;
