"use client"
import Marquee from "react-fast-marquee";

export default function ProjectsContent() {


  return (
    <section className=" mt-10 ">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={false}
        loop={0}
        className="select-none "
      >
        <div className="mx-2 cursor-none w-130 ">
          <img
            src="/images/h.png"
            // alt={`slide-${index}`}
            className=" rounded-2xl duration-300 ease-out grayscale hover:grayscale-0"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="mx-2 cursor-none w-130 ">
          <img
            src="/images/h.png"
            // alt={`slide-${index}`}
            className=" rounded-2xl duration-300 ease-out grayscale hover:grayscale-0"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="mx-2 cursor-none w-130 ">
          <img
            src="/images/h.png"
            // alt={`slide-${index}`}
            className=" rounded-2xl duration-300 ease-out grayscale hover:grayscale-0"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="mx-2 cursor-none w-130 ">
          <img
            src="/images/h.png"
            // alt={`slide-${index}`}
            className=" rounded-2xl duration-300 ease-out grayscale hover:grayscale-0"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="mx-2 cursor-none w-130 ">
          <img
            src="/images/h.png"
            // alt={`slide-${index}`}
            className=" rounded-2xl duration-300 ease-out grayscale hover:grayscale-0"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="mx-2 cursor-none w-130 ">
          <img
            src="/images/h.png"
            // alt={`slide-${index}`}
            className=" rounded-2xl duration-300 ease-out grayscale hover:grayscale-0"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="mx-2 cursor-none w-130 ">
          <img
            src="/images/h.png"
            // alt={`slide-${index}`}
            className=" rounded-2xl duration-300 ease-out grayscale hover:grayscale-0"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </Marquee>
    </section>
  );
}
