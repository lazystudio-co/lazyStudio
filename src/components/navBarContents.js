"use client";
import Container from "./container";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt4, HiX } from "react-icons/hi";

export default function NavBarContents() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/whyUs" },
  ];

  const patchname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [patchname]);


  const handleClose = () => {
    setMenuOpen(false)
  }

  return (
    <Container className=" flex justify-between items-center py-4 z-50">
      <Link href="/" className=" cursor-none inline-block select-none ">
        <img
          src="/images/logo.png"
          alt="LazyStudio"
          className="w-30 sm:w-48 lg:w-50"
        />
      </Link>


      {/* Desktop contact button */}
      <div className=" flex flex-row justify-center items-center gap-4 " >
        <Link
          href="/contact"
          id="navBarButton"
          className=" hidden lg:inline-block px-18 py-7 bg-lime rounded-full text-black overflow-hidden cursor-none z-10 drop-shadow-none group relative "
        >
          <span
            className="font-satoshiBold text-[20px] font-semibold text-lime z-50 cursor-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:top-100 duration-300 ease-in-out"
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
            className="h-15 w-full bg-black scale-180 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full -z-20 cursor-none group-hover:-left-5 group-hover:scale-150 transition-all duration-500"
          ></div>
        </Link>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className=" flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-full bg-lime text-black cursor-none "
        >
          {menuOpen ? (
            <HiX className=" text-lg md:text-2xl " />
          ) : (
            <HiMenuAlt4 className=" text-lg md:text-2xl " />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Blurry Backdrop (prevents clicks to background and closes menu on click) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/30 backdrop-blur-xs z-30 cursor-none"
            />

            {/* Sliding Drawer Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[40%] md:w-full lg:w-[50%] xl:w-[40%] bg-white border-l border-black/20 z-40 flex flex-col px-10 sm:px-16 pt-28 pb-10 shadow-2xl cursor-none"
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
                      className={`font-CabinetGrotesk text-4xl sm:text-6xl py-3 border-b border-neutral-200 select-none ${patchname === link.href ? " text-lime " : " text-black "}`}
                    >
                      {link.name}
                    </li>
                  </Link>
                ))}
              </ul>

              <button
                onClick={handleClose}
                className=" absolute right-10 top-10 bg-lime p-3 rounded-full select-none cursor-pointer z-50 "
              >
                <HiX className=" text-2xl text-black " />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Container>
  );
}
