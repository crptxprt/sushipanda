import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
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
      <section className="relative h-[68vh] min-h-[500px] flex items-end overflow-hidden bg-[#111111]">
        <img src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Sushi chef" className="absolute inset-0 w-full h-full object-cover opacity-35" style={{ objectPosition: 'center 25%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        <span className="absolute right-14 top-1/2 -translate-y-1/2 font-serif text-[160px] leading-none text-sp-kanji/10 pointer-events-none select-none hidden xl:block">司</span>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-14 pb-20 w-full">
          <p className="text-[11px] tracking-widest uppercase text-sp-kanji mb-5 font-light">Ekskluzivna usluga</p>
          <h1 className="font-serif font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}>
            Sushi chef<br /><span className="italic font-normal">na vašem eventi</span>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-[11px] tracking-widest uppercase text-stone-400 mb-8 font-light">Šta dobijate</p>
            <h2 className="font-serif font-bold mb-8 leading-[1]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              Iskustvo koje<br /><span className="italic font-normal">se pamti</span>
            </h2>
            <div className="w-10 h-px bg-[#C41230] mb-8" />
            <p className="text-stone-500 font-light text-[14px] leading-[1.9] mb-10">
              Naš sushi chef dolazi sa kompletnom opremom i svežim sastojcima — priprema autentični japanski sushi koji postaje centralni deo večeri.
            </p>
            <ul className="space-y-5">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <ArrowRight size={13} strokeWidth={1.5} className="text-[#C41230] shrink-0 mt-1" />
                  <span className="text-stone-500 text-[14px] font-light">{item}</span>
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
            <p className="text-[11px] tracking-widest uppercase text-stone-400 mb-3 font-light">Kako funkcioniše</p>
            <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.01em' }}>Proces u 3 koraka</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="bg-white p-10 lg:p-12" style={{ borderRadius: '20px' }}>
                <p className="font-serif font-bold text-[5rem] leading-none mb-6 select-none text-black/6">{s.num}</p>
                <h3 className="font-serif font-bold text-[1.3rem] text-[#111111] mb-4">{s.title}</h3>
                <p className="text-stone-500 text-[13px] font-light leading-[1.8]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-28 px-6 bg-[#F0EDE7]">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-[11px] tracking-widest uppercase text-stone-400 mb-7 font-light">Rezervacija</p>
            <h2 className="font-serif font-bold text-[#111111] mb-5 leading-[1]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.02em' }}>
              Zatraži<br /><span className="italic font-normal">chefa</span>
            </h2>
            <div className="w-10 h-px bg-[#C41230] mb-8" />
            <p className="text-stone-500 font-light text-[14px] leading-[1.9] max-w-xs mb-8">
              Pošalji nam upit i dogovorićemo sve detalje za sushi chefa na tvom eventi.
            </p>
            <button onClick={() => navigate('/kontakt')} className="group inline-flex items-center gap-3 text-[11px] tracking-widest uppercase text-stone-400 hover:text-[#C41230] transition-colors font-light">
              Ili poseti kontakt stranicu
              <ArrowRight size={12} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="bg-white p-8 lg:p-12" style={{ borderRadius: '20px' }}>
            <ContactForm source="sushi-chef" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
