"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const TransitionContext = createContext(null);

export const useTransition = () => useContext(TransitionContext);

const getPageName = (href) => {
  if (href === "/") return "HOME";

  const segments = href.split("/").filter(Boolean);
  if (segments.length === 0) return "HOME";

  const lastSegment = segments[segments.length - 1];

  const customMaps = {
    whyUs: "WHY US",
    bookanappointment: "APPOINTMENT",
    contact: "CONTACT",
    services: "SERVICES",
    "uiux-design": "UI/UX DESIGN",
    "branding-identity": "BRANDING & IDENTITY",
    "system-&-ui-kit": "SYSTEM & UI KIT",
    "custom-portfolio": "CUSTOM PORTFOLIO",
    "professional-video-editing": "VIDEO EDITING",
    "landing-page-design": "LANDING PAGE",
  };

  if (customMaps[lastSegment]) {
    return customMaps[lastSegment];
  }

  // Fallback formatter: replace dashes/underscores and convert to uppercase
  return lastSegment
    .replace(/[-_]/g, " ")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toUpperCase();
};

export default function TransitionProvider({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationPhase, setAnimationPhase] = useState("idle"); // 'idle' | 'entering' | 'exiting'
  const [pageName, setPageName] = useState("");
  const [pendingHref, setPendingHref] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const router = useRouter();
  const pathname = usePathname();

  // Dynamically track window dimensions for exact curved SVG boundaries
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const w = dimensions.width || 1920;
  const h = dimensions.height || 1080;

  // Global click interceptor for internal links
  useEffect(() => {
    const handleLinkClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const isInternal = href.startsWith("/") && !href.startsWith("//");
      const isHash = href.includes("#");
      const isTargetBlank = anchor.getAttribute("target") === "_blank";
      const isDownload = anchor.hasAttribute("download");

      if (isInternal && !isHash && !isTargetBlank && !isDownload) {
        if (pathname === href) {
          e.preventDefault();
          return;
        }

        e.preventDefault();

        let name = anchor.getAttribute("data-page-name") || anchor.innerText || anchor.textContent || "";
        name = name.trim();

        if (!name || name.length > 25 || name.includes("\n")) {
          name = getPageName(href);
        } else {
          name = name.toUpperCase();
        }

        setPageName(name);
        setPendingHref(href);
        setIsAnimating(true);
        setAnimationPhase("entering");
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, [pathname]);

  // Lock scroll and prevent layout shift/jitter when transitioning
  useEffect(() => {
    if (isAnimating) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
      } else {
        document.documentElement.style.setProperty('--scrollbar-width', '0px');
      }
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      document.documentElement.style.setProperty('--scrollbar-width', '0px');
    }
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      document.documentElement.style.setProperty('--scrollbar-width', '0px');
    };
  }, [isAnimating]);

  // Listen for the route change to complete
  useEffect(() => {
    if (animationPhase === "entering" && pendingHref && pathname === pendingHref) {
      // Delay starting the exit animation slightly (100ms) to allow the new page content 
      // to mount and layout to stabilize, preventing render stutters on the main thread.
      const timer = setTimeout(() => {
        setAnimationPhase("exiting");
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, animationPhase, pendingHref]);

  // SVG curved path variants for the transition wipe
  const svgVariants = {
    initial: {
      d: `M 0,${h + 200} Q ${w / 2},${h} ${w},${h + 200} L ${w},${h + 200} Q ${w / 2},${h + 200} 0,${h + 200} Z`,
    },
    entering: {
      d: `M 0,0 Q ${w / 2},0 ${w},0 L ${w},${h} Q ${w / 2},${h} 0,${h} Z`,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exiting: {
      d: `M 0,-200 Q ${w / 2},-200 ${w},-200 L ${w},-200 Q ${w / 2},${200} 0,-200 Z`,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const textVariants = {
    initial: {
      y: 60,
      opacity: 0,
    },
    entering: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.35,
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
    exiting: {
      y: -60,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const handleAnimationComplete = (definition) => {
    if (definition === "entering" && pendingHref) {
      router.push(pendingHref);
    } else if (definition === "exiting") {
      setIsAnimating(false);
      setAnimationPhase("idle");
      setPendingHref(null);
    }
  };

  return (
    <TransitionContext.Provider value={{
      triggerTransition: (href, name) => {
        setPageName(name);
        setPendingHref(href);
        setIsAnimating(true);
        setAnimationPhase("entering");
      }
    }}>
      {children}

      {isAnimating && (
        <div className="fixed inset-0 pointer-events-none z-[9990] h-screen w-screen overflow-hidden">
          <svg className="w-full h-full pointer-events-auto fill-black">
            <motion.path
              variants={svgVariants}
              initial="initial"
              animate={animationPhase}
              onAnimationComplete={handleAnimationComplete}
            />
          </svg>

          <div className="absolute inset-0 flex flex-row justify-center items-center pointer-events-none select-none text-center px-6">
            <motion.h1
              variants={textVariants}
              initial="initial"
              animate={animationPhase}
              className="font-CabinetReg text-4xl sm:text-6xl md:text-8xl text-white relative"
            >
              {pageName}
              <div className=" w-5 h-5 bg-lime rounded-sm absolute top-0 -left-6 " ></div>
            </motion.h1>

          </div>
        </div>
      )}
    </TransitionContext.Provider>
  );
}
