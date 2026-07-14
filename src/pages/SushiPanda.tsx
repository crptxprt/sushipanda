import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Instagram, Phone } from 'lucide-react';
import { navigate } from '../lib/router';
import Footer from '../components/Footer';
import pandaHeroLogo from '../assets/panda-sushi-hero-logo.png';
import pandaHeroWordmark from '../assets/panda-sushi-hero-wordmark.png';
import pandaSerbiaMap from '../assets/panda-serbia-map.png';
import pandaMascotScooter from '../assets/panda-mascot-scooter-v2.png';
import pandaChefMascot from '../assets/panda-chef-mascot-v3.png';
import pandaSymbolColor from '../assets/panda-symbol-color.png';
import rollTuna from '../assets/rolltuna.png';
import woltGlovoHero from '../assets/wolt-glovo-hero.png';
import iconBrzaDostava from '../assets/panda-icons/brza-dostava.png';
import iconKvalitetBezKompromisa from '../assets/panda-icons/kvalitet-bez-kompromisa.png';
import iconLokalniBrend from '../assets/panda-icons/lokalni-brend.png';
import iconSavremenDozivljaj from '../assets/panda-icons/savremen-dozivljaj.png';
import iconSvezeSvakiDan from '../assets/panda-icons/sveze-svaki-dan.png';
import iconVelikePorcije from '../assets/panda-icons/velike-porcije.png';

const philosophyItems = [
  {
    icon: iconSvezeSvakiDan,
    iconClassName: 'w-[42px] scale-[3.1]',
    title: 'Sveže svaki dan',
    description: 'Biramo sastojke koji čuvaju čist ukus i sigurnost u svakoj porudžbini.',
  },
  {
    icon: iconVelikePorcije,
    iconClassName: 'w-[44px] scale-[3.2]',
    title: 'Velike porcije',
    description: 'Naši rollovi treba da izgledaju bogato, uredno i da zaista zasite.',
  },
  {
    icon: iconBrzaDostava,
    iconClassName: 'w-[44px] scale-[3.3]',
    title: 'Brza dostava',
    description: 'Gradimo servis koji ostaje jednostavan, jasan i brz za svakodnevni ritam grada.',
  },
  {
    icon: iconKvalitetBezKompromisa,
    iconClassName: 'w-[44px] scale-[3.1]',
    title: 'Kvalitet bez kompromisa',
    description: 'Od teksture pirinča do završnog pakovanja, detalji moraju da budu dosledni.',
  },
  {
    icon: iconLokalniBrend,
    iconClassName: 'w-[42px] scale-[3.1]',
    title: 'Lokalni brend',
    description: 'Rastemo pažljivo, grad po grad, sa osećajem da Panda pripada lokalnoj sceni.',
  },
  {
    icon: iconSavremenDozivljaj,
    iconClassName: 'w-[42px] scale-[3.15]',
    title: 'Savremen doživljaj',
    description: 'Pored ukusa važni su i dizajn, atmosfera, jasna komunikacija i osećaj brenda.',
  },
];

const journeyCities = [
  {
    value: 'kragujevac',
    name: 'KRAGUJEVAC',
    label: 'aktivno',
    top: '31%',
    left: '33%',
    delay: '180ms',
  },
  {
    value: 'kraljevo',
    name: 'KRALJEVO',
    label: 'aktivno',
    top: '55%',
    left: '20%',
    delay: '360ms',
  },
  {
    value: 'jagodina',
    name: 'JAGODINA',
    label: 'uskoro',
    top: '48%',
    left: '57%',
    delay: '540ms',
  },
] as const;

const navCities = [
  { label: 'Kragujevac', value: 'kragujevac', phone: '+381 66 594 2236', isActive: true },
  { label: 'Kraljevo', value: 'kraljevo', phone: '+381 64 658 3446', isActive: true },
  { label: 'Jagodina', value: 'jagodina', phone: '+38065000003', isActive: false },
] as const;

