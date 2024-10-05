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

  await base("tblVbkbWZ8wrgtfsv").create(
    {
      Name: formData.name,
      Role: formData.volunteer,
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

// Donation
export const sendDonation = async (
  formData: z.infer<typeof donationFormSchema>
) => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_TOKEN }).base(
    process.env.AIRTABLE_BASEID!
  );

  await base("tblvfAofraaj0Vdw8").create(
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
