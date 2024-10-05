import Image from "next/image";
import bow from "../../public/bow.png";

type Props = {
  heading: string;
  description: string;
};

export const SupportDetail = ({ heading, description }: Props) => {
  return (
    <div className="size-48 bg-neutral px-4 py-6 rounded-lg relative">
      <Image
        className="absolute -top-8 left-0 scale-150 bg-transparent"
        src={bow}
        alt="bow"
      />
      <div className="space-y-3">
        <h3 className="font-bevan text-h3 text-primary">{heading}</h3>
        <p className="text-bodysm">{description}</p>
      </div>
    </div>
  );
};
