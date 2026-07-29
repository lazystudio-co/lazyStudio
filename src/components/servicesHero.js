"use client";

import { motion } from "framer-motion";
import Container from "./container";
import { Code, LayoutDashboard, Palette, Video, Sparkles } from "lucide-react";
import Link from "next/link";

const featuredServices = [
  {
    title: " UI/UX Design ",
    description: "Lightning-fast websites and scalable applications",
    icon: Code,
    gradient: "from-blue-600 to-blue-400",
    link: "/services/uiux",
  },
  {
    title: "Design & Branding",
    description: "Strategic brand identity that commands attention",
    icon: Palette,
    gradient: "from-purple-600 to-purple-400",
    link: "/services/uiux",
  },
  {
    title: "Development Services",
    description: "Scalable, AI-ready backend systems",
    icon: LayoutDashboard,
    gradient: "from-indigo-600 to-indigo-400",
    link: "/services/uiux",
  },
  {
    title: "Video Editing",
    description: "Cinematic production that drives engagement",
    icon: Video,
    gradient: "from-pink-600 to-pink-400",
    link: "/services/uiux",
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
    <div className="relative w-full overflow-hidden py-16 md:py-24 px-5 sm:px-8 lg:px-12">
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
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-sm md:text-base font-semibold text-black uppercase tracking-wider">
                Our Expertise
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-excon font-bold mb-6 bg-black bg-clip-text text-transparent leading-tight">
              Comprehensive Solutions
              <br />
              for Every Need
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-black leading-relaxed">
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
          <motion.div
            className="mt-16 md:mt-20 text-center"
            variants={itemVariants}
          >
            <p className="text-sec mb-6">Ready to bring your vision to life?</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-12 py-4 bg-linear-to-r from-black to-sec hover:from-sec hover:to-black text-white font-bold rounded-full duration-300 ease-in-out shadow-lg hover:shadow-black/50"
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
