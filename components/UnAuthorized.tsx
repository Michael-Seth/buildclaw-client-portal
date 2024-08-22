import SecureIcon from "@/assets/svgs/SecureIcon";
import { extractCustomerUrl } from "@/constants/utils/helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UnAuthorized = () => {
  const pathName = usePathname();
  const customerUrl = extractCustomerUrl(pathName);

  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <SecureIcon className="w-28 mx-auto h-24 text-gray-300"/>
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-800 sm:text-4xl">
          Payment Required
        </h1>

        <p className="mt-4 text-gray-500">
          Please complete your contract to access this section
        </p>
        <Link
          className="group my-6 relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
          href={`/${customerUrl}/contract`}
        >
          <span className="absolute -end-full transition-all group-hover:end-4">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:me-4">
            Sign Contract
          </span>
        </Link>
      </div>
    </div>
  );
};

export default UnAuthorized;
