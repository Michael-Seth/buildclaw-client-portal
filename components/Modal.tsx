import { DownloadButton } from "@/assets/svgs/DownloadIcon";
import useMyContext from "@/constants/context/useMyContext";
import { contractData } from "@/constants/utils/data";
import { Download, CircleX } from "lucide-react";

export const SuccessModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { computedTotal, clientName, recipient, signature } = useMyContext();

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex justify-center">
        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-2 text-gray-500 transition-colors duration-300 rounded-full hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            <CircleX className="w-6 h-6" />
          </button>

          <div>
            <div className="flex items-center justify-center my-4">
              <Download className="text-white" />
            </div>

            <div className="mt-2 text-center">
              <h3
                className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                id="modal-title"
              >
                Payment Successful
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur dolorum aliquam ea, ratione deleniti porro officia?
                Explicabo maiores suscipit.
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center">
            <div className="sm:flex sm:items-center ">
              <DownloadButton
                data={contractData}
                total={computedTotal}
                email={recipient || null}
                name={clientName || null}
                signature={signature || null}
                onPaymentSuccessful={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
