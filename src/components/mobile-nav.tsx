"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import logo from "../../public/logo.png";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-screen-xl mx-auto lg:hidden flex items-center justify-between">
      <Link href="/">
        <Image src={logo} width={210} alt="Logo" />
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          >
            <Menu size={42} />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="">
          <SheetHeader>
            <SheetTitle>
              <div className="shadow-md p-default">
                <MobileLink href="/" onOpenChange={setOpen}>
                  <Image src={logo} width={210} alt="Logo" />
                </MobileLink>
              </div>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-end p-12 gap-5">
            <Button asChild variant="link" className="h-auto p-0">
              <MobileLink href="/lineup" onOpenChange={setOpen}>
                Lineup
              </MobileLink>
            </Button>
            <Button asChild variant="link" className="h-auto p-0">
              <MobileLink href="/volunteer" onOpenChange={setOpen}>
                Volunteer
              </MobileLink>
            </Button>
            <Button
              variant="secondary"
              className="h-[50px] w-[152px] justify-center hover:border-secondary-evergreen hover:text-secondary-evergreen focus-visible:ring-0"
            >
              Donate
            </Button>
            <Button className="h-[50px] w-[152px] justify-center">
              Tickets
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  console.log(href);
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
