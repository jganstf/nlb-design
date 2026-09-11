type TagProps = {
  label: string;
  size?: "sm" | "lg";
  rounded?: boolean;
  className?: string;
};

export default function Tag({
  label,
  size = "sm",
  rounded = true,
  className,
}: TagProps) {
  return (
    <div
      className={`tag flex items-center justify-center bg-tag ${
        size === "lg" ? "px-6 py-3" : "px-2 py-1"
      } ${rounded ? "rounded" : ""} ${className ?? ""}`}
    >
      <span className="tag-label whitespace-nowrap break-words font-mono text-body-small leading-[1.6] tracking-wide uppercase text-on-tag">
        {label}
      </span>
    </div>
  );
}
