import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import galleryDetailIngredients from '../assets/gallery-detail-ingredients.png';

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

      <section className="relative h-[430px] overflow-hidden bg-[#111111] px-6 pt-28 pb-16 lg:h-[470px] lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-110px] top-[8%] h-[360px] w-[360px] rounded-full bg-[#2b2324]" />
          <div className="absolute right-[-60px] top-[8%] h-[320px] w-[320px] rounded-full bg-[#2a1f22]" />
          <div className="absolute right-[14%] top-[16%] h-[250px] w-[250px] rounded-full bg-[#6f4a55]/28 blur-[110px]" />
          <div className="absolute right-[8%] bottom-[0%] h-[300px] w-[220px] rounded-full bg-[#4b353d]/38 blur-[90px]" />
          <div className="absolute left-[44%] top-[22%] h-32 w-32 rounded-full bg-[#f2e0d8]/[0.04] blur-3xl" />
          <div className="absolute right-[20%] top-[22%] h-[240px] w-[110px] rounded-full bg-[#f0ddd7]/[0.05] rotate-[18deg] blur-[10px]" />
        </div>

        <div className="relative mx-auto grid h-full max-w-[1320px] items-center gap-8 px-4 lg:px-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-[36rem]">
            <p className="mb-5 text-[12px] uppercase tracking-[0.18em] text-sp-kanji font-light">Javite nam se</p>
            <h1 className="font-serif font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.02em' }}>
              Kontakt &<br /><span className="italic font-normal">ponuda</span>
            </h1>
            <p className="mt-5 max-w-[31rem] text-[16px] font-light leading-[1.68] text-white/72 sm:text-[17px]">
              Za privatne proslave, slave i događaje na vašoj lokaciji organizujemo sushi catering u premium izdanju.
            </p>
          </div>

          <div className="relative min-h-[190px] lg:min-h-[220px]">
            <div className="absolute right-[6%] top-[2%] h-[270px] w-[270px] rounded-full bg-[#f1ddd5]/[0.08] blur-[12px]" />
            <div className="absolute right-[22%] top-[16%] h-[210px] w-[100px] rounded-full bg-[#e8cfd0]/[0.08] rotate-[24deg] blur-[14px]" />
            <div className="absolute right-[2%] top-[30%] h-[220px] w-[110px] rounded-full bg-[#f4e6df]/[0.04] rotate-[-18deg] blur-[12px]" />
            <div className="absolute right-[16%] bottom-[6%] h-[160px] w-[160px] rounded-full bg-[#f6eae4]/[0.05] blur-3xl" />
            <div className="absolute left-[14%] top-[28%] h-[112px] w-[112px] rounded-full bg-[#f1ddd6]/[0.04] blur-3xl" />
            <div className="absolute right-[15%] bottom-[10%] rounded-[24px] border border-white/8 bg-white/[0.035] px-6 py-4 backdrop-blur-sm">
              <p className="text-[12px] uppercase tracking-[0.18em] text-white/60">Quiet luxury</p>
              <p className="mt-3 max-w-[14rem] text-[1.05rem] font-medium leading-[1.28] tracking-[-0.02em] text-white/90">
                Diskretna postavka, čist servis i premium utisak na lokaciji.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            <div className="relative overflow-hidden rounded-[34px] border border-[#eee3df] bg-[#fcfaf8] px-7 py-8 shadow-[0_24px_60px_rgba(145,111,102,0.08)] sm:px-9 sm:py-9">
              <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-[#f3e3de] blur-3xl opacity-70" />
              <div className="absolute left-[-20px] bottom-8 h-24 w-24 rounded-full bg-[#c44f6e]/10 blur-2xl" />

              <div className="relative">
                <p className="mb-8 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Informacije</p>
                <div className="space-y-6 mb-8">
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
                      <p className="text-[1.35rem] font-medium leading-[1.2] tracking-[-0.02em] text-[#111111] transition-opacity group-hover:opacity-75 sm:text-[1.6rem]">
                        Napišite nam
                      </p>
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

                <div className="mb-12 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-white/80 bg-white/74 px-4 py-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-stone-500 font-light">Instagram</p>
                    <a
                      href="https://www.instagram.com/sushipandaofficial"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-[15px] font-medium leading-[1.4] tracking-[-0.01em] text-[#111111] transition-opacity hover:opacity-70 hover:underline underline-offset-4"
                    >
                      @sushipandaofficial
                    </a>
                  </div>
                  <div className="rounded-[20px] border border-white/80 bg-white/74 px-4 py-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-stone-500 font-light">Kapacitet</p>
                    <p className="mt-2 text-[15px] font-medium leading-[1.4] tracking-[-0.01em] text-[#111111]">10-50+ gostiju</p>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-6">
                  <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Kako izgleda rezervacija</p>
                  <div className="space-y-3">
                    {processSteps.map((step) => (
                      <div key={step.num} className="flex items-start gap-4 rounded-[22px] border border-white/80 bg-white/78 px-4 py-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#181214] text-[11px] tracking-[0.18em] text-white">
                          {step.num}
                        </div>
                        <div className="pt-0.5">
                          <p className="text-[1rem] font-medium leading-[1.25] tracking-[-0.02em] text-[#111111]">{step.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="overflow-hidden rounded-[30px] bg-stone-100 shadow-[0_22px_55px_rgba(145,111,102,0.08)]">
                  <img src={galleryDetailIngredients} alt="Elegant sushi serving detail" className="h-full min-h-[430px] w-full object-cover" />
                </div>

                <div className="relative flex min-h-[430px] flex-col justify-end overflow-hidden rounded-[30px] bg-[#181214] p-6 text-white shadow-[0_26px_60px_rgba(24,18,20,0.18)] sm:p-7">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute right-[12%] top-[10%] h-32 w-32 rounded-full border border-white/[0.14] blur-[2px]" />
                    <div className="absolute right-[6%] top-[22%] h-48 w-24 rounded-full border border-white/[0.12] rotate-[18deg] blur-[1px]" />
                    <div className="absolute left-[16%] top-[16%] h-24 w-24 rounded-full bg-white/[0.06] blur-3xl" />
                    <div className="absolute right-[20%] top-[34%] h-28 w-28 rounded-full bg-white/[0.05] blur-3xl" />
                    <div className="absolute left-[10%] bottom-[20%] h-24 w-52 rounded-full border border-white/[0.11] rotate-[-14deg] blur-[1px]" />
                    <div className="absolute left-[18%] bottom-[8%] h-20 w-20 rounded-full bg-white/[0.05] blur-3xl" />
                    <div className="absolute right-[12%] bottom-[14%] h-32 w-16 rounded-full border border-white/[0.1] rotate-[20deg]" />
                    <div className="absolute right-[24%] bottom-[6%] h-24 w-24 rounded-full bg-white/[0.045] blur-3xl" />
                    <div className="absolute left-[42%] bottom-[12%] h-16 w-16 rounded-full border border-white/[0.08] blur-[1px]" />
                  </div>

                  <div className="relative">
                    <p className="text-[12px] uppercase tracking-[0.18em] text-white/62">Sushi Panda catering</p>
                    <p className="mt-4 font-serif text-[clamp(1.7rem,3.2vw,2.55rem)] leading-[0.9] tracking-[-0.03em]">
                      Od privatnih proslava do većih događaja
                    </p>
                    <p className="mt-5 text-[15px] font-light leading-[1.65] text-white/76 sm:text-[16px]">
                      Organizujemo kompletan sushi catering na vašoj lokaciji.
                    </p>
                  </div>

                  <div className="relative mt-7 border-t border-white/16 pt-5">
                    <p className="max-w-[15rem] text-[14px] font-light leading-[1.65] text-white/62">
                      Elegantna postavka. Profesionalan servis.
                    </p>
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
