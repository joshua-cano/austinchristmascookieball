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
    <h1 id="name">{name},</h1>
    <p>
      Would like to help with <span id="volunteer">{volunteer}</span>. Their
      phone number is <span id="phone">{phone}</span> and their email is{" "}
      <span id="email">{email}</span>.
    </p>
  </div>
);

export const SilentAuctionTemplate: React.FC<
  Readonly<SilentAuctionTemplateProps>
> = ({ name, donation, bid, price, phone, email }) => (
  <div>
    <h1 id="name">{name},</h1>
    <p>
      Is donating <span id="donation">{donation}</span>. The retail price is{" "}
      <span id="price">{price}</span> and the suggested starting bid is{" "}
      <span id="bid">{bid}</span>. Their phone number is <span>{phone}</span>{" "}
      and their email is <span id="email">{email}</span>.
    </p>
  </div>
);
