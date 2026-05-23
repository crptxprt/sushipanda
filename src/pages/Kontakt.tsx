import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageCircle, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import galleryChefAction from '../assets/gallery-chef-action.jpeg';
import galleryLiveEvent from '../assets/gallery-live-event.jpg';

const processSteps = [
  { num: '01', title: 'Pošaljite upit' },
  { num: '02', title: 'Dogovaramo detalje' },
  { num: '03', title: 'Dolazimo na lokaciju' },
];

export default function Kontakt() {
  const phoneLabel = '+381 66 404 049';
  const phoneLink = 'tel:+38166404049';
  const whatsappLink =
    'https://wa.me/38166404049?text=Zdravo%2C%20zanima%20me%20sushi%20catering%20za%20doga%C4%91aj.';

  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-x-hidden">
      <Header />

      <section className="relative overflow-hidden bg-[#111111] px-6 py-24 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-[18%] h-36 w-36 rounded-full bg-[#c44f6e]/12 blur-3xl" />
          <span className="absolute right-[38%] top-1/2 hidden -translate-y-1/2 select-none font-serif text-[160px] leading-none text-sp-kanji/7 xl:block">
            寿司
          </span>
        </div>

        <div className="relative max-w-[1320px] mx-auto grid items-center gap-10 px-4 lg:px-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-[36rem]">
            <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-sp-kanji font-light">Javite nam se</p>
            <h1 className="font-serif font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.02em' }}>
              Kontakt &<br /><span className="italic font-normal">ponuda</span>
            </h1>
            <p className="mt-7 max-w-[31rem] text-[16px] font-light leading-[1.72] text-white/72 sm:text-[17px]">
              Za privatne proslave, slave i događaje na vašoj lokaciji organizujemo sushi catering u premium izdanju.
            </p>
          </div>

          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="group relative overflow-hidden rounded-[28px] bg-stone-200 shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
                <img src={galleryLiveEvent} alt="Sushi Panda catering setup" className="h-[250px] w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-[300px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-white/76">Premium setup</p>
                  <p className="mt-3 max-w-[18rem] font-serif text-[1.8rem] leading-[0.98] text-white">Catering koji izgleda jednako dobro kao što se pamti.</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="group relative overflow-hidden rounded-[24px] bg-stone-200">
                  <img src={galleryChefAction} alt="Chef action" className="h-[143px] w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-[176px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/7 p-5 backdrop-blur-sm">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-white/66">Na lokaciji</p>
                  <p className="mt-3 text-[1.25rem] font-medium leading-[1.2] tracking-[-0.02em] text-white">Live chef, postavka i servis u istom premium ritmu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            <div className="relative overflow-hidden rounded-[34px] border border-[#eee3df] bg-[#fcfaf8] px-7 py-10 shadow-[0_24px_60px_rgba(145,111,102,0.08)] sm:px-10 sm:py-12">
              <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-[#f3e3de] blur-3xl opacity-70" />
              <div className="absolute left-[-20px] bottom-8 h-24 w-24 rounded-full bg-[#c44f6e]/10 blur-2xl" />

              <div className="relative">
                <p className="mb-10 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Informacije</p>
                <div className="space-y-8 mb-12">
                  <a href={phoneLink} className="flex items-start gap-5 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-stone-200 bg-white/90 transition-colors group-hover:border-[#C44F6E]" style={{ borderRadius: '50%' }}>
                      <Phone size={14} className="text-stone-400 transition-colors group-hover:text-[#C44F6E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="mb-2 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Telefon</p>
                      <p className="text-[1.35rem] font-medium leading-[1.2] tracking-[-0.02em] text-[#111111] sm:text-[1.6rem]">{phoneLabel}</p>
                    </div>
                  </a>

                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-start gap-5 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-stone-200 bg-white/90 transition-colors group-hover:border-[#C44F6E]" style={{ borderRadius: '50%' }}>
                      <MessageCircle size={14} className="text-stone-400 transition-colors group-hover:text-[#C44F6E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="mb-2 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">WhatsApp</p>
                      <p className="text-[1.35rem] font-medium leading-[1.2] tracking-[-0.02em] text-[#111111] sm:text-[1.6rem]">{phoneLabel}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-stone-200 bg-white/90" style={{ borderRadius: '50%' }}>
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
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <p className="text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Dostupni smo</p>
                  </div>
                  <p className="text-[15px] font-light leading-[1.68] text-black/74">
                    Odgovaramo brzo. Zvonite od 9 do 22 svaki dan
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              <div className="rounded-[34px] border border-[#eee3df] bg-[#f8f3ef] p-7 shadow-[0_20px_50px_rgba(145,111,102,0.06)] sm:p-8">
                <p className="mb-8 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Kako izgleda rezervacija</p>
                <div className="space-y-5">
                  {processSteps.map((step) => (
                    <div key={step.num} className="flex items-start gap-5 rounded-[24px] border border-white/70 bg-white/72 px-5 py-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#181214] text-[12px] tracking-[0.18em] text-white">
                        {step.num}
                      </div>
                      <div className="pt-1">
                        <p className="text-[1.15rem] font-medium leading-[1.3] tracking-[-0.02em] text-[#111111]">{step.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="overflow-hidden rounded-[30px] bg-stone-100">
                  <img src={galleryChefAction} alt="Sushi chef preparing catering" className="h-full min-h-[280px] w-full object-cover" />
                </div>

                <div className="flex flex-col justify-between rounded-[30px] bg-[#181214] p-7 text-white shadow-[0_26px_60px_rgba(24,18,20,0.18)] sm:p-8">
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.18em] text-white/62">Sushi Panda catering</p>
                    <p className="mt-5 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.98] tracking-[-0.03em]">
                      Od privatnih proslava do većih događaja
                    </p>
                    <p className="mt-5 text-[16px] font-light leading-[1.72] text-white/76 sm:text-[17px]">
                      Organizujemo kompletan sushi catering na vašoj lokaciji.
                    </p>
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-6">
                    <p className="text-[1.2rem] font-medium tracking-[-0.02em] text-white">Rezervišite termin na vreme.</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#C44F6E] px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#d36483]"
                      >
                        WhatsApp
                        <ArrowUpRight size={13} strokeWidth={1.6} />
                      </a>
                      <a
                        href={phoneLink}
                        className="inline-flex items-center gap-2 rounded-full border border-white/18 px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-white transition-colors hover:border-white/40 hover:bg-white/6"
                      >
                        Pozovite nas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-20">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <div className="h-px w-full bg-stone-200" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
