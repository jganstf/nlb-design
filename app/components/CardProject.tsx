import Image from "next/image";

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
    <div className={className ? `card-project ${className}` : "card-project"}>
      <div className="card-project-image">
        <Image src={imageSrc} alt="" fill sizes="322px" />
      </div>
      <div className="card-project-content">
        <p className="card-project-title">{title}</p>
        {tags.length > 0 && (
          <div className="card-project-tags">
            {tags.map((tag) => (
              <div key={tag} className="tag">
                <span>{tag}</span>
              </div>
            ))}
          </div>
        )}
        <p className="card-project-description">{description}</p>
      </div>
    </div>
  );
}
