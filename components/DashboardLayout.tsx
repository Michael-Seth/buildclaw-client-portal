"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

// import Header from "@/components/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logo = "/assets/images/Buildclaw-Logo.png";

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
          <main className="flex-grow">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
