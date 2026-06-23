import { JSXInternal } from "@/node_modules/.deno/preact@10.29.2/node_modules/preact/src/jsx.d.ts";
import { LogoWhatsapp } from "@/components/logos/Brand.tsx";
import { config } from "@/config/env.ts";
import { ArrowRight } from "lucide-preact";
import { cn } from "@/lib/utils.ts";

export function Hero() {
  const titleMobileClass = cn(
    "text-4xl pb-10 font-bold leading-tight capitalize",
  );
  const titleDesktopClass = cn("md:text-6xl md:pb-10 md:font-bold");
  const heroContentMobileClass = cn(
    "flex flex-col w-4/5 justify-center gap-1 mr-auto ml-auto h-auto mt-24 text-white",
  );
  const heroContentDesktopClass = cn(
    "md:w-1/2 md:gap-2 md:h-full md:mr-0 md:mt-0",
  );

  // <div class="video-bg-wrapper">
  //   <LocalVideo src="/bullet.webm" />
  // </div>
  return (
    <div
      id="hero"
      class="bg-gray-700 font-semibold h-screen w-full mx-auto relative overflow-hidden"
    >
      <div class="video-bg-wrapper">
        <LocalVideo src="/bullet.webm" />
      </div>
      <canvas id="hero-canvas" class="absolute inset-0"></canvas>
      <div
        id="hero-content"
        class="flex flex-col md:flex-row-reverse justify-between items-center gap-8 md:gap-12 px-4 md:px-0 mx-auto w-full md:w-7/8 h-auto md:h-[80vh] relative z-10"
      >
        <div
          id="hero-s1"
          class={heroContentMobileClass + " " + heroContentDesktopClass}
        >
          <div
            id="hero-s1-title"
            class={titleMobileClass + " " + titleDesktopClass}
          >
            Inspiration.<br />For Better Transformation.
          </div>
          <div
            id="hero-s1-sub-title"
            class="text-base md:text-xl text-white md:text-gray-300 font-medium leading-relaxed mt-4 pb-10 md:mt-0"
          >
            Inspira menyediakan layanan psikologis untuk berbagai kebutuhan dan
            tingkatan, mulai dari individu, keluarga, hingga birokrasi maupun
            perusahaan.
          </div>
          <div
            id="hero-s1-buttons"
            class="flex flex-row justify-start gap-2 md:gap-10 mt-4 md:mt-0"
          >
            <HeroButton className="hidden md:block border border-c-w text-black bg-c-w bg-hov-t text-hov-w">
              Daftar Konsultasi <ArrowRight className="hidden md:block" />
            </HeroButton>
            <HeroButton
              href={config.link.whatsapp}
              className="hover:fill-black fill-black bg-white md:bg-transparent md:fill-white border border-c-w text-hov-b md:bg-hov-w text-black md:text-white hover:text-black hover:bg-hov-w transition duration-300"
            >
              <LogoWhatsapp className="h-6 w-6" />
              +62 811 2093 116
            </HeroButton>
          </div>
        </div>
        <div
          id="hero-s2"
          class="w-full hidden md:w-1/2 h-auto md:h-full flex-col justify-center items-center mt-8 md:mt-0"
        >
          <img
            src="/bll.jpeg"
            class="h-[50vh] md:h-[70vh] w-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

function HeroButton(
  { children, className = "", href = "#" }: JSXInternal.IntrinsicAttributes & {
    children: (JSXInternal.Element | string)[] | (string);
    className?: string;
    href?: string;
  },
) {
  const buttonRegisterMobileClass = cn(
    "px-4 py-2 rounded-2xl flex flex-row items-center gap-2 text-xs font-semibold transition cursor-pointer",
  );
  const buttonRegisterDesktopClass = cn("md:px-6 md:gap-2 md:py-3 md:text-lg");

  return (
    <a
      class={className + " " +
        buttonRegisterMobileClass + " " + buttonRegisterDesktopClass}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}

function YoutubeVideo() {
  return (
    <iframe
      src="https://www.youtube.com/embed/MUzLyEh-kQ0?si=64EtwWcWPETdTcv0&autoplay=1&mute=1&loop=1&playlist=MUzLyEh-kQ0"
      allow="autoplay;"
      referrerpolicy="strict-origin-when-cross-origin"
      allowFullScreen
      class="w-full h-full object-cover hidden"
    >
    </iframe>
  );
}

function LocalVideo(props: { src: string }) {
  return (
    <video
      class="w-full h-full object-top-left object-cover"
      autoplay
      muted
      playsinline
      loop
      controls={false}
    >
      <source src={props.src} type="video/webm" />
    </video>
  );
}
