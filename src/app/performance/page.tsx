import Hero from "@/components/hero";
import React from "react";
import PerformanceImg from "public/images/performance.jpg";

const PerformancePage = () => {
  return (
    <Hero
      imgData={PerformanceImg}
      imgAlt="Welding"
      title="We serve high performance applications"
    />
  );
};

export default PerformancePage;
