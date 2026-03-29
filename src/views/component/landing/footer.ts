import { html } from "../../../lib/htm.js";

export const FooterComp = () => {
  return (html`
    <div
      id="footer"
      class="bg-cyan-50 flex flex-col text-black min-h-[35vh]"
    >
      <div
        class="border-b-2 border-black flex flex-row justify-between w-4/5 mx-auto py-16"
      >
        <div
          id="footer-company"
          class="flex flex-col justify-between w-full md:w-2/5"
        >
          <div class="flex md:flex-row items-center pb-4">
            <div class="w-1/8">
              <img src="/assets/user-icon.png" class="w-8 h-8" />
            </div>
            <div class="w-3/4 text-xl">Inspira.psi</div>
          </div>
          <div class="flex flex-row items-start">
            <div class="w-1/8">
              <img src="/assets/user-icon.png" class="w-8 h-8" />
            </div>
            <div class="w-3/4 italic text-sm flex flex-col items-start">
              <div>
                Jalan Kawaluyaan Indah I no. 20
              </div>
              <div>
                Soekarno Hatta - Bandung
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center">
            <div class="w-1/8 italic">
              <img src="/assets/user-icon.png" class="w-8 h-8" />
            </div>
            <div class="w-3/4 text-sm">0812-2324-5396</div>
          </div>
          <div class="flex flex-row items-center">
            <div class="w-1/8">
              <img src="/assets/user-icon.png" class="w-8 h-8" />
            </div>
            <div class="w-3/4 text-sm">inspirasi.psikologi@yahoo.co.id</div>
          </div>
        </div>
      </div>
      <div
        id="footer-copyright"
        class="flex flex-row justify-center items-center"
      >
        <div class="p-10 md:p-4">
          <p>&copy; 2026 CV. Inspirasi Psikologi. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  `);
};