const journeyCardContent = {
  default: {
    title: '🐼 Jagodina',
    lines: ['Panda je već na putu.', 'Otvaranje uskoro.'],
  },
  kragujevac: {
    title: 'Kragujevac',
    lines: ['📞 066 5942236', 'Karađorđeva 47, Kragujevac 34104'],
  },
  kraljevo: {
    title: 'Kraljevo',
    lines: ['📞 064 6583446', 'Čika Ljubina 19, Kraljevo 36000'],
  },
  jagodina: {
    title: 'Jagodina',
    lines: ['🐼 Panda je već na putu.'],
  },
} as const;

export default function SushiPanda() {
  const [heroReady, setHeroReady] = useState(false);
  const [selectedCity, setSelectedCity] = useState<(typeof navCities)[number]['value']>('kragujevac');
  const [isCityMenuOpen, setIsCityMenuOpen] = useState(false);
  const [hoveredJourneyCity, setHoveredJourneyCity] = useState<(typeof journeyCities)[number]['value'] | null>(null);
  const [scooterBounceTick, setScooterBounceTick] = useState(0);
  const cityMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setHeroReady(true), 120);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!cityMenuRef.current?.contains(event.target as Node)) {
        setIsCityMenuOpen(false);
      }
    };

    window.addEventListener('mousedown', handlePointerDown);
    return () => window.removeEventListener('mousedown', handlePointerDown);
  }, []);

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0 });
  };

  const activeCity = navCities.find((city) => city.value === selectedCity) ?? navCities[0];
  const activeJourneyCard =
    hoveredJourneyCity != null
      ? journeyCardContent[hoveredJourneyCity]
      : journeyCardContent.default;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f8fc]">
      <main className="pb-0 pt-0">
        <section className="relative min-h-screen overflow-hidden bg-white lg:overflow-visible">
          <style>
            {`
              @keyframes pandaNotificationFloat {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-3px); }
              }

              @keyframes pandaScooterBob {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-4px); }
              }

              @keyframes pandaScooterNudge {
                0% { transform: translateY(0); }
                30% { transform: translateY(-5px); }
                60% { transform: translateY(1px); }
                100% { transform: translateY(0); }
              }

              @keyframes pandaSpeedLine {
                0% { opacity: 0; transform: translateX(-8px); }
                25% { opacity: 0.12; }
                100% { opacity: 0; transform: translateX(14px); }
              }

              @keyframes pandaShadowPulse {
                0%, 100% { transform: translateX(-50%) scaleX(1) scaleY(1); opacity: 0.16; }
                50% { transform: translateX(-50%) scaleX(0.97) scaleY(0.94); opacity: 0.12; }
              }

              @keyframes pandaIngredientFloat {
                0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
                50% { transform: translate3d(0, -8px, 0) rotate(4deg); }
              }

              @keyframes pandaCardSwap {
                0% { opacity: 0; transform: translateY(10px); }
                100% { opacity: 1; transform: translateY(0); }
              }
            `}
          </style>
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.98),rgba(250,250,248,0.94)_40%,rgba(244,243,240,0.84)_100%)]" />
            <svg className="absolute right-[-10%] top-[-6%] h-[112%] w-[68%] opacity-[0.16]" viewBox="0 0 1200 1200" fill="none" aria-hidden="true">
              <path d="M240 1170C410 760 690 430 1210 160" stroke="#ff4a22" strokeWidth="1" />
              <path d="M340 1210C520 810 770 520 1240 280" stroke="#ff4a22" strokeWidth="1" />
              <path d="M450 1240C620 880 850 620 1270 400" stroke="#ff4a22" strokeWidth="1" />
              <path d="M560 1260C710 940 920 700 1290 530" stroke="#ff4a22" strokeWidth="1" />
            </svg>
            <svg className="absolute bottom-[-42%] left-[30%] h-[82%] w-[70%] opacity-[0.12]" viewBox="0 0 1200 1200" fill="none" aria-hidden="true">
              <path d="M40 1180C180 760 400 460 940 110" stroke="#ff4a22" strokeWidth="1" />
              <path d="M120 1220C260 820 470 530 980 210" stroke="#ff4a22" strokeWidth="1" />
              <path d="M230 1250C370 900 560 630 1010 340" stroke="#ff4a22" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative flex h-[90vh] min-h-[760px] w-full flex-col">
            <div className="relative z-20 flex items-center justify-between px-4 pt-5 sm:px-6 sm:pt-6 lg:px-14 lg:pt-8">
              <button onClick={() => go('/')} aria-label="Sushi Panda" className="shrink-0">
                <span className="inline-flex items-center gap-3">
                  <img src={pandaHeroLogo} alt="Sushi Panda logo" className="h-[44px] w-auto object-contain sm:h-[54px] lg:h-[62px]" />
                  <img src={pandaHeroWordmark} alt="Sushi Panda wordmark" className="h-[24px] w-auto object-contain sm:h-[28px] lg:h-[32px]" />
                </span>
              </button>

              <div className="hidden items-center gap-4 lg:flex">
                <div ref={cityMenuRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setIsCityMenuOpen((open) => !open)}
                    className="inline-flex h-[52px] min-w-[188px] items-center justify-between rounded-[18px] border border-black/8 bg-white px-5 text-[15px] font-semibold tracking-[-0.01em] text-[#111111] shadow-[0_10px_28px_rgba(17,17,17,0.06)] transition-colors hover:border-[#ff4a22]/28"
                    aria-haspopup="menu"
                    aria-expanded={isCityMenuOpen}
                  >
                    <span>{activeCity.label}</span>
                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${isCityMenuOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isCityMenuOpen && (
                    <div className="absolute right-0 top-[calc(100%+12px)] z-40 min-w-[220px] overflow-hidden rounded-[22px] border border-black/8 bg-white p-2 shadow-[0_18px_48px_rgba(17,17,17,0.14)]">
                      {navCities.map((city) => {
                        const isActive = city.value === selectedCity;
                        const isDisabled = !city.isActive;

                        return (
                          <button
                            key={city.value}
                            type="button"
                            disabled={isDisabled}
                            onClick={() => {
                              if (isDisabled) return;
                              setSelectedCity(city.value);
                              setIsCityMenuOpen(false);
                            }}
                            className={`flex w-full items-center justify-between rounded-[16px] px-4 py-3 text-left text-[16px] font-semibold transition-colors ${
                              isDisabled
                                ? 'cursor-not-allowed text-black/30'
                                : ''
                            } ${
                              isActive
                                ? 'bg-[#fff3ef] text-[#ff4a22]'
                                : isDisabled
                                  ? ''
                                  : 'text-[#111111] hover:bg-[#f7f8fb]'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {city.label}
                              {isDisabled ? (
                                <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/28">
                                  uskoro
                                </span>
                              ) : null}
                            </span>
                            {isActive ? <span className="text-[18px] leading-none">•</span> : null}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <a
                  href={`tel:${activeCity.phone.replace(/\s+/g, '')}`}
                  className="inline-flex h-[52px] items-center gap-3 rounded-[18px] border border-black/8 bg-white px-5 text-[15px] font-semibold tracking-[-0.01em] text-[#111111] shadow-[0_10px_28px_rgba(17,17,17,0.06)] transition-colors hover:border-[#ff4a22]/28 hover:text-[#ff4a22]"
                >
                  <Phone size={18} strokeWidth={1.9} />
                  <span>{activeCity.phone}</span>
                </a>

                <button
                  onClick={() => go('/ketering-proslave')}
                  className="inline-flex h-[52px] items-center rounded-[18px] border border-black/8 bg-white px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#111111] shadow-[0_10px_28px_rgba(17,17,17,0.06)] transition-colors hover:border-[#ff4a22]/28 hover:text-[#ff4a22]"
                >
                  Catering
                </button>

                <a
                  href="https://www.instagram.com/sushipandaofficial"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-[18px] border border-black/8 bg-white text-[#111111] shadow-[0_10px_28px_rgba(17,17,17,0.06)] transition-colors hover:border-[#ff4a22]/28 hover:text-[#ff4a22]"
                >
                  <Instagram size={22} strokeWidth={1.9} />
                </a>
              </div>
            </div>

            <div className="relative z-20 flex flex-wrap gap-3 px-4 pt-4 sm:px-6 lg:hidden">
              <a
                href={`tel:${activeCity.phone.replace(/\s+/g, '')}`}
                className="inline-flex h-[46px] min-w-0 flex-1 items-center justify-center gap-2 rounded-[16px] border border-black/8 bg-white px-4 text-[14px] font-semibold tracking-[-0.01em] text-[#111111] shadow-[0_10px_28px_rgba(17,17,17,0.06)] transition-colors hover:border-[#ff4a22]/28 hover:text-[#ff4a22]"
              >
                <Phone size={16} strokeWidth={1.8} />
                <span className="truncate">{activeCity.phone}</span>
              </a>
              <button
                onClick={() => go('/ketering-proslave')}
                className="inline-flex h-[46px] items-center justify-center rounded-[16px] border border-black/8 bg-white px-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#111111] shadow-[0_10px_28px_rgba(17,17,17,0.06)] transition-colors hover:border-[#ff4a22]/28 hover:text-[#ff4a22]"
              >
                Catering
              </button>
              <button
                type="button"
                onClick={() => setIsCityMenuOpen((open) => !open)}
                className="inline-flex h-[46px] w-full items-center justify-between rounded-[16px] border border-black/8 bg-white px-4 text-[14px] font-semibold tracking-[-0.01em] text-[#111111] shadow-[0_10px_28px_rgba(17,17,17,0.06)] transition-colors hover:border-[#ff4a22]/28 sm:w-auto sm:min-w-[220px]"
                aria-haspopup="menu"
                aria-expanded={isCityMenuOpen}
              >
                <span>{activeCity.label}</span>
                <ChevronDown
                  size={18}
                  strokeWidth={2}
                  className={`transition-transform duration-200 ${isCityMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {isCityMenuOpen ? (
              <div className="relative z-30 px-4 pt-3 sm:px-6 lg:hidden">
                <div className="overflow-hidden rounded-[22px] border border-black/8 bg-white p-2 shadow-[0_18px_48px_rgba(17,17,17,0.14)]">
                  {navCities.map((city) => {
                    const isActive = city.value === selectedCity;
                    const isDisabled = !city.isActive;

                    return (
                      <button
                        key={city.value}
                        type="button"
                        disabled={isDisabled}
                        onClick={() => {
                          if (isDisabled) return;
                          setSelectedCity(city.value);
                          setIsCityMenuOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-[16px] px-4 py-3 text-left text-[15px] font-semibold transition-colors ${
                          isDisabled ? 'cursor-not-allowed text-black/30' : ''
                        } ${
                          isActive
                            ? 'bg-[#fff3ef] text-[#ff4a22]'
                            : isDisabled
                              ? ''
                              : 'text-[#111111] hover:bg-[#f7f8fb]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {city.label}
                          {isDisabled ? <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/28">uskoro</span> : null}
                        </span>
                        {isActive ? <span className="text-[18px] leading-none">•</span> : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <div className="relative grid min-h-0 flex-1 content-start gap-8 overflow-hidden px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-center lg:gap-10 lg:overflow-visible lg:px-14 lg:pb-12 lg:pt-12">
                <div className="relative z-10 max-w-[39rem] self-center">
                  <h1 className="panda-display-hero font-sans text-[#111111]">
                    <span className="block sm:whitespace-nowrap">Sushi Panda.</span>
                    <span className="block sm:whitespace-nowrap">Širimo se</span>
                    <span className="block sm:whitespace-nowrap">grad po grad.</span>
                  </h1>
                  <p className="panda-body-large mt-5 max-w-[26rem] text-black/82 sm:mt-6">
                    Premijalna sushi dostava
                    <br />
                    koja raste kroz Srbiju.
                  </p>

                  <div className="mt-10 grid max-w-[34rem] items-start gap-5 border-t border-black/10 pt-6 sm:mt-12 sm:grid-cols-[0.72fr_1.28fr] sm:gap-8 sm:pt-7">
                    <div className="grid grid-rows-[auto_auto] gap-2 sm:min-h-[164px] sm:grid-rows-[auto_64px] sm:border-r sm:border-black/12 sm:pr-8">
                      <p className="panda-stat-display font-sans text-[#ff4a22]">2025</p>
                      <div className="flex items-start pt-0 sm:pt-2">
                        <p className="panda-body-small text-black/82">osnovan u Srbiji</p>
                      </div>
                    </div>
                    <div className="grid grid-rows-[auto_auto] gap-2 sm:min-h-[164px] sm:grid-rows-[auto_64px]">
                      <p className="panda-stat-display font-sans text-[#ff4a22]">3 grada</p>
                      <div className="flex items-start pt-0 sm:pt-2">
                        <p className="panda-body-small text-black/82 sm:whitespace-nowrap">Kragujevac · Kraljevo · Jagodina</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[430px] sm:min-h-[560px] lg:min-h-[660px]">
                  <div className="pointer-events-none absolute inset-0">
                    <img
                      src={pandaSerbiaMap}
                      alt=""
                      aria-hidden="true"
                      className="absolute right-[-12%] top-[56%] w-[120%] max-w-none -translate-y-1/2 rotate-[13deg] object-contain sm:right-[-10%] sm:w-[142%] lg:right-[-16%] lg:top-[54%] lg:w-[158%]"
                    />
                  </div>

                  {journeyCities.map((city) => (
                    <div
                      key={city.name}
                      className="absolute z-20 -m-4 p-4"
                      onMouseEnter={() => {
                        setHoveredJourneyCity(city.value);
                        if (city.value === 'jagodina') {
                          setScooterBounceTick((tick) => tick + 1);
                        }
                      }}
                      onMouseLeave={() => setHoveredJourneyCity(null)}
                      style={{
                        top: city.top,
                        left: city.left,
                        transform: heroReady
                          ? `translate(0, 0) scale(${hoveredJourneyCity === city.value ? 1.06 : 1})`
                          : 'translate(0, 10px) scale(1)',
                        transformOrigin: 'left top',
                        opacity: heroReady ? 1 : 0,
                        transition: 'opacity 520ms ease, transform 260ms ease',
                        transitionDelay: city.delay,
                        cursor: 'pointer',
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="relative mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center">
                          <span className="absolute h-8 w-8 rounded-full bg-[#ff4a22]/18 blur-[1px]" />
                          <span className="absolute h-6 w-6 rounded-full bg-[#ff4a22] shadow-[0_8px_18px_rgba(255,74,34,0.35)]" />
                          <span className="absolute h-2.5 w-2.5 rounded-full bg-white" />
                        </span>
                        <div>
                          <p className="font-sans text-[1rem] font-black uppercase leading-none tracking-[-0.04em] text-[#111111] sm:text-[1.45rem]">
                            {city.name}
                          </p>
                          <p className="panda-eyebrow mt-1 lowercase text-[#ff4a22] sm:text-[13px]">
                            {city.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="absolute bottom-[-2%] left-[2%] z-10 flex items-end gap-4 sm:left-[12%] lg:bottom-[-60px]">
                    <div className="relative">
                      <div
                        className="absolute bottom-[5%] left-[46%] h-[22px] w-[250px] rounded-full bg-black"
                        style={{ filter: 'blur(14px)', animation: 'pandaShadowPulse 2.5s ease-in-out infinite' }}
                      />
                      <div className="absolute left-[4%] top-[52%] h-[44px] w-[112px]">
                        <span
                          className="absolute left-0 top-[4px] h-[2px] w-[66px] rounded-full bg-[#111111]"
                          style={{ opacity: 0.12, animation: 'pandaSpeedLine 1.8s ease-in-out infinite' }}
                        />
                        <span
                          className="absolute left-[8px] top-[17px] h-[2px] w-[84px] rounded-full bg-[#111111]"
                          style={{ opacity: 0.12, animation: 'pandaSpeedLine 1.8s ease-in-out 0.3s infinite' }}
                        />
                        <span
                          className="absolute left-[18px] top-[30px] h-[2px] w-[58px] rounded-full bg-[#111111]"
                          style={{ opacity: 0.1, animation: 'pandaSpeedLine 1.8s ease-in-out 0.55s infinite' }}
                        />
                      </div>
                      <div key={scooterBounceTick} style={{ animation: 'pandaScooterNudge 420ms ease-out 1' }}>
                        <div
                          className="relative"
                          style={{ animation: 'pandaScooterBob 2.5s ease-in-out infinite' }}
                        >
                          <img
                            src={pandaMascotScooter}
                            alt="Sushi Panda mascot on scooter"
                            className="relative z-[2] w-[250px] object-contain drop-shadow-[0_24px_30px_rgba(15,23,42,0.18)] sm:w-[486px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute right-[0%] top-[-6%] w-[190px] rounded-[18px] border border-black/5 bg-white p-3 sm:left-[68%] sm:right-auto sm:top-[10%] sm:w-[260px] sm:p-4 lg:left-[68%] lg:top-[6px]"
                      style={{
                        boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                        opacity: heroReady ? 1 : 0,
                        transform: heroReady ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease',
                        transitionDelay: '620ms',
                        animation: heroReady ? 'pandaNotificationFloat 3s ease-in-out 1.1s infinite' : 'none',
                      }}
                    >
                      <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
                      <div
                        key={hoveredJourneyCity ?? 'default'}
                        style={{ animation: 'pandaCardSwap 260ms ease' }}
                      >
                        <p className="text-[13px] font-semibold leading-none tracking-[-0.02em] text-[#111111] sm:text-[14px]">{activeJourneyCard.title}</p>
                        {activeJourneyCard.lines.map((line, index) => (
                          <p
                            key={line}
                            className={`max-w-[11rem] text-[12px] font-medium leading-[1.42] text-[#111111] sm:max-w-[13.5rem] sm:text-[13px] ${index === 0 ? 'mt-2 sm:mt-3' : 'mt-1'}`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
        </section>

        <div className="mx-auto mt-8 max-w-[1320px] px-4 sm:px-6">
          <section className="mt-10 space-y-8">
            <div className="overflow-hidden rounded-[120px] border border-white/80 bg-white px-8 py-8 shadow-[0_20px_48px_rgba(103,131,160,0.08)] sm:rounded-[150px] sm:px-10 lg:min-h-[460px] lg:rounded-[180px] lg:px-14 lg:py-8">
              <div className="grid items-center gap-10 lg:min-h-[396px] lg:grid-cols-[0.95fr_1.05fr]">
                <div className="flex h-full max-w-[34rem] flex-col justify-center">
                  <h2 className="panda-display-medium font-sans text-[#111111]">
                    Sushi Panda nije samo sushi
                  </h2>
                  <p className="panda-body-large mt-7 max-w-[30rem] text-stone-800">
                    To je ljubav prema detaljima, briga o ukusu
                    <br />
                    i pažnja prema svakom gostu — u svakoj rolnici.
                  </p>
                </div>

                <div className="relative flex h-full min-h-[396px] items-center justify-center overflow-visible">
                  <div
                    className="absolute left-[6%] top-[18%] z-20 rounded-[16px] border border-black/8 bg-white px-4 py-2 text-[1.7rem] shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
                    style={{ animation: 'pandaIngredientFloat 4.6s ease-in-out infinite' }}
                  >
                    🥕
                  </div>
                  <div
                    className="absolute left-[16%] top-[78%] z-20 rounded-[16px] border border-black/8 bg-white px-4 py-2 text-[1.7rem] shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
                    style={{ animation: 'pandaIngredientFloat 4.1s ease-in-out 0.6s infinite' }}
                  >
                    🥒
                  </div>
                  <div
                    className="absolute left-[28%] top-[10%] z-20 rounded-[16px] border border-black/8 bg-white px-4 py-2 text-[1.7rem] shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
                    style={{ animation: 'pandaIngredientFloat 4.8s ease-in-out 0.2s infinite' }}
                  >
                    🌿
                  </div>
                  <div
                    className="absolute left-[34%] top-[74%] z-20 rounded-[16px] border border-black/8 bg-white px-4 py-2 text-[1.7rem] shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
                    style={{ animation: 'pandaIngredientFloat 4.3s ease-in-out 0.9s infinite' }}
                  >
                    🍋
                  </div>
                  <div
                    className="absolute right-[8%] top-[26%] z-20 rounded-[16px] border border-black/8 bg-white px-4 py-2 text-[1.7rem] shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
                    style={{ animation: 'pandaIngredientFloat 4.4s ease-in-out 0.4s infinite' }}
                  >
                    🥑
                  </div>
                  <div
                    className="absolute right-[2%] top-[56%] z-20 rounded-[16px] border border-black/8 bg-white px-4 py-2 text-[1.7rem] shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
                    style={{ animation: 'pandaIngredientFloat 4.7s ease-in-out 1s infinite' }}
                  >
                    🥬
                  </div>
                  <div
                    className="absolute right-[12%] top-[84%] z-20 rounded-[16px] border border-black/8 bg-white px-4 py-2 text-[1.7rem] shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
                    style={{ animation: 'pandaIngredientFloat 4.2s ease-in-out 0.3s infinite' }}
                  >
                    🍣
                  </div>
                  <div
                    className="absolute left-[74%] top-[42%] z-20 rounded-[18px] border border-black/8 bg-white px-5 py-3 text-[2rem] shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
                    style={{ animation: 'pandaIngredientFloat 5s ease-in-out 0.7s infinite' }}
                  >
                    🍣
                  </div>
                  <img
                    src={pandaChefMascot}
                    alt="Sushi Panda chef mascot"
                    className="relative z-10 w-[124%] max-w-none object-contain drop-shadow-[0_28px_38px_rgba(15,23,42,0.12)]"
                  />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[120px] border border-white/80 bg-white px-8 py-8 shadow-[0_20px_48px_rgba(103,131,160,0.08)] sm:rounded-[150px] sm:px-10 lg:min-h-[460px] lg:rounded-[180px] lg:px-14 lg:py-8">
              <div className="grid items-center gap-10 lg:min-h-[396px] lg:grid-cols-[0.42fr_0.58fr]">
                <div className="flex h-full items-center justify-center lg:justify-start">
                  <div className="flex h-[280px] w-[280px] items-center justify-center rounded-full bg-[#edf3fb] sm:h-[320px] sm:w-[320px]">
                    <img src={pandaSymbolColor} alt="Sushi Panda symbol" className="w-[170px] object-contain sm:w-[200px]" />
                  </div>
                </div>

                <div className="flex h-full max-w-[42rem] flex-col justify-center">
                  <h2 className="panda-display-medium font-sans text-[#111111]">
                    Mlad brend sa velikim ambicijama
                  </h2>
                  <p className="panda-body mt-8 text-stone-700">
                    Rođeni smo u Srbiji 2025. godine sa jednom idejom:
                    <br />
                    da kvalitetan, iskren sushi bude dostupan svima.
                  </p>
                  <p className="panda-body mt-5 text-stone-700">
                    Sushi Panda je novi format dostave: spajamo japanske recepte, lokalne sastojke, moderan dizajn i jednostavno naručivanje.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-20">
            <h2 className="panda-display-medium mb-8 font-sans">
              <span className="text-[#111111]">Panda </span>
              <span className="text-[#ff4a22]">filozofija</span>
              <span className="ml-3 inline-block align-[0.08em] text-[0.86em] leading-none text-[#ff4a22]">❤</span>
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {philosophyItems.map((item) => {
                return (
                  <article
                    key={item.title}
                    className="rounded-[30px] border border-white/75 bg-white px-7 py-7 shadow-[0_18px_40px_rgba(103,131,160,0.08)]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-[20px] border border-[#dce8f5] bg-[#edf4ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                      <img src={item.icon} alt="" aria-hidden="true" className={`${item.iconClassName} object-contain`} />
                    </div>
                    <h3 className="panda-display-small mt-6 font-sans text-[#111111]">
                      {item.title}
                    </h3>
                    <p className="panda-body-small mt-4 text-stone-700">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="mt-16 mb-16">
            <style>
              {`
                @keyframes pandaRollFloat {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-4px); }
                }
              `}
            </style>

            <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
              <div className="flex max-w-[46rem] flex-col justify-center self-center">
                <h2 className="font-sans text-[#111111] text-[1.7rem] font-extrabold leading-[0.94] tracking-[-0.055em] sm:text-[2.3rem] lg:text-[2.9rem]">
                  Ne pravimo samo sushi.
                </h2>
                <p className="mt-3 font-sans text-[1.55rem] font-extrabold leading-[0.95] tracking-[-0.05em] text-[#111111] sm:text-[2.1rem] lg:text-[2.7rem]">
                  Stvaramo
                </p>
                <p className="font-sans mt-1 text-[2.35rem] font-black uppercase leading-[0.88] tracking-[-0.065em] text-[#ff3b2f] sm:text-[3.8rem] lg:text-[5.35rem]">
                  UMETNOST
                </p>
              </div>

              <div className="relative flex min-h-[420px] items-center justify-center lg:-translate-x-[6%] lg:justify-end">
                <div className="absolute h-[560px] w-[560px] rounded-full bg-[#edf4ff]/55 blur-[14px]" />
                <div
                  className="relative w-[180px] sm:w-[260px] lg:w-[420px]"
                  style={{ animation: 'pandaRollFloat 4s ease-in-out infinite' }}
                >
                  <div className="absolute left-1/2 top-[92%] h-[28px] w-[72%] -translate-x-1/2 rounded-full bg-black/12 blur-[10px]" />
                  <img
                    src={rollTuna}
                    alt="Premium sushi roll"
                    className="relative z-10 w-full object-contain drop-shadow-[0_24px_30px_rgba(15,23,42,0.10)]"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-0 mt-2">
            <div className="overflow-hidden px-6 pb-0 pt-16 sm:px-10 sm:pt-20 lg:px-14 lg:pt-24">
              <div className="relative mx-auto flex max-w-[1240px] flex-col items-center text-center">
                <div className="relative z-20 translate-y-[3px] sm:translate-y-[5px] lg:translate-y-[7px]">
                <h2 className="panda-display-medium max-w-[12ch] font-sans text-[#111111]">
                  Naruči preko
                  <br />
                  Wolt i Glovo
                </h2>

                <p className="panda-body mt-3 text-black/72">
                  Dostupni u aplikacijama koje već koristiš.
                </p>
                </div>

                <div className="relative -mt-16 -mb-14 flex w-full justify-center overflow-hidden sm:-mt-20 sm:-mb-16 lg:-mt-24 lg:-mb-20">
                  <img
                    src={woltGlovoHero}
                    alt="Wolt i Glovo aplikacije"
                    className="pointer-events-none relative z-10 w-full max-w-[1320px] object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
