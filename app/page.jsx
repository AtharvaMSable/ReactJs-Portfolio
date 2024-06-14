
// components
import About from "@/components/About";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main> 
      <Hero />
      <About />
      <Services />
      <Work/>
      {/* <Reviews /> */}
      <Cta />
    </main>
  );
}
