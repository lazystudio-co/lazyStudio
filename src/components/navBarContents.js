"use client";
import Container from "./container";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import List from "./list";
import ListItems from "./listItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt4, HiX } from "react-icons/hi";

export default function NavBarContents() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/whyUs" },
    // { name: "Blog", href: "/blog" },
  ];

  const patchname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [patchname]);

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <Container className=" flex justify-between items-center py-4 relative z-50 ">
      <Link href="/" className=" cursor-none inline-block select-none ">
        <Image
          src="/images/logosec.png"
          width={180}
          height={48}
          alt="LazyStudio"
          className="w-40 sm:w-48 lg:w-55"
        />
      </Link>

      {/* Desktop navigation */}
      <List className=" hidden lg:flex ">
        {navLinks.map((link) => (
          <Link
            className={` border-b-4 cursor-none ${patchname === link.href ? " border-sec hover:border-transparent duration-300 ease-out cursor-none " : " border-transparent "} `}
            key={link.href}
            href={link.href}
          >
            <ListItems>{link.name}</ListItems>
          </Link>
        ))}
      </List>

      {/* Desktop contact button */}
      <Link
        href="/contact"
        id="navBarButton"
        className=" hidden lg:inline-block px-18 py-7 bg-sec rounded-full text-black overflow-hidden cursor-none z-10 drop-shadow-none group relative "
      >
        <span
          className="font-satoshiBold text-[20px] font-semibold text-white z-50 cursor-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:top-100 duration-300 ease-in-out"
        >
          Contact
        </span>
        <span
          className="font-satoshiBold text-[20px] font-semibold text-white z-50 cursor-none absolute -top-100 left-[50%] translate-x-[-50%] group-hover:top-[50%] group-hover:translate-y-[-50%] duration-300 ease-in-out"
        >
          Hi
        </span>

        <div
          id="fadeOut"
          className="h-15 w-full bg-black absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full -z-20 cursor-none group-hover:-left-5 group-hover:scale-150 transition-all duration-500"
        ></div>
      </Link>

      {/* Mobile hamburger toggle */}
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
        className=" lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-sec text-white cursor-none z-50 "
      >
        {menuOpen ? (
          <HiX className=" text-2xl " />
        ) : (
          <HiMenuAlt4 className=" text-2xl " />
        )}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 left-0 h-screen w-full bg-white z-40 flex flex-col px-6 pt-28 pb-10 transition-all duration-300 ease-in-out ${menuOpen ? " opacity-100 pointer-events-auto " : " opacity-0 pointer-events-none "}`}
      >
        <ul className=" flex flex-col gap-2 ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className=" cursor-none "
            >
              <li
                className={`font-excon text-4xl sm:text-5xl py-3 border-b border-neutral-200 select-none ${patchname === link.href ? " text-sec " : " text-black "}`}
              >
                {link.name}
              </li>
            </Link>
          ))}
        </ul>

        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className=" mt-auto w-full bg-sec rounded-full text-center py-5 cursor-none "
        >
          <span className=" font-satoshiBold text-[20px] font-semibold text-white ">
            Contact
          </span>
        </Link>
      </div>
    </Container>
  );
}
