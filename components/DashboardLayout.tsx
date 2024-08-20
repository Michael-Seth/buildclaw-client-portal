"use client";
import React, { useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Sidebar, { CustomerData } from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import Announcement from "./Announcement";


interface DefaultLayoutProps {
  children: React.ReactNode;
  customerData?: CustomerData;  // Adjust type if needed
}


export default function DefaultLayout({ children, customerData }: DefaultLayoutProps) {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex h-full">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} customerData={customerData!}
        />
        <main className="flex-1 flex flex-col overflow-y-auto">
          {pathname === "/dashboard/contract" && (
            <Announcement
              backgroundColor="bg-indigo-600"
              text="NB:"
              message="Download A Copy of Your Contract After Successful Payment"
            />
          )}
          <div className="mx-auto max-w-screen-2xl w-full p-4 md:p-6 2xl:p-10">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}


// export const getStaticPaths: GetStaticPaths = async () => {
//   const customers = await fetchCustomers();
//   const paths = customers.map((customer) => ({
//     params: { customerName: customer.name },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const customerName = context.params?.customerName as string;
//   const customerData = await getCustomerData(customerName);

//   return {
//     props: { customerData },
//   };
// };