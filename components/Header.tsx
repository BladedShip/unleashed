import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold  px-10 py-5">
      <div>
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Unleashed"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1>Unleashed</h1>
        </Link>
      </div>
      <div>
        <Link
          href="https://github.com/BladedShip"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 text-sm md:text-base bg-gray-900/30 text-[#dbbadd] flex items-center rounded-full hover:bg-[#dbbadd] hover:text-gray-900 transition"
        >
          Check out my other projects
        </Link>
      </div>
    </header>
  );
}

export default Header;
