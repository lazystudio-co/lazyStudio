"use client";

import { useEffect, useRef } from "react";
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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 2,
    arrows: false,
    draggable: false,
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
        <div className=" flex items-center justify-between">
          <h2 className="font-exconReg text-[64px] leading-18 select-none ">
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
          <div className=" flex flex-row justify-center items-center gap-10 pt-7 cursor-none ">
            <Link
              href="/services"
              className=" bg-transparent border-2 border-sec rounded-full px-3 py-3 pr-15 flex flex-row justify-between items-center gap-4 cursor-none group relative"
            >
              <p
                className=" uppercase font-satoshiBold font-bold text-[16px] pl-5 scale-y-100 
              group-hover:scale-y-0 duration-300 delay-200 ease-in-out pointer-events-none select-none "
              >
                view all services
              </p>
              <div
                className=" pr-2 py-2 bg-sec w-fit rounded-full absolute top-[50%] translate-y-[-50%] right-2 pl-2 
              group-hover:pl-53 group-hover:duration-300 group-hover:ease-in-out pointer-events-none "
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
        `}</style>
        <Slider ref={sliderRef} {...settings}>
          {/* first */}
          <div className="py-15 ml-63 ">
            <Link href="/services/uiux-design">
              <img src="/images/uiux.png" className=" rounded-3xl w-100" />
            </Link>
          </div>
          {/* first */}

          {/* second & third */}
          <div className=" ml-25 py-15 ">
            <div>
              <Link href="/services/branding-identity">
                <img
                  src="/images/brandingidentity.png"
                  className=" rounded-3xl w-180 "
                />
              </Link>
            </div>
            <div>
              <Link href="/services/system-&-ui-kit">
                <img
                  src="/images/systemui.png"
                  className=" rounded-3xl w-180 mt-11 "
                />
              </Link>
            </div>
          </div>
          {/* second & third */}

          {/* fifth & sixth */}
          <div className=" ml-35 py-15 ">
            <div>
              <Link href="/services/custom-portfolio">
                <img
                  src="/images/portfolio.png"
                  className=" rounded-3xl w-150 "
                />
              </Link>
            </div>
            <div>
              <Link href="/services/professional-video-editing">
                <img
                  src="/images/videoediting.gif"
                  className=" rounded-3xl w-150 mt-11 "
                />
              </Link>
            </div>
          </div>
          {/* fifth & sixth */}

          {/* fourth */}
          <div className=" ml-45 py-15 ">
            <Link href="/services/landing-page-design">
              <img
                src="/images/landingpagesec.png"
                className=" rounded-3xl w-100 "
              />
            </Link>
          </div>
          {/* fourth */}

          {/* seventh */}
          <div className=" -ml-45 py-15 relative">
            <Link href="/services">
              <img
                src="/images/andmore.gif"
                className=" rounded-3xl w-100 ml-50 "
              />
              <button
                className=" absolute left-[78%] top-[50%] translate-x-[-78%] translate-y-[-50%] shadow-lg shadow-white
            font-satoshiBold font-black text-black text-[18px] px-4 py-2 w-55 bg-white rounded-full text-center border-2 border-transparent 
            hover:border-white hover:bg-transparent hover:text-white duration-300 ease-in-out delay-100 "
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
