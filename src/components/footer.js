import React from "react";
import Container from "./container";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  const webServices = [
    "Landing Pages",
    "E-Commerce Websites",
    "Marketplace Platforms",
    "Portfolio Website",
    "SaaS Platforms",
    "Dashboards",
    "Custom Web Apps",
    "API Integrations",
  ];

  const devServices = [
    "React & Next.js Development",
    "MVP Development",
    "Saas",
    "Firebase Integration",
    "Webflow Development",
    "AI Chatbot Integration",
    "Backend Development",
    "Custom Web Solutions",
    "Web App",
    "Database Design",
  ];

  const designServices = [
    "Logo Design",
    "Brand Identity",
    "Brand Strategy",
    "Brandbook & Style",
    "Product & Packaging Design",
    "Social Media Assets",
  ];

  const videoServices = [
    "Cinematic Video Editing",
    "Short Form Video Editing",
    "YouTube Video Editing",
    "Social Media Video Editing",
    "Promotional Video Editing",
    "Color Grading",
  ];

  return (
    <footer className="border-t border-gray-300 pt-20 lg:pt-30 pb-10  ">
      <Container className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img
            src="/images/logo.png"
            alt="LazyStudio"
            className="-ml-2 select-none w-40 "
          />
          <p className="w-full max-w-70 mt-4 font-satoshiBold text-[16px] leading-[1.6]">
            We craft world-class digital products that help startups and Fortune
            500 companies not just succeed, but create meaningful, memorable
            experiences that people truly love and engage with.
          </p>
          <div className="mt-10 ">
            <Link
              href="/contact"
              id="footerButton"
              className=" inline-block px-18 py-7 bg-lime rounded-full text-black overflow-hidden cursor-none drop-shadow-none group relative "
            >
              <span
                className="font-satoshiBold text-[20px] font-semibold text-lime z-50 cursor-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:top-100 duration-300 ease-in-out pointer-events-none"
              >
                Contact
              </span>
              <span
                className="font-satoshiBold text-[20px] font-semibold text-white z-50 cursor-none absolute -top-100 left-[50%] translate-x-[-50%] group-hover:top-[50%] group-hover:translate-y-[-50%] duration-300 ease-in-out pointer-events-none"
              >
                Hi
              </span>

              <div
                id="fadeOut"
                className="h-15 w-full scale-180 bg-black absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full -z-20 cursor-none group-hover:-left-5 group-hover:scale-150 transition-all duration-500"
              ></div>
            </Link>
          </div>
        </div>

        <div className="mt-5 lg:ml-15 ">
          <label className="font-satoshiBold text-[22px] text-black font-black cursor-none">
            Company
          </label>
          <ul className="flex flex-col gap-5 mt-4 w-fit cursor-none ">
            <Link href="/" className=" cursor-none ">
              <li className="font-satoshiBold text-[16px] w-fit cursor-none!">
                Home
              </li>
            </Link>
            <Link href="/contact" className=" cursor-none ">
              <li className="font-satoshiBold text-[16px] w-fit cursor-none!">
                Contact Us
              </li>
            </Link>
            <Link href="/services" className=" cursor-none ">
              <li className="font-satoshiBold text-[16px] w-fit cursor-none!">
                Services
              </li>
            </Link>
            <Link href="/whyUs" className=" cursor-none ">
              <li className="font-satoshiBold text-[16px] w-fit cursor-none!">
                Why Us
              </li>
            </Link>
            <Link href="/projects" className=" cursor-none ">
              <li className="font-satoshiBold text-[16px] w-fit cursor-none!">
                Projects
              </li>
            </Link>
          </ul>
        </div>

        <div className="mt-5 sm:col-span-2 ">
          <label className="font-satoshiBold text-[22px] text-black font-black cursor-none">
            Services
          </label>
          <div className=" grid grid-cols-2 lg:grid-cols-3 gap-x-6 ">
            <ul className="flex flex-col gap-5 mt-4 w-fit cursor-none">
              {webServices.map((service, idx) => (
                <Link key={idx} href={`/services`} className="cursor-none">
                  <li className="font-satoshiBold text-[16px] w-fit cursor-none!">
                    {service}
                  </li>
                </Link>
              ))}
            </ul>
            <ul className="flex flex-col gap-5 mt-4 w-fit cursor-none">
              {devServices.map((service, idx) => (
                <Link key={idx} href={`/services`} className="cursor-none">
                  <li className="font-satoshiBold text-[16px] w-fit cursor-none!">
                    {service}
                  </li>
                </Link>
              ))}
            </ul>{" "}
            <ul className="flex flex-col gap-5 mt-4 w-fit cursor-none">
              {designServices.map((service, idx) => (
                <Link key={idx} href={`/services`} className="cursor-none">
                  <li className="font-satoshiBold text-[16px] w-fit cursor-none!">
                    {service}
                  </li>
                </Link>
              ))}
              {videoServices.map((service, idx) => (
                <Link key={idx} href={`/services`} className="cursor-none">
                  <li className="font-satoshiBold text-[16px] w-fit cursor-none!">
                    {service}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <Container className=" pt-16 lg:pt-20 flex flex-col gap-8 md:flex-row md:justify-between md:items-center ">
        <div className=" flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 lg:gap-14 ">
          <p className=" font-satoshiRegular font-regular text-[16px] lg:text-[18px] text-black ">
            © 2026 Lazy Studio. All Rights Reserved.
          </p>
          <p className=" font-satoshiRegular font-regular text-[16px] lg:text-[18px] text-black ">
            Privacy Policy
          </p>
          <p className=" font-satoshiRegular font-regular text-[16px] lg:text-[18px] text-black ">
            Terms
          </p>
        </div>
        <div className=" flex flex-row justify-start md:justify-center items-center gap-10 lg:gap-14 ">
          <FaInstagram className=" text-[24px] text-black hover:text-lime duration-200 ease-out  " />
          <FaSquareXTwitter className=" text-[24px] text-black hover:text-lime duration-200 ease-out  " />
          <FaFacebookSquare className=" text-[24px] text-black hover:text-lime duration-200 ease-out  " />
        </div>
      </Container>
    </footer>
  );
}
