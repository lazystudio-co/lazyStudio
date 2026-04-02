"use client";
import BannerContents from "@/components/bannerContents";
import Container from "@/components/container";
import Hero from "@/components/hero";
import InfoSlide from "@/components/infoSlide";
import LeftSlide from "@/components/LeftSlide";
import LetsTalkSection from "@/components/letsTalkSection";
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
      <Hero />
      <BannerContents />
      <LeftSlide />
      <ProjectsContent />
      <InfoSlide />
      <Container className=" px-25 ">
        <LetsTalkSection
          title=" Make It Happen "
          hookline=" Turn your vision into reality with fast, reliable, and scalable solutions. "
          classNameBTN=" w-65! "
        />
      </Container>
    </>
  );
}
