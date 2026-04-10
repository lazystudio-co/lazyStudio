"use client";

import { useRef, useMemo, memo } from "react";
import Container from "@/components/container";
import LetsTalkButton from "@/components/letsTalkButton";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import LetsTalkSection from "@/components/letsTalkSection";

function AboutUsContents() {
  const imageRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const manifesto = useMemo(
    () => [
      {
        title: "No Noise",
        desc: "We focus on what actually moves the needle.",
      },
      {
        title: "Peak Tech",
        desc: "Next.js, React, and AI-driven workflows only.",
      },
      { title: "High Impact", desc: "Design that converts, code that scales." },
    ],
    [],
  );

  const pillars = useMemo(
    () => [
      {
        title: "Precision Dev",
        tag: "Performance",
        desc: "High-speed, scalable applications built with Next.js and React core architectures.",
      },
      {
        title: "Intuitive UI/UX",
        tag: "Experience",
        desc: "User journeys designed to remove friction and maximize conversion rates.",
      },
      {
        title: "Cinematic Vision",
        tag: "Branding",
        desc: "Professional video editing and brand strategy that tells your story perfectly.",
      },
    ],
    [],
  );

  const stats = useMemo(
    () => [
      { metric: "250+", label: "Projects Delivered" },
      { metric: "98%", label: "Client Satisfaction" },
      { metric: "50M+", label: "User Interactions" },
      { metric: "7 Years", label: "Industry Excellence" },
    ],
    [],
  );

  const testimonials = useMemo(
    () => [
      {
        name: "Sarah Mitchell",
        role: "CEO, TechVenture Co.",
        text: "Lazy Studio delivered our product in half the time we expected. The quality was exceptional, and they understood our vision perfectly.",
      },
      {
        name: "James Rodriguez",
        role: "Founder, E-Commerce Plus",
        text: "Their approach to optimization increased our conversion rate by 35%. They don't just build—they engineer for results.",
      },
      {
        name: "Emma Chen",
        role: "Product Director, FinApp",
        text: "Working with Lazy Studio felt like having a strategic partner, not just a vendor. Highly recommended for any serious project.",
      },
    ],
    [],
  );

  const processSteps = useMemo(
    () => [
      {
        step: "01",
        title: "Discovery & Strategy",
        desc: "We dive deep into your goals, market, and challenges to craft a winning strategy.",
      },
      {
        step: "02",
        title: "Planning & Design",
        desc: "Detailed wireframes and designs that set the blueprint for excellence.",
      },
      {
        step: "03",
        title: "Build & Optimize",
        desc: "Clean code, performance-first development with continuous optimization.",
      },
      {
        step: "04",
        title: "Launch & Support",
        desc: "Seamless deployment and ongoing support to keep you running at peak performance.",
      },
    ],
    [],
  );

  return (
    <main className=" bg-white">
      <Container>
        {/* Hero Section */}
        <section className="py-20 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-4xl -mt-20 ">
              <h1 className="font-excon text-[80px] lg:text-[140px] leading-[0.9] tracking-tighter image-text select-none mb-10">
                The Art of <br /> Strategic <br /> Efficiency.
              </h1>
              <p className="font-satoshiBold text-2xl lg:text-3xl text-black/80 max-w-2xl leading-snug">
                At LazyStudio, we don't believe in wasted motion. We've refined
                our craft so you don't have to worry about the overhead.
              </p>
            </div>

            <div className="relative hidden lg:block cursor-none group">
              <motion.div
                ref={imageRef}
                initial={
                  reduceMotion
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0.8, rotate: -5 }
                }
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={
                  reduceMotion ? {} : { duration: 1.2, ease: "easeOut" }
                }
                className="relative"
              >
                <div className="absolute -inset-3 bg-black/10 blur-xl rounded-full" />

                <motion.div
                  style={{ willChange: "transform" }}
                  animate={
                    reduceMotion ? {} : { y: [0, -20, 0], rotate: [0, 2, 0] }
                  }
                  transition={
                    reduceMotion
                      ? {}
                      : { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }
                >
                  <Image
                    src="/images/about_hero.png"
                    alt="LazyStudio Strategic Abstract"
                    width={1200}
                    height={800}
                    priority
                    className="relative w-full h-auto rounded-[3rem] shadow-xl z-10 pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The "Lazy" Niche Section */}
        <section className="py-10 bg-black text-white rounded-[40px] lg:rounded-[100px] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-10 lg:px-20 py-10">
            <div>
              <h2 className="font-excon text-6xl lg:text-8xl mb-8 leading-none">
                Why <span className="text-sec">Lazy</span>?
              </h2>
              <div className="space-y-6 font-satoshiRegular text-xl text-white/70 leading-relaxed">
                <p>
                  In a world obsessed with "busy work," we chose a different
                  path. "Lazy" isn't our state of mind—it's our **competitive
                  advantage**.
                </p>
                <p>
                  We are lazy because we've already spent thousands of hours
                  solving the hard problems. We built the frameworks, optimized
                  the stacks, and mastered the workflows, so we can deliver 10x
                  the impact with half the friction.
                </p>
                <p>
                  Our goal? To build digital products that are so
                  well-engineered they practically run themselves.
                </p>
              </div>
            </div>
            <div className="bg-sec/10 border border-white/10 p-12 rounded-3xl backdrop-blur-sm">
              <h3 className="font-excon text-3xl mb-6">The Lazy Manifesto</h3>
              <ul className="space-y-8">
                {[
                  {
                    title: "No Noise",
                    desc: "We focus on what actually moves the needle.",
                    Ncolor: "text-"
                  },
                  {
                    title: "Peak Tech",
                    desc: "Next.js, React, and AI-driven workflows only.",
                  },
                  {
                    title: "High Impact",
                    desc: "Design that converts, code that scales.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-6">
                    <span className="font-excon text-sec text-2xl">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-satoshiBold text-xl mb-1">
                        {item.title}
                      </h4>
                      <p className="font-satoshiRegular text-white/50">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Service Pillars / Expertise Section */}
        <section className=" py-30">
          <div className="text-center mb-24">
            <h2 className="font-excon text-5xl lg:text-7xl mb-6">Our DNA.</h2>
            <p className="font-satoshiRegular text-xl text-black/60 max-w-xl mx-auto">
              We've merged the world's most powerful technologies with top-tier
              creative vision to build something truly future-proof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Precision Dev",
                tag: "Performance",
                desc: "High-speed, scalable applications built with Next.js and React core architectures.",
              },
              {
                title: "Intuitive UI/UX",
                tag: "Experience",
                desc: "User journeys designed to remove friction and maximize conversion rates.",
              },
              {
                title: "Cinematic Vision",
                tag: "Branding",
                desc: "Professional video editing and brand strategy that tells your story perfectly.",
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="group p-10 border border-black/5 rounded-3xl hover:bg-black hover:text-white transition-all duration-500 cursor-none"
              >
                <div className="mb-8 uppercase tracking-widest text-xs font-satoshiBold text-sec">
                  {pillar.tag}
                </div>
                <h3 className="font-excon text-3xl mb-6">{pillar.title}</h3>
                <p className="font-satoshiRegular text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* By The Numbers - Credibility Through Data */}
        <section className="py-10 mb-20">
          <div className="text-center mb-20">
            <h2 className="font-excon text-5xl lg:text-7xl mb-6">
              By The Numbers.
            </h2>
            <p className="font-satoshiRegular text-xl text-black/60 max-w-xl mx-auto">
              Real results that speak louder than words. The impact we've
              created for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: "100+", label: "Projects Delivered" },
              { metric: "98%", label: "Client Satisfaction" },
              { metric: "150k+", label: "User Interactions" },
              { metric: "5 Years", label: "Industry Excellence" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="border border-black/10 rounded-3xl p-8 text-center hover:bg-sec transition-all duration-300 group "
              >
                <h3 className="font-excon text-5xl lg:text-6xl text-sec mb-4 group-hover:text-white duration-300 ease-in-out ">
                  {stat.metric}
                </h3>
                <p className="font-satoshiRegular text-lg text-black/70 group-hover:text-white duration-300 ease-in-out ">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className=" py-10 mb-20">
          <div className="text-center mb-20">
            <h2 className="font-excon text-5xl lg:text-7xl mb-6">
              What Our Clients Say.
            </h2>
            <p className="font-satoshiRegular text-xl text-black/60 max-w-xl mx-auto">
              Don't just take our word for it. Hear directly from the brands
              we've transformed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "CEO, TechVenture Co.",
                text: "Lazy Studio delivered our product in half the time we expected. The quality was exceptional, and they understood our vision perfectly.",
              },
              {
                name: "James Rodriguez",
                role: "Founder, E-Commerce Plus",
                text: "Their approach to optimization increased our conversion rate by 35%. They don't just build—they engineer for results.",
              },
              {
                name: "Emma Chen",
                role: "Product Director, FinApp",
                text: "Working with Lazy Studio felt like having a strategic partner, not just a vendor. Highly recommended for any serious project.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="border border-black/10 rounded-3xl p-10 hover:bg-sec duration-400 ease-in-out group"
              >
                <p className="font-satoshiRegular text-lg text-black/70 group-hover:text-white duration-300 ease-in-out mb-8 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-black/10 pt-6">
                  <h4 className="font-satoshiBold text-lg text-black/90 group-hover:text-white duration-300 ease-in-out">
                    {testimonial.name}
                  </h4>
                  <p className="font-satoshiRegular text-sm text-sec group-hover:text-white/50 duration-300 ease-in-out">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Process - Transparency Builds Trust */}
        <section className="py-20 lg:py-40 mb-20 bg-black text-white rounded-[40px] lg:rounded-[100px]">
          <div className="px-10 lg:px-20 py-10">
            <div className="text-center mb-20">
              <h2 className="font-excon text-5xl lg:text-7xl mb-6">
                Our <span className="text-sec">Process.</span>
              </h2>
              <p className="font-satoshiRegular text-xl text-white/60 max-w-xl mx-auto">
                Crystal clear workflows ensure transparency at every step. No
                surprises—only results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  desc: "We dive deep into your goals, market, and challenges to craft a winning strategy.",
                  colorTxt: "text-red-700/40",
                },
                {
                  step: "02",
                  title: "Planning & Design",
                  desc: "Detailed wireframes and designs that set the blueprint for excellence.",
                  colorTxt: "text-blue-700/40",
                },
                {
                  step: "03",
                  title: "Build & Optimize",
                  desc: "Clean code, performance-first development with continuous optimization.",
                  colorTxt: "text-orange-700/40",
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  desc: "Seamless deployment and ongoing support to keep you running at peak performance.",
                  colorTxt: "text-yellow-700/40",
                },
              ].map((process, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition-all duration-300"
                >
                  <div
                    className={`  font-excon text-5xl mb-6 ${process.colorTxt} `}
                  >
                    {process.step}
                  </div>
                  <h3 className="font-satoshiBold text-xl mb-4">
                    {process.title}
                  </h3>
                  <p className="font-satoshiRegular text-white/70 leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose LazyStudio - Direct Trust Builders */}
        <section className=" py-10 mb-20">
          <div className="text-center mb-20">
            <h2 className="font-excon text-5xl lg:text-7xl mb-6">
              Why Choose <span className="text-sec">LazyStudio</span>?
            </h2>
            <p className="font-satoshiRegular text-xl text-black/60 max-w-xl mx-auto">
              We're not just another agency. Here's what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Guaranteed",
                desc: "Every project meets our rigorous quality standards. We stand behind our work with full transparency and accountability.",
              },
              {
                title: "Lightning Fast Delivery",
                desc: "Our streamlined processes mean you get results faster without compromising on quality or attention to detail.",
              },
              {
                title: "Fair & Transparent Pricing",
                desc: "No hidden costs. We break down exactly what you're paying for and deliver ROI that justifies every dollar.",
              },
              {
                title: "True Partnership Approach",
                desc: "We're invested in your success. Your goals become our goals, and we work as an extension of your team.",
              },
              {
                title: "Cutting-Edge Technology",
                desc: "We stay ahead of the curve with the latest tech stack, ensuring your product is future-proof and scalable.",
              },
              {
                title: "End-to-End Support",
                desc: "From initial concept to post-launch support, we're here for you at every step of the journey.",
              },
            ].map((point, idx) => (
              <div
                key={idx}
                className="border border-black/10 rounded-3xl p-8 hover:bg-sec transition-all duration-300 group"
              >
                <div className="w-2 h-2 bg-sec rounded-full mb-6"></div>
                <h3 className="font-satoshiBold text-xl mb-3 text-black/90 group-hover:text-white duration-300 ease-in-out ">
                  {point.title}
                </h3>
                <p className="font-satoshiRegular text-lg text-black/70 leading-relaxed group-hover:text-white duration-300 ease-in-out ">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <LetsTalkSection
          title="Let's talk"
          hookline="Design done right and fast by people you can trust."
          classNameBTN=" w-65! "
        />
      </Container>
    </main>
  );
}

export default memo(AboutUsContents);
