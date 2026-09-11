import Image from "next/image";
import Tag from "@/components/Tag";

type CardProjectProps = {
  title: string;
  tags: string[];
  description: string;
  imageSrc: string;
  className?: string;
};

export default function CardProject({
  title,
  tags,
  description,
  imageSrc,
  className,
}: CardProjectProps) {
  return (
    <div
      className={`card-project flex w-full max-w-[322px] flex-col items-start gap-6 ${className ?? ""}`}
    >
      <div className="card-project-image relative h-[370px] w-full overflow-hidden rounded">
        <Image src={imageSrc} alt="" fill sizes="322px" className="object-cover" />
      </div>
      <div className="card-project-content flex w-full flex-col items-start gap-3">
        <p className="card-project-title w-full break-words text-headline-base font-normal leading-[1.1] tracking-normal text-on-background">
          {title}
        </p>
        {tags.length > 0 && (
          <div className="card-project-tags flex flex-wrap items-center gap-1">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        )}
        <p className="card-project-description line-clamp-3 w-full break-words font-sans text-body-base font-normal leading-[1.6] tracking-normal text-on-background">
          {description}
        </p>
      </div>
    </div>
  );
}
