"use client";

import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./container";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { MdArrowOutward, MdOutlineArrowOutward } from "react-icons/md";
import TiltedCard from "@/component/TiltedCard";

export default function InfoSlide() {
  return (
    <section className="my-20   ">
      <Container className=" ">
        <div className=" flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between px-4 lg:px-0">
          <h2 className="font-CabinetReg text-[40px] sm:text-[52px] lg:text-[64px] leading-none lg:leading-18 select-none ">
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className=" bg-black "
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
              className=" bg-black "
            >
              We Excel at
            </span>
          </h2>
          <Link
            href="/services"
            className=" bg-transparent border-2 border-black rounded-full px-3 py-3 pr-15 flex flex-row justify-between items-center gap-4 cursor-none group relative"
          >
            <p className="uppercase font-satoshiBold font-bold text-[16px] text-black pl-5 scale-y-100 group-hover:scale-y-0 duration-300 delay-200 ease-in-out pointer-events-none select-none">
              view all services
            </p>
            <div
              className="pr-2 py-2 bg-black w-fit rounded-full absolute top-[50%] translate-y-[-50%] right-2 pl-2 group-hover:pl-53 group-hover:duration-300 group-hover:ease-in-out pointer-events-none"
              id="viewServiceButton"
            >
              <MdArrowOutward className=" text-lime text-[18px] " />
            </div>
          </Link>
        </div>

        {/* category */}
        <div className="grid grid-cols-3 auto-rows-[minmax(300px,auto)] gap-6 pt-10 pb-16 relative">
          <Link
            href="/services/web-development"
            className=" h-full grayscale-100 hover:grayscale-0 duration-300 ease-in-out "
          >
            <TiltedCard
              imageSrc="/images/webdevsec.png"
              altText="Web development card"
              rotateAmplitude={6}
              scaleOnHover={1.01}
              containerHeight="100%"
              imageWidth="100%"
              imageHeight="100%"
              showTooltip={false}
              showMobileWarning={false}
              displayOverlayContent
              overlayContent={
                <button className="tilt-action-button pointer-events-auto">
                  <MdOutlineArrowOutward className="text-[14px] text-black" />
                </button>
              }
            />
          </Link>

          <Link
            href="/services/system-&-ui-kit"
            className="h-full grayscale-100 hover:grayscale-0 duration-300 ease-in-out "
          >
            <TiltedCard
              imageSrc="/images/systemsec.png"
              altText="System and UI kit design"
              rotateAmplitude={6}
              scaleOnHover={1.01}
              containerHeight="100%"
              imageWidth="100%"
              imageHeight="100%"
              showTooltip={false}
              showMobileWarning={false}
              displayOverlayContent
              overlayContent={
                <button className="tilt-action-button pointer-events-auto">
                  <MdOutlineArrowOutward className="text-[14px] text-black" />
                </button>
              }
            />
          </Link>
          <Link
            href="/services/web-design"
            className="h-full grayscale-100 hover:grayscale-0 duration-300 ease-in-out "
          >
            <TiltedCard
              imageSrc="/images/webdesign.png"
              altText="Web design card"
              rotateAmplitude={6}
              scaleOnHover={1.01}
              containerHeight="100%"
              imageWidth="100%"
              imageHeight="100%"
              showTooltip={false}
              showMobileWarning={false}
              displayOverlayContent
              overlayContent={
                <button className="tilt-action-button pointer-events-auto">
                  <MdOutlineArrowOutward className="text-[14px] text-black" />
                </button>
              }
            />
          </Link>
          <Link
            href="/services/ai-&-agents"
            className="h-full grayscale-100 hover:grayscale-0 duration-300 ease-in-out "
          >
            <TiltedCard
              imageSrc="/gif/ai.gif"
              altText="AI integration and agents"
              rotateAmplitude={6}
              scaleOnHover={1.01}
              containerHeight="100%"
              imageWidth="100%"
              imageHeight="100%"
              showTooltip={false}
              showMobileWarning={false}
              displayOverlayContent
              overlayContent={
                <button className="tilt-action-button pointer-events-auto">
                  <MdOutlineArrowOutward className="text-[14px] text-black" />
                </button>
              }
            />
          </Link>
          <Link
            href="/services/branding-identity"
            className=" h-full grayscale-100 hover:grayscale-0 duration-300 ease-in-out "
          >
            <TiltedCard
              imageSrc="/images/brandingsec.png"
              altText="Branding and identity"
              rotateAmplitude={6}
              scaleOnHover={1.01}
              containerHeight="100%"
              imageWidth="100%"
              imageHeight="100%"
              showTooltip={false}
              showMobileWarning={false}
              displayOverlayContent
              overlayContent={
                <button className="tilt-action-button pointer-events-auto">
                  <MdOutlineArrowOutward className="text-[14px] text-black" />
                </button>
              }
            />
          </Link>
          <Link
            href="/services"
            className="h-full grayscale-100 hover:grayscale-0 duration-300 ease-in-out "
          >
            <TiltedCard
              imageSrc="/gif/allservice.gif"
              altText="Custom portfolio card"
              rotateAmplitude={6}
              scaleOnHover={1.01}
              containerHeight="100%"
              imageWidth="100%"
              imageHeight="100%"
              showTooltip={false}
              showMobileWarning={false}
              displayOverlayContent
              overlayContent={
                <button className="tilt-action-button pointer-events-auto">
                  <MdOutlineArrowOutward className="text-[14px] text-black" />
                </button>
              }
            />
          </Link>
        </div>
        {/* category */}
      </Container>
    </section>
  );
}
