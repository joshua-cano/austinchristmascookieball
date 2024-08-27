import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
      <section className="flex flex-col h-[400px] md:h-[900px] w-auto relative pt-10">
        <div className="text-center h-full flex flex-col justify-between z-40">
          <div className="md:space-y-4 max-w-screen-lg mx-auto">
            <p className="text-2xl md:mb-16 md:text-5xl font-bold text-[#AF5138]">
              Save the date!
            </p>
            <h1 className="text-2xl md:text-7xl font-black italic text-[#8A3F2C]">
              Merry Christmas Cookie Charity Ball
            </h1>
            <p className="text-xl md:text-5xl font-black italic text-[#D15130]">
              Fundraiser
            </p>
          </div>

          <p className="text-xl md:text-5xl font-black pb-4 md:pb-10 text-[#AF5138]">
            Proceeds go to benefit New Hope Animal Rescue
          </p>
        </div>
        <img
          src="herov2.png"
          alt="band"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
      </section>

      <section className="py-16 bg-[#FFF9EC]">
        <div className="max-w-screen-lg mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl sm:text-7xl font-black text-center text-[#8A3F2C]">
            When & Where?
          </h2>
          <div
            className={cn(
              "text-xl sm:text-3xl sm:leading-10",
              poppins.className
            )}
          >
            <p>December 7, 2024</p>
            <p>7pm to midnight</p>
            <p>Scottish Rite Theatre</p>
            <p>207 W 18th St., Austin, TX 78701</p>
          </div>

          <Button variant="primary" size="xl" className="text-xl sm:text-3xl">
            Ticket Information
          </Button>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto my-8 py-16">
        <div
          className="flex flex-col md:flex-row items-center gap-16
         text-center sm:text-left"
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-7xl font-black text-[#8A3F2C] mb-8">
              Musical Guests
            </h2>
            <p className={cn("text-xl sm:text-3xl", poppins.className)}>
              Join us as we celebrate the holidays and boot scoot to the music
              of our favorite Austin band...
            </p>
            <p
              className={cn("text-xl sm:text-3xl font-bold", poppins.className)}
            >
              Jeff Hughes and Chaparral
            </p>
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

      <section className="max-w-screen-xl mx-auto py-16">
        <div className="flex flex-col sm:flex-row gap-8">
          <img
            src="puppies.jpeg"
            alt="puppies/kittens"
            className="shadow-md h-[400px] md:h-[600px] aspect-[13/16] object-cover"
          />
          <div className={cn("space-y-8 px-4", poppins.className)}>
            <p className="text-xl sm:text-3xl sm:leading-10">
              Proceeds go to benefit{" "}
              <span className="font-bold underline">
                New Hope Animal Rescue.
              </span>
            </p>
            <p className="text-xl sm:text-3xl sm:leading-10">
              Here are some of the ways you can hlep raise funds for NHAR:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-xl sm:text-3xl sm:leading-10">
              <li>Bid on items at the Silent Auction the night of the event</li>
              <li>Scan the QR Christmas tree ornaments in the lobby</li>
              <li>
                Make a donation above the ticket price when purchasing tickets
                online
              </li>
            </ul>
            <Button variant="primary" size="xl" className="text-xl sm:text-4xl">
              Ticket Information
            </Button>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-[#8A3F2C] font-black text-2xl md:text-6xl">
              Other ways to help
            </h2>
            <Button variant="outline" size="xl">
              Sorry I Can't Attend But Would Like To{" "}
              <span className="font-bold">Make A Donation Anyway</span>
            </Button>
            <Button variant="outline" size="xl">
              I Want To Donate A New / Unused{" "}
              <span className="font-bold">Item For The Silent Auction</span>
            </Button>
          </div>
          <img src="cartoonanimal.png" alt="" />
        </div>
      </section>
      <footer
        className="grid place-items-center"
        style={{ gridTemplateAreas: "stack" }}
      >
        <img
          src="footer.jpg"
          alt="puppies/kittens"
          style={{ gridArea: "stack" }}
        />
        <h2
          className="text-lg max-w-48 md:text-3xl text-[#AF5138] font-extrabold md:max-w-xl text-center leading-snug"
          style={{ gridArea: "stack" }}
        >
          Sponsored by Mark&apos;s 60th Birthday
        </h2>
      </footer>
    </>
  );
}
