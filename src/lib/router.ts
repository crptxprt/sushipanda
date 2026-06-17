export function navigate(path: string, section?: string) {
  const normalizedPath = path === '/' ? '/' : path;
  const sectionQuery = section ? `?section=${encodeURIComponent(section)}` : '';
  window.location.hash = normalizedPath === '/' ? `/${sectionQuery}` : `${normalizedPath}${sectionQuery}`;
  window.scrollTo({ top: 0 });
}

export function getCurrentPath(): string {
  const hash = window.location.hash;
  if (!hash || hash === '#') return '/';
  const fullPath = hash.startsWith('#') ? hash.slice(1) : hash;
  return fullPath.split('?')[0] || '/';
}

export function getCurrentSection(): string | null {
  const hash = window.location.hash;
  if (!hash || hash === '#') return null;

  const fullPath = hash.startsWith('#') ? hash.slice(1) : hash;
  const [, query = ''] = fullPath.split('?');
  const params = new URLSearchParams(query);

  return params.get('section');
}
