"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Container from "./container";

export default function LeftSlide() {
  const imgPath = [
    "/images/l1.png",
    "/images/l2.png",
    "/images/l3.png",
    "/images/l4.png",
    "/images/l5.png",
    "/images/l6.png",
    "/images/l7.png",
    "/images/l8.png",
    "/images/l9.png",
    "/images/l10.png",
  ];

  return (
    <Container >
      <div id="fade-sides" className="select-none">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={false}
          loop={0} // infinite loop
          className="select-none"
        >
          {imgPath.map((path, index) => (
            <div key={index} className="mx-2 cursor-none ">
              <Image
                src={path}
                width={100}
                height={100}
                alt={`slide-${index}`}
                className="rounded-2xl duration-300 ease-out grayscale hover:grayscale-0"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </Container>
  );
}