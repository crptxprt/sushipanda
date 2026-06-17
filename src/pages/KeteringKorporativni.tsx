import CateringPageLayout from '../components/CateringPageLayout';
import heroKorporativni from '../assets/heroes/hero-korporativni.png';

const packages = [
  {
    name: 'MINI',
    guests: 'do 10 osoba',
    price: '1.200 RSD / osoba',
    items: [
      '5 vrsta sushija po izboru',
      'Elegantna poslovna prezentacija',
      'Dostava u poslovne prostore',
      'Pribor i serviranje',
    ],
  },
  {
    name: 'STANDARD',
    guests: '10–30 osoba',
    price: '1.100 RSD / osoba',
    items: [
      '8 vrsta sushija po izboru',
      'Branded prezentacija po zahtevu',
      'Postavljanje i demontaža',
      'Elegantna dekoracija',
      'Kompletni dodaci i sauces',
    ],
  },
  {
    name: 'PREMIUM',
    guests: '30+ osoba',
    price: '1.000 RSD / osoba',
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
      heroImage={heroKorporativni}
      intro="Korporativni eventi zahtevaju savršenu prezentaciju i profesionalnu uslugu. Sushi Panda donosia premium gastronomsko iskustvo koje ostavlja trajan utisak na vaše partnere, klijente i zaposlene."
      packages={packages}
      formSource="korporativni"
    />
  );
}
