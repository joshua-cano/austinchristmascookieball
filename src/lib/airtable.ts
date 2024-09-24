"use server";

import { z } from "zod";
import { donationFormSchema, volunteerFormSchema } from "./schemas";
import Airtable from "airtable";

// Volunteer
export const sendVolunteer = async (
  formData: z.infer<typeof volunteerFormSchema>
) => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_TOKEN }).base(
    process.env.AIRTABLE_BASEID!
  );

  base("Volunteer Form").create(
    {
      Name: formData.name,
      "Volunteer Role": formData.volunteer,
      Phone: formData.phone,
      Email: formData.email,
    },
    function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(record?.getId());
    }
  );
};

// Donation
export const sendDonation = async (
  formData: z.infer<typeof donationFormSchema>
) => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_TOKEN }).base(
    process.env.AIRTABLE_BASEID!
  );

  base("Donation Form").create(
    {
      Name: formData.name,
      Donation: formData.donation,
      Price: formData.price,
      Bid: formData.bid,
      Phone: formData.phone,
      Email: formData.email,
    },
    { typecast: true },
    function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(record?.getId());
    }
  );
};
