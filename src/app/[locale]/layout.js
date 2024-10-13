import AppLayout from "@/components/layout";
import { ColorSchemeScript, DirectionProvider, MantineProvider } from '@mantine/core';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import { theme } from "@/theme";

export const metadata = {
  title: "Website Core",
  description: "Prokoders website core",
};

export default async function RootLayout({ children }) {
  
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MantineProvider defaultColorScheme="light" theme={theme} >
            <DirectionProvider  initialDirection={locale === 'ar' ? 'rtl' : 'ltr'} >
              <AppLayout>
                {children}
              </AppLayout>
            </DirectionProvider>
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
