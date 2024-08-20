import Image from 'next/image';
import Link from 'next/link';
import clientLogo from '@/assets/images/Logo.png';

function Header({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean; setSidebarOpen: (open: boolean) => void; }) {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/dashboard">
          <Image
            className="object-cover md:hidden w-10 h-10 rounded-full"
            src={clientLogo}
            style={{width: "auto"}}
            alt="logo"
          />
        </Link>
        <h1 className="ml-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
          Dashboard
        </h1>
      </div>
      <button
        className="p-2 text-gray-500 dark:text-gray-400 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        )}
      </button>
    </header>
  );
}

export default Header;
