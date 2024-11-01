import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About"
import Gallery from "@/components/Gallery/Gallery"
import Sponsor from "@/components/Sponsors/Sponsor"
import Contact from "@/components/Contact/Contact"

export default function Home() {
  return (
   <>
    <Hero/>
    <About/>
    <Gallery/>
    <Sponsor/>
    <Contact/>
   </>
  );
}
