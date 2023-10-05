import { Fira_Mono as FontMono, Poppins as FontSans, Roboto_Slab, Roboto, Inter } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
});

export const fontRoboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
});

export const fontRobotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['400', '500', '700'],
});


export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700'],
});