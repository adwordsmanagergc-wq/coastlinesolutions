import Image from "next/image";

export default function Logo({
  className = "h-10 w-auto sm:h-12"
}: {
  className?: string;
}) {
  return (
    <Image
      src="/laymak-solutions-logo.png"
      alt="LayMac Solutions"
      width={1024}
      height={791}
      priority
      className={className}
    />
  );
}
