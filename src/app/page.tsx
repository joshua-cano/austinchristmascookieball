import { Button } from "@/components/ui/button";
import Image from "next/image";
import band from "../../public/band.png";
import goodDogLogo from "../../public/gooddog-logo.png";
import pawsLogo from "../../public/paws-logo.png";
import cookie from "../../public/cookie.png";
import catDog from "../../public/cat-dog.png";
import newHopeLogo from "../../public/new-hope-logo.png";
import majorLogo from "../../public/major-danger-studio-logo.png";
import blueboltLogo from "../../public/blue-bolt-logo.png";
import dancingAustinLogo from "../../public/dancin-austin-logo.png";
import southpawsLogo from "../../public/southpaws-logo.png";
import bettyLogo from "../../public/betty.png";
import fossilLogo from "../../public/fossil-ridge-logo.png";
import backupBakery from "../../public/backup-bakery.jpeg";
import aryelMuse from "../../public/aryel-muse.jpeg";
import { Icons } from "@/components/icons";
import { CountdownTimer } from "@/components/countdown-timer";
import { SupportDetail } from "@/components/support-detail";
import { CustomVideo } from "@/components/custom-video";

export default function Home() {
  const targetDate = "2024-12-07T18:00:00";

  return (
    <>
      <section className="px-default py-9 lg:py-24">
        <div className="mx-auto max-w-screen-xl lg:grid lg:grid-cols-7 lg:gap-5">
          <div className="lg:col-span-5 space-y-4">
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
              <a
                target="_blank"
                href="https://www.nhanimalrescue.org"
                className="font-bold underline"
              >
                New Hope Animal Rescue
              </a>
            </p>
            <div className="flex items-start sm:items-center gap-2">
              <p className="font-christmas font-bold text-calloutsm text-secondary sm:order-2">
                Hosted by Mark Edwards in celebration of his 60th Birthday
              </p>
              <Image
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/512.webp"
                width={50}
                height={50}
                alt="cake"
                className="sm:order-1 flex-shrink-0"
              />
            </div>

            <div className="hidden lg:block">
              <Button asChild className="w-full max-w-[300px]">
                <a
                  href="https://austinchristmascookieball2024.ticketspice.com/austin-christmas-cookie-boot-scootin-ball"
                  target="_blank"
                  className="mt-8"
                >
                  Get Your Tickets <Icons.star className="size-5" />
                </a>
              </Button>
            </div>
          </div>

          <Image
            className="hidden lg:block lg:col-span-2"
            src={cookie}
            alt="cookie"
          />

          <div className="flex flex-col lg:hidden mt-8">
            <Image src={cookie} alt="cookie" className="self-center" />
            <Button asChild className="w-full">
              <a
                href="https://austinchristmascookieball2024.ticketspice.com/austin-christmas-cookie-boot-scootin-ball"
                target="_blank"
                className="mt-8"
              >
                Get Your Tickets <Icons.star className="size-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="lg:px-default flex flex-col items-center">
        <div className="mx-auto max-w-screen-xl lg:grid lg:grid-cols-7 lg:items-center">
          <Image
            src={catDog}
            className="col-span-4 px-default lg:px-0"
            alt="cat and dog"
          ></Image>

          <div className="bg-neutral px-10 space-y-2 p-12 lg:rounded-[28px] lg:shadow-md lg:-ml-20 col-span-3 -mt-12 lg:m-0">
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
                  <a
                    href="https://www.google.com/maps/place/Austin+Scottish+Rite+Theater/@30.2862466,-97.7452655,16z/data=!4m6!3m5!1s0x8644b59e3ea94b9d:0x5d0413613afefd66!8m2!3d30.2799773!4d-97.7406312!16s%2Fm%2F0k2kbrv?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="text-bodyxs underline font-normal underline-offset-2 ml-2"
                  >
                    map
                  </a>
                </p>
                <p>207 W 18th Street</p>
                <p>Austin, TX 78701</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:pl-default mx-auto max-w-screen-xl md:grid md:grid-cols-5 md:items-center md:py-20 bg-neutral lg:bg-inherit">
        <Image src={band} alt="band" className="md:col-span-3 order-2" />
        <div className="px-[38px] py-8 space-y-default shadow-md lg:rounded-[28px] md:col-span-2 md:-mr-20 md:bg-neutral md:order-1 md:z-10">
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

      <section className="md:pl-default mx-auto max-w-screen-xl md:grid md:grid-cols-5 md:items-center md:pb-32 md:pt-20 bg-neutral lg:bg-inherit">
        <div className="col-span-3">
          <CustomVideo />
        </div>
        <div className="px-[38px] py-12 space-y-default shadow-md rounded-[28px] md:col-span-2 md:-ml-20 md:bg-neutral md:z-10">
          <Image src={newHopeLogo} width={340} alt="New Hope Animal Rescue" />
          <p className="text-2xl leading-normal">
            Support dogs and cats, puppies and kittens, saved from euthanasia
            shelters with the resources and medical care they need to find their
            loving forever homes.
          </p>
        </div>
      </section>

      <section className="px-4 pt-11 pb-20 xl:pb-40 bg-secondary-blue lg:max-w-screen-xl lg:mx-auto lg:rounded-[28px]">
        <div className="relative">
          <p className="font-heading text-h1 text-center text-secondary-goldstar mb-2 lg:font-christmas lg:text-callout">
            Ways to Support
          </p>
          <p className="text-body text-center text-primary-snow">
            Proceeds benefit New Hope Animal Rescue
          </p>

          <div className="grid mt-20 gap-20 lg:grid-cols-2 xl:grid-cols-4 place-items-center xl:absolute xl:w-full">
            <SupportDetail
              heading="Silent Auction"
              description="Bid during the event to win special prizes."
            />
            <SupportDetail
              heading="Giving Tree"
              description="Scan the Giving Tree QR code to donate."
            />
            <SupportDetail
              heading="Holiday Bonus"
              description="Invite Friends and Family to join the fun!"
            />
            <SupportDetail
              heading="Gift Exchange"
              description="Donate new items or professional services to the silent auction."
            />
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-default text-center pt-8 pb-24 xl:pb-28 xl:pt-48">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 xl:gap-16">
          <Icons.star className="text-secondary-goldstar size-8" />
          <CountdownTimer targetDate={targetDate} />
          <Icons.star className="text-secondary-goldstar size-8" />
        </div>
        <h2 className="font-bevan text-h2 text-primary text-center mt-5">
          Until the Event
        </h2>

        <p className="font-christmas text-callout text-primary mt-16">
          Can&rsquo;t Wait &lsquo;Til Christmas?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
          <Button variant="secondary" asChild className="w-full max-w-[310px]">
            <a href="/donate">
              Donate Now! <Icons.donate />
            </a>
          </Button>
          <Button asChild className="w-full max-w-[310px]">
            <a href="/silent-auction">
              Silent Auction Gift <Icons.gift />
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-secondary-blue p-12 space-y-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-bevan text-[24px] md:text-[28px] max-w-2xl mx-auto leading-normal text-secondary-goldstar text-center">
            Thank You To These Local Businesses For Their Generous Donations
          </h2>
          <div className="grid lg:grid-cols-5 gap-12 mt-8 place-items-center">
            <a href="https://www.bluebolthomeservices.com" target="_blank">
              <Image
                src={blueboltLogo}
                alt="Blue Bolt Home Services"
                className="-mb-8 lg:mb-0"
              />
            </a>
            <a href="https://www.majordanger.com" target="_blank">
              <Image src={majorLogo} alt="Major Danger Studio" />
            </a>
            <a href="https://www.gooddogtraining.biz" target="_blank">
              <Image
                src={goodDogLogo}
                className="w-48"
                alt="Good Dog Training"
              />
            </a>
            <a href="https://www.pawsonchicon.com" target="_blank">
              <Image
                src={pawsLogo}
                className="w-24 mt-8 md:mt-0"
                alt="Paws on Chicon"
              />
            </a>

            <a href="https://www.dancinaustin.com" target="_blank">
              <Image
                src={dancingAustinLogo}
                className="w-48"
                alt="Paws on Chicon"
              />
            </a>
            <a href="https://southpawsplayschool.com" target="_blank">
              <Image
                src={southpawsLogo}
                className="w-40"
                alt="Paws on Chicon"
              />
            </a>
            <a href="https://urbanbetty.com" target="_blank">
              <Image src={bettyLogo} className="w-40" alt="Paws on Chicon" />
            </a>
            <a href="https://www.fossilridgeatx.com" target="_blank">
              <Image src={fossilLogo} className="w-40" alt="Paws on Chicon" />
            </a>
            <a href="https://backupbakery.com" target="_blank">
              <Image src={backupBakery} className="w-32" alt="Paws on Chicon" />
            </a>
            <a href="https://aryelmuseltd.setmore.com" target="_blank">
              <Image src={aryelMuse} className="w-40" alt="Aryel Muse" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
