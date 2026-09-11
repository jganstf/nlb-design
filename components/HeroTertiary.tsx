import Image from "next/image";

type HeroTertiaryProps = {
  eyebrow: string;
  heading: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
};

export default function HeroTertiary({
  eyebrow,
  heading,
  imageSrc,
  imageAlt = "",
  className,
}: HeroTertiaryProps) {
  return (
    <div className={className ? `hero-tertiary ${className}` : "hero-tertiary"}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="hero-tertiary-image"
      />
      <div className="hero-tertiary-card">
        <Image
          src="/svg/decorative-line-hero.svg"
          alt=""
          aria-hidden="true"
          fill
          className="hero-tertiary-line"
        />
        <p className="hero-tertiary-eyebrow">{eyebrow}</p>
        <h1 className="hero-tertiary-heading">{heading}</h1>
      </div>
    </div>
  );
}
