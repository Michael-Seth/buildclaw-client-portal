import DefaultLayout from "@/components/DashboardLayout";
import React from "react";
import Login from "../auth/login/page";
import { CardOne } from "@/components/Cards";
import { Tabs } from "@/components/MiscComponent";

const cardData = [
  {
    width: "full",
    height: "auto",
    clientName: "Client A",
    title: "Project A",
    category: "Category A",
    description: "This is a description for Project A.",
    link1: "example1.com",
    active: true,
  },
  {
    width: "full",
    height: "auto",
    clientName: "Client B",
    title: "Project B",
    category: "Category B",
    description: "This is a description for Project B.",
    link1: "example3.com",
    active: false,
  },
  {
    width: "full",
    height: "auto",
    clientName: "Client C",
    title: "Project C",
    category: "Category C",
    description: "This is a description for Project C.",
    link1: "example3.com",
    active: false,
  },
];

const Dashboard = () => {
  return (
    <>
      <DefaultLayout>
        <h2 className="font-semibold md:text-3xl mb-8">Client Portal</h2>

        <Tabs />

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
      </DefaultLayout>
    </>
  );
};

export default Dashboard;
