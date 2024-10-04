"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "@/components/icons";
import { volunteerFormSchema } from "@/lib/schemas";
import { sendVolunteer } from "@/lib/airtable";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useToast } from "@/hooks/use-toast";

const Volunteer = () => {
  const { toast } = useToast();
  const volunteerForm = useForm<z.infer<typeof volunteerFormSchema>>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      name: "",
      volunteer: "",
      phone: "",
      email: "",
    },
  });

  function onVolunteerSubmit(values: z.infer<typeof volunteerFormSchema>) {
    sendVolunteer(values);
    toast({
      title: "Form has been submitted",
    });
    volunteerForm.reset();
  }

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
      <section className="max-w-screen-xl mx-auto px-default pb-12">
        <header className="xl:max-w-[1120px] mx-auto">
          <h2 className="text-h2 font-bevan text-center mb-7 xl:mb-default">
            Volunteer
          </h2>
          <p className="text-body mb-11 xl:mb-7">
            Interested in helping make{" "}
            <span className="font-bold">
              Austin Christmas Cookie &apos;Boot Scootin&apos; Ball
            </span>{" "}
            a success? Support the event with set up, break down, greeting, and
            other services. To join the Volunteer Team, fill out the form below.
            We&apos;ll reach out with details and next steps soon.
          </p>
        </header>

        <Form {...volunteerForm}>
          <form
            onSubmit={volunteerForm.handleSubmit(onVolunteerSubmit)}
            className="space-y-12 bg-neutral-forms px-default py-8 md:p-12 rounded-lg shadow-md"
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
    </>
  );
};

export default Volunteer;
