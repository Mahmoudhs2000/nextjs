// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
import './globals.css';
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import 'dayjs/locale/ar';
import  '../theme/style/mantine-override.css';

export default function RootLayout({children}) {
  return children;
}