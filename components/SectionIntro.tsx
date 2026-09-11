import Image from "next/image";

type SectionIntroProps = {
  eyebrow: string;
  heading: string;
  description: string;
  className?: string;
};

export default function SectionIntro({
  eyebrow,
  heading,
  description,
  className,
}: SectionIntroProps) {
  return (
    <div
      className={`section-intro relative flex w-full flex-col flex-wrap items-start justify-between gap-6 overflow-clip bg-background px-5 py-10 md:flex-row md:gap-10 md:px-10 md:py-16 ${className ?? ""}`}
    >
      <Image
        src="/svg/decorative-line.svg"
        alt=""
        aria-hidden="true"
        fill
        className="section-intro-line absolute inset-0 z-0 size-full object-cover object-center pointer-events-none"
      />
      <div className="section-intro-heading relative z-10 flex max-w-[34rem] flex-col items-start gap-6 text-on-background">
        <p className="section-intro-eyebrow whitespace-nowrap font-mono text-body-small leading-[1.6] tracking-wide uppercase">
          {eyebrow}
        </p>
        <h2 className="section-intro-title text-headline-2xl leading-[1.05]">
          {heading}
        </h2>
      </div>
      <p className="section-intro-description relative z-10 max-w-[42rem] pt-0 font-sans text-body-base font-normal leading-[1.6] tracking-normal text-on-background md:pt-[2.875rem]">
        {description}
      </p>
    </div>
  );
}
