import Image from "next/image";

type CtaContactProps = {
  heading?: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
  className?: string;
};

export default function CtaContact({
  heading = "Contact Us",
  body = "Have a question, need more information, or not sure where to start? Reach out—we’re here to help connect you with the answers and resources you need.",
  buttonLabel = "Reach out",
  buttonHref = "#",
  className,
}: CtaContactProps) {
  return (
    <section
      className={`cta-contact relative flex w-full items-center justify-center bg-background p-5 md:p-10 ${className ?? ""}`}
    >
      <div className="tf-max-w">
        <div className="cta-contact-frame relative h-[33.75rem] w-full overflow-clip md:h-[38.125rem]">
          <Image
            src="/images/hero-cta-contact-mobile.png"
            alt=""
            aria-hidden="true"
            fill
            className="cta-contact-image absolute inset-0 z-0 size-full object-cover object-center md:hidden"
          />
          <Image
            src="/images/hero-cta-contact.png"
            alt=""
            aria-hidden="true"
            fill
            className="cta-contact-image hidden object-cover object-center md:absolute md:inset-0 md:z-0 md:block md:size-full"
          />
          <Image
            src="/svg/decorative-line-cta-contact-mobile.svg"
            alt=""
            aria-hidden="true"
            fill
            className="cta-contact-line pointer-events-none absolute inset-0 z-0 size-full object-cover object-center md:hidden"
          />
          <Image
            src="/svg/decorative-line-cta-contact-1.svg"
            alt=""
            aria-hidden="true"
            width={1703}
            height={248}
            className="cta-contact-line-1 pointer-events-none absolute top-[3.4%] left-[calc(50%-14.5rem)] z-0 hidden w-[177%] max-w-none -translate-x-1/2 md:block"
          />
          <Image
            src="/svg/decorative-line-cta-contact-2.svg"
            alt=""
            aria-hidden="true"
            width={1523}
            height={238}
            className="cta-contact-line-2 pointer-events-none absolute top-[1.5%] left-1/2 z-0 hidden w-[159%] max-w-none -translate-x-1/2 md:block"
          />

          <div className="relative z-10 flex size-full flex-col items-center justify-center gap-8 px-5 text-center md:mx-auto md:w-[30.4375rem] md:gap-10 md:px-0">
            <h2 className="cta-contact-heading w-full text-headline-xl text-on-background text-pretty">
              {heading}
            </h2>
            <p className="cta-contact-body w-full font-sans text-body-base leading-[1.6] text-on-background">
              {body}
            </p>
            <a href={buttonHref} className="button button-secondary">
              {buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
