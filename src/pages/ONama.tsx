import Header from '../components/Header';
import Footer from '../components/Footer';
import { navigate } from '../lib/router';
import { ArrowRight } from 'lucide-react';

export default function ONama() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[75vh] bg-[#f7f5f2] overflow-hidden flex flex-col lg:flex-row">
        {/* Blob */}
        <div className="absolute top-[5%] left-[-140px] w-[600px] h-[700px] bg-sp-blob pointer-events-none select-none" style={{ borderRadius: '50%' }} />

        {/* Left text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-end pt-36 pb-16 lg:pb-24 px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
          <p className="mb-7 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Ko smo mi</p>
          <h1 className="font-serif font-bold leading-[0.88] mb-8" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', letterSpacing: '-0.03em' }}>
            O<br /><span className="italic font-normal">nama</span>
          </h1>
          <p className="max-w-sm text-[16px] font-light leading-[1.7] text-black/76">
            Ekipa koja veruje da je sushi više od hrane — to je iskustvo.
          </p>
        </div>

        {/* Right image */}
        <div className="w-full lg:w-1/2 h-[45vw] lg:h-auto overflow-hidden bg-stone-200">
          <img src="https://images.pexels.com/photos/3475610/pexels-photo-3475610.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* STORY */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="mb-5 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Naša priča</p>
            <h2 className="font-serif font-bold leading-[1]" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}>
              Strast prema<br /><span className="italic font-normal">japanskoj kuhinji</span>
            </h2>
          </div>
          <div className="space-y-5 text-[16px] font-light leading-[1.72] text-black/76">
            <p>Sushi Panda je nastao iz ljubavi prema japanskoj kuhinji i želje da tu ljubav podelimo sa što više ljudi — na privatnim proslavama, firminim eventima i svim posebnim prilikama.</p>
            <p>Naš tim čine iskusni sushi majstori koji su svoje znanje usavršavali u restoranima pre nego što su osnovali sopstveni ketering servis.</p>
            <p>Verujemo da je hrana više od obroka — to je iskustvo. I upravo zato svaki event tretiramo sa pažnjom i profesionalnošću koji zaslužuje.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#111111]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/6">
          {[{ n: '200+', l: 'Uspešnih evenata' }, { n: '5k+', l: 'Zadovoljnih gostiju' }, { n: '5', l: 'Godina iskustva' }, { n: '15+', l: 'Vrsta sushija' }].map((s) => (
            <div key={s.l} className="bg-[#111111] px-8 py-16 text-center">
              <p className="font-serif font-bold text-[3.5rem] text-white mb-3 leading-none">{s.n}</p>
              <p className="text-[12px] uppercase tracking-[0.18em] text-stone-400 font-light">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE + FEATURES */}
      <section className="py-28 px-6 bg-[#f7f5f2]">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden bg-stone-200" style={{ borderRadius: '24px', aspectRatio: '4/3' }}>
            <img src="https://images.pexels.com/photos/1148087/pexels-photo-1148087.jpeg?auto=compress&cs=tinysrgb&w=900" alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="mb-7 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Naš pristup</p>
            <h2 className="font-serif font-bold leading-[1] mb-10" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}>
              Premium. Precizno.<br /><span className="italic font-normal">Personalizovano.</span>
            </h2>
            {[{ t: 'Svež sushi', d: 'Isključivo sveže, pažljivo odabrani sastojci za svaki event.' }, { t: 'Profesionalna ekipa', d: 'Iskusni tim koji zna kako da isporuči savršen event.' }, { t: 'Kompletna usluga', d: 'Mi se brinemo za sve — ti se brineš o gostima.' }].map((item) => (
              <div key={item.t} className="border-b border-stone-200 pb-6 mb-6">
                <h4 className="font-serif font-bold text-[1.1rem] text-[#111111] mb-2">{item.t}</h4>
                <p className="text-[15px] font-light leading-[1.65] text-black/74">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#F0EDE7] text-center">
        <p className="mb-7 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Radimo zajedno?</p>
        <h2 className="font-serif font-bold text-[#111111] mb-12 leading-[1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
          Planiraš <span className="italic font-normal">sushi event?</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <button onClick={() => navigate('/kontakt')} className="bg-[#111111] text-white text-[12px] uppercase tracking-[0.18em] px-12 py-4 rounded-full hover:bg-[#C44F6E] transition-colors font-light">Zatraži ponudu</button>
          <button onClick={() => navigate('/ketering-proslave')} className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-stone-600 hover:text-[#C44F6E] transition-colors font-light">
            Pogledaj opcije <ArrowRight size={12} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
