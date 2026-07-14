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
import gallery10 from '../assets/gallery/gallery-10.jpg';

const images = [
  {
    src: gallery01,
    alt: 'Elegant Sushi Panda serving on a bright marble table',
    size: 'large',
    imageClassName: 'object-[62%_52%]',
  },
  {
    src: gallery05,
    alt: 'Signature catering platter filled with premium sushi rolls',
    size: 'tall',
    imageClassName: 'object-center',
  },
  {
    src: gallery04,
    alt: 'Refined sushi selection presented in a dark editorial close-up',
    size: 'wide',
    imageClassName: 'object-center',
  },
  {
    src: gallery02,
    alt: 'Colorful Sushi Panda rolls served in intimate evening light',
    size: 'normal',
    imageClassName: 'object-center',
  },
  {
    src: gallery07,
    alt: 'Sushi catering arranged for a festive table setting',
    size: 'tall',
    imageClassName: 'object-center',
  },
  {
    src: gallery08,
    alt: 'Guests enjoying Sushi Panda catering during an event',
    size: 'large',
    imageClassName: 'object-center',
  },
  {
    src: gallery06,
    alt: 'Minimal sushi plate with soy detail in soft natural light',
    size: 'wide',
    imageClassName: 'object-center',
  },
  {
    src: gallery09,
    alt: 'A generous Sushi Panda selection packaged for private gatherings',
    size: 'normal',
    imageClassName: 'object-[55%_50%]',
  },
  {
    src: gallery10,
    alt: 'Layered Sushi Panda selection presented in a clean premium box set',
    size: 'normal',
    imageClassName: 'object-center',
  },
];

export default function Galerija() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-x-hidden">
      <Header />

      <section className="relative min-h-[380px] overflow-hidden bg-[#f7f5f2] px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:min-h-[470px] lg:pt-36 lg:pb-24">
        <div className="absolute left-[-140px] top-0 h-[420px] w-[420px] bg-sp-blob pointer-events-none select-none sm:left-[-100px] sm:h-[600px] sm:w-[500px]" style={{ borderRadius: '50%' }} />
        <div className="relative z-10 mx-auto flex h-full max-w-[1320px] items-end px-0 lg:px-10">
          <div className="max-w-[44rem] pb-2">
            <p className="editorial-kicker mb-5 text-stone-500">Vizual</p>
            <h1 className="catering-hero-display">
              Galerija
            </h1>
            <p className="catering-body mt-6 max-w-[31rem] text-stone-600">
              Premium sushi ketering vizuali iz naše prakse.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1320px] px-0 lg:px-10">
          <div className="columns-1 gap-3 space-y-3 sm:columns-2 sm:gap-4 sm:space-y-4 lg:columns-3 lg:gap-5 lg:space-y-5">
            {images.map((img, i) => (
              <div
                key={i}
                className={`group break-inside-avoid overflow-hidden bg-stone-200 shadow-[0_18px_40px_rgba(28,25,23,0.07)] ${
                  img.size === 'large'
                    ? 'aspect-[4/3]'
                    : img.size === 'tall'
                      ? 'aspect-[4/5]'
                      : img.size === 'wide'
                        ? 'aspect-[16/10]'
                        : 'aspect-[5/6]'
                }`}
                style={{ borderRadius: '18px' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] ${img.imageClassName}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111111] px-4 py-20 text-center sm:px-6 sm:py-24">
        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-serif text-[200px] leading-none text-sp-kanji/6 pointer-events-none select-none">寿</span>
        <div className="relative z-10">
          <p className="editorial-kicker mb-8 text-stone-400">Impresioniran?</p>
          <h2 className="catering-section-display-medium text-white mb-10">
            Organizujmo tvoj<br /><span className="italic font-normal">sushi event</span>
          </h2>
          <button onClick={() => navigate('/kontakt')} className="bg-[#C44F6E] text-white text-[12px] uppercase tracking-[0.18em] px-12 py-4 rounded-full hover:bg-[#D8748D] transition-colors font-light">
            Zatraži ponudu
          </button>
        </div>
      </section>

      <Footer variant="catering" />
    </div>
  );
}
