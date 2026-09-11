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
    <div className={className ? `section-intro ${className}` : "section-intro"}>
      <Image
        src="/svg/decorative-line.svg"
        alt=""
        aria-hidden="true"
        fill
        className="section-intro-line"
      />
      <div className="section-intro-heading">
        <p className="section-intro-eyebrow">{eyebrow}</p>
        <h2 className="section-intro-title">{heading}</h2>
      </div>
      <p className="section-intro-description">{description}</p>
    </div>
  );
}
