import { html } from "../../../lib/htm.js";

export const Navbar = () => {
  const navbar = html`
    <div
      id="navbar"
      class="bg-[#f1f5f9] sticky top-0 z-50"
    >
      <div
        id="navbar-content"
        class="flex flex-row justify-between items-center w-4/5 mx-auto px-4 py-4"
      >
        <div id="navbar-logo" class="w-1/5 text-left text-xl font-bold">
          logo
        </div>

        <!-- Hamburger Menu (Mobile) -->
        <button
          id="hamburger"
          class="md:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span class="block w-6 h-0.5 bg-black transition-all"></span>
          <span class="block w-6 h-0.5 bg-black transition-all"></span>
          <span class="block w-6 h-0.5 bg-black transition-all"></span>
        </button>

        <!-- Desktop Menu -->
        <div
          id="navbar-menu"
          class="hidden md:flex w-3/5 flex-row justify-around items-center uppercase text-base"
        >
          <div
            class="cursor-pointer hover:text-[#f9dbbd] hover:bg-[#a53860] transition px-4 py-2 rounded"
          >
            <a href="/">Home</a>
          </div>
          <div
            class="cursor-pointer hover:text-[#f9dbbd] hover:bg-[#a53860] transition px-4 py-2 rounded"
          >
            <a href="/">Self Test</a>
          </div>
          <div
            class="cursor-pointer hover:text-[#f9dbbd] hover:bg-[#a53860] transition px-4 py-2 rounded"
          >
            <a href="/">Diagnostic</a>
          </div>
          <div
            class="cursor-pointer hover:text-[#f9dbbd] hover:bg-[#a53860] transition px-4 py-2 rounded"
          >
            <a href="/">Article</a>
          </div>
          <div
            class="cursor-pointer hover:text-[#f9dbbd] hover:bg-[#a53860] transition px-4 py-2 rounded"
          >
            <a href="/">About Us</a>
          </div>
        </div>

        <div id="navbar-buttons" class="w-1/5 text-right hidden">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Sign up
          </button>
        </div>
      </div>

      <!-- Mobile Menu (Drawer) -->
      <div
        id="mobile-menu"
        class="hidden fixed md:hidden inset-0 top-20 flex-col bg-[#f1f5f9] border-t border-gray-200 z-40 transition-all duration-200"
      >
        <div class="flex flex-col uppercase text-base">
          <div
            class="cursor-pointer hover:bg-gray-100 transition px-6 py-3 border-b"
          >
            <a href="/">Home</a>
          </div>
          <div
            class="cursor-pointer hover:bg-gray-100 transition px-6 py-3 border-b"
          >
            <a href="/">Self Test</a>
          </div>
          <div
            class="cursor-pointer hover:bg-gray-100 transition px-6 py-3 border-b"
          >
            <a href="/">Diagnostic</a>
          </div>
          <div
            class="cursor-pointer hover:bg-gray-100 transition px-6 py-3 border-b"
          >
            <a href="/">Article</a>
          </div>
          <div class="cursor-pointer hover:bg-gray-100 transition px-6 py-3">
            <a href="/">About Us</a>
          </div>
        </div>
      </div>
    </div>
  `;

  return navbar;
};
