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
        <div className="flex flex-col mb-24 bg-black rounded-3xl">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className=" overflow-hidden group hover:shadow-xl transition-all duration-300 "
              >
                <div className="p-6 sm:p-10 lg:p-8 ">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-white/30">
                    {/* Left - Title & Description */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-sec/10 rounded-2xl">
                          <Icon className="text-sec" size={28} />
                        </div>
                      </div>
                      <h3 className="text-4xl lg:text-5xl font-CabinetGrotesk text-white mb-6">
                        <span className="text-sec">
                          {service.title.split(" ")[0]} <br />
                        </span>
                        {service.title.split(" ").slice(1).join(" ")}
                      </h3>
                      <p className="text-white/70 font-satoshiRegular mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="bg-sec/10 border border-sec/30 rounded-2xl p-5">
                        <div className="text-2xl font-CabinetGrotesk text-sec mb-2">
                          {index === 0 && "40%+"}
                          {index === 1 && "60%"}
                          {index === 2 && "10x"}
                          {index === 3 && "10x"}
                        </div>
                        <p className="text-white/60 font-satoshiRegular text-sm">
                          {service.impact}
                        </p>
                      </div>
                    </div>

                    {/* Middle - Why Us & Benefits */}
                    <div className="lg:col-span-1 lg:border-l border-white/10 lg:pl-10">
                      <div className="mb-10">
                        <p className="uppercase tracking-widest text-xs font-satoshiBold text-sec/80 mb-3">
                          Why LazyStudio
                        </p>
                        <p className="font-satoshiRegular text-white/80 leading-relaxed mb-8">
                          {service.why_us}
                        </p>
                      </div>
                      <div>
                        <p className="uppercase tracking-widest text-xs font-satoshiBold text-sec/80 mb-4">
                          Key Benefits
                        </p>
                        <div className="space-y-4">
                          {service.benefits.map((benefit, idx) => {
                            const BenefitIcon = benefit.icon;
                            return (
                              <div
                                key={idx}
                                className="flex gap-3 items-center"
                              >
                                <BenefitIcon
                                  className="text-sec flex-shrink-0"
                                  size={20}
                                />
                                <p className="font-satoshiRegular text-white/70 text-sm">
                                  {benefit.text}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Right - Services & Outcome */}
                    <div className="lg:col-span-1 lg:border-l border-white/10 lg:pl-10">
                      <p className="uppercase tracking-widest text-xs font-satoshiBold text-sec mb-4">
                        Services Included
                      </p>
                      <div className="flex flex-wrap gap-2 mb-10">
                        {service.services.map((item, i) => (
                          <span
                            key={i}
                            className="font-satoshiRegular text-xs text-white px-3 py-1.5 bg-white/5 border borderwhite/10 rounded-full hover:bg-sec/20 hover:bordersec/50 transition-all duration-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="border-t border-white/10 pt-6">
                        <p className="uppercase tracking-widest text-xs font-satoshiBold text-sec/80 mb-3">
                          Outcome
                        </p>
                        <p className="font-satoshiRegular text-white/80 italic">
                          "{service.outcome}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Our Process Section */}
        <section className="mb-24 lg:mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-CabinetGrotesk mb-6">
              How We <span className="text-sec">Work.</span>
            </h2>
            <p className="text-black/60 font-satoshiRegular text-lg max-w-2xl mx-auto">
              A transparent, structured process that keeps you informed at every
              step. From discovery to launch—we've engineered every touchpoint
              for success.
            </p>
          </div>

          {/* Timeline Process */}
          <div className="relative">
            {/* Vertical line - visible on desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-black via-sec to-transparent transform -translate-x-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
              {/* Step 1 */}
              <div className="relative">
                <div className="mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sec text-white rounded-full font-CabinetGrotesk text-2xl mb-6">
                    01
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-CabinetGrotesk mb-4">
                    Discovery & <span className="text-sec">Strategy</span>
                  </h3>
                  <p className="text-black/70 font-satoshiRegular text-lg leading-relaxed mb-6">
                    We dive deep into your vision, market dynamics, and business
                    goals. Our team conducts comprehensive research to craft a
                    winning strategy tailored to your unique challenges.
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <span className="text-sec font-CabinetGrotesk text-xl">✓</span>
                      <p className="font-satoshiRegular text-black/70">
                        In-depth stakeholder interviews and market analysis
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-sec font-CabinetGrotesk text-xl">✓</span>
                      <p className="font-satoshiRegular text-black/70">
                        Competitive landscape mapping and positioning
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-sec font-CabinetGrotesk text-xl">✓</span>
                      <p className="font-satoshiRegular text-black/70">
                        Strategy document with clear KPIs and objectives
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative ">
                <div className="mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sec text-white rounded-full font-CabinetGrotesk text-2xl mb-6">
                    02
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-CabinetGrotesk mb-4">
                    Design & <span className="text-sec">Planning</span>
                  </h3>
                  <p className="text-black/70 font-satoshiRegular text-lg leading-relaxed mb-6">
                    Beautiful design meets meticulous planning. We create
                    detailed wireframes, prototypes, and technical
                    specifications that serve as the blueprint for flawless
                    execution.
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <span className="text-sec font-CabinetGrotesk text-xl">✓</span>
                      <p className="font-satoshiRegular text-black/70">
                        High-fidelity mockups and interactive prototypes
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-sec font-CabinetGrotesk text-xl">✓</span>
                      <p className="font-satoshiRegular text-black/70">
                        User flow diagrams and experience mapping
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-sec font-CabinetGrotesk text-xl">✓</span>
                      <p className="font-satoshiRegular text-black/70">
                        Technical architecture planning and resource allocation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className=" relative ">
                <div className="mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sec text-white rounded-full font-CabinetGrotesk text-2xl mb-6">
                    03
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-CabinetGrotesk mb-4">
                    Build & <span className="text-sec">Optimize</span>
                  </h3>
                  <p className="text-black/70 font-satoshiRegular text-lg leading-relaxed mb-6">
                    Our engineering team builds with precision. We use
                    industry-leading technologies, follow best practices, and
                    continuously optimize for performance, security, and
                    scalability.
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <span className="text-sec font-CabinetGrotesk text-xl">✓</span>
                      <p className="font-satoshiRegular text-black/70">
                        Clean, maintainable code with full documentation
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-sec font-CabinetGrotesk text-xl">✓</span>
                      <p className="font-satoshiRegular text-black/70">
                        Continuous testing, security audits, and performance
                        optimization
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-sec font-CabinetGrotesk text-xl">✓</span>
                      <p className="font-satoshiRegular text-black/70">
                        Weekly progress updates and transparent communication
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className=" relative ">
                <div className="mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sec text-white rounded-full font-CabinetGrotesk text-2xl mb-6">
                    04
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-CabinetGrotesk mb-4">
                    Launch & <span className="text-sec">Support</span>
                  </h3>
                  <p className="text-black/70 font-satoshiRegular text-lg leading-relaxed mb-6">
                    A flawless go-live every time. We manage the entire launch
                    process with zero-downtime deployment, comprehensive
                    testing, and ongoing support to ensure sustained success.
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <span className="text-sec font-CabinetGrotesk text-xl">✓</span>
                      <p className="font-satoshiRegular text-black/70">
                        Zero-downtime deployment with rollback protocols
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-sec font-CabinetGrotesk text-xl">✓</span>
                      <p className="font-satoshiRegular text-black/70">
                        Post-launch monitoring, analytics, and optimization
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-sec font-CabinetGrotesk text-xl">✓</span>
                      <p className="font-satoshiRegular text-black/70">
                        Dedicated support team available for ongoing maintenance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className=" lg:mb-32 rounded-3xl mb-10 p-6 sm:p-10 lg:p-20 border-2 border-sec/20 hover:border-black duration-300 ease-in ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            <div>
              <div className="text-4xl mb-4">
                <img src="/icons/quick.png" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-CabinetGrotesk text-black mb-4">
                Realistic Timelines
              </h3>
              <p className="text-black/70 font-satoshiRegular leading-relaxed">
                We give you honest timelines based on scope and complexity. No
                surprises, no delays. Most projects launch within 8-16 weeks
                depending on requirements.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">
                <img src="/icons/interaction.png" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-CabinetGrotesk text-black mb-4">
                Constant Communication
              </h3>
              <p className="text-black/70 font-satoshiRegular leading-relaxed">
                Weekly check-ins, bi-weekly demos, and complete transparency.
                You'll always know where your project stands and have direct
                access to our team.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">
                <img src="/icons/result.png" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-CabinetGrotesk text-black mb-4">
                Results-Driven Approach
              </h3>
              <p className="text-black/70 font-satoshiRegular leading-relaxed">
                We measure success by your KPIs, not just delivery. Our team is
                invested in ensuring your project delivers measurable business
                impact.
              </p>
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
