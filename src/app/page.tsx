import { Button } from "@/components/ui/button";
import Image from "next/image";
import bow from "../../public/bow.png";
import band from "../../public/band.png";
import blueBoltLogo from "../../public/blue-bolt-logo.png";
import majorLogo from "../../public/major-danger-studio-logo.png";
import cookiesLogo from "../../public/cookies-logo.png";
import cake from "../../public/cake.png";
import newHopeLogo from "../../public/newhope.png";
import catDog from "../../public/cat-dog.png";
import { Icons } from "@/components/icons";

export default function Home() {
  return (
    <>
      <section className="px-default pb-32 pt-9 lg:pb-9 lg:py-24 bg-hero bg-neutral-background bg-center lg:h-[900px]">
        <div className="mx-auto max-w-screen-xl lg:grid lg:grid-cols-7 lg:gap-5">
          <div className="lg:col-span-5 space-y-4 ">
            <div>
              <p className="font-bebas text-subheading text-secondary-evergreen">
                Fundraiser
              </p>
              <h1 className="text-h1 font-heading text-primary">
                Austin Christmas Cookie &lsquo;Boot Scootin&rsquo; Ball
              </h1>
            </div>

            <p className="text-body">
              Boot Scoot into the holiday season with cookies, live music,
              dancing, and fundraising for our furry friends at{" "}
              <a href="nhanimalrescue.org" className="font-bold underline">
                New Hope Animal Rescue
              </a>
            </p>
            <div className="flex items-start gap-2">
              <p className="font-christmas font-bold text-calloutsm text-secondary">
                Hosted by Mark Edwards in celebration of his 60th Birthday
              </p>
              <Image
                src={cake}
                alt="cake"
                className="sm:hidden flex-shrink-0"
              />
            </div>

            <div className="hidden lg:block">
              <Button
                asChild
                className="w-full max-w-[300px]
              "
              >
                <a href="/" className="mt-8">
                  Get Your Tickets <Icons.star className="size-5" />
                </a>
              </Button>
              <p className="italic text-caption">
                25% Off Bundles Available until October 31
              </p>
            </div>
          </div>

          <Image
            className="hidden lg:block lg:col-span-2"
            src="/cookie.png"
            alt="cookie"
            width={420}
            height={414}
          />
        </div>
      </section>

      <section className="px-default flex flex-col items-center">
        <Image
          className="lg:hidden -mt-16"
          src="/cookie.png"
          alt="cookie"
          width={420}
          height={414}
        />
        <div className="lg:hidden">
          <Button asChild className="w-full">
            <a href="/" className="mt-8">
              Get Your Tickets <Icons.star className="size-5" />
            </a>
          </Button>
          <p className="italic text-caption text-center">
            25% Off Bundles Available until October 31
          </p>
        </div>
        <div className="py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-7 lg:items-center lg:-mt-32 xl:-mt-56">
          <Image src={catDog} className="col-span-4" alt="cat and dog"></Image>

          <div className="px-6 space-y-2 lg:bg-neutral lg:p-12 lg:rounded-[28px] lg;shadow-md lg:-ml-20 col-span-3">
            <h2 className="font-bevan text-primary text-h2">
              The Party of
              <span className="line-clamp-2">The Holiday Season</span>
            </h2>
            <div className="text-body space-y-4">
              <div>
                <p>Saturday, December 7, 2024</p>
                <p>7PM - Midnight</p>
              </div>

              <div>
                <p className="font-bold">
                  Scottish Rite Theater{" "}
                  <span className="text-bodyxs underline font-normal underline-offset-2 ml-2">
                    map
                  </span>
                </p>
                <p>207 W 18th Street</p>
                <p>Austin, TX 78701</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:pl-default mx-auto max-w-screen-xl md:grid md:grid-cols-5 md:items-center md:py-20">
        <Image src={band} alt="band" className="md:col-span-3 order-2" />
        <div className="px-[38px] py-8 space-y-default shadow-md rounded-lg md:col-span-2 md:-mr-20 md:bg-neutral md:order-1 md:z-50">
          <h2 className="font-bevan text-h2 text-secondary-blue">
            Dance the <span className="line-clamp-2">Night Away</span>
          </h2>
          <p className="text-2xl leading-normal">
            Celebrate the holidays and boot scootin&lsquo; to the music of
            Austin favorite
          </p>
          <p className="font-christmas text-callout text-secondary">
            Jeff Hughes and Chaparral
          </p>
          <p className="text-2xl leading-normal font-bold">
            Two-Step Dance Lessons by Rona{" "}
            <span className="font-normal">at 7:15pm</span>
          </p>
        </div>
      </section>

      <section className="px-4 pt-11 pb-10 lg:pb-40 bg-secondary-blue relative lg:max-w-screen-xl lg:mx-auto lg:rounded-2xl">
        <div className="mx-auto max-w-screen-xl">
          <p className="font-heading lg:font-christmas text-h1 lg:text-callout text-center text-secondary-goldstar mb-2">
            Ways to Support
          </p>
          <p className="text-body text-center text-primary-snow">
            All proceeds benefit New Hope Animal Rescue
          </p>
          <Image
            src={newHopeLogo}
            alt="new hope animal rescue"
            className="absolute top-12 right-8 hidden xl:block"
          />

          <div className="grid xl:hidden mt-20 lg:grid-cols-2 xl:grid-cols-4 place-items-center gap-20">
            <div className="size-48 bg-neutral px-4 py-6 rounded-lg relative">
              <Image
                className="absolute -top-8 left-0 scale-150"
                src={bow}
                alt="bow"
              />
              <div className="space-y-3">
                <h3 className="font-bevan text-h3 text-primary">
                  Silent Auction
                </h3>
                <p className="text-bodysm">
                  Bid during the event to win special prizes
                </p>
              </div>
            </div>

            <div className="size-48 bg-neutral px-4 py-6 rounded-lg relative">
              <Image
                className="absolute -top-8 left-0 scale-150"
                src={bow}
                alt="bow"
              />
              <div className="space-y-3">
                <h3 className="font-bevan text-h3 text-primary">Giving Tree</h3>
                <p className="text-bodysm">
                  Scan the Giving Tree QR code to donate.
                </p>
              </div>
            </div>

            <div className="size-48 bg-neutral px-4 py-6 rounded-lg relative">
              <Image
                className="absolute -top-8 left-0 scale-150"
                src={bow}
                alt="bow"
              />
              <div className="space-y-3">
                <h3 className="font-bevan text-h3 text-primary">
                  Holiday Bonus
                </h3>
                <p className="text-bodysm">
                  Donate when purchasing your ticket.
                </p>
              </div>
            </div>

            <div className="size-48 bg-neutral px-4 py-6 rounded-lg relative">
              <Image
                className="absolute -top-8 left-0 scale-150"
                src={bow}
                alt="bow"
              />
              <div className="space-y-3">
                <h3 className="font-bevan text-h3 text-primary">
                  Gift Exchange
                </h3>
                <p className="text-bodysm">
                  Donate new items or professional services to the silent
                  auction.
                </p>
              </div>
            </div>
            <Image
              src={newHopeLogo}
              alt="new hope animal rescue"
              className="lg:col-span-2"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl text-center px-10 pt-8 pb-20">
        <div className="hidden xl:grid xl:grid-cols-4 place-items-center gap-20 -mt-28 mb-16">
          <div className="size-48 bg-neutral px-4 py-6 rounded-lg relative shadow-md">
            <Image
              className="absolute -top-8 left-0 scale-150"
              src={bow}
              alt="bow"
            />
            <div className="space-y-3">
              <h3 className="font-bevan text-h3 text-primary">
                Silent Auction
              </h3>
              <p className="text-bodysm">
                Bid during the event to win special prizes
              </p>
            </div>
          </div>

          <div className="size-48 bg-neutral px-4 py-6 rounded-lg relative shadow-md">
            <Image
              className="absolute -top-8 left-0 scale-150"
              src={bow}
              alt="bow"
            />
            <div className="space-y-3">
              <h3 className="font-bevan text-h3 text-primary">Giving Tree</h3>
              <p className="text-bodysm">
                Scan the Giving Tree QR code to donate.
              </p>
            </div>
          </div>

          <div className="size-48 bg-neutral px-4 py-6 rounded-lg relative shadow-md">
            <Image
              className="absolute -top-8 left-0 scale-150"
              src={bow}
              alt="bow"
            />
            <div className="space-y-3">
              <h3 className="font-bevan text-h3 text-primary">Holiday Bonus</h3>
              <p className="text-bodysm">Donate when purchasing your ticket.</p>
            </div>
          </div>

          <div className="size-48 bg-neutral px-4 py-6 rounded-lg relative shadow-md">
            <Image
              className="absolute -top-8 left-0 scale-150"
              src={bow}
              alt="bow"
            />
            <div className="space-y-3">
              <h3 className="font-bevan text-h3 text-primary">Gift Exchange</h3>
              <p className="text-bodysm">
                Donate new items or professional services to the silent auction.
              </p>
            </div>
          </div>
        </div>
        <p className="font-christmas text-callout text-primary">
          Can&rsquo;t Wait &lsquo;Til Christmas?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
          <Button variant="secondary" asChild className="w-full max-w-[310px]">
            <a href="/">
              Donate Now! <Icons.donate />
            </a>
          </Button>
          <Button asChild className="w-full max-w-[310px]">
            <a href="/">
              Silent Auction Gift <Icons.gift />
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-secondary-blue p-8 space-y-8 ">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-bevan text-h2 text-secondary-goldstar text-center">
            Sponsored by
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-evenly gap:8">
            <a href="https://www.bluebolthomeservices.com" target="_blank">
              <Image src={blueBoltLogo} alt="Blue Bolt Home Services" />
            </a>
            <a href="https://www.majordanger.com" target="_blank">
              <Image src={majorLogo} alt="Major Danger Studio" />
            </a>
            <Image src={cookiesLogo} alt="Cookies" />
          </div>
        </div>
      </section>
    </>
  );
}
