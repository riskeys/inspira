import { useSignal } from "@preact/signals";
import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Counter from "../islands/Counter.tsx";
import { Hero } from "@/components/Hero.tsx";
import { Services } from "@/components/Services.tsx";
import { Clients } from "@/components/Clients.tsx";
import { About } from "@/components/About.tsx";
import { Footer } from "@/components/Footer.tsx";
import { Navbar } from "@/components/navigation/NavbarMain.tsx";

export default define.page(function Home(ctx) {
  console.log("Shared value " + ctx.state.shared);

  return (
    <div>
      <Navbar />
      <Hero />
      {
        /*<Services />
      <Clients /> */
      }
      <About />
      <Footer />
    </div>
  );
});
