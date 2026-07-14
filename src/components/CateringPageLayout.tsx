import { MapPin, MessageCircle, Phone } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

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
  description?: string;
  image?: string;
  details?: string[];
  ctaText?: string;
  ctaHref?: string;
  ctaPath?: string;
  dark?: boolean;
  strongerOverlay?: boolean;
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
  showVariantCtas?: boolean;
}

export default function CateringPageLayout({
  title, titleItalic, subtitle, heroImage, intro, packages, variants, formSource, variantsTitle, showContactSection = true, showVariantCtas = true,
}: CateringPageLayoutProps) {
  const scrollToContact = () => {
    document.getElementById('catering-contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-[400px] items-end overflow-hidden bg-[#111111] sm:min-h-[460px] lg:h-[62vh]">
        <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-50" style={{ objectPosition: 'center 40%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/10" />

        {/* Kanji */}
        <span
          aria-hidden="true"
          className="absolute right-14 top-1/2 -translate-y-1/2 font-serif text-[140px] leading-none text-sp-kanji/10 pointer-events-none select-none hidden lg:block"
        >
          寿
        </span>

        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 pb-12 sm:px-6 sm:pb-14 lg:px-14 lg:pb-16">
          <p className="editorial-kicker text-sp-kanji mb-4">Sushi Panda Ketering</p>
          <h1
            className="catering-hero-display text-white"
          >
            {title}
            {titleItalic && <><br /><span className="italic font-normal">{titleItalic}</span></>}
          </h1>
          <p className="editorial-kicker mt-4 text-white/62">{subtitle}</p>
        </div>
      </section>

      {variants && variants.length > 0 && (
        <section className="bg-[#f7f5f2] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
      <div className="mb-12 lg:mb-14">
        <p className="editorial-kicker text-stone-500 mb-3">Izbor menija</p>
        <h2 className="catering-section-display-small">{variantsTitle ?? 'Odaberi varijantu'}</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {variants.map((variant) => (
          <article
            key={variant.title}
            className="group relative min-h-[380px] overflow-hidden rounded-[28px] border border-black/5 bg-[#111111] shadow-[0_18px_44px_rgba(17,17,17,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 sm:min-h-[470px] sm:rounded-[32px]"
          >
            <div className="absolute inset-0 overflow-hidden">
              {variant.image && (
                <img
                  src={variant.image}
                  alt={variant.title}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                />
              )}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ease-out ${
                  variant.strongerOverlay ? 'opacity-100' : 'opacity-95'
                }`}
                style={{
                  background: variant.strongerOverlay
                    ? 'linear-gradient(180deg, rgba(7, 7, 7, 0.28) 0%, rgba(11, 11, 11, 0.42) 42%, rgba(8, 8, 8, 0.88) 100%)'
                    : 'linear-gradient(180deg, rgba(10, 10, 10, 0.22) 0%, rgba(12, 12, 12, 0.36) 45%, rgba(8, 8, 8, 0.8) 100%)',
                }}
              />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8 lg:p-[40px]">
              <div className="max-w-[380px] pb-3 lg:pb-4">
                <h3 className="font-serif text-[2.1rem] leading-[0.94] tracking-[-0.038em] text-[#ffffff] sm:text-[2.45rem] lg:text-[2.85rem]">
                  {variant.title}
                </h3>
                {variant.description && (
                  <p className="catering-body-small mt-4 max-w-[24rem] text-[#ffffff]">
                    {variant.description}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)}

      {/* INTRO */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-0 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <div className="w-10 h-px bg-[#C44F6E] mb-8" />
            <p className="catering-body text-black/78">{intro}</p>
          </div>
          <div className="flex items-center">
            <p className="font-serif italic leading-snug" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#000000', opacity: 0.25 }}>
              "Svaki event je posebna priča — i mi je pričamo kroz sushi."
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-[#f7f5f2] px-4 pb-16 sm:px-6 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1320px] px-0 lg:px-10">
          <div className="mb-14">
            <p className="editorial-kicker text-stone-500 mb-3">Paketi</p>
            <h2 className="catering-section-display-small">
              Odaberi paket
            </h2>
          </div>

          <div className="space-y-4 lg:space-y-5">
            {packages.map((pkg, i) => (
              <article
                key={pkg.name}
                className={`group min-h-[136px] overflow-hidden rounded-[24px] border bg-white px-5 py-6 shadow-[0_16px_40px_rgba(17,17,17,0.04)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(17,17,17,0.07)] sm:rounded-[30px] sm:px-8 sm:py-8 lg:min-h-[152px] lg:px-10 ${
                  i === 1
                    ? 'border-[#f1c6cf] bg-[#fff8f9]'
                    : 'border-black/5 hover:border-black/8 hover:bg-white'
                }`}
              >
                <div className="flex h-full flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <h3 className="font-serif text-[1.85rem] leading-none tracking-[-0.034em] text-[#111111] sm:text-[2.35rem] lg:text-[2.75rem]">
                        {pkg.name}
                      </h3>
                      {i === 1 && (
                        <span className="inline-flex rounded-full bg-[#ffe8ea] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#d95a78] sm:text-[11px]">
                          Najpopularniji
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-black/42 sm:text-[12px]">
                      {pkg.guests}
                    </p>
                  </div>

                  <div className="flex flex-col gap-5 lg:min-w-[390px] lg:flex-row lg:items-center lg:justify-end lg:gap-7">
                    <div className="lg:text-right">
                      <p className="font-serif text-[1.9rem] leading-none tracking-[-0.034em] text-[#111111] transition-transform duration-200 ease-out group-hover:translate-x-1 sm:text-[2.4rem] lg:text-[2.8rem]">
                        {pkg.price}
                      </p>
                    </div>

                    <button
                      onClick={scrollToContact}
                      className={`inline-flex min-h-[54px] items-center justify-center rounded-full px-7 text-[11px] uppercase tracking-[0.18em] transition-all duration-200 ease-out sm:px-8 sm:text-[12px] ${
                        i === 1
                          ? 'bg-[#ff6b7a] text-white hover:bg-[#ff5264]'
                          : 'border border-black/10 bg-white text-[#111111] hover:border-black/18 hover:bg-[#111111] hover:text-white'
                      }`}
                    >
                      Zatraži ponudu
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="catering-body-small mx-auto mt-10 max-w-[52rem] text-center text-black/66">
            Sve ponude uključuju dostavu, postavljanje, soja sos, wasabi, đumbir i sushi meni po dogovoru.
          </p>
        </div>
      </section>

      {/* CONTACT CTA */}
      {showContactSection && (
        <section id="catering-contact" className="bg-[#F0EDE7] px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[1320px] px-0 lg:px-10">
            <div className="relative overflow-hidden border border-[#e4d8d2] bg-white px-5 py-8 shadow-[0_24px_55px_rgba(120,92,84,0.08)] sm:px-10 sm:py-12 lg:px-14 lg:py-16" style={{ borderRadius: '28px' }}>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-[5%] top-[12%] h-36 w-36 rounded-full bg-[#f2e8e2] blur-3xl" />
                <div className="absolute right-[8%] bottom-[12%] h-44 w-44 rounded-full bg-[#C44F6E]/10 blur-3xl" />
              </div>

              <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <p className="editorial-kicker mb-6 text-stone-500">Kontakt</p>
                  <h2 className="catering-section-display-medium text-[#111111] mb-5">
                    Hajde da isplaniramo<br />
                    <span className="italic font-normal">vaš događaj</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C44F6E] mb-8" />
                  <p className="catering-body max-w-[36rem] text-black/74">
                    Recite nam broj gostiju, tip događaja i željeni termin. Pripremićemo predlog sushi menija i organizaciju koja odgovara vašem prostoru i ritmu događaja.
                  </p>
                </div>

                <div className="w-full lg:max-w-[560px]">
                  <div
                    className="relative overflow-hidden rounded-[24px] border border-[#eadfd9] bg-[#fffdfb] px-5 py-6 shadow-[0_18px_44px_rgba(120,92,84,0.06)] sm:rounded-[34px] sm:px-8 sm:py-8 lg:px-10 lg:py-10"
                  >
                    <div className="pointer-events-none absolute inset-0">
                      <div className="absolute right-[-6%] top-[14%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(243,233,227,0.95)_0%,rgba(243,233,227,0.28)_48%,rgba(243,233,227,0)_74%)]" />
                    </div>

                    <div className="relative">
                      <p className="editorial-kicker mb-8 text-stone-500">Informacije</p>

                      <div className="space-y-8">
                        <div className="grid grid-cols-[44px_1fr] items-start gap-4 sm:grid-cols-[54px_1fr] sm:gap-5">
                          <span className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#e5dbd6] text-[#a79b94] sm:h-[54px] sm:w-[54px]">
                            <Phone size={18} strokeWidth={1.6} className="sm:h-[22px] sm:w-[22px]" />
                          </span>
                          <div>
                            <p className="text-[12px] uppercase tracking-[0.24em] text-stone-500">Telefon</p>
                            <a
                              href="tel:+38166404049"
                              className="mt-3 block break-words font-sans text-[1.45rem] leading-[1.04] tracking-[-0.032em] text-[#111111] transition-colors hover:text-[#C44F6E] sm:text-[1.85rem] lg:text-[2.2rem]"
                            >
                              +381 66 404 049
                            </a>
                          </div>
                        </div>

                        <div className="grid grid-cols-[44px_1fr] items-start gap-4 sm:grid-cols-[54px_1fr] sm:gap-5">
                          <span className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#e5dbd6] text-[#a79b94] sm:h-[54px] sm:w-[54px]">
                            <MessageCircle size={18} strokeWidth={1.6} className="sm:h-[22px] sm:w-[22px]" />
                          </span>
                          <div>
                            <p className="text-[12px] uppercase tracking-[0.24em] text-stone-500">WhatsApp</p>
                            <a
                              href="https://wa.me/38166404049"
                              target="_blank"
                              rel="noreferrer"
                              className="mt-3 block font-sans text-[1.45rem] leading-[1.04] tracking-[-0.032em] text-[#111111] transition-colors hover:text-[#C44F6E] sm:text-[1.8rem] lg:text-[2.1rem]"
                            >
                              Napišite nam
                            </a>
                          </div>
                        </div>

                        <div className="grid grid-cols-[44px_1fr] items-start gap-4 sm:grid-cols-[54px_1fr] sm:gap-5">
                          <span className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#e5dbd6] text-[#a79b94] sm:h-[54px] sm:w-[54px]">
                            <MapPin size={18} strokeWidth={1.6} className="sm:h-[22px] sm:w-[22px]" />
                          </span>
                          <div>
                            <p className="text-[12px] uppercase tracking-[0.24em] text-stone-500">Lokacija</p>
                            <p className="mt-3 font-sans text-[1.45rem] leading-[1.04] tracking-[-0.032em] text-[#111111] sm:text-[1.8rem] lg:text-[2.1rem]">
                              Karađorđeva 47
                            </p>
                            <p className="catering-body-small mt-4 text-black/72">
                              Kragujevac, Srbija
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer variant="catering" />
    </div>
  );
}
