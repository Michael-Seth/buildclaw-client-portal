"use client"
import React from "react";
import { CardOne } from "@/components/Cards";
import {  usePathname } from "next/navigation";
import { extractCustomerName } from "@/constants/utils/helpers";
import dynamic from "next/dynamic";

const FigmaRenderer = dynamic(() => import('../../../components/FigmaRenderer'), { ssr: false });

const Dashboard = async () => {
const pathName = usePathname();
const customerName = extractCustomerName(pathName);
const cardData = [
  {
    width: "full",
    height: "64",
    clientName: customerName,
    title: "Website",
    category: "Ready To Start",
    description: "Preview brand story and contract agreement.",
    link1: "contract",
    active: true,
  },
  {
    width: "full",
    height: "64",
    clientName: "Client B",
    title: "Project B",
    category: "Category B",
    description: "This is a description for Project B.",
    link1: "example3.com",
    active: false,
  },
  {
    width: "full",
    height: "64",
    clientName: "Client C",
    title: "Project C",
    category: "Category C",
    description: "This is a description for Project C.",
    link1: "example3.com",
    active: false,
  },
];
  return (
    <>
      <h2 className="font-semibold md:text-3xl mt-5 mb-8">Client Portal</h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        {cardData.map((card, index) => (
          <CardOne
            key={index}
            width={card.width}
            height={card.height}
            clientName={card.clientName}
            title={card.title}
            category={card.category}
            description={card.description}
            link1={card.link1}
            active={card.active}
          />
        ))}
      </div>
      <FigmaRenderer />
    </>
  );
};

export default Dashboard;
