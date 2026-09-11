type LinkButtonProps = {
  label: string;
  href: string;
  accent?: boolean;
  className?: string;
};

export default function LinkButton({
  label,
  href,
  accent = false,
  className,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={`link-button flex h-12 items-center gap-2 px-5 font-mono text-body-base text-on-primary ${className ?? ""}`}
    >
      {label}
      <svg
        viewBox="0 0 24 24"
        className={`link-button-icon size-6 shrink-0 ${accent ? "text-secondary" : "text-on-primary"}`}
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
  );
}
