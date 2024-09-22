import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const berkshireSwash = localFont({
  src: "./fonts/BerkshireSwash-Regular.ttf",
  variable: "--font-berkshireSwash",
});
const bebasNeue = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebasneue",
  weight: "100 900",
});

const bevan = localFont({
  src: "./fonts/Bevan-Regular.ttf",
  variable: "--font-bevan",
  weight: "400 900",
});

const raleway = localFont({
  src: "./fonts/Raleway.ttf",
  variable: "--font-raleway",
});

const christmas = localFont({
  src: "./fonts/MountainsofChristmas-Regular.ttf",
  variable: "--font-christmas",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Austin Christmas Cookie Ball",
  description: "Austin Christmas Cookie Ball",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${berkshireSwash.variable} ${bebasNeue.variable} ${bevan.variable} ${christmas.variable} antialiased`}
    >
      <body className="text-primary-solstice bg-hero bg-no-repeat bg-cover bg-fixed bg-neutral-background">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
