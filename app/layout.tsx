import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = IBM_Plex_Serif({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Austin Christmas Cookie Ball",
  description: "Austin Christmas Cookie Ball Celebration Birthday Event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
