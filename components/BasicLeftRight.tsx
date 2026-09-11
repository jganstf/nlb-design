import Image from "next/image";

type BasicLeftRightSection = {
  heading: string;
  body: string;
};

type BasicLeftRightDownload = {
  label: string;
  href: string;
};

type BasicLeftRightProps = {
  eyebrow: string;
  heading: string;
  sections: BasicLeftRightSection[];
  downloads?: BasicLeftRightDownload[];
  className?: string;
};

export default function BasicLeftRight({
  eyebrow,
  heading,
  sections,
  downloads,
  className,
}: BasicLeftRightProps) {
  return (
    <section
      className={`basic-left-right relative overflow-clip bg-background tf-px py-s6 ${className ?? ""}`}
    >
      <Image
        src="/svg/decorative-line-basic-left-right.svg"
        alt=""
        aria-hidden="true"
        fill
        className="basic-left-right-line pointer-events-none absolute inset-0 z-0 size-full object-cover object-center"
      />
      <div className="basic-left-right-content relative z-10 flex w-full flex-col gap-20 tf-max-w md:flex-row md:items-start">
        <div className="basic-left-right-left flex w-full flex-col items-start gap-10 md:flex-1">
          <p className="font-mono text-body-small leading-[1.6] tracking-wide text-on-background uppercase">
            {eyebrow}
          </p>
          <h2 className="w-full text-headline-xl text-on-background text-balance">
            {heading}
          </h2>
        </div>
        <div className="basic-left-right-right flex w-full flex-col items-start gap-16 md:flex-1">
          {sections.map((section) => (
            <div
              key={section.heading}
              className="flex w-full flex-col items-start gap-6 text-on-background"
            >
              <h3 className="w-full text-headline-lg">{section.heading}</h3>
              <p className="w-full font-sans text-body-base leading-[1.6]">
                {section.body}
              </p>
            </div>
          ))}
          {downloads && downloads.length > 0 && (
            <div className="flex w-full flex-col gap-4">
              {downloads.map((download) => (
                <a
                  key={download.label}
                  href={download.href}
                  className="link-item--inactive hover:link-item--hover transition-colors"
                >
                  <span>{download.label}</span>
                  <img src="/svg/icon-download.svg" alt="" aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
