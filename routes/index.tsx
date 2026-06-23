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
import { ActivitiesLanding } from "@/components/activities/Activities.landing.tsx";
import { Announcement } from "@/components/Announcement.tsx";

export default define.page(function Home(ctx) {
  console.log("Shared value " + ctx.state.shared);

  // <Navbar />
  return (
    <div>
      <Announcement />
      <Hero />
      {
        /*<Services />
      <Clients /> */
      }
      <ActivitiesLanding />
      <About />
      <Footer />
    </div>
  );
});
