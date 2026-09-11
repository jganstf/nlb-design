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
    <div
      className={`hero-tertiary relative flex w-full flex-col overflow-clip p-5 md:h-[42.5rem] md:p-10 ${className ?? ""}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="hero-tertiary-image z-0 object-cover"
      />
      <div className="hero-tertiary-card relative z-10 flex h-auto w-full flex-col justify-between gap-6 overflow-clip rounded bg-background p-10 md:h-[23.75rem] md:w-[42.5rem] md:max-w-full md:gap-0">
        <Image
          src="/svg/decorative-line-hero.svg"
          alt=""
          aria-hidden="true"
          fill
          className="hero-tertiary-line absolute inset-y-[-30%] inset-x-[-60%] z-0 size-auto object-contain opacity-60 pointer-events-none"
        />
        <p className="hero-tertiary-eyebrow relative z-10 font-mono text-body-small leading-[1.6] tracking-wide uppercase text-on-background">
          {eyebrow}
        </p>
        <h1 className="hero-tertiary-heading relative z-10 text-headline-xl text-on-background [text-wrap:pretty]">
          {heading}
        </h1>
      </div>
    </div>
  );
}
