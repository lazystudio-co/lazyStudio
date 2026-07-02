"use client";

import Slider from "react-slick";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowRoundForward,
  IoIosArrowRoundBack,
} from "react-icons/io";
import { useRef, useState, useEffect } from "react";
import Container from "./container";

// react-slick's built-in `responsive` relies on matchMedia/enquire which is
// unreliable across environments, so we drive slidesToShow from live width.
function useResponsiveValue(pick) {
  const [value, setValue] = useState(() => pick(1200));
  useEffect(() => {
    const update = () => setValue(pick(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return value;
}

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

  const slidesToShow = useResponsiveValue((w) => {
    if (w >= 1280) return 4.5;
    if (w >= 1024) return 3.2;
    if (w >= 768) return 2.3;
    if (w >= 640) return 1.5;
    return 1;
  });

  const settings = {
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  return (
    <section className="py-16 sm:py-24 lg:py-30">
      <Container>
        <div className="flex justify-between items-center mb-10 mx-5 sm:mx-8 lg:mx-12 ">
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
          <button key={i} className=" w-full sm:w-fit sm:ml-12 lg:ml-22 cursor-none">
            <div
              className={` pb-8 relative w-fit mx-auto sm:mx-0 ${p.bg} text-white overflow-hidden cursor-none`}
            >
              <img src={p.image} className=" w-[80vw] max-w-80 sm:w-80 lg:w-100 rounded-3xl cursor-none " />
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
