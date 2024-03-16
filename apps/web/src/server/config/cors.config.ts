import type {CorsOptions} from 'cors';

export const corsAllowedOrigins: string[] = [
  // previews
  '.+\\-lex5or0so-sivanwol.vercel.app',
  // for local development
  'localhost',
];

export const getCorsWhitelistOriginRegexp = (allowedOrigins?: string[]) => {
  const origins = allowedOrigins ?? corsAllowedOrigins;
  return new RegExp(
    `^https?://(([^/])+\\.)?(${origins.join('|')})(\\:\\d+)?$`,
    'i'
  );
};

type CorsDefaultOptions = Pick<CorsOptions, 'maxAge'>;

export const corsDefaultOptions: CorsDefaultOptions = {
  maxAge: 3600,
};