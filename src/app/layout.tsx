import type { Metadata } from 'next';
import { Bebas_Neue, Rajdhani } from 'next/font/google';
import './globals.css';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import ScrollProgressBtn from '@/components/scroll-progress-btn';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'], // You can add other weights if needed
  variable: '--font-bebas',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
});

export const metadata: Metadata = {
  title: {
    default: 'électricien Perpignan',
    template: '%s | électricien Perpignan',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${rajdhani.variable}`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollProgressBtn />
      </body>
    </html>
  );
}
