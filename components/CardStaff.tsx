import Image from "next/image";
import Tag from "@/components/Tag";

type CardStaffTag = "administration" | "environmental & agricultural" | "property management";

const TAG_LABELS: Record<CardStaffTag, string> = {
  administration: "Administration",
  "environmental & agricultural": "Environmental & Agricultural",
  "property management": "Property Management",
};

type CardStaffProps = {
  name: string;
  title: string;
  tag: CardStaffTag;
  headshotSrc: string;
  className?: string;
};

export default function CardStaff({
  name,
  title,
  tag,
  headshotSrc,
  className,
}: CardStaffProps) {
  return (
    <div
      className={`card-staff flex w-full max-w-[331px] flex-col items-start gap-3 ${className ?? ""}`}
    >
      <div className="card-staff-image-container flex w-full flex-col items-start overflow-clip rounded">
        <div className="card-staff-headshot relative aspect-[304/380] w-full shrink-0">
          <Image src={headshotSrc} alt={name} fill sizes="331px" className="object-cover" />
        </div>
        <Tag label={TAG_LABELS[tag]} size="lg" rounded={false} className="w-full" />
      </div>
      <div className="card-staff-info flex w-full flex-col items-start break-words">
        <p className="card-staff-name w-full text-headline-sm font-normal leading-[1.2] tracking-normal text-on-background">
          {name}
        </p>
        <p className="card-staff-title w-full font-sans text-body-base font-normal leading-[1.6] tracking-normal text-on-background-subtle opacity-60">
          {title}
        </p>
      </div>
    </div>
  );
}
