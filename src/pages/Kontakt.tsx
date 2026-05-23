import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Phone, Instagram, MapPin } from 'lucide-react';

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-x-hidden">
      <Header />

      {/* Header hero */}
      <section className="relative py-36 px-6 bg-[#111111] overflow-hidden">
        <span className="absolute right-14 top-1/2 -translate-y-1/2 font-serif text-[180px] leading-none text-sp-kanji/8 pointer-events-none select-none hidden xl:block">寿司</span>
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-sp-kanji font-light">Javite nam se</p>
          <h1 className="font-serif font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}>
            Kontakt &<br /><span className="italic font-normal">ponuda</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Info */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <p className="mb-10 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Informacije</p>
            <div className="space-y-8 mb-12">
              {[
                { href: 'tel:+38166404049', Icon: Phone, label: 'Telefon', val: '+381 66 404 049' },
                { href: 'https://instagram.com/sushipandaofficial', Icon: Instagram, label: 'Instagram', val: '@sushipandaofficial' },
              ].map(({ href, Icon, label, val }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="flex items-start gap-5 group">
                  <div className="w-9 h-9 border border-stone-200 flex items-center justify-center shrink-0 group-hover:border-[#C44F6E] transition-colors" style={{ borderRadius: '50%' }}>
                    <Icon size={13} className="text-stone-400 group-hover:text-[#C44F6E] transition-colors" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-1.5 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">{label}</p>
                    <p className="text-[16px] font-light leading-[1.6] text-[#111111]">{val}</p>
                  </div>
                </a>
              ))}
              <div className="flex items-start gap-5">
                <div className="w-9 h-9 border border-stone-200 flex items-center justify-center shrink-0" style={{ borderRadius: '50%' }}>
                  <MapPin size={13} className="text-stone-400" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="mb-1.5 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Lokacija</p>
                  <p className="text-[16px] font-light leading-[1.6] text-[#111111]">Beograd, Srbija</p>
                </div>
              </div>
            </div>

            <div className="border-t border-stone-100 pt-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <p className="text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Dostupni smo</p>
              </div>
              <p className="text-[15px] font-light leading-[1.68] text-black/74">
                Odgovaramo u roku od 2 sata.<br />Radimo svakog dana, 08–22h.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-100" />
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <p className="mb-10 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Upit</p>
            <ContactForm source="kontakt" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
