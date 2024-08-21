"use client";
import DefaultLayout from "@/components/DashboardLayout";
import React from "react";
import BrandStoryContent from "@/components/BrandStoryContent";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { extractCustomerName } from "@/constants/utils/helpers";

const Proposal = () => {
  const pathName = usePathname();
  const customerName = extractCustomerName(pathName);

  return (
    <>
      <BrandStoryContent
        title={`${customerName} Restaurant and Lounge`}
        active
      />
    </>
  );
};

export default Proposal;
