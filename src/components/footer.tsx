import Image from "next/image";
import logo from "../../public/logo-dark.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-8 md:pt-20 max-w-screen-xl mx-auto">
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <div>
          <Image src={logo} alt="logo" width={270} className="mb-5" />
          <div className="flex gap-4 mb-32">
            <FaFacebook size={32} />
            <FaInstagram size={32} />
          </div>
        </div>

        <div>
          <p className="text-h3 font-bevan mb-default">Menu</p>

          <div className="text-body flex flex-col gap-1">
            <Link href="/">Home</Link>
            <Link href="/lineup">Lineup</Link>
            <Link href="/volunteer">Volunteer</Link>
            <a href="/">Donate</a>
            <a href="/">Silent Auction</a>
          </div>
        </div>
      </div>

      <div className="md:flex md:items-center md:justify-between">
        <p className="text-body mt-8 md:m-0">&copy; 2024 Mark Edwards</p>

        <div className="md:flex md:gap-1.5">
          <p className="text-body mt-7 md:m-0">Designed by</p>
          <p className="text-body font-bold">Major Danger Studio</p>
        </div>
      </div>
    </footer>
  );
};
