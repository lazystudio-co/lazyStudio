"use client";

import Slider from "react-slick";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowRoundForward,
  IoIosArrowRoundBack,
} from "react-icons/io";
import { useRef } from "react";

export default function ProjectsContent() {
  const projects = [
    {
      title: "TELUS",
      desc: "UX for futuristic skyscrapers.",
      image: "images/productimg.jpg",
    },
    {
      title: "Boston Dynamics",
      desc: "Bold redesign for robotics ",
      image: "images/productimg.jpg",
    },
    {
      title: "+100 Projects",
      desc: "View more of our work",
      image: "images/productimg.jpg",
    },
    {
      title: "Vivodyne",
      desc: "UI/UX for biotech company",
      image: "images/productimg.jpg",
    },
    {
      title: "Vivodyne",
      desc: "UI/UX for biotech company",
      image: "images/productimg.jpg",
    },
    {
      title: "Vivodyne",
      desc: "UI/UX for biotech company",
      image: "images/productimg.jpg",
    },
    {
      title: "Vivodyne",
      desc: "UI/UX for biotech company",
      image: "images/productimg.jpg",
    },
    {
      title: "Vivodyne",
      desc: "UI/UX for biotech company",
      image: "images/productimg.jpg",
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
  };

  return (
    <section className="py-30">
      <div className="flex justify-between items-center mb-10 mx-12 ">
        <h2 className="uppercase tracking-widest text-[18px] font-satoshiBold select-none ">
          <span className=" w-2 h-3 bg-black ">|</span> Featured Projects
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

      <Slider ref={sliderRef} {...settings} className=" cursor-none " >
        {projects.map((p, i) => (
          <button key={i} className=" w-fit mx-auto ml-22 cursor-none relative">
            <div className={` pb-8  ${p.bg} text-white overflow-hidden`}>
              <img src={p.image} className=" w-100 rounded-3xl " />
              <h3 className="text-[36px] font-semibold px-2 absolute left-4 top-4 z-50 ">
                {p.title}
              </h3>

              <p className="text-sm opacity-80 mb-10 max-w-55 px-2 absolute left-4 top-18 z-50 ">
                {p.desc}
              </p>
            </div>
          </button>
        ))}
      </Slider>
    </section>
  );
}
