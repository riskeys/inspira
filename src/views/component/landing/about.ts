import { html } from "../../../lib/htm.js";

export const LandingAboutUsComp = () => {
  return html`
    <div
      id="landing-about"
      class="min-h-[50vh] p-10 bg-cyan-50"
    >
      <div class="w-5/6 mx-auto text-center">
        <h1
          class="text-2xl font-bold md:text-4xl md:font-bold pt-4 pb-10"
        >
          Tentang Kami
        </h1>
      </div>
      <div class="w-5/6 mx-auto text-justify md:text-left">
        <p class="py-4 text-lg">
          Inspira.psi merupakan biro konsultasi psikologi dan pengembangan SDM yang
          berdiri pada tahun 2012, beranggotakan alumni psikologi Unpad, Unisba juga
          UGM.
        </p>
        <p class="py-4 text-lg">
          Biro Psikologi Inspira, hingga kini melayani berbagai bidang terapan;
          seperti dalam dunia industri, maupun pendidikan. Sehingga klien yang
          memperoleh jasa, berupa perusahaan, baik swasta maupun BUMN/pemerintah,
          maupun sekolah (mulai TK hingga Perguruan Tinggi)
        </p>
      </div>
    </div>
  `;
};
