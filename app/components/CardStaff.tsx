import Image from "next/image";

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
    <div className={className ? `card-staff ${className}` : "card-staff"}>
      <div className="card-staff-image-container">
        <div className="card-staff-headshot">
          <Image src={headshotSrc} alt={name} fill sizes="331px" />
        </div>
        <div className="card-staff-tag">
          <p className="card-staff-tag-label">{TAG_LABELS[tag]}</p>
        </div>
      </div>
      <div className="card-staff-info">
        <p className="card-staff-name">{name}</p>
        <p className="card-staff-title">{title}</p>
      </div>
    </div>
  );
}
