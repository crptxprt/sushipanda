import CateringPageLayout from '../components/CateringPageLayout';

const packages = [
  {
    name: 'Business',
    guests: 'do 10 osoba',
    items: [
      '5 vrsta sushija po izboru',
      'Elegantna poslovna prezentacija',
      'Dostava u poslovne prostore',
      'Pribor i serviranje',
    ],
  },
  {
    name: 'Corporate',
    guests: 'do 20 osoba',
    items: [
      '8 vrsta sushija po izboru',
      'Branded prezentacija po zahtevu',
      'Postavljanje i demontaža',
      'Elegantna dekoracija',
      'Kompletni dodaci i sauces',
    ],
  },
  {
    name: 'Enterprise',
    guests: '50+ osoba',
    items: [
      'Neograničen asortiman sushija',
      'Live sushi stanica sa cheom',
      'Branded rekviziti i detalji',
      'Kompletna organizacija eventa',
      'Koordinator na licu mesta',
      'Prilagodljiv jelovnik',
    ],
  },
];

export default function KeteringKorporativni() {
  return (
    <CateringPageLayout
      title="Korporativni"
      titleItalic="eventi"
      subtitle="Profesionalan sushi ketering za firme i poslovne prilike"
      heroImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
      intro="Korporativni eventi zahtevaju savršenu prezentaciju i profesionalnu uslugu. Sushi Panda donosia premium gastronomsko iskustvo koje ostavlja trajan utisak na vaše partnere, klijente i zaposlene."
      packages={packages}
      formSource="korporativni"
    />
  );
}
