import Image from "next/image";

export type NewsArticle = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  category: string;
  date: string;
  href: string;
};

type NewsPreviewProps = {
  heading: string;
  articles: NewsArticle[];
  ctaHeading: string;
  ctaLinkLabel: string;
  ctaHref: string;
  className?: string;
};

function ArrowForward() {
  return (
    <svg viewBox="0 0 70 69" className="size-full" fill="none" aria-hidden="true">
      <path
        d="M57.9762 61.5984L0 4.70981L4.79985 0L62.776 56.8886L62.776 2.32783L69.5978 2.35491L69.5978 68.2922L2.39991 68.2922L2.37231 61.5984L57.9762 61.5984Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function NewsPreview({
  heading,
  articles,
  ctaHeading,
  ctaLinkLabel,
  ctaHref,
  className,
}: NewsPreviewProps) {
  return (
    <section
      className={`news-preview overflow-x-clip bg-background tf-px py-s6 ${className ?? ""}`}
    >
      <div className="flex w-full flex-col items-start gap-10 tf-max-w">
        <h2 className="news-preview-heading w-full text-headline-xl leading-[1.1] text-on-background">
          {heading}
        </h2>
        <div className="news-preview-list grid w-full grid-cols-1 gap-px border border-border-light bg-border-light md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.href}
              className="news-preview-card flex min-h-[33.75rem] w-full min-w-0 flex-col items-start justify-between overflow-clip bg-background p-8"
            >
              <div className="news-preview-card-body flex w-full flex-col items-start gap-5">
                <div className="news-preview-card-image relative h-[16.5rem] w-full shrink-0">
                  <Image
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="news-preview-card-title w-full text-headline-base leading-[1.1] text-on-background">
                  {article.title}
                </p>
              </div>
              <div className="news-preview-card-meta flex shrink-0 items-center gap-3">
                <p className="font-mono text-body-small leading-[1.6] tracking-wide text-on-background uppercase">
                  {article.category}
                </p>
                <span className="size-1.5 shrink-0 rounded-full bg-on-background" aria-hidden="true" />
                <p className="font-mono text-body-small leading-[1.6] tracking-wide text-on-background uppercase">
                  {article.date}
                </p>
              </div>
            </a>
          ))}
          <a
            href={ctaHref}
            className="news-preview-cta relative flex min-h-[33.75rem] w-full min-w-0 flex-col items-start justify-between overflow-clip bg-accent-secondary p-10 md:min-h-[20rem] md:col-span-2 lg:min-h-[33.75rem] lg:col-span-1"
          >
            <Image
              src="/svg/decorative-line-news.svg"
              alt=""
              aria-hidden="true"
              fill
              className="news-preview-cta-line pointer-events-none absolute inset-0 z-0 size-full object-cover object-center"
            />
            <p className="news-preview-cta-heading relative z-10 w-full text-headline-base leading-[1.1] text-on-accent-secondary text-balance">
              {ctaHeading}
            </p>
            <div className="news-preview-cta-footer relative z-10 flex w-full items-end justify-between gap-4">
              <p className="news-preview-cta-link relative whitespace-nowrap font-mono text-body-small leading-[1.6] tracking-wide text-on-accent-secondary uppercase after:absolute after:top-full after:left-0 after:h-px after:w-full after:bg-on-accent-secondary after:content-['']">
                {ctaLinkLabel}
              </p>
              <div className="news-preview-cta-arrow h-[4.27rem] w-[4.35rem] shrink-0 text-on-accent-secondary">
                <ArrowForward />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
