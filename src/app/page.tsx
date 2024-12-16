import Hero from "@/components/hero";
import HomeImg from "public/images/home.jpg";

export default function Home() {
  return (
    <Hero
      imgData={HomeImg}
      imgAlt="Car factory"
      title="Professional Cloud Hosting"
    />
  );
}
