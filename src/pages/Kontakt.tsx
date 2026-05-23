import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

export default function Kontakt() {
  const phoneLabel = '+381 66 404 049';
  const phoneLink = 'tel:+38166404049';
  const whatsappLink =
    'https://wa.me/38166404049?text=Zdravo%2C%20zanima%20me%20sushi%20catering%20za%20doga%C4%91aj.';

  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-x-hidden">
      <Header />

      <section className="relative py-36 px-6 bg-[#111111] overflow-hidden">
        <span className="absolute right-14 top-1/2 -translate-y-1/2 font-serif text-[180px] leading-none text-sp-kanji/8 pointer-events-none select-none hidden xl:block">寿司</span>
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-sp-kanji font-light">Javite nam se</p>
          <h1 className="font-serif font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}>
            Kontakt &<br /><span className="italic font-normal">ponuda</span>
          </h1>
        </div>
      </section>

      <section className="py-28 px-6 bg-white">
        <div className="max-w-[920px] mx-auto px-4 lg:px-10">
          <div className="relative overflow-hidden rounded-[34px] border border-[#eee3df] bg-[#fcfaf8] px-7 py-10 shadow-[0_24px_60px_rgba(145,111,102,0.08)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-[#f3e3de] blur-3xl opacity-70" />
            <div className="absolute left-[-20px] bottom-8 h-24 w-24 rounded-full bg-[#c44f6e]/10 blur-2xl" />

            <p className="relative mb-6 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">
              Sushi catering u Kragujevcu
            </p>
            <h2
              className="relative max-w-[34rem] font-serif text-[#111111]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.6rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
            >
              Rešili ste da poručite
              <span className="block italic font-normal">ketering? Mi ćemo sve urediti kako treba.</span>
            </h2>
            <p className="relative mt-6 max-w-[34rem] text-[16px] font-light leading-[1.72] text-black/72 sm:text-[17px]">
              Javite nam se direktno i dogovorićemo sve brzo, jasno i bez suvišnih koraka.
            </p>

            <div className="relative mt-12 h-px w-full bg-[#ede0dc]" />

            <div className="relative mt-10">
              <p className="mb-10 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Informacije</p>
              <div className="space-y-8 mb-12">
                <a href={phoneLink} className="flex items-start gap-5 group">
                  <div className="w-10 h-10 border border-stone-200 flex items-center justify-center shrink-0 bg-white/90 group-hover:border-[#C44F6E] transition-colors" style={{ borderRadius: '50%' }}>
                    <Phone size={14} className="text-stone-400 group-hover:text-[#C44F6E] transition-colors" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-2 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Telefon</p>
                    <p className="text-[1.35rem] font-medium leading-[1.2] tracking-[-0.02em] text-[#111111] sm:text-[1.6rem]">{phoneLabel}</p>
                  </div>
                </a>

                <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-start gap-5 group">
                  <div className="w-10 h-10 border border-stone-200 flex items-center justify-center shrink-0 bg-white/90 group-hover:border-[#C44F6E] transition-colors" style={{ borderRadius: '50%' }}>
                    <MessageCircle size={14} className="text-stone-400 group-hover:text-[#C44F6E] transition-colors" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-2 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">WhatsApp</p>
                    <p className="text-[1.35rem] font-medium leading-[1.2] tracking-[-0.02em] text-[#111111] sm:text-[1.6rem]">{phoneLabel}</p>
                  </div>
                </a>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-stone-200 flex items-center justify-center shrink-0 bg-white/90" style={{ borderRadius: '50%' }}>
                    <MapPin size={14} className="text-stone-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-2 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Lokacija</p>
                    <p className="text-[1.35rem] font-medium leading-[1.2] tracking-[-0.02em] text-[#111111] sm:text-[1.6rem]">Karađorđeva 47</p>
                    <p className="mt-2 text-[16px] font-light leading-[1.6] text-black/72">Kragujevac, Srbija</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <p className="text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Dostupni smo</p>
                </div>
                <p className="text-[15px] font-light leading-[1.68] text-black/74">
                  Odgovaramo brzo. Zvonite od 9 do 22 svaki dan
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
