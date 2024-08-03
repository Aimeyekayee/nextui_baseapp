// layout.tsx
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import getRequestConfig from "@/i18n";
import { siteConfig } from "@/config/site";
import { fontSans, fontSansJp, fontSansThai } from "@/config/fonts";
import { locales } from "@/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: (typeof locales)[number] };
}) {
  const { messages } = await getRequestConfig({ locale });
  let fontClass = fontSans.variable;

  switch (locale) {
    case "en":
      fontClass = fontSans.variable;
      break;
    case "th":
      fontClass = fontSansThai.variable;
      break;
    case "jp":
      fontClass = fontSansJp.variable;
      break;
    default:
      break;
  }

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={clsx("bg-background antialiased", fontClass)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <Toaster position="top-center"/>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
