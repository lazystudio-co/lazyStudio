"use client";

import Slider from "react-slick";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowRoundForward,
  IoIosArrowRoundBack,
} from "react-icons/io";
import { useRef } from "react";
import Container from "./container";

export default function ProjectsContent() {
  const projects = [
    {
      title: "TELUS",
      desc: "UX for futuristic skyscrapers.",
      image: "images/customweb2.png",
    },
    {
      title: "Boston Dynamics",
      desc: "Bold redesign for robotics ",
      image: "images/customweb2.png",
    },
    {
      title: "+100 Projects",
      desc: "View more of our work",
      image: "images/customweb2.png",
    },
    {
      title: "Vivodyne",
      desc: "UI/UX for biotech company",
      image: "images/customweb2.png",
    },
    {
      title: "Vivodyne",
      desc: "UI/UX for biotech company",
      image: "images/customweb2.png",
    },
    {
      title: "Vivodyne",
      desc: "UI/UX for biotech company",
      image: "images/customweb2.png",
    },
    {
      title: "Vivodyne",
      desc: "UI/UX for biotech company",
      image: "images/customweb2.png",
    },
    {
      title: "Vivodyne",
      desc: "UI/UX for biotech company",
      image: "images/customweb2.png",
    },
  ];
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 4.5,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3.2 } },
      { breakpoint: 1024, settings: { slidesToShow: 2.3 } },
      { breakpoint: 640, settings: { slidesToShow: 1.2 } },
    ],
  };

  return (
    <section className="py-30">
      <Container>
        <div className="flex justify-between items-center mb-10 mx-4 sm:mx-8 lg:mx-12 ">
          <h2 className="uppercase tracking-widest text-[18px] font-satoshiBold select-none ">
            <span className=" w-2 h-3 bg-blue-700 ">|</span> Featured Projects
          </h2>
          <div className="flex gap-4 ">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white text-3xl hover:scale-105 transition cursor-none "
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
      </Container>

      <Slider ref={sliderRef} {...settings} className=" cursor-none ">
        {projects.map((p, i) => (
          <button key={i} className=" w-fit mx-auto ml-6 sm:ml-12 lg:ml-22 cursor-none relative">
            <div
              className={` pb-8  ${p.bg} text-white overflow-hidden cursor-none`}
            >
              <img src={p.image} className=" w-64 sm:w-80 lg:w-100 rounded-3xl cursor-none " />
              <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold px-2 absolute left-4 top-4 z-50 cursor-none ">
                {p.title}
              </h3>

              <p className="text-sm opacity-80 mb-10 max-w-55 px-2 absolute left-4 top-14 sm:top-16 lg:top-18 z-50 cursor-none ">
                {p.desc}
              </p>
            </div>
          </button>
        ))}
      </Slider>
    </section>
  );
}
