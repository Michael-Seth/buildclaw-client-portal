"use client"
import Image from "next/image";
import { ArrowLeft} from "lucide-react";
import bgDrop from "@/assets/images/brBrown.png";
import errorSVG from "@/assets/images/ErrorPage.png";
import { useRouter } from 'next/navigation';
import { useCallback } from "react";

export default function NotFound() {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${bgDrop.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <div className="text-center text-white flex flex-col items-center gap-4">
        <Image
          src={errorSVG}
          alt="Error"
          className="w-full"
          width={300}
          height={300}
        />
        <p className="mt-2 font-bold text-xl md:text-3xl">This Page Does Not Exist</p>
        
        <div
          onClick={onClick}
          className="flex items-center cursor-pointer px-4 py-2 font-medium tracking-wide mt-4 text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <ArrowLeft className="mr-4"/>
          Go Back
        </div>
      </div>
    </div>
  );
}
