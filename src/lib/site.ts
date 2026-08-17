/**
 * The same repository is deployed to two Vercel projects:
 * - the brand project (default)
 * - the catering project (VITE_SITE=catering)
 */
export const isCateringSite =
  import.meta.env.VITE_SITE?.trim().toLowerCase() === 'catering';

export const CATERING_ORIGIN = 'https://catering.sushipanda.rs';

export const cateringUrl = (path = '/') =>
  `${CATERING_ORIGIN}${path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`}`;

// The catering experience lives on its own subdomain. In the catering build
// paths stay relative; on the brand site they must cross to that subdomain.
export const cateringHomePath = isCateringSite ? '/' : cateringUrl('/');
