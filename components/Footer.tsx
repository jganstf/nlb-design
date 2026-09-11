import Image from "next/image";
import IconButton from "@/components/IconButton";

type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

const CONTACT_COLUMNS: FooterColumn[] = [
  {
    heading: "About us",
    links: [
      { label: "Conservation", href: "#" },
      { label: "Recreation", href: "#" },
      { label: "Agriculture", href: "#" },
      { label: "Staff", href: "#" },
      { label: "History", href: "#" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Interactive Map", href: "#" },
      { label: "Properties", href: "#" },
      { label: "Plan Your Visit", href: "#" },
      { label: "Request for Property Use", href: "#" },
      { label: "ACK Trails", href: "#" },
    ],
  },
  {
    heading: "Our work",
    links: [
      { label: "News", href: "#" },
      { label: "Projects", href: "#" },
      { label: "Events", href: "#" },
    ],
  },
  {
    heading: "Public records",
    links: [
      { label: "Meetings", href: "#" },
      { label: "Annual Reports", href: "#" },
      { label: "Policies", href: "#" },
      { label: "Establishment Documents", href: "#" },
    ],
  },
  {
    heading: "Other",
    links: [
      { label: "Transfer Documents", href: "#" },
      { label: "Connect With Us", href: "#" },
    ],
  },
];

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M5 12H19M12 19L19 12L12 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`site__footer relative overflow-clip bg-accent-secondary tf-px py-10 ${className ?? ""}`}
    >
      <Image
        src="/svg/decorative-line-footer-mobile.svg"
        alt=""
        aria-hidden="true"
        fill
        className="pointer-events-none absolute inset-0 z-0 size-full object-cover object-center md:hidden"
      />
      <Image
        src="/svg/decorative-line-footer.svg"
        alt=""
        aria-hidden="true"
        fill
        className="pointer-events-none absolute inset-0 z-0 hidden size-full object-cover object-center md:block"
      />

      <div className="relative z-10 flex w-full flex-col gap-16 tf-max-w md:gap-20">
        {/* Signup + social */}
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <div className="flex w-full flex-col items-start gap-8 md:w-[27.5rem] md:gap-10">
            <p className="w-full text-headline-lg text-on-accent-primary text-pretty">
              Stay up to date on what is happening on the island.
            </p>
            <form className="flex w-full items-center gap-1">
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="h-12 w-full flex-1 rounded bg-input px-3 font-sans text-body-base text-on-input outline-none placeholder:text-on-input-placeholder focus-visible:ring-2 focus-visible:ring-secondary"
              />
              <IconButton label="Subscribe" variant="secondary" type="submit">
                <ArrowRight />
              </IconButton>
            </form>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="size-6 shrink-0 opacity-75 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              <img src="/icons/social-instagram.svg" alt="" className="size-full" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="size-6 shrink-0 opacity-75 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              <img src="/icons/social-facebook.svg" alt="" className="size-full" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="size-6 shrink-0 opacity-75 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              <img src="/icons/social-linkedin.svg" alt="" className="size-full" />
            </a>
          </div>
        </div>

        {/* Contact / office hours / address */}
        <div className="flex w-full flex-col gap-10 text-body-base leading-[1.6] text-on-accent-primary md:flex-row">
          <div className="flex w-full flex-col gap-5 md:w-60">
            <p className="font-mono text-body-small tracking-wide uppercase">Contact</p>
            <div className="flex flex-col gap-2 font-sans">
              <p className="opacity-75">Phone: 508-228-7240</p>
              <p className="opacity-75">FAX: 508-228-9369</p>
              <p className="opacity-75">info@nantucketlandbank.org</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-5 md:w-60">
            <p className="font-mono text-body-small tracking-wide uppercase">Office hours</p>
            <div className="flex flex-col gap-2 font-sans">
              <p className="opacity-75">Monday–Friday</p>
              <p className="opacity-75">9 a.m.–12 p.m. and 1–4 p.m.</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-5 md:w-60">
            <p className="font-mono text-body-small tracking-wide uppercase">Address</p>
            <p className="font-sans opacity-75">22 Broad Street Nantucket, MA 02554</p>
          </div>
        </div>

        {/* Link columns */}
        <div className="flex w-full flex-col gap-10 text-body-base leading-[1.6] text-on-accent-primary md:flex-row">
          {CONTACT_COLUMNS.map((column) => (
            <div key={column.heading} className="flex w-full flex-col gap-5 md:min-w-px md:flex-1">
              <p className="font-mono text-body-small tracking-wide uppercase">{column.heading}</p>
              <div className="flex flex-col gap-2 font-sans">
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="opacity-75 transition-opacity hover:opacity-100 hover:underline focus-visible:opacity-100 focus-visible:underline focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex w-full flex-col items-start gap-5 font-sans text-body-base text-on-accent-primary md:flex-row md:items-end md:justify-between">
          <p className="opacity-75">Copyright © 2026 Nantucket Islands Land Bank</p>
          <div className="flex items-center gap-5 md:items-end md:gap-6">
            <a
              href="#"
              className="opacity-75 transition-opacity hover:opacity-100 hover:underline focus-visible:opacity-100 focus-visible:underline focus-visible:outline-none"
            >
              Cookie Settings
            </a>
            <a
              href="#"
              className="opacity-75 transition-opacity hover:opacity-100 hover:underline focus-visible:opacity-100 focus-visible:underline focus-visible:outline-none"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
