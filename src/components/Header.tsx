import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import BrandMark from './BrandMark';

const keteringItems = [
  { label: 'Proslave', path: '/ketering-proslave' },
  { label: 'Slave', path: '/ketering-slave' },
  { label: 'Devojačko & Momačko', path: '/ketering-devojacko-momacko' },
  { label: 'Korporativni', path: '/ketering-korporativni' },
  { label: 'Sushi chef', path: '/sushi-chef' },
];

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const opaque = !transparent || scrolled;

  const linkClass = `text-[12px] tracking-[0.22em] font-light uppercase transition-colors hover:text-[#C44F6E] cursor-pointer ${
    opaque ? 'text-stone-700' : 'text-stone-600/95'
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        opaque ? 'bg-[rgba(248,243,241,0.92)] backdrop-blur-md border-b border-[#d8c7c8]/50 shadow-[0_10px_30px_rgba(46,27,35,0.04)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[70px] max-w-[1320px] items-center px-4 sm:px-6 lg:px-10">

        {/* ── Desktop: 3-column split nav ── */}
        <div className="hidden lg:grid grid-cols-3 items-center w-full">

          {/* Left nav */}
          <nav className="flex items-center gap-8">
            <a href="/" className={`${linkClass} flex items-center gap-2`}>
              <span className="text-[#C44F6E] font-light">—</span>
              Početna
            </a>

            <div
              className="relative pb-3 -mb-3"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className={`${linkClass} flex items-center gap-1.5`}>
                Ketering
                <ChevronDown
                  size={11}
                  className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </span>

              <div
                className={`absolute top-full left-0 w-52 bg-white border border-black/6 shadow-lg transition-all duration-200 ${
                  dropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                {keteringItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-6 py-3.5 text-[12px] tracking-[0.22em] uppercase text-stone-600 hover:text-[#C44F6E] hover:bg-[#fbf4f2] transition-colors font-light border-b border-black/4 last:border-0 cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a href="/galerija" className={linkClass}>Galerija</a>
          </nav>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <a
              href="/"
              className="group focus:outline-none"
              aria-label="Sushi Panda"
            >
              <BrandMark
                size="sm"
                variant="bare"
                className="transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center justify-end gap-8">
            <a href="/o-nama" className={linkClass}>O nama</a>
            <a
              href="/kontakt"
              className={`rounded-full border px-7 py-2 text-[12px] tracking-[0.22em] uppercase font-light transition-all duration-300 cursor-pointer ${
                opaque
                  ? 'border-[#d8c8ca] text-[#111111] hover:border-[#cdb7bb] hover:bg-[#f1e8e3] hover:text-[#111111]'
                  : 'border-[#d8c8ca] text-[#1b1416] hover:border-[#d7c1c3] hover:bg-[#f3ebe6]/90 hover:text-[#1b1416]'
              }`}
            >
              Kontakt
            </a>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <a
            href="/"
            className="focus:outline-none"
            aria-label="Sushi Panda"
          >
            <BrandMark size="sm" variant="bare" />
          </a>
          <button
            className={`transition-colors ${opaque ? 'text-[#111111]' : 'text-[#1b1416]'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-[calc(100svh-70px)]' : 'max-h-0'
        }`}
      >
        <div className="max-h-[calc(100svh-70px)] overflow-y-auto border-t border-black/6 bg-white px-4 py-6 sm:px-6 sm:py-8">
          {[
            { label: 'Početna', path: '/' },
            { label: 'Galerija', path: '/galerija' },
            { label: 'O nama', path: '/o-nama' },
            { label: 'Kontakt', path: '/kontakt' },
          ].map((l) => (
            <a
              key={l.path}
              href={l.path}
              onClick={() => setMobileOpen(false)}
              className="block py-4 text-[12px] tracking-[0.22em] uppercase text-stone-600 border-b border-stone-100 cursor-pointer hover:text-[#C44F6E] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="py-3">
            <p className="text-[12px] tracking-[0.22em] uppercase text-stone-500 mb-3">Ketering</p>
            {keteringItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className="block py-3 pl-3 text-[12px] tracking-[0.22em] uppercase text-stone-600 border-b border-stone-50 cursor-pointer hover:text-[#C44F6E] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-6">
            <a
              href="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-[#1b1416] text-white text-[12px] tracking-[0.22em] uppercase py-4 cursor-pointer hover:bg-[#C44F6E] transition-colors"
            >
              Zatraži ponudu
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
