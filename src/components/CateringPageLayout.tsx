import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { ArrowRight } from 'lucide-react';

export interface PackageItem {
  name: string;
  guests: string;
  items: string[];
}

interface CateringPageLayoutProps {
  title: string;
  titleItalic?: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  packages: PackageItem[];
  formSource: string;
}

export default function CateringPageLayout({
  title, titleItalic, subtitle, heroImage, intro, packages, formSource,
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
                className={`relative p-10 lg:p-12 ${i === 1 ? 'bg-[#111111] text-white' : 'bg-white'}`}
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
                <h3 className={`serif-card-title mb-1 ${i === 1 ? 'text-white' : 'text-[#111111]'}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-9 text-[12px] uppercase tracking-[0.18em] font-light ${i === 1 ? 'text-white/60' : 'text-stone-500'}`}>
                  {pkg.guests}
                </p>

                <div className={`w-full h-px mb-9 ${i === 1 ? 'bg-white/12' : 'bg-stone-100'}`} />

                <ul className="space-y-4 mb-10">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <ArrowRight size={12} strokeWidth={1.5} className="text-[#C44F6E] shrink-0 mt-1" />
                      <span className={`text-[15px] font-light leading-[1.68] ${i === 1 ? 'text-white/78' : 'text-black/76'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full rounded-full py-4 text-[12px] uppercase tracking-[0.18em] transition-all duration-300 font-light ${
                    i === 1
                      ? 'bg-[#C44F6E] text-white hover:bg-[#D8748D]'
                      : 'border border-sp-dark text-[#111111] hover:bg-[#111111] hover:text-white'
                  }`}
                >
                  Zatraži cenu
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FORM */}
      <section id="contact-form" className="py-28 px-6 bg-[#111111]">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="editorial-kicker mb-7 text-sp-kanji">Kontakt</p>
            <h2
              className="section-display text-white mb-6"
            >
              Zatraži<br />
              <span className="italic font-normal">ponudu</span>
            </h2>
            <div className="w-10 h-px bg-white/20 mb-8" />
            <p className="max-w-xs text-[16px] font-light leading-[1.72] text-white/76">
              Pošalji nam upit i pripremićemo personalizovanu ponudu za tvoj događaj.
            </p>
          </div>
          <div className="bg-[#f7f5f2] p-8 lg:p-12" style={{ borderRadius: '20px' }}>
            <ContactForm source={formSource} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
