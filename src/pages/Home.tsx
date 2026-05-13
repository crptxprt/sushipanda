import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { navigate } from '../lib/router';
import heroSushiNigiri from '../assets/hero-sushi-nigiri.png';
import chefHero1 from '../assets/chef-hero-1.jpg';
import chefHero2 from '../assets/chef-hero-2.jpg';
import chefHero3 from '../assets/chef-hero-3.jpg';
import chefDenisIvanoff from '../assets/chef-denis-ivanoff.png';
import chefPavaRaskovic from '../assets/chef-pava-raskovic.png';
import galleryChefAction from '../assets/gallery-chef-action.jpeg';
import galleryLiveEvent from '../assets/gallery-live-event.jpg';
import galleryDetailIngredients from '../assets/gallery-detail-ingredients.png';
import galleryAtmosphereStyling from '../assets/gallery-atmosphere-styling.png';
import whyFreshSushi from '../assets/why-fresh-sushi.png';
import whyProTeam from '../assets/why-pro-team.png';
import whyFlexPackages from '../assets/why-flex-packages.png';

const PROOF_STRIP = [
  'Premium sushi ketering',
  'Privatni i poslovni eventi',
  'Live sushi chef',
  'Kragujevac',
];

const categories = [
  { num: '01', title: 'Proslave', sub: 'Rođendani & privatne žurke', path: '/ketering-proslave', img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { num: '02', title: 'Slave', sub: 'Tradicionalna okupljanja', path: '/ketering-slave', img: 'https://images.pexels.com/photos/3475610/pexels-photo-3475610.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { num: '03', title: 'Devojačko & Momačko', sub: 'Zabavni eventi', path: '/ketering-devojacko-momacko', img: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { num: '04', title: 'Korporativni', sub: 'Firme & poslovni eventi', path: '/ketering-korporativni', img: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=900' },
];

const whyItems = [
  {
    img: whyFreshSushi,
    title: 'Svež sushi',
    desc: 'Pripremamo isključivo sa svežim, pažljivo odabranim sastojcima za svaki event.',
  },
  {
    img: whyProTeam,
    title: 'Profesionalna ekipa',
    desc: 'Iskusni tim iz restorana koji zna kako da isporuči savršeno iskustvo.',
  },
  {
    img: whyFlexPackages,
    title: 'Fleksibilni paketi',
    desc: 'Prilagodljive opcije za grupe svih veličina — od 10 do 500+ gostiju.',
  },
];

const galleryShots = [
  {
    src: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Premium serving',
    copy: 'Luksuzna sushi postavka za događaje koji treba da ostave utisak.',
    className: 'col-span-2 lg:col-span-1 lg:row-span-2 min-h-[320px] lg:min-h-0',
  },
  {
    src: galleryChefAction,
    title: 'Chef action',
    copy: 'Cinematic live priprema koja pretvara catering u pravi doživljaj.',
    className: 'aspect-[1.1/1]',
  },
  {
    src: galleryLiveEvent,
    title: 'Live event',
    copy: 'Atmosfera događaja, interakcija gostiju i premium experience u kadru.',
    className: 'aspect-[1.1/1]',
  },
  {
    src: galleryDetailIngredients,
    title: 'Detail & ingredients',
    copy: 'Macro detalji, teksture i clean plating sa japanskim editorial vibe-om.',
    className: 'aspect-[1.1/1]',
  },
  {
    src: galleryAtmosphereStyling,
    title: 'Atmosphere & styling',
    copy: 'Tamne teksture, rekviziti i mood kadar koji pojačava premium utisak.',
    className: 'aspect-[1.1/1]',
  },
];

const chefSlides = [
  {
    src: chefDenisIvanoff,
    name: 'Denis Ivanoff',
    alt: 'Denis Ivanoff, Sushi Chef',
    objectPosition: 'center top',
  },
  {
    src: chefPavaRaskovic,
    name: 'Pava Raskovic',
    alt: 'Pava Raskovic, Sushi Chef',
    objectPosition: 'center top',
  },
];

export default function Home() {
  const whyRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const [activeChefSlide, setActiveChefSlide] = useState(0);
  const whatsappLink =
    'https://wa.me/381600000000?text=Zdravo%2C%20zanima%20me%20sushi%20catering%20za%20doga%C4%91aj.';
  const phoneLink = 'tel:+381600000000';

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveChefSlide((current) => (current + 1) % chefSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentChefSlide = chefSlides[activeChefSlide];

  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-x-hidden">
      <Header transparent />

      {/* ══════════════════════════════════════════════════════════════
          HERO  —  inspired by Sushi Samurai reference
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-[#f7f5f2] overflow-hidden flex flex-col">
        <div className="soft-petal left-[48%] top-[17%] hidden h-44 w-22 rotate-[16deg] opacity-28 xl:block" />
        <div className="soft-petal right-[11%] top-[21%] hidden h-32 w-18 rotate-[22deg] opacity-20 lg:block" />
        <div className="rose-orb left-[46%] top-[60%] hidden h-40 w-40 opacity-20 xl:block" />

        {/* Blob shape — left side */}
        <div
          className="absolute top-[4%] left-[-230px] w-[650px] h-[790px] bg-sp-blob pointer-events-none select-none opacity-60"
          style={{ borderRadius: '50%' }}
        />

        {/* Circle behind sushi image — right side */}
        <div
          className="absolute right-[-100px] top-1/2 -translate-y-[45%] w-[540px] h-[540px] bg-sp-circle pointer-events-none select-none opacity-45"
          style={{ borderRadius: '50%' }}
        />

        {/* Main flex content */}
        <div className="relative z-10 grid w-full max-w-[1320px] mx-auto px-6 lg:px-10 pt-[90px] min-h-screen pb-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center gap-8 lg:gap-2">

          {/* ── LEFT: Headline + CTA ── */}
          <div className="w-full flex flex-col justify-center py-12 lg:py-0 lg:pr-10">

            {/* Overline */}
            <p className="text-[11px] tracking-widest uppercase text-stone-400 mb-8 font-light">
              — Premium Sushi Catering, Kragujevac
            </p>

            {/* Massive headline */}
            <h1 className="hero-display text-[#111111] mb-8">
              <span>Sushi</span>
              <span className="block text-[#111111]">
                Panda
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-stone-500 font-light text-[16px] leading-[1.8] max-w-[470px] mb-8">
              Premium sushi ketering i live chef iskustvo za proslave, slave
              i korporativne događaje u Kragujevcu.
            </p>

            {/* CTA — pill button (matches reference) */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <button
                onClick={() => go('/kontakt')}
                className="bg-[#181214] text-white text-[12px] tracking-widest uppercase px-9 py-4 rounded-full hover:bg-[#C44F6E] transition-colors duration-300 font-light shadow-[0_16px_36px_rgba(24,18,20,0.15)]"
              >
                Zatraži ponudu
              </button>
              <button
                onClick={() => whyRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[12px] tracking-widest uppercase text-stone-400 hover:text-[#111111] transition-colors font-light underline underline-offset-4"
              >
                Pogledaj opcije
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mb-14">
              {['10–50+ gostiju', 'Live sushi chef', 'Postavka i dostava'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-[#eadbdc] bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-stone-500 shadow-[0_10px_28px_rgba(196,79,110,0.05)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 rounded-[20px] border border-[#eadfdb] bg-white/72 px-4 py-3 shadow-[0_18px_42px_rgba(196,79,110,0.06)] backdrop-blur-sm w-fit">
              <div className="flex -space-x-3">
                {[chefHero1, chefHero2, chefHero3].map((src, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white overflow-hidden bg-[#f6f1eb]"
                    style={{ zIndex: 3 - i }}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[12px] text-stone-700 font-light">Naš tim kuvara i sushi majstora</p>
                <p className="text-[10px] text-stone-400 font-light tracking-wide">Iskusna ekipa za evente svih formata</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Sushi hero image ── */}
          <div className="w-full flex items-center justify-center lg:justify-end relative mt-4 lg:mt-0 lg:-ml-12">
            <div
              className="absolute left-[8%] top-1/2 hidden -translate-y-1/2 xl:flex flex-col items-center gap-4 z-0"
              style={{ writingMode: 'vertical-rl' }}
            >
              {'寿司'.split('').map((ch, i) => (
                <span
                  key={i}
                  className="font-serif text-[3.6rem] leading-none text-sp-kanji/85 select-none"
                  style={{ writingMode: 'horizontal-tb' }}
                >
                  {ch}
                </span>
              ))}
              <span className="h-10 w-px bg-sp-kanji/25 my-1" />
              {'武士'.split('').map((ch, i) => (
                <span
                  key={i}
                  className="font-serif text-[3.6rem] leading-none text-sp-kanji/45 select-none"
                  style={{ writingMode: 'horizontal-tb' }}
                >
                  {ch}
                </span>
              ))}
            </div>
            <img
              src={heroSushiNigiri}
              alt="Premium sushi"
              className="relative z-10 w-full max-w-[540px] lg:max-w-none lg:w-[112%] object-cover drop-shadow-[0_30px_58px_rgba(207,184,144,0.28)]"
              style={{ borderRadius: '40% 50% 50% 40% / 40% 40% 50% 50%' }}
            />
          </div>
        </div>
      </section>

      {/* ── TICKER ──────────────────────────────────────────────────── */}
      <div className="border-y border-[#efe6e1] bg-[linear-gradient(180deg,#fffdfb_0%,#faf5f2_100%)] py-4">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 lg:px-10">
          {PROOF_STRIP.map((item, i) => (
            <span key={item} className="inline-flex items-center gap-4 text-[11px] font-light uppercase tracking-[0.24em] text-stone-500">
              {i > 0 && <span className="hidden h-px w-8 bg-[#e8dad8] md:inline-block" />}
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── WHY SUSHI PANDA — editorial proof section ────────────── */}
      <section ref={whyRef} className="relative overflow-hidden bg-white py-28">
        <div className="soft-petal right-[7%] top-[12%] hidden h-40 w-20 rotate-[24deg] opacity-25 lg:block" />
        <div className="mx-auto grid max-w-[1320px] gap-14 px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-10">
          <div className="lg:pr-8">
            <p className="mb-4 text-[11px] font-light uppercase tracking-widest text-stone-400">Zašto Sushi Panda</p>
            <h2
              className="mb-6 font-serif font-bold text-[#111111]"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.02em', lineHeight: 0.96 }}
            >
              Premium servis,
              <br />
              <span className="italic font-normal text-stone-700">bez kompromisa</span>
            </h2>
            <p className="max-w-[470px] text-[15px] font-light leading-[1.9] text-stone-500">
              Od pažljivo odabranih sastojaka do elegantne postavke na lokaciji, svaki detalj je
              osmišljen da događaj izgleda profinjeno i da gostima ostane u pamćenju.
            </p>

            <div className="mt-10 grid max-w-[420px] grid-cols-2 gap-4">
              {[
                ['10–50+', 'gostiju za različite formate'],
                ['On-site', 'postavka i podrška na događaju'],
              ].map(([value, label]) => (
                <div key={value} className="rounded-[18px] border border-[#f1e7e2] bg-[#fcfaf8] px-5 py-5">
                  <p className="font-serif text-[1.6rem] font-bold text-[#111111]">{value}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-stone-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {whyItems.map((item, i) => (
              <div
                key={i}
                className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[#f1e7e2] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(250,245,244,1))] px-8 pb-8 pt-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(196,79,110,0.08)]"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <span className="font-serif text-[2.8rem] leading-none text-[#111111]/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                </div>
                <h3 className="mb-3 min-h-[5.2rem] font-serif text-[1.28rem] font-bold leading-[1.18] text-[#111111]">
                  {item.title}
                </h3>
                <p className="text-[13px] font-light leading-[1.8] text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KATEGORIJE ──────────────────────────────────────────────── */}
      <section className="bg-[#f7f5f2] px-6 py-28">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
          <div className="mb-16 grid gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
            <div>
              <p className="mb-4 text-[11px] font-light uppercase tracking-widest text-stone-400">Usluge</p>
              <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.01em' }}>
                Vrste ketering evenata
              </h2>
            </div>
            <p className="max-w-sm text-[14px] font-light leading-[1.85] text-stone-500 lg:ml-auto">
              Različiti formati događaja traže različitu atmosferu, ritam i prezentaciju. Zato svaku
              uslugu prilagođavamo gostima, lokaciji i karakteru eventa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.path}
                onClick={() => go(cat.path)}
                className="group relative overflow-hidden border border-[#e9ddd6] bg-white/70 text-left focus:outline-none"
                style={{ borderRadius: '22px' }}
              >
                <div className="aspect-[3/4] overflow-hidden bg-stone-200">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif font-bold text-white text-[1.15rem] mb-1">{cat.title}</h3>
                  <p className="text-[10px] font-light uppercase tracking-widest text-white/60">{cat.sub}</p>
                  <div className="mt-4 flex translate-y-2 items-center gap-2 text-[10px] uppercase tracking-widest text-sp-kanji opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Saznaj više <ArrowRight size={11} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSHI CHEF — full dark premium card ───────────────────── */}
      <section className="bg-[#fcfaf8] px-6 py-24">
        <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[40px] border border-[#241b1a] bg-[radial-gradient(circle_at_top_right,rgba(196,79,110,0.14),rgba(18,15,14,0)_28%),linear-gradient(135deg,#171211_0%,#0e0b0a_100%)] shadow-[0_36px_80px_rgba(12,9,8,0.22)]">
          <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="flex flex-col justify-center p-8 lg:p-14">
              <p className="mb-4 text-[11px] font-light uppercase tracking-widest text-white/42">Ekskluzivna usluga</p>
              <h2
                className="mb-5 font-serif font-bold text-white"
                style={{ fontSize: 'clamp(2.2rem, 4.8vw, 4.2rem)', letterSpacing: '-0.025em', lineHeight: 0.96 }}
              >
                Sushi chef
                <br />
                <span className="italic font-normal text-[#efd8dc]">na vašem eventu</span>
              </h2>
              <p className="max-w-[430px] text-[15px] font-light leading-[1.9] text-stone-300">
                Sushi chef dolazi na lokaciju, priprema sushi pred gostima i pretvara ketering u
                doživljaj koji podiže atmosferu, ritam servisa i premium utisak celog eventa.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.18em] text-white/72">
                <span>Live priprema</span>
                <span className="text-[#c98b99]">•</span>
                <span>Premium postavka</span>
                <span className="text-[#c98b99]">•</span>
                <span>Meni po meri</span>
              </div>

              <button
                onClick={() => go('/sushi-chef')}
                className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-white/12 bg-white px-8 py-4 text-[11px] font-light uppercase tracking-widest text-[#111111] transition-colors duration-300 hover:bg-[#C44F6E] hover:text-white"
              >
                Zatraži sushi chefa
                <ArrowRight size={13} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="relative min-h-[560px] overflow-hidden bg-[#0f0c0b]">
              <img
                src={currentChefSlide.src}
                alt={currentChefSlide.alt}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                style={{ objectPosition: currentChefSlide.objectPosition }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,8,0.08)_0%,rgba(10,8,8,0)_32%,rgba(10,8,8,0.54)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,8,0)_0%,rgba(10,8,8,0.28)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(196,79,110,0.12),rgba(10,8,8,0)_28%)]" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-[2.3rem] italic leading-none text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.34)]">
                  {currentChefSlide.name}
                </p>
              </div>
              <div className="absolute bottom-8 right-8 flex items-center gap-2">
                {chefSlides.map((slide, index) => (
                  <button
                    key={slide.name}
                    type="button"
                    aria-label={`Prikaži ${slide.name}`}
                    onClick={() => setActiveChefSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeChefSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="mb-3 text-[11px] font-light uppercase tracking-widest text-stone-400">Naš rad</p>
              <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.01em' }}>
                Galerija
              </h2>
              <p className="mt-4 max-w-md text-[14px] font-light leading-[1.85] text-stone-500">
                Od detalja na stolu do kompletnih event postavki, biramo kadar koji prenosi atmosferu
                i kvalitet usluge, a ne samo još jednu stock galeriju.
              </p>
            </div>
            <button
              onClick={() => go('/galerija')}
              className="group hidden items-center gap-2 text-[11px] font-light uppercase tracking-widest text-stone-400 transition-colors hover:text-[#C44F6E] sm:flex"
            >
              Sve slike <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {galleryShots.map((shot) => (
              <div
                key={shot.src}
                className={`group relative overflow-hidden bg-stone-100 ${shot.className}`}
                style={{ borderRadius: shot.className.includes('row-span') ? '22px' : '16px' }}
              >
                <img src={shot.src} alt={shot.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-85" />
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/65">Sushi Panda</p>
                  <h3 className="font-serif text-[1.15rem] font-bold text-white">{shot.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST LINE ──────────────────────────────────────────────── */}
      <div className="py-12 bg-[#f7f5f2] text-center">
        <div className="flex items-center justify-center gap-6 max-w-md mx-auto px-6">
          <div className="flex-1 h-px bg-stone-200" />
          <p className="text-[11px] tracking-widest uppercase text-stone-400 font-light whitespace-nowrap">
            Za privatne i poslovne događaje · Kragujevac
          </p>
          <div className="flex-1 h-px bg-stone-200" />
        </div>
      </div>

      {/* ── QUICK CONTACT CTA ──────────────────────────────────────── */}
      <section ref={ctaRef} className="relative overflow-hidden bg-[#F3E8E5] px-6 py-16">
        <div className="soft-petal left-[6%] top-[22%] hidden h-56 w-28 rotate-[-20deg] lg:block" />
        <div className="soft-petal right-[10%] bottom-[14%] hidden h-44 w-24 rotate-[30deg] lg:block" />
        <div className="max-w-[1320px] mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-10 items-center">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="mb-7 text-[11px] font-light uppercase tracking-widest text-stone-400">Kontakt</p>
            <h2
              className="mb-5 font-serif font-bold leading-[1] text-[#111111]"
              style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)', letterSpacing: '-0.02em' }}
            >
              Planiraš<br />
              <span className="italic font-normal">događaj?</span>
            </h2>
            <div className="mb-7 h-px w-10 bg-[#C44F6E]" />
            <p className="max-w-sm text-[14px] font-light leading-[1.9] text-stone-500">
              Javite nam se odmah i dobićete brz odgovor, okvirnu cenu i smernice za vaš događaj.
            </p>
          </div>

          {/* Fast actions */}
          <div className="rounded-[24px] border border-white/60 bg-white/92 p-5 shadow-[0_26px_60px_rgba(145,111,102,0.08)] lg:p-6">
            <div className="grid gap-3 md:grid-cols-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[22px] border border-[#ead9d4] bg-[#181214] px-6 py-6 text-white transition-all duration-300 hover:bg-[#C44F6E] hover:shadow-[0_18px_38px_rgba(24,18,20,0.18)]"
              >
                <div className="mb-10">
                  <div className="w-fit rounded-full border border-white/14 bg-white/8 p-3 text-white">
                    <MessageCircle size={18} strokeWidth={1.6} />
                  </div>
                </div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/65">WhatsApp</p>
                <p className="mt-3 text-[1.8rem] font-medium leading-[1.05] tracking-[-0.03em]">Pišite na WhatsApp</p>
                <p className="mt-4 max-w-[18rem] text-[14px] font-light leading-[1.7] text-white/72">
                  Za brzu poruku, ponudu i dogovor termina.
                </p>
              </a>

              <a
                href={phoneLink}
                className="group rounded-[22px] border border-[#ead9d4] bg-[#fcfaf8] px-6 py-6 text-[#111111] transition-all duration-300 hover:border-[#C44F6E] hover:shadow-[0_18px_38px_rgba(196,79,110,0.10)]"
              >
                <div className="mb-10">
                  <div className="w-fit rounded-full bg-[#f6ece8] p-3 text-[#181214]">
                    <Phone size={18} strokeWidth={1.7} />
                  </div>
                </div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">Telefon</p>
                <p className="mt-3 text-[1.8rem] font-medium leading-[1.05] tracking-[-0.03em]">Pozovite nas</p>
                <p className="mt-5 text-[1.35rem] font-medium tracking-[-0.02em] text-[#111111]">+381 60 000 0000</p>
                <p className="mt-3 max-w-[18rem] text-[14px] font-light leading-[1.7] text-stone-500">
                  Za direktan razgovor i brzu potvrdu detalja.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
