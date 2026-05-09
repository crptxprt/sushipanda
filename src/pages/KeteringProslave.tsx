import CateringPageLayout from '../components/CateringPageLayout';

const packages = [
  {
    name: 'Mini',
    guests: 'do 10 osoba',
    items: [
      '5 vrsta sushija po izboru',
      'Dostava i postavljanje',
      'Pribor i dekoracija stola',
      'Osnovna prezentacija',
    ],
  },
  {
    name: 'Standard',
    guests: 'do 20 osoba',
    items: [
      '8 vrsta sushija po izboru',
      'Tempura i nigiri asortiman',
      'Dostava, postavljanje i demonтaža',
      'Dekorisana prezentacija',
      'Soja sos, wasabi, đumbir',
    ],
  },
  {
    name: 'Premium',
    guests: '50+ osoba',
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
      heroImage="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920"
      intro="Svaki povod za slavlje zaslužuje vrhunsku hranu. Naš sushi ketering za proslave donosi autentičan japanski ukus direktno na vaš sto — uz profesionalnu organizaciju i prezentaciju koja oduševljava goste."
      packages={packages}
      formSource="proslave"
    />
  );
}
