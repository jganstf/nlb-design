import Image from "next/image";
import Tag from "@/components/Tag";

type CardNewsProps = {
  date: string;
  title: string;
  tags: string[];
  imageSrc: string;
  className?: string;
};

export default function CardNews({
  date,
  title,
  tags,
  imageSrc,
  className,
}: CardNewsProps) {
  return (
    <div
      className={`card-news flex w-full max-w-[437px] flex-col items-start gap-6 ${className ?? ""}`}
    >
      <div className="card-news-image relative flex h-[354px] w-full flex-col items-start justify-end gap-1 p-6">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="437px"
          className="object-cover mix-blend-luminosity"
        />
        <div className="card-news-tags flex flex-wrap items-center gap-1">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} size="lg" />
          ))}
        </div>
      </div>
      <div className="card-news-content flex w-full flex-col items-start gap-3 break-words">
        <p className="card-news-date whitespace-nowrap font-sans text-body-base font-normal leading-[1.6] tracking-normal text-on-background-subtle">
          {date}
        </p>
        <p className="card-news-title w-full text-headline-sm font-normal leading-[1.2] tracking-normal text-on-background">
          {title}
        </p>
      </div>
    </div>
  );
}
