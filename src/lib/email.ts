"use server";

import {
  DonationTemplate,
  VolunteerTemplate,
} from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";
import { donationFormSchema, volunteerFormSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendDonation = async (
  emailFormData: z.infer<typeof donationFormSchema>
) => {
  try {
    const { error } = await resend.emails.send({
      from: `Silent Auction Donation Form <onboarding@resend.dev>`,
      to: "joshua.cano18@gmail.com",
      subject: "Silent Auction Donation",
      react: DonationTemplate({
        name: emailFormData.name,
        email: emailFormData.email,
        price: emailFormData.price,
        bid: emailFormData.bid,
        phone: emailFormData.phone,
        donation: emailFormData.donation,
      }),
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};

export const sendVolunteer = async (
  emailFormData: z.infer<typeof volunteerFormSchema>
) => {
  try {
    const { error } = await resend.emails.send({
      from: `Volunteer Donation Form <onboarding@resend.dev>`,
      to: "joshua.cano18@gmail.com",
      subject: "Volunteer Donation",
      react: VolunteerTemplate({
        name: emailFormData.name,
        email: emailFormData.email,
        phone: emailFormData.phone,
        volunteer: emailFormData.volunteer,
      }),
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};
