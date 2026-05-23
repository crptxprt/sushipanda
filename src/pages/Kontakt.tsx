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
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <p className="mb-10 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Informacije</p>
            <div className="space-y-8 mb-12">
              <a href={phoneLink} className="flex items-start gap-5 group">
                <div className="w-9 h-9 border border-stone-200 flex items-center justify-center shrink-0 group-hover:border-[#C44F6E] transition-colors" style={{ borderRadius: '50%' }}>
                  <Phone size={13} className="text-stone-400 group-hover:text-[#C44F6E] transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="mb-1.5 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Telefon</p>
                  <p className="text-[16px] font-light leading-[1.6] text-[#111111]">{phoneLabel}</p>
                </div>
              </a>

              <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-start gap-5 group">
                <div className="w-9 h-9 border border-stone-200 flex items-center justify-center shrink-0 group-hover:border-[#C44F6E] transition-colors" style={{ borderRadius: '50%' }}>
                  <MessageCircle size={13} className="text-stone-400 group-hover:text-[#C44F6E] transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="mb-1.5 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">WhatsApp</p>
                  <p className="text-[16px] font-light leading-[1.6] text-[#111111]">{phoneLabel}</p>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <div className="w-9 h-9 border border-stone-200 flex items-center justify-center shrink-0" style={{ borderRadius: '50%' }}>
                  <MapPin size={13} className="text-stone-400" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="mb-1.5 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Lokacija</p>
                  <p className="text-[16px] font-light leading-[1.6] text-[#111111]">Karađorđeva 47</p>
                  <p className="text-[16px] font-light leading-[1.6] text-[#111111]">Kragujevac, Srbija</p>
                </div>
              </div>
            </div>

            <div className="border-t border-stone-100 pt-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <p className="text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Dostupni smo</p>
              </div>
              <p className="text-[15px] font-light leading-[1.68] text-black/74">
                Odgovaramo brzo. Zvonite od 9 do 22 svaki dan
              </p>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-100" />
          </div>

          <div className="lg:col-span-7">
            <p className="mb-10 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Kontakt</p>
            <div className="rounded-[34px] border border-[#ede0dc] bg-[#f6eeea] p-5 shadow-[0_18px_42px_rgba(145,111,102,0.06)] lg:p-7">
              <div className="grid gap-5 lg:grid-cols-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[28px] border border-[#c75478] bg-[#c75478] px-8 py-8 text-white transition-all duration-300 hover:bg-[#bc4469]"
                >
                  <div className="mb-20">
                    <div className="w-fit rounded-full border border-white/50 p-4 text-white">
                      <MessageCircle size={22} strokeWidth={1.7} />
                    </div>
                  </div>
                  <p className="text-[12px] uppercase tracking-[0.24em] text-white/80">WhatsApp</p>
                  <p className="mt-5 text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[0.96] tracking-[-0.04em]">Pišite na WhatsApp</p>
                </a>

                <a
                  href={phoneLink}
                  className="group rounded-[28px] border border-[#e6d4ce] bg-[#fcfaf8] px-8 py-8 text-[#111111] transition-all duration-300 hover:border-[#C44F6E]"
                >
                  <div className="mb-20">
                    <div className="w-fit rounded-full bg-[#f4e9e4] p-4 text-[#181214]">
                      <Phone size={22} strokeWidth={1.7} />
                    </div>
                  </div>
                  <p className="text-[12px] uppercase tracking-[0.24em] text-stone-500">Telefon</p>
                  <p className="mt-5 text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[0.96] tracking-[-0.04em]">Pozovite nas</p>
                  <p className="mt-8 text-[1.45rem] font-medium tracking-[-0.03em] text-[#111111] sm:text-[1.7rem]">{phoneLabel}</p>
                </a>
              </div>

              <div className="mt-5 rounded-[28px] border border-[#e6d4ce] bg-white/78 px-8 py-8">
                <div className="mb-8 w-fit rounded-full bg-[#f4e9e4] p-4 text-[#181214]">
                  <MapPin size={22} strokeWidth={1.7} />
                </div>
                <p className="text-[12px] uppercase tracking-[0.24em] text-stone-500">Lokacija</p>
                <p className="mt-5 font-serif text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.96] tracking-[-0.04em] text-[#111111]">Karađorđeva 47</p>
                <p className="mt-3 text-[16px] font-light leading-[1.65] text-black/74">Kragujevac, Srbija</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
