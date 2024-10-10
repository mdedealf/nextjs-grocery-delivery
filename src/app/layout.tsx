import type { Metadata } from "next";
import "./globals.css";
import { FC, ReactNode } from "react";

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
      <head>
        <title>Fresh Goodies 🥦</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
