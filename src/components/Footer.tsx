import { Phone, Mail, Instagram } from 'lucide-react';
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
    <footer className="bg-[#111111] text-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 border-t border-white/8 pt-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] lg:gap-10">

          {/* Brand */}
          <div>
            <button onClick={() => go('/')} className="mb-7 block focus:outline-none">
              <BrandMark variant="footer" />
            </button>
            <p className="max-w-sm text-[14px] font-light leading-[1.85] text-stone-300">
              Savremen sushi catering za privatne proslave, slave i korporativne događaje u Kragujevcu.
            </p>
            <button onClick={() => go('/kontakt')} className="mt-8 inline-block rounded-full border border-[#e2c1ca]/30 px-7 py-3 text-[11px] font-light uppercase tracking-[0.24em] text-white transition-all duration-300 hover:border-[#C44F6E] hover:bg-[#C44F6E] hover:text-white">
              Zatraži ponudu
            </button>
          </div>

          {/* Ketering */}
          <div>
            <p className="mb-6 text-[11px] font-light uppercase tracking-[0.28em] text-stone-500">Ketering</p>
            <ul className="space-y-4">
              {keteringLinks.map((l) => (
                <li key={l.path}><button onClick={() => go(l.path)} className="text-[15px] font-light tracking-[0.01em] text-stone-200 transition-colors hover:text-white">{l.label}</button></li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="mb-6 text-[11px] font-light uppercase tracking-[0.28em] text-stone-500">Navigacija</p>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.path}><button onClick={() => go(l.path)} className="text-[15px] font-light tracking-[0.01em] text-stone-200 transition-colors hover:text-white">{l.label}</button></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-[11px] font-light uppercase tracking-[0.28em] text-stone-500">Kontakt</p>
            <ul className="space-y-5">
              <li><a href="tel:+38160000000" className="flex items-center gap-3 text-[15px] font-light leading-relaxed text-stone-200 transition-colors hover:text-white"><Phone size={14} className="shrink-0 text-sp-kanji" strokeWidth={1.5} />+381 60 000 0000</a></li>
              <li><a href="mailto:info@sushipanda.rs" className="flex items-center gap-3 text-[15px] font-light leading-relaxed text-stone-200 transition-colors hover:text-white"><Mail size={14} className="shrink-0 text-sp-kanji" strokeWidth={1.5} />info@sushipanda.rs</a></li>
              <li><a href="#" className="flex items-center gap-3 text-[15px] font-light leading-relaxed text-stone-200 transition-colors hover:text-white"><Instagram size={14} className="shrink-0 text-sp-kanji" strokeWidth={1.5} />@sushipanda.rs</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-light uppercase tracking-[0.24em] text-stone-500">Sushi Panda &copy; {new Date().getFullYear()}</p>
          <p className="text-[12px] font-light tracking-[0.08em] text-stone-500">Elegant sushi catering za događaje u Kragujevcu</p>
        </div>
      </div>
    </footer>
  );
}
