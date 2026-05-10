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
          <p className="text-[11px] tracking-widest uppercase text-sp-kanji mb-4 font-light">Sushi Panda Ketering</p>
          <h1
            className="font-serif font-bold text-white leading-[0.92]"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', letterSpacing: '-0.02em' }}
          >
            {title}
            {titleItalic && <><br /><span className="italic font-normal">{titleItalic}</span></>}
          </h1>
          <p className="text-white/45 font-light text-[11px] tracking-widest uppercase mt-4">{subtitle}</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="w-10 h-px bg-[#C44F6E] mb-8" />
            <p className="text-stone-500 font-light text-[14px] leading-[1.9]">{intro}</p>
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
            <p className="text-[11px] tracking-widest uppercase text-stone-400 mb-3 font-light">Paketi</p>
            <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.01em' }}>
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
                  <div className="absolute top-0 left-10 -translate-y-1/2 bg-[#C44F6E] text-white text-[9px] tracking-widest2 uppercase px-4 py-1.5 rounded-full">
                    Najpopularniji
                  </div>
                )}

                <p className={`font-serif font-bold text-[4.5rem] leading-none mb-1 select-none ${i === 1 ? 'text-white/8' : 'text-black/6'}`}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className={`font-serif font-bold text-[1.5rem] mb-1 ${i === 1 ? 'text-white' : 'text-[#111111]'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-[11px] tracking-widest uppercase mb-9 font-light ${i === 1 ? 'text-white/40' : 'text-stone-400'}`}>
                  {pkg.guests}
                </p>

                <div className={`w-full h-px mb-9 ${i === 1 ? 'bg-white/12' : 'bg-stone-100'}`} />

                <ul className="space-y-4 mb-10">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <ArrowRight size={12} strokeWidth={1.5} className="text-[#C44F6E] shrink-0 mt-1" />
                      <span className={`text-[13px] font-light leading-[1.7] ${i === 1 ? 'text-stone-300' : 'text-stone-500'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-4 text-[11px] tracking-widest uppercase rounded-full transition-all duration-300 font-light ${
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
            <p className="text-[11px] tracking-widest uppercase text-sp-kanji mb-7 font-light">Kontakt</p>
            <h2
              className="font-serif font-bold text-white mb-6 leading-[1]"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', letterSpacing: '-0.02em' }}
            >
              Zatraži<br />
              <span className="italic font-normal">ponudu</span>
            </h2>
            <div className="w-10 h-px bg-white/20 mb-8" />
            <p className="text-stone-500 font-light text-[14px] leading-[1.9] max-w-xs">
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
