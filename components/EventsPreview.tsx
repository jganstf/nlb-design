export type Event = {
  weekday: string;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  description: string;
};

type EventsPreviewProps = {
  eyebrow: string;
  events: Event[];
  className?: string;
};

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 shrink-0" fill="none" aria-hidden="true">
      <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M12 9V13L14.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M12 22C12 22 19 15.4183 19 10C19 5.58172 15.866 2 12 2C8.13401 2 5 5.58172 5 10C5 15.4183 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function EventsPreview({ eyebrow, events, className }: EventsPreviewProps) {
  return (
    <div
      className={`events-preview relative bg-background tf-px py-s4 ${className ?? ""}`}
    >
      <div className="flex w-full flex-col items-start gap-s4 tf-max-w">
        <p className="events-preview-eyebrow w-full font-mono text-body-small leading-[1.6] tracking-wide text-on-background uppercase">
          {eyebrow}
        </p>
        <div className="events-preview-list flex w-full flex-col divide-y divide-border-light lg:flex-row lg:items-stretch lg:divide-x lg:divide-y-0">
          {events.map((event) => (
            <div
              key={`${event.title}-${event.day}`}
              className="events-preview-item flex gap-8 py-12 first:pt-0 last:pb-0 lg:flex-1 lg:gap-10 lg:px-10 lg:py-0 lg:first:pl-0 lg:last:pr-0"
            >
              <div className="events-preview-date flex size-[112px] shrink-0 flex-col items-center justify-center gap-2 rounded bg-surface-dark p-3 text-center text-on-surface-dark md:size-[200px] md:gap-3">
                <p className="font-mono text-body-small leading-[1.6] tracking-wide uppercase">{event.weekday}</p>
                <p className="text-headline-xl leading-[1.1]">{event.day}</p>
                <p className="font-mono text-body-small leading-[1.6] tracking-wide uppercase">{event.month}</p>
              </div>
              <div className="events-preview-content flex min-w-0 flex-1 flex-col items-start gap-3 md:gap-6">
                <p className="events-preview-title w-full text-headline-base leading-[1.1] text-on-background">
                  {event.title}
                </p>
                <div className="events-preview-meta flex w-full flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-3">
                    <ClockIcon />
                    <p className="font-sans text-body-base leading-[1.6] text-on-background-subtle">{event.time}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPinIcon />
                    <p className="font-sans text-body-base leading-[1.6] text-on-background-subtle">
                      {event.location}
                    </p>
                  </div>
                </div>
                <p className="events-preview-description w-full font-sans text-body-base leading-[1.6] text-on-background-subtle">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
