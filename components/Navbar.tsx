import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/Buildclaw-Logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="w-[95%] mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Buildclaw Logo" width={120} />
            <span className="text-xl font-bold hidden text-gray-800 ml-2">
              Buildclaw
            </span>
          </Link>
          <div className="ml-16 space-x-8 text-sm">
            <Link className="text-gray-800 hover:text-gray-600" href="/">
              Home
            </Link>
            <Link className="text-gray-800 hover:text-gray-600" href="/about">
              About
            </Link>
            <Link
              className="text-gray-800 hover:text-gray-600"
              href="/services"
            >
              Services
            </Link>
            <Link className="text-gray-800 hover:text-gray-600" href="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="px-5 py-2 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
