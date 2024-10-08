import { DownloadButton } from "@/assets/svgs/DownloadIcon";
import useMyContext from "@/constants/context/useMyContext";
import { contractData } from "@/constants/utils/data";
import { Download, CircleX, MessageCircle, Lightbulb } from "lucide-react";

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
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex justify-center">
        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right  sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-2 text-gray-500 transition-colors duration-300 rounded-full hover:text-gray-700 
             focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            <CircleX className="w-6 h-6" />
          </button>

          <div>
            <div className="flex items-center justify-center my-4">
              <Download className="text-white" />
            </div>

            <div className="mt-2 text-center">
              <h3
                className="text-lg font-medium leading-6 text-gray-800 capitalize "
                id="modal-title"
              >
                Payment Successful
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Thank you for choosing Brandmeals! Your payment was successful.
                Please check your inbox for a purchase summary and download your contract.
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

export const CloseModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex justify-center">
        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right  sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-2 text-gray-500 transition-colors duration-300 rounded-full hover:text-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            <CircleX className="w-6 h-6" />
          </button>

          <div>
            <div className="flex items-center justify-center my-4">
              <Lightbulb className="text-white" />
            </div>

            <div className="mt-2 text-center">
              <h3
                className="text-lg font-medium leading-6 text-gray-800 capitalize "
                id="modal-title"
              >
                Facing Troubles?
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Are you facing any trouble processing your payment, please reach out to our support team by mail, or send a us a message on whatsapp for immediate response.
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center">
            <div className="sm:flex sm:items-center ">
              <div className="bg-green-600 text-white font-medium">
                <MessageCircle /> <span>WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
