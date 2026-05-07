import Image from "next/image";

export default function Logo({
  variant = "dark",
  className = "h-9 w-auto"
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Image
      src="/coastlinesolutions-logo.webp"
      alt="Coastline Solutions"
      width={1000}
      height={563}
      priority
      className={className}
      data-variant={variant}
    />
  );
}
