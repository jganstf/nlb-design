type LinkButtonProps = {
  label: string;
  href: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  className?: string;
};

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`link-button-icon ${direction === "left" ? "-scale-x-100" : ""}`}
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
  );
}

export default function LinkButton({
  label,
  href,
  iconLeft = false,
  iconRight = true,
  className,
}: LinkButtonProps) {
  return (
    <a href={href} className={`link-button ${className ?? ""}`}>
      {iconLeft && <Arrow direction="left" />}
      <span>{label}</span>
      {iconRight && <Arrow direction="right" />}
    </a>
  );
}
