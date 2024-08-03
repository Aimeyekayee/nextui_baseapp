import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Noto_Sans_Thai as FontSansThai,
  Noto_Sans_JP as FontSansJp,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSansThai = FontSansThai({
  subsets: ["latin","thai"], // Ensure thai subset if supported
  variable: "--font-sans-thai",
});

// Japanese-specific sans-serif font
export const fontSansJp = FontSansJp({
  subsets: ["latin",], // Ensure japanese subset if supported
  variable: "--font-sans-jp",
});
