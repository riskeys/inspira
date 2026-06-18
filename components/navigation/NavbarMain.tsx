import { NavMobile } from "@/components/navigation/NavbarMobile.tsx";
import { NavLaptop } from "@/components/navigation/NavbarLaptop.tsx";

export function Navbar() {
  return (
    <header
      id="navbar"
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm mb-4"
    >
      <NavLaptop />
      <button
        type="button"
        id="hamburger"
        className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-slate-700 transition-all rounded">
        </span>
        <span className="block w-6 h-0.5 bg-slate-700 transition-all rounded">
        </span>
        <span className="block w-6 h-0.5 bg-slate-700 transition-all rounded">
        </span>
      </button>
      <NavMobile />
    </header>
  );
}
