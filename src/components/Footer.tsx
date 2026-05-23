import { Phone, Instagram, MapPin } from 'lucide-react';
import { navigate } from '../lib/router';
import BrandMark from './BrandMark';

const keteringLinks = [
  { label: 'Proslave', path: '/ketering-proslave' },
  { label: 'Slave', path: '/ketering-slave' },
  { label: 'Devojačko & Momačko', path: '/ketering-devojacko-momacko' },
  { label: 'Korporativni', path: '/ketering-korporativni' },
  { label: 'Sushi chef', path: '/sushi-chef' },
];

const quickLinks = [
  { label: 'Početna', path: '/' },
  { label: 'Galerija', path: '/galerija' },
  { label: 'O nama', path: '/o-nama' },
  { label: 'Kontakt', path: '/kontakt' },
];

export default function Footer() {
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0 }); };

  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-12 h-56 w-56 rounded-full bg-[#c44f6e]/12 blur-3xl" />
        <div className="absolute right-[-60px] top-24 h-72 w-72 rounded-full bg-[#f0d3d9]/10 blur-3xl" />
        <div className="absolute left-[10%] top-24 h-36 w-18 rounded-full border border-[#f2d8dd]/18 opacity-70 rotate-[-24deg]" />
        <div className="absolute bottom-14 left-[18%] h-24 w-12 rounded-full border border-[#c44f6e]/18 opacity-70 rotate-[18deg]" />
        <div className="absolute bottom-16 right-[10%] h-32 w-16 rounded-full border border-[#f2d8dd]/16 opacity-70 rotate-[26deg]" />
        <div className="absolute right-[28%] bottom-24 h-40 w-40 rounded-full bg-[#c44f6e]/8 blur-3xl" />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 border-t border-white/8 pt-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] lg:gap-10">

          {/* Brand */}
          <div>
            <button onClick={() => go('/')} className="mb-7 block focus:outline-none">
              <BrandMark variant="footer" />
            </button>
            <p className="max-w-sm text-[16px] font-light leading-[1.72] text-white/78">
              Savremen sushi catering za privatne proslave, slave i korporativne događaje u Kragujevcu.
            </p>
            <button onClick={() => go('/kontakt')} className="mt-8 inline-block rounded-full border border-[#e2c1ca]/30 px-7 py-3 text-[12px] font-light uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-[#C44F6E] hover:bg-[#C44F6E] hover:text-white">
              Zatraži ponudu
            </button>
          </div>

          {/* Ketering */}
          <div>
            <p className="mb-6 text-[12px] font-light uppercase tracking-[0.24em] text-stone-400">Ketering</p>
            <ul className="space-y-4">
              {keteringLinks.map((l) => (
                <li key={l.path}><button onClick={() => go(l.path)} className="text-[16px] font-light leading-[1.65] tracking-[0.01em] text-white/82 transition-colors hover:text-white">{l.label}</button></li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="mb-6 text-[12px] font-light uppercase tracking-[0.24em] text-stone-400">Navigacija</p>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.path}><button onClick={() => go(l.path)} className="text-[16px] font-light leading-[1.65] tracking-[0.01em] text-white/82 transition-colors hover:text-white">{l.label}</button></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-[12px] font-light uppercase tracking-[0.24em] text-stone-400">Kontakt</p>
            <ul className="space-y-5">
              <li><a href="tel:+38166404049" className="flex items-center gap-3 text-[16px] font-light leading-[1.68] text-white/82 transition-colors hover:text-white"><Phone size={14} className="shrink-0 text-sp-kanji" strokeWidth={1.5} />+381 66 404 049</a></li>
              <li><a href="https://instagram.com/sushipandaofficial" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[16px] font-light leading-[1.68] text-white/82 transition-colors hover:text-white"><Instagram size={14} className="shrink-0 text-sp-kanji" strokeWidth={1.5} />@sushipandaofficial</a></li>
              <li><span className="flex items-start gap-3 text-[16px] font-light leading-[1.68] text-white/82"><MapPin size={14} className="mt-1 shrink-0 text-sp-kanji" strokeWidth={1.5} />Karađorđeva 47, Kragujevac</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] font-light uppercase tracking-[0.22em] text-stone-400">Sushi Panda &copy; {new Date().getFullYear()}</p>
          <p className="text-[13px] font-light tracking-[0.06em] text-stone-400">Elegant sushi catering za događaje u Kragujevcu</p>
        </div>
      </div>
    </footer>
  );
}
