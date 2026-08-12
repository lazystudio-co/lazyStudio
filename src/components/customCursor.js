"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import GlassSurface from "@/component/GlassSurface";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

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

    const hoverSelector =
      "a, button, .hoverable, input, textarea, label, [role='button'], .cursor-pointer, select";

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target || !target.closest) return;

      const isHoverable = target.closest(hoverSelector);

      if (isHoverable) {
        gsap.to(cursor, {
          scale: 1.8,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const onMouseOut = (e) => {
      if (!e.target || !e.target.closest) return;

      const stillHovering =
        e.relatedTarget &&
        e.relatedTarget.closest &&
        e.relatedTarget.closest(hoverSelector);

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
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-9999 opacity-0 hidden sm:block will-change-transform rounded-full bg-black/10 "
    >
      <GlassSurface
        width={50}
        height={50}
        borderRadius={50}
        borderWidth={0.06}
        brightness={50}
        opacity={0.8}
        blur={1}
        displace={0}
        distortionScale={-24}
        redOffset={-3}
        greenOffset={0}
        blueOffset={3}
        backgroundOpacity={0.03}
        mixBlendMode="screen"
        className="rounded-full"
      />
    </div>
  );
}
