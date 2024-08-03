import Link from "next/link";
import Image, { ImageLoader } from "next/image";
import logo from "@/assets/images/Buildclaw-Logo.png";
import FacebookIcon from "@/assets/svgs/Facebook";
import InstagramIcon from "@/assets/svgs/Instagram";
import TwitterIcon from "@/assets/svgs/Twitter";
import LinkedInIcon from "@/assets/svgs/LinkedIn";

interface FooterProps {
  brandlogo: string;
}

const Footer = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <Link href="#">
          <Image
            className="w-auto h-8"
            src={logo}
            alt="Buildclaw logo"
          />
        </Link>

        <p className="text-sm text-gray-600">
          © Buildclaw 2023. All Rights Reserved.
        </p>

        <div className="flex mx-2 space-x-4">
          <Link
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </Link>

          <Link
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-4 h-4" />
          </Link>

          <Link
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-4 h-4" />
          </Link>

          <Link
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
