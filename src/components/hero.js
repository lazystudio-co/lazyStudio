import { easeInOut, easeOut, motion } from "framer-motion";
import Container from "./container";
import LetsTalkButton from "./letsTalkButton";

export default function Hero() {
  return (
    <section className="relative w-full bg-white text-black pt-5 pb-16 sm:pt-28 sm:pb-20 md:pt-10 lg:pt-10 lg:pb-28 px-5 sm:px-10 lg:px-20 2xl:px-100 flex flex-col justify-center items-center overflow-hidden">
      <Container className="flex flex-col items-center relative z-10">
        <h1 className="font-CabinetGrotesk text-[34px] sm:text-[56px] md:text-[70px] lg:text-[80px] xl:text-[92px] leading-[0.9] tracking-tight font-black select-none text-black w-fit flex flex-col justify-center items-center ">
          <span className=" text-center " >
            Crafting the future </span>
          <span>of Web, SaaS,</span>
          <span className=" text-center " >and AI experiences.
          </span>
        </h1>

        <p className="font-satoshiRegular text-[18px] sm:text-[20px] lg:text-[22px] text-black/80 text-center max-w-2xl mt-3 md:mt-6 select-none">
          We combine custom graphic design, web development, and intelligent AI agents to help ambitious companies scale faster.
        </p>

        <div className=" w-full flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-center gap-8 -mt-6 md:-mt-2">
          <LetsTalkButton
            id="letsTalkBtn"
            text="let's talk"
            textSec="Book Now"
            className="w-[70%]! md:w-[25%]! h-14! "
          />

          <div className="flex flex-row justify-center items-center select-none -mt-4 md:mt-10">
            <div className=" bg-black p-2 h-10 md:h-14 w-10 md:w-14 border-3 border-white rounded-full flex justify-center items-center " >
              <img src="/icons/atom.png" alt="Atom" />
            </div>
            <div className=" bg-black p-2 h-10 md:h-14 w-10 md:w-14 border-3 border-white rounded-full flex justify-center items-center -ml-4 " >
              <img src="/icons/python.png" alt="Python" />
            </div>
            <div className=" bg-black p-2 h-10 md:h-14 w-10 md:w-14 border-3 border-white rounded-full flex justify-center items-center -ml-4 " >
              <img src="/icons/webflow-icon.png" alt="Webflow" />
            </div>
            <div className=" bg-black p-2 h-10 md:h-14 w-10 md:w-14 border-3 border-white rounded-full flex justify-center items-center -ml-4 " >
              <img src="/icons/figma.png" alt="GSAP" />
            </div>
            <div className=" bg-black p-2 h-10 md:h-14 w-10 md:w-14 border-3 border-white rounded-full flex justify-center items-center -ml-4 " >
              <img src="/icons/n8n.png" alt="n8n" />
            </div>
          </div>
        </div>

      </Container>


      {/* <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 100, scale: 1, rotate: 180 }}
        whileHover={{ rotate: 45, duration: 0.3 }}
        transition={{ ease: easeInOut, duration: 0.7, delay: 0.3 }}
        viewport={{ type: "spring", stiffness: 100 }}

        src="/shapes/s.png" className=" w-20 absolute right-40 top-4 select-none " />

      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 100, scale: 1, rotate: 180 }}
        whileHover={{ rotate: 45, duration: 0.3 }}
        transition={{ ease: easeInOut, duration: 0.7, delay: 0.3 }}
        viewport={{ type: "spring", stiffness: 100 }}

        src="/shapes/s13.png" className=" w-20 absolute left-40 top-4 select-none " />

      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 100, scale: 1, rotate: 180 }}
        whileHover={{ rotate: 45, duration: 0.3 }}
        transition={{ ease: easeInOut, duration: 0.7, delay: 0.3 }}
        viewport={{ type: "spring", stiffness: 100 }}

        src="/shapes/s11.png" className=" w-20 absolute left-40 bottom-4 select-none " />

      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 100, scale: 1, rotate: 180 }}
        whileHover={{ rotate: 45, duration: 0.3 }}
        transition={{ ease: easeInOut, duration: 0.7, delay: 0.3 }}
        viewport={{ type: "spring", stiffness: 100 }}

        src="/shapes/s2.png" className=" w-20 absolute right-40 bottom-4 select-none " /> */}

    </section>
  );
}