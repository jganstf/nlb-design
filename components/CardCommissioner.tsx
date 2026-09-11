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
    <div
      className={`card-commissioner flex w-full max-w-[448px] flex-col items-start gap-3 ${className ?? ""}`}
    >
      <div className="card-commissioner-headshot relative h-[556px] w-full shrink-0 overflow-clip rounded">
        <Image src={headshotSrc} alt={name} fill sizes="448px" className="object-cover" />
      </div>
      <div className="card-commissioner-info flex w-full flex-col items-start break-words">
        <p className="card-commissioner-name w-full text-headline-sm leading-[1.2] tracking-normal text-on-background">
          {name}
        </p>
        <p className="card-commissioner-meta w-full font-sans text-body-base font-normal leading-[1.6] tracking-normal text-on-background-subtle opacity-60">
          {title}
        </p>
        <p className="card-commissioner-meta w-full font-sans text-body-base font-normal leading-[1.6] tracking-normal text-on-background-subtle opacity-60">
          {startDate}
        </p>
      </div>
    </div>
  );
}
