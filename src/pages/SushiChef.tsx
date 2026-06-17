import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { navigate } from '../lib/router';

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
      <section className="relative h-[62vh] min-h-[460px] flex items-end overflow-hidden bg-[#111111]">
        <img src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Sushi chef" className="absolute inset-0 w-full h-full object-cover opacity-35" style={{ objectPosition: 'center 25%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        <span className="absolute right-14 top-1/2 -translate-y-1/2 font-serif text-[140px] leading-none text-sp-kanji/10 pointer-events-none select-none hidden lg:block">司</span>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-14 pb-16 w-full">
          <p className="editorial-kicker text-sp-kanji mb-4">Ekskluzivna usluga</p>
          <h1 className="inner-hero-display text-white">
            Sushi chef<br /><span className="italic font-normal">na vašem eventi</span>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="editorial-kicker mb-8 text-stone-500">Šta dobijate</p>
            <h2 className="section-display-medium mb-8">
              Iskustvo koje<br /><span className="italic font-normal">se pamti</span>
            </h2>
            <div className="w-10 h-px bg-[#C44F6E] mb-8" />
            <p className="mb-10 text-[16px] font-light leading-[1.72] text-black/76">
              Naš sushi chef dolazi sa kompletnom opremom i svežim sastojcima — priprema autentični japanski sushi koji postaje centralni deo večeri.
            </p>
            <ul className="space-y-5">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <ArrowRight size={13} strokeWidth={1.5} className="text-[#C44F6E] shrink-0 mt-1" />
                  <span className="text-[16px] font-light leading-[1.65] text-black/76">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden bg-stone-200" style={{ borderRadius: '24px', aspectRatio: '3/4' }}>
            <img src="https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=900" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 px-6 bg-[#f7f5f2]">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <div className="mb-16">
            <p className="editorial-kicker mb-3 text-stone-500">Kako funkcioniše</p>
            <h2 className="section-display-small">Proces u 3 koraka</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="bg-white p-10 lg:p-12" style={{ borderRadius: '20px' }}>
                <p className="font-serif font-bold text-[5rem] leading-none mb-6 select-none text-black/6">{s.num}</p>
                <h3 className="serif-card-title text-[#111111] mb-4">{s.title}</h3>
                <p className="text-[15px] font-light leading-[1.68] text-black/74">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
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
                  Rezerviši<br /><span className="italic font-normal">sushi chefa</span>
                </h2>
                <div className="w-10 h-px bg-[#C44F6E] mb-8" />
                <p className="max-w-[36rem] text-[16px] font-light leading-[1.75] text-black/74">
                  Ako želiš live sushi iskustvo na događaju, javi nam termin, broj gostiju i tip eventa. Pripremićemo predlog organizacije i nastupa chefa na licu mesta.
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

      <Footer />
    </div>
  );
}
