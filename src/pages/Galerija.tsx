import Header from '../components/Header';
import Footer from '../components/Footer';
import { navigate } from '../lib/router';

const images = [
  { src: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1200', size: 'large' },
  { src: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'normal' },
  { src: 'https://images.pexels.com/photos/1148087/pexels-photo-1148087.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'normal' },
  { src: 'https://images.pexels.com/photos/3475610/pexels-photo-3475610.jpeg?auto=compress&cs=tinysrgb&w=900', size: 'tall' },
  { src: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'normal' },
  { src: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'normal' },
  { src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'wide' },
  { src: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'normal' },
  { src: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600', size: 'normal' },
];

export default function Galerija() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-x-hidden">
      <Header />

      <section className="relative min-h-[430px] overflow-hidden bg-[#f7f5f2] px-6 pt-32 pb-20 lg:min-h-[470px] lg:pt-36 lg:pb-24">
        <div className="absolute top-0 left-[-100px] w-[500px] h-[600px] bg-sp-blob pointer-events-none select-none" style={{ borderRadius: '50%' }} />
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10 relative z-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="mb-4 text-[12px] uppercase tracking-[0.18em] text-stone-500 font-light">Vizual</p>
              <h1 className="font-serif font-bold leading-[0.88]" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', letterSpacing: '-0.03em' }}>
                Galerija
              </h1>
            </div>
            <p className="hidden max-w-xs text-right text-[15px] font-light leading-[1.65] text-stone-600 sm:block">
              Sushi ketering prezentacije i<br />premium vizuali iz naše prakse.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-28 px-6">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
            {images.map((img, i) => (
              <div key={i} className={`break-inside-avoid overflow-hidden bg-stone-200 ${img.size === 'large' ? 'aspect-[4/3]' : img.size === 'tall' ? 'aspect-[3/4]' : img.size === 'wide' ? 'aspect-[16/9]' : 'aspect-square'}`} style={{ borderRadius: '16px' }}>
                <img src={img.src} alt={`Sushi Panda ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#111111] text-center relative overflow-hidden">
        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-serif text-[200px] leading-none text-sp-kanji/6 pointer-events-none select-none">寿</span>
        <div className="relative z-10">
          <p className="mb-8 text-[12px] uppercase tracking-[0.18em] text-stone-400 font-light">Impresioniran?</p>
          <h2 className="font-serif font-bold text-white mb-10 leading-[1]" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', letterSpacing: '-0.02em' }}>
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
