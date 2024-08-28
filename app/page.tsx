import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { CountdownTimer } from "@/components/countdown-timer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const targetDate = "2024-12-07T19:00:00";

  return (
    <>
      <section className="flex flex-col h-[450px] lg:h-[85vh] w-auto relative pt-6 lg:pt-10 px-4">
        <div className="text-center h-full flex flex-col justify-between z-40">
          <div className="lg:space-y-4 max-w-screen-lg mx-auto">
            <p className="text-2xl lg:mb-16 lg:text-5xl font-bold text-[#AF5138]">
              Save the date!
            </p>
            <h1 className="text-2xl lg:text-7xl font-black italic text-[#8A3F2C] mt-8">
              Merry Christmas Cookie Charity Ball
            </h1>
            <p className="text-2xl lg:text-5xl font-black italic text-[#D15130]">
              Fundraiser
            </p>
          </div>

          <p className="text-xl lg:text-5xl font-black pb-4 lg:pb-8 text-[#AF5138]">
            Proceeds go to benefit New Hope Animal Rescue
          </p>
        </div>
        <img
          src="herov2.png"
          alt="band"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
      </section>

      <section className="py-16 px-4 bg-[#FFF9EC] ">
        <div className="grid lg:grid-cols-4 gap-4 items-center max-w-screen-2xl mx-auto">
          <img
            src="cat.png"
            alt="band"
            className="rounded-lg w-full h-auto col-span-1 hidden lg:block"
          />
          <div className="max-w-screen-lg mx-auto px-4 text-center space-y-10 col-span-2">
            <h2 className="text-3xl lg:text-7xl font-black text-center text-[#8A3F2C]">
              When & Where?
            </h2>
            <div
              className={cn(
                "text-xl lg:text-3xl lg:leading-10",
                poppins.className
              )}
            >
              <p>December 7, 2024</p>
              <p>7pm to midnight</p>
              <p>Scottish Rite Theatre</p>
              <p>207 W 18th St., Austin, TX 78701</p>
            </div>

            <Button variant="primary" className="text-xl lg:text-3xl px-16">
              Ticket Information
            </Button>
            <CountdownTimer targetDate={targetDate} />
          </div>
          <img
            src="dog.png"
            alt="band"
            className="rounded-lg w-full h-auto hidden lg:block"
          />
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto my-8 py-16">
        <div
          className="flex flex-col lg:flex-row items-center gap-16
         text-center lg:text-left"
        >
          <div className="lg:w-1/2 px-4">
            <h2 className="text-3xl lg:text-7xl font-black text-[#8A3F2C] mb-8">
              Musical Guests
            </h2>
            <p
              className={cn(
                "text-xl lg:text-3xl lg:leading-relaxed",
                poppins.className
              )}
            >
              Join us as we celebrate the holidays and boot scoot to the music
              of our favorite Austin band...
            </p>
            <p
              className={cn("text-xl lg:text-3xl font-bold", poppins.className)}
            >
              Jeff Hughes and Chaparral
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="band.jpg"
              alt="band"
              className="rounded-lg shadow-md w-full h-auto"
            />
            <p className={cn("text-2xl lg:text-3xl mt-4", poppins.className)}>
              Two Step Dance Lessons by Rona at 7:15pm
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <img
            src="puppies.jpeg"
            alt="puppies/kittens"
            className="shadow-md h-[400px] lg:h-[600px] aspect-[13/16] object-cover"
          />
          <div className={cn("space-y-4 lg:space-y-6 px-4", poppins.className)}>
            <p className="text-xl lg:text-3xl lg:leading-10">
              Proceeds go to benefit...
            </p>
            <p className="font-bold underline text-xl lg:text-3xl lg:leading-10">
              New Hope Animal Rescue
            </p>
            <p className="text-xl lg:text-3xl lg:leading-10">
              Here are some of the ways you can help raise funds for NHAR:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-xl lg:text-3xl lg:leading-10">
              <li>Bid on items at the Silent Auction the night of the event</li>
              <li>Scan the QR Christmas tree ornaments in the lobby</li>
              <li>
                Make a donation above the ticket price when purchasing tickets
                online
              </li>
            </ul>
            <Button
              variant="primary"
              className="w-full md:w-fit lg:w-full text-xl lg:text-3xl"
            >
              Ticket Information
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center justify-center text-center lg:text-left">
          <div className="space-y-8">
            <h2 className="text-[#8A3F2C] font-black text-3xl lg:text-5xl lg:mb-4">
              Other ways to help
            </h2>
            <Button variant="outline" className={cn(poppins.className)}>
              Sorry I Can&apos;t Attend But Would Like To{" "}
              <span className="font-bold">Make A Donation Anyway</span>
            </Button>
            <Button variant="outline" className={cn(poppins.className)}>
              I Want To Donate A New / Unused{" "}
              <span className="font-bold">Item For The Silent Auction</span>
            </Button>
          </div>
          <img
            src="cartoonanimal.png"
            alt="Singing animal"
            className="w-full h-[400px] object-contain"
            height={300}
            width={300}
          />
        </div>
      </section>

      <footer className="py-10 md:py-20 lg:py-28 bg-[url('/footer.jpg')] bg-no-repeat bg-center bg-cover grid place-items-center">
        <h2 className="text-xl max-w-56 md:text-2xl lg:text-5xl text-[#AF5138] font-extrabold md:max-w-xl text-center leading-snug lg:leading-normal">
          Sponsored by Mark&apos;s 60th Birthday
        </h2>
      </footer>
    </>
  );
}
