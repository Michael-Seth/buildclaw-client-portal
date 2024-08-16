import MyContextProvider from "@/constants/context/MyContextProvider";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Login",
//   description: "Login to your client portal",
// };

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <MyContextProvider>
        <>{children}</>
      </MyContextProvider>
    </div>
  );
}
