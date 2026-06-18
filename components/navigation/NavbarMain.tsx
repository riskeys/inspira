export function Navbar() {
  return (
    <header
      id="navbar"
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm mb-4"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <div id="navbar-logo" className="flex items-center gap-3 w-1/4">
          <div className="h-10 w-10 rounded-md bg-[#a53860] flex items-center justify-center text-white font-bold">
            L
          </div>
          <span className="text-lg font-semibold text-slate-700">Inspira</span>
        </div>

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

        <NavList />

        <div className="hidden md:flex items-center w-1/4 justify-end">
          <NavButton />
        </div>
      </div>

      {/* Mobile menu (hidden by default; toggle with JS) */}
      <div
        id="mobile-menu"
        className="fixed md:hidden inset-x-0 top-16 bg-slate-50 border-t border-gray-200 z-40 transform transition-transform -translate-y-full"
      >
        <div className="flex flex-col uppercase text-base">
          <a href="/" className="block px-6 py-3 border-b hover:bg-gray-100">
            Home
          </a>
          <a href="/" className="block px-6 py-3 border-b hover:bg-gray-100">
            Self Test
          </a>

          <div className="border-b">
            <div
              id="diagnostic-toggle"
              className="px-6 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100"
            >
              <span>Diagnostic</span>
              <span id="diagnostic-arrow">+</span>
            </div>
            <div id="diagnostic-submenu" className="bg-gray-50 flex flex-col">
              <a
                href="/diagnostic/general"
                className="px-10 py-2 hover:bg-gray-200"
              >
                General Checkup
              </a>
              <a
                href="/diagnostic/advanced"
                className="px-10 py-2 hover:bg-gray-200"
              >
                Advanced Testing
              </a>
              <a
                href="/diagnostic/reports"
                className="px-10 py-2 hover:bg-gray-200"
              >
                View Reports
              </a>
            </div>
          </div>

          <a href="/" className="block px-6 py-3 border-b hover:bg-gray-100">
            Article
          </a>
          <a href="/" className="block px-6 py-3 hover:bg-gray-100">
            About Us
          </a>

          <div className="px-6 py-4">
            <NavButton />
          </div>
        </div>
      </div>
    </header>
  );
}

function NavButton() {
  return (
    <button
      type="button"
      className="px-5 py-2 rounded-full bg-[#a53860] text-white hover:bg-[#8b2f4f] transition text-sm"
    >
      Book Consultation
    </button>
  );
}

function NavList() {
  return (
    <nav className="hidden md:flex items-center justify-center flex-1">
      <div
        id="navbar-menu"
        className="flex space-x-1 items-center text-sm text-slate-700"
      >
        <a
          href="/"
          className="px-4 py-2 rounded-md hover:text-white hover:bg-[#a53860] transition"
        >
          Home
        </a>

        <div className="relative group">
          <button
            type="button"
            className="px-4 py-2 rounded-md hover:text-white hover:bg-[#a53860] transition"
          >
            Diagnostic
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <a
              href="/diagnostic/general"
              className="block px-4 py-2 hover:bg-gray-50 whitespace-nowrap"
            >
              General Checkup
            </a>
            <a
              href="/diagnostic/advanced"
              className="block px-4 py-2 hover:bg-gray-50 whitespace-nowrap"
            >
              Advanced Testing
            </a>
            <a
              href="/diagnostic/reports"
              className="block px-4 py-2 hover:bg-gray-50 whitespace-nowrap"
            >
              View Reports
            </a>
          </div>
        </div>

        <a
          href="/"
          className="px-4 py-2 rounded-md hover:text-white hover:bg-[#a53860] transition"
        >
          Article
        </a>
        <a
          href="/"
          className="px-4 py-2 rounded-md hover:text-white hover:bg-[#a53860] transition"
        >
          About Us
        </a>
      </div>
    </nav>
  );
}
