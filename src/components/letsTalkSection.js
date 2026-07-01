import React from "react";
import LetsTalkButton from "./letsTalkButton";
import { motion } from "framer-motion";

export default function LetsTalkSection({ title, hookline, classNameBTN }) {
  return (
    <section className="pb-20">
      <div className="bg-white border-2 border-sec/20 shadow-none shadow-black/30 rounded-[40px] p-16 flex flex-row items-center overflow-hidden hover:border-black duration-300 ease-in">
        <div className="">
          <h2 className="font-excon text-7xl mb-8 leading-tighter select-none">
            {title}
          </h2>
          <p className="font-satoshiBold text-3xl text-black/80 max-w-sm mb-12 leading-tight">
            {hookline}
          </p>

          <div className="w-full ">
            <LetsTalkButton
              id="ctaTalk"
              text="Contact us"
              textSec="We're ready"
              className=" w-65! "
            />
          </div>

          <p className="mt-8 font-satoshiRegular text-black/50 text-xl italic ">
            *We also get booked fast 🔥
          </p>
        </div>

        <div className=" ml-25 relative group">
          <div className="relative z-10 ">
            <img
              src="/gif/letstalk.gif"
              alt="3D Monitor Mockup"
              className="w-180 h-auto ml-auto "
            />
          </div>
          <div className="absolute -inset-10 bg-blue-100/50 blur-[100px] rounded-full -z-10 group-hover:bg-blue-200/50 transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  );
}
