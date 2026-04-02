"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // 1. Hide the system cursor on the entire body
    document.body.style.cursor = "none";

    // Optional: Hide cursor on all interactive elements specifically to prevent overrides
    const style = document.createElement("style");
    style.innerHTML = `
      * { cursor: none !important; }
    `;
    document.head.appendChild(style);

    const xMoveCursor = gsap.quickTo(cursor, "x", {
      duration: 0.15,
      ease: "power3",
    });

    const yMoveCursor = gsap.quickTo(cursor, "y", {
      duration: 0.15,
      ease: "power3",
    });

    // Center the div exactly on the mouse coordinates
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    let isVisible = false;

    const onMouseMove = (e) => {
      if (!isVisible) {
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
        isVisible = true;
      }
      xMoveCursor(e.clientX);
      yMoveCursor(e.clientY);
    };

    const onMouseLeave = () => {
      isVisible = false;
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };

    const onMouseEnter = () => {
      isVisible = true;
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target.closest) return;

      const isHoverable = target.closest(
        "a, button, .hoverable, input, textarea",
      );

      if (isHoverable) {
        gsap.to(cursor, {
          scale: 2, // Increased scale to make the "area" larger
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const onMouseOut = (e) => {
      if (!e.target.closest) return;

      const stillHovering =
        e.relatedTarget &&
        e.relatedTarget.closest &&
        e.relatedTarget.closest("a, button, .hoverable, input, textarea");

      if (!stillHovering) {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      // Cleanup: Restore the system cursor
      document.body.style.cursor = "auto";
      document.head.removeChild(style);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        pointer-events-none 
        fixed top-0 left-0 
        z-9999 
        w-8 h-8
        bg-white 
        border-
        border-black
        mix-blend-difference 
        opacity-0 
        hidden sm:block 
        will-change-transform 
        rounded-full
      "
    />
  );
}
