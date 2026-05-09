import CateringPageLayout from '../components/CateringPageLayout';

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
      intro="Slava je posebna prilika koja spaja porodicu i prijatelje. Uz Sushi Panda ketering, obogatite vaš slavski sto autentičnim japonskim specijalitetima koji se savršeno uklapaju u svečanu atmosferu."
      packages={packages}
      formSource="slave"
    />
  );
}
