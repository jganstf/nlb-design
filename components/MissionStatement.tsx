import Image from "next/image";
import Tag from "@/components/Tag";
import LinkButton from "@/components/LinkButton";

type MissionLink = {
  label: string;
  href: string;
};

type MissionStatementProps = {
  eyebrow?: string;
  heading: string;
  links: MissionLink[];
  className?: string;
};

export default function MissionStatement({
  eyebrow = "Our mission",
  heading,
  links,
  className,
}: MissionStatementProps) {
  return (
    <section
      className={`mission-statement relative overflow-clip bg-background px-10 py-40 tf-px ${className ?? ""}`}
    >
      <div className="flex w-full flex-col items-center justify-center tf-max-w">
      <Image
        src="/svg/decorative-line-mission.svg"
        alt=""
        aria-hidden="true"
        fill
        className="mission-statement-line pointer-events-none absolute inset-0 z-0 size-full object-cover object-center"
      />
      <div className="mission-statement-content relative z-10 flex w-full flex-col items-center gap-20">
        <Tag label={eyebrow} />
        <h2 className="mission-statement-heading w-full text-center text-headline-xl text-on-background text-pretty">
          {heading}
        </h2>
        <div className="mission-statement-links flex flex-wrap items-center justify-center gap-20">
          {links.map((link) => (
            <LinkButton key={link.label} {...link} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
