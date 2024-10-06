"use server";

import { z } from "zod";
import { donationFormSchema, volunteerFormSchema } from "./schemas";
import {
  VolunteerTemplate,
  SilentAuctionTemplate,
} from "@/components/email-template";
import { Resend } from "resend";

// Volunteer
export const sendVolunteer = async (
  formData: z.infer<typeof volunteerFormSchema>
) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "ACB <hello@austinchristmascookieball.com>",
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
};

// Donation
export const sendDonation = async (
  formData: z.infer<typeof donationFormSchema>
) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "ACB <hello@austinchristmascookieball.com>",
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
};
