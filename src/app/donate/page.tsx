import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

const Volunteer = () => {
  return (
    <>
      <section className="px-default pt-9 pb-20 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="font-bebas text-subheading text-secondary-evergreen">
                Fundraiser
              </p>
              <h1 className="text-h1 font-heading text-primary">
                Austin Christmas Cookie &lsquo;Boot Scootin&rsquo; Ball
              </h1>
            </div>

            <Button asChild className="w-full max-w-[300px]">
              <a
                href="https://austinchristmascookieball2024.ticketspice.com/austin-christmas-cookie-boot-scootin-ball"
                target="_blank"
              >
                Get Your Tickets <Icons.star />
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-default pb-10">
        <header className="xl:max-w-[1120px] mx-auto">
          <h2 className="text-h2 font-bevan text-center mb-7 xl:mb-default">
            Donate
          </h2>
          <p className="text-body mb-11 xl:mb-7">
            We hope you can boot scoot into the Holiday Season with us at the{" "}
            <span className="font-bold">
              Austin Christmas Cookie &apos;Boot Scootin&apos; Ball
            </span>
            . If you can&apos;t make the event, don&apos;t worry you can still
            support our mission to raise funds for{" "}
            <a
              target="_blank"
              href="https://www.nhanimalrescue.org"
              className="font-bold underline"
            >
              New Hope Animal Rescue
            </a>
            . For large donations, contact us at{" "}
            <span className="font-bold break-words">
              mark@bluebolthomeservices.com.
            </span>
          </p>
        </header>
      </section>

      <section className="max-w-screen-xl mx-auto px-default">
        <div className="grid lg:grid-cols-3 gap-8 text-center items-center">
          <div className="space-y-12 bg-neutral py-12 rounded-lg">
            <h2 className="text-h2 font-bevan">Paypal</h2>
            <Button variant="secondary">
              <a href="/" target="_blank">
                Donate via Paypal
              </a>
            </Button>
          </div>
          <div className="space-y-12 bg-neutral py-12 rounded-lg">
            <h2 className="text-h2 font-bevan">Square</h2>
            <Button variant="secondary">
              <a
                href="https://square.link/u/nkbPwW7m?src=sheet"
                target="_blank"
              >
                Donate via Square
              </a>
            </Button>
          </div>
          <div className="space-y-12 bg-neutral py-12 rounded-lg">
            <h2 className="text-h2 font-bevan">Venmo</h2>
            <Button variant="secondary">
              <a
                href="https://account.venmo.com/payment-link?audience=public&recipients=%2Cmark-Edwards-35&txn=pay"
                target="_blank"
              >
                Donate via Venmo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Volunteer;
