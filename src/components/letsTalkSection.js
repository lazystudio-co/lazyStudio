import React from "react";
import LetsTalkButton from "./letsTalkButton";
import { motion } from "framer-motion";

export default function LetsTalkSection({ title, hookline, classNameBTN }) {
  return (
    <section className="pb-20">
      <div className="relative group overflow-hidden rounded-[36px] bg-neutral-950 border border-neutral-800/80 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl transition-all duration-500 hover:border-lime/40">
        {/* Ambient lighting glow */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-lime/10 rounded-full blur-3xl group-hover:bg-lime/20 transition-all duration-500 pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:bg-lime/10 transition-all duration-500 pointer-events-none" />

        <div className="relative z-10 max-w-xl">
          <h2 className="font-CabinetGrotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight select-none">
            {title}
          </h2>
          <p className="font-satoshiRegular text-lg sm:text-xl lg:text-2xl text-neutral-400 mb-10 leading-relaxed">
            {hookline}
          </p>

          <div className="w-full">
            <LetsTalkButton
              id="ctaTalk"
              text="Contact us"
              textSec="We're ready"
              className="w-full! sm:w-65!"
            />
          </div>

          <p className="mt-8 font-satoshiRegular text-neutral-400 text-base lg:text-lg italic">
            <span className="text-lime text-3xl font-bold">"</span>
            We also get booked fast
            <span className="text-lime text-3xl font-bold">"</span>
          </p>
        </div>

        <div className="mt-12 lg:mt-0 lg:ml-12 relative group/img shrink-0">
          <div className="relative z-10 overflow-hidden rounded-3xl border border-neutral-800 shadow-2xl">
            <img
              src="/gif/layout.gif"
              alt="3D Monitor Mockup"
              className="w-full sm:w-lg lg:w-[480px] h-auto object-cover rounded-3xl"
            />
          </div>
          <div className="absolute -inset-10 bg-lime/10 blur-[80px] rounded-full -z-10 group-hover/img:bg-lime/20 transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  );
}
