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

const routes: Record<string, React.ComponentType> = {
  '/': Home,
  '/sushi-panda': SushiPanda,
  '/ketering-proslave': KeteringProslave,
  '/ketering-slave': KeteringSlave,
  '/ketering-devojacko-momacko': KeteringDevojackoMomacko,
  '/ketering-korporativni': KeteringKorporativni,
  '/sushi-chef': SushiChef,
  '/galerija': Galerija,
  '/o-nama': ONama,
  '/kontakt': Kontakt,
};

export default function App() {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => {
    const handler = () => setPath(getCurrentPath());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const Page = routes[path] ?? Home;

  return <Page />;
}
