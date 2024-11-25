import type { Metadata } from "next";
import "./globals.css";
import UserProvider from "../contexts/user-context";

export const metadata: Metadata = {
  title: "Inkwell",
  description: "E-Pen Pals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
