import { useState, useEffect } from 'react';
import { getCurrentPath } from './lib/router';
import Home from './pages/Home';
import KeteringProslave from './pages/KeteringProslave';
import KeteringSlave from './pages/KeteringSlave';
import KeteringDevojackoMomacko from './pages/KeteringDevojackoMomacko';
import KeteringKorporativni from './pages/KeteringKorporativni';
import SushiChef from './pages/SushiChef';
import Galerija from './pages/Galerija';
import ONama from './pages/ONama';
import Kontakt from './pages/Kontakt';
import SushiPanda from './pages/SushiPanda';
import { cateringUrl, isCateringSite } from './lib/site';

const routes: Record<string, React.ComponentType> = {
  '/': isCateringSite ? Home : SushiPanda,
  '/sushi-panda': SushiPanda,
  '/ketering': Home,
  '/ketering-proslave': KeteringProslave,
  '/ketering-slave': KeteringSlave,
  '/ketering-devojacko-momacko': KeteringDevojackoMomacko,
  '/ketering-korporativni': KeteringKorporativni,
  '/sushi-chef': SushiChef,
  '/galerija': Galerija,
  '/o-nama': ONama,
  '/kontakt': Kontakt,
};

const MAIN_SITE_TITLE = 'Sushi Panda — Premijalna sushi dostava u Srbiji';
const CATERING_PAGE_TITLES: Record<string, string> = {
  '/': 'Sushi ketering: Kragujevac, Kraljevo i Jagodina | Sushi Panda',
  '/ketering-proslave': 'Sushi catering za proslave: Kragujevac, Kraljevo i Jagodina | Sushi Panda',
  '/ketering-slave': 'Sushi ketering za slave: Kragujevac, Kraljevo i Jagodina | Sushi Panda',
  '/ketering-devojacko-momacko': 'Sushi catering za devojačko i momačko veče | Sushi Panda',
  '/ketering-korporativni': 'Ketering za firme: Kragujevac, Kraljevo i Jagodina | Sushi Panda',
  '/sushi-chef': 'Sushi chef: Kragujevac, Kraljevo i Jagodina | Sushi Panda',
  '/galerija': 'Galerija sushi catering događaja | Sushi Panda',
  '/o-nama': 'O Sushi Panda Catering timu | Kragujevac, Kraljevo i Jagodina',
  '/kontakt': 'Kontakt za sushi catering | Kragujevac, Kraljevo i Jagodina',
};

const isCateringPath = (path: string) =>
  path === '/ketering' ||
  path.startsWith('/ketering-') ||
  path === '/sushi-chef' ||
  path === '/galerija' ||
  path === '/o-nama' ||
  path === '/kontakt';

function getPageTitle(path: string) {
  if (isCateringSite) return CATERING_PAGE_TITLES[path] ?? CATERING_PAGE_TITLES['/'];

  if (
    isCateringPath(path)
  ) {
    return CATERING_PAGE_TITLES['/'];
  }

  return MAIN_SITE_TITLE;
}

export default function App() {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => {
    const handler = () => setPath(getCurrentPath());
    window.addEventListener('popstate', handler);
    window.addEventListener('hashchange', handler);
    return () => {
      window.removeEventListener('popstate', handler);
      window.removeEventListener('hashchange', handler);
    };
  }, []);

  useEffect(() => {
    document.title = getPageTitle(path);
  }, [path]);

  // Catering must never render under the main sushipanda.rs domain. Preserve
  // old shared links, but send them to their canonical catering URL instead.
  useEffect(() => {
    if (!isCateringSite && isCateringPath(path)) {
      window.location.replace(cateringUrl(path));
    }
  }, [path]);

  if (!isCateringSite && isCateringPath(path)) return null;

  // The catering deployment intentionally has no brand-landing fallback.
  // This keeps catering.sushipanda.rs on the catering experience even if an
  // old or mistyped hash URL is opened.
  const Page = isCateringSite
    ? path === '/sushi-panda'
      ? Home
      : routes[path] ?? Home
    : routes[path] ?? SushiPanda;

  return <Page />;
}
