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
      className={`mission-statement relative overflow-clip bg-background tf-px py-s9 ${className ?? ""}`}
    >
      <div className="flex w-full flex-col items-center justify-center tf-max-w">
      <Image
        src="/svg/decorative-line-mission.svg"
        alt=""
        aria-hidden="true"
        fill
        className="mission-statement-line pointer-events-none absolute inset-0 z-0 size-full object-cover object-center"
      />
      <div className="mission-statement-content relative z-10 flex w-full flex-col items-center gap-20 max-w-[62.375rem]">
        <Tag label={eyebrow} />
        <h2 className="mission-statement-heading w-full text-center text-headline-xl text-on-background text-pretty">
          {heading}
        </h2>
        <div className="mission-statement-links flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-20">
          {links.map((link) => (
            <LinkButton key={link.label} {...link} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
