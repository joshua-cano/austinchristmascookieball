"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "@/components/icons";
import { donationFormSchema } from "@/lib/schemas";
import { sendDonation } from "@/lib/airtable";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useToast } from "@/hooks/use-toast";

const SilentAuction = () => {
  const { toast } = useToast();

  const donationForm = useForm<z.infer<typeof donationFormSchema>>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      name: "",
      donation: "",
      price: "",
      bid: "",
      phone: "",
      email: "",
    },
  });

  function onDonationSubmit(values: z.infer<typeof donationFormSchema>) {
    sendDonation(values);
    toast({
      title: "Form has been submitted",
    });
    donationForm.reset();
  }

  return (
    <>
      <section className="px-default pt-9 pb-20 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="space-y-6">
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

      <section className="max-w-screen-xl mx-auto px-default pb-12">
        <header className="xl:max-w-[1120px] mx-auto">
          <h2 className="text-h2 font-bevan text-center mb-7 xl:mb-default">
            Silent Auction Donation
          </h2>
          <p className="text-body mb-11 xl:mb-7">
            Donate new items or professional services to the silent auction to
            support fundraising during the{" "}
            <span className="font-bold">
              Austin Christmas Cookie &apos;Boot Scootin&apos; Ball.
            </span>{" "}
            To get started, share details about your donation using the form
            below. We&apos;ll follow up to coordinate pick up/drop off and
            follow up with auction winners.
          </p>
        </header>
        <Form {...donationForm}>
          <form
            onSubmit={donationForm.handleSubmit(onDonationSubmit)}
            className="space-y-8 bg-neutral-forms px-default py-8 md:p-12 rounded-lg shadow-md"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <FormField
                  control={donationForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="First & Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={donationForm.control}
                  name="donation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What are you donating?*</FormLabel>
                      <FormControl>
                        <Input placeholder="Donation" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={donationForm.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Retail Price*</FormLabel>
                      <FormControl>
                        <Input placeholder="Example... $100" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={donationForm.control}
                  name="bid"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Suggested Starting Bid{" "}
                        <span className="text-bodysm font-light">
                          (optional)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Example... $50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={donationForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Phone{" "}
                        <span className="text-bodysm font-light">
                          (optional)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(512) 555-0000"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={donationForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="email@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                variant="blue"
                type="submit"
                className="h-[50px] w-[150px]"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

export default SilentAuction;
