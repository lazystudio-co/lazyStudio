"use client";

import { useRef, useMemo, memo } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/container";
import LetsTalkSection from "@/components/letsTalkSection";

// ---- Data ------------------------------------------------------------------

const STATS_DATA = [
  { metric: "150+", label: "Projects Delivered" },
  { metric: "98%", label: "Client Satisfaction" },
  { metric: "5+ Yrs", label: "Industry Excellence" },
  { metric: "15", label: "Specialized Experts" },
];

const MANIFESTO_DATA = [
  { title: "No Noise", desc: "We focus on what actually moves the needle." },
  { title: "Peak Tech", desc: "Next.js, React, and AI-driven workflows only." },
  { title: "High Impact", desc: "Design that converts, code that scales." },
];

const REASONS_DATA = [
  {
    id: "01",
    title: "Enterprise-Grade Architecture",
    description:
      "We architect scalable, maintainable systems built on industry best practices. Every solution is engineered for performance, security, and long-term evolution.",
  },
  {
    id: "02",
    title: "Custom, Production-Ready Solutions",
    description:
      "No templates. No shortcuts. Every product is meticulously crafted to your specifications with attention to detail, user experience, and technical excellence.",
  },
  {
    id: "03",
    title: "Transparent Partnership Model",
    description:
      "You work directly with our core team—designers, developers, and strategists. Real-time collaboration and shared accountability keep us aligned every step of the way.",
  },
  {
    id: "04",
    title: "Rapid Delivery Without Compromise",
    description:
      "Lean operations, focused expertise, and proven processes let us move faster than traditional agencies while maintaining premium quality standards.",
  },
  {
    id: "05",
    title: "Cutting-Edge Technology",
    description:
      "We stay ahead of the curve with a modern, future-proof stack—ensuring your product is fast, scalable, and ready for whatever comes next.",
  },
  {
    id: "06",
    title: "Dedicated Post-Launch Excellence",
    description:
      "Launch is just the beginning. We provide ongoing optimization, monitoring, and strategic recommendations to sustain performance and drive continuous improvement.",
  },
];

const PILLARS_DATA = [
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
];

const SKILLS_DATA = [
  "Next.js & React",
  "UX/UI Design",
  "SaaS Platforms",
  "Cinematic Video Editing",
  "Brand Identity",
  "MVP Development",
  "Webflow",
  "Landing Pages",
  "E-Commerce",
  "API Integrations",
];

const STEPS_DATA = [
  {
    step: "01",
    title: "Strategic Alignment & Scope",
    desc: "We run thorough discovery to understand your objectives, market, technical requirements, and success metrics—setting clear expectations from day one.",
    colorTxt: "text-red-700/40",
  },
  {
    step: "02",
    title: "Design & UX Architecture",
    desc: "Data-driven designs optimized for engagement and conversion. Every element—from information architecture to visuals—serves a strategic purpose.",
    colorTxt: "text-blue-700/40",
  },
  {
    step: "03",
    title: "Full-Stack Engineering",
    desc: "We build scalable, high-performance solutions with modern stacks, continuous integration, and a collaborative, transparent methodology.",
    colorTxt: "text-orange-700/40",
  },
  {
    step: "04",
    title: "Quality Assurance",
    desc: "Comprehensive testing across devices, browsers, and scenarios. We validate security, optimize load times, and eliminate critical issues pre-launch.",
    colorTxt: "text-yellow-700/40",
  },
  {
    step: "05",
    title: "Deployment & Optimization",
    desc: "End-to-end deployment with monitoring, security protocols, and performance tuning—every implementation validated against production standards.",
    colorTxt: "text-green-700/40",
  },
  {
    step: "06",
    title: "Monitoring & Scaling",
    desc: "Post-launch, we provide real-time analytics, behavior optimization, and strategic recommendations to scale alongside your growth.",
    colorTxt: "text-purple-700/40",
  },
];

