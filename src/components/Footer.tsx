import { Instagram, MapPin, Phone } from 'lucide-react';
import { navigate } from '../lib/router';
import pandaHeroLogo from '../assets/panda-sushi-hero-logo.png';
import pandaHeroWordmark from '../assets/panda-sushi-hero-wordmark.png';
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

type FooterVariant = 'default' | 'catering';

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[20px] w-[20px] fill-current">
      <path d="M14.57 3c.3 2.52 1.72 4.03 4.23 4.19v2.69a7.3 7.3 0 0 1-2.57-.61v5.04c0 3.79-2.3 6.26-5.92 6.26-3.45 0-5.95-2.48-5.95-5.72 0-3.46 2.66-5.86 6.46-5.86.28 0 .55.02.81.07v2.87a4.74 4.74 0 0 0-.83-.09c-1.92 0-3.2 1.15-3.2 2.86 0 1.62 1.18 2.79 2.79 2.79 1.73 0 2.72-1.15 2.72-3.26V3h1.46Z" />
    </svg>
  );
}

export default function Footer({ variant = 'default' }: { variant?: FooterVariant }) {
  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0 });
  };

  if (variant === 'catering') {
    return (
      <footer className="relative overflow-hidden bg-[#191617] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-12 h-56 w-56 rounded-full bg-[#c44f6e]/12 blur-3xl" />
          <div className="absolute right-[-60px] top-24 h-72 w-72 rounded-full bg-[#f0d3d9]/10 blur-3xl" />
          <div className="absolute left-[10%] top-24 h-36 w-18 rounded-full border border-[#f2d8dd]/18 opacity-70 rotate-[-24deg]" />
          <div className="absolute bottom-14 left-[18%] h-24 w-12 rounded-full border border-[#c44f6e]/18 opacity-70 rotate-[18deg]" />
          <div className="absolute bottom-16 right-[10%] h-32 w-16 rounded-full border border-[#f2d8dd]/16 opacity-70 rotate-[26deg]" />
          <div className="absolute right-[28%] bottom-24 h-40 w-40 rounded-full bg-[#c44f6e]/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-4 pb-8 pt-14 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 border-t border-white/8 pt-10 sm:gap-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] lg:gap-10">
            <div className="text-center lg:text-left">
              <a href="/" className="mb-7 inline-block focus:outline-none lg:block">
                <BrandMark variant="footer" />
              </a>
              <p className="mx-auto max-w-sm text-[15px] font-light leading-[1.72] text-white/78 sm:text-[16px] lg:mx-0">
                Savremen sushi catering za privatne proslave, slave i korporativne događaje u Kragujevcu.
              </p>
              <a
                href="/kontakt"
                className="mt-8 inline-block rounded-full border border-[#e2c1ca]/30 px-7 py-3 text-[11px] font-light uppercase tracking-[0.24em] text-white transition-all duration-300 hover:border-[#C44F6E] hover:bg-[#C44F6E] hover:text-white sm:text-[12px]"
              >
                Zatraži ponudu
              </a>
            </div>

            <div className="text-center lg:text-left">
              <p className="editorial-kicker mb-5 text-stone-400 sm:mb-6">Ketering</p>
              <ul className="space-y-3 sm:space-y-4">
                {keteringLinks.map((link) => (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      className="text-[16px] font-light leading-[1.65] tracking-[0.01em] text-white/82 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center lg:text-left">
              <p className="editorial-kicker mb-5 text-stone-400 sm:mb-6">Navigacija</p>
              <ul className="space-y-3 sm:space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      className="text-[16px] font-light leading-[1.65] tracking-[0.01em] text-white/82 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center lg:text-left">
              <p className="editorial-kicker mb-5 text-stone-400 sm:mb-6">Kontakt</p>
              <ul className="space-y-4 sm:space-y-5">
                <li>
                  <a
                    href="tel:+38166404049"
                    className="flex items-center justify-center gap-3 text-[15px] font-light leading-[1.68] text-white/82 transition-colors hover:text-white sm:text-[16px] lg:justify-start"
                  >
                    <Phone size={14} className="shrink-0 text-sp-kanji" strokeWidth={1.5} />
                    +381 66 404 049
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sushipandaofficial"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 text-[15px] font-light leading-[1.68] text-white/82 transition-colors hover:text-white sm:text-[16px] lg:justify-start"
                  >
                    <Instagram size={14} className="shrink-0 text-sp-kanji" strokeWidth={1.5} />
                    @sushipandaofficial
                  </a>
                </li>
                <li>
                  <span className="flex items-start justify-center gap-3 text-[15px] font-light leading-[1.68] text-white/82 sm:text-[16px] lg:justify-start">
                    <MapPin size={14} className="mt-1 shrink-0 text-sp-kanji" strokeWidth={1.5} />
                    Karađorđeva 47, Kragujevac
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-[11px] font-light uppercase tracking-[0.24em] text-stone-400 sm:text-[12px]">Sushi Panda &copy; {new Date().getFullYear()}</p>
            <p className="text-[12px] font-light tracking-[0.06em] text-stone-400 sm:text-[13px]">Elegant sushi catering za događaje u Kragujevcu</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-white text-[#111111]">
      <div className="w-full px-5 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10 lg:px-14">
        <div className="grid gap-8 border-t border-black/8 pt-8 sm:gap-10 sm:pt-10 lg:grid-cols-[1.25fr_0.85fr_0.9fr] lg:items-start lg:gap-14">
          <div className="max-w-[24rem] text-center lg:text-left">
            <button onClick={() => go('/')} className="inline-flex items-center gap-3 focus:outline-none">
              <img src={pandaHeroLogo} alt="Sushi Panda logo" className="h-[56px] w-auto object-contain sm:h-[64px]" />
              <img src={pandaHeroWordmark} alt="Sushi Panda wordmark" className="h-[30px] w-auto object-contain sm:h-[34px]" />
            </button>

            <p className="mt-4 text-[15px] leading-[1.6] text-black/68 sm:mt-6">
              Savremeni sushi brend koji raste grad po grad, uz isti fokus na ukus, brzinu i vizuelni standard.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3 sm:mt-7 lg:justify-start">
              <a
                href="https://www.instagram.com/sushipandaofficial"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-[#f6f8fc] text-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff4a22] hover:text-[#ff4a22]"
              >
                <Instagram size={20} strokeWidth={1.9} />
              </a>
              <a
                href="https://www.tiktok.com/@pandasushikg"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-[#f6f8fc] text-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff4a22] hover:text-[#ff4a22]"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-black/42">Catering</p>
            <div className="mt-4 max-w-[17rem] lg:mt-5 lg:max-w-[17rem] mx-auto lg:mx-0">
              <button
                onClick={() => go('/ketering-proslave')}
                className="group text-left"
              >
                <span className="block text-[20px] font-semibold leading-[1.35] text-[#111111] transition-colors group-hover:text-[#ff4a22]">
                  Usluge keteringa <span className="text-black/42 transition-colors group-hover:text-[#ff4a22]">→</span>
                </span>
                <span className="mt-2 block text-[15px] leading-[1.6] text-black/58">
                  Pogledaj posebnu catering ponudu za događaje, proslave i poslovne prilike.
                </span>
              </button>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-black/42">Kontakt</p>
            <a
              href="tel:+38166404049"
              className="mt-4 flex items-center justify-center gap-3 text-[18px] font-semibold leading-[1.4] text-[#111111] transition-colors hover:text-[#ff4a22] sm:mt-5 sm:text-[19px] lg:justify-start"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f6f8fc] text-[#ff4a22]">
                <Phone size={18} strokeWidth={1.9} />
              </span>
              +381 66 404 049
            </a>

            <p className="mx-auto mt-4 max-w-[14rem] text-[15px] leading-[1.65] text-black/60 lg:mx-0">
              Za saradnju pozovite broj iznad.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-black/8 pt-5 text-center text-[13px] text-black/46 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:text-left">
          <p>Sushi Panda © 2025</p>
          <p>Kragujevac • Kraljevo • Jagodina</p>
        </div>
      </div>
    </footer>
  );
}
