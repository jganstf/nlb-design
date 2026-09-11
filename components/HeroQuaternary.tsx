import Image from "next/image";

type HeroQuaternaryProps = {
  eyebrow: string;
  title: string;
  backgroundImage: string;
  backgroundImageAlt?: string;
  className?: string;
};

export default function HeroQuaternary({
  eyebrow,
  title,
  backgroundImage,
  backgroundImageAlt = "",
  className,
}: HeroQuaternaryProps) {
  return (
    <div className={`hero-quaternary relative flex w-full overflow-clip tf-px pt-s3 pb-s9 ${className ?? ""}`}>
      <Image
        src={backgroundImage}
        alt={backgroundImageAlt}
        fill
        priority
        sizes="100vw"
        className="hero-quaternary-image pointer-events-none object-cover"
      />
      <div className="tf-max-w">
        <div className="hero-quaternary-card relative flex h-[380px] w-full flex-col items-start justify-between overflow-clip rounded bg-background p-5 sm:w-[680px] sm:p-10">
          <Image
            src="/svg/decorative-line-hero.svg"
            alt=""
            aria-hidden="true"
            fill
            className="hero-quaternary-line absolute inset-y-[-30%] inset-x-[-60%] z-0 size-auto object-contain opacity-60 pointer-events-none"
          />
          <p className="hero-quaternary-eyebrow relative z-10 font-mono text-body-small leading-[1.6] tracking-wide uppercase text-on-background">
            {eyebrow}
          </p>
          <p className="hero-quaternary-title relative z-10 w-full font-serif text-headline-xl leading-[1.1] text-on-background [text-wrap:pretty]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
