import CateringPageLayout from '../components/CateringPageLayout';

const variants = [
  {
    label: 'POSNO',
    title: 'Posna slava',
    description: 'Sushi meni bez mesa i mlečnih proizvoda, prilagođen za posne slave, Badnji dan i posne trpeze.',
    details: [
      'Posni sushi setovi',
      'Riba, povrće i biljni dodaci',
      'Avokado, krastavac, tuna i losos opcije',
      'Elegantna postavka za slavsku trpezu',
    ],
    ctaText: 'Zatraži posnu ponudu',
    ctaHref: 'https://wa.me/38166404049?text=Zdravo%2C%20zanima%20me%20posna%20slava%20i%20Sushi%20Panda%20ponuda.',
  },
  {
    label: 'MRSNO',
    title: 'Mrsna slava',
    description: 'Bogati sushi setovi za klasičnu slavsku trpezu, sa premium rolnama, nigiri izborom i live chef opcijom.',
    details: [
      'Premium sushi setovi',
      'Tempura i nigiri asortiman',
      'Live sushi chef opcija',
      'Kompletna postavka i dostava',
    ],
    ctaText: 'Zatraži mrsnu ponudu',
    ctaHref: 'https://wa.me/38166404049?text=Zdravo%2C%20zanima%20me%20mrsna%20slava%20i%20Sushi%20Panda%20ponuda.',
    dark: true,
  },
];

const packages = [
  {
    name: 'Mini',
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
    name: 'Standard',
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
    name: 'Premium',
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
      heroImage="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1920"
      intro="Slava je posebna prilika koja spaja porodicu i prijatelje. Uz Sushi Panda ketering, obogatite vaš slavski sto autentičnim japanskim specijalitetima koji se prirodno uklapaju u svečanu atmosferu. Pripremamo i posne i mrsne varijante, u skladu sa tipom slave i brojem gostiju."
      packages={packages}
      variants={variants}
      variantsTitle="Odaberi tip slave"
      formSource="slave"
      showContactSection={false}
    />
  );
}
