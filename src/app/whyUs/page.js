"use client";

import Container from "@/components/container";
import React, { useMemo } from "react";

// Data constants - extracted for optimization
const STATS_DATA = [
  {
    number: "150+",
    label: "Projects Delivered",
    sublabel: "Across all industries",
  },
  {
    number: "80+",
    label: "Enterprise Clients",
    sublabel: "Trusted partnerships",
  },
  {
    number: "5+",
    label: "Years of Excellence",
    sublabel: "Consistent delivery",
  },
  {
    number: "15",
    label: "Specialized Experts",
    sublabel: "Dedicated craftspeople",
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

const CARDS_DATA = [
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
      "You work directly with our core team—designers, developers, and strategists. Real-time collaboration, clear communication, and shared accountability ensure alignment every step of the way.",
  },
  {
    id: "04",
    title: "Proven Execution Track Record",
    description:
      "150+ successful deliverables across diverse industries and verticals. From early-stage startups to established enterprises, we consistently deliver products that exceed expectations.",
  },
  {
    id: "05",
    title: "Rapid Delivery Without Compromise",
    description:
      "Lean operations, focused expertise, and proven processes enable us to move faster than traditional agencies while maintaining premium quality standards.",
  },
  {
    id: "06",
    title: "Dedicated Post-Launch Excellence",
    description:
      "Launch is just the beginning. We provide ongoing optimization, monitoring, and strategic recommendations to ensure sustained performance and continuous improvement.",
  },
];

const STEPS_DATA = [
  {
    id: "01",
    title: "Strategic Alignment & Scope Definition",
    description:
      "We conduct thorough discovery to understand your business objectives, market positioning, technical requirements, and success metrics. This foundation ensures alignment and sets clear expectations.",
  },
  {
    id: "02",
    title: "Design & UX Architecture",
    description:
      "We create data-driven designs optimized for user engagement and conversion. From information architecture to visual design, every element serves a strategic purpose backed by research and best practices.",
  },
  {
    id: "03",
    title: "Full-Stack Engineering & Development",
    description:
      "Our team builds scalable, high-performance solutions using modern technology stacks. With continuous integration practices and collaborative development methodology, we ensure code quality and project transparency.",
  },
  {
    id: "04",
    title: "Quality Assurance & Performance Validation",
    description:
      "Comprehensive testing across all devices, browsers, and user scenarios. We validate security standards, optimize load times, and eliminate critical issues before your product reaches users.",
  },
  {
    id: "05",
    title: "Infrastructure Deployment & Optimization",
    description:
      "We handle end-to-end deployment with comprehensive monitoring, security protocols, and performance optimization. Every implementation is validated against production standards.",
  },
  {
    id: "06",
    title: "Continuous Monitoring & Strategic Scaling",
    description:
      "Post-launch, we provide real-time analytics, user behavior optimization, and strategic recommendations. We scale your platform alongside your growth while maintaining performance and reliability.",
  },
];

const TRACK_RECORD_DATA = [
  {
    number: "150+",
    title: "150+ Projects",
    description:
      "We've built everything from concept to execution—websites, applications, brand identities, and digital experiences. Each project reinforces our expertise and understanding of diverse market needs.",
  },
  {
    number: "80+",
    title: "80+ Clients",
    description:
      "Our diverse client base spans startups, SMEs, and enterprises across industries. This variety keeps us sharp, innovative, and equipped to handle any challenge you throw our way.",
  },
  {
    number: "15",
    title: "15 Experts",
    description:
      "A carefully curated team of designers, developers, strategists, and video editors. Small enough to move fast, big enough to handle complex projects with excellence.",
  },
];

const TESTIMONIALS_DATA = [
  {
    quote:
      "The platform they delivered increased our user engagement by 340% within the first quarter. Expert team, flawless execution, and genuinely invested in our success.",
    attribution: "- VP Product, SaaS Scale-up",
  },
  {
    quote:
      "We evaluated several agencies, but Lazy Studio demonstrated superior technical depth and strategic thinking. The website they built is now our strongest competitive asset.",
    attribution: "- Founder & CEO, Design Studio",
  },
  {
    quote:
      "Beyond the exceptional product quality, their post-launch support and optimization strategies generated measurable ROI. They're true strategic partners, not just vendors.",
    attribution: "- Director of Digital Operations, E-Commerce Enterprise",
  },
];

export default function WhyUs() {
  // Memoize data to prevent unnecessary recalculations
  const memoizedStats = useMemo(() => STATS_DATA, []);
  const memoizedSkills = useMemo(() => SKILLS_DATA, []);
  const memoizedCards = useMemo(() => CARDS_DATA, []);
  const memoizedSteps = useMemo(() => STEPS_DATA, []);
  const memoizedTrackRecord = useMemo(() => TRACK_RECORD_DATA, []);
  const memoizedTestimonials = useMemo(() => TESTIMONIALS_DATA, []);

  return (
    <div className="w-full bg-white text-black font-sans pb-24">
      {/* Container: 1600px centered */}
      <Container className="px-8 lg:px-12 2xl:px-16">
        {/* Hero Section */}
        <section className="pt-40 pb-32 flex flex-col items-center text-center">
          <h1 className="text-8xl tracking-tight leading-tight mb-6 px-2 font-Excon font-black   ">
            Strategic Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-sec">
              Transformation
            </span>
          </h1>
          <p className="text-2xl text-sec max-w-4xl mt-4 px-4 leading-relaxed font-SatoshiBoldRegular">
            Partner with a results-driven digital agency that combines strategic
            thinking with world-class execution. We deliver comprehensive
            solutions that drive measurable business impact and sustainable
            growth.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-32 grid grid-cols-4 gap-8">
          {memoizedStats.map((stat) => (
            <div
              key={stat.number}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-8xl text-black mb-4 font-ExconSec ">
                {stat.number}
              </h3>
              <p className="text-xl font-semibold text-sec font-SatoshiBoldRegular">
                {stat.label}
              </p>
              <p className="text-base text-sec mt-2 font-SatoshiBoldRegular">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </section>

        {/* The "Why Choose Us" Bento Grid (Dark Theme to match services) */}
        <section className="bg-black rounded-3xl p-16 text-white mb-32 border border-gray-900">
          <div className="mb-16 flex flex-row justify-between items-end gap-8">
            <div>
              <h2 className="text-6xl font-black max-w-2xl leading-tight mb-2 font-Excon">
                Data-Driven Solutions.
              </h2>
              <h2 className="text-5xl font-black max-w-2xl leading-tight bg-gradient-to-r from-white via-sec to-black bg-clip-text text-transparent font-ExconSec">
                Exceptional Results.
              </h2>
            </div>
            <p className="text-white max-w-md my-auto text-lg leading-relaxed font-SatoshiBoldRegular">
              We engineer digital products that solve real problems. Our
              approach combines strategic expertise, technical excellence, and
              design sophistication to deliver competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {memoizedCards.map((card) => (
              <div
                key={card.id}
                className=" select-none cursor-pointer bg-black border border-sec rounded-3xl p-8 hover:border-white/50 hover:shadow-xl hover:shadow-white/5 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.id}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-Excon">
                  {card.title}
                </h3>
                <p className="text-white/80 font-SatoshiBoldRegular">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Process: Order to Delivery */}
        <section className="mb-32">
          <h2 className="text-6xl font-bold mb-6 text-center font-Excon">
            Our Proven Development Framework
          </h2>
          <p className="text-center text-sec text-xl mb-16 max-w-4xl mx-auto px-4 leading-relaxed font-SatoshiBoldRegular">
            A strategic, collaborative methodology delivering predictable
            outcomes from discovery through post-launch optimization and
            scaling.
          </p>

          <div className="grid grid-cols-2 gap-10">
            {memoizedSteps.map((step) => (
              <div key={step.id} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-bold text-2xl mb-4 flex-shrink-0 select-none ">
                    {step.id}
                  </div>
                  <div className="w-1 h-24 bg-gradient-to-b from-gray-900 to-white"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold mb-3 font-Excon">
                    {step.title}
                  </h3>
                  <p className="text-sec leading-relaxed font-SatoshiBoldRegular">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Expertise Tags (Matching the "All Services" pill design) */}
        <section className="mb-32">
          <h2 className="text-6xl font-bold mb-12 text-center px-2 font-Excon">
            Comprehensive Technology & Service Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto px-4  ">
            {memoizedSkills.map((skill) => (
              <span
                key={skill}
                className=" select-none cursor-grab px-6 py-3 rounded-full border border-gray-300 text-base font-medium text-black hover:bg-black hover:text-white transition-all cursor-default whitespace-nowrap font-SatoshiBoldRegular"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Why Numbers Matter (Additional Context) */}
        <section className="bg-gray-50 rounded-3xl p-16 mb-32">
          <h2 className="text-5xl font-bold mb-12 text-center font-Excon">
            Understanding Our Track Record
          </h2>
          <div className="grid grid-cols-3 gap-10">
            {memoizedTrackRecord.map((item) => (
              <div key={item.number}>
                <h3 className="text-2xl font-bold mb-4 font-Excon">
                  {item.title}
                </h3>
                <p className="text-sec leading-relaxed font-SatoshiBoldRegular">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonial Snippet */}
        <section className="mb-32">
          <h2 className="text-5xl font-bold mb-16 text-center font-Excon">
            Why Enterprise Leaders Choose Us
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {memoizedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-10"
              >
                <p className="text-sec mb-6 text-lg italic leading-relaxed font-SatoshiBoldRegular">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold font-Excon">
                  {testimonial.attribution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 rounded-3xl p-24 text-center flex flex-col items-center">
          <h2 className="text-7xl font-bold mb-8 px-2 leading-tight font-Excon">
            Ready to accelerate digital transformation?
          </h2>
          <p className="text-2xl text-sec mb-12 max-w-2xl px-4 leading-relaxed font-SatoshiBoldRegular">
            Let's explore how we can drive measurable growth for your
            organization. Schedule a strategic consultation with our team.
          </p>
          <button className="bg-black text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors font-SatoshiBoldRegular">
            Schedule Your Consultation
          </button>
        </section>
      </Container>
    </div>
  );
}
