import ContractFooter from "@/components/ContractFooter";
import ContractTable from "@/components/ContractTable";
import DefaultLayout from "@/components/DashboardLayout";
import TextContent from "@/components/TextContent";
import React from "react";

function Contract() {
  return (
    <DefaultLayout>
      <TextContent title="Contract Agreement" />
      <ContractTable />
      <ContractFooter />
    </DefaultLayout>
  );
}

export default Contract;
