import React from "react";
import LetsTalkButton from "./letsTalkButton";
import { motion } from "framer-motion";

export default function LetsTalkSection({ title, hookline, classNameBTN }) {
  return (
    <section className="pb-20">
      <div className="bg-white border-2 border-sec/20 shadow-none shadow-black/30 rounded-[40px] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center overflow-hidden hover:border-black duration-300 ease-in">
        <div className="w-full lg:w-auto">
          <h2 className="font-excon text-4xl sm:text-5xl lg:text-7xl mb-8 leading-tighter select-none">
            {title}
          </h2>
          <p className="font-satoshiBold text-xl sm:text-2xl lg:text-3xl text-black/80 max-w-full lg:max-w-sm mb-12 leading-tight">
            {hookline}
          </p>

          <div className="w-full ">
            <LetsTalkButton
              id="ctaTalk"
              text="Contact us"
              textSec="We're ready"
              className=" w-full! sm:w-65! "
            />
          </div>

          <p className="mt-8 font-satoshiRegular text-black/50 text-lg lg:text-xl italic ">
            *We also get booked fast 🔥
          </p>
        </div>

        <div className=" mt-12 lg:mt-0 lg:ml-25 relative group w-full lg:w-auto">
          <div className="relative z-10 ">
            <img
              src="/gif/letstalk.gif"
              alt="3D Monitor Mockup"
              className="w-full sm:w-lg lg:w-180 h-auto mx-auto lg:ml-auto "
            />
          </div>
          <div className="absolute -inset-10 bg-blue-100/50 blur-[100px] rounded-full -z-10 group-hover:bg-blue-200/50 transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  );
}
