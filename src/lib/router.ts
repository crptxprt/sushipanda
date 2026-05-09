export function navigate(path: string) {
  window.location.hash = path === '/' ? '' : path;
  window.scrollTo({ top: 0 });
}

export function getCurrentPath(): string {
  const hash = window.location.hash;
  if (!hash || hash === '#') return '/';
  return hash.startsWith('#') ? hash.slice(1) : hash;
}
