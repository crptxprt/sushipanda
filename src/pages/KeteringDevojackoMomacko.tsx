import CateringPageLayout from '../components/CateringPageLayout';

const packages = [
  {
    name: 'Mini',
    guests: 'do 10 osoba',
    items: [
      '5 vrsta sushija po izboru',
      'Fun prezentacija',
      'Dostava i postavljanje',
      'Pribor i dekoracija stola',
    ],
  },
  {
    name: 'Standard',
    guests: 'do 20 osoba',
    items: [
      '8 vrsta sushija po izboru',
      'Rainbow rolls i specialty maki',
      'Dostava, postavljanje i demontaža',
      'Tematska dekoracija',
      'Sos bar sa dodacima',
    ],
  },
  {
    name: 'Premium',
    guests: '50+ osoba',
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
      heroImage="https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=1920"
      intro="Devojačka ili momačka veče treba biti savršena. Sushi Panda donosi premium iskustvo koje se razlikuje — živu pripremu, atraktivnu prezentaciju i ukuse koji sve gosti pamte dugo posle proslave."
      packages={packages}
      formSource="devojacko-momacko"
    />
  );
}
