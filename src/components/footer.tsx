import Image from "next/image";
import logo from "../../public/logo-dark.png";
import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="px-8 pt-[46px] pb-8 md:pt-20 max-w-screen-xl mx-auto">
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <div>
          <Image src={logo} alt="logo" width={270} className="mb-5" />
          <div className="flex gap-4 mb-32">
            <a href="https://www.facebook.com/share/8AfgbV9atREPeH1t/?mibextid=LQQJ4d">
              <FaFacebook size={32} />
            </a>
            {/* <FaInstagram size={32} /> */}
          </div>
        </div>

        <div>
          <p className="text-h3 font-bevan mb-default">Menu</p>

          <div className="text-body flex flex-col gap-1">
            <Link className="hover:underline underline-offset-8" href="/">
              Home
            </Link>
            <Link
              className="hover:underline underline-offset-8"
              href="/silent-auction"
            >
              Silent Auction
            </Link>
            <Link
              className="hover:underline underline-offset-8"
              href="/volunteer"
            >
              Volunteer
            </Link>
            <a className="hover:underline underline-offset-8" href="/donate">
              Donate
            </a>
          </div>
        </div>
      </div>

      <div className="md:flex md:items-center md:justify-between">
        <p className="text-body mt-8 md:m-0">&copy; 2024 Mark Edwards</p>

        <div className="md:flex md:gap-1.5">
          <p className="text-body mt-7 md:m-0">Designed by</p>
          <a
            href="https://www.majordanger.com"
            target="_blank"
            className="text-body font-bold hover:underline hover:underline-offset-8"
          >
            Major Danger Studio
          </a>
        </div>
      </div>
    </footer>
  );
};
