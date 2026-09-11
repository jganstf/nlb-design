import Image from "next/image";

type CardCommissionerProps = {
  name: string;
  title: string;
  startDate: string;
  headshotSrc: string;
  className?: string;
};

export default function CardCommissioner({
  name,
  title,
  startDate,
  headshotSrc,
  className,
}: CardCommissionerProps) {
  return (
    <div className={className ? `card-commissioner ${className}` : "card-commissioner"}>
      <div className="card-commissioner-headshot">
        <Image src={headshotSrc} alt={name} fill sizes="448px" />
      </div>
      <div className="card-commissioner-info">
        <p className="card-commissioner-name">{name}</p>
        <p className="card-commissioner-meta">{title}</p>
        <p className="card-commissioner-meta">{startDate}</p>
      </div>
    </div>
  );
}
