import { Phone, Mail, Instagram } from 'lucide-react';
import { navigate } from '../lib/router';

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
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-4">
            <button onClick={() => go('/')} className="focus:outline-none mb-6 block">
              <span className="font-serif font-bold tracking-widest text-xl">
                Sushi <span className="text-[#C41230]">Panda</span>
              </span>
            </button>
            <p className="text-stone-500 text-[13px] font-light leading-[1.9] max-w-xs mb-8">
              Premium sushi ketering za sve vrste privatnih i korporativnih događaja širom Srbije.
            </p>
            <button onClick={() => go('/kontakt')} className="inline-block text-[11px] tracking-widest uppercase border border-white/20 text-white px-7 py-3 rounded-full hover:bg-white hover:text-[#111111] transition-all duration-300 font-light">
              Zatraži ponudu
            </button>
          </div>

          {/* Ketering */}
          <div className="lg:col-span-3 lg:col-start-6">
            <p className="text-[11px] tracking-widest uppercase text-stone-600 mb-7 font-light">Ketering</p>
            <ul className="space-y-4">
              {keteringLinks.map((l) => (
                <li key={l.path}><button onClick={() => go(l.path)} className="text-[13px] text-stone-400 font-light hover:text-white transition-colors">{l.label}</button></li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-widest uppercase text-stone-600 mb-7 font-light">Navigacija</p>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.path}><button onClick={() => go(l.path)} className="text-[13px] text-stone-400 font-light hover:text-white transition-colors">{l.label}</button></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-[11px] tracking-widest uppercase text-stone-600 mb-7 font-light">Kontakt</p>
            <ul className="space-y-5">
              <li><a href="tel:+38160000000" className="flex items-center gap-3 text-stone-400 text-[13px] font-light hover:text-white transition-colors"><Phone size={13} className="text-sp-kanji shrink-0" strokeWidth={1.5} />+381 60 000 0000</a></li>
              <li><a href="mailto:info@sushipanda.rs" className="flex items-center gap-3 text-stone-400 text-[13px] font-light hover:text-white transition-colors"><Mail size={13} className="text-sp-kanji shrink-0" strokeWidth={1.5} />info@sushipanda.rs</a></li>
              <li><a href="#" className="flex items-center gap-3 text-stone-400 text-[13px] font-light hover:text-white transition-colors"><Instagram size={13} className="text-sp-kanji shrink-0" strokeWidth={1.5} />@sushipanda.rs</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone-700 text-[11px] tracking-widest uppercase font-light">Sushi Panda &copy; {new Date().getFullYear()}</p>
          <p className="text-stone-700 text-[11px] font-light">Premium sushi catering · Srbija</p>
        </div>
      </div>
    </footer>
  );
}
