import { Bike, Fish, Gift, MapPin, ShieldCheck, Sparkles, Sprout } from 'lucide-react';
import heroSushiNigiri from '../assets/hero-sushi-nigiri.png';
import pandaSymbolColor from '../assets/panda-sushi-symbol-color.png';
import pandaWordmarkColor from '../assets/panda-sushi-wordmark-color.png';
import galleryChefAction from '../assets/gallery-chef-action.jpeg';
import galleryDetailIngredients from '../assets/gallery-detail-ingredients.png';
import galleryLiveEvent from '../assets/gallery-live-event.jpg';

const philosophyItems = [
  {
    icon: Sprout,
    title: 'Sveže svaki dan',
    description: 'Biramo sastojke koji čuvaju čist ukus i sigurnost u svakoj porudžbini.',
  },
  {
    icon: Fish,
    title: 'Velike porcije',
    description: 'Naši rollovi treba da izgledaju bogato, uredno i da zaista zasite.',
  },
  {
    icon: Bike,
    title: 'Brza dostava',
    description: 'Gradimo servis koji ostaje jednostavan, jasan i brz za svakodnevni ritam grada.',
  },
  {
    icon: ShieldCheck,
    title: 'Kvalitet bez kompromisa',
    description: 'Od teksture pirinča do završnog pakovanja, detalji moraju da budu dosledni.',
  },
  {
    icon: Gift,
    title: 'Lokalni brend',
    description: 'Rastemo pažljivo, grad po grad, sa osećajem da Panda pripada lokalnoj sceni.',
  },
  {
    icon: Sparkles,
    title: 'Savremen doživljaj',
    description: 'Pored ukusa važni su i dizajn, atmosfera, jasna komunikacija i osećaj brenda.',
  },
];

const ingredientCards = [
  {
    title: 'Losos',
    description: 'Mekan, pun i čist ukus koji daje premium ton velikom delu menija.',
    image: galleryChefAction,
  },
  {
    title: 'Tuna',
    description: 'Bogata i izražajna nota za kombinacije koje traže dublji karakter.',
    image: galleryLiveEvent,
  },
  {
    title: 'Nori',
    description: 'Tanki listovi koji povezuju roll i dodaju prepoznatljiv miris mora.',
    image: galleryDetailIngredients,
  },
  {
    title: 'Avokado',
    description: 'Kremast i blag, donosi mekoću i balans između svežih i jačih ukusa.',
    image: heroSushiNigiri,
  },
  {
    title: 'Krem sir',
    description: 'Za punoću i glatku teksturu bez potiskivanja ostalih sastojaka.',
    image: galleryChefAction,
  },
  {
    title: 'Pirinač',
    description: 'Osnova svakog dobrog sushija, kuvan precizno da ostane mekan i postojan.',
    image: galleryLiveEvent,
  },
];

const cities = [
  {
    name: 'Kragujevac',
    status: 'Aktivno',
    description: 'Grad u kojem je Panda počela svoju priču i gde brend već ima svoj ritam.',
    tone: 'active',
  },
  {
    name: 'Kraljevo',
    status: 'Aktivno',
    description: 'Drugi grad u kom Panda raste uz isti fokus na ukus, brzinu i vizuelni standard.',
    tone: 'active',
  },
  {
    name: 'Jagodina',
    status: 'Aktivno',
    description: 'Treći grad u kome Panda već gradi prisustvo i prepoznatljiv vizuelni identitet.',
    tone: 'active',
  },
];

