import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import dashboard from "@/assets/images/dashboard.jpg";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <>
      <main className="absolute top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <Navbar />
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
              Building Your Next App with our Awesome components
            </h1>
            <p className="mt-6 text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              similique obcaecati illum mollitia.
            </p>
            <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
              Start 14-Day free trial
            </button>
            <p className="mt-3 text-sm text-gray-400 ">
              No credit card required
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <Image
              src={dashboard}
              className="object-cover w-full h-96 rounded-xl lg:w-4/5"
              alt="Dashboard Logo"
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
