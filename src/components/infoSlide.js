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
  const cardRefs = useRef([]);
  const sliderRef = useRef(null);

  const cardInfo = [
    {
      image: "/images/uxui3.jpg",
      imageClass: "w-106 rounded-3xl",
      title: "UI / UX Design",
      titleClass:
        "absolute top-8 left-8 font-satoshiBold text-[38px] text-white tracking-tighter",
      desc: "Intuitive, user-centered digital experiences focused on usability, clear navigation, and engaging interface interactions.",
      descClass:
        "font-satoshiRegular text-[20px] text-white/70 absolute left-8 top-24 pr-4",
      wrapperClass: "ml-80 py-10",
      link: "/uiuxdesign",
    },
    {
      image: "/images/customWeb.png",
      imageClass: "w-108 rounded-3xl",
      title: "Custom Website Development",
      titleClass:
        "absolute top-8 left-8 font-satoshiBold text-[38px] text-white tracking-tighter leading-tight",
      desc: "Modern, high-performance websites built with technologies like Next.js, React, and Tailwind.",
      descClass:
        "font-satoshiRegular text-[20px] text-white/70 absolute left-8 top-36 pr-4",
      wrapperClass: "ml-50",
      link: "/customwebsitedevelopment",
    },
    {
      image: "/images/landingPage.jpg",
      imageClass: "w-108 rounded-3xl",
      title: "Landing Page Design",
      titleClass:
        "absolute top-8 left-8 font-satoshiBold text-[38px] text-white tracking-tighter",
      desc: "Conversion-focused landing pages designed to capture leads and drive measurable results.",
      descClass:
        "font-satoshiRegular text-[20px] text-white/70 absolute left-8 top-24 pr-4",
      wrapperClass: "ml-20",
      link: "/landingpagedesign",
    },
    {
      image: "/images/productDesign.jpg",
      imageClass: "w-108 rounded-3xl",
      title: "Branding & Visual Identity",
      titleClass:
        "absolute top-8 left-8 font-satoshiBold text-[38px] text-white tracking-tighter leading-tight",
      desc: "Strategic brand identities including logo systems, typography, color palettes, and visual frameworks.",
      descClass:
        "font-satoshiRegular text-[20px] text-white/70 absolute left-8 top-36 pr-4",
      wrapperClass: "-ml-10",
      link: "/brandingvisualidentity",
    },
  ];

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
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    const THRESHOLD = 8;

    if (!motionMatchMedia.matches) {
      cardRefs.current.forEach((card) => {
        if (!card) return;

        card.style.transition = "transform 0.25s ease-out";
        card.style.willChange = "transform";

        const handleHover = (e) => {
          const { clientX, clientY, currentTarget } = e;
          const rect = currentTarget.getBoundingClientRect();

          const horizontal = (clientX - rect.left) / currentTarget.clientWidth;
          const vertical = (clientY - rect.top) / currentTarget.clientHeight;

          const rotateX = (horizontal * THRESHOLD - THRESHOLD / 2).toFixed(2);
          const rotateY = (THRESHOLD / 2 - vertical * THRESHOLD).toFixed(2);

          card.style.transform = `perspective(${currentTarget.clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
        };

        const resetStyles = () => {
          card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        };

        card.addEventListener("mousemove", handleHover);
        card.addEventListener("mouseleave", resetStyles);
      });
    }
    s;
  }, []);

  return (
    <section className="my-20">
      <Container>
        <div className="px-50 flex items-center justify-between">
          <h1
            id="infoServiceTitle"
            className="font-exconReg text-[64px] leading-18 select-none "
          >
            <span>What</span> <br /> We Excel at
          </h1>
          <div className=" flex flex-row justify-center items-center gap-10 pt-7 ">
            <Link
              href="/services"
              className=" bg-transparent border-2 border-sec rounded-full px-3 py-3 pr-15 flex flex-row justify-between items-center gap-4 group relative"
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
                className="w-12 h-12 flex items-center justify-center rounded-full bg-sec text-white text-3xl hover:scale-105 transition cursor-pointer "
              >
                <IoIosArrowRoundBack />
              </button>

              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white text-3xl hover:scale-105 transition cursor-pointer "
              >
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
      </Container>

      <div className="w-full select-none">
        <Slider ref={sliderRef} {...settings}>
          {/* Slide 1 */}
          {cardInfo.map((items, index) => (
            <Link href={items.link} className={items.wrapperClass}>
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="w-fit cursor-pointer relative"
              >
                <div className="relative">
                  <img src={items.image} className={items.imageClass} />
                  <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
                </div>

                <h2 className={items.titleClass}>{items.title}</h2>

                <p className={items.descClass}>{items.desc}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
}
