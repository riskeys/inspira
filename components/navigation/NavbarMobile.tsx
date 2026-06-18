export function NavMobile() {
  {/* Mobile menu (hidden by default; toggle with JS) */}
  return (
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
