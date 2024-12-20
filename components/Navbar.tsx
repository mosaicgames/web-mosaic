"use client";

import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Aktif URL'yi al
  console.log(pathname)

  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/mosaic-logo-dark.svg" alt="logo" width={74} height={29}></Image>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
          href={link.href}
          key={link.key}
          className={`regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all ${
            pathname === link.href ? "text-white font-bold border-b-2 border-white" : "hover:font-bold hover:text-gray-500"
          }`}
        >
          {link.label}
        </Link>
        ))}
      </ul>

      <Image
        src="/hamburger.svg"
        alt="hamburger"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  )
}

export default Navbar