import CateringPageLayout from '../components/CateringPageLayout';
import heroSlave from '../assets/heroes/hero-slave.png';
import posnaSlavaBoard from '../assets/catering/posna-slava-board.png';
import mrsnaSlavaBoard from '../assets/catering/mrsna-slava-board.webp';

const variants = [
  {
    label: 'POSNO',
    title: 'Posna slava',
    description: 'Sushi meni prilagođen posnim slavama, uz lagane ukuse i elegantnu prezentaciju za vašu trpezu.',
    image: posnaSlavaBoard,
  },
  {
    label: 'MRSNO',
    title: 'Mrsna slava',
    description: 'Domaći suhomesnati proizvodi, sirevi i slavski specijaliteti za bogatu i elegantnu slavsku trpezu.',
    image: mrsnaSlavaBoard,
    strongerOverlay: true,
  },
];

const packages = [
  {
    name: 'MINI',
    guests: 'do 10 osoba',
    price: '1.200 RSD / osoba',
    items: [
      '5 vrsta sushija po izboru',
      'Traditcionalne kombinacije',
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
      'Maki, nigiri i inside-out rolice',
      'Dostava, postavljanje i demonтaža',
      'Dekorisana prezentacija',
      'Kompletni dodaci',
    ],
  },
  {
    name: 'PREMIUM',
    guests: '30+ osoba',
    price: '1.000 RSD / osoba',
    items: [
      'Neograničen izbor sushija',
      'Live sushi stanica',
      'Kompletna organizacija proslave',
      'Premium dekoracija',
      'Podrška tokom celog događaja',
      'Personalizovana ponuda',
    ],
  },
];

export default function KeteringSlave() {
  return (
    <CateringPageLayout
      title="Ketering za"
      titleItalic="slave"
      subtitle="Tradicionalna slavska atmosfera sa modernim sushi iskustvom"
      heroImage={heroSlave}
      intro="Slava je posebna prilika koja spaja porodicu i prijatelje. Uz Sushi Panda ketering, obogatite vaš slavski sto autentičnim japanskim specijalitetima koji se prirodno uklapaju u svečanu atmosferu. Pripremamo i posne i mrsne varijante, u skladu sa tipom slave i brojem gostiju."
      packages={packages}
      variants={variants}
      variantsTitle="Odaberi tip slave"
      formSource="slave"
      showVariantCtas={false}
    />
  );
}
