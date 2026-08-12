"use client";
import { motion } from "framer-motion";
import Container from "./container";
import { Code, LayoutDashboard, Palette, Video, Sparkles } from "lucide-react";
import Link from "next/link";
import LetsTalkButton from "./letsTalkButton";


const featuredServices = [
  {
    title: " UI/UX Design ",
    description: "Lightning-fast websites and scalable applications",
    icon: Code,
    gradient: "from-blue-600 to-blue-400",
    link: "/services/uiux-design",
  },
  {
    title: "Design & Branding",
    description: "Strategic brand identity that commands attention",
    icon: Palette,
    gradient: "from-purple-600 to-purple-400",
    link: "/services/branding-identity",
  },
  {
    title: "Development Services",
    description: "Scalable, AI-ready backend systems",
    icon: LayoutDashboard,
    gradient: "from-indigo-600 to-indigo-400",
    link: "/services/system-&-ui-kit",
  },
  {
    title: "Video Editing",
    description: "Cinematic production that drives engagement",
    icon: Video,
    gradient: "from-pink-600 to-pink-400",
    link: "/services/professional-video-editing",
  },
];

export default function ServicesHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden py-10 md:py-10 px-5 sm:px-8 lg:px-12">
      <Container>
        <motion.div
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={itemVariants}
          >

            <h1 className="text-[34px] sm:text-[56px] md:text-[70px] lg:text-[80px] xl:text-[92px] font-CabinetGrotesk font-bold mb-2 md:mb-4 bg-black bg-clip-text text-transparent leading-[1] max-w-max md:max-w-[70%] mx-auto ">
              Comprehensive Solutions
              for Every Need<span className=" text-lime " >.</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-black leading-relaxed font-satoshiRegular">
              From cutting-edge web development to strategic branding, we
              deliver excellence across every discipline. Your success is our
              mission.
            </p>
          </motion.div>

          {/* Featured Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
            variants={containerVariants}
          >
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-black to-sec border border-sec hover:border-sec transition-all duration-300 p-8 md:p-10"
                >
                  <Link href={service.link}>
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    ></div>
                    {/* Icon background */}
                    <div
                      className={`absolute -top-8 -right-8 w-32 h-32 ${service.accent} rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300`}
                    ></div>
                    <div className="relative z-10">
                      <div className="mb-6">
                        <div className="inline-flex p-3 rounded-xl bg-white text-black mb-4">
                          <IconComponent className="w-6 h-6" />
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>

                      <p className="text-white/50 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <button className="inline-flex items-center gap-2 text-white font-semibold transition-colors">
                        <span className=" underline ">Learn More</span>
                        <span className="group-hover:translate-x-1  transition-transform">
                          →
                        </span>
                      </button>
                    </div>{" "}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <Link
            id="servicebtn"
            href="/contact"
            className={` mx-auto w-80 h-15 mt-10 px-3 rounded-full uppercase bg-lime cursor-none flex items-center justify-between select-none  overflow-hidden group relative`}
          >
            <div className=" w-fit  " >
              <h3
                className="font-satoshiBold text-[18px] font-semibold text-lime px-14 absolute top-[50%] left-0 translate-y-[-50%] group-hover:top-100 group-hover:text-transparent duration-300 ease-in-out cursor-none w-fit "
              >
                Start Your Project
              </h3>
              <h4
                className="font-satoshiBold text-[18px] font-semibold text-transparent px-12 absolute -top-100 left-0 group-hover:top-[50%] group-hover:translate-y-[-50%] group-hover:text-white duration-300 ease-in-out cursor-none"
              >
                We are one call away
              </h4>
            </div>

            <div
              id="fadeOut"
              className="h-15 w-full bg-black absolute scale-180 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full -z-50 cursor-none group-hover:-left-5 group-hover:scale-150 transition-all duration-500"
            ></div>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
}
