import { Bike, Fish, Gift, MapPin, ShieldCheck, Sparkles, Sprout } from 'lucide-react';
import { navigate } from '../lib/router';
import heroSushiBrandBg from '../assets/hero-sushi-brand-bg.png';
import heroSushiNigiri from '../assets/hero-sushi-nigiri.png';
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
    <div className="min-h-screen overflow-x-hidden bg-[#edf5ff]">
      <main className="px-6 pb-24 pt-6 sm:pt-8">
        <section
          className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#1f1f22] bg-cover bg-center px-6 py-14 shadow-[0_30px_70px_rgba(23,27,34,0.18)] sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          style={{ backgroundImage: `linear-gradient(rgba(18,18,20,0.76), rgba(18,18,20,0.76)), url(${heroSushiBrandBg})` }}
        >
          <div className="mx-auto max-w-[1320px]">
            <div className="relative z-20 mb-10 flex items-center justify-between gap-4">
              <button
                onClick={() => navigate('/')}
                className="rounded-full border border-white/12 bg-white/6 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/86 transition-colors hover:bg-white/10"
              >
                Nazad na catering
              </button>
              <button
                onClick={() => navigate('/kontakt')}
                className="rounded-full border border-white/12 bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111111] transition-colors hover:bg-[#f2f2f2]"
              >
                Kontakt
              </button>
            </div>

            <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="pt-2">
                <h1 className="font-sans text-[4.5rem] font-black uppercase leading-[0.84] tracking-[-0.08em] text-white sm:text-[5.8rem] lg:text-[7.5rem]">
                  sushi
                  <span className="block">panda</span>
                </h1>
                <p className="mt-6 max-w-[20rem] text-[18px] font-semibold leading-[1.45] text-white/88 sm:text-[20px]">
                  Premium servis dostave sushija nove generacije u Srbiji.
                </p>
              </div>

              <div className="flex justify-start lg:justify-end">
                <div className="max-w-[26rem]">
                  <p className="font-sans text-[1.9rem] font-black uppercase leading-[0.96] tracking-[-0.06em] text-white sm:text-[2.8rem]">
                    Osnovan u
                  </p>
                  <p className="mt-1 font-sans text-[4.4rem] font-black leading-[0.88] tracking-[-0.08em] text-white sm:text-[5.8rem]">
                    2025
                  </p>
                  <p className="font-sans text-[2.2rem] font-black uppercase leading-[0.96] tracking-[-0.06em] text-white sm:text-[3.1rem]">
                    godine u Srbiji
                  </p>

                  <div className="mt-10">
                    <p className="font-sans text-[3.2rem] font-black leading-[0.9] tracking-[-0.08em] text-white sm:text-[4.5rem]">
                      već u
                    </p>
                    <div className="mt-1 flex items-end gap-3">
                      <span className="font-sans text-[4.8rem] font-black leading-[0.84] tracking-[-0.08em] text-white sm:text-[6.4rem]">
                        3
                      </span>
                      <span className="pb-2 font-sans text-[1.35rem] font-black uppercase leading-[1] tracking-[-0.04em] text-white sm:text-[1.7rem]">
                        grada
                      </span>
                    </div>
                    <p className="mt-3 max-w-[18rem] text-[16px] font-semibold leading-[1.5] text-white/78">
                      Kragujevac, Kraljevo i Jagodina.
                    </p>
                  </div>
                </div>
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

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { value: '2025', label: 'početak Panda priče' },
                  { value: '3', label: 'aktivna grada' },
                  { value: 'Srbija', label: 'prvo tržište rasta' },
                ].map((item) => (
                  <div key={item.label} className="rounded-[28px] border border-[#dce8f5] bg-[#f8fbff] px-5 py-5">
                    <p className="font-sans text-[2rem] font-black leading-none tracking-[-0.05em] text-[#111111]">{item.value}</p>
                    <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.18em] text-stone-400">{item.label}</p>
                  </div>
                ))}
              </div>
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
