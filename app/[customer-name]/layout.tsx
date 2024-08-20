import DefaultLayout from "@/components/DashboardLayout";
import { fetchCustomers } from "@/lib/customers";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Client portal",
};


export async function generateStaticParams() {
  const customers = await fetchCustomers();
  return customers.map((customer) => ({
    "customer-name": customer.name,
  }));
}

type DashboardPageProps = {
  children: React.ReactNode;
  params: {
    "customer-name": string;
  };
};

export default async function DashboardLayout({ children, params }: DashboardPageProps) {
  const { "customer-name": customerName } = params;
  const customers = await fetchCustomers();
  const customerData = customers.find((cust) => cust.name === customerName);

  if (!customerData) {
    return notFound(); // Handle not found case
  }
  return (
    <DefaultLayout customerData={customerData}>
      <>{children}</>
    </DefaultLayout>
  );
}
