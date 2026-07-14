import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, MapPin, MessageCircle, Phone } from 'lucide-react';
import heroSushiChef from '../assets/heroes/hero-sushi-chef.png';
import chefExperience from '../assets/chef-experience.png';

const highlights = [
  'Chef priprema sushi uživo pred gostima',
  'Interaktivno japansko gastronomsko iskustvo',
  'Personalizovani jelovnik po vašim željama',
  'Profesionalna oprema i premium prezentacija',
  'Edukativna demonstracija japonskih tehnika',
];

const steps = [
  { num: '01', title: 'Pošalji upit', desc: 'Popuni formu sa detaljima o tvom događaju i broju gostiju.' },
  { num: '02', title: 'Dogovor ponude', desc: 'Pripremiamo personalizovanu ponudu i dogovaramo sve detalje.' },
  { num: '03', title: 'Chef na licu mesta', desc: 'Naš chef dolazi, postavlja stanicu i priprema sushi uživo.' },
];

export default function SushiChef() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative flex h-[400px] items-end overflow-hidden bg-[#111111] sm:h-[500px] lg:h-[62vh] lg:max-h-[720px]">
        <img
          src={heroSushiChef}
          alt="Sushi chef"
          className="absolute -top-[18%] left-0 h-[136%] w-full max-w-none object-cover opacity-50 sm:inset-0 sm:h-full"
          style={{ objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/10" />

        <span className="absolute right-14 top-1/2 -translate-y-1/2 font-serif text-[140px] leading-none text-sp-kanji/10 pointer-events-none select-none hidden lg:block">司</span>

        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 pb-12 sm:px-6 sm:pb-14 lg:px-14 lg:pb-16">
          <p className="editorial-kicker text-sp-kanji mb-4">Ekskluzivna usluga</p>
          <h1 className="catering-hero-display text-white">
            Sushi chef<br /><span className="italic font-normal">na vašem eventi</span>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-0 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <p className="editorial-kicker mb-8 text-stone-500">Šta dobijate</p>
            <h2 className="catering-section-display-medium mb-8">
              Iskustvo koje<br /><span className="italic font-normal">se pamti</span>
            </h2>
            <div className="w-10 h-px bg-[#C44F6E] mb-8" />
            <p className="catering-body mb-10 text-black/76">
              Naš sushi chef dolazi sa kompletnom opremom i svežim sastojcima — priprema autentični japanski sushi koji postaje centralni deo večeri.
            </p>
            <ul className="space-y-5">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <ArrowRight size={13} strokeWidth={1.5} className="text-[#C44F6E] shrink-0 mt-1" />
                  <span className="catering-body text-black/76">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden bg-stone-200" style={{ borderRadius: '24px', aspectRatio: '3/4' }}>
            <img src={chefExperience} alt="Sushi chef priprema premium sastojke za događaj" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f7f5f2] px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-0 lg:px-10">
          <div className="mb-16">
            <p className="editorial-kicker mb-3 text-stone-500">Kako funkcioniše</p>
            <h2 className="catering-section-display-small">Proces u 3 koraka</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="bg-white p-7 sm:p-10 lg:p-12" style={{ borderRadius: '20px' }}>
                <p className="mb-5 select-none font-serif text-[3.8rem] font-bold leading-none text-black/6 sm:mb-6 sm:text-[5rem]">{s.num}</p>
                <h3 className="catering-card-title text-[#111111] mb-4">{s.title}</h3>
                <p className="catering-body-small text-black/74">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="sushi-chef-contact" className="bg-[#F0EDE7] px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
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
                  Rezerviši<br /><span className="italic font-normal">sushi chefa</span>
                </h2>
                <div className="w-10 h-px bg-[#C44F6E] mb-8" />
                <p className="catering-body max-w-[36rem] text-black/74">
                  Ako želiš live sushi iskustvo na događaju, javi nam termin, broj gostiju i tip eventa. Pripremićemo predlog organizacije i nastupa chefa na licu mesta.
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

      <Footer variant="catering" />
    </div>
  );
}
