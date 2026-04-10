"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const BANNER_IMAGES = [
  "images/banner1.png",
  "images/banner2.png",
  "images/banner3.png",
  "images/banner4.png",
];

/** Fully hidden: clipped from the top so nothing shows (reveal grows from bottom edge upward). */
const CLIP_HIDDEN = "inset(100% 0 0 0)";
const CLIP_VISIBLE = "inset(0 0 0 0)";

export default function BannerContents() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".banner-image");
      if (!images.length) return;

      gsap.set(images, { clipPath: CLIP_HIDDEN });
      gsap.set(images[0], { clipPath: CLIP_VISIBLE });

      const transitionCount = Math.max(0, BANNER_IMAGES.length - 1);
      if (transitionCount === 0) return;

      const segment = 1;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".banner-stage",
          start: "top top",
          end: `+=${transitionCount * 100}%`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      images.forEach((image, index) => {
        if (index === 0) return;

        const t = (index - 1) * segment;
        tl.fromTo(
          image,
          { clipPath: CLIP_HIDDEN },
          {
            clipPath: CLIP_VISIBLE,
            duration: segment,
            ease: "none",
          },
          t,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="mt-25 mb-10 w-full">
      <div className="banner-stage relative min-h-svh w-full">
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full"
        >
          {BANNER_IMAGES.map((src, i) => (
            <div
              key={i}
              className="cursor-none absolute inset-0 m-auto h-fit w-350 overflow-hidden rounded-3xl hoverable "
            >
              <img
                src={src}
                alt="banner"
                className="banner-image block w-full rounded-3xl"
              />
            </div>
          ))}
        </motion.a>
      </div>
    </div>
  );
}
