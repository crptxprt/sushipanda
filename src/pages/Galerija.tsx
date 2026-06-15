import Header from '../components/Header';
import Footer from '../components/Footer';
import { navigate } from '../lib/router';
import gallery01 from '../assets/gallery/gallery-01.avif';
import gallery02 from '../assets/gallery/gallery-02.avif';
import gallery04 from '../assets/gallery/gallery-04.avif';
import gallery05 from '../assets/gallery/gallery-05.avif';
import gallery06 from '../assets/gallery/gallery-06.avif';
import gallery07 from '../assets/gallery/gallery-07.avif';
import gallery08 from '../assets/gallery/gallery-08.avif';
import gallery09 from '../assets/gallery/gallery-09.avif';

const images = [
  {
    src: gallery01,
    alt: 'Elegant Sushi Panda serving on a bright marble table',
    className: 'aspect-[4/3] md:aspect-[16/10] xl:col-span-7 xl:row-span-5',
    imageClassName: 'object-[62%_52%]',
  },
  {
    src: gallery05,
    alt: 'Signature catering platter filled with premium sushi rolls',
    className: 'aspect-[4/5] xl:col-span-5 xl:row-span-5',
    imageClassName: 'object-center',
  },
  {
    src: gallery04,
    alt: 'Refined sushi selection presented in a dark editorial close-up',
    className: 'aspect-[4/3] xl:col-span-4 xl:row-span-4',
    imageClassName: 'object-center',
  },
  {
    src: gallery02,
    alt: 'Colorful Sushi Panda rolls served in intimate evening light',
    className: 'aspect-[3/4] xl:col-span-3 xl:row-span-4',
    imageClassName: 'object-center',
  },
  {
    src: gallery07,
    alt: 'Sushi catering arranged for a festive table setting',
    className: 'aspect-[4/5] xl:col-span-5 xl:row-span-4',
    imageClassName: 'object-center',
  },
  {
    src: gallery08,
    alt: 'Guests enjoying Sushi Panda catering during an event',
    className: 'aspect-[16/10] xl:col-span-5 xl:row-span-4',
    imageClassName: 'object-center',
  },
  {
    src: gallery06,
    alt: 'Minimal sushi plate with soy detail in soft natural light',
    className: 'aspect-[4/3] xl:col-span-4 xl:row-span-4',
    imageClassName: 'object-center',
  },
  {
    src: gallery09,
    alt: 'A generous Sushi Panda selection packaged for private gatherings',
    className: 'aspect-[3/4] xl:col-span-3 xl:row-span-4',
    imageClassName: 'object-center',
  },
];

export default function Galerija() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-x-hidden">
      <Header />

      <section className="relative min-h-[430px] overflow-hidden bg-[#f7f5f2] px-6 pt-32 pb-20 lg:min-h-[470px] lg:pt-36 lg:pb-24">
        <div className="absolute top-0 left-[-100px] w-[500px] h-[600px] bg-sp-blob pointer-events-none select-none" style={{ borderRadius: '50%' }} />
        <div className="relative z-10 mx-auto flex h-full max-w-[1320px] items-end px-4 lg:px-10">
          <div className="max-w-[44rem] pb-2">
            <p className="editorial-kicker mb-5 text-stone-500">Vizual</p>
            <h1 className="inner-hero-display">
              Galerija
            </h1>
            <p className="mt-6 max-w-[31rem] text-[16px] font-light leading-[1.7] text-stone-600 sm:text-[17px]">
              Premium sushi ketering vizuali iz naše prakse.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-28 px-6">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <div className="mb-14 flex flex-col gap-6 border-b border-stone-200/90 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[30rem]">
              <p className="editorial-kicker mb-4 text-stone-500">Odabrani kadrovi</p>
              <p className="text-[15px] font-light leading-[1.9] text-stone-600 sm:text-[16px]">
                Ketering koji izgleda čisto, bogato i spremno za događaj. Fokus je na serviranju,
                atmosferi i detaljima koji prave premium utisak.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-left sm:grid-cols-3">
              {[
                { value: 'Privatne proslave', label: 'postavka i posluženje' },
                { value: 'Korporativni eventi', label: 'precizan vizuelni ritam' },
                { value: 'Premium detalji', label: 'sushi kao centerpiece' },
              ].map((item) => (
                <div key={item.value}>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400">{item.label}</p>
                  <p className="mt-2 font-serif text-[22px] italic leading-none text-stone-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:auto-rows-[96px] xl:grid-cols-12 xl:gap-5">
            {images.map((img, i) => (
              <div
                key={i}
                className={`group overflow-hidden bg-stone-200 shadow-[0_22px_50px_rgba(28,25,23,0.08)] ${img.className}`}
                style={{ borderRadius: '22px' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${img.imageClassName}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#111111] text-center relative overflow-hidden">
        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-serif text-[200px] leading-none text-sp-kanji/6 pointer-events-none select-none">寿</span>
        <div className="relative z-10">
          <p className="editorial-kicker mb-8 text-stone-400">Impresioniran?</p>
          <h2 className="section-display-medium text-white mb-10">
            Organizujmo tvoj<br /><span className="italic font-normal">sushi event</span>
          </h2>
          <button onClick={() => navigate('/kontakt')} className="bg-[#C44F6E] text-white text-[12px] uppercase tracking-[0.18em] px-12 py-4 rounded-full hover:bg-[#D8748D] transition-colors font-light">
            Zatraži ponudu
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
