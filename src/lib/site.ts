/**
 * The same repository is deployed to two Vercel projects:
 * - the brand project (default)
 * - the catering project (VITE_SITE=catering)
 */
export const isCateringSite =
  import.meta.env.VITE_SITE?.trim().toLowerCase() === 'catering';

export const cateringHomePath = isCateringSite ? '/' : '/ketering';
