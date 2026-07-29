"use client";

import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./container";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function InfoSlide() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  // Drive slidesToShow from live viewport width (react-slick's `responsive`
  // relies on matchMedia/enquire which does not fire reliably here).
  const [slidesToShow, setSlidesToShow] = useState(3.2);
  useEffect(() => {
    const pick = (w) => {
      if (w >= 1280) return 3.2;
      if (w >= 1024) return 2.2;
      if (w >= 768) return 1.5;
      return 1;
    };
    const update = () => setSlidesToShow(pick(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    // On mobile (single slide) let the slider height fit the current slide so
    // short slides don't leave large vertical gaps. Desktop keeps the collage.
    adaptiveHeight: slidesToShow <= 1,
  };

  useEffect(() => {
    const motionMatchMedia = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const THRESHOLD = 8;

    if (motionMatchMedia.matches) return; // user prefers reduced motion

    const container = containerRef.current;
    if (!container) return;

    const imgs = Array.from(container.querySelectorAll("img"));

    // initialize styles on all images
    imgs.forEach((img) => {
      img.style.transition = "transform 0.25s ease-out";
      img.style.willChange = "transform";
      img.style.transformOrigin = "center center";
      img.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });

    let activeImg = null;
    let rafId = null;

    const applyTransform = (img, clientX, clientY) => {
      const rect = img.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = (clientX - centerX) / (rect.width / 2);
      const offsetY = (clientY - centerY) / (rect.height / 2);
      const normX = Math.max(-1, Math.min(1, offsetX));
      const normY = Math.max(-1, Math.min(1, offsetY));

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const intensity = THRESHOLD / 2;
        const rotateY = normX * intensity;
        const rotateX = -normY * intensity;
        img.style.transform = `perspective(${Math.max(600, img.clientWidth)}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        rafId = null;
      });
    };

    const resetImg = (img) => {
      if (!img) return;
      img.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    const onPointerMove = (e) => {
      if (e.pointerType === "touch") return;
      const img = e.target?.closest ? e.target.closest("img") : null;

      if (img && container.contains(img)) {
        if (activeImg !== img) {
          if (activeImg) resetImg(activeImg);
          activeImg = img;
        }
        applyTransform(activeImg, e.clientX, e.clientY);
      } else {
        if (activeImg) {
          resetImg(activeImg);
          activeImg = null;
        }
      }
    };

    const onPointerLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (activeImg) resetImg(activeImg);
      activeImg = null;
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      imgs.forEach((img) => resetImg(img));
    };
  }, []);

  return (
    <section className="my-20  ">
      <Container>
        <div className=" flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between px-4 lg:px-0">
          <h2 className="font-exconReg text-[40px] sm:text-[52px] lg:text-[64px] leading-tight lg:leading-18 select-none ">
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className=" bg-linear-to-r from-black via-black to-sec "
            >
              What
            </span>
            <br />
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className=" bg-linear-to-r from-black via-sec to-sec/50 "
            >
              We Excel at
            </span>
          </h2>
          <div className=" flex flex-row flex-wrap justify-start lg:justify-center items-center gap-6 lg:gap-10 pt-0 lg:pt-7 cursor-none ">
            <Link
              href="/services"
              className=" bg-transparent border-2 border-sec rounded-full px-3 py-3 pr-15 flex flex-row justify-between items-center gap-4 cursor-none group relative"
            >
              <p
                className="uppercase font-satoshiBold font-bold text-[16px] pl-5 scale-y-100 group-hover:scale-y-0 duration-300 delay-200 ease-in-out pointer-events-none select-none"
              >
                view all services
              </p>
              <div
                className="pr-2 py-2 bg-sec w-fit rounded-full absolute top-[50%] translate-y-[-50%] right-2 pl-2 group-hover:pl-53 group-hover:duration-300 group-hover:ease-in-out pointer-events-none"
                id="viewServiceButton"
              >
                <MdArrowOutward className=" text-white text-[18px] " />
              </div>
            </Link>
            <div className=" h-10 w-px bg-black  "></div>
            <div className="flex gap-4  ">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-sec text-white text-3xl hover:scale-105 transition cursor-none "
              >
                <IoIosArrowRoundBack />
              </button>

              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white text-3xl hover:scale-105 transition cursor-none "
              >
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
      </Container>

      <div ref={containerRef} className="w-full select-none slick-no-pointer ">
        <style>{`
          .slick-no-pointer .slick-slide {
            pointer-events: none;
          }
          .slick-no-pointer .slick-slide a {
            pointer-events: auto;
          }
          /* On mobile the slider uses adaptiveHeight (one slide at a time).
             The global ".slick-track { align-items: center }" would center a
             tall slide inside a shorter list box and clip its top/bottom, so
             top-align the track here and let each slide size naturally. */
          @media (max-width: 1023px) {
            .slick-no-pointer .slick-track {
              align-items: flex-start;
            }
          }
        `}</style>
        <Slider ref={sliderRef} {...settings}>
          {/* first */}
          <div className="py-10 lg:py-15 max-lg:flex max-lg:justify-center px-4 lg:px-0 lg:ml-63 ">
            <Link href="/services/uiux-design">
              <img
                src="/images/uiux.png"
                className=" rounded-3xl w-[78vw] sm:w-80 lg:w-100"
              />
            </Link>
          </div>
          {/* first */}

          {/* second & third */}
          <div className=" py-10 lg:py-15 max-lg:flex max-lg:flex-col max-lg:items-center px-4 lg:px-0 lg:ml-25 ">
            <div>
              <Link href="/services/branding-identity">
                <img
                  src="/images/brandingidentity.png"
                  className=" rounded-3xl w-[78vw] sm:w-96 lg:w-180 "
                />
              </Link>
            </div>
            <div>
              <Link href="/services/system-&-ui-kit">
                <img
                  src="/images/systemui.png"
                  className=" rounded-3xl w-[78vw] sm:w-96 lg:w-180 mt-6 lg:mt-11 "
                />
              </Link>
            </div>
          </div>
          {/* second & third */}

          {/* fifth & sixth */}
          <div className=" py-10 lg:py-15 max-lg:flex max-lg:flex-col max-lg:items-center px-4 lg:px-0 lg:ml-35 ">
            <div>
              <Link href="/services/custom-portfolio">
                <img
                  src="/images/portfolio.png"
                  className=" rounded-3xl w-[78vw] sm:w-80 lg:w-150 "
                />
              </Link>
            </div>
            <div>
              <Link href="/services/professional-video-editing">
                <img
                  src="/images/videoediting.gif"
                  className=" rounded-3xl w-[78vw] sm:w-80 lg:w-150 mt-6 lg:mt-11 "
                />
              </Link>
            </div>
          </div>
          {/* fifth & sixth */}

          {/* fourth */}
          <div className=" py-10 lg:py-15 max-lg:flex max-lg:justify-center px-4 lg:px-0 lg:ml-45 ">
            <Link href="/services/landing-page-design">
              <img
                src="/images/landingpagesec.png"
                className=" rounded-3xl w-[78vw] sm:w-80 lg:w-100 "
              />
            </Link>
          </div>
          {/* fourth */}

          {/* seventh */}
          <div className=" py-10 lg:py-15 max-lg:flex max-lg:justify-center px-4 lg:px-0 lg:-ml-45 relative">
            <Link href="/services" className=" relative inline-block ">
              <img
                src="/images/andmore.gif"
                className=" rounded-3xl w-[78vw] sm:w-80 lg:w-100 lg:ml-50 "
              />
              <button
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-[78%] lg:-translate-x-[78%] shadow-lg shadow-white font-satoshiBold font-black text-black text-[16px] lg:text-[18px] px-4 py-2 w-48 lg:w-55 bg-white rounded-full text-center border2 bordertransparent hover:borderwhite hover:bg-transparent hover:text-white duration-300 ease-in-out delay-100"
              >
                View All Services
              </button>
            </Link>
          </div>
          {/* seventh */}
        </Slider>
      </div>
    </section>
  );
}
