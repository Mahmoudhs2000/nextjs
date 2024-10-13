import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // math all valid pathnames to be localaized and prefixed wit local if it is not there
    matcher: [
        // Enable a redirect to a matching locale at the root
        '/',
    
        // Set a cookie to remember the previous locale for
        // all requests that have a locale prefix
        '/(ar|en)/:path*',
    
        // Enable redirects that add missing locales
        // (e.g. `/pathnames` -> `/en/pathnames`)
        '/((?!api|_next|_vercel|.*\\..*).*)'
      ],
};