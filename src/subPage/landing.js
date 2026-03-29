"use client";
import Hero from "@/components/hero";
import InfoSlide from "@/components/infoSlide";
import LeftSlide from "@/components/LeftSlide";
import ProjectsContent from "@/components/projectsContent";
import { useEffect } from "react";

export default function Landing() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Hero /><LeftSlide /><ProjectsContent />
      <InfoSlide /> 
      
    </>
  );
}
