import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-7 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex">
        <Image
          alt="header text"
          src="/hd-logo.png"
          className="sm:w-12 sm:h-12 w-8 h-8 ml-5 md:ml-0"
          width={32}
          height={32}
        />
        <h1 className="sm:text-2xl text-1xl font-bold ml-2 tracking-tight my-auto">
          Elevator Pitch Generator
        </h1>
      </Link>
    </header>
  );
}
