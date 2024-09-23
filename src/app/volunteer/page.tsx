"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "@/components/icons";
import { donationFormSchema, volunteerFormSchema } from "@/lib/schemas";
import { sendDonation, sendVolunteer } from "@/lib/email";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Volunteer = () => {
  const volunteerForm = useForm<z.infer<typeof volunteerFormSchema>>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      name: "",
      volunteer: "",
      phone: "",
      email: "",
    },
  });

  const donationForm = useForm<z.infer<typeof donationFormSchema>>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      name: "",
      donation: "",
      price: undefined,
      bid: undefined,
      phone: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof donationFormSchema>) {
    sendDonation(values);
    donationForm.reset();
  }

  function onVolunteerSubmit(values: z.infer<typeof volunteerFormSchema>) {
    sendVolunteer(values);
    volunteerForm.reset();
  }

  return (
    <main>
      <section className="px-default py-9 lg:py-24">
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
      <section className="max-w-screen-xl mx-auto px-default">
        <h2 className="text-h2 font-bevan text-center mb-10">Volunteer</h2>

        <Form {...volunteerForm}>
          <form
            onSubmit={volunteerForm.handleSubmit(onVolunteerSubmit)}
            className="space-y-8 bg-neutral-forms px-default py-8 md:p-12 rounded-lg shadow-md"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <FormField
                  control={volunteerForm.control}
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
                  control={volunteerForm.control}
                  name="volunteer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How would you like to help?*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Tell what you'd like to do"
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
                  control={volunteerForm.control}
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
                  control={volunteerForm.control}
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

      <section className="max-w-screen-xl mx-auto px-default pt-20 pb-12">
        <h2 className="text-h2 font-bevan text-center mb-10">
          Silent Auction Donation
        </h2>
        <Form {...donationForm}>
          <form
            onSubmit={donationForm.handleSubmit(onSubmit)}
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
                        <Input
                          placeholder="$100"
                          {...field}
                          type="number"
                          inputMode="decimal"
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
                        <Input
                          placeholder="$50"
                          type="number"
                          inputMode="decimal"
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
    </main>
  );
};

export default Volunteer;
