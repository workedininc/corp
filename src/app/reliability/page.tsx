import Hero from "@/components/hero";
import React from "react";
import ReliabilityImg from "public/images/reliability.jpg";

const ReliabilityPage = () => {
  return (
    <Hero
      imgData={ReliabilityImg}
      imgAlt="Welding"
      title="super high reliability hosting"
    />
  );
};

export default ReliabilityPage;
