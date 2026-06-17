import Header from './Header';
import Footer from './Footer';
import { ArrowRight } from 'lucide-react';
import { navigate } from '../lib/router';

export interface PackageItem {
  name: string;
  guests: string;
  items: string[];
  price: string;
  priceNote?: string;
}

export interface CateringVariant {
  label: string;
  title: string;
  description: string;
  details: string[];
  ctaText: string;
  ctaHref?: string;
  ctaPath?: string;
  dark?: boolean;
}

interface CateringPageLayoutProps {
  title: string;
  titleItalic?: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  packages: PackageItem[];
  variants?: CateringVariant[];
  formSource: string;
  variantsTitle?: string;
  showContactSection?: boolean;
}

export default function CateringPageLayout({
  title, titleItalic, subtitle, heroImage, intro, packages, variants, formSource, variantsTitle, showContactSection = true,
}: CateringPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative h-[62vh] min-h-[460px] flex items-end overflow-hidden bg-[#111111]">
        <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-40" style={{ objectPosition: 'center 40%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />

        {/* Kanji */}
        <span
          aria-hidden="true"
          className="absolute right-14 top-1/2 -translate-y-1/2 font-serif text-[140px] leading-none text-sp-kanji/10 pointer-events-none select-none hidden lg:block"
        >
          寿
        </span>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-14 pb-16 w-full">
          <p className="editorial-kicker text-sp-kanji mb-4">Sushi Panda Ketering</p>
          <h1
            className="inner-hero-display text-white"
          >
            {title}
            {titleItalic && <><br /><span className="italic font-normal">{titleItalic}</span></>}
          </h1>
          <p className="editorial-kicker mt-4 text-white/62">{subtitle}</p>
        </div>
      </section>

      {variants && variants.length > 0 && (
        <section className="bg-[#f7f5f2] px-6 py-20 lg:py-24">
          <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
            <div className="mb-12 lg:mb-14">
              <p className="editorial-kicker text-stone-500 mb-3">Izbor menija</p>
              <h2 className="section-display-small">{variantsTitle ?? 'Odaberi varijantu'}</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {variants.map((variant) => (
                <div
                  key={variant.title}
                  className={`relative overflow-hidden p-8 lg:p-10 ${variant.dark ? 'bg-[#111111] text-white' : 'bg-white text-[#111111]'}`}
                  style={{ borderRadius: '20px' }}
                >
                  <div
                    className={`mb-7 inline-flex rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] ${
                      variant.dark ? 'bg-white/10 text-white' : 'bg-[#f3e7e2] text-[#9d6070]'
                    }`}
                  >
                    {variant.label}
                  </div>

                  <h3 className={`serif-card-title mb-4 ${variant.dark ? 'text-white' : 'text-[#111111]'}`}>
                    {variant.title}
                  </h3>
                  <p className={`mb-8 max-w-[34rem] text-[15px] font-light leading-[1.72] ${variant.dark ? 'text-white/74' : 'text-black/72'}`}>
                    {variant.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {variant.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-4">
                        <ArrowRight size={12} strokeWidth={1.5} className="text-[#C44F6E] shrink-0 mt-1" />
                        <span className={`text-[15px] font-light leading-[1.68] ${variant.dark ? 'text-white/78' : 'text-black/76'}`}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      if (variant.ctaHref) {
                        window.open(variant.ctaHref, '_blank', 'noopener,noreferrer');
                        return;
                      }

                      if (variant.ctaPath) {
                        navigate(variant.ctaPath);
                      }
                    }}
                    className={`w-full rounded-full py-4 text-[12px] uppercase tracking-[0.18em] transition-all duration-300 font-light ${
                      variant.dark
                        ? 'bg-[#C44F6E] text-white hover:bg-[#D8748D]'
                        : 'border border-sp-dark text-[#111111] hover:bg-[#111111] hover:text-white'
                    }`}
                  >
                    {variant.ctaText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INTRO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="w-10 h-px bg-[#C44F6E] mb-8" />
            <p className="text-[16px] font-light leading-[1.72] text-black/78">{intro}</p>
          </div>
          <div className="flex items-center">
            <p className="font-serif italic text-stone-300 leading-snug" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>
              "Svaki event je posebna priča — i mi je pričamo kroz sushi."
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="pb-28 px-6 bg-[#f7f5f2]">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <div className="mb-14">
            <p className="editorial-kicker text-stone-500 mb-3">Paketi</p>
            <h2 className="section-display-small">
              Odaberi paket
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative flex min-h-[360px] h-full flex-col p-10 lg:min-h-[390px] lg:p-12 ${i === 1 ? 'bg-[#111111] text-white' : 'bg-white'}`}
                style={{ borderRadius: '20px' }}
              >
                {i === 1 && (
                  <div className="absolute top-0 left-10 -translate-y-1/2 rounded-full bg-[#C44F6E] px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white">
                    Najpopularniji
                  </div>
                )}

                <p className={`font-serif font-bold text-[4.5rem] leading-none mb-1 select-none ${i === 1 ? 'text-white/8' : 'text-black/6'}`}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className={`serif-card-title mb-2 ${i === 1 ? 'text-white' : 'text-[#111111]'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-[12px] uppercase tracking-[0.18em] font-light ${i === 1 ? 'text-white/60' : 'text-stone-500'}`}>
                  {pkg.guests}
                </p>

                <div className="mt-auto pt-14">
                  <p className={`font-serif text-[2.15rem] leading-none tracking-[-0.03em] ${i === 1 ? 'text-white' : 'text-[#111111]'}`}>
                    {pkg.price}
                  </p>
                  <p className={`mt-4 text-[11px] uppercase tracking-[0.18em] font-light ${i === 1 ? 'text-white/48' : 'text-stone-500'}`}>
                    {pkg.priceNote ?? 'okvirna cena'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-[52rem] text-center text-[15px] font-light leading-[1.75] text-black/66">
            Sve ponude uključuju dostavu, postavljanje, soja sos, wasabi, đumbir i sushi meni po dogovoru.
          </p>
        </div>
      </section>

      {/* CONTACT CTA */}
      {showContactSection && (
        <section className="py-28 px-6 bg-[#F0EDE7]">
          <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
            <div className="relative overflow-hidden border border-[#e4d8d2] bg-white px-8 py-12 sm:px-10 lg:px-14 lg:py-16 shadow-[0_24px_55px_rgba(120,92,84,0.08)]" style={{ borderRadius: '28px' }}>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-[5%] top-[12%] h-36 w-36 rounded-full bg-[#f2e8e2] blur-3xl" />
                <div className="absolute right-[8%] bottom-[12%] h-44 w-44 rounded-full bg-[#C44F6E]/10 blur-3xl" />
              </div>

              <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <p className="editorial-kicker mb-6 text-stone-500">Kontakt</p>
                  <h2 className="section-display-medium text-[#111111] mb-5">
                    Hajde da isplaniramo<br />
                    <span className="italic font-normal">vaš događaj</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C44F6E] mb-8" />
                  <p className="max-w-[36rem] text-[16px] font-light leading-[1.75] text-black/74">
                    Recite nam broj gostiju, tip događaja i željeni termin. Pripremićemo predlog sushi menija i organizaciju koja odgovara vašem prostoru i ritmu događaja.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 lg:items-end">
                  <button
                    onClick={() => navigate('/kontakt')}
                    className="rounded-full bg-[#111111] px-10 py-4 text-[12px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#C44F6E]"
                  >
                    Javi nam se
                  </button>
                  <p className="text-[13px] font-light leading-[1.7] text-black/52 lg:max-w-[17rem] lg:text-right">
                    Kontakt preko stranice, telefona ili WhatsApp-a za brzi dogovor oko termina.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
