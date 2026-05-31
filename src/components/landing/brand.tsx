import Image from "next/image";
import Link from "next/link";

export function Brand({ word = true }: { word?: boolean }) {
  return (
    <Link href="/#top" className="brand">
      <Image
        className="logo-l"
        src="/parallax-light.png"
        alt="Ceptly"
        width={28}
        height={30}
      />
      <Image
        className="logo-d"
        src="/parallax-dark.png"
        alt="Ceptly"
        width={28}
        height={30}
      />
      {word ? <span className="word">Ceptly</span> : null}
    </Link>
  );
}
