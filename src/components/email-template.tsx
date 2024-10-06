import * as React from "react";

interface VolunteerTemplateProps {
  name: string;
  volunteer: string;
  phone?: string;
  email: string;
}

interface SilentAuctionTemplateProps {
  name: string;
  donation: string;
  price: string;
  bid?: string;
  phone?: string;
  email: string;
}

export const VolunteerTemplate: React.FC<Readonly<VolunteerTemplateProps>> = ({
  name,
  volunteer,
  phone,
  email,
}) => (
  <div>
    <h1>{name},</h1>
    <p>
      Would like to help with {volunteer}. Their phone number is {phone} and
      their email is {email}.
    </p>
  </div>
);

export const SilentAuctionTemplate: React.FC<
  Readonly<SilentAuctionTemplateProps>
> = ({ name, donation, bid, price, phone, email }) => (
  <div>
    <h1>{name},</h1>
    <p>
      Is donating {donation}. The retail price is {price} and the suggested
      starting big is {bid}. Their phone number is {phone} and their email is{" "}
      {email}.
    </p>
  </div>
);
