import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "./ui/button";

export function MainNav() {
  return (
    <div className="max-w-screen-xl mx-auto hidden lg:flex md:justify-between">
      <Link href="/">
        <Image src={logo} width={210} alt="Logo" />
      </Link>
      <nav className="flex items-center gap-8 text-body font-semibold">
        <Link href="/lineup">Lineup</Link>
        <Link href="/volunteer">Volunteer</Link>
        <Button
          asChild
          variant="secondary"
          className="h-[50px] w-[150px] justify-center"
        >
          <a href="/">Donate</a>
        </Button>
        <Button asChild className="h-[50px] w-[150px] justify-center">
          <a href="/">Tickets</a>
        </Button>
      </nav>
    </div>
  );
}