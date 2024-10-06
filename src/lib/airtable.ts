"use server";

import { z } from "zod";
import { donationFormSchema, volunteerFormSchema } from "./schemas";
// import Airtable from "airtable";
import {
  VolunteerTemplate,
  SilentAuctionTemplate,
} from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Volunteer
export const sendVolunteer = async (
  formData: z.infer<typeof volunteerFormSchema>
) => {
  const { data } = await resend.emails.send({
    from: "ACB <onboarding@resend.dev>",
    to: "mark@bluebolthomeservices.com",
    subject: "Volunteer Form ACB",
    react: VolunteerTemplate({
      name: formData.name,
      volunteer: formData.volunteer,
      phone: formData.phone,
      email: formData.email,
    }),
  });

  console.log(data);
  // const base = new Airtable({ apiKey: process.env.AIRTABLE_API_TOKEN }).base(
  //   process.env.AIRTABLE_BASEID!
  // );

  // await base("tblVbkbWZ8wrgtfsv").create(
  //   {
  //     Name: formData.name,
  //     Role: formData.volunteer,
  //     Phone: formData.phone,
  //     Email: formData.email,
  //   },
  //   { typecast: true },
  //   function (err, record) {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(record?.getId());
  //   }
  // );
};

// Donation
export const sendDonation = async (
  formData: z.infer<typeof donationFormSchema>
) => {
  const { data } = await resend.emails.send({
    from: "ACB <onboarding@resend.dev>",
    to: "mark@bluebolthomeservices.com",
    subject: "Silent Auction Form ACB",
    react: SilentAuctionTemplate({
      name: formData.name,
      donation: formData.donation,
      price: formData.price,
      bid: formData.bid,
      phone: formData.phone,
      email: formData.email,
    }),
  });

  console.log(data);
  // const base = new Airtable({ apiKey: process.env.AIRTABLE_API_TOKEN }).base(
  //   process.env.AIRTABLE_BASEID!
  // );

  // await base("tblvfAofraaj0Vdw8").create(
  //   {
  //     Name: formData.name,
  //     Donation: formData.donation,
  //     Price: formData.price,
  //     Bid: formData.bid,
  //     Phone: formData.phone,
  //     Email: formData.email,
  //   },
  //   { typecast: true },
  //   function (err, record) {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(record?.getId());
  //   }
  // );
};
