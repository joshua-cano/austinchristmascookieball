import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Playfair_Display({ subsets: ["latin"], weight: "variable" });

export const metadata: Metadata = {
  title: "Austin Christmas Cookie Ball",
  description: "Austin Christmas Cookie Ball Celebration Birthday Event",
  icons: {
    icon: "/cartoonanimal.png",
  },
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
