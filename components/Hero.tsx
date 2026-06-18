import { JSXInternal } from "@/node_modules/.deno/preact@10.29.2/node_modules/preact/src/jsx.d.ts";

export function Hero() {
  return (
    <div
      id="hero"
      class="hero-gradient font-semibold h-[90vh] md:h-screen w-[95%] rounded-2xl mx-auto relative overflow-hidden"
    >
      <canvas id="hero-canvas" class="absolute inset-0"></canvas>
      <div
        id="hero-content"
        class="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 px-4 md:px-0 mx-auto w-full md:w-7/8 h-auto md:h-[80vh] relative z-10"
      >
        <div
          id="hero-s1"
          class="flex flex-col w-full md:w-1/2 justify-center gap-4 h-auto md:h-full mt-8 md:mt-0 text-c-1"
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
            class="text-base md:text-xl text-black font-medium leading-relaxed mt-4 pb-10 md:mt-0"
          >
            Inspira memberikan solusi terhadap berbagai kebutuhan terkait aspek
            psikologis untuk berbagai tingkatan, mulai dari individu, keluarga,
            hingga birokrasi maupun perusahaan.
          </div>
          <div
            id="hero-s1-buttons"
            class="flex flex-row gap-10 mt-4 md:mt-0"
          >
            <HeroButton className="border border-c-6 text-white bg-c-6 bg-hov-t text-hov-2">
              Daftar Konsultasi
            </HeroButton>
            <HeroButton className="border hover:fill-white border-c-6 text-hov-w bg-hov-6 bg-c-t text-c-2">
              <WhatsappLogo />
              Hubungi via Whatsapp
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
  { children, className = "" }: JSXInternal.IntrinsicAttributes & {
    children: (JSXInternal.Element | string)[] | (string);
    className?: string;
  },
) {
  return (
    <a
      class={className + " " +
        "px-4 md:px-6 py-2 md:py-4 rounded-xl flex flex-row items-center gap-2 text-lg font-semibold transition cursor-pointer"}
    >
      {children}
    </a>
  );
}

function WhatsappLogo() {
  return (
    <svg
      class="h-10 w-10"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
    >
      {/*<!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
      <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
    </svg>
  );
}
