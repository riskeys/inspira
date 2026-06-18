import { JSXInternal } from "@/node_modules/.deno/preact@10.29.2/node_modules/preact/src/jsx.d.ts";

export function NavLaptop() {
  return (
    <div className="hidden md:flex w-11/12 items-center justify-between gap-4 mx-auto py-3">
      <NavLogo />
      <NavList />
      <div className="flex items-center w-1/4 justify-center">
        <NavButton />
      </div>
    </div>
  );
}

function NavList() {
  return (
    <nav className="hidden md:flex items-center justify-end flex-1">
      <div
        id="navbar-menu"
        className="flex space-x-1 items-center text-lg font-medium text-slate-700"
      >
        <NavItem text="Home" href="/" />
        <NavGroupItem>
          <NavItem text="Diagnostics" href="/" />
          <NavGroupChildren>
            <NavItemChild text="General Checkup" href="/" />
            <NavItemChild text="Advanced Testing" href="/" />
            <NavItemChild text="View Reports" href="/" />
          </NavGroupChildren>
        </NavGroupItem>
        <NavItem text="Article" href="/" />
        <NavItem text="About Us" href="/" />
      </div>
    </nav>
  );
}

function NavLogo() {
  return (
    <div id="navbar-logo" className="flex items-center gap-3 w-1/4">
      <div className="h-10 w-10 rounded-md bg-[#a53860] flex items-center justify-center text-white font-bold">
        L
      </div>
      <span className="text-lg font-semibold text-slate-700">Inspira</span>
    </div>
  );
}

function NavButton() {
  return (
    <button
      type="button"
      className="px-5 py-3 rounded-full cursor-pointer bg-[#a53860] text-white hover:bg-[#8b2f4f] transition text-lg"
    >
      Book Consultation
    </button>
  );
}

function NavItem({ text, href }: { text: string; href?: string }) {
  return (
    <button
      type="button"
      className="px-4 h-10 rounded-md hover:text-white hover:bg-[#a53860] transition"
    >
      <a
        href={href ?? "#"}
      >
        {text}
      </a>
    </button>
  );
}

function NavItemChild({ text, href }: { text: string; href?: string }) {
  return (
    <a
      href={href ?? "#"}
      className="block px-4 py-2 rounded-md hover:bg-[#a53860] hover:text-white whitespace-nowrap"
    >
      {text}
    </a>
  );
}

function NavGroupItem({ children }: { children: JSXInternal.Element[] }) {
  return (
    <div className="relative group">
      {children}
    </div>
  );
}

function NavGroupChildren({ children }: { children: JSXInternal.Element[] }) {
  return (
    <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg z-50">
      {children}
    </div>
  );
}
