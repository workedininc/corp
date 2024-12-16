import Hero from "@/components/hero";
import React from "react";
import ScaleImg from "public/images/scale.jpg";

const ReliabilityPage = () => {
  return (
    <Hero
      imgData={ScaleImg}
      imgAlt="Steel factory"
      title="Scale your app to infinity "
    />
  );
};

export default ReliabilityPage;
