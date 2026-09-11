import Image from "next/image";
import Tag from "@/components/Tag";

type MissionLink = {
  label: string;
  href: string;
  accent?: boolean;
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
      className={`mission-statement relative flex w-full flex-col items-center justify-center overflow-clip bg-background px-10 py-40 ${className ?? ""}`}
    >
      <Image
        src="/svg/decorative-line-mission.svg"
        alt=""
        aria-hidden="true"
        fill
        className="mission-statement-line pointer-events-none absolute inset-0 z-0 size-full object-cover object-center"
      />
      <div className="mission-statement-content relative z-10 flex w-full max-w-[988px] flex-col items-center gap-20">
        <Tag label={eyebrow} />
        <h2 className="mission-statement-heading w-full text-center text-headline-xl font-normal leading-[1.1] text-on-background">
          {heading}
        </h2>
        <div className="mission-statement-links flex flex-wrap items-center justify-center gap-20">
          {links.map(({ label, href, accent }) => (
            <a
              key={label}
              href={href}
              className="mission-statement-link flex h-12 items-center gap-2 px-5 font-mono text-body-base text-on-primary"
            >
              {label}
              <svg
                viewBox="0 0 24 24"
                className={`size-6 shrink-0 ${accent ? "text-secondary" : "text-on-primary"}`}
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12H19M12 19L19 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
