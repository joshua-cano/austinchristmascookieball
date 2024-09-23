import { z } from "zod";

export const donationFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  donation: z.string().min(1, "Please specify the donation"),
  price: z.string().min(1, "Retail price must be at least $0"),
  bid: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email("Invalid email address"),
});

export const volunteerFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  volunteer: z.string().min(1, "Required"),
  phone: z.string().optional(),
  email: z.string().email("Invalid email address"),
});
