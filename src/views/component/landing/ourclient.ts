import { html } from "../../../lib/htm.js";

export const OurClientComp = () => {
  return html`
    <div
      id="landing-clients"
      class="min-h-[50vh] p-10 bg-gray-100"
    >
      <div class="w-5/6 mx-auto text-center">
        <h1
          class="text-2xl font-semibold md:text-4xl md:font-semibold pt-4 pb-10"
        >
          Pengguna Layanan Kami
        </h1>
      </div>

      <div class="w-5/6 mx-auto text-center">
        <p class="py-4 text-lg md:text-xl">
          Kami telah melayani berbagai organisasi, perusahaan, birokrasi, maupun
          perorangan untuk berbagai kebutuhan.
        </p>
      </div>
      <div id="client-logos" class="w-5/6 mx-auto flex flex-col py-10 gap-8">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <img
            src="/assets/images/Iyas.jpeg"
            class="h-32 w-32 md:h-40 md:w-40 object-cover object-center rounded-lg"
          />
          <img
            src="/assets/images/Iyas.jpeg"
            class="h-32 w-32 md:h-40 md:w-40 object-cover object-center rounded-lg"
          />
          <img
            src="/assets/images/Iyas.jpeg"
            class="h-32 w-32 md:h-40 md:w-40 object-cover object-center rounded-lg"
          />
          <img
            src="/assets/images/Iyas.jpeg"
            class="h-32 w-32 md:h-40 md:w-40 object-cover object-center rounded-lg"
          />
          <img
            src="/assets/images/Iyas.jpeg"
            class="h-32 w-32 md:h-40 md:w-40 object-cover object-center rounded-lg"
          />
          <img
            src="/assets/images/Iyas.jpeg"
            class="h-32 w-32 md:h-40 md:w-40 object-cover object-center rounded-lg"
          />
          <img
            src="/assets/images/Iyas.jpeg"
            class="h-32 w-32 md:h-40 md:w-40 object-cover object-center rounded-lg"
          />
          <img
            src="/assets/images/Iyas.jpeg"
            class="h-32 w-32 md:h-40 md:w-40 object-cover object-center rounded-lg"
          />
          <img
            src="/assets/images/Iyas.jpeg"
            class="h-32 w-32 md:h-40 md:w-40 object-cover object-center rounded-lg"
          />
          <img
            src="/assets/images/Iyas.jpeg"
            class="h-32 w-32 md:h-40 md:w-40 object-cover object-center rounded-lg"
          />
          <img
            src="/assets/images/Iyas.jpeg"
            class="h-32 w-32 md:h-40 md:w-40 object-cover object-center rounded-lg"
          />
          <img
            src="/assets/images/Iyas.jpeg"
            class="h-32 w-32 md:h-40 md:w-40 object-cover object-center rounded-lg"
          />
        </div>
      </div>
      <div class="w-5/6 mx-auto text-center py-10">
        <a
          class="px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl bg-[#a53860] text-[#f9dbbd] hover:text-[#a53860] hover:bg-[#f9dbbd] text-sm md:text-base lg:text-lg font-normal transition cursor-pointer opacity-100"
          href="https://facebook.com"
          target="_blank"
        >
          <span>Selengkapnya</span>
        </a>
      </div>
    </div>
  `;
};
