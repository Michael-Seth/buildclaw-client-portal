"use client"
import DefaultLayout from "@/components/DashboardLayout";
import Image from "next/image";
import React from "react";
import banner from "@/assets/images/CoverA.png";
import TextContent from "@/components/TextContent";

const Proposal = () => {
  return (
    <DefaultLayout>
      <TextContent title="Brand Story" active/>
    </DefaultLayout>
  );
};

export default Proposal;
