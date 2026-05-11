import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { navigate } from '../lib/router';
import heroSushiNigiri from '../assets/hero-sushi-nigiri.png';
import chefHero1 from '../assets/chef-hero-1.jpg';
import chefHero2 from '../assets/chef-hero-2.jpg';
import chefHero3 from '../assets/chef-hero-3.jpg';

const PROOF_STRIP = [
  'Premium sushi ketering',
  'Privatni i poslovni eventi',
  'Live sushi chef',
  'Beograd i Srbija',
];

const categories = [
  { num: '01', title: 'Proslave', sub: 'Rođendani & privatne žurke', path: '/ketering-proslave', img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { num: '02', title: 'Slave', sub: 'Tradicionalna okupljanja', path: '/ketering-slave', img: 'https://images.pexels.com/photos/3475610/pexels-photo-3475610.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { num: '03', title: 'Devojačko & Momačko', sub: 'Zabavni eventi', path: '/ketering-devojacko-momacko', img: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { num: '04', title: 'Korporativni', sub: 'Firme & poslovni eventi', path: '/ketering-korporativni', img: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=900' },
];

const whyItems = [
  {
    img: 'https://images.pexels.com/photos/1148087/pexels-photo-1148087.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'Svež sushi',
    desc: 'Pripremamo isključivo sa svežim, pažljivo odabranim sastojcima za svaki event.',
  },
  {
    img: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'Profesionalna ekipa',
    desc: 'Iskusni tim iz restorana koji zna kako da isporuči savršeno iskustvo.',
  },
  {
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'Fleksibilni paketi',
    desc: 'Prilagodljive opcije za grupe svih veličina — od 10 do 500+ gostiju.',
  },
];

export default function Home() {
  const whyRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0 });
  };

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
              — Premium Sushi Catering, Srbija
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
              Elegantni sushi ketering za proslave, slave, korporativne i privatne događaje
              uz live chef iskustvo i premium prezentaciju.
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
              {['10–500+ gostiju', 'Live sushi chef', 'Postavka i dostava'].map((item) => (
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
        <div className="mx-auto grid max-w-[1320px] gap-14 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
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
                ['10–500+', 'gostiju za različite formate'],
                ['2h', 'prosečan odgovor na upit'],
                ['Fresh daily', 'svakodnevna priprema sastojaka'],
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
                className="group relative overflow-hidden rounded-[26px] border border-[#f1e7e2] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(250,245,244,1))] px-7 pb-8 pt-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(196,79,110,0.08)]"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="font-serif text-[2.8rem] leading-none text-[#111111]/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                </div>
                <h3 className="mb-3 font-serif text-[1.28rem] font-bold text-[#111111]">{item.title}</h3>
                <p className="text-[13px] font-light leading-[1.8] text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KATEGORIJE ──────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-[#f7f5f2]">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-widest uppercase text-stone-400 mb-4 font-light">Usluge</p>
            <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.01em' }}>
              Vrste ketering evenata
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.path}
                onClick={() => go(cat.path)}
                className="group relative overflow-hidden focus:outline-none text-left"
                style={{ borderRadius: '16px' }}
              >
                <div className="aspect-[3/4] overflow-hidden bg-stone-200">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                </div>

                {/* Large number watermark */}
                <div className="absolute top-5 left-5 font-serif font-bold text-white/15 text-[3.5rem] leading-none select-none">
                  {cat.num}
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif font-bold text-white text-[1.15rem] mb-1">{cat.title}</h3>
                  <p className="text-white/55 text-[10px] font-light tracking-widest uppercase">{cat.sub}</p>
                  <div className="mt-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 text-sp-kanji text-[10px] tracking-widest uppercase">
                    Saznaj više <ArrowRight size={11} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSHI CHEF — dark cinematic ─────────────────────────────── */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden bg-[#111111]">
        <img
          src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Sushi chef"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{ objectPosition: 'center 25%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        {/* Kanji decoration */}
        <span
          aria-hidden="true"
          className="absolute right-14 top-1/2 -translate-y-1/2 font-serif text-[150px] leading-none text-sp-kanji/10 pointer-events-none select-none hidden xl:block"
        >
          司
        </span>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-14 py-28 w-full">
          <div className="max-w-lg">
            <p className="text-[11px] tracking-widest uppercase text-sp-kanji mb-7 font-light">Ekskluzivna usluga</p>
            <h2
              className="font-serif font-bold text-white mb-7 leading-[1]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
            >
              Sushi chef na<br />
              <em className="not-italic italic">vašem eventi</em>
            </h2>
            <p className="text-stone-400 font-light text-[14px] leading-[1.85] mb-12 max-w-sm">
              Naš chef dolazi s kompletnom opremom i svežim sastojcima — priprema
              sushi uživo pred gostima i kreira gastronomsko iskustvo koje se pamti.
            </p>
            <button
              onClick={() => go('/sushi-chef')}
              className="group inline-flex items-center gap-4 bg-white text-[#111111] text-[11px] tracking-widest uppercase px-9 py-4 rounded-full hover:bg-[#C44F6E] hover:text-white transition-all duration-300 font-light"
            >
              Saznaj više
              <ArrowRight size={13} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] tracking-widest uppercase text-stone-400 mb-3 font-light">Naš rad</p>
              <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.01em' }}>
                Galerija
              </h2>
            </div>
            <button
              onClick={() => go('/galerija')}
              className="hidden sm:flex items-center gap-2 text-[11px] tracking-widest uppercase text-stone-400 hover:text-[#C44F6E] transition-colors group font-light"
            >
              Sve slike <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Asymmetric editorial grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="col-span-2 lg:col-span-1 lg:row-span-2 overflow-hidden bg-stone-100 min-h-[260px] lg:min-h-0" style={{ borderRadius: '16px' }}>
              <img src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {[
              'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=700',
              'https://images.pexels.com/photos/3475610/pexels-photo-3475610.jpeg?auto=compress&cs=tinysrgb&w=700',
              'https://images.pexels.com/photos/1148087/pexels-photo-1148087.jpeg?auto=compress&cs=tinysrgb&w=700',
              'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=700',
            ].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden bg-stone-100" style={{ borderRadius: '12px' }}>
                <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
            Za privatne i poslovne događaje · Srbija
          </p>
          <div className="flex-1 h-px bg-stone-200" />
        </div>
      </div>

      {/* ── CTA FORM ────────────────────────────────────────────────── */}
      <section ref={ctaRef} className="relative py-28 px-6 bg-[#F3E8E5] overflow-hidden">
        <div className="soft-petal left-[6%] top-[22%] hidden h-56 w-28 rotate-[-20deg] lg:block" />
        <div className="soft-petal right-[10%] bottom-[14%] hidden h-44 w-24 rotate-[30deg] lg:block" />
        <div className="max-w-[1320px] mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="text-[11px] tracking-widest uppercase text-stone-400 mb-7 font-light">Kontakt</p>
            <h2
              className="font-serif font-bold text-[#111111] mb-5 leading-[1]"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
            >
              Planiraš<br />
              <span className="italic font-normal">događaj?</span>
            </h2>
            <div className="w-10 h-px bg-[#C44F6E] mb-7" />
            <p className="text-stone-500 font-light text-[14px] leading-[1.9] max-w-xs mb-10">
              Zatraži ponudu i mi ćemo pripremiti sve za tebe — od jelovnika
              do kompletne organizacije.
            </p>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
              <p className="text-[12px] text-stone-400 font-light">Odgovaramo u roku od 2 sata</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 lg:p-12" style={{ borderRadius: '20px' }}>
            <ContactForm source="home" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
