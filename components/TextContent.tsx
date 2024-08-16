import Image from "next/image";
import React from "react";
import banner from "@/assets/images/CoverA.png";
import { Brandwrap } from "@/assets/svgs/Brandwrap";
import Logo from "@/assets/images/LogoBrandMealsC.png";
import bgDrop from "@/assets/images/Blackpage.png";
import UnAuthorized from "./UnAuthorized";

interface TextContentProps {
  title: string;
  heading?: string;
  subHeading?: string;
  list?: string[];
  imageUrls?: string[];
  active?: boolean;
}

const TextContent: React.FC<TextContentProps> = ({
  title,
  heading,
  subHeading,
  list,
  imageUrls,
  active
}) => {
  if (!active) {
    return (
        <UnAuthorized />
    );
  }

  return (
    <section className="bg-white dark:bg-gray-900 lg:rounded-xl">
      <div className="container px-2 pt-6 pb-16 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white ml-3">
          {title}
        </h1>
        <div className="mt-8 mb-14 mx-3">
        <header
        className=""
        style={{
          backgroundImage: `url(${bgDrop.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
          borderRadius: "13px" // Adjust as needed
        }}
      >
        <div className="relative">
          <Brandwrap className="absolute inset-0 h-64 rounded-[13px]" />
          <div
            className="relative z-10 mx-auto"
            style={{ top: "45px", left: "30px" }}
          >
            <Image src={Logo} alt="Logo" width={150} height={200} />
          </div>
        </div>
      </header>
        </div>
        <div className="mt-6 lg:mt-0 lg:mx-6">
          <h3
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
           Project Overview
          </h3>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          Brandmeals agrees to design and develop a website for the Evro lifestlye
              according to the specifications outlined in this contract. The
              website will be referred to as the "Project" in this document
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:mx-6">
          <h3
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
           Scope of Work
          </h3>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          Brandmeals agrees to design and develop a website for the Evro lifestlye
              according to the specifications outlined in this contract. The
              website will be referred to as the "Project" in this document
          </p>
        </div>


        {/* {list && list.map((item, index) => (
          <div key={index} className="mt-6 lg:mt-0 lg:mx-6">
            <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
            >
              {item}
            </a>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iu veritatis sint autem nesciunt, laudantium quia tempore delect.
            </p>
          </div>
        ))}
        {imageUrls && imageUrls.map((url, index) => (
          <div key={index} className="mt-6 lg:mt-0 lg:mx-6">
            <Image
              className="object-cover w-full rounded-xl"
              src={url}
              alt={`Image ${index + 1}`}
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
            />
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default TextContent;
