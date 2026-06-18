export function About() {
  return (
    <>
      <AboutLaptop />
      <AboutMobile />
    </>
  );
}

function AboutLaptop() {
  return (
    <div class="hidden md:flex flex-row items-center justify-between min-h-[64vh] px-50 gap-4 hero-gradient">
      <div class="flex flex-col justify-around mb-8 h-[40vh] text-c-1 w-1/3 ml-10">
        <div class="text-5xl font-extrabold">
          Tentang Inspira
        </div>
        <div class="my-3 flex justify-start">
          <div class="h-1 w-16 rounded-full bg-c-1"></div>
        </div>
        <div class="flex flex-col justify-evenly text-c-b">
          <div class="text-xl/relaxed font-semibold mb-4 ">
            Biro Psikologi Inspira merupakan biro konsultasi dan pengembangan
            SDM yang aktif sejak tahun 2012.
          </div>
          <div class="text-xl/relaxed font-semibold mb-4 ">
            Inspira melayani berbagai bidang terapan seperti bidang pendidikan
            maupun industri organisasi, didukung oleh tenaga ahli profesional
            yang berpengalaman.
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-8 h-full w-1/2">
        <img class="rounded-xl" src="/office-1.avif" />
      </div>
    </div>
  );
}

function AboutMobile() {
  return (
    <div class="flex md:hidden flex-col items-center justify-center min-h-[64vh] py-6 px-4 gap-6 hero-gradient">
      <div class="flex flex-col justify-around text-c-1 w-full">
        <div class="text-3xl font-bold text-center">
          Tentang Inspira
        </div>
        <div class="my-8 flex justify-center">
          <div class="h-1 w-16 rounded-full bg-c-1"></div>
        </div>
        <div class="flex flex-col justify-evenly text-c-b gap-4">
          <div class="text-sm/relaxed font-semibold">
            Biro Psikologi Inspira merupakan biro konsultasi dan pengembangan
            SDM yang aktif sejak tahun 2012.
          </div>
          <div class="text-sm/relaxed font-semibold">
            Inspira melayani berbagai bidang terapan seperti bidang pendidikan
            maupun industri organisasi, didukung oleh tenaga ahli profesional
            yang berpengalaman.
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full">
        <img class="rounded-xl w-full max-w-sm" src="/office-1.avif" />
      </div>
    </div>
  );
}
