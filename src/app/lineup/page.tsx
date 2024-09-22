import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CountdownTimer } from "@/components/countdown-timer";
import { Icons } from "@/components/icons";

const Lineup = () => {
  const targetDate = "2024-12-07T18:00:00";

  return (
    <>
      <section className="px-default pb-72 pt-9 lg:pb-9 lg:py-24 bg-hero bg-neutral-background bg-center lg:h-[900px]">
        <div className="mx-auto max-w-screen-xl">
          <div className="lg:col-span-2 space-y-4 ">
            <div>
              <p className="font-bebas text-subheading text-secondary-evergreen">
                Fundraiser
              </p>
              <h1 className="text-h1 font-heading text-primary">
                Austin Christmas Cookie &lsquo;Boot Scootin&rsquo; Ball
              </h1>
            </div>

            <Button asChild className="w-full max-w-[300px]">
              <a href="/" className="mt-8">
                Get Your Tickets <Icons.star />
              </a>
            </Button>
            <p className="italic text-caption">
              25% Off Bundles Available until October 31
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-default -mt-56 lg:-mt-[26rem]">
        <h2 className="text-h2 font-bevan text-center mb-10">
          Schedule of Events
        </h2>
        <h3 className="text-h3 font-bevan mb-4">Before the Event</h3>

        <div className="flex flex-col gap-5 md:gap-7">
          <div className="bg-white rounded-lg space-y-5 p-5 text-secondary-blue md:space-y-0 md:p-7 md:flex md:items-center md:gap-16">
            <p className="text-schTime">Oct. 31</p>
            <div className="mr-auto">
              <p className="text-schName font-bevan">
                Early Bird Discount Ends
              </p>
              <p className="text-schDetail">Get 25% Off Bundle of 10 Tickets</p>
            </div>
            <p className="text-schLocation italic">Online</p>
          </div>

          <div className="bg-white rounded-lg space-y-5 p-5 text-secondary-blue md:space-y-0 md:p-7 md:flex md:items-center md:gap-16">
            <p className="text-schTime">Dec. 1</p>
            <p className="text-schName font-bevan mr-auto">
              Silent Auction Donations Close
            </p>
            <p className="text-schLocation italic">Online</p>
          </div>

          <div className="bg-white rounded-lg space-y-5 p-5 text-secondary-blue md:space-y-0 md:p-7 md:flex md:items-center md:gap-16">
            <p className="text-schTime">Dec. 6</p>
            <p className="text-schName font-bevan mr-auto">
              Ticket Pre-sales End
            </p>
            <p className="text-schLocation italic">Online</p>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-default py-20 space-y-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Icons.star className="text-secondary-goldstar" />
          <CountdownTimer targetDate={targetDate} />
          <Icons.star className="text-secondary-goldstar" />
        </div>
        <h2 className="font-bevan text-h2 text-primary text-center">
          Until the Event
        </h2>
      </section>

      <section className="max-w-screen-xl mx-auto px-default">
        <h3 className="text-h3 font-bevan mb-4">Event Night</h3>

        <div className="flex flex-col gap-5 md:gap-7">
          <div className="bg-white rounded-lg space-y-5 p-5 text-secondary-blue md:space-y-0 md:p-7 md:flex md:items-center md:gap-16">
            <p className="text-schTime">7:00 PM</p>
            <div className="mr-auto">
              <p className="text-schName font-bevan">
                Doors & Silent Auction Open
              </p>
              <p className="text-schDetail">
                Giving Tree Donations via QR Code
              </p>
            </div>
            <p className="text-schLocation italic">Lobby</p>
          </div>

          <div className="bg-white rounded-lg space-y-5 p-5 text-secondary-blue md:space-y-0 md:p-7 md:flex md:items-center md:gap-16">
            <p className="text-schTime">7:15 PM</p>
            <p className="text-schName font-bevan mr-auto">
              Two-Step Dance Lessons
            </p>
            <p className="text-schLocation italic">Dance Hall</p>
          </div>

          <div className="bg-white rounded-lg space-y-5 p-5 text-secondary-blue md:space-y-0 md:p-7 md:flex md:items-center md:gap-16">
            <p className="text-schTime">8:00 PM</p>
            <p className="text-schName font-bevan mr-auto">
              Jeff Hughes & Chaparral
            </p>
            <p className="text-schLocation italic">Dance Hall</p>
          </div>

          <div className="bg-white rounded-lg space-y-5 p-5 text-secondary-blue md:space-y-0 md:p-7 md:flex md:items-center md:gap-16">
            <p className="text-schTime">9:00 PM</p>
            <p className="text-schName font-bevan mr-auto">
              Silent Auction Closes
            </p>
            <p className="text-schLocation italic">Lobby</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lineup;
