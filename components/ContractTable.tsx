"use client";
// import { DownloadButton } from "@/assets/svgs/DownloadIcon";
import useMyContext from "@/constants/context/useMyContext";
import { formatPrice } from "@/constants/utils/helpers";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import SignatureCanvas from "react-signature-canvas";

export interface ContractData {
  id: string;
  serviceName: string;
  price: number;
  status: string;
}

interface ContractTableProps {
  data: ContractData[];
  total: number;
}

const ContractTable = forwardRef<HTMLDivElement, ContractTableProps>(
  ({ data, total }, ref) => {
    const { state, setState } = useMyContext();
    const defaultTotal = 400000;

    // Ensure state is a Set
    const stateSet = state instanceof Set ? state : new Set<string>();

    const computedTotal = data.reduce((sum, item) => {
      const price = item.price > 0 && stateSet.has(item.id) ? item.price : 0;
      return sum + price;
    }, defaultTotal);

    const handleToggle = (id: string, price: number) => {
      setState((prev) => {
        const prevSet = prev instanceof Set ? prev : new Set<string>();
        const updated = new Set(prevSet);

        if (updated.has(id)) {
          updated.delete(id);
        } else {
          updated.add(id);
        }

        return updated;
      });
    };

    return (
      <section className="container px-4 mx-auto my-8" ref={ref}>
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-lg font-medium text-gray-800">
            Additional Services
          </h2>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-fixed">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Service Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Price
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-white whitespace-normal break-words">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <div className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                                𖧹
                              </div>
                              <div>
                                <h2 className="font-normal text-gray-800 text-base dark:text-white">
                                  {item.serviceName}
                                </h2>
                                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                  {item.status}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-normal text-gray-700 dark:text-gray-200 whitespace-normal break-words">
                          {item.price > 0
                            ? formatPrice(item.price)
                            : "Coming soon"}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-normal break-words">
                          <button
                            onClick={() =>
                              item.price > 0 &&
                              handleToggle(item.id, item.price)
                            }
                            disabled={item.price === 0 || item.price === 400000}
                            className={`flex items-center justify-center w-full px-5 py-2 text-sm tracking-wide transition-colors duration-200 ${
                              item.price === 0 || item.price === 400000
                                ? "bg-blue-200 text-gray-600 cursor-not-allowed"
                                : stateSet.has(item.id)
                                ? "bg-red-500 hover:bg-red-600 text-white"
                                : "bg-blue-500 hover:bg-blue-600 text-white"
                            } rounded-lg shrink-0 sm:w-auto gap-x-2`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              {item.price === 0 || item.price === 400000 ? (
                                <path
                                  fillRule="evenodd"
                                  d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                                  clipRule="evenodd"
                                />
                              ) : (
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              )}
                            </svg>
                            <span>
                              {item.price === 0
                                ? ""
                                : stateSet.has(item.id)
                                ? "Remove"
                                : "Add"}
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 sm:flex sm:items-center sm:justify-between">
                <div className="text-lg text-gray-600">
                  Total:
                  <span className="font-medium text-xl ml-5 text-gray-700">
                    {formatPrice(computedTotal)}
                  </span>
                </div>

                <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
                  <a
                    href="#"
                    className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                  >
                    <span>Proceed</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 rtl:-scale-x-100"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default ContractTable;
export interface ContractSignHandles {
  resetForm: () => void;
  getFormData: () => {
    fullName: string;
    email: string;
    signature: string | null;
  };
}
interface ContractSignProps {
  onFormDataChange?: () => void;
}

export const ContractSign = forwardRef<ContractSignHandles, ContractSignProps>(
  ({ onFormDataChange }, ref) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [agreementChecked, setAgreementChecked] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const sigCanvas = useRef<SignatureCanvas | null>(null);

    useEffect(() => {
      setIsFormValid(
        fullName.trim() !== "" &&
          email.trim() !== "" &&
          agreementChecked &&
          sigCanvas.current?.isEmpty() === false
      );
    }, [fullName, email, agreementChecked]);

    useImperativeHandle(ref, () => ({
      resetForm: () => {
        setFullName("");
        setEmail("");
        setAgreementChecked(false);
        sigCanvas.current?.clear();
        onFormDataChange?.(); // Notify that form data has changed
      },
      getFormData: () => {
        const signature =
          sigCanvas.current?.getTrimmedCanvas().toDataURL("image/png") || null;
        return { fullName, email, signature };
      },
    }));

    const clearSignature = () => sigCanvas.current?.clear();

    const saveSignature = () => {
      const signature = sigCanvas.current
        ?.getTrimmedCanvas()
        .toDataURL("image/png");
      console.log("Signature saved:", signature);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (isFormValid) {
        saveSignature();
        onFormDataChange?.(); // Notify that form data has changed
      }
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-8">
        <label className="flex my-8 items-center gap-4">
          <div className="font-normal text-bases flex items-end text-gray-900">
            <span className="cursor-pointer flex justify-center items-center mr-8 size-4 rounded border border-gray-500 hover:border-blue-300 hover:ring-1 hover:ring-blue-400 hover:shadow-lg focus:ring-1 focus:ring-blue-400 focus:shadow-lg active:ring-1 active:ring-blue-400 active:shadow-lg">
              <input
                type="checkbox"
                className="opacity-0 size-4 checked:opacity-100"
                required
                checked={agreementChecked}
                onChange={() => setAgreementChecked(!agreementChecked)}
              />
            </span>
            <span>I</span>
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
            <span> agree to the terms of this contract</span>
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
            <span>.</span>
          </div>
        </label>

        <div className="my-8">
          <p className="font-normal text-bases text-gray-900 mb-2">
            Signature:
          </p>
          <SignatureCanvas
            penColor="black"
            canvasProps={{ className: "border border-gray-500 w-full h-36" }}
            ref={sigCanvas}
          />
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={clearSignature}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200 bg-red-500 hover:bg-red-600 text-white rounded-lg shrink-0 sm:w-auto gap-x-2"
            >
              Clear
            </button>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200 ${
                isFormValid ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-300"
              } text-white rounded-lg shrink-0 sm:w-auto gap-x-2`}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
);
