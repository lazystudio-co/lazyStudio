"use client";

import {
  Code,
  LayoutDashboard,
  Palette,
  Video,
  Smartphone,
  Search,
  TrendingUp,
  Zap,
  Code2,
  BarChart3,
  ShieldCheck,
  Bot,
  Sparkles,
  Lightbulb,
  Target,
  Clapperboard,
} from "lucide-react";
import Container from "./container";
import LetsTalkButton from "./letsTalkButton";
import LetsTalkSection from "./letsTalkSection";

const services = [
  {
    title: "Web Services",
    icon: Code,
    description:
      "Lightning-fast, conversion-optimized websites built with cutting-edge technology.",
    impact: "Increase qualified leads by 40%+ with performance-first design.",
    why_us:
      "We combine pixel-perfect design with SEO mastery and zero-compromise performance.",
    outcome: "Websites that don't just look stunning—they actively sell.",
    services: [
      "Landing Pages",
      "E-Commerce Websites",
      "Marketplace Platforms",
      "Portfolio Website",
      "SaaS Platforms",
      "Dashboards",
      "Custom Web Apps",
      "API Integrations",
    ],
    benefits: [
      { icon: Smartphone, text: "Mobile-first, fully responsive" },
      { icon: Search, text: "SEO optimized from day one" },
      { icon: TrendingUp, text: "Conversion-focused architecture" },
      { icon: Zap, text: "Blazing fast load times under 2s" },
    ],
  },
  {
    title: "Development Services",
    icon: LayoutDashboard,
    description:
      "Scalable, AI-ready backend systems that grow with your business.",
    impact: "Deploy production-ready code in half the typical time.",
    why_us:
      "Expert in Next.js, React, and modern JavaScript with proven track record scaling to millions of users.",
    outcome: "Bulletproof infrastructure that never slows you down.",
    services: [
      "React & Next.js Development",
      "MVP Development",
      "SaaS Applications",
      "Firebase Integration & Development",
      "Webflow Development",
      "AI Chatbot Integration",
      "Backend Development",
      "Custom Web Solutions",
      "Progressive Web Apps",
      "Database Design & Optimization",
    ],
    benefits: [
      { icon: Code2, text: "Clean, maintainable code" },
      { icon: BarChart3, text: "Scales to millions of requests" },
      { icon: ShieldCheck, text: "Security-first architecture" },
      { icon: Bot, text: "AI & automation ready" },
    ],
  },
  {
    title: "Branding & Design",
    icon: Palette,
    description:
      "Strategic brand identity that commands attention and builds loyalty.",
    impact: "Stand out in crowded markets and increase brand recall by 60%.",
    why_us:
      "We craft identities that tell your story and resonate with your ideal customers at a visceral level.",
    outcome: "A brand that feels inevitable and unforgettable.",
    services: [
      "Logo Design & Redesign",
      "Complete Brand Identity",
      "Brand Strategy & Positioning",
      "Brandbook & Style Guides",
      "Product & Packaging Design",
      "Social Media Assets Suite",
      "Color Theory & Typography",
      "Icon Systems",
    ],
    benefits: [
      { icon: Sparkles, text: "Cohesive visual language" },
      { icon: Lightbulb, text: "Strategic positioning" },
      { icon: Target, text: "Customer-focused approach" },
      { icon: Smartphone, text: "Multi-platform consistency" },
    ],
  },

  {
    title: "Video Editing",
    icon: Video,
    description:
      "Cinematic video production that captures attention and drives engagement.",
    impact:
      "Video content that delivers 10x higher engagement than static content.",
    why_us:
      "Hollywood-grade editing combined with direct response marketing expertise. We don't just edit—we craft narratives that convert.",
    outcome: "Videos that stop scrolls, spark emotions, and inspire action.",
    services: [
      "Cinematic Video Editing",
      "Short Form Video Editing (TikTok, Reels)",
      "YouTube Video Editing & Optimization",
      "Social Media Video Campaigns",
      "Color Grading & Finishing",
    ],
    benefits: [
      { icon: Clapperboard, text: "Hollywood-quality editing" },
      { icon: BarChart3, text: "Optimized for each platform" },
      { icon: Palette, text: "Cinematic color grading" },
      { icon: TrendingUp, text: "Engagement-focused storytelling" },
    ],
  },
];

