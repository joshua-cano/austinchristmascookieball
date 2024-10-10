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

  const webhookUrl = process.env.MAKE_WEBHOOK_URL_VOLUNTEER;

  // Call Make webhook with form data
  const response = await fetch(webhookUrl!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      role: formData.volunteer,
      phone: formData.phone,
      email: formData.email,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send data to webhook");
  }

  console.log("Webhook sent successfully");
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

  const webhookUrl = process.env.MAKE_WEBHOOK_URL_AUCTION;

  // Call Make webhook with form data
  const response = await fetch(webhookUrl!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      donation: formData.donation,
      price: formData.price,
      bid: formData.bid,
      phone: formData.phone,
      email: formData.email,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send data to webhook");
  }

  console.log("Webhook sent successfully");
};
