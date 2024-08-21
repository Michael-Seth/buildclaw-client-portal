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
          {pathname === "/contract" && (
            <Announcement
              backgroundColor="bg-indigo-600"
              text="NB:"
              message="Download A Copy of Your Contract After Successful Payment"
            />
          )}
          <div className="mx-auto max-w-screen-2xl w-full px-2 sm:px-6">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}