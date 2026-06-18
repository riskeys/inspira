import { JSXInternal } from "@/node_modules/.deno/preact@10.29.2/node_modules/preact/src/jsx.d.ts";
import { LogoWhatsapp } from "@/components/logos/Brand.tsx";
import { config } from "@/config/env.ts";
import { ArrowRight } from "lucide-preact";

export function Hero() {
  return (
    <div
      id="hero"
      class="hero-gradient font-semibold h-[90vh] md:h-screen w-full mx-auto relative overflow-hidden"
    >
      <div class="video-bg-wrapper">
        <iframe
          src="https://www.youtube.com/embed/MUzLyEh-kQ0?si=64EtwWcWPETdTcv0&autoplay=1&mute=1&loop=1&playlist=MUzLyEh-kQ0"
          allow="autoplay;"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
          class="w-full h-full object-cover hidden"
        >
        </iframe>
        <video
          class="w-full h-full object-cover"
          autoplay
          muted
          playsinline
          controls
          loop
        >
          <source src="/bullet.webm" type="video/webm" />
        </video>
      </div>
      <canvas id="hero-canvas" class="absolute inset-0"></canvas>
      <div
        id="hero-content"
        class="flex flex-col md:flex-row-reverse justify-between items-center gap-8 md:gap-12 px-4 md:px-0 mx-auto w-full md:w-7/8 h-auto md:h-[80vh] relative z-10"
      >
        <div
          id="hero-s1"
          class="flex flex-col w-full md:w-1/2 justify-center gap-4 h-auto md:h-full mt-8 md:mt-0 text-white"
        >
          <div class="hidden text-xl md:text-2xl font-semibold leading-tight capitalize">
            Profesional
          </div>
          <div
            id="hero-s1-title"
            class="text-4xl md:text-6xl pb-10 font-bold leading-tight capitalize"
          >
            Inspiration.<br />For Better Transformation.
          </div>
          <div
            id="hero-s1-sub-title"
            class="text-base md:text-xl text-gray-300 font-medium leading-relaxed mt-4 pb-10 md:mt-0"
          >
            Inspira menyediakan layanan psikologis untuk berbagai kebutuhan dan
            tingkatan, mulai dari individu, keluarga, hingga birokrasi maupun
            perusahaan.
          </div>
          <div
            id="hero-s1-buttons"
            class="flex flex-row gap-10 mt-4 md:mt-0"
          >
            <HeroButton className="border border-c-w text-black bg-c-w bg-hov-t text-hov-w">
              Daftar Konsultasi <ArrowRight />
            </HeroButton>
            <HeroButton
              href={config.link.whatsapp}
              className="hover:fill-black fill-white text-hov-b bg-hov-w bg-c-t text-c-w"
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
  return (
    <a
      class={className + " " +
        "px-4 md:px-6 py-2 md:py-3 rounded-2xl flex flex-row items-center gap-2 text-lg font-semibold transition cursor-pointer"}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}
