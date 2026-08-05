import Header from '../components/Header';
import Footer from '../components/Footer';
import { navigate } from '../lib/router';
import { ArrowRight } from 'lucide-react';
import teamRuslan from '../assets/team-ruslan.png';
import teamDenis from '../assets/team-denis.png';
import teamPava from '../assets/team-pava.png';
import teamMisha from '../assets/team-misha.png';

const teamMembers = [
  {
    name: 'Ruslan',
    role: 'Vlasnik',
    image: teamRuslan,
    description: 'Vodi Sushi Panda sa fokusom na organizaciju, iskustvo gostiju i standard usluge.',
  },
  {
    name: 'Pava',
    role: 'Šef kuvar',
    image: teamPava,
    description: 'Brine o ritmu servisa, doslednosti kvaliteta i detaljima na događaju.',
  },
  {
    name: 'Denis',
    role: 'Sous chef',
    image: teamDenis,
    description: 'Zadužen za ukuse, preciznost pripreme i premium prezentaciju menija.',
  },
  {
    name: 'Misha',
    role: 'Kuvar',
    image: teamMisha,
    description: 'Podržava tim u pripremi i postavci da svaki catering protekne uredno i profesionalno.',
  },
];

export default function ONama() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] overflow-x-hidden">
      <Header />

      <section className="relative min-h-[380px] overflow-hidden bg-[#f7f5f2] px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:min-h-[470px] lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-215px] top-[2%] h-[520px] w-[520px] rounded-full bg-[#ebe2dc] opacity-88" />
          <div className="absolute right-[-70px] top-[10%] h-[420px] w-[420px] rounded-full bg-[#efe6e1]/82 blur-[3px]" />
          <div className="absolute right-[6%] bottom-[4%] h-[260px] w-[260px] rounded-full bg-[#f1e6e0]/85 blur-3xl" />
          <div className="absolute left-[50%] top-[18%] h-32 w-32 rounded-full bg-white/58 blur-3xl" />
          <div className="absolute right-[16%] top-[24%] h-[300px] w-[132px] rounded-full bg-[#eee2dc]/52 rotate-[18deg] blur-[2px]" />
          <div className="absolute left-[58%] bottom-[12%] h-[180px] w-[180px] rounded-full bg-[#f4ebe6]/72 blur-3xl" />
        </div>

        <div className="relative mx-auto flex h-full max-w-[1320px] items-end px-0 lg:px-10">
          <div className="max-w-[44rem] pb-2">
            <p className="editorial-kicker mb-5 text-stone-500">O nama</p>
            <h1
              className="catering-hero-display text-[#111111]"
            >
              O nama
            </h1>
            <p className="catering-body mt-6 max-w-[31rem] text-black/72">
              Tim koji stoji iza svakog Sushi Panda cateringa.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-0 lg:px-10">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="editorial-kicker mb-5 text-stone-500">Naš tim</p>
              <h2
                className="catering-section-display-medium text-[#111111]"
              >
                Ljudi koji nose<br />
                <span className="italic font-normal">Sushi Panda iskustvo</span>
              </h2>
            </div>
            <p className="catering-body max-w-[28rem] text-black/72">
              Od planiranja i pripreme do postavke na lokaciji, svaki događaj vodi tim koji zna kako premium catering treba da izgleda i funkcioniše.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className={`group overflow-hidden rounded-[28px] border shadow-[0_20px_50px_rgba(145,111,102,0.07)] transition-transform duration-300 hover:-translate-y-1 ${
                  member.role === 'Vlasnik'
                    ? 'border-[#ead8d3] bg-[linear-gradient(180deg,#fdfaf7_0%,#f7eeea_100%)]'
                    : 'border-[#eee3df] bg-[#fcfaf8]'
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    member.role === 'Vlasnik'
                      ? 'bg-[linear-gradient(180deg,#f8f3ef_0%,#efe5df_100%)]'
                      : 'bg-[linear-gradient(180deg,#f7f4f1_0%,#efe7e2_100%)]'
                  }`}
                >
                  <div className="absolute inset-x-[18%] top-[8%] h-16 rounded-full bg-white/55 blur-2xl" />
                  <div className="absolute inset-x-[26%] bottom-[14%] h-24 rounded-full bg-[#eadbd5]/45 blur-3xl" />
                  <div className="absolute left-[20%] top-[22%] h-16 w-16 rounded-full bg-white/45 blur-2xl" />
                  <img
                    src={member.image}
                    alt={member.name}
                  className="relative h-[320px] w-full object-contain object-bottom pt-6 sm:h-[430px]"
                  />
                </div>
                <div className="px-6 py-6">
                  <p className="editorial-kicker mb-3 text-[#C44F6E]">{member.role}</p>
                  <h3 className="catering-card-title text-[#111111]">
                    {member.name}
                  </h3>
                  <p className="catering-body-small mt-4 text-black/72">
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f2] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[980px] px-0 lg:px-10">
          <div className="relative overflow-hidden rounded-[34px] border border-[#eee2de] bg-[#fcfaf8] px-8 py-10 text-center shadow-[0_20px_50px_rgba(145,111,102,0.06)] sm:px-12 sm:py-12">
            <div className="absolute left-[10%] top-[18%] h-24 w-24 rounded-full bg-[#f1e4df]/70 blur-2xl" />
            <div className="absolute right-[12%] bottom-[18%] h-20 w-20 rounded-full bg-[#ead7d4]/70 blur-2xl" />
            <p className="editorial-kicker relative mb-6 text-stone-500">Naša filozofija</p>
            <p
              className="catering-section-display-small relative mx-auto max-w-[42rem] text-[#111111]"
            >
              Sve počinje od tima
              <span className="block italic font-normal">od izbora sastojaka do postavke na lokaciji.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F0EDE7] px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
        <p className="editorial-kicker mb-7 text-stone-500">Radimo zajedno?</p>
        <h2 className="catering-section-display text-[#111111] mb-12">
          Planiraš <span className="italic font-normal">sushi event?</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <button onClick={() => navigate('/kontakt')} className="bg-[#111111] text-white text-[12px] uppercase tracking-[0.18em] px-12 py-4 rounded-full hover:bg-[#C44F6E] transition-colors font-light">Zatraži ponudu</button>
          <button onClick={() => navigate('/ketering-proslave')} className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-stone-600 hover:text-[#C44F6E] transition-colors font-light">
            Pogledaj opcije <ArrowRight size={12} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer variant="catering" />
    </div>
  );
}
