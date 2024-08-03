import Image from "next/image";
import React from "react";
import banner from "@/assets/images/CoverA.png";

const TextContent = ({
  title,
  heading,
  subHeading,
  list,
  imageUrls,
}: {
  title: string;
  heading?: string;
  subHeading?: string;
  list?: string[];
  imageUrls?: string[];
}) => {
  return (
    <section className="bg-white dark:bg-gray-900 lg:rounded-xl">
      <div className="container px-2 pt-6 pb-16 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white ml-3">
          {title}
        </h1>
        <div className="mt-8 mb-14 mx-3">
          <Image
            className="object-cover w-full rounded-xl lg:h-48"
            src={banner}
            alt="Prologue Banner"
          />
        </div>
        <div className="mt-6 lg:mt-0 lg:mx-6 ">
          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            All the features you want to know
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iu
            veritatis sint autem nesciunt, laudantium quia tempore delect Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iu veritatis sint
            autem nesciunt, laudantium quia tempore delect Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iu veritatis sint autem nesciunt,
            laudantium quia tempore delect
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:mx-6 ">
          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            All the features you want to know
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iu
            veritatis sint autem nesciunt, laudantium quia tempore delect Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iu veritatis sint
            autem nesciunt, laudantium quia tempore delect Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iu veritatis sint autem nesciunt,
            laudantium quia tempore delect
          </p>
        </div>{" "}
        <div className="mt-6 lg:mt-0 lg:mx-6 ">
          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            All the features you want to know
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iu
            veritatis sint autem nesciunt, laudantium quia tempore delect Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iu veritatis sint
            autem nesciunt, laudantium quia tempore delect Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iu veritatis sint autem nesciunt,
            laudantium quia tempore delect
          </p>
        </div>{" "}
        <div className="mt-6 lg:mt-0 lg:mx-6 ">
          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            All the features you want to know
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iu
            veritatis sint autem nesciunt, laudantium quia tempore delect Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iu veritatis sint
            autem nesciunt, laudantium quia tempore delect Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iu veritatis sint autem nesciunt,
            laudantium quia tempore delect
          </p>
        </div>{" "}
        <div className="mt-6 lg:mt-0 lg:mx-6 ">
          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            All the features you want to know
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iu
            veritatis sint autem nesciunt, laudantium quia tempore delect Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iu veritatis sint
            autem nesciunt, laudantium quia tempore delect Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iu veritatis sint autem nesciunt,
            laudantium quia tempore delect
          </p>
        </div>{" "}
        <div className="mt-6 lg:mt-0 lg:mx-6 ">
          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            All the features you want to know
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iu
            veritatis sint autem nesciunt, laudantium quia tempore delect Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iu veritatis sint
            autem nesciunt, laudantium quia tempore delect Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iu veritatis sint autem nesciunt,
            laudantium quia tempore delect
          </p>
        </div>{" "}
        <div className="mt-6 lg:mt-0 lg:mx-6 ">
          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            All the features you want to know
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iu
            veritatis sint autem nesciunt, laudantium quia tempore delect Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iu veritatis sint
            autem nesciunt, laudantium quia tempore delect Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iu veritatis sint autem nesciunt,
            laudantium quia tempore delect
          </p>
        </div>{" "}
        <div className="mt-6 lg:mt-0 lg:mx-6 ">
          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            All the features you want to know
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iu
            veritatis sint autem nesciunt, laudantium quia tempore delect Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iu veritatis sint
            autem nesciunt, laudantium quia tempore delect Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iu veritatis sint autem nesciunt,
            laudantium quia tempore delect
          </p>
        </div>{" "}
        <div className="mt-6 lg:mt-0 lg:mx-6 ">
          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            All the features you want to know
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iu
            veritatis sint autem nesciunt, laudantium quia tempore delect Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iu veritatis sint
            autem nesciunt, laudantium quia tempore delect Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iu veritatis sint autem nesciunt,
            laudantium quia tempore delect
          </p>
        </div>{" "}
        <div className="mt-6 lg:mt-0 lg:mx-6 ">
          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            All the features you want to know
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iu
            veritatis sint autem nesciunt, laudantium quia tempore delect Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iu veritatis sint
            autem nesciunt, laudantium quia tempore delect Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iu veritatis sint autem nesciunt,
            laudantium quia tempore delect
          </p>
        </div>{" "}
        <div className="mt-6 lg:mt-0 lg:mx-6 ">
          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            All the features you want to know
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iu
            veritatis sint autem nesciunt, laudantium quia tempore delect Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iu veritatis sint
            autem nesciunt, laudantium quia tempore delect Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iu veritatis sint autem nesciunt,
            laudantium quia tempore delect
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextContent;
