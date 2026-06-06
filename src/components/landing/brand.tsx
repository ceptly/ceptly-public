import Image from "next/image";
import Link from "next/link";

export function Brand({ word = true }: { word?: boolean }) {
  return (
    <Link href="/#top" className="brand">
      <Image src="/ceptly-mark.png" alt="Ceptly" width={22} height={24} />
      {word ? <span>Ceptly</span> : null}
    </Link>
  );
}
