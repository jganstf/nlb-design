import Image from "next/image";

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
    <div className={className ? `card-news ${className}` : "card-news"}>
      <div className="card-news-image">
        <Image src={imageSrc} alt="" fill sizes="437px" />
        <div className="card-news-tags">
          {tags.map((tag) => (
            <div key={tag} className="card-news-tag">
              <p className="card-news-tag-label">{tag}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="card-news-content">
        <p className="card-news-date">{date}</p>
        <p className="card-news-title">{title}</p>
      </div>
    </div>
  );
}
