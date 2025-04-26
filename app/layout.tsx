import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ragnarok Maps",
  description: "A map viewer for Ragnarok Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
