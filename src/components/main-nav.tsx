"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "./ui/button";

import { usePathname } from "next/navigation";

export function MainNav() {
  const path = usePathname();

  return (
    <div className="max-w-screen-xl mx-auto hidden lg:flex md:justify-between">
      <Link href="/">
        <Image src={logo} width={210} alt="Logo" />
      </Link>
      <nav className="flex items-center gap-8 text-body font-semibold">
        {path === "/silent-auction" ? (
          <p className="opacity-70">Silent Auction</p>
        ) : (
          <Link
            className="hover:underline underline-offset-8"
            href="/silent-auction"
          >
            Silent Auction
          </Link>
        )}

        {path === "/volunteer" ? (
          <p className="opacity-70">Volunteer</p>
        ) : (
          <Link
            className="hover:underline underline-offset-8"
            href="/volunteer"
          >
            Volunteer
          </Link>
        )}
        <Button
          asChild
          variant="secondary"
          className="h-[50px] w-[150px] justify-center hover:border-secondary-evergreen hover:text-secondary-evergreen"
        >
          <Link href="/donate">Donate</Link>
        </Button>
        <Button asChild className="h-[50px] w-[150px] justify-center">
          <a
            href="https://austinchristmascookieball2024.ticketspice.com/austin-christmas-cookie-boot-scootin-ball"
            target="_blank"
          >
            Tickets
          </a>
        </Button>
      </nav>
    </div>
  );
}
