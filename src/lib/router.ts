export function navigate(path: string, section?: string) {
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
  const sectionQuery = section ? `?section=${encodeURIComponent(section)}` : '';
  const target = `${normalizedPath}${sectionQuery}`;

  window.history.pushState({}, '', target);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0 });
}

export function getCurrentPath(): string {
  if (window.location.hash && window.location.hash !== '#') {
    const legacyPath = window.location.hash.slice(1).split('?')[0];
    return legacyPath || '/';
  }

  const pathname = window.location.pathname.replace(/\/$/, '');
  return pathname || '/';
}

export function getCurrentSection(): string | null {
  const hash = window.location.hash;
  const query = hash && hash !== '#'
    ? hash.slice(1).split('?')[1] ?? ''
    : window.location.search;
  const params = new URLSearchParams(query);

  return params.get('section');
}
