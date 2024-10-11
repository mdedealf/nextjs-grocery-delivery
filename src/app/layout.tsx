import type { Metadata } from "next";
import "./globals.css";
import { FC, ReactNode } from "react";
import ClientProvider from "@/provider/clientProvider";

export const metadata: Metadata = {
  title: "Fresh Goodies 🥦",
  description: "Go Eat Some Fresh Goodies 🥦",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
