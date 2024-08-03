import { GoogleSigninButton, SigninWithPassword } from "@/components/Buttons";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/Buildclaw-Logo.png";
import cover from "@/assets/images/CoverA.png";
import Breadcrumb from "@/components/Breadcrumb";

export default function Login() {
  return (
    <>
      <div className="">
        <div className="pt-16 px-3 pb-6 sm:p-20 bg-gray-200 shadow-1 dark:bg-gray-dark dark:shadow-card">
        {/* <Breadcrumb pageName="Sign In" /> */}
          <div className="bg-white flex flex-wrap items-center border rounded-[10px]">
            <div className="w-full lg:w-1/2 flex flex-col p-3 sm:p-10">
              <div className="w-full p-4 lg:p-15  ">
                <GoogleSigninButton text="Sign in" />
                <div className="my-8 flex items-center justify-center">
                  <span className="block h-px w-full bg-slate-300"></span>
                  <div className="block w-full min-w-fit bg-white px-3 text-center font-medium text-sm dark:bg-gray-dark">
                    Or sign in with email
                  </div>
                  <span className="block h-px w-full bg-slate-300"></span>
                </div>
                <SigninWithPassword />
              </div>
            </div>

            <div className="hidden sm:block sm:w-full lg:w-1/2 p-10 ">
              <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12 pt-12 bg-slate-100">
                <Link className="mb-8 inline-block" href="/">
                  <Image
                    className="hidden dark:block"
                    src={logo}
                    alt="Logo"
                    width={126}
                    height={32}
                  />
                  <Image
                    className="dark:hidden"
                    src={logo}
                    alt="Logo"
                    width={126}
                    height={32}
                  />
                </Link>
                <h1 className="mb-4 text-2xl font-bold">
                  Welcome!
                </h1>

                <p className="w-full max-w-[375px] font-medium mb-4">
                  Please sign in to your account by completing the necessary
                  fields below
                </p>

                <div className="mt-31">
                  <Image
                    src={cover}
                    alt="Buildclaw Cover"
                    width={405}
                    height={325}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
