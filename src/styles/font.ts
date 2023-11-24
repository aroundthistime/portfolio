/* eslint-disable camelcase */
import {
  Playfair_Display,
  Righteous,
  Noto_Serif_KR,
  Ysabeau_Office,
} from 'next/font/google';

export const playfairDisplayFont = Playfair_Display({
  subsets: ['latin'],
});

export const righteousFont = Righteous({
  subsets: ['latin'],
  weight: '400',
});

export const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  weight: '500',
});

export const ysabeauOfficeFont = Ysabeau_Office({
  subsets: ['latin'],
  style: 'italic',
  display: 'swap',
});
