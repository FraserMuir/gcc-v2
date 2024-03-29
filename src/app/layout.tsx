import type { Metadata } from 'next';
import { Libre_Baskerville, Open_Sans } from 'next/font/google';

import '../globals.css';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${libreBaskerville.variable} font-sans`}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Root;
