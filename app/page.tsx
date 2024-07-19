import { cn } from "@/lib/utils";
import { Courgette } from "next/font/google";
import { CountdownTimer } from "@/components/countdown-timer";
import { Button } from "@/components/ui/button";

const mountains = Courgette({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const targetDate = "2024-12-07T19:00:00"; // Set your target date here

  const sponsors = [
    {
      name: "Blue Bolt Home Services",
      website: "https://bluebolthomeservices.com",
    },
    // Add more sponsors as needed
  ];

  return (
    <>
      <div
        className="flex flex-col bg-[url('/hero-new.jpg')] bg-no-repeat bg-center
       bg-cover min-h-screen bg-blend-overlay bg-stone-400"
      >
        <div className="text-center font-sans text-slate-700">
          <div className="px-2 pt-6 sm:p-10 sm:pb-4 max-w-[650px] mx-auto">
            <div className="font-bold space-y-2">
              <h1 className={cn("text-4xl md:text-6xl", mountains.className)}>
                1st Annual Christmas Cookie Hoedown
              </h1>
            </div>
            <p
              className={cn(
                "text-xl sm:text-2xl mt-4 mb-6",
                mountains.className
              )}
            >
              Mark&apos;s 60th Birthday Celebration
            </p>
            <p className="text-base sm:text-xl font-serif">
              Let&apos;s two-step, waltz and polka the night away at the
              Christmas event of the year!
            </p>
            <p className="text-base sm:text-xl font-serif">
              Bring your homemade Christmas cookies and share your favorite
              recipes. Festive attire is suggested.
            </p>
            <div className="text-base sm:text-xl mt-6 mb-6 font-serif">
              <p>December 7, 2024</p>
              <p>8pm to midnight</p>
              <p>Scottish Rite Theatre</p>
              <p className="text-amber-800">207 W 18th St., Austin, TX 78701</p>
            </div>
            <Button size="lg" className="mb-2 bg-slate-800">
              RSVP
            </Button>
          </div>
        </div>
        <CountdownTimer targetDate={targetDate} />
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-center mb-16 text-gray-800">
            Sponsors and Donors
          </h1>

          <div className="grid grid-cols-1  gap-8">
            {sponsors.map((sponsor, index) => (
              <SponsorCard
                key={index}
                name={sponsor.name}
                website={sponsor.website}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto my-8 py-16">
        <div className="flex flex-col md:flex-row items-center text-center sm:text-left">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Musical guests: Jeff Hughes and Chaparral
            </h2>
          </div>
          <div className="md:w-1/2">
            <img
              src="band.jpg"
              alt="band"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="container py-16">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            Silent Auction
          </h2>
          <p className="text-lg text-gray-700">
            All proceeds go to support our local dog and cat rescue
            organization. Help us make a difference in the lives of our furry
            friends!
          </p>
        </div>
      </section>
    </>
  );
}

interface SponsorCardProps {
  name: string;
  website: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, website }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/Blue-Bolt-Badge-Logo.png"
        alt="Blue Bolt Home Services"
        width={150}
        height={150}
      />
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2"
      >
        {website.slice(8)}
      </a>
    </div>
  );
};
