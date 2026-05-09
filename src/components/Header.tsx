import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigate } from '../lib/router';

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

  const go = (path: string) => {
    navigate(path);
    setMobileOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0 });
  };

  const linkClass = `text-[11px] tracking-widest font-light uppercase transition-colors hover:text-[#C41230] cursor-pointer ${
    opaque ? 'text-stone-500' : 'text-white/80'
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        opaque ? 'bg-white/95 backdrop-blur-sm border-b border-black/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-[70px] flex items-center">

        {/* ── Desktop: 3-column split nav ── */}
        <div className="hidden lg:grid grid-cols-3 items-center w-full">

          {/* Left nav */}
          <nav className="flex items-center gap-8">
            <span onClick={() => go('/')} className={`${linkClass} flex items-center gap-2`}>
              <span className={`text-[#C41230] font-light ${!opaque ? 'text-[#C41230]' : ''}`}>—</span>
              Početna
            </span>

            <div
              className="relative"
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
                className={`absolute top-full left-0 mt-3 w-52 bg-white border border-black/6 shadow-lg transition-all duration-200 ${
                  dropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                {keteringItems.map((item) => (
                  <span
                    key={item.path}
                    onClick={() => go(item.path)}
                    className="block px-6 py-3.5 text-[11px] tracking-widest uppercase text-stone-500 hover:text-[#C41230] hover:bg-stone-50 transition-colors font-light border-b border-black/4 last:border-0 cursor-pointer"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            <span onClick={() => go('/galerija')} className={linkClass}>Galerija</span>
          </nav>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <span
              onClick={() => go('/')}
              className={`cursor-pointer font-serif font-bold tracking-[0.12em] text-[1.15rem] select-none transition-colors ${
                opaque ? 'text-[#111111]' : 'text-white'
              }`}
            >
              Sushi{' '}
              <span className="inline-flex w-7 h-7 rounded-full overflow-hidden border border-stone-200 align-middle mx-1 relative top-[-1px]">
                <img
                  src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=60"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </span>
              {' '}
              <span className="text-[#C41230]">Panda</span>
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center justify-end gap-8">
            <span onClick={() => go('/o-nama')} className={linkClass}>O nama</span>
            <span
              onClick={() => go('/kontakt')}
              className={`text-[11px] tracking-widest uppercase font-light px-6 py-2.5 border transition-all duration-300 cursor-pointer ${
                opaque
                  ? 'border-sp-dark text-[#111111] hover:bg-[#111111] hover:text-white'
                  : 'border-white/60 text-white hover:bg-white hover:text-[#111111]'
              }`}
            >
              Kontakt
            </span>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <span
            onClick={() => go('/')}
            className={`font-serif font-bold tracking-widest text-[1.1rem] cursor-pointer ${opaque ? 'text-[#111111]' : 'text-white'}`}
          >
            SUSHI <span className="text-[#C41230]">PANDA</span>
          </span>
          <button
            className={`transition-colors ${opaque ? 'text-[#111111]' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-white border-t border-black/6 px-6 py-8 space-y-px">
          {[
            { label: 'Početna', path: '/' },
            { label: 'Galerija', path: '/galerija' },
            { label: 'O nama', path: '/o-nama' },
            { label: 'Kontakt', path: '/kontakt' },
          ].map((l) => (
            <span
              key={l.path}
              onClick={() => go(l.path)}
              className="block py-4 text-[11px] tracking-widest uppercase text-stone-500 border-b border-stone-100 cursor-pointer hover:text-[#C41230] transition-colors"
            >
              {l.label}
            </span>
          ))}
          <div className="py-3">
            <p className="text-[10px] tracking-widest uppercase text-stone-400 mb-3">Ketering</p>
            {keteringItems.map((item) => (
              <span
                key={item.path}
                onClick={() => go(item.path)}
                className="block py-3 pl-3 text-[11px] tracking-widest uppercase text-stone-500 border-b border-stone-50 cursor-pointer hover:text-[#C41230] transition-colors"
              >
                {item.label}
              </span>
            ))}
          </div>
          <div className="pt-6">
            <span
              onClick={() => go('/kontakt')}
              className="block w-full text-center bg-[#111111] text-white text-[10px] tracking-widest uppercase py-4 cursor-pointer hover:bg-[#C41230] transition-colors"
            >
              Zatraži ponudu
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
