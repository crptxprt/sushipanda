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
import { isCateringSite } from './lib/site';

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
const CATERING_SITE_TITLE = 'Sushi catering za Kragujevac';

function getPageTitle(path: string) {
  if (isCateringSite) return CATERING_SITE_TITLE;

  if (
    path === '/ketering' ||
    path.startsWith('/ketering-') ||
    path === '/sushi-chef'
  ) {
    return CATERING_SITE_TITLE;
  }

  return MAIN_SITE_TITLE;
}

export default function App() {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => {
    const handler = () => setPath(getCurrentPath());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  useEffect(() => {
    document.title = getPageTitle(path);
  }, [path]);

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
