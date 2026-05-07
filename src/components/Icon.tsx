type IconName = "brush" | "spray" | "leaf" | "check" | "phone" | "mail" | "pin" | "clock" | "star";

export default function Icon({
  name,
  className = "h-6 w-6"
}: {
  name: IconName;
  className?: string;
}) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  switch (name) {
    case "brush":
      return (
        <svg {...props}>
          <path d="M14 4l6 6-7 7-3-3 7-7-3-3Z" />
          <path d="M9 14l-3 3a3 3 0 1 1-3-3l3-3" />
        </svg>
      );
    case "spray":
      return (
        <svg {...props}>
          <path d="M9 4h4v4H9z" />
          <path d="M11 8v3" />
          <path d="M5 13h12l-1 8H6l-1-8Z" />
          <path d="M16 4l3 1M16 6l3 0M16 8l3-1" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...props}>
          <path d="M5 19c0-8 6-14 16-14 0 10-6 16-14 16-1.5 0-2 0-2 0Z" />
          <path d="M5 19c4-4 7-7 11-9" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <path d="M5 12l4 4L19 7" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 7 9-7" />
        </svg>
      );
    case "pin":
      return (
        <svg {...props}>
          <path d="M12 22s7-7.6 7-13a7 7 0 1 0-14 0c0 5.4 7 13 7 13Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "star":
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="m12 3 2.6 5.4 5.9.6-4.4 4 1.3 5.9L12 16.9 6.6 18.9l1.3-5.9-4.4-4 5.9-.6L12 3Z" />
        </svg>
      );
  }
}
