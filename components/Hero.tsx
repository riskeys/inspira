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
          class="flex flex-col w-full md:w-1/3 justify-center gap-4 h-auto md:h-full mt-8 md:mt-0"
        >
          <div class="text-xl md:text-2xl font-semibold text-gray-900 leading-tight capitalize">
            Professional & Compassionate
          </div>
          <div
            id="hero-s1-title"
            class="text-4xl md:text-6xl pb-10 font-bold text-gray-900 leading-tight capitalize"
          >
            Supporting Minds.<br />Empowering Lives.
          </div>
          <div
            id="hero-s1-sub-title"
            class="text-base md:text-xl font-normal text-gray-600 leading-relaxed mt-4 pb-10 md:mt-0"
          >
            Inspira memberikan solusi terhadap berbagai kebutuhan terkait aspek
            psikologis untuk berbagai tingkatan, mulai dari individu, keluarga,
            hingga birokrasi maupun perusahaan.
          </div>
          <div
            id="hero-s1-buttons"
            class="flex flex-row gap-10 mt-4 md:mt-0"
          >
            <a class="px-4 md:px-6 py-2 md:py-4 rounded-xl bg-[#7b2c6f] text-[#f6e9f3] hover:bg-[#c65baa] text-lg font-semibold transition cursor-pointer">
              Daftar Konsultasi
            </a>
            <a class="px-4 md:px-6 py-2 md:py-4 rounded-xl border-1 border-[#7b2c6f]-300 hover:bg-[#7b2c6f] hover:text-[#f6e9f3] text-lg font-semibold transition cursor-pointer">
              Hubungi via Whatsapp
            </a>
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
