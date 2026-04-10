"use client";
import Container from "./container";
import React from "react";
import Image from "next/image";
import List from "./list";
import ListItems from "./listItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarContents() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/whyUs" },
    { name: "About", href: "/aboutUs" },
    // { name: "Blog", href: "/blog" },
  ];

  const patchname = usePathname();

  return (
    <Container className=" flex justify-between items-center py-4 relative ">
      <Link href="/" className=" cursor-none inline-block select-none ">
        <Image
          src="/images/logosec.png"
          width={180}
          height={48}
          alt="LazyStudio"
          className="w-55"
        />
      </Link>
      <List>
        {navLinks.map((link) => (
          <Link
            className={` border-b-4 cursor-none ${
              patchname === link.href
                ? " border-sec hover:border-transparent duration-300 ease-out cursor-none "
                : " border-transparent "
            } `}
            key={link.href}
            href={link.href}
          >
            <ListItems>{link.name}</ListItems>
          </Link>
        ))}
      </List>
      <Link
        href="/contact"
        id="navBarButton"
        className=" inline-block px-18 py-7 bg-sec rounded-full text-black overflow-hidden cursor-none z-10 drop-shadow-none group relative "
      >
        <span
          className=" font-satoshiBold text-[20px] font-semibold text-white z-50 cursor-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        group-hover:top-100 duration-300 ease-in-out "
        >
          Contact
        </span>
        <span
          className=" font-satoshiBold text-[20px] font-semibold text-white z-50 cursor-none absolute -top-100 left-[50%] translate-x-[-50%] 
        group-hover:top-[50%] group-hover:translate-y-[-50%] duration-300 ease-in-out "
        >
          Hi
        </span>

        <div
          id="fadeOut"
          className=" h-15 w-full bg-black absolute left-[50%] top-[50%] 
                        translate-x-[-50%] translate-y-[-50%] rounded-full -z-20 cursor-none
                        group-hover:-left-5 group-hover:scale-150 transition-all duration-500 "
        ></div>
      </Link>
    </Container>
  );
}
