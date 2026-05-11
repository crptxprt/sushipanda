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
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-24 pb-10">
        <div className="mb-14 grid gap-4 rounded-[26px] border border-white/12 bg-white/[0.05] px-6 py-6 lg:grid-cols-[1fr] lg:px-8">
          <div>
            <p className="mb-2 text-[10px] font-light uppercase tracking-[0.22em] text-stone-400">Sushi Panda</p>
            <p className="max-w-lg text-[15px] font-light leading-[1.9] text-stone-200">
              Kreiramo elegantan sushi catering za proslave, slave, korporativne i privatne događaje
              sa fokusom na prezentaciju, ritam servisa i premium iskustvo za goste.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-14 border-t border-white/6 pt-16 lg:grid-cols-12 lg:gap-10">

          {/* Brand */}
          <div className="lg:col-span-4">
            <button onClick={() => go('/')} className="mb-7 block focus:outline-none">
              <BrandMark variant="footer" />
            </button>
            <p className="max-w-sm text-[15px] font-light leading-[1.95] text-stone-200">
              Suptilan, savremen sushi catering za privatne proslave, slave i korporativne događaje u Kragujevcu.
            </p>
            <button onClick={() => go('/kontakt')} className="mt-8 inline-block rounded-full border border-[#e2c1ca]/30 px-7 py-3 text-[11px] font-light uppercase tracking-[0.24em] text-white transition-all duration-300 hover:border-[#C44F6E] hover:bg-[#C44F6E] hover:text-white">
              Zatraži ponudu
            </button>
          </div>

          {/* Ketering */}
          <div className="lg:col-span-3 lg:col-start-6">
            <p className="mb-7 text-[11px] font-light uppercase tracking-[0.28em] text-stone-500">Ketering</p>
            <ul className="space-y-4">
              {keteringLinks.map((l) => (
                <li key={l.path}><button onClick={() => go(l.path)} className="text-[15px] font-light tracking-[0.01em] text-stone-200 transition-colors hover:text-white">{l.label}</button></li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <p className="mb-7 text-[11px] font-light uppercase tracking-[0.28em] text-stone-500">Navigacija</p>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.path}><button onClick={() => go(l.path)} className="text-[15px] font-light tracking-[0.01em] text-stone-200 transition-colors hover:text-white">{l.label}</button></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="mb-7 text-[11px] font-light uppercase tracking-[0.28em] text-stone-500">Kontakt</p>
            <ul className="space-y-5">
              <li><a href="tel:+38160000000" className="flex items-center gap-3 text-[15px] font-light leading-relaxed text-stone-200 transition-colors hover:text-white"><Phone size={14} className="shrink-0 text-sp-kanji" strokeWidth={1.5} />+381 60 000 0000</a></li>
              <li><a href="mailto:info@sushipanda.rs" className="flex items-center gap-3 text-[15px] font-light leading-relaxed text-stone-200 transition-colors hover:text-white"><Mail size={14} className="shrink-0 text-sp-kanji" strokeWidth={1.5} />info@sushipanda.rs</a></li>
              <li><a href="#" className="flex items-center gap-3 text-[15px] font-light leading-relaxed text-stone-200 transition-colors hover:text-white"><Instagram size={14} className="shrink-0 text-sp-kanji" strokeWidth={1.5} />@sushipanda.rs</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-light uppercase tracking-[0.24em] text-stone-500">Sushi Panda &copy; {new Date().getFullYear()}</p>
          <p className="text-[12px] font-light tracking-[0.08em] text-stone-500">Elegant sushi catering za događaje u Kragujevcu</p>
        </div>
      </div>
    </footer>
  );
}
