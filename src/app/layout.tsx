import type { Metadata } from 'next';
import { Inter_Tight, Poppins } from 'next/font/google';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'CarSprint',
  description: 'Showcase inventory and capture leads with a playful, single-page experience.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${poppins.variable} antialiased`}>
        <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'none' }}>
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}