import CateringPageLayout from '../components/CateringPageLayout';

const variants = [
  {
    title: 'Posna slava',
    description: 'Lagane i elegantne kombinacije koje poštuju slavsku trpezu, uz pažljivo biran sushi i priloge.',
    details: [
      'Akcenat na lososu, tunjevini, povrću i posnim kombinacijama',
      'Meni se prilagođava broju gostiju i ritmu posluženja',
      'Prezentacija ostaje premium i uredna za slavski sto',
    ],
  },
  {
    title: 'Mrsna slava',
    description: 'Bogatiji izbor rolnica, nigirija i toplih zalogaja za domaćine koji žele raznovrsniji catering sto.',
    details: [
      'Širi izbor ukusa, tekstura i potpisnih Sushi Panda kombinacija',
      'Moguće kombinovanje klasičnih i premium opcija u jednom meniju',
      'Pogodno za porodična okupljanja i veći broj zvanica',
    ],
  },
];

const packages = [
  {
    name: 'Mini',
    guests: 'do 10 osoba',
    items: [
      '5 vrsta sushija po izboru',
      'Traditcionalne kombinacije',
      'Dostava i postavljanje',
      'Pribor i dekoracija stola',
    ],
  },
  {
    name: 'Standard',
    guests: 'do 20 osoba',
    items: [
      '8 vrsta sushija po izboru',
      'Maki, nigiri i inside-out rolice',
      'Dostava, postavljanje i demonтaža',
      'Dekorisana prezentacija',
      'Kompletni dodaci',
    ],
  },
  {
    name: 'Premium',
    guests: '50+ osoba',
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
      heroImage="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1920"
      intro="Slava je posebna prilika koja spaja porodicu i prijatelje. Uz Sushi Panda ketering, obogatite vaš slavski sto autentičnim japanskim specijalitetima koji se prirodno uklapaju u svečanu atmosferu. Pripremamo i posne i mrsne varijante, u skladu sa tipom slave i brojem gostiju."
      packages={packages}
      variants={variants}
      formSource="slave"
    />
  );
}
