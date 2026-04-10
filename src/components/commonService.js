"use client";
import React from "react";
import Container from "./container";
import LetsTalkSection from "./letsTalkSection";
import ServiceDetails from "./serviceDetails";
import InfoSlide from "./infoSlide";

export default function CommonService() {
  return (
    <>
      <InfoSlide />
      <Container>
        <ServiceDetails />
        <LetsTalkSection
          title=" Let's Talk "
          hookline=" Design done right and fast by people you can trust. "
        />
      </Container>
    </>
  );
}
