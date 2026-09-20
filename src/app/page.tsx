import { About } from "@/components/About";
import { FinalCta } from "@/components/FinalCta";
import { Gallery } from "@/components/Gallery";
import { Groomers } from "@/components/Groomers";
import { Hero } from "@/components/Hero";
import { Locations } from "@/components/Locations";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Why />
      <Groomers />
      <Gallery />
      <Reviews />
      <Locations />
      <About />
      <FinalCta />
    </>
  );
}
