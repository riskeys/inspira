import { html, render } from "../../../lib/htm.js";

export const ProductSectionComp = () => {
  const default1 = productsDefault1();
  const default2 = ProductSectionTwoComp({
    sectionOne: false,
    sectionTwo: false,
    sectionThree: false,
  });
  const comp = html`
    <div
      id="products"
      class="w-full bg-purple-100 py-8 md:py-12 lg:py-16 min-h-[85vh]"
    >
      <div class="px-4 md:px-6 lg:px-8">
        <div
          class="pt-6 md:pt-8 lg:pt-10 pb-2 md:pb-4 text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 text-center"
        >
          Layanan Kami
        </div>
        <p
          class="pb-6 md:pb-8 lg:pb-10 text-lg md:text-xl lg:text-2xl text-center w-full md:w-4/5 lg:w-3/4 mx-auto px-2 md:px-0"
        >
          Kami memberikan layanan yang mengedepankan integritas. Kami memberikan
          layanan yang mengedepankan integritas. Kami memberikan layanan yang
          mengedepankan integritas.
        </p>
        <div
          class="flex flex-col md:flex-row justify-center items-top gap-4 md:gap-6 lg:gap-8"
        >
          <div
            id="product-list-1"
            class="w-full md:w-1/2 lg:w-2/5 px-2 md:px-0"
          >
            <div
              id="product-list-1-items"
              class="flex flex-col justify-between gap-3 md:gap-4"
            >
              ${default1}
            </div>
          </div>
          <div
            id="product-list-2"
            class="w-full md:w-1/2 lg:w-2/5 px-2 md:px-0"
          >
            <div
              id="product-list-2-items"
              class="flex flex-col justify-between gap-3 md:gap-4"
            >
              ${default2}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return comp;
};

const product = (content: {
  title: string;
  titleAlt: string;
  description: string;
  active: boolean;
  section: number;
  order: number;
}) => {
  return render(html`
    <div
      id="product-${content.section}-${content.order}"
      class="clickable px-4 md:px-6 py-4 md:py-6 bg-white hover:bg-purple-50 cursor-pointer transition-all duration-1000 ease-in-out rounded-lg md:rounded-xl"
      hx-swap-oob="true"
    >
      <div
        class="flex flex-row justify-between items-center py-3 md:py-4 border-b-2"
        hx-get="/product/${content.section}/${content.order}/${!content.active}"
      >
        <h2
          class="flex flex-col md:inline-block text-lg md:text-xl lg:text-2xl font-semibold"
        >
          <span>${content.title} </span>
          <span>${content.titleAlt}</span>
        </h2>
        <span class="text-xl md:text-2xl">${content.active ? "−" : "+"}</span>
      </div>
      <p
        id="product-${content.section}-${content.order}-p"
        class="flex flex-col gap-6 text-gray-600 text-base md:text-lg lg:text-xl py-3 md:py-4 transition-all duration-1000 ease-in-out overflow-hidden ${content
            .active
          ? "max-h-[500px] opacity-100"
          : "max-h-0 opacity-0"}"
      >
        ${content.description}
        <a
          class="flex flex-row justify-between px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl bg-[#a53860] text-[#f9dbbd] hover:text-[#a53860] hover:bg-[#f9dbbd] text-sm md:text-base lg:text-lg font-normal transition cursor-pointer opacity-100 w-full"
          href="https://facebook.com"
          target="_blank"
        >
          <span> Lihat lebih lanjut </span>
          <span>></span>
        </a>
      </p>
    </div>
  `);
};

const productsDefault1 = () => {
  return ProductSectionOneComp({
    sectionOne: false,
    sectionTwo: false,
    sectionThree: false,
  });
};

export const ProductSectionOneComp = (req: {
  sectionOne: boolean;
  sectionTwo: boolean;
  sectionThree: boolean;
}) => {
  const detail1 = product({
    title: "Layanan Konseling",
    titleAlt: "(Counseling)",
    description:
      " Melalui pendekatan yang empatik dan profesional, kami dapat membantu klien menemukan solusi terbaik sesuai potensi dan kebutuhan.",
    active: req.sectionOne,
    section: 1,
    order: 1,
  });
  const detail2 = product({
    title: "Layanan Psikoterapi",
    titleAlt: "(Psychotherapy)",
    description:
      "Dengan menggunakan berbagai teknik psikoterapi, kami dapat membimbing klien untuk memahami diri, mengelola stres, serta meningkatkan kualitas hidup dan kesejahteraan mental.",
    active: req.sectionTwo,
    section: 1,
    order: 2,
  });

  return `${detail1}${detail2}`;
};

export const ProductSectionTwoComp = (req: {
  sectionOne: boolean;
  sectionTwo: boolean;
  sectionThree: boolean;
}) => {
  const detail1 = product({
    title: "Layanan Pelatihan",
    titleAlt: "(Training)",
    description:
      "Kami memberikan pelatihan yang interaktif dan aplikatif, membantu peserta dapat mengembangkan kompetensi diri, memperbaiki kinerja, serta mempersiapkan diri menghadapi tantangan di dunia kerja maupun kehidupan sehari-hari.",
    active: req.sectionOne,
    section: 2,
    order: 1,
  });
  const detail2 = product({
    title: "Layanan Penilaian",
    titleAlt: "(Assessment)",
    description:
      "Assessment digunakan untuk memahami potensi, kepribadian, minat, serta memberikan rekomendasi yang tepat dalam pengembangan diri atau penanganan masalah.",
    active: req.sectionTwo,
    section: 2,
    order: 2,
  });

  return `${detail1}${detail2}`;
};

export const ProductCounseling = (status: boolean) => {
  return product({
    title: "Layanan Konseling",
    titleAlt: "(Counseling)",
    description:
      " Melalui pendekatan yang empatik dan profesional, kami dapat membantu klien menemukan solusi terbaik sesuai potensi dan kebutuhan.",
    active: status,
    section: 1,
    order: 1,
  });
};

export const ProductPsychotheraphyy = (status: boolean) => {
  return product({
    title: "Layanan Psikoterapi",
    titleAlt: "(Psychotherapy)",
    description:
      "Dengan menggunakan berbagai teknik psikoterapi, kami dapat membimbing klien untuk memahami diri, mengelola stres, serta meningkatkan kualitas hidup dan kesejahteraan mental.",
    active: status,
    section: 1,
    order: 2,
  });
};

export const ProductTraining = (status: boolean) => {
  return product({
    title: "Layanan Pelatihan",
    titleAlt: "(Training)",
    description:
      "Kami memberikan pelatihan yang interaktif dan aplikatif, membantu peserta dapat mengembangkan kompetensi diri, memperbaiki kinerja, serta mempersiapkan diri menghadapi tantangan di dunia kerja maupun kehidupan sehari-hari.",
    active: status,
    section: 2,
    order: 1,
  });
};

export const ProductAssessment = (status: boolean) => {
  return product({
    title: "Layanan Penilaian",
    titleAlt: "(Assessment)",
    description:
      "Assessment digunakan untuk memahami potensi, kepribadian, minat, serta memberikan rekomendasi yang tepat dalam pengembangan diri atau penanganan masalah.",
    active: status,
    section: 2,
    order: 2,
  });
};
