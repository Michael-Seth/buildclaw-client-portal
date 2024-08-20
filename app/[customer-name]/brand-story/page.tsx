"use client";
import DefaultLayout from "@/components/DashboardLayout";
import React from "react";
import BrandStoryContent from "@/components/BrandStoryContent";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Proposal = () => {
  
  return (
    <>
      <BrandStoryContent title="Evro Lifestyle Restaurant and Lounge" active />
    </>
  );
};

export default Proposal;
