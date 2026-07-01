"use client";
import BannerContents from "@/components/bannerContents";
import Container from "@/components/container";
import Hero from "@/components/hero";
import InfoSlide from "@/components/infoSlide";
import LandingHeroSection from "@/components/landingHeroSection";
import LeftSlide from "@/components/LeftSlide";
import LetsTalkSection from "@/components/letsTalkSection";
import ProjectsContent from "@/components/projectsContent";
import ServiceDetails from "@/components/serviceDetails";
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
      {/* <BannerContents /> */}
      <LeftSlide />
      <ProjectsContent />
      <InfoSlide />
      <LandingHeroSection />
      <ServiceDetails />

      <Container>
        <LetsTalkSection
          title=" Make It Happen "
          hookline=" Turn your vision into reality with fast, reliable, and scalable solutions. "
          classNameBTN=" w-65! "
        />
      </Container>
    </>
  );
}
