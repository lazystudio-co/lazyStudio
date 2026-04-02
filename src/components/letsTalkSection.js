import React from "react";
import LetsTalkButton from "./letsTalkButton";
import { motion } from "framer-motion";

export default function LetsTalkSection({ title, hookline, classNameBTN }) {
  return (
    <section className="pb-40">
      <div className="bg-white border border-gray-100 shadow-2xl rounded-[40px] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-20 overflow-hidden">
        <div className="">
          <h2 className="font-excon text-7xl mb-8 leading-tighter select-none">
            {title}
          </h2>
          <p className="font-satoshiBold text-3xl text-black/80 max-w-sm mb-12 leading-tight">
            {hookline}
          </p>

          <div className="w-full max-w-sm">
            <LetsTalkButton
              id="ctaTalk"
              text="Contact us"
              textSec="We're ready"
              className={classNameBTN}
            />
          </div>

          <p className="mt-8 font-satoshiRegular text-black/50 text-xl italic ">
            *We also get booked fast 🔥
          </p>
        </div>

        <div className="lg:w-1/2 relative group">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10"
          >
            <img
              src="/images/about_cta_monitor.png"
              alt="3D Monitor Mockup"
              className="w-120 h-auto rounded-3xl shadow-lg border border-black/5 ml-auto "
            />
          </motion.div>
          {/* Background Glow */}
          <div className="absolute -inset-10 bg-blue-100/50 blur-[100px] rounded-full -z-10 group-hover:bg-blue-200/50 transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  );
}
