"use client";
import DefaultLayout from "@/components/DashboardLayout";
import TextContent from "@/components/TextContent";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import {
  ContractData,
  ContractSign,
  ContractSignHandles,
} from "../../../components/ContractTable";
import { DownloadButton } from "@/assets/svgs/DownloadIcon";
import PaymentButton from "@/components/PaymentButton";
import ContractContent from "@/components/ContractContent";
const ContractTable = dynamic(
  () => import("../../../components/ContractTable"),
  { ssr: false }
);

export const contractData = [
  {
    id: "1",
    serviceName: "Professional Website Design and Development",
    price: 400000,
    status: "Comprehensive website design, development and basic SEO optimization tailored to your brand’s identity and business goals.",
  },
  {
    id: "2",
    serviceName: "Online Ordering System",
    price: 150000,
    status: "Implement a robust online ordering platform on your website, enabling easy browsing and ordering for customers.",
  },
  {
    id: "3",
    serviceName: "Online Reservation",
    price: 100000,
    status: "Allow customers to book tables or services online, reducing workload and providing a seamless booking experience.",
  },
  {
    id: "4",
    serviceName: "QR Menu (Without Payment Integration) ",
    price: 50000,
    status: "A digital menu accessible via QR codes, offering a contactless and modern dining experience.",
  },
  {
    id: "5",
    serviceName: "QR Menu with Payment Integration",
    price: 100000,
    status: "Secure payment options integrated with the QR menu for a seamless ordering and payment process. ",
  },
  {
    id: "6",
    serviceName: "Email Marketing Campaigns",
    price: 50000,
    status: "Targeted email marketing campaigns designed to engage customers and increase loyalty.",
  },
  {
    id: "7",
    serviceName: "Advanced Search Engine Optimization (SEO) ",
    price: 150000,
    status: "Improve search engine rankings with advanced SEO strategies, driving more organic traffic to your site.",
  },
  {
    id: "8",
    serviceName: "Custom Content Management System (CMS)",
    price: 150000,
    status: "Manage your website content easily with a custom CMS tailored to your business needs.",
  },
  {
    id: "9",
    serviceName: "Monthly Growth and Sales Analytics Report",
    price: 50000,
    status: "Detailed monthly reports with insights and recommendations to drive business improvement",
  },
  {
    id: "10",
    serviceName: "Staff Management Tools",
    price: 150000,
    status: "Efficiently manage staff schedules, tasks, and communications to streamline operations.",
  },
  {
    id: "11",
    serviceName: "Custom AI Chatbots",
    price: 0,
    status: "Unavailable",
  },
  {
    id: "12",
    serviceName: "Progressive Web Apps (PWA) (Coming Soon)",
    price: 0,
    status: "Unavailable",
  },
  {
    id: "13",
    serviceName: "Geo-locator Services",
    price: 0,
    status: "Unavailable",
  },
];

const calculateTotal = (data: ContractData[]): number => {
  const defaultTotal = 400000;
  return data.reduce((sum, item) => {
    return sum + (item.price > 0 ? item.price : 0);
  }, defaultTotal);
};

const total = calculateTotal(contractData);

function Contract() {
  const formRef = useRef<ContractSignHandles>(null);
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    signature: string | null;
  } | null>(null);

  const handleUpdateFormData = () => {
    const data = formRef.current?.getFormData();
    if (data) setFormData(data);
  };

  return (
    <DefaultLayout>
      <TextContent title="Contract Agreement" active />
      {/* <ContractContent /> */}
      <ContractTable data={contractData} total={total} />
      <ContractSign ref={formRef} onFormDataChange={handleUpdateFormData} />
      <PaymentButton />
      <DownloadButton
        data={contractData}
        total={total}
        email={formData?.email || null}
        name={formData?.fullName || null}
        signature={formData?.signature || null}
      />
    </DefaultLayout>
  );
}

export default Contract;
