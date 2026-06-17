import CateringPageLayout from '../components/CateringPageLayout';
import heroProslave from '../assets/heroes/hero-proslave.png';

const packages = [
  {
    name: 'MINI',
    guests: 'do 10 osoba',
    price: '1.200 RSD / osoba',
    items: [
      '5 vrsta sushija po izboru',
      'Dostava i postavljanje',
      'Pribor i dekoracija stola',
      'Osnovna prezentacija',
    ],
  },
  {
    name: 'STANDARD',
    guests: '10–30 osoba',
    price: '1.100 RSD / osoba',
    items: [
      '8 vrsta sushija po izboru',
      'Tempura i nigiri asortiman',
      'Dostava, postavljanje i demonтaža',
      'Dekorisana prezentacija',
      'Soja sos, wasabi, đumbir',
    ],
  },
  {
    name: 'PREMIUM',
    guests: '30+ osoba',
    price: '1.000 RSD / osoba',
    items: [
      'Neograničen asortiman sushija',
      'Live sushi stanica sa cheom',
      'Kompletna organizacija',
      'Premium dekoracija i oprema',
      'Sos bar i dodaci',
      'Podrška tokom celog događaja',
    ],
  },
];

export default function KeteringProslave() {
  return (
    <CateringPageLayout
      title="Ketering za"
      titleItalic="proslave"
      subtitle="Neka tvoj rođendan ili privatna žurka bude nezaboravna"
      heroImage={heroProslave}
      intro="Svaki povod za slavlje zaslužuje vrhunsku hranu. Naš sushi ketering za proslave donosi autentičan japanski ukus direktno na vaš sto — uz profesionalnu organizaciju i prezentaciju koja oduševljava goste."
      packages={packages}
      formSource="proslave"
    />
  );
}
