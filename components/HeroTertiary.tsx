import Image from "next/image";

type HeroTertiaryProps = {
  eyebrow: string;
  heading: string;
  description: string;
  className?: string;
};

export default function HeroTertiary({
  eyebrow,
  heading,
  description,
  className,
}: HeroTertiaryProps) {
  return (
    <section
      className={`hero-tertiary relative overflow-clip bg-background tf-px py-s3 ${className ?? ""}`}
    >
      <div className="relative flex w-full flex-wrap items-start justify-between gap-10 tf-max-w">
        <Image
          src="/svg/decorative-line-hero-tertiary.svg"
          alt=""
          aria-hidden="true"
          priority
          width={6072}
          height={4934}
          className="hero-tertiary-line pointer-events-none absolute top-1/2 left-1/2 z-0 w-[422%] max-w-none -translate-x-1/2 -translate-y-[40.5%]"
        />
        <div className="hero-tertiary-heading relative z-10 flex max-w-[34.5rem] flex-col items-start gap-6 text-on-background">
          <p className="hero-tertiary-eyebrow whitespace-nowrap font-mono text-body-small leading-[1.6] tracking-wide uppercase">
            {eyebrow}
          </p>
          <h1 className="hero-tertiary-title text-headline-2xl leading-[1.05]">{heading}</h1>
        </div>
        <p className="hero-tertiary-description relative z-10 max-w-[42rem] pt-0 font-sans text-body-base leading-[1.6] text-on-background md:pt-[2.875rem]">
          {description}
        </p>
      </div>
    </section>
  );
}
