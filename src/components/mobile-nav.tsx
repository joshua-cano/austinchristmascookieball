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

export const MobileNav = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:hidden flex items-center justify-between">
      <Image src={logo} width={210} alt="Logo" />
      <Sheet>
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
                <Image src={logo} width={210} alt="Logo" />
              </div>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-end p-12 gap-5">
            <Button asChild variant="link" className="p-0">
              <a href="/lineup">Lineup</a>
            </Button>
            <Button asChild variant="link" className="p-0">
              <a href="/volunteer">Volunteer</a>
            </Button>
            <Button variant="secondary" className="w-[152px] justify-center">
              Donate
            </Button>
            <Button className="w-[152px] justify-center">Tickets</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