function SerbiaOutline() {
  const pins = [
    { label: 'Kragujevac', top: '57%', left: '46%', tone: 'active' },
    { label: 'Kraljevo', top: '65%', left: '36%', tone: 'active' },
    { label: 'Jagodina', top: '49%', left: '55%', tone: 'active' },
  ];

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white px-6 py-8 shadow-[0_18px_40px_rgba(96,129,164,0.08)]">
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(246,250,255,0.9),transparent)]" />

      <div className="relative mx-auto max-w-[390px]">
        <svg viewBox="0 0 420 540" className="mx-auto w-full max-w-[330px]" aria-hidden="true">
          <path
            d="M190 18L225 34L252 67L285 82L300 112L292 146L316 180L309 212L330 246L319 283L293 315L296 355L277 393L284 430L266 460L236 478L210 519L176 506L155 472L126 461L112 430L88 398L93 359L72 331L78 291L60 257L75 223L101 199L100 162L128 132L143 98L168 83L176 50L190 18Z"
            fill="#ffffff"
            stroke="#d7e4f2"
            strokeWidth="8"
            strokeLinejoin="round"
          />
        </svg>

        {pins.map((pin) => (
          <div
            key={pin.label}
            className="absolute"
            style={{ top: pin.top, left: pin.left, transform: 'translate(-50%, -50%)' }}
          >
            <div className="flex flex-col items-start gap-2">
              <span
                className={`h-4 w-4 rounded-full border-2 border-white shadow-[0_6px_16px_rgba(104,125,147,0.18)] ${
                  pin.tone === 'active' ? 'bg-[#d35d7b]' : 'bg-[#9caec6]'
                }`}
              />
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500 shadow-[0_10px_26px_rgba(104,125,147,0.10)]">
                {pin.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SushiPanda() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f8fc]">
      <main className="px-6 pb-24 pt-0">
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="relative grid min-h-[84vh] items-center gap-10 lg:grid-cols-[0.44fr_0.56fr]">
              <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
                <img src={pandaSymbolColor} alt="" className="absolute left-[34%] top-[34%] w-24 opacity-[0.04]" />
                <img src={pandaSymbolColor} alt="" className="absolute right-[8%] bottom-[18%] w-16 opacity-[0.04]" />
                <img src={pandaSymbolColor} alt="" className="absolute left-[6%] bottom-[26%] w-14 opacity-[0.04]" />
              </div>

              <div className="relative z-10 max-w-[38rem] py-4 lg:-translate-y-[100px] lg:py-8">
                <h1 className="font-sans text-[4.4rem] font-black uppercase leading-[0.82] tracking-[-0.085em] text-[#111111] sm:text-[5.8rem] lg:text-[8.2rem]">
                  SUSHI
                  <span className="block">PANDA</span>
                </h1>
                <p className="mt-6 max-w-[25rem] text-[18px] font-semibold leading-[1.5] text-black/72 sm:text-[20px]">
                  Premijalna sushi dostava
                  <br />
                  u Srbiji
                </p>

                <div className="mt-10 space-y-6">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/42">
                      Osnovan u Srbiji
                    </p>
                    <p className="mt-2 font-sans text-[4rem] font-black leading-[0.86] tracking-[-0.08em] text-[#111111] sm:text-[5rem]">
                      2025
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/42">
                      Već u 3 grada
                    </p>
                    <p className="mt-2 text-[15px] font-semibold leading-[1.5] text-black/58 sm:text-[16px]">
                      Kragujevac · Kraljevo · Jagodina
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block" />

              <div className="pointer-events-none absolute right-[-240px] top-[41%] z-0 h-[380px] w-[380px] -translate-y-1/2 sm:right-[-300px] sm:h-[470px] sm:w-[470px] lg:right-[-560px] lg:top-[38%] lg:h-[860px] lg:w-[860px] xl:right-[-620px] xl:h-[930px] xl:w-[930px] 2xl:right-[-690px] 2xl:h-[990px] 2xl:w-[990px]">
                <div className="absolute left-[18%] right-[26%] bottom-[9%] h-20 rounded-[999px] bg-black/10 blur-[34px]" />
                <img
                  src={pandaSymbolColor}
                  alt="Sushi Panda mascot"
                  className="absolute inset-0 h-full w-full object-contain object-center drop-shadow-[0_30px_44px_rgba(0,0,0,0.16)]"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-10 max-w-[1320px]">
          <section className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[36px] border border-white/75 bg-white px-8 py-8 shadow-[0_20px_48px_rgba(103,131,160,0.08)] sm:px-10 sm:py-10">
              <div className="flex min-h-[360px] items-center justify-center rounded-[999px] bg-[linear-gradient(180deg,#f7fbff_0%,#e9f1fb_100%)] shadow-[inset_0_0_0_1px_rgba(217,231,245,0.85)]">
                <img src={pandaWordmarkColor} alt="Panda Sushi" className="w-[230px] max-w-full object-contain" />
              </div>
            </div>

            <div className="rounded-[36px] border border-white/75 bg-white px-8 py-8 shadow-[0_20px_48px_rgba(103,131,160,0.08)] sm:px-10 sm:py-10">
              <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.24em] text-stone-400">O brendu</p>
              <h2 className="max-w-[12ch] font-sans text-[2.7rem] font-black leading-[0.96] tracking-[-0.05em] text-[#111111] sm:text-[3.8rem]">
                Mladi brend sa velikim ambicijama
              </h2>
              <p className="mt-6 max-w-[40rem] text-[16px] font-medium leading-[1.72] text-stone-700">
                Panda Sushi je nova generacija sushi dostave u Srbiji: vizuelno čist, moderan i lokalno ukorenjen brend koji spaja japansku disciplinu sa svakodnevnim uživanjem u gradu.
              </p>
              <p className="mt-4 max-w-[40rem] text-[16px] font-medium leading-[1.72] text-stone-700">
                Počeli smo u Kragujevcu, širimo se pažljivo i gradimo mrežu grad po grad, bez žurbe i bez kompromisa oko kvaliteta.
              </p>

            </div>
          </section>

          <section className="mt-20">
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.24em] text-stone-400">Panda filozofija</p>
            <h2 className="max-w-[10ch] font-sans text-[2.7rem] font-black leading-[0.96] tracking-[-0.05em] text-[#111111] sm:text-[4rem]">
              Šta nas izdvaja
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {philosophyItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[30px] border border-white/75 bg-white px-7 py-7 shadow-[0_18px_40px_rgba(103,131,160,0.08)]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#dce8f5] bg-[#f6faff] text-[#d35d7b]">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-6 font-sans text-[2rem] font-black leading-[0.98] tracking-[-0.04em] text-[#111111]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] font-medium leading-[1.72] text-stone-700">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="mt-20">
            <div className="grid gap-6 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
              <div>
                <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.24em] text-stone-400">Šta koristimo</p>
                <h2 className="max-w-[10ch] font-sans text-[2.7rem] font-black leading-[0.96] tracking-[-0.05em] text-[#111111] sm:text-[4rem]">
                  Sastojci koji grade naš ukus
                </h2>
              </div>
              <p className="text-[16px] font-medium leading-[1.8] text-stone-700 lg:pt-5">
                Ne gradimo meni na komplikaciji, već na jasnim ukusima, urednoj teksturi i sastojcima koji mogu da iznesu premium doživljaj.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {ingredientCards.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[30px] border border-white/75 bg-white shadow-[0_18px_40px_rgba(103,131,160,0.08)]"
                >
                  <div className="h-[260px] overflow-hidden bg-[#eef5fe]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="px-7 py-7">
                    <h3 className="font-sans text-[2rem] font-black leading-[0.98] tracking-[-0.04em] text-[#111111]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] font-medium leading-[1.72] text-stone-700">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.24em] text-stone-400">Naši gradovi</p>
            <h2 className="max-w-[10ch] font-sans text-[2.7rem] font-black leading-[0.96] tracking-[-0.05em] text-[#111111] sm:text-[4rem]">
              Gde Panda već ima svoju priču
            </h2>
            <p className="mt-5 max-w-[42rem] text-[16px] font-medium leading-[1.8] text-stone-700">
              Počeli smo u Kragujevcu, već širimo prisustvo i gradimo prepoznatljiv Panda ritam u novim gradovima širom Srbije.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.58fr_0.42fr]">
              <SerbiaOutline />

              <div className="flex flex-col gap-5">
                {cities.map((city) => (
                  <article
                    key={city.name}
                    className="rounded-[30px] border border-white/75 bg-white px-7 py-7 shadow-[0_18px_40px_rgba(103,131,160,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-sans text-[2rem] font-black leading-[0.98] tracking-[-0.04em] text-[#111111]">
                          {city.name}
                        </h3>
                        <p className="mt-3 max-w-[26rem] text-[15px] font-medium leading-[1.72] text-stone-700">
                          {city.description}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] ${
                          city.tone === 'active'
                            ? 'bg-[#eef5ec] text-[#82a27d]'
                            : 'bg-[#f4f7fb] text-[#93a4ba]'
                        }`}
                      >
                        {city.status}
                      </span>
                    </div>
                  </article>
                ))}

                <article className="rounded-[30px] border border-white/75 bg-white px-7 py-7 shadow-[0_18px_40px_rgba(103,131,160,0.08)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-[#dce8f5] bg-[#f7fbff] text-[#d35d7b]">
                      <MapPin size={22} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-sans text-[2rem] font-black leading-[0.98] tracking-[-0.04em] text-[#111111]">
                        Širimo mrežu pažljivo
                      </h3>
                      <p className="mt-4 text-[15px] font-medium leading-[1.72] text-stone-700">
                        Ne jurimo broj lokacija. Važnije nam je da svaki novi grad dobije isti Panda standard, ritam usluge i kvalitet proizvoda.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
