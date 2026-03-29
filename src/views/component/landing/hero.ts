import { html } from "../../../lib/htm.js";

export const HeroComp = () => {
  return html`
    <div
      id="hero"
      class="bg-[#f1f5f9] font-semibold h-[90vh] md:h-screen relative overflow-hidden"
    >
      <canvas id="hero-canvas" class="absolute inset-0"></canvas>
      <div
        id="hero-content"
        class="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 px-4 md:px-0 mx-auto w-full md:w-7/8 h-auto md:h-[80vh] relative z-10"
      >
        <div
          id="hero-s1"
          class="flex flex-col w-full md:w-1/2 justify-evenly h-auto md:h-full mt-8 md:mt-0"
        >
          <div
            id="hero-s1-title"
            class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight capitalize"
          >
            Kembangkan diri anda bersama Inspira
          </div>
          <div
            id="hero-s1-sub-title"
            class="text-base md:text-2xl font-normal text-gray-600 leading-relaxed mt-4 md:mt-0"
          >
            Inspira memberikan solusi terhadap berbagai kebutuhan terkait aspek
            psikologis untuk berbagai tingkatan, mulai dari individu, keluarga,
            hingga birokrasi maupun perusahaan.
          </div>
          <div id="hero-s1-buttons" class="mt-4 md:mt-0">
            <a
              class="px-4 md:px-6 py-2 md:py-4 rounded-xl bg-[#a53860] text-[#f9dbbd] hover:text-[#a53860] hover:bg-[#f9dbbd] text-lg font-normal transition cursor-pointer"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
        <div
          id="hero-s2"
          class="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center items-center mt-8 md:mt-0"
        >
          <img
            src="/assets/images/office-1.avif"
            class="h-[50vh] md:h-[70vh] w-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  `;
};
