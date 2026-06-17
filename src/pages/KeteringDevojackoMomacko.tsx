import CateringPageLayout from '../components/CateringPageLayout';
import heroMomacko from '../assets/heroes/hero-momacko.png';

const packages = [
  {
    name: 'MINI',
    guests: 'do 10 osoba',
    price: '1.200 RSD / osoba',
    items: [
      '5 vrsta sushija po izboru',
      'Fun prezentacija',
      'Dostava i postavljanje',
      'Pribor i dekoracija stola',
    ],
  },
  {
    name: 'STANDARD',
    guests: '10–30 osoba',
    price: '1.100 RSD / osoba',
    items: [
      '8 vrsta sushija po izboru',
      'Rainbow rolls i specialty maki',
      'Dostava, postavljanje i demontaža',
      'Tematska dekoracija',
      'Sos bar sa dodacima',
    ],
  },
  {
    name: 'PREMIUM',
    guests: '30+ osoba',
    price: '1.000 RSD / osoba',
    items: [
      'Neograničen asortiman sushija',
      'Live sushi demonstracija',
      'Tematska premium dekoracija',
      'Kompletna organizacija žurke',
      'Personalizovani natpisi i detalji',
      'Podrška tokom celog događaja',
    ],
  },
];

export default function KeteringDevojackoMomacko() {
  return (
    <CateringPageLayout
      title="Devojačko &"
      titleItalic="Momačko"
      subtitle="Proslavite veliku odluku uz savršen sushi experience"
      heroImage={heroMomacko}
      intro="Devojačka ili momačka veče treba biti savršena. Sushi Panda donosi premium iskustvo koje se razlikuje — živu pripremu, atraktivnu prezentaciju i ukuse koji sve gosti pamte dugo posle proslave."
      packages={packages}
      formSource="devojacko-momacko"
    />
  );
}
