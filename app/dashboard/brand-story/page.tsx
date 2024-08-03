import DefaultLayout from "@/components/DashboardLayout";
import Image from "next/image";
import React from "react";
import banner from "@/assets/images/CoverA.png";
import TextContent from "@/components/TextContent";

const Prologue = () => {
  return (
    <DefaultLayout>
      <TextContent title="Brand Story"/>
    </DefaultLayout>
  );
};

export default Prologue;