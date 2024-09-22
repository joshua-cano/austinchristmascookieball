import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";

const Volunteer = () => {
  return (
    <main>
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
      <section className="max-w-screen-xl mx-auto px-default -mt-56 lg:-mt-96">
        <h2 className="text-h2 font-bevan text-center mb-10">Volunteer</h2>

        <form className="bg-neutral-forms px-default py-8 md:p-12  rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label>Name</Label>
              <Input placeholder="First & Last Name" />
            </div>
            <div>
              <Label>How would you like to help?</Label>
              <Input placeholder="Tell what you'd like to do" />
            </div>

            <div>
              <Label>Phone (optional)</Label>
              <Input placeholder="(512) 555-0000" />
            </div>

            <div>
              <Label>Email</Label>
              <Input placeholder="email@gmail.com" />
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              variant="blue"
              type="submit"
              className="mt-8 h-[50px] w-[150px]"
            >
              Submit
            </Button>
          </div>
        </form>
      </section>
      <section className="max-w-screen-xl mx-auto px-default pt-20 pb-12">
        <h2 className="text-h2 font-bevan text-center mb-10">
          Silent Auction Donation
        </h2>

        <form className="bg-neutral-forms px-default py-8 md:p-12  rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label>Name</Label>
              <Input placeholder="First & Last Name" />
            </div>
            <div>
              <Label>What are you donating?</Label>
              <Input placeholder="Donation" />
            </div>
            <div>
              <Label>Retail Price</Label>
              <Input placeholder="$100" />
            </div>
            <div>
              <Label>Suggested Starting Bid (optional)</Label>
              <Input placeholder="$50" />
            </div>
            <div>
              <Label>Phone (optional)</Label>
              <Input placeholder="(512) 555-0000" />
            </div>

            <div>
              <Label>Email</Label>
              <Input placeholder="email@gmail.com" />
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              variant="blue"
              type="submit"
              className="mt-8 h-[50px] w-[150px]"
            >
              Submit
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Volunteer;
