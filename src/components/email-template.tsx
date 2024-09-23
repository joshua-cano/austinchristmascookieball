import * as React from "react";

interface DonationEmailTemplateProps {
  name: string;
  email: string;
  donation: string;
  price: string;
  bid?: string;
  phone?: string;
}

interface VolunteerEmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  volunteer: string;
}

export const DonationTemplate: React.FC<
  Readonly<DonationEmailTemplateProps>
> = ({ name, email, donation, price, bid, phone }) => (
  <div>
    <h1>Silent Auction Donation</h1>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h2>Message:</h2>
    <p>Donation: {donation}</p>
    <p>Retail Price: ${price}</p>
    {bid && <p>Suggested Starting Bid: ${bid}</p>}
    {phone && <p>Phone Number: {phone}</p>}
  </div>
);

export const VolunteerTemplate: React.FC<
  Readonly<VolunteerEmailTemplateProps>
> = ({ name, email, volunteer, phone }) => (
  <div>
    <h1>Silent Auction Donation</h1>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h2>Message:</h2>
    <p>{volunteer}</p>
    {phone && <p>Phone Number: {phone}</p>}
  </div>
);
