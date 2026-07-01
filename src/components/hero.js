import Container from "./container";
import { Patrick_Hand_SC } from "next/font/google";
import LetsTalkButton from "./letsTalkButton";

const patrick = Patrick_Hand_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-patrick",
});

export default function Hero() {
  return (
    <section className=" px-5 sm:px-10 lg:px-20 2xl:px-100 -mt-10 ">
      <Container className=" grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <div>
          <h1
            className={`inline-block font-excon text-[38px] sm:text-[52px] lg:text-[60px] text-black mt-16 lg:mt-40 leading-snug select-none `}
          >
            <span className=" text-[72px] sm:text-[96px] lg:text-[120px] image-text select-none ">
              We craft
            </span>
            <br /> websites, brands & digital products
          </h1>
        </div>
        <div>
          <p className=" font-satoshiRegular text-[18px] sm:text-[20px] lg:text-[22px] text-black w-full lg:w-120 mt-6 lg:mt-60 lg:ml-auto select-none ">
            <b>Lazy Studio</b> is a global digital agency specializing in
            websites, e-commerce and brand experiences. We help startups and
            growing businesses build powerful digital products.
          </p>

          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <LetsTalkButton
              id="letsTalkBtn"
              text="let's talk"
              textSec="Book NOw"
              className=" lg:ml-17 w-full! sm:w-60! "
            />
            <div className=" pt-11 sm:ml-auto flex justify-center items-center select-none relative">
              <img
                src="images/carrow.png"
                className=" w-20 scale-x-[-1] -rotate-45 absolute -left-23 top-10 hidden xl:block "
              />
              <p className={` ${patrick.className} text-black text-2xl`}>
                We get <br />
                <span className=" flex justify-center items-center ">
                  booked fast
                  <img src="images/fire.png" className=" w-6 " />
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