const TESTIMONIALS_DATA = [
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
];

// ---- Component -------------------------------------------------------------

function WhyUsContents() {
  const imageRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const stats = useMemo(() => STATS_DATA, []);
  const manifesto = useMemo(() => MANIFESTO_DATA, []);
  const reasons = useMemo(() => REASONS_DATA, []);
  const pillars = useMemo(() => PILLARS_DATA, []);
  const skills = useMemo(() => SKILLS_DATA, []);
  const steps = useMemo(() => STEPS_DATA, []);
  const testimonials = useMemo(() => TESTIMONIALS_DATA, []);

  return (
    <main className="bg-white text-black">
      <Container className="px-5 sm:px-8 lg:px-12">
        {/* Hero */}
        <section className="py-20 lg:py-20">
          <div className="  ">
            <div className=" -mt-10">
              <h1 className="font-CabinetGrotesk text-[36px] sm:text-[56px] md:text-[76px] lg:text-[80px] xl:text-[92px] leading-[0.9] tracking-tighter select-none mb-6 text-center ">
                Why Lazy Studio<span className=" text-lime " > .</span>
              </h1>
              <p className="font-satoshiBold text-xl sm:text-2xl lg:text-3xl text-black/80 leading-snug text-center ">
                Partner with a results-driven studio that pairs strategic
                thinking with world-class execution. We deliver solutions that
                drive measurable impact and sustainable growth.
              </p>
            </div>

            <div className="relative hidden lg:block cursor-none group mt-10">
              <motion.div
                ref={imageRef}
                initial={
                  reduceMotion
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0.8, rotate: -5 }
                }
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={reduceMotion ? {} : { duration: 1.2, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute -inset-3 bg-black/10 blur-xl rounded-full" />

                <motion.div
                  style={{ willChange: "transform" }}
                  animate={reduceMotion ? {} : { y: [0, -20, 0], rotate: [0, 2, 0] }}
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

        {/* Stats */}
        <section className="pb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-black/10 rounded-3xl p-6 sm:p-8 text-center hover:bg-sec transition-all duration-300 group"
              >
                <h3 className="font-CabinetGrotesk text-4xl sm:text-5xl lg:text-6xl text-sec mb-4 group-hover:text-white duration-300 ease-in-out">
                  {stat.metric}
                </h3>
                <p className="font-satoshiRegular text-lg text-black/70 group-hover:text-white duration-300 ease-in-out">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy — Why "Lazy"? */}
        <section className="py-10 mb-20 lg:mb-32 bg-black text-white rounded-[40px] lg:rounded-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center px-6 sm:px-10 lg:px-20 py-8 lg:py-10">
            <div>
              <h2 className="font-CabinetGrotesk text-5xl sm:text-6xl lg:text-8xl mb-8 leading-none">
                Why <span className="text-sec">Lazy</span>?
              </h2>
              <div className="space-y-6 font-satoshiRegular text-lg sm:text-xl text-white/70 leading-relaxed">
                <p>
                  In a world obsessed with "busy work," we chose a different
                  path. "Lazy" isn't our state of mind—it's our competitive
                  advantage.
                </p>
                <p>
                  We're lazy because we've already spent thousands of hours
                  solving the hard problems. We built the frameworks, optimized
                  the stacks, and mastered the workflows, so we can deliver 10x
                  the impact with half the friction.
                </p>
                <p>
                  Our goal? Digital products so well-engineered they practically
                  run themselves.
                </p>
              </div>
            </div>
            <div className="bg-sec/10 border border-white/10 p-6 sm:p-10 lg:p-12 rounded-3xl backdrop-blur-sm">
              <h3 className="font-CabinetGrotesk text-2xl sm:text-3xl mb-6">The Lazy Manifesto</h3>
              <ul className="space-y-8">
                {manifesto.map((item, idx) => (
                  <li key={item.title} className="flex gap-4 sm:gap-6">
                    <span className="font-CabinetGrotesk text-sec text-2xl">
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

        {/* Why Choose Us — reasons */}
        <section className="mb-20 lg:mb-32">
          <div className="mb-16 flex flex-col lg:flex-row justify-between lg:items-end gap-8">
            <div>
              <h2 className="font-CabinetGrotesk text-4xl sm:text-5xl lg:text-6xl max-w-2xl leading-tight mb-2">
                Data-Driven Solutions.
              </h2>
              <h2 className="font-CabinetGrotesk text-3xl sm:text-4xl lg:text-5xl max-w-2xl leading-tight text-sec">
                Exceptional Results.
              </h2>
            </div>
            <p className="font-satoshiRegular text-black/60 max-w-md text-lg leading-relaxed">
              We engineer digital products that solve real problems—combining
              strategic expertise, technical excellence, and design
              sophistication to deliver a lasting competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="select-none cursor-none border border-black/10 rounded-3xl p-8 hover:bg-black hover:text-white transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-black text-white group-hover:bg-white group-hover:text-black rounded-full flex items-center justify-center font-satoshiBold text-xl mb-6 group-hover:scale-110 transition-all duration-300">
                  {reason.id}
                </div>
                <h3 className="font-CabinetGrotesk text-2xl mb-4">{reason.title}</h3>
                <p className="font-satoshiRegular text-black/70 group-hover:text-white/80 duration-300">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our DNA — pillars + expertise */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-CabinetGrotesk text-4xl sm:text-5xl lg:text-7xl mb-6">Our DNA.</h2>
            <p className="font-satoshiRegular text-xl text-black/60 max-w-xl mx-auto">
              We've merged the world's most powerful technologies with top-tier
              creative vision to build something truly future-proof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group p-8 sm:p-10 border border-black/5 rounded-3xl hover:bg-black hover:text-white transition-all duration-500 cursor-none"
              >
                <div className="mb-8 uppercase tracking-widest text-xs font-satoshiBold text-sec">
                  {pillar.tag}
                </div>
                <h3 className="font-CabinetGrotesk text-3xl mb-6">{pillar.title}</h3>
                <p className="font-satoshiRegular text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto px-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="select-none cursor-none px-6 py-3 rounded-full border border-black/15 text-base font-satoshiBold text-black hover:bg-black hover:text-white transition-all whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 lg:py-32 mb-20 lg:mb-32 bg-black text-white rounded-[40px] lg:rounded-[100px]">
          <div className="px-6 sm:px-10 lg:px-20 py-6 lg:py-10">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="font-CabinetGrotesk text-4xl sm:text-5xl lg:text-7xl mb-6">
                Our <span className="text-sec">Process.</span>
              </h2>
              <p className="font-satoshiRegular text-xl text-white/60 max-w-2xl mx-auto">
                A strategic, collaborative framework delivering predictable
                outcomes from discovery through post-launch scaling. No
                surprises—only results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((process) => (
                <div
                  key={process.step}
                  className="border border-white/10 rounded-3xl p-8 hover:bg-white/5 duration-300 ease-in-out"
                >
                  <div className={`font-CabinetGrotesk text-5xl mb-6 ${process.colorTxt}`}>
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

        {/* Testimonials */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-CabinetGrotesk text-4xl sm:text-5xl lg:text-7xl mb-6">
              What Our Clients Say.
            </h2>
            <p className="font-satoshiRegular text-xl text-black/60 max-w-xl mx-auto">
              Don't just take our word for it. Hear directly from the brands
              we've transformed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-black/10 rounded-3xl p-8 sm:p-10 hover:bg-sec duration-400 ease-in-out group"
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

        {/* CTA */}
        <LetsTalkSection
          title="Let's Talk"
          hookline="Design done right and fast by people you can trust."
          classNameBTN=" w-65! "
        />
      </Container>
    </main>
  );
}

export default memo(WhyUsContents);