export default function AllServices() {
  return (
    <section className="bg-white">
      <Container className="py-20 px-5 sm:px-8 lg:px-12 ">
        {/* Heading */}
        <div className="text-center mb-10 ">
          <h2
            id="clipSec"
            className="text-4xl sm:text-5xl lg:text-7xl font-CabinetGrotesk font-bold mb-6"
          >
            All Services
          </h2>
          <p className="text-black/60 font-satoshiRegular text-lg max-w-2xl mx-auto">
            Everything your product needs — design, development, branding, and
            video. Delivered with precision and strategic thinking.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col gap-10 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-800/80 hover:border-lime/40 transition-all duration-500 shadow-2xl p-8 sm:p-10 lg:p-12"
              >
                {/* Background ambient lighting */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-lime/5 rounded-full blur-3xl group-hover:bg-lime/10 transition-all duration-700 pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:bg-lime/5 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                  {/* Left Column: Title & Key Stat (4 Cols) */}
                  <div className="lg:col-span-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-lime group-hover:bg-lime group-hover:text-black transition-all duration-300 shadow-inner">
                          <Icon size={28} />
                        </div>
                        <span className="font-mono text-sm font-bold text-neutral-500 group-hover:text-lime tracking-widest transition-colors duration-300">
                          SERVICE 0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-CabinetGrotesk text-white mb-4 tracking-tight group-hover:text-lime transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-neutral-400 font-satoshiRegular text-base sm:text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Impact Card */}
                    <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-5 group-hover:border-lime/30 transition-all duration-300">
                      <div className="text-2xl sm:text-3xl font-bold font-CabinetGrotesk text-lime mb-1">
                        {index === 0 && "40%+"}
                        {index === 1 && "2x Speed"}
                        {index === 2 && "60% Memory"}
                        {index === 3 && "10x Reach"}
                      </div>
                      <p className="text-neutral-400 font-satoshiRegular text-sm leading-snug">
                        {service.impact}
                      </p>
                    </div>
                  </div>

                  {/* Middle Column: Why Us & Key Benefits (4 Cols) */}
                  <div className="lg:col-span-4 lg:border-l lg:border-neutral-800/80 lg:pl-10 flex flex-col justify-between">
                    <div>
                      <div className="mb-8">
                        <p className="uppercase tracking-widest text-xs font-bold font-satoshiBold text-lime mb-3">
                          Why Lazy Studio
                        </p>
                        <p className="font-satoshiRegular text-neutral-300 text-sm sm:text-base leading-relaxed">
                          {service.why_us}
                        </p>
                      </div>

                      <div>
                        <p className="uppercase tracking-widest text-xs font-bold font-satoshiBold text-lime mb-4">
                          Key Benefits
                        </p>
                        <div className="space-y-3.5">
                          {service.benefits.map((benefit, idx) => {
                            const BenefitIcon = benefit.icon;
                            return (
                              <div
                                key={idx}
                                className="flex items-center gap-3"
                              >
                                <div className="p-1.5 rounded-lg bg-neutral-900 text-lime flex-shrink-0">
                                  <BenefitIcon size={16} />
                                </div>
                                <p className="font-satoshiRegular text-neutral-300 text-sm">
                                  {benefit.text}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Capabilities & Outcome (4 Cols) */}
                  <div className="lg:col-span-4 lg:border-l lg:border-neutral-800/80 lg:pl-10 flex flex-col justify-between">
                    <div>
                      <p className="uppercase tracking-widest text-xs font-bold font-satoshiBold text-lime mb-4">
                        Capabilities Included
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {service.services.map((item, i) => (
                          <span
                            key={i}
                            className="font-satoshiRegular text-xs text-neutral-300 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-lime/50 hover:text-white transition-all duration-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-neutral-800/80 pt-6">
                      <p className="uppercase tracking-widest text-xs font-bold font-satoshiBold text-lime mb-2">
                        Guaranteed Outcome
                      </p>
                      <p className="font-satoshiRegular text-neutral-300 text-sm sm:text-base italic leading-relaxed">
                        "{service.outcome}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Our Process Section */}
        <section className="mb-24 lg:mb-32">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-CabinetGrotesk font-bold mb-6">
              How We <span className="text-lime">Work.</span>
            </h2>
            <p className="text-black/60 font-satoshiRegular text-lg max-w-2xl mx-auto">
              A transparent, structured process that keeps you informed at every
              step. From discovery to launch—we've engineered every touchpoint
              for success.
            </p>
          </div>

          {/* Timeline / Process Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-800/80 hover:border-lime/50 p-8 sm:p-10 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-lime/10 flex flex-col justify-between">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-lime/10 rounded-full blur-3xl group-hover:bg-lime/20 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono font-bold text-xl text-lime group-hover:bg-lime group-hover:text-black transition-all duration-300 shadow-inner">
                    01
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-lime transition-colors duration-300">
                    Phase One
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-CabinetGrotesk text-white mb-4 tracking-tight group-hover:text-lime transition-colors duration-300">
                  Discovery & Strategy
                </h3>

                <p className="text-neutral-400 font-satoshiRegular text-base leading-relaxed mb-8">
                  We dive deep into your vision, market dynamics, and business
                  goals. Our team conducts comprehensive research to craft a
                  winning strategy tailored to your unique challenges.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-800/60">
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime text-xs flex-shrink-0">
                    ✓
                  </div>
                  <p className="font-satoshiRegular text-neutral-300 text-sm">
                    Stakeholder interviews & deep market research
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime text-xs flex-shrink-0">
                    ✓
                  </div>
                  <p className="font-satoshiRegular text-neutral-300 text-sm">
                    Competitive positioning & audience mapping
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime text-xs flex-shrink-0">
                    ✓
                  </div>
                  <p className="font-satoshiRegular text-neutral-300 text-sm">
                    Strategy roadmap with clear KPIs & objectives
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-800/80 hover:border-lime/50 p-8 sm:p-10 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-lime/10 flex flex-col justify-between">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-lime/10 rounded-full blur-3xl group-hover:bg-lime/20 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono font-bold text-xl text-lime group-hover:bg-lime group-hover:text-black transition-all duration-300 shadow-inner">
                    02
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-lime transition-colors duration-300">
                    Phase Two
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-CabinetGrotesk text-white mb-4 tracking-tight group-hover:text-lime transition-colors duration-300">
                  Design & Planning
                </h3>

                <p className="text-neutral-400 font-satoshiRegular text-base leading-relaxed mb-8">
                  Beautiful design meets meticulous planning. We create
                  detailed wireframes, interactive prototypes, and technical
                  specifications that serve as the blueprint for execution.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-800/60">
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime text-xs flex-shrink-0">
                    ✓
                  </div>
                  <p className="font-satoshiRegular text-neutral-300 text-sm">
                    High-fidelity Figma UI/UX prototypes
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime text-xs flex-shrink-0">
                    ✓
                  </div>
                  <p className="font-satoshiRegular text-neutral-300 text-sm">
                    User flow mapping & design design system
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime text-xs flex-shrink-0">
                    ✓
                  </div>
                  <p className="font-satoshiRegular text-neutral-300 text-sm">
                    Technical architecture & stack specification
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-800/80 hover:border-lime/50 p-8 sm:p-10 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-lime/10 flex flex-col justify-between">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-lime/10 rounded-full blur-3xl group-hover:bg-lime/20 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono font-bold text-xl text-lime group-hover:bg-lime group-hover:text-black transition-all duration-300 shadow-inner">
                    03
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-lime transition-colors duration-300">
                    Phase Three
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-CabinetGrotesk text-white mb-4 tracking-tight group-hover:text-lime transition-colors duration-300">
                  Build & Optimize
                </h3>

                <p className="text-neutral-400 font-satoshiRegular text-base leading-relaxed mb-8">
                  Our engineering team builds with precision. We use
                  modern tech, write clean code, and continuously optimize for
                  speed, security, and scalability.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-800/60">
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime text-xs flex-shrink-0">
                    ✓
                  </div>
                  <p className="font-satoshiRegular text-neutral-300 text-sm">
                    Clean, performant codebase with full docs
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime text-xs flex-shrink-0">
                    ✓
                  </div>
                  <p className="font-satoshiRegular text-neutral-300 text-sm">
                    Performance audits & security testing
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime text-xs flex-shrink-0">
                    ✓
                  </div>
                  <p className="font-satoshiRegular text-neutral-300 text-sm">
                    Sprint progress updates & open comms
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group relative overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-800/80 hover:border-lime/50 p-8 sm:p-10 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-lime/10 flex flex-col justify-between">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-lime/10 rounded-full blur-3xl group-hover:bg-lime/20 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono font-bold text-xl text-lime group-hover:bg-lime group-hover:text-black transition-all duration-300 shadow-inner">
                    04
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-lime transition-colors duration-300">
                    Phase Four
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-CabinetGrotesk text-white mb-4 tracking-tight group-hover:text-lime transition-colors duration-300">
                  Launch & Support
                </h3>

                <p className="text-neutral-400 font-satoshiRegular text-base leading-relaxed mb-8">
                  A flawless go-live every time. We manage the entire launch
                  process with zero-downtime deployment, analytics tracking, and
                  ongoing optimization.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-800/60">
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime text-xs flex-shrink-0">
                    ✓
                  </div>
                  <p className="font-satoshiRegular text-neutral-300 text-sm">
                    Zero-downtime production deployment
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime text-xs flex-shrink-0">
                    ✓
                  </div>
                  <p className="font-satoshiRegular text-neutral-300 text-sm">
                    Post-launch analytics & performance tracking
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime text-xs flex-shrink-0">
                    ✓
                  </div>
                  <p className="font-satoshiRegular text-neutral-300 text-sm">
                    Ongoing technical maintenance & support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Realistic Timelines */}
            <div className="group relative overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-800/80 hover:border-lime/50 p-8 sm:p-10 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-lime/10 flex flex-col justify-between">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-lime/10 rounded-full blur-3xl group-hover:bg-lime/20 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:bg-lime group-hover:border-lime transition-all duration-300 shadow-inner">
                  <img
                    src="/icons/quick.png"
                    alt="Realistic Timelines"
                    className="w-7 h-7 object-contain brightness-0 invert group-hover:invert-0 transition-all duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold font-CabinetGrotesk text-white mb-4 tracking-tight group-hover:text-lime transition-colors duration-300">
                  Realistic Timelines
                </h3>

                <p className="text-neutral-400 font-satoshiRegular text-base leading-relaxed">
                  We give you honest timelines based on scope and complexity. No
                  surprises, no delays. Most projects launch within 8-16 weeks
                  depending on requirements.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-neutral-500 group-hover:text-lime transition-colors duration-300">
                  8-16 WEEKS
                </span>
                <span className="text-lime text-xs font-bold uppercase tracking-wider">
                  Guaranteed
                </span>
              </div>
            </div>

            {/* Constant Communication */}
            <div className="group relative overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-800/80 hover:border-lime/50 p-8 sm:p-10 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-lime/10 flex flex-col justify-between">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-lime/10 rounded-full blur-3xl group-hover:bg-lime/20 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:bg-lime group-hover:border-lime transition-all duration-300 shadow-inner">
                  <img
                    src="/icons/interaction.png"
                    alt="Constant Communication"
                    className="w-7 h-7 object-contain brightness-0 invert group-hover:invert-0 transition-all duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold font-CabinetGrotesk text-white mb-4 tracking-tight group-hover:text-lime transition-colors duration-300">
                  Constant Communication
                </h3>

                <p className="text-neutral-400 font-satoshiRegular text-base leading-relaxed">
                  Weekly check-ins, bi-weekly demos, and complete transparency.
                  You'll always know where your project stands and have direct
                  access to our team.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-neutral-500 group-hover:text-lime transition-colors duration-300">
                  100% TRANSPARENT
                </span>
                <span className="text-lime text-xs font-bold uppercase tracking-wider">
                  Weekly Demos
                </span>
              </div>
            </div>

            {/* Results-Driven Approach */}
            <div className="group relative overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-800/80 hover:border-lime/50 p-8 sm:p-10 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-lime/10 flex flex-col justify-between">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-lime/10 rounded-full blur-3xl group-hover:bg-lime/20 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:bg-lime group-hover:border-lime transition-all duration-300 shadow-inner">
                  <img
                    src="/icons/result.png"
                    alt="Results-Driven Approach"
                    className="w-7 h-7 object-contain brightness-0 invert group-hover:invert-0 transition-all duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold font-CabinetGrotesk text-white mb-4 tracking-tight group-hover:text-lime transition-colors duration-300">
                  Results-Driven Approach
                </h3>

                <p className="text-neutral-400 font-satoshiRegular text-base leading-relaxed">
                  We measure success by your KPIs, not just delivery. Our team is
                  invested in ensuring your project delivers measurable business
                  impact.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-neutral-500 group-hover:text-lime transition-colors duration-300">
                  KPI FOCUSED
                </span>
                <span className="text-lime text-xs font-bold uppercase tracking-wider">
                  Real Impact
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <LetsTalkSection
          title=" Let's Talk "
          hookline=" Design done right and fast by people you can trust. "
        />
      </Container>
    </section>
  );
}

export { services };
