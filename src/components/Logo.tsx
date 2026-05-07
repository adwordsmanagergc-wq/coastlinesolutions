import Image from "next/image";

export default function Logo({
  variant = "dark",
  className = "h-9 w-auto"
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const src = variant === "light" ? "/brand/logo-light.svg" : "/brand/logo.svg";
  return (
    <Image
      src={src}
      alt="Coastline Solutions"
      width={220}
      height={48}
      priority
      className={className}
    />
  );
}
