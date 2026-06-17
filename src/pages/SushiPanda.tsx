import {
  ArrowRight,
  Bike,
  Fish,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  TimerReset,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { navigate } from '../lib/router';
import heroSushiNigiri from '../assets/hero-sushi-nigiri.png';
import pandaWordmarkColor from '../assets/panda-sushi-wordmark-color.png';
import galleryChefAction from '../assets/gallery-chef-action.jpeg';
import galleryDetailIngredients from '../assets/gallery-detail-ingredients.png';
import galleryLiveEvent from '../assets/gallery-live-event.jpg';

const brandValues = [
  {
    icon: Leaf,
    title: 'Sveže svaki dan',
    description: 'Priprema počinje od pažljivo odabranih sastojaka i ritma koji čuva kvalitet.',
  },
  {
    icon: Fish,
    title: 'Velike porcije',
    description: 'Panda porcije treba da izgledaju bogato, uredno i da zaista zasite.',
  },
  {
    icon: Bike,
    title: 'Brza dostava',
    description: 'Gradimo servis koji je jednostavan, pouzdan i brz kada je najpotrebnije.',
  },
  {
    icon: ShieldCheck,
    title: 'Kvalitet bez kompromisa',
    description: 'Ukus, tekstura i prezentacija moraju da ostanu dosledni u svakoj porudžbini.',
  },
  {
    icon: MapPin,
    title: 'Lokalni tim',
    description: 'Rastemo grad po grad, sa fokusom na lokalnu uslugu i blizak odnos sa gostima.',
  },
  {
    icon: Sparkles,
    title: 'Stalne inovacije',
    description: 'Novi ukusi, nove kombinacije i savremen vizuelni identitet brenda.',
  },
];

const ingredients = [
  {
    title: 'Losos',
    copy: 'Čist ukus i mekana tekstura koji nose premium karakter celog menija.',
    image: galleryChefAction,
  },
  {
    title: 'Tuna',
    copy: 'Bogata i izražajna, za role i kombinacije koje traže dublji ukus.',
    image: galleryLiveEvent,
  },
  {
    title: 'Nori',
    copy: 'Tanki listovi koji daju strukturu, miris mora i uredno zatvaraju svaki roll.',
    image: galleryDetailIngredients,
  },
  {
    title: 'Avokado',
    copy: 'Kremast, blag i svež, pravi balans između bogatih i čistih nota.',
    image: heroSushiNigiri,
  },
  {
    title: 'Krem sir',
    copy: 'Dodaje mekoću i punoću ukusa bez preuzimanja glavne uloge u zalogaju.',
    image: galleryChefAction,
  },
  {
    title: 'Pirinač',
    copy: 'Osnova svakog dobrog sushija, precizno kuvan da ostane mekan i postojan.',
    image: galleryLiveEvent,
  },
];

const cityStatuses = [
  { city: 'Kragujevac', status: 'Aktivno', tone: 'active' as const },
  { city: 'Kraljevo', status: 'Aktivno', tone: 'active' as const },
  { city: 'Jagodina', status: 'Uskoro', tone: 'soon' as const },
];

const stats = [
  { value: '2024', label: 'početak Panda priče' },
  { value: '2', label: 'aktivna grada' },
  { value: '1', label: 'grad uskoro' },
];

function SerbiaMap() {
  const pins = [
    { city: 'Kragujevac', status: 'aktivno', top: '52%', left: '47%' },
    { city: 'Kraljevo', status: 'aktivno', top: '58%', left: '38%' },
    { city: 'Jagodina', status: 'uskoro', top: '43%', left: '54%' },
  ];

  return (
    <div className="relative overflow-hidden rounded-[34px] border border-[#dbe6f2] bg-[linear-gradient(180deg,#f8fbff_0%,#eef5fb_100%)] px-6 py-8 shadow-[0_24px_60px_rgba(95,126,156,0.10)] sm:px-10 sm:py-10">
      <div className="absolute left-[8%] top-[12%] h-24 w-24 rounded-full bg-white/60 blur-2xl" />
      <div className="absolute right-[12%] bottom-[8%] h-28 w-28 rounded-full bg-[#d6e7f8]/60 blur-3xl" />

      <div className="relative mx-auto max-w-[720px]">
        <svg viewBox="0 0 420 540" className="mx-auto w-full max-w-[360px] sm:max-w-[420px]" aria-hidden="true">
          <path
            d="M190 18L225 34L252 67L285 82L300 112L292 146L316 180L309 212L330 246L319 283L293 315L296 355L277 393L284 430L266 460L236 478L210 519L176 506L155 472L126 461L112 430L88 398L93 359L72 331L78 291L60 257L75 223L101 199L100 162L128 132L143 98L168 83L176 50L190 18Z"
            fill="#ffffff"
            stroke="#d6e2ef"
            strokeWidth="8"
            strokeLinejoin="round"
          />
        </svg>

        {pins.map((pin) => (
          <div
            key={pin.city}
            className="absolute"
            style={{ top: pin.top, left: pin.left, transform: 'translate(-50%, -50%)' }}
          >
            <div className="relative flex flex-col items-center gap-2">
              <span
                className={`flex h-4 w-4 rounded-full border-2 border-white shadow-[0_6px_16px_rgba(95,126,156,0.24)] ${
                  pin.status === 'aktivno' ? 'bg-[#C44F6E]' : 'bg-[#9fb3c9]'
                }`}
              />
              <div className="rounded-full border border-white/80 bg-white/90 px-3 py-1 text-[11px] font-light uppercase tracking-[0.18em] text-stone-700 shadow-[0_12px_24px_rgba(110,132,154,0.14)]">
                {pin.city}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SushiPanda() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#edf4fb]">
      <Header />

      <section className="px-6 pt-28 pb-10 sm:pt-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 rounded-[42px] border border-white/80 bg-[#ffffffd9] px-7 py-8 shadow-[0_26px_70px_rgba(120,149,181,0.12)] backdrop-blur-sm lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-12 lg:py-12">
            <div className="order-2 lg:order-1">
              <p className="editorial-kicker mb-5 text-stone-500">Sushi Panda</p>
              <h1 className="section-display-medium max-w-[12ch] text-[#111111]">
                Premium sushi priča
                <span className="block italic font-normal">iz srca Srbije</span>
              </h1>
              <p className="mt-6 max-w-[34rem] text-[16px] font-light leading-[1.78] text-black/70 sm:text-[17px]">
                Panda Sushi gradimo kao savremen lokalni brend: čist ukus, bogate porcije,
                pažljivo osmišljen meni i iskustvo koje ostaje jednostavno i prijatno od prvog klika do poslednjeg zalogaja.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Kragujevac', 'Kraljevo', 'Jagodina uskoro'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#d9e6f3] bg-[#f7fbff] px-4 py-2 text-[11px] font-light uppercase tracking-[0.2em] text-stone-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('/kontakt')}
                  className="rounded-full bg-[#111111] px-9 py-4 text-[12px] font-light uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#C44F6E]"
                >
                  Kontaktiraj nas
                </button>
                <button
                  onClick={() => navigate('/galerija')}
                  className="group inline-flex items-center gap-3 text-[12px] font-light uppercase tracking-[0.18em] text-stone-600 transition-colors hover:text-[#111111]"
                >
                  Pogledaj vizuelni svet
                  <ArrowRight size={12} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="order-1 flex items-center justify-center lg:order-2">
              <div className="relative flex h-[360px] w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[42px] bg-[radial-gradient(circle_at_68%_32%,rgba(255,255,255,0.95),rgba(255,255,255,0.66)_34%,rgba(221,232,244,0.72)_35%,rgba(221,232,244,0.2)_65%,transparent_66%),linear-gradient(180deg,#f9fcff_0%,#edf4fb_100%)] px-6 py-8 sm:h-[420px]">
                <div className="absolute left-[10%] top-[12%] rounded-full border border-[#d9e7f2] bg-white/90 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-stone-500 shadow-[0_12px_30px_rgba(124,147,169,0.12)]">
                  Brend koji raste
                </div>
                <div className="absolute right-[9%] bottom-[14%] rounded-full border border-[#d9e7f2] bg-white/90 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-stone-500 shadow-[0_12px_30px_rgba(124,147,169,0.12)]">
                  Premium dostava
                </div>
                <img src={heroSushiNigiri} alt="Sushi Panda" className="relative z-10 max-h-[95%] w-auto object-contain drop-shadow-[0_28px_60px_rgba(55,52,56,0.22)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex items-center justify-center rounded-[42px] border border-white/85 bg-white/80 px-8 py-10 shadow-[0_24px_60px_rgba(120,149,181,0.10)]">
            <div className="flex h-[240px] w-[240px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#f5faff_0%,#e8f1fb_100%)] shadow-[inset_0_0_0_1px_rgba(214,227,241,0.8)]">
              <img src={pandaWordmarkColor} alt="Sushi Panda" className="w-[170px] object-contain" />
            </div>
          </div>

          <div className="rounded-[42px] border border-white/85 bg-white/80 px-8 py-10 shadow-[0_24px_60px_rgba(120,149,181,0.10)] lg:px-12">
            <p className="editorial-kicker mb-5 text-stone-500">O brendu</p>
            <h2 className="section-display-small max-w-[12ch] text-[#111111]">
              Mladi brend sa
              <span className="block italic font-normal">velikim ambicijama</span>
            </h2>
            <p className="mt-6 max-w-[36rem] text-[16px] font-light leading-[1.78] text-black/70">
              Panda Sushi je zamišljen kao nova generacija sushi dostave u Srbiji: vizuelno čist,
              moderan i lokalno ukorenjen brend koji spaja japansku disciplinu sa svakodnevnim uživanjem u gradu.
            </p>
            <p className="mt-5 max-w-[36rem] text-[16px] font-light leading-[1.78] text-black/66">
              Počeli smo u Kragujevcu, širimo se pažljivo i gradimo mrežu grad po grad, bez žurbe i bez kompromisa oko kvaliteta.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[26px] border border-[#deebf6] bg-[#f8fbff] px-5 py-5">
                  <p className="font-serif text-[2rem] leading-none tracking-[-0.04em] text-[#111111]">{stat.value}</p>
                  <p className="mt-2 text-[12px] font-light uppercase tracking-[0.18em] text-stone-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10">
            <p className="editorial-kicker mb-5 text-stone-500">Panda filozofija</p>
            <h2 className="section-display-small text-[#111111]">
              Šta nas <span className="italic font-normal">izdvaja</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {brandValues.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[30px] border border-white/85 bg-white/80 px-6 py-6 shadow-[0_22px_50px_rgba(120,149,181,0.09)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#f8fbff_0%,#e9f2fb_100%)] text-[#C44F6E] shadow-[inset_0_0_0_1px_rgba(216,230,243,0.8)]">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 serif-card-title text-[#111111]">{item.title}</h3>
                  <p className="mt-3 text-[15px] font-light leading-[1.72] text-black/66">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="editorial-kicker mb-5 text-stone-500">Šta koristimo</p>
              <h2 className="section-display-small text-[#111111]">
                Sastojci koji grade
                <span className="block italic font-normal">naš ukus</span>
              </h2>
            </div>
            <p className="max-w-[34rem] text-[16px] font-light leading-[1.76] text-black/66">
              Ne gradimo meni na komplikaciji, već na jasnim ukusima, urednoj teksturi i sastojcima koji mogu da iznesu premium doživljaj.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {ingredients.map((ingredient) => (
              <article
                key={ingredient.title}
                className="overflow-hidden rounded-[30px] border border-white/85 bg-white/82 shadow-[0_22px_52px_rgba(120,149,181,0.10)]"
              >
                <div className="h-[220px] overflow-hidden bg-[#eff5fb]">
                  <img src={ingredient.image} alt={ingredient.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
                </div>
                <div className="px-6 py-6">
                  <h3 className="serif-card-title text-[#111111]">{ingredient.title}</h3>
                  <p className="mt-3 text-[15px] font-light leading-[1.72] text-black/66">{ingredient.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-12 pb-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10">
            <p className="editorial-kicker mb-5 text-stone-500">Naši gradovi</p>
            <h2 className="section-display-small text-[#111111]">
              Gde Panda već
              <span className="block italic font-normal">ima svoju priču</span>
            </h2>
            <p className="mt-5 max-w-[36rem] text-[16px] font-light leading-[1.76] text-black/66">
              Počeli smo u Kragujevcu, već širimo prisustvo i gradimo prepoznatljiv Panda ritam u novim gradovima širom Srbije.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <SerbiaMap />

            <div className="flex flex-col gap-5">
              {cityStatuses.map((item) => (
                <article
                  key={item.city}
                  className="rounded-[28px] border border-white/85 bg-white/82 px-6 py-6 shadow-[0_22px_52px_rgba(120,149,181,0.10)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="serif-card-title text-[#111111]">{item.city}</p>
                      <p className="mt-2 text-[14px] font-light leading-[1.7] text-black/62">
                        {item.tone === 'active'
                          ? 'Grad u kome Panda već gradi prepoznatljivo sushi iskustvo.'
                          : 'Sledeći grad u razvoju mreže, priprema za uskoro otvaranje.'}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-4 py-2 text-[11px] font-light uppercase tracking-[0.18em] ${
                        item.tone === 'active'
                          ? 'bg-[#eef5ec] text-[#557a53]'
                          : 'bg-[#f4f6fa] text-[#71829a]'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </article>
              ))}

              <div className="rounded-[30px] border border-white/85 bg-[linear-gradient(180deg,#ffffffd9_0%,#f5faff_100%)] px-7 py-7 shadow-[0_22px_52px_rgba(120,149,181,0.10)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#edf4fb] text-[#C44F6E]">
                    <TimerReset size={20} strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="serif-card-title text-[#111111]">Širimo mrežu pažljivo</p>
                    <p className="mt-3 text-[15px] font-light leading-[1.72] text-black/66">
                      Ne jurimo broj lokacija. Važnije nam je da svaki novi grad dobije isti Panda standard, ritam usluge i kvalitet proizvoda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
