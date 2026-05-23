import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageCircle, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Kontakt() {
  const phoneLabel = '+381 66 404 049';
  const phoneLink = 'tel:+38166404049';
  const whatsappLink =
    'https://wa.me/38166404049?text=Zdravo%2C%20zanima%20me%20sushi%20catering%20za%20doga%C4%91aj.';

  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-x-hidden">
      <Header />

      <section className="relative overflow-hidden bg-[#111111] px-6 py-32 lg:py-36">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-[14%] h-44 w-44 rounded-full bg-[#c44f6e]/12 blur-3xl" />
          <div className="absolute right-[10%] top-[22%] h-64 w-64 rounded-full bg-white/6 blur-3xl" />
          <span className="absolute right-14 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[180px] leading-none text-sp-kanji/8 xl:block">
            寿司
          </span>
        </div>

        <div className="relative max-w-[1320px] mx-auto grid gap-14 px-4 lg:px-10 lg:grid-cols-[0.95fr_0.75fr] lg:items-end">
          <div>
            <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-sp-kanji font-light">Javite nam se</p>
            <h1
              className="font-serif font-bold leading-[0.92] text-white"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}
            >
              Kontakt &<br />
              <span className="italic font-normal">lokacija</span>
            </h1>
            <p className="mt-8 max-w-[38rem] text-[16px] font-light leading-[1.72] text-white/72 sm:text-[17px]">
              Bez forme i čekanja. Za upit, termin ili brzu proveru dostupnosti javite nam se direktno
              telefonom ili putem WhatsApp poruke.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[26px] border border-white/12 bg-white/7 p-6 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C44F6E] hover:bg-[#C44F6E]"
            >
              <div className="mb-12 w-fit rounded-full border border-white/14 bg-white/10 p-3">
                <MessageCircle size={18} strokeWidth={1.6} />
              </div>
              <p className="text-[12px] uppercase tracking-[0.16em] text-white/70">WhatsApp</p>
              <p className="mt-3 text-[1.7rem] font-medium leading-[1.04] tracking-[-0.03em]">Pošaljite poruku</p>
              <p className="mt-4 max-w-[16rem] text-[15px] font-light leading-[1.65] text-white/76">
                Najbrži način za ponudu, dostupnost i dogovor detalja.
              </p>
            </a>

            <div className="rounded-[26px] border border-white/12 bg-[#f6f1eb] p-6 text-[#111111] shadow-[0_24px_60px_rgba(17,17,17,0.14)]">
              <p className="text-[12px] uppercase tracking-[0.16em] text-stone-500">Lokacija</p>
              <p className="mt-4 font-serif text-[2rem] leading-[0.98] tracking-[-0.03em] text-[#111111]">
                Karađorđeva 47
              </p>
              <p className="mt-3 text-[16px] font-light leading-[1.65] text-black/72">Kragujevac, Srbija</p>
              <div className="mt-8 h-px w-full bg-stone-200" />
              <p className="mt-6 text-[14px] font-light leading-[1.65] text-black/66">
                Pišite ili pozovite unapred i dogovorićemo sve detalje za vaš događaj.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-24 lg:py-28">
        <div className="absolute left-[6%] top-[10%] hidden h-52 w-24 rotate-[-18deg] rounded-full border border-[#f1e4df] lg:block" />
        <div className="absolute right-[8%] bottom-[12%] hidden h-40 w-20 rotate-[20deg] rounded-full border border-[#f3e8e5] lg:block" />

        <div className="max-w-[1320px] mx-auto grid gap-14 px-4 lg:px-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:pt-6">
            <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Kontakt detalji</p>
            <h2
              className="max-w-[20rem] font-serif text-[#111111]"
              style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)', lineHeight: 0.98, letterSpacing: '-0.03em' }}
            >
              Brz kontakt,
              <span className="block italic font-normal">bez suvišnih koraka</span>
            </h2>
            <div className="mt-7 h-px w-10 bg-[#C44F6E]" />
            <p className="mt-7 max-w-sm text-[16px] font-light leading-[1.72] text-black/74 sm:text-[17px]">
              Ako već znate datum ili okviran broj gostiju, pošaljite to odmah u poruci i vraćamo se sa
              predlogom što brže.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            {[
              {
                href: phoneLink,
                label: 'Telefon',
                value: phoneLabel,
                copy: 'Za direktan razgovor, brzu proveru termina i detalje oko keteringa.',
                Icon: Phone,
                light: true,
              },
              {
                href: whatsappLink,
                label: 'WhatsApp',
                value: 'Pišite direktno',
                copy: 'Za najbrži upit, poruku sa datumom događaja i osnovnim informacijama.',
                Icon: MessageCircle,
                external: true,
                dark: true,
              },
              {
                label: 'Lokacija',
                value: 'Karađorđeva 47',
                secondary: 'Kragujevac, Srbija',
                copy: 'Naša baza za dogovor, organizaciju i pripremu događaja u Kragujevcu.',
                Icon: MapPin,
              },
            ].map(({ href, label, value, secondary, copy, Icon, external, dark, light }) => {
              const content = (
                <>
                  <div
                    className={`mb-12 flex h-12 w-12 items-center justify-center rounded-full ${
                      dark ? 'border border-white/14 bg-white/10 text-white' : 'bg-[#f5ede8] text-[#181214]'
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <p className={`text-[12px] uppercase tracking-[0.16em] ${dark ? 'text-white/68' : 'text-stone-500'}`}>{label}</p>
                  <p
                    className={`mt-3 leading-[1.05] tracking-[-0.03em] ${
                      light ? 'text-[1.9rem] font-medium text-[#111111]' : dark ? 'text-[1.75rem] font-medium text-white' : 'font-serif text-[2rem] text-[#111111]'
                    }`}
                  >
                    {value}
                  </p>
                  {secondary ? (
                    <p className="mt-3 text-[16px] font-light leading-[1.65] text-black/72">{secondary}</p>
                  ) : null}
                  <p className={`mt-5 max-w-[20rem] text-[15px] font-light leading-[1.68] ${dark ? 'text-white/76' : 'text-black/70'}`}>
                    {copy}
                  </p>
                  {href ? (
                    <div className={`mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] ${dark ? 'text-white/74' : 'text-stone-600'}`}>
                      Otvorite
                      <ArrowUpRight size={13} strokeWidth={1.6} />
                    </div>
                  ) : null}
                </>
              );

              const cardClassName = dark
                ? 'rounded-[28px] border border-[#1f181b] bg-[#181214] p-7 shadow-[0_26px_60px_rgba(24,18,20,0.16)] lg:p-8'
                : 'rounded-[28px] border border-[#eee3df] bg-[#fcfaf8] p-7 shadow-[0_24px_50px_rgba(145,111,102,0.08)] lg:p-8';

              if (!href) {
                return (
                  <div key={label} className={`${cardClassName} lg:col-span-2`}>
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className={`${cardClassName} group transition-all duration-300 hover:-translate-y-1 hover:border-[#C44F6E]`}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3e8e5] px-6 py-14">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <div className="flex flex-col gap-6 rounded-[28px] border border-white/70 bg-white/80 px-6 py-7 shadow-[0_18px_42px_rgba(145,111,102,0.08)] backdrop-blur-sm lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Dostupni smo svakog dana</p>
              <p className="mt-3 max-w-[34rem] text-[16px] font-light leading-[1.72] text-black/74 sm:text-[17px]">
                Odgovaramo brzo, najčešće u roku od oko 2 sata, između 08–22h.
              </p>
            </div>
            <a
              href={phoneLink}
              className="inline-flex items-center justify-center rounded-full bg-[#181214] px-8 py-4 text-[12px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#C44F6E]"
            >
              Pozovite nas
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
